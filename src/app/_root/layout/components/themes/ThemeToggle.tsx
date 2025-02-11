'use client';

import {
  Button,
  RxMoon,
  RxSun,
  Skeleton,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type ThemeToggleProps = {
  className?: string;
};

export const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const currentThemeTranslated = currentTheme === 'light' ? 'ljust' : 'mörkt';

  const Icon = currentTheme === 'light' ? RxSun : RxMoon;

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Skeleton className='absolute right-0 top-1/2 size-10 -translate-y-1/2 bg-primary/20' />
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            aria-label={`Ändra färgtemat, temat är just nu ${currentThemeTranslated}`}
            aria-live='polite'
            className={cn(
              'size-10',
              className && 'dark:bg-background/35',
              className,
            )}
            onClick={() => setTheme(nextTheme)}
          >
            <Icon aria-hidden className='scale-125' />
          </Button>
        </TooltipTrigger>

        <TooltipContent sideOffset={10} side='bottom' aria-hidden>
          Ändra färgtemat
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
ThemeToggle.displayName = 'ThemeToggle';
