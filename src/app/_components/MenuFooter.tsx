'use client';

import { MenuContent, ThemeToggle } from '@/app/_components';
import { Skeleton } from '@/components';
import { api } from '@/trpc';
import { FaUser } from 'react-icons/fa6';
import { MdSupportAgent } from 'react-icons/md';

export const MenuFooter = () => {
  const { data, isLoading } = api.auth.getAuth.useQuery(undefined, {
    retry: false,
  });

  const isAuthenticated = data && data.isAuthenticated;

  return (
    <div className='flex flex-col items-center justify-end gap-12 py-12 text-sm'>
      <ul className='flex w-full flex-col'>
        {isLoading ? (
          <Skeleton className='h-8 w-full' />
        ) : (
          <MenuContent
            className='h-fit w-full border-b'
            href={isAuthenticated ? '/account' : '/login'}
            Icon={FaUser}
            text={isAuthenticated ? 'Mitt konto' : 'Logga in'}
          />
        )}

        <MenuContent
          className='h-fit w-full border-b'
          href='/support'
          Icon={MdSupportAgent}
          text='Kundtjänst'
        />
      </ul>

      <ThemeToggle />
    </div>
  );
};
MenuFooter.displayName = 'MenuFooter';
