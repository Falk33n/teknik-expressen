import { cn } from '@/helpers';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

export type MenuLinkProps = {
  title: { icon: IconType; children: ReactNode };
  href: string;
  className?: string;
};

export const MenuLink = ({
  title: { icon: Icon, children: title },
  href,
  className,
}: MenuLinkProps) => {
  return (
    <li
      role='menuitem'
      className={cn(
        'focus-within:ring-2 focus-within:ring-primary focus-within:ring-inset',
        className
      )}
    >
      <Link
        href={href}
        aria-label={`Gå till ${title} sidan`}
        className='flex items-center py-4 border-b w-full text-foreground hover:text-primary focus-visible:text-primary underline-offset-4 hover:underline transition-colors hover:decoration-primary focus-visible:outline-none'
      >
        <span
          className='flex items-center gap-2 px-6 capitalize'
          aria-hidden
        >
          <Icon
            aria-hidden
            className='size-4'
          />
          {title}
        </span>
      </Link>
    </li>
  );
};

MenuLink.displayName = 'MenuLink';
