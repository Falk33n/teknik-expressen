import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/shadcn';
import { cn } from '@/helpers';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

export type NavbarListItemProps = {
  title: { icon: IconType; children: ReactNode };
  ariaLabel: string;
  children: ReactNode;
  className?: string;
};

export const NavbarListItem = ({
  title: { icon: Icon, children: title },
  ariaLabel,
  children,
  className,
}: NavbarListItemProps) => {
  return (
    <NavigationMenuItem className='w-[25%] [&>button]:h-[4.5rem]'>
      <NavigationMenuTrigger
        aria-label={ariaLabel}
        className={cn(
          'relative flex flex-col rounded-none w-full whitespace-nowrap',
          title === 'Meny' && 'menu-trigger'
        )}
      >
        <Icon
          aria-hidden
          className={cn(
            'size-4 absolute top-3.5 left-1/2 -translate-x-1/2',
            className
          )}
        />
        <span
          aria-hidden
          className='mt-7'
        >
          {title}
        </span>
      </NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  );
};

NavbarListItem.displayName = 'NavbarListItem';
