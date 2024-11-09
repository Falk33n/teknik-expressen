'use client';

import { Skeleton } from '@/components';
import {
  ThemeProvider as Next_ThemeProvider,
  type ThemeProviderProps,
} from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Next_ThemeProvider {...props}>
      {children}

      {!isMounted && (
        <div
          aria-hidden
          className='fixed top-0 z-[200] h-screen w-screen bg-background'
        >
          <Skeleton className='size-full rounded-none' />
        </div>
      )}
    </Next_ThemeProvider>
  );
};
ThemeProvider.displayName = 'ThemeProvider';
