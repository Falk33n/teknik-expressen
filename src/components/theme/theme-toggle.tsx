'use client';

import { Button } from '@/components/ui';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTheme(systemTheme === 'dark' ? 'dark' : 'light');
    setIsMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMounted) return null;
  return (
    <Button
      variant='outline'
      size='icon'
      aria-label={`Toggle the color theme, theme is currently ${theme}`}
      aria-live='polite'
      className='mb-56'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <SunIcon aria-hidden /> : <MoonIcon aria-hidden />}
    </Button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
