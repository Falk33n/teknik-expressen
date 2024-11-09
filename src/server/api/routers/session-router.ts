import {
  getSecretJwtKey,
  getSession,
  UnauthorizedError,
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
      const { resHeaders, db } = ctx;
      const { email, password, rememberMe } = input;

      const user = await db.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        throw new UnauthorizedError('Felaktig e-postadress eller lösenord');
      }

      const passwordEntry = await db.password.findUnique({
        where: { userId: user.id },
      });
      if (!passwordEntry) {
        throw new UnauthorizedError('Felaktig e-postadress eller lösenord');
      }

      const isValidPassword = await verifyPassword(
        password,
        passwordEntry.salt,
        passwordEntry.hashedPassword,
      );
      if (!isValidPassword) {
        throw new UnauthorizedError('Felaktig e-postadress eller lösenord');
      }

      const tokenExpiration = rememberMe ? '30d' : '2h';
      const cookieExpiration = rememberMe ? 30 * 24 * 60 * 60 : 2 * 60 * 60;

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
      resHeaders.set('Set-Cookie', sessionCookie);

      return {
        message: 'Lyckades skapa en session',
      };
    }),

  getSession: publicProcedure.query(async ({ ctx }) => {
    const { req } = ctx;
    return await getSession(req);
  }),
});
