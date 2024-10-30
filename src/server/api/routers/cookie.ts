import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { serialize } from 'cookie';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { z } from 'zod';

export const cookieRouter = createTRPCRouter({
  createConsent: publicProcedure
    .input(z.object({ hasAccepted: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
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
        'cc',
        input.hasAccepted.toString(),
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
          consentGiven: input.hasAccepted,
        },
      });
    }),

  getConsent: publicProcedure.query(async ({ ctx }) => {
    const consetCookie: RequestCookie | undefined = ctx.req.cookies.get('cc');
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
