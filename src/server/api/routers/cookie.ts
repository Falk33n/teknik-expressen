import { createTRPCRouter, publicProcedure } from '@/server/api';
import { TRPCError } from '@trpc/server';
import { serialize } from 'cookie';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { z } from 'zod';

export const cookieRouter = createTRPCRouter({
  /**
   * Creates both a cookie and a row in the database table `CookieConsent`.
   * Which enables the option to make specific changes to the application depending
   * on what the user has consented to.
   */
  createConsent: publicProcedure
    .input(z.object({ isAccepted: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      // Throw errors if database or table is not found
      if (!ctx.db) {
        throw new TRPCError({
          message: 'Database context not found',
          code: 'NOT_FOUND',
        });
      } else if (!ctx.db.cookieConsent) {
        throw new TRPCError({
          message: 'CookieConsent model not found in database',
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
          maxAge: 24 * 60 * 60 * 365,
          path: '/',
        }
      );
      ctx.resHeaders.set('Set-Cookie', consentCookie);

      return ctx.db.cookieConsent.create({
        data: {
          consentGiven: input.isAccepted,
        },
      });
    }),

  /**
   * Retrieves the consent cookie and returns the value as a
   * boolean OR undefined
   */
  getConsent: publicProcedure.query(async ({ ctx }) => {
    const consetCookie: RequestCookie | undefined = ctx.req.cookies.get('cc'); // 'cc' = cookie consent
    if (!consetCookie) {
      throw new TRPCError({
        message: 'Consent cookie not found',
        code: 'NOT_FOUND',
      });
    } else if (consetCookie.value === 'true') {
      return true;
    } else {
      return false;
    }
  }),
});
