'use client';

import { Button } from '@/components/ui';
import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

export const MenuTrigger = () => {
  const [menuTriggerId, setMenuTriggerId] = useState<string | undefined>(
    undefined
  );
  const handleClick = () => {
    const menuTrigger: HTMLElement | null =
      document.querySelector('.menu-trigger');
    if (menuTrigger) {
      menuTrigger.click();
      menuTrigger.focus();
    }
  };

  useEffect(() => {
    const menuTrigger: HTMLElement | null =
      document.querySelector('.menu-trigger');
    if (menuTrigger) {
      setMenuTriggerId(menuTrigger.id);
    }
  }, []);

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

MenuTrigger.displayName = 'MenuTrigger';
