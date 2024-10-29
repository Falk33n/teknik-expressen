import { MenuItem, menuItemData } from '@/components/navbar/menu';
import { ThemeToggle } from '@/components/theme';
import { NavigationMenu, NavigationMenuList } from '@/components/ui';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { MdSupportAgent } from 'react-icons/md';

export const Menu = ({ children: menuTrigger }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full h-[calc(100vh-4.5rem)] overflow-y-auto'>
      <div className='flex justify-end items-center bg-accent px-3.5 py-1 w-full'>
        {menuTrigger}
      </div>
      <NavigationMenu
        className='justify-start items-start w-full max-w-full [&>div]:w-full'
        aria-label='Navigering till flikar inom webbsidan'
      >
        <NavigationMenuList
          data-orientation='vertical'
          className='flex-col space-x-0 w-full'
        >
          {menuItemData.map((data, i) => (
            <MenuItem
              key={`menuItem-key-${i}`}
              {...data}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className='flex flex-col justify-end items-center py-10'>
        <Link
          aria-label='Gå till kundtjänst sidan'
          href=''
          className='mb-10 py-4 border-b focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset w-full text-sm hover:text-primary hover:underline transition-colors self-start hover:decoration-primary focus-visible:outline-none hover:underline-offset-4'
        >
          <span
            aria-hidden
            className='flex items-center gap-3 px-6'
          >
            <MdSupportAgent
              aria-hidden
              className='size-5'
            />
            Kundtjänst
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

Menu.displayName = 'Menu';
