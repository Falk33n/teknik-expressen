'use client';

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components';
import { useCreateUser } from '@/hooks';
import { omitKeys } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { z } from 'zod';

const REGISTER_SCHEMA = z
  .object({
    fullName: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .min(1, { message: 'Var vänlig och ange ditt för-och efternamn.' })
      .trim(),
    streetAddress: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .min(1, { message: 'Var vänlig och ange din gatuadress.' })
      .trim(),
    postalCode: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .min(1, { message: 'Var vänlig och ange ditt postnummer.' })
      .trim(),
    city: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .min(1, { message: 'Var vänlig och ange din stad.' })
      .trim(),
    country: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .min(1, { message: 'Var vänlig och ange ditt land.' })
      .trim(),
    email: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .email({
        message: 'Var vänlig och ange en giltig e-postadress.',
      })
      .trim(),
    phoneNumber: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .trim()
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message:
          'Telefonnumret kan endast bestå av högst 14 siffor samt börja "+".',
      }),
    password: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .trim()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/, {
        message:
          'Lösenordet måste vara minst 10 tecken långt, innehålla en stor bokstav, en liten bokstav och minst en siffra.',
      }),

    confirmPassword: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .trim()
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/, {
        message:
          'Lösenordet måste vara minst 10 tecken långt, innehålla en stor bokstav, en liten bokstav och minst en siffra.',
      }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Lösenorden matchar inte. Vänligen försök igen.',
      });
    }
  });

type RegisterSchemaType = z.infer<typeof REGISTER_SCHEMA>;

type FieldProps = {
  id:
    | 'fullName'
    | 'streetAddress'
    | 'postalCode'
    | 'city'
    | 'country'
    | 'email'
    | 'phoneNumber';
  type: 'text' | 'email' | 'tel';
  autoComplete:
    | 'street-address'
    | 'postal-code'
    | 'country-name'
    | 'home city'
    | 'email'
    | 'name'
    | 'tel';
  label: string;
  placeholder: string;
  description: string;
};

const FIELDS: FieldProps[] = [
  {
    id: 'fullName',
    type: 'text',
    autoComplete: 'name',
    label: 'För- och efternamn',
    placeholder: 'Exempel Exempelsson',
    description: 'Ange ditt för- och efternamn',
  },
  {
    id: 'streetAddress',
    type: 'text',
    autoComplete: 'street-address',
    label: 'Gatuadress',
    placeholder: 'Exempelvägen 9',
    description: 'Ange din gatuadress',
  },
  {
    id: 'postalCode',
    type: 'text',
    autoComplete: 'postal-code',
    label: 'Postnummer',
    placeholder: '123 45',
    description: 'Ange ditt postnummer',
  },
  {
    id: 'city',
    type: 'text',
    autoComplete: 'home city',
    label: 'Stad',
    placeholder: 'Exempelholm',
    description: 'Ange din stad',
  },
  {
    id: 'country',
    type: 'text',
    autoComplete: 'country-name',
    label: 'Land',
    placeholder: 'Exempelia',
    description: 'Ange ditt land',
  },
  {
    id: 'email',
    type: 'email',
    autoComplete: 'email',
    label: 'E-postadress',
    placeholder: 'exempel@exempel.se',
    description: 'Ange din e-postadress',
  },
  {
    id: 'phoneNumber',
    type: 'tel',
    autoComplete: 'tel',
    label: 'Telefonnummer',
    placeholder: '+46123456789',
    description: 'Ange ditt telefonnummer',
  },
];

type PasswordFieldProps = {
  id: 'password' | 'confirmPassword';
  autoComplete: 'new-password' | 'off';
  label: string;
  description: string;
};

const PASSWORD_FIELDS: PasswordFieldProps[] = [
  {
    id: 'password',
    label: 'Lösenord',
    autoComplete: 'new-password',
    description: 'Ange minst 8 tecken för lösenordet',
  },
  {
    id: 'confirmPassword',
    label: 'Bekräfta lösenord',
    autoComplete: 'off',
    description: 'Bekräfta det angivna lösenordet',
  },
];

const passwordVisibility = {
  password: false,
  confirmPassword: false,
};

export const RegisterForm = () => {
  const [visibility, setVisibility] = useState(passwordVisibility);

  const { createUser } = useCreateUser();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(REGISTER_SCHEMA),
    defaultValues: {
      fullName: '',
      streetAddress: '',
      postalCode: '',
      city: '',
      country: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = async (values: RegisterSchemaType) => {
    const newValues = omitKeys(values, 'confirmPassword');
    await createUser.mutateAsync(newValues);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
        {FIELDS.map(
          ({ id, label, type, placeholder, description, autoComplete }, i) => (
            <FormField
              key={i}
              control={form.control}
              name={id}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={id}>{label}</FormLabel>

                  <FormControl>
                    <Input
                      id={id}
                      placeholder={placeholder}
                      type={type}
                      autoComplete={autoComplete}
                      {...field}
                    />
                  </FormControl>

                  <FormDescription className='sr-only'>
                    {description}
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
          ),
        )}

        {PASSWORD_FIELDS.map(({ id, label, autoComplete, description }, i) => (
          <FormField
            key={i}
            control={form.control}
            name={id}
            render={({ field }) => {
              const isVisible = visibility[id];
              const Icon = isVisible ? FaEyeSlash : FaEye;

              return (
                <FormItem className='relative'>
                  <FormLabel htmlFor={id}>{label}</FormLabel>

                  <FormControl>
                    <Input
                      id={id}
                      placeholder='******'
                      type={isVisible ? 'text' : 'password'}
                      autoComplete={autoComplete}
                      {...field}
                    />
                  </FormControl>

                  <Button
                    aria-live='polite'
                    type='button'
                    variant='ghost'
                    size='sm'
                    aria-controls={id}
                    onClick={() =>
                      setVisibility((prev) => ({
                        ...prev,
                        [id]: !prev[id],
                      }))
                    }
                    className='absolute -top-2.5 right-0 py-0'
                  >
                    <Icon aria-hidden className='scale-95' />
                    {isVisible ? 'Dölj' : 'Visa'} lösenordet
                  </Button>

                  <FormDescription className='sr-only'>
                    {description}
                  </FormDescription>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        ))}

        <Button type='submit'>Registrera</Button>
      </form>
    </Form>
  );
};
RegisterForm.displayName = 'RegisterForm';