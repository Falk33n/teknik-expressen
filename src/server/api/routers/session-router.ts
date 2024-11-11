import {
  getSecretJwtKey,
  getSession,
  handleErrorLogs,
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
          status: 200,
          message: 'Lyckades! Session skapad',
          isSessionCreated: true,
        };
      } catch (error) {
        if (error instanceof UnauthorizedError) {
          return {
            status: 401,
            message: `Misslyckades! ${error.message}`,
            isSessionCreated: false,
          };
        }

        throw await handleErrorLogs(ctx.db, error);
      }
    }),

  getSession: publicProcedure.query(
    async ({ ctx }) => await getSession(ctx.req),
  ),
});
