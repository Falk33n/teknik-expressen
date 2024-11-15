import { cn } from '@/lib/utils';
import * as Radix from '@radix-ui/react-separator';
import type { ComponentProps } from 'react';

type SeparatorProps = ComponentProps<typeof Radix.Separator>;

export const Separator = ({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) => (
  <Radix.Separator
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
Separator.displayName = Radix.Separator.displayName;
