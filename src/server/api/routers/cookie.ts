import { getCookieConsent, InternalServerError } from '@/lib/utils';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { serialize } from 'cookie';
import { z } from 'zod';

type CreateConsentReturn =
  | {
      status: 'success';
      title: 'Lyckades!';
      message: 'Skapade en samtyckes cookie.';
    }
  | never;

export const cookieRouter = createTRPCRouter({
  createConsent: publicProcedure
    .input(z.object({ hasAccepted: z.boolean() }))
    .mutation(({ ctx, input }): CreateConsentReturn => {
      try {
        const consentCookie = serialize('cc', input.hasAccepted.toString(), {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          maxAge: 24 * 60 * 60 * 365,
          path: '/',
        });
        ctx.resHeaders.set('Set-Cookie', consentCookie);

        return {
          status: 'success',
          title: 'Lyckades!',
          message: 'Skapade en samtyckes cookie.',
        };
      } catch {
        throw new InternalServerError();
      }
    }),

  getConsent: publicProcedure.query(async () => await getCookieConsent()),
});
