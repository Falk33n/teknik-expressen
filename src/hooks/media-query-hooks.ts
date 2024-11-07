'use client';

import { useEffect, useState } from 'react';

type MediaQueries = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState<MediaQueries>(undefined);

  useEffect(() => {
    const updateMediaQuery = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 640) {
        setMediaQuery('xs');
      } else if (windowWidth >= 640 && windowWidth < 768) {
        setMediaQuery('sm');
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        setMediaQuery('md');
      } else if (windowWidth >= 1024 && windowWidth < 1280) {
        setMediaQuery('lg');
      } else if (windowWidth >= 1280 && windowWidth < 1536) {
        setMediaQuery('xl');
      } else {
        setMediaQuery('2xl');
      }
    };

    updateMediaQuery();

    window.addEventListener('resize', updateMediaQuery);
    return () => window.removeEventListener('resize', updateMediaQuery);
  }, []);

  return { mediaQuery };
};
