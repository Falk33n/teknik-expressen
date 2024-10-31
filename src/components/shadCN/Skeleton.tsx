import { cn } from '@/helpers';
import type { HTMLAttributes } from 'react';

/**
 * Loading placeholder component.
 */
export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      aria-hidden
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  );
};

Skeleton.displayName = 'Skeleton';
