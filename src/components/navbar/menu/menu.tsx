import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui';
import { cn } from '@/lib';
import type { ReactNode } from 'react';

export const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full h-[calc(100vh-4.5rem)]'>
      <div className='flex justify-end items-center bg-accent px-3 py-1 w-full'>
        {children}
      </div>
      <NavigationMenu
        className='justify-start items-start  w-full max-w-full [&>div]:w-full'
        aria-label='Navigering till flikar inom webbsidan'
      >
        <NavigationMenuList
          data-orientation='vertical'
          className='flex-col space-x-0 w-full'
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <NavigationMenuItem
              key={i}
              className={cn(i % 2 !== 0 && 'bg-secondary', 'w-full px-6 py-3')}
            >
              hello
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

Menu.displayName = 'Menu';
