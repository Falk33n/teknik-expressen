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
} from '@/components/shadcn';
import type { AuthenticationProps } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
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

const registerSchema = loginSchema
  .extend({
    confirmPassword: z
      .string({
        required_error: 'Obligatorisk.',
      })
      .min(8, {
        message: 'Bekräfta lösenordet måste vara minst 8 tecken långt.',
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

type AuthenticationFieldProps = {
  name: 'email' | 'password' | 'confirmPassword';
  label: string;
  placeholder: string;
  description: string;
};

const loginFields: AuthenticationFieldProps[] = [
  {
    name: 'email',
    label: 'E-post',
    placeholder: 'din-epost@exempel.com',
    description: 'Ange din e-postadress.',
  },
  {
    name: 'password',
    label: 'Lösenord',
    placeholder: '******',
    description: 'Ange ditt lösenord.',
  },
];

const registerField: AuthenticationFieldProps[] = [
  {
    name: 'confirmPassword',
    label: 'Bekräfta lösenord',
    placeholder: '******',
    description: 'Bekräfta ditt lösenord.',
  },
];

export const AuthenticationForm = ({
  component: activeComponent,
}: AuthenticationProps) => {
  const submitText =
    activeComponent === 'login' ? 'Logga in' : 'Registrera dig';
  const schema = activeComponent === 'login' ? loginSchema : registerSchema;
  const fields: AuthenticationFieldProps[] = [
    ...loginFields,
    ...(activeComponent === 'register' ? registerField : []),
  ];

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      ...(activeComponent === 'register' ? { confirmPassword: '' } : {}),
    },
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-8'
      >
        {fields.map((field, i) => (
          <FormField
            key={`authenticationFormField-key-${i}`}
            control={form.control}
            name={field.name}
            render={({ field: renderField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={field.placeholder}
                    {...renderField}
                  />
                </FormControl>
                <FormDescription className='sr-only'>
                  {field.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type='submit'
          className='capitalize'
        >
          {submitText}
        </Button>
      </form>
    </Form>
  );
};

AuthenticationForm.displayName = 'AuthenticationForm';
