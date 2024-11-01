import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/shadcn';
import { cn } from '@/helpers';
import type { NavbarListItemProps } from '@/types';

export const NavbarListItem = ({
  title: { icon: Icon, text, ariaLabel, iconClassName },
  children,
}: NavbarListItemProps) => {
  return (
    <NavigationMenuItem className='w-[25%] [&>button]:h-[4.5rem]'>
      <NavigationMenuTrigger
        aria-label={ariaLabel}
        className={cn(
          'relative flex flex-col rounded-none w-full whitespace-nowrap',
          text === 'Meny' && 'menu-trigger',
          text === 'Sök' && 'searchbar-trigger',
          text === 'Logga in' && 'authentication-trigger'
        )}
      >
        <Icon
          aria-hidden
          className={cn(
            'size-4 sm:size-5 absolute top-3.5 left-1/2 -translate-x-1/2',
            iconClassName
          )}
        />

        <span
          aria-hidden
          className='mt-7 sm:text-base'
        >
          {text}
        </span>
      </NavigationMenuTrigger>

      <NavigationMenuContent
        className={
          text === 'Sök'
            ? 'mx-auto max-sm:w-screen sm:w-[85vw] md:w-[70vw]'
            : 'w-screen'
        }
      >
        {children}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

NavbarListItem.displayName = 'NavbarListItem';
