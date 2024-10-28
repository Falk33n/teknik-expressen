import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';

export const cookieRouter = createTRPCRouter({
  createConsent: publicProcedure
    .input(z.object({ hasAccepted: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      i
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
