import { getAuth, verifyPassword } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { z } from 'zod';

export const authRouter = createTRPCRouter({
  createAuth: publicProcedure
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

      if (!user) {
        throw new TRPCError({
          message: 'Invalid email or password',
          code: 'UNAUTHORIZED',
        });
      }

      const [passwordEntry, cookieConsent] = await Promise.all([
        ctx.db.password.findUnique({ where: { userId: user.id } }),
        ctx.db.cookieConsent.findUnique({ where: { userId: user.id } }),
      ]);

      if (!passwordEntry) {
        throw new TRPCError({
          message: 'Invalid email or password',
          code: 'UNAUTHORIZED',
        });
      }

      const isValidPassword = await verifyPassword(
        password,
        passwordEntry.salt,
        passwordEntry.hashedPassword,
      );

      if (!isValidPassword) {
        throw new TRPCError({
          message: 'Invalid email or password',
          code: 'UNAUTHORIZED',
        });
      }

      const allowRememberMe = rememberMe && cookieConsent?.consentGiven;
      const tokenExpiration = allowRememberMe ? '30d' : '2h';
      const cookieExpiration = allowRememberMe
        ? 30 * 24 * 60 * 60
        : 2 * 60 * 60;

      const key = process.env.SECRET_JWT_KEY as string;

      const token = sign({ userId: user.id }, key, {
        expiresIn: tokenExpiration,
      });

      const authCookie = serialize('ac', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: cookieExpiration,
        path: '/',
      });

      ctx.resHeaders.set('Set-Cookie', authCookie);

      return { message: 'Successfully created user authentication session' };
    }),

  getAuth: publicProcedure.query(({ ctx }) => getAuth(ctx)),
});
