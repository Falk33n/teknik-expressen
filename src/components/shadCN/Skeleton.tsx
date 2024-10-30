import { cn } from '@/helpers';

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      aria-hidden
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  );
};

Skeleton.displayName = 'Skeleton';
