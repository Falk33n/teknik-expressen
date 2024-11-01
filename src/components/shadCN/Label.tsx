import { cn } from '@/helpers';
import type { LabelProps, LabelType } from '@/types';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

export const labelVariants = cva(
  'peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed'
);

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
