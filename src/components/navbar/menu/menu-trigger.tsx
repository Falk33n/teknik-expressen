'use client';

import { Button } from '@/components/ui';
import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

const menuTrigger: HTMLElement | null = document.querySelector('.menu-trigger');

export const MenuTrigger = () => {
  const [menuTriggerId, setMenuTriggerId] = useState<string | undefined>(
    undefined
  );
  const handleClick = () => {
    if (menuTrigger) {
      menuTrigger.click();
      menuTrigger.focus();
    }
  };

  useEffect(() => {
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
      tabIndex={0}
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
