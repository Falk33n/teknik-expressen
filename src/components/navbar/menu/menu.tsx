import type { ReactNode } from 'react';

export const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col w-full h-[calc(100vh-4.5rem)]'>
      <div className='flex justify-end items-center bg-accent px-3 py-1 w-full'>
        {children}
      </div>
    </div>
  );
};

Menu.displayName = 'Menu';
