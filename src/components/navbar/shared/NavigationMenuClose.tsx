'use client';

import { Button } from '@/components/shadcn';
import type { NavigationMenuCloseProps } from '@/types';
import { forwardRef, useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

// Button component
export const NavigationMenuClose = forwardRef<
  HTMLButtonElement,
  NavigationMenuCloseProps
>(({ trigger }, ref) => {
  const [triggerButtonId, setTriggerButtonId] = useState<string | undefined>(
    undefined
  );
  const ariaLabel =
    trigger === '.menu-trigger'
      ? 'Stäng menyn'
      : trigger === '.searchbar-trigger'
        ? 'Stäng sökrutan'
        : 'Stäng autentiserings rutan';

  /*
   *  Usage of querySelector instead of ref to not cause deep nested prop drilling
   */

  useEffect(() => {
    const triggerButton: HTMLElement | null = document.querySelector(trigger);
    if (triggerButton) {
      setTriggerButtonId(triggerButton.id);
    }
  }, [trigger]);

  // Mocked click and focus action on trigger button
  const handleClick = () => {
    const triggerButton: HTMLElement | null = document.querySelector(trigger);
    if (triggerButton) {
      triggerButton.click();
      triggerButton.focus();
    }
  };

  return (
    <div className='top-0 z-[50] sticky flex justify-end items-center bg-accent px-3 py-1 sm:py-1.5 w-full'>
      <Button
        ref={ref}
        size='icon'
        variant='ghost'
        className='size-10'
        aria-label={ariaLabel}
        aria-controls={triggerButtonId}
        aria-expanded={true}
        onClick={handleClick}
      >
        <FaX
          aria-hidden
          className='text-accent-foreground sm:scale-125'
        />
      </Button>
    </div>
  );
});

NavigationMenuClose.displayName = 'NavigationMenuClose';
