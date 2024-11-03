'use client';

import { AuthenticationForm } from '@/components/navbar/authentication';
import { NavigationMenuClose } from '@/components/navbar/shared';
import { Button } from '@/components/shadcn';
import type { AuthenticationProps } from '@/types';
import { useEffect, useRef, useState } from 'react';

// Authentication is not used as seperate pages, we use it as a modal
export const Authentication = ({ component }: AuthenticationProps) => {
  const [activeComponent, setActiveComponent] =
    useState<AuthenticationProps['component']>(component);
  const [isAccountSubmitted, setIsAccountSubmitted] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const actionText =
    activeComponent === 'login' ? 'Logga in' : 'Registrera dig';
  const promptText =
    activeComponent === 'login'
      ? 'Har du inget konto? '
      : 'Har du redan ett konto? ';

  useEffect(() => {
    if (!isAccountSubmitted || !closeButtonRef || !closeButtonRef.current) {
      return;
    } else {
      // click the mock close button to
      // close the modal, this click will actually
      // click the mock trigger which then trigger the click
      // on the real close button
      closeButtonRef.current.click();
    }
  }, [isAccountSubmitted]);

  if (isAccountSubmitted) {
    return null;
  } else {
    return (
      <div className='flex flex-col w-full h-[calc(100vh-4.5rem)] md:h-[80vh] overflow-y-auto'>
        <NavigationMenuClose
          ref={closeButtonRef}
          trigger='.authentication-trigger'
        />

        <div className='relative flex flex-col gap-3.5 sm:px-14 p-6 sm:pt-9 pb-0 h-full'>
          <h3
            className='font-semibold text-2xl sm:text-3xl'
            aria-live='polite'
          >
            {actionText}
          </h3>

          <h4
            className='mb-6 max-w-[85%] sm:max-w-[75%] font-medium text-balance text-sm sm:text-base'
            aria-live='polite'
          >
            Välkommen{activeComponent === 'login' ? ' tillbaka!' : '!'} Fyll i
            dina uppgifter nedan och klicka på {actionText} knappen.
          </h4>

          <AuthenticationForm
            onAccountSubmit={setIsAccountSubmitted}
            component={activeComponent}
          />

          <div className='flex justify-center items-end pb-6 sm:pb-9'>
            <span
              aria-hidden
              className='py-2 text-sm'
            >
              {promptText}
            </span>

            <Button
              variant='link'
              className='px-1.5'
              aria-live='polite'
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
  }
};

Authentication.displayName = 'Authentication';
