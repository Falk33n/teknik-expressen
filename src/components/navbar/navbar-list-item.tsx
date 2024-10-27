import { Menu, MenuTrigger } from '@/components/navbar/menu';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui';
import { cn } from '@/lib';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';

type NavbarListItemProps = {
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

export const navbarListItemData: NavbarListItemProps[] = [
  {
    title: {
      icon: IoMenu,
      children: 'Meny',
    },
    ariaLabel: 'Visa eller dölj menyn',
    children: (
      <Menu>
        <MenuTrigger />
      </Menu>
    ),
    className: 'size-6 top-3',
  },
  {
    title: {
      icon: FaSearch,
      children: 'Sök',
    },
    ariaLabel: 'Visa eller dölj sökrutan',
    children: <Link href='/'>testing testing</Link>,
  },
  {
    title: {
      icon: FaUser,
      children: 'Logga in',
    },
    ariaLabel: 'Visa eller dölj logga in rutan',
    children: <Link href='/'>testing testing</Link>,
  },
  {
    title: {
      icon: FaShoppingBag,
      children: 'Kundkorg',
    },
    ariaLabel: 'Visa eller dölj kundkorgen',
    children: <Link href='/'>testing testing</Link>,
  },
];
