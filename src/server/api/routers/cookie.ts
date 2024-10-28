import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';

export const cookieRouter = createTRPCRouter({
  createConsent: publicProcedure
    .input(z.object({ hasAccepted: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.db) {
        throw new Error('Database context not found');
      } else if (!ctx.db.cookieConsent) {
        throw new Error('CookieConsent model not found in database');
      }

      ctx.headers.set(
        'Set-Cookie',
        `accept=${input.hasAccepted}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=31536000;`
      );
      return ctx.db.cookieConsent.create({
        data: {
          consentGiven: input.hasAccepted,
        },
      });
    }),

  getConsent: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.cookieConsent.findMany();
  }),
});
