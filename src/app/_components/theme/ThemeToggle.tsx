'use client';

import { Button, Icons, Skeleton } from '@/components';
import { cn } from '@/lib';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  const Icon = currentTheme === 'light' ? Icons.RxSun : Icons.RxMoon;

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Skeleton className='absolute right-0 top-1/2 size-10 -translate-y-1/2 bg-primary/20' />
    );
  return (
    <Button
      variant='outline'
      size='icon'
      aria-label={`Toggle the color theme, theme is currently ${currentTheme}`}
      aria-live='polite'
      className={cn('size-10', className && 'dark:bg-background/35', className)}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon aria-hidden className='scale-125' />
    </Button>
  );
};
ThemeToggle.displayName = 'ThemeToggle';
