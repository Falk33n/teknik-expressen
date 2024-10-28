import { MenuItem, menuItemData } from '@/components/navbar/menu';
import { ThemeToggle } from '@/components/theme';
import { NavigationMenu, NavigationMenuList } from '@/components/ui';
import type { ReactNode } from 'react';

export const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full h-[calc(100vh-4.5rem)] overflow-y-auto'>
      <div className='flex justify-end items-center bg-accent px-3 py-1 w-full'>
        {children}
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
      <div className='flex justify-center items-end py-10'>
        <ThemeToggle />
      </div>
    </div>
  );
};

Menu.displayName = 'Menu';
