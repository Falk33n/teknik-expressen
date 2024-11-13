'use client';

import { RadixSeparator } from '@/components';
import { cn } from '@/lib';
import type { ComponentProps } from 'react';

type SeparatorProps = ComponentProps<typeof RadixSeparator>;

export const Separator = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) => (
  <RadixSeparator
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border dark:bg-background/30',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className,
    )}
    {...props}
  />
);
Separator.displayName = RadixSeparator.displayName;
