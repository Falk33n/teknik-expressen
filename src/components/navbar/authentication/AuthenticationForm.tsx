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
import { PasswordInput } from '@/components/shared';
import {
  LOGIN_FIELDS,
  LOGIN_SCHEMA,
  REGISTER_FIELD,
  REGISTER_SCHEMA,
} from '@/constants';
import { useAuth } from '@/hooks';
import type {
  AuthenticationFieldProps,
  AuthenticationFormProps,
} from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const AuthenticationForm = ({
  component: activeComponent,
  onAccountSubmit,
}: AuthenticationFormProps) => {
  const submitText =
    activeComponent === 'login' ? 'Logga in' : 'Registrera dig';
  const passwordAutoComplete =
    activeComponent === 'register' ? 'new-password' : 'current-password';

  const schema = activeComponent === 'login' ? LOGIN_SCHEMA : REGISTER_SCHEMA;
  const fields: AuthenticationFieldProps[] = [
    ...LOGIN_FIELDS,
    // adds the confirm password field to the array if used as register component
    ...(activeComponent === 'register' ? REGISTER_FIELD : []),
  ];

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      ...(activeComponent === 'register' ? { confirmPassword: '' } : {}),
    },
  });

  // custom hook to fetch authentication api calls
  const { createAuth, createUser } = useAuth(onAccountSubmit);

  const handleSubmit = (values: z.infer<typeof schema>) => {
    if (activeComponent === 'login') {
      createAuth.mutate(values);
    } else {
      createUser.mutate(values);
    }
  };

  useEffect(() => {
    // reset the form if the active component changes
    form.reset();
    // disabled the independency 'form', since it will cause unneccesary rerenders
    // eslint-disable-next-line
  }, [activeComponent]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='flex-1 space-y-8 max-w-[90%] sm:max-w-[75%]'
      >
        {fields.map((field, i) => {
          const FormInput = field.name === 'email' ? Input : PasswordInput;
          const ariaControls = field.name !== 'email' ? field.name : undefined;
          const autoComplete =
            field.name === 'email' ? field.name : passwordAutoComplete;

          return (
            <FormField
              key={`authenticationFormField-key-${i}`}
              control={form.control}
              name={field.name}
              render={({ field: renderField }) => (
                <FormItem className='relative'>
                  <FormLabel htmlFor={field.name}>{field.label}</FormLabel>

                  <FormControl>
                    <FormInput
                      id={field.name}
                      type={field.type}
                      buttonAriaControls={ariaControls}
                      placeholder={field.placeholder}
                      autoComplete={autoComplete}
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
          );
        })}

        <Button type='submit'>{submitText}</Button>
      </form>
    </Form>
  );
};

AuthenticationForm.displayName = 'AuthenticationForm';
