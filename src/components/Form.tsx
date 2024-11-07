'use client';

import { Label } from '@/components';
import { cn } from '@/lib';
import { Slot } from '@radix-ui/react-slot';
import {
  type ComponentPropsWithoutRef,
  createContext,
  type ElementRef,
  forwardRef,
  type HTMLAttributes,
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

type FormItemType = HTMLDivElement;
type FormItemProps = HTMLAttributes<HTMLDivElement>;

export const FormItem = forwardRef<FormItemType, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = useId();
    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = 'FormItem';

type FormLabelType = ElementRef<typeof Label>;
type FormLabelProps = ComponentPropsWithoutRef<typeof Label>;

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
  },
);
FormLabel.displayName = 'FormLabel';

type FormControlType = ElementRef<typeof Slot>;
type FormControlProps = ComponentPropsWithoutRef<typeof Slot>;

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
  },
);
FormControl.displayName = 'FormControl';

type FormDescriptionType = HTMLParagraphElement;
type FormDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const FormDescription = forwardRef<
  FormDescriptionType,
  FormDescriptionProps
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

type FormMessageType = HTMLParagraphElement;
type FormMessageProps = HTMLAttributes<HTMLParagraphElement>;

export const FormMessage = forwardRef<FormMessageType, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();

    const body = error ? String(error?.message) : children;

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
  },
);
FormMessage.displayName = 'FormMessage';
