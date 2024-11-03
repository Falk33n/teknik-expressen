import { cn } from '@/helpers';
import NextLink from 'next/link';
import { forwardRef, type LinkHTMLAttributes } from 'react';

/**
 * Basic Next Link component, but with secure rel value
 */
export const Link = forwardRef<
  HTMLAnchorElement,
  Omit<LinkHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
  }
>(({ href, target, rel, children, className, ...props }, ref) => {
  return (
    <NextLink
      ref={ref}
      href={href}
      target={target}
      rel={(rel ?? target === '_blank') ? 'noopener' : undefined}
      className={cn(className)}
      {...props}
    >
      {children}
    </NextLink>
  );
});

Link.displayName = 'Link';
