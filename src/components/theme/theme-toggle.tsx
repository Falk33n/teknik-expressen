'use client';

import { Button } from '@/components/ui';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

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
      className='mb-56'
      onClick={() => setTheme(nextTheme)}
    >
      {currentTheme === 'light' ? (
        <SunIcon aria-hidden />
      ) : (
        <MoonIcon aria-hidden />
      )}
    </Button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
