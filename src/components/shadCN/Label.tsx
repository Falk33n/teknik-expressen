import { cn, labelVariants } from '@/helpers';
import type { LabelProps, LabelType } from '@/types';
import { Label as RadixLabel } from '@radix-ui/react-label';
import { forwardRef } from 'react';

export const Label = forwardRef<LabelType, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixLabel
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
      />
    );
  }
);

Label.displayName = RadixLabel.displayName;
