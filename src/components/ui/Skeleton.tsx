import { cn } from '@/lib';
import type { ComponentProps } from 'react';

type SkeletonProps = ComponentProps<'div'>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div
    aria-hidden
    className={cn(
      'animate-pulse rounded-md bg-accent dark:bg-primary/20',
      className,
    )}
    {...props}
  />
);
Skeleton.displayName = 'Skeleton';
