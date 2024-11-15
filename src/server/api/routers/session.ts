import {
  getCookieConsent,
  getSecretJwtKey,
  getSession,
  InternalServerError,
  UnauthorizedError,
  verifyPassword,
} from '@/lib/utils';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { serialize } from 'cookie';
import { SignJWT } from 'jose';
import { z } from 'zod';

type CreateSessionReturn =
  | Promise<{
      status: 'success' | 'unauthorized';
      title: 'Lyckades!' | 'Misslyckades!';
      message: 'Felaktig e-postadress eller lösenord.' | 'Skapade en session.';
    }>
  | never;

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
    .mutation(async ({ ctx, input }): CreateSessionReturn => {
      try {
        const user = await ctx.db.user.findUnique({
          where: {
            email: input.email,
          },
        });
        if (!user) {
          throw new UnauthorizedError('Felaktig e-postadress eller lösenord');
        }

        const passwordEntry = await ctx.db.password.findUnique({
          where: { userId: user.id },
        });
        if (!passwordEntry) {
          throw new UnauthorizedError('Felaktig e-postadress eller lösenord');
        }

        const isValidPassword = await verifyPassword(
          input.password,
          passwordEntry.salt,
          passwordEntry.hashedPassword,
        );
        if (!isValidPassword) {
          throw new UnauthorizedError('Felaktig e-postadress eller lösenord');
        }

        const cookieConsent = await getCookieConsent();
        const allowRememberMe = cookieConsent.hasConsented && input.rememberMe;

        const tokenExpiration = allowRememberMe ? '30d' : '2h';
        const cookieExpiration = allowRememberMe
          ? 30 * 24 * 60 * 60
          : 2 * 60 * 60;

        const { jwtKey } = await getSecretJwtKey();
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
          status: 'success',
          title: 'Lyckades!',
          message: 'Skapade en session.',
        };
      } catch (error) {
        if (error instanceof UnauthorizedError) {
          return {
            status: 'unauthorized',
            title: 'Misslyckades!',
            message: 'Felaktig e-postadress eller lösenord.',
          };
        }

        throw new InternalServerError();
      }
    }),

  getSession: publicProcedure.query(async () => await getSession()),
});
