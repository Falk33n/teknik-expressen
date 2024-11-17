import { RadixLabel } from '@/components';

import { cn, cva, type VariantProps } from '@/lib/utils';

import type { ComponentProps } from 'react';

const labelVariants = cva(
  'peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed',
);

type LabelProps = ComponentProps<typeof RadixLabel> &
  VariantProps<typeof labelVariants>;

export const Label = ({ className, ...props }: LabelProps) => (
  <RadixLabel className={cn(labelVariants(), className)} {...props} />
);
Label.displayName = RadixLabel.displayName;
