import { cn } from '@/lib/utils';
import * as Radix from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

const labelVariants = cva(
  'peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed',
);

type LabelProps = ComponentProps<typeof Radix.Label> &
  VariantProps<typeof labelVariants>;

export const Label = ({ className, ...props }: LabelProps) => (
  <Radix.Label className={cn(labelVariants(), className)} {...props} />
);
Label.displayName = Radix.Label.displayName;
