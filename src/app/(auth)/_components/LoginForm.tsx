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
import { useCreateSession } from '@/hooks';
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

  const { createSession } = useCreateSession();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LOGIN_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleSubmit = async (values: LoginSchemaType) => {
    await createSession.mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
        {FIELDS.map((field, i) => {
          return (
            <FormField
              key={i}
              control={form.control}
              name={field.id}
              render={({ field: formField }) => {
                const isPasswordField = field.id === 'password';
                const isCheckbox = field.Component === Checkbox;
                const Icon = isPasswordVisible ? FaEyeSlash : FaEye;

                return (
                  <FormItem className='relative sm:max-w-[90%] md:max-w-[600px]'>
                    {!isCheckbox && (
                      <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
                    )}

                    <FormControl>
                      {isCheckbox ? (
                        <CheckboxWithText
                          label={field.label}
                          id={field.id}
                          checked={!!formField.value}
                          onBlur={formField.onBlur}
                          name={formField.name}
                          ref={formField.ref}
                          onCheckedChange={formField.onChange}
                        />
                      ) : (
                        <Input
                          id={field.id}
                          placeholder={field.placeholder}
                          type={
                            isPasswordField && isPasswordVisible
                              ? 'text'
                              : field.type
                          }
                          autoComplete={field.autoComplete}
                          {...formField}
                          value={
                            typeof formField.value === 'string'
                              ? formField.value
                              : ''
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
                      {field.description}
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          );
        })}

        <Button type='submit'>Logga in</Button>
      </form>
    </Form>
  );
};
LoginForm.displayName = 'LoginForm';
