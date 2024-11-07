import { getCookieConsent } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { serialize } from 'cookie';
import { z } from 'zod';

export const cookieConsentRouter = createTRPCRouter({
  createConsent: publicProcedure
    .input(z.object({ hasAccepted: z.boolean() }))
    .mutation(({ ctx, input }) => {
      const { hasAccepted } = input;

      const consentCookie = serialize('cc', hasAccepted.toString(), {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 365,
        path: '/',
      });

      ctx.resHeaders.set('Set-Cookie', consentCookie);

      return { message: 'Successfully created consent cookie' };
    }),

  getConsent: publicProcedure.query(({ ctx }) => getCookieConsent(ctx)),
});
