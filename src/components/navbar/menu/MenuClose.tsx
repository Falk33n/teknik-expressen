'use client';

import { Button } from '@/components/shadcn';
import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

// Button component
export const MenuClose = () => {
  const [menuTriggerId, setMenuTriggerId] = useState<string | undefined>(
    undefined
  );

  /*
   *  Usage of querySelector instead of ref to not cause deep nested prop drilling
   */

  useEffect(() => {
    const menuTrigger: HTMLElement | null =
      document.querySelector('.menu-trigger');
    if (menuTrigger) {
      setMenuTriggerId(menuTrigger.id);
    }
  }, []);

  // Mocked click and focus action on menu trigger button
  const handleClick = () => {
    const menuTrigger: HTMLElement | null =
      document.querySelector('.menu-trigger');
    if (menuTrigger) {
      menuTrigger.click();
      menuTrigger.focus();
    }
  };

  return (
    <Button
      size='icon'
      variant='ghost'
      aria-label='Stäng menyn'
      aria-controls={menuTriggerId}
      aria-expanded={true}
      onClick={handleClick}
    >
      <FaX
        aria-hidden
        className='text-accent-foreground size-4'
      />
    </Button>
  );
};

MenuClose.displayName = 'MenuClose';