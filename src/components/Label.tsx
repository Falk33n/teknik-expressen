import { cn } from '@/lib';
import { Label as Radix_Label } from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

const labelVariants = cva(
  'peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed',
);

type LabelType = ElementRef<typeof Radix_Label>;
type LabelProps = ComponentPropsWithoutRef<typeof Radix_Label> &
  VariantProps<typeof labelVariants>;

export const Label = forwardRef<LabelType, LabelProps>(
  ({ className, ...props }, ref) => (
    <Radix_Label
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  ),
);
Label.displayName = Radix_Label.displayName;
