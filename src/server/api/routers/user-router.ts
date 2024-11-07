import { generateSaltHash, getCookieConsent } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        fullName: z.string().min(1).trim(),
        streetAddress: z.string().min(1).trim(),
        postalCode: z.string().min(1).trim(),
        city: z.string().min(1).trim(),
        country: z.string().min(1).trim(),
        email: z.string().email().trim(),
        phoneNumber: z
          .string()
          .trim()
          .regex(/^\+?[1-9]\d{1,14}$/),
        password: z
          .string()
          .trim()
          .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const {
        email,
        fullName,
        city,
        country,
        password,
        phoneNumber,
        postalCode,
        streetAddress,
      } = input;

      const [existingEmail, existingPhoneNumber] = await Promise.all([
        ctx.db.user.findUnique({ where: { email } }),
        ctx.db.user.findUnique({ where: { phoneNumber } }),
      ]);

      if (existingEmail || existingPhoneNumber) {
        throw new TRPCError({
          message: 'Email or phone number is already in use',
          code: 'CONFLICT',
        });
      }

      const { salt, hashedPassword } = await generateSaltHash(password);

      const isConsentGiven = getCookieConsent(ctx);

      try {
        const user = await ctx.db.$transaction(async (prisma) => {
          const newUser = await prisma.user.create({
            data: {
              fullName,
              streetAddress,
              postalCode: postalCode.replace(/\s+/g, ''),
              city,
              country,
              email,
              phoneNumber,
            },
          });

          await prisma.password.create({
            data: {
              userId: newUser.id,
              salt,
              hashedPassword,
            },
          });

          await prisma.cookieConsent.create({
            data: {
              userId: newUser.id,
              consentGiven: isConsentGiven.hasAccepted === true ? true : false,
            },
          });

          return newUser;
        });

        return { message: 'User successfully created', userId: user.id };
      } catch {
        throw new TRPCError({
          message: 'Internal server error',
          code: 'INTERNAL_SERVER_ERROR',
        });
      }
    }),
});
