import type { AuthenticationFieldProps } from '@/types';
import { z } from 'zod';

export const LOGIN_SCHEMA = z.object({
  email: z
    .string({
      required_error: 'Obligatorisk.',
    })
    .email({
      message: 'Var vänlig och ange en giltig e-postadress.',
    }),
  password: z
    .string({
      required_error: 'Obligatorisk.',
    })
    .min(8, {
      message: 'Lösenordet måste vara minst 8 tecken långt.',
    }),
});

export const REGISTER_SCHEMA = LOGIN_SCHEMA.extend({
  confirmPassword: z
    .string({
      required_error: 'Obligatorisk.',
    })
    .min(8, {
      message: 'Bekräfta lösenordet måste vara minst 8 tecken långt.',
    }),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: 'custom',
      path: ['confirmPassword'],
      message: 'Lösenorden matchar inte. Vänligen försök igen.',
    });
  }
});

export const LOGIN_FIELDS: AuthenticationFieldProps[] = [
  {
    type: 'email',
    name: 'email',
    label: 'E-post',
    placeholder: 'din-epost@exempel.com',
    description: 'Ange din e-postadress.',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Lösenord',
    placeholder: '******',
    description: 'Ange ditt lösenord.',
  },
];

export const REGISTER_FIELD: AuthenticationFieldProps[] = [
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Bekräfta lösenord',
    placeholder: '******',
    description: 'Bekräfta ditt lösenord.',
  },
];
