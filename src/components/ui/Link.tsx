import NextLink from 'next/link';

import { cn } from '@/lib/utils';

import type { ComponentProps } from 'react';

export type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  resetClassName?: boolean;
};

export const Link = ({
  href,
  target,
  rel,
  children,
  className,
  resetClassName = false,
  ...props
}: LinkProps) => (
  <NextLink
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
  </NextLink>
);
Link.displayName = 'Link';
