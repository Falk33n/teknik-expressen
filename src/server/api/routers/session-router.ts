import {
  getSecretJwtKey,
  getSession,
  handleUnauthorized,
  verifyPassword,
} from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { serialize } from 'cookie';
import { SignJWT } from 'jose';
import { z } from 'zod';

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
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });
      if (!user) {
        return handleUnauthorized(
          'Felaktig e-postadress eller lösenord',
          false,
        );
      }

      const passwordEntry = await ctx.db.password.findUnique({
        where: { userId: user.id },
      });
      if (!passwordEntry) {
        return handleUnauthorized(
          'Felaktig e-postadress eller lösenord',
          false,
        );
      }

      const isValidPassword = await verifyPassword(
        input.password,
        passwordEntry.salt,
        passwordEntry.hashedPassword,
      );
      if (!isValidPassword) {
        return handleUnauthorized(
          'Felaktig e-postadress eller lösenord',
          false,
        );
      }

      const tokenExpiration = input.rememberMe ? '30d' : '2h';
      const cookieExpiration = input.rememberMe
        ? 30 * 24 * 60 * 60
        : 2 * 60 * 60;

      const { jwtKey } = getSecretJwtKey();
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
        message: 'Lyckades skapa en session',
      };
    }),

  getSession: publicProcedure.query(
    async ({ ctx }) => await getSession(ctx.req),
  ),
});
