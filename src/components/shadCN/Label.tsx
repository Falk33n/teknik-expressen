import { cn, labelVariants } from '@/helpers';
import type { LabelProps, LabelType } from '@/types';
import * as LabelPrimitive from '@radix-ui/react-label';
import { forwardRef } from 'react';

export const Label = forwardRef<LabelType, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
      />
    );
  }
);

Label.displayName = LabelPrimitive.Root.displayName;
