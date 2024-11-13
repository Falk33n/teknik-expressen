'use client';

import { Button, RxMoon, RxSun } from '@/components';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  const Icon = currentTheme === 'light' ? RxSun : RxMoon;

  return (
    <Button
      variant='outline'
      size='icon'
      aria-label={`Toggle the color theme, theme is currently ${currentTheme}`}
      aria-live='polite'
      className='size-11'
      onClick={() => setTheme(nextTheme)}
    >
      <Icon aria-hidden className='scale-125' />
    </Button>
  );
};
ThemeToggle.displayName = 'ThemeToggle';
