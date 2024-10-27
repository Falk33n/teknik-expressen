import { MenuItem, menuItemData } from '@/components/navbar/menu';
import { NavigationMenu, NavigationMenuList } from '@/components/ui';
import type { ReactNode } from 'react';

export const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full h-[calc(100vh-4.4rem)]'>
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
    </div>
  );
};

Menu.displayName = 'Menu';
