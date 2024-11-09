import { getCookieConsent } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { serialize } from 'cookie';
import { z } from 'zod';

export const cookieRouter = createTRPCRouter({
  createConsent: publicProcedure
    .input(z.object({ hasAccepted: z.boolean() }))
    .mutation(({ ctx, input }) => {
      const { resHeaders } = ctx;
      const { hasAccepted } = input;

      const consentCookie = serialize('cc', hasAccepted.toString(), {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 365,
        path: '/',
      });
      resHeaders.set('Set-Cookie', consentCookie);

      return true;
    }),

  getConsent: publicProcedure.query(({ ctx }) => {
    const { req } = ctx;
    return getCookieConsent(req);
  }),
});
