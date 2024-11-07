'use client';

import { Large_Menu, Small_Menu } from '@/app/_components';
import { useMediaQuery } from '@/hooks';

export const MenuWrapper = () => {
  const { mediaQuery } = useMediaQuery();

  if (!mediaQuery) {
    return null;
  } else if (
    mediaQuery === 'xs' ||
    mediaQuery === 'sm' ||
    mediaQuery === 'md'
  ) {
    return <Small_Menu />;
  } else {
    return <Large_Menu />;
  }
};
MenuWrapper.displayName = 'MenuWrapper';
