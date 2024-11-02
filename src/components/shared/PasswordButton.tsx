import { Button } from '@/components/shadcn';
import { cn } from '@/helpers';
import type { PasswordButtonProps } from '@/types';
import { forwardRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export const PasswordButton = forwardRef<
  HTMLButtonElement,
  PasswordButtonProps
>(({ ariaControls, isPasswordVisible, className, ...props }, ref) => {
  const Icon = isPasswordVisible ? FaEyeSlash : FaEye;
  const text = isPasswordVisible ? 'Dölj lösenordet' : 'Visa lösenordet';

  return (
    <Button
      ref={ref}
      aria-live='polite'
      aria-controls={ariaControls}
      aria-label={text}
      type='button'
      size='sm'
      className={cn('text-xs font-medium', className)}
      variant='ghost'
      {...props}
    >
      <Icon aria-hidden />
      {text}
    </Button>
  );
});

PasswordButton.displayName = 'PasswordButton';
