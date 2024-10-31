import { cn } from '@/helpers';
import * as NextLink from 'next/link';
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
>(({ href, target, children, className, ...props }, ref) => {
  return (
    <NextLink.default
      ref={ref}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener' : undefined}
      className={cn(className)}
      {...props}
    >
      {children}
    </NextLink.default>
  );
});

Link.displayName = 'Link';
