'use client';

import { Button } from '@/components/shadcn';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RxMoon, RxSun } from 'react-icons/rx';

// Button component
export const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const currentTheme: string | undefined =
    theme === 'system' ? systemTheme : theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  const Icon = currentTheme === 'light' ? RxSun : RxMoon;

  useEffect(() => {
    // only run on client to prevent mismatches of data between server and client
    setIsMounted(true);
  }, []);

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
      <Icon
        aria-hidden
        className='scale-125 sm:scale-150'
      />
    </Button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
