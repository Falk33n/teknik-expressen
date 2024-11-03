import { generateSaltHash, getCookieConsent } from '@/helpers';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Throw errors if database or table is not found
      if (
        !ctx.db ||
        !ctx.db.user ||
        !ctx.db.password ||
        !ctx.db.cookieConsent
      ) {
        throw new TRPCError({
          message: 'Database not found',
          code: 'NOT_FOUND',
        });
      }

      const newUser = await ctx.db.user.create({
        data: {
          email: input.email,
        },
      });
      if (!newUser) {
        throw new TRPCError({
          message: 'Failed to create User row',
          code: 'INTERNAL_SERVER_ERROR',
        });
      }

      // link salt and hashed password to the new user
      const { salt, hashedPassword } = await generateSaltHash(input.password);
      const newPassword = await ctx.db.password.create({
        data: {
          userId: newUser.id,
          salt,
          hashedPassword,
        },
      });
      if (!newPassword) {
        throw new TRPCError({
          message: 'Failed to create Password row',
          code: 'INTERNAL_SERVER_ERROR',
        });
      }

      // link cookie consent to the new user if cookie is found
      const isConsentGiven: boolean | undefined = await getCookieConsent(ctx);
      const newCookieConsent = await ctx.db.cookieConsent.create({
        data: {
          userId: newUser.id,
          consentGiven: isConsentGiven,
        },
      });
      if (!newCookieConsent) {
        throw new TRPCError({
          message: 'Failed to create CookieConsent row',
          code: 'INTERNAL_SERVER_ERROR',
        });
      }

      // dont send back the salt and hash (for security reasons)
      const passwordReturn = {
        id: newPassword.id,
        userId: newPassword.userId,
        createdAt: newPassword.createdAt,
        updatedAt: newPassword.updatedAt,
      };

      return {
        user: newUser,
        password: passwordReturn,
        cookieConsent: newCookieConsent,
      };
    }),
});
