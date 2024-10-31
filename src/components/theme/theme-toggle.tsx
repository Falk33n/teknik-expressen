'use client';

import { Button } from '@/components/shadcn';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { RxMoon, RxSun } from 'react-icons/rx';

export const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const currentTheme: string | undefined =
    theme === 'system' ? systemTheme : theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const Icon: IconType = currentTheme === 'light' ? RxSun : RxMoon;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Button
      variant='outline'
      size='icon'
      aria-label={`Toggle the color theme, theme is currently ${currentTheme}`}
      aria-live='polite'
      className='size-12'
      onClick={() => setTheme(nextTheme)}
    >
      <Icon
        aria-hidden
        className='scale-125'
      />
    </Button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
