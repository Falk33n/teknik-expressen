import { buttonVariants, cn } from '@/helpers';
import type { ButtonProps } from '@/types';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    // 'Slot' = takes all the props and styles and apply it to the nearest child
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
