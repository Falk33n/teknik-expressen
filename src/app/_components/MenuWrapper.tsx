'use client';

import { Large_Menu, Small_Menu } from '@/app/_components';
import { Skeleton } from '@/components';
import { useMediaQuery } from '@/hooks';
import { api } from '@/trpc';

export const MenuWrapper = () => {
  const { mediaQuery } = useMediaQuery();

  const { data, isLoading } = api.session.getSession.useQuery(undefined, {
    retry: false,
  });

  const isAuthenticated = data && data.isAuthenticated;

  if (!mediaQuery || isLoading)
    return <Skeleton className='size-10 lg:w-[560px] xl:w-[620px]' />;
  else if (mediaQuery === 'xs' || mediaQuery === 'sm' || mediaQuery === 'md')
    return <Small_Menu isAuthenticated={isAuthenticated} />;
  return <Large_Menu isAuthenticated={isAuthenticated} />;
};
MenuWrapper.displayName = 'MenuWrapper';
