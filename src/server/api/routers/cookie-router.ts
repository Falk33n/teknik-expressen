import { getCookieConsent } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { serialize } from 'cookie';
import { z } from 'zod';

export const cookieRouter = createTRPCRouter({
  createConsent: publicProcedure
    .input(z.object({ hasAccepted: z.boolean() }))
    .mutation(({ ctx, input }) => {
      const consentCookie = serialize('cc', input.hasAccepted.toString(), {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 365,
        path: '/',
      });
      ctx.resHeaders.set('Set-Cookie', consentCookie);

      return {
        status: 200,
        message: 'Lyckades skapa en samtyckes cookie',
        isConsentSaved: true,
      };
    }),

  getConsent: publicProcedure.query(({ ctx }) => getCookieConsent(ctx.req)),
});
