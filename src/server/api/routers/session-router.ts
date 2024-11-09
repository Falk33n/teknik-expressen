import { getSession, handleServerError, verifyPassword } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { serialize } from 'cookie';
import { SignJWT } from 'jose';
import { z } from 'zod';

const handleUnauthorized = () => {
  throw new TRPCError({
    message: 'Invalid email or password',
    code: 'UNAUTHORIZED',
  });
};

export const sessionRouter = createTRPCRouter({
  createSession: publicProcedure
    .input(
      z.object({
        email: z.string().email().trim(),
        password: z
          .string()
          .trim()
          .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/),
        rememberMe: z.boolean().default(false),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { email, password, rememberMe } = input;

      const user = await ctx.db.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) return handleUnauthorized();

      const passwordEntry = await ctx.db.password.findUnique({
        where: { userId: user.id },
      });
      if (!passwordEntry) return handleUnauthorized();

      const isValidPassword = await verifyPassword(
        password,
        passwordEntry.salt,
        passwordEntry.hashedPassword,
      );
      if (!isValidPassword) return handleUnauthorized();

      const tokenExpiration = rememberMe ? '30d' : '2h';
      const cookieExpiration = rememberMe ? 30 * 24 * 60 * 60 : 2 * 60 * 60;

      const processedKey = process.env.SECRET_JWT_KEY;
      if (!processedKey) return handleServerError();

      const jwtKey = new TextEncoder().encode(processedKey);
      const jwtToken = await new SignJWT({
        userId: user.id,
      })
        .setProtectedHeader({
          alg: 'HS256',
        })
        .setExpirationTime(tokenExpiration)
        .sign(jwtKey);

      const sessionCookie = serialize('sc', jwtToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: cookieExpiration,
        path: '/',
      });
      ctx.resHeaders.set('Set-Cookie', sessionCookie);

      return {
        ok: true,
        message: 'Successfully created session',
      };
    }),

  getSession: publicProcedure.query(
    async ({ ctx }) => await getSession(ctx.req),
  ),
});
