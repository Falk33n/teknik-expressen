import { cn } from '@/lib';
import type { HTMLAttributes } from 'react';

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div
    aria-hidden
    className={cn('animate-pulse rounded-md bg-primary/10', className)}
    {...props}
  />
);
Skeleton.displayName = 'Skeleton';
