'use client';

import { useEffect, useState } from 'react';

type MediaQueries = 'phone' | 'tablet' | 'desktop' | undefined;

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState<MediaQueries>(undefined);

  useEffect(() => {
    const updateMediaQuery = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 768) {
        setMediaQuery('phone');
      } else if (windowWidth >= 768 && windowWidth < 1200) {
        setMediaQuery('tablet');
      } else {
        setMediaQuery('desktop');
      }
    };

    updateMediaQuery();

    window.addEventListener('resize', updateMediaQuery);
    return () => window.removeEventListener('resize', updateMediaQuery);
  }, []);

  return { mediaQuery };
};
