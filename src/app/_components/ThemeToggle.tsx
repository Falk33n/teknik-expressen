'use client';

import { Button } from '@/components';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RxMoon, RxSun } from 'react-icons/rx';

export const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  const Icon = currentTheme === 'light' ? RxSun : RxMoon;

  useEffect(() => {
    if (isMounted) return;
    setIsMounted(true); // isMounted is disabled
  }, []); // eslint-disable-line

  if (!isMounted) return null;
  return (
    <Button
      variant='outline'
      size='icon'
      aria-label={`Toggle the color theme, theme is currently ${currentTheme}`}
      aria-live='polite'
      className='size-12 sm:size-14'
      onClick={() => setTheme(nextTheme)}
    >
      <Icon aria-hidden className='scale-125 sm:scale-150' />
    </Button>
  );
};
ThemeToggle.displayName = 'ThemeToggle';
