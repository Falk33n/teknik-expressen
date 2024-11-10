import { cn } from '@/lib';
import Next_Link from 'next/link';
import { forwardRef, type LinkHTMLAttributes } from 'react';

type LinkType = HTMLAnchorElement;
export type LinkProps = Omit<LinkHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  resetClassName?: boolean;
};

export const Link = forwardRef<LinkType, LinkProps>(
  (
    {
      href,
      target,
      rel,
      children,
      className,
      resetClassName = false,
      ...props
    },
    ref,
  ) => (
    <Next_Link
      ref={ref}
      href={href}
      target={target}
      rel={(rel ?? target === '_blank') ? 'noopener' : undefined}
      className={cn(
        resetClassName
          ? ''
          : 'underline-offset-2 transition-colors hover:text-primary hover:underline hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
        className,
      )}
      {...props}
    >
      {children}
    </Next_Link>
  ),
);
Link.displayName = 'Link';
