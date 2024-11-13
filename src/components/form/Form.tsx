'use client';

import { Label } from '@/components';
import { cn } from '@/lib';
import { Slot } from '@radix-ui/react-slot';
import { type ComponentProps, createContext, useContext, useId } from 'react';
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

export const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  ...props
}: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext.Provider value={{ name: name }}>
    <Controller name={name} {...props} />
  </FormFieldContext.Provider>
);
FormField.displayName = 'FormField';

export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { id } = itemContext;

  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

type FormItemProps = ComponentProps<'div'>;

export const FormItem = ({ className, ...props }: FormItemProps) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
};
FormItem.displayName = 'FormItem';

type FormLabelProps = ComponentProps<typeof Label>;

export const FormLabel = ({ className, ...props }: FormLabelProps) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};
FormLabel.displayName = 'FormLabel';

type FormControlProps = ComponentProps<typeof Slot>;

export const FormControl = ({ ...props }: FormControlProps) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};
FormControl.displayName = 'FormControl';

type FormDescriptionProps = ComponentProps<'p'>;

export const FormDescription = ({
  className,
  ...props
}: FormDescriptionProps) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={cn('text-[0.8rem] text-muted-foreground', className)}
      {...props}
    />
  );
};
FormDescription.displayName = 'FormDescription';

type FormMessageProps = ComponentProps<'p'>;

export const FormMessage = ({
  className,
  children,
  ...props
}: FormMessageProps) => {
  const { error, formMessageId } = useFormField();

  const body = error ? String(error?.message) : children;

  if (!body) return null;
  return (
    <p
      id={formMessageId}
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  );
};
FormMessage.displayName = 'FormMessage';
