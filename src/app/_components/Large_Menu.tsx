'use client';

import { Link, Skeleton } from '@/components';
import { api } from '@/trpc';

export const Large_Menu = () => {
  const { data, isLoading } = api.auth.getAuth.useQuery(undefined, {
    retry: false,
  });

  const isAuthenticated = data && data.isAuthenticated;

  return (
    <ul className='flex items-center gap-10'>
      <li>
        <Link href='/products'>Produkter</Link>
      </li>
      <li>
        <Link href='/support'>Kundtjänst</Link>
      </li>
      {isLoading ? (
        <Skeleton className='h-8 w-full' />
      ) : (
        <li>
          <Link href={isAuthenticated ? '/account' : '/login'}>
            {isAuthenticated ? 'Mitt konto' : 'Logga in'}
          </Link>
        </li>
      )}
      <li>
        <Link href='/cart'>Kundkorg</Link>
      </li>
    </ul>
  );
};
Large_Menu.displayName = 'Large_Menu';
