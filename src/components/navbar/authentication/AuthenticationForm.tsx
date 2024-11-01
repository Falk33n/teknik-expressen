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
import {
  LOGIN_FIELDS,
  LOGIN_SCHEMA,
  REGISTER_FIELD,
  REGISTER_SCHEMA,
} from '@/constants';
import type { AuthenticationFieldProps, AuthenticationProps } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const AuthenticationForm = ({
  component: activeComponent,
}: AuthenticationProps) => {
  const submitText =
    activeComponent === 'login' ? 'Logga in' : 'Registrera dig';
  const schema = activeComponent === 'login' ? LOGIN_SCHEMA : REGISTER_SCHEMA;
  const fields: AuthenticationFieldProps[] = [
    ...LOGIN_FIELDS,
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
