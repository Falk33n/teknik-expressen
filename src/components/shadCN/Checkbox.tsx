import { cn } from '@/helpers';
import type { CheckboxProps, CheckboxType } from '@/types';
import {
  Checkbox as RadixCheckbox,
  CheckboxIndicator as RadixCheckboxIndicator,
} from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';

export const Checkbox = forwardRef<CheckboxType, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixCheckbox
        ref={ref}
        className={cn(
          'peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          className
        )}
        {...props}
      >
        <RadixCheckboxIndicator
          className={cn('flex items-center justify-center text-current')}
        >
          <CheckIcon className='size-4' />
        </RadixCheckboxIndicator>
      </RadixCheckbox>
    );
  }
);

Checkbox.displayName = RadixCheckbox.displayName;
