import { getCookieConsent } from '@/helpers';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { serialize } from 'cookie';
import { z } from 'zod';

export const cookieConsentRouter = createTRPCRouter({
  /**
   * Creates a cookie consent,
   * which enables the option to make specific changes to the application depending
   * on what the user has consented to.
   */
  createConsent: publicProcedure
    .input(z.object({ isAccepted: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx) {
        throw new TRPCError({
          message: 'Context not found',
          code: 'NOT_FOUND',
        });
      }

      const consentCookie: string = serialize(
        'cc', // 'cc' = cookie consent
        input.isAccepted.toString(),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 24 * 60 * 60 * 365, // 1 year
          path: '/',
        }
      );
      ctx.resHeaders.set('Set-Cookie', consentCookie);

      return 'Successfully created consent cookie';
    }),

  getConsent: publicProcedure.query(async ({ ctx }) => {
    const isConsentGiven: boolean | undefined = await getCookieConsent(ctx);
    return isConsentGiven;
  }),
});
