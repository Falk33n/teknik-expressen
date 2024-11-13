import { InternalServerError } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { z } from 'zod';

type CreateErrorReturn =
  | Promise<{
      status: 'success';
      message: 'Skapade en error logg.';
    }>
  | never;

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
    .mutation(async ({ ctx, input }): CreateErrorReturn => {
      try {
        await ctx.db.errorLog.create({
          data: {
            message: input.message,
            name: input.name,
            statusCode: input.statusCode ?? undefined,
            stack: input.stack ?? undefined,
          },
        });

        return {
          status: 'success',
          message: 'Skapade en error logg.',
        };
      } catch {
        throw new InternalServerError();
      }
    }),
});
