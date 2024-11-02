import { Button } from '@/components/shadcn';
import type { PasswordButtonProps } from '@/types';
import { forwardRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export const PasswordButton = forwardRef<
  HTMLButtonElement,
  PasswordButtonProps
>(({ ariaControls, isPasswordVisible, ...props }, ref) => {
  const Icon = isPasswordVisible ? FaEye : FaEyeSlash;
  const ariaLabel = isPasswordVisible ? 'Dölj lösenordet' : 'Visa lösenordet';

  return (
    <Button
      ref={ref}
      aria-live='polite'
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      type='button'
      size='icon'
      variant='ghost'
      {...props}
    >
      <Icon aria-hidden />
    </Button>
  );
});

PasswordButton.displayName = 'PasswordButton';
