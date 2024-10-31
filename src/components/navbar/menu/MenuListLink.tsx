import { Link } from '@/components/shared';
import { cn } from '@/helpers';
import type { MenuListLinkProps } from '@/types';

export const MenuListLink = ({
  title: { icon: Icon, text },
  href,
  className,
}: MenuListLinkProps) => {
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
        aria-label={`Gå till ${text} sidan`}
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

          {text}
        </span>
      </Link>
    </li>
  );
};

MenuListLink.displayName = 'MenuListLink';
