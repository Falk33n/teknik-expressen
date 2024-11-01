'use client';

import { AuthenticationForm } from '@/components/navbar/authentication';
import { NavigationMenuClose } from '@/components/navbar/shared';
import { Button } from '@/components/shadcn';
import type { AuthenticationProps } from '@/types';
import { useState } from 'react';

// Authentication is not used as seperate pages, we use it as a modal
export const Authentication = ({ component }: AuthenticationProps) => {
  const [activeComponent, setActiveComponent] =
    useState<AuthenticationProps['component']>(component);

  const actionText =
    activeComponent === 'login' ? 'Logga in' : 'Registrera dig';
  const promptText =
    activeComponent === 'login'
      ? 'Har du inget konto? '
      : 'Har du redan ett konto? ';

  return (
    <div className='flex flex-col w-full h-[calc(100vh-4.5rem)]'>
      <NavigationMenuClose trigger='.authentication-trigger' />

      <div
        className='space-y-3.5 p-6'
        aria-live='polite'
      >
        <h3 className='font-semibold text-2xl sm:text-3xl capitalize'>
          {actionText}
        </h3>

        <h4 className='font-medium text-sm sm:text-base'>
          Välkommen{activeComponent === 'login' && ' tillbaka'}, fyll i dina
          uppgifter nedan och klicka på &apos;{actionText}&apos;.
        </h4>

        <AuthenticationForm component={activeComponent} />

        <div className='flex justify-center items-center'>
          <span
            aria-hidden
            className='py-2 text-sm'
          >
            {promptText}
          </span>

          <Button
            variant='link'
            className='px-1.5'
            aria-label={`${promptText}, klicka här för att ${actionText}`}
            onClick={() =>
              setActiveComponent((prev) =>
                prev === 'login' ? 'register' : 'login'
              )
            }
          >
            Klicka här
          </Button>
        </div>
      </div>
    </div>
  );
};

Authentication.displayName = 'Authentication';
