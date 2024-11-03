import { verifyPassword } from '@/helpers';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { serialize } from 'cookie';
import * as jwt from 'jsonwebtoken';
import { z } from 'zod';

export const authenticationRouter = createTRPCRouter({
  createAuthentication: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        rememberMe: z.boolean().default(false),
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

      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });
      if (!user) {
        throw new TRPCError({
          message: 'Failed to find User row',
          code: 'NOT_FOUND',
        });
      }

      const password = await ctx.db.password.findUnique({
        where: {
          userId: user.id,
        },
      });
      if (!password) {
        throw new TRPCError({
          message: 'Failed to find Password row',
          code: 'NOT_FOUND',
        });
      }

      const isValidPassword = await verifyPassword(
        input.password,
        password.salt,
        password.hashedPassword
      );
      if (!isValidPassword) {
        throw new TRPCError({
          message: 'Password does not match',
          code: 'UNAUTHORIZED',
        });
      }

      const cookieConsent = await ctx.db.cookieConsent.findUnique({
        where: {
          userId: user.id,
        },
      });
      if (!cookieConsent) {
        throw new TRPCError({
          message: 'Failed to find CookieConsent row',
          code: 'NOT_FOUND',
        });
      }

      const key: string | undefined = process.env.SECRET_JWT_KEY;
      if (!key) {
        throw new TRPCError({
          message: 'Something went wrong',
          code: 'INTERNAL_SERVER_ERROR',
        });
      }

      // Signs a secure token for the user
      const tokenExpiration: string = input.rememberMe ? '30d' : '2h';
      const token: string = jwt.sign({ userId: user.id }, key, {
        expiresIn: tokenExpiration,
      });

      // 30 days or 2 hours
      const cookieExpiration: number = input.rememberMe
        ? 30 * 24 * 60 * 60
        : 2 * 60 * 60;
      // creates the authentication cookie with the value of the token,
      // which expires in 30 days or 2 hours.
      // 'ac' = authentication cookie
      const authCookie: string = serialize('ac', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: cookieExpiration,
        path: '/',
      });
      ctx.resHeaders.set('Set-Cookie', authCookie);

      return 'User is authenticated';
    }),
});
