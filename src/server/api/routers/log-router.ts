import { handleErrorLogs } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';

export const logRouter = createTRPCRouter({
  createError: publicProcedure
    .input(
      z.object({
        stack: z.string().optional(),
        message: z.string(),
        name: z.string(),
        statusCode: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.errorLog.create({
          data: {
            message: input.message,
            name: input.name,
            statusCode: input.statusCode,
            stack: input.stack,
          },
        });

        return {
          status: 200,
          message: 'Lyckades! felet har sparats',
          isErrorSaved: true,
        };
      } catch (error) {
        throw await handleErrorLogs(ctx.db, error);
      }
    }),
});
