'use client';
import { Label } from '@/components/shadcn';
import { cn } from '@/helpers';
import type {
  FormControlProps,
  FormControlType,
  FormFieldContextValue,
  FormItemContextValue,
  FormLabelProps,
  FormLabelType,
} from '@/types';
import { Slot } from '@radix-ui/react-slot';
import {
  createContext,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useId,
} from 'react';
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

export const Form = FormProvider;

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: name }}>
      <Controller
        name={name}
        {...props}
      />
    </FormFieldContext.Provider>
  );
};

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

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

export const FormItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id: string = useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = 'FormItem';

export const FormLabel = forwardRef<FormLabelType, FormLabelProps>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return (
      <Label
        ref={ref}
        className={cn(error && 'text-destructive', className)}
        htmlFor={formItemId}
        {...props}
      />
    );
  }
);

FormLabel.displayName = 'FormLabel';

export const FormControl = forwardRef<FormControlType, FormControlProps>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField();
    return (
      <Slot
        ref={ref}
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
  }
);

FormControl.displayName = 'FormControl';

export const FormDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-[0.8rem] text-muted-foreground', className)}
      {...props}
    />
  );
});

FormDescription.displayName = 'FormDescription';

export const FormMessage = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body: ReactNode = error ? String(error?.message) : children;

  if (!body) return null;
  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-[0.8rem] font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = 'FormMessage';
