import { ConflictError, generateSaltHash, getCookieConsent } from '@/lib';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
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
      const { db, req } = ctx;
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
        db.user.findUnique({ where: { email } }),
        db.user.findUnique({ where: { phoneNumber } }),
      ]);
      if (existingEmail || existingPhoneNumber) {
        throw new ConflictError('Email or phone number is already in use');
      }

      const newUser = await db.user.create({
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

      const { salt, hashedPassword } = await generateSaltHash(password);

      const consent = getCookieConsent(req);
      const isConsentGiven = consent !== null && consent ? true : false;

      await Promise.all([
        db.password.create({
          data: {
            userId: newUser.id,
            salt,
            hashedPassword,
          },
        }),
        db.cookieConsent.create({
          data: {
            userId: newUser.id,
            consentGiven: isConsentGiven,
          },
        }),
      ]);

      return {
        message: 'Successfully created user',
      };
    }),
});
