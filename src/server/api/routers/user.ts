import {
  ConflictError,
  generateSaltHash,
  getCookieConsent,
  InternalServerError,
} from '@/lib/utils';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

import { z } from 'zod';

type CreateUserReturn =
  | Promise<{
      status: 'success' | 'conflict';
      title: 'Lyckades!' | 'Misslyckades!';
      message:
        | 'E-postadress eller telefonnummer används redan.'
        | 'Användaren har skapats.';
    }>
  | never;

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
    .mutation(async ({ ctx, input }): CreateUserReturn => {
      try {
        const [existingEmail, existingPhoneNumber] = await Promise.all([
          ctx.db.user.findUnique({ where: { email: input.email } }),
          ctx.db.user.findUnique({ where: { phoneNumber: input.phoneNumber } }),
        ]);
        if (existingEmail || existingPhoneNumber) {
          throw new ConflictError(
            'E-postadress eller telefonnummer används redan',
          );
        }

        const newUser = await ctx.db.user.create({
          data: {
            fullName: input.fullName,
            streetAddress: input.streetAddress,
            postalCode: input.postalCode.replace(/\s+/g, ''),
            city: input.city,
            country: input.country,
            email: input.email,
            phoneNumber: input.phoneNumber,
          },
        });

        const { salt, hashedPassword } = await generateSaltHash(input.password);

        const consent = await getCookieConsent();
        const isConsentGiven = consent.status === 'success' ? true : false;

        await Promise.all([
          ctx.db.password.create({
            data: {
              userId: newUser.id,
              salt,
              hashedPassword,
            },
          }),
          ctx.db.cookieConsent.create({
            data: {
              userId: newUser.id,
              consentGiven: isConsentGiven,
            },
          }),
        ]);

        return {
          status: 'success',
          title: 'Lyckades!',
          message: 'Användaren har skapats.',
        };
      } catch (error) {
        if (error instanceof ConflictError) {
          return {
            status: 'conflict',
            title: 'Misslyckades!',
            message: 'E-postadress eller telefonnummer används redan.',
          };
        }

        throw new InternalServerError();
      }
    }),
});
