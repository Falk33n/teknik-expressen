'use client';

import {
  Button,
  Checkbox,
  CheckboxWithText,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components';
import { useCreateAuth } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { z } from 'zod';

const LOGIN_SCHEMA = z.object({
  email: z
    .string({
      required_error: 'Obligatorisk.',
    })
    .email({
      message: 'Var vänlig och ange en giltig e-postadress.',
    })
    .trim(),
  password: z
    .string({
      required_error: 'Obligatorisk.',
    })
    .min(10, { message: 'Var vänlig och ange ett lösenord.' })
    .trim(),
  rememberMe: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof LOGIN_SCHEMA>;

type FieldProps = {
  id: 'email' | 'password' | 'rememberMe';
  type?: 'email' | 'password';
  autoComplete?: 'email' | 'current-password';
  label: string;
  placeholder?: string;
  description: string;
  Component: typeof Input | typeof Checkbox;
};

const FIELDS: FieldProps[] = [
  {
    id: 'email',
    label: 'E-postadress',
    type: 'email',
    placeholder: 'exempel@exempel.se',
    autoComplete: 'email',
    description: 'Ange din e-postadress',
    Component: Input,
  },
  {
    id: 'password',
    label: 'Lösenord',
    type: 'password',
    placeholder: '******',
    autoComplete: 'current-password',
    description: 'Ange ditt lösenord',
    Component: Input,
  },
  {
    id: 'rememberMe',
    label: 'Kom ihåg mig',
    description: 'Kom ihåg mina inloggninsuppgifter på den här enheten',
    Component: Checkbox,
  },
];

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { createAuth } = useCreateAuth();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LOGIN_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleSubmit = async (values: LoginSchemaType) => {
    await createAuth.mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
        {FIELDS.map(
          (
            {
              id,
              label,
              placeholder,
              type,
              autoComplete,
              description,
              Component,
            },
            i,
          ) => (
            <FormField
              key={i}
              control={form.control}
              name={id}
              render={({ field }) => {
                const isPasswordField = id === 'password';
                const isCheckbox = Component === Checkbox;
                const Icon = isPasswordVisible ? FaEyeSlash : FaEye;

                return (
                  <FormItem className='relative'>
                    {!isCheckbox && <FormLabel htmlFor={id}>{label}</FormLabel>}

                    <FormControl>
                      {isCheckbox ? (
                        <CheckboxWithText
                          label={label}
                          id={id}
                          checked={!!field.value}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                          onCheckedChange={field.onChange}
                        />
                      ) : (
                        <Input
                          id={id}
                          placeholder={placeholder}
                          type={
                            isPasswordField && isPasswordVisible ? 'text' : type
                          }
                          autoComplete={autoComplete}
                          {...field}
                          value={
                            typeof field.value === 'string' ? field.value : ''
                          }
                        />
                      )}
                    </FormControl>

                    {isPasswordField && (
                      <Button
                        aria-live='polite'
                        type='button'
                        size='sm'
                        variant='ghost'
                        aria-controls='password'
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
                        className='absolute -top-2.5 right-0 py-0'
                      >
                        <Icon aria-hidden className='scale-95' />
                        {isPasswordVisible ? 'Dölj' : 'Visa'} lösenordet
                      </Button>
                    )}

                    <FormDescription className='sr-only'>
                      {description}
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          ),
        )}

        <Button type='submit'>Logga in</Button>
      </form>
    </Form>
  );
};
LoginForm.displayName = 'LoginForm';