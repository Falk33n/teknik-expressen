'use client';

import { LargeMenu, SmallMenu } from '@/app/components';
import { Skeleton } from '@/components';
import { useMediaQuery } from '@/hooks';
import { api } from '@/trpc';

export const MenuWrapper = () => {
  const { mediaQuery } = useMediaQuery();

  const { data, isLoading } = api.session.getSession.useQuery(undefined, {
    retry: false,
  });

  const isAuthenticated = data && data.status === 'success';

  if (!mediaQuery || isLoading) {
    return <Skeleton className='size-10 lg:w-[500px] xl:w-[550px]' />;
  } else if (
    mediaQuery === 'xs' ||
    mediaQuery === 'sm' ||
    mediaQuery === 'md'
  ) {
    return <SmallMenu isAuthenticated={isAuthenticated} />;
  }

  return <LargeMenu isAuthenticated={isAuthenticated} />;
};
MenuWrapper.displayName = 'MenuWrapper';
