'use client';

import { Large_Menu, Small_Menu } from '@/app/_components';
import { Skeleton } from '@/components';
import { useMediaQuery } from '@/hooks';

export const MenuWrapper = () => {
  const { mediaQuery } = useMediaQuery();

  if (!mediaQuery)
    return <Skeleton className='size-10 lg:w-[560px] xl:w-[620px]' />;
  else if (mediaQuery === 'xs' || mediaQuery === 'sm' || mediaQuery === 'md')
    return <Small_Menu />;
  return <Large_Menu />;
};
MenuWrapper.displayName = 'MenuWrapper';
