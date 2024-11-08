import { cn } from '@/lib';
import type { HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

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
