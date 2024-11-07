'use client';

import {
  Small_MenuContent,
  type Small_MenuContentProps,
  ThemeToggle,
} from '@/app/_components';
import { Skeleton } from '@/components';
import { api } from '@/trpc';
import { Fragment } from 'react';
import { FaBagShopping, FaUser } from 'react-icons/fa6';
import { MdSupportAgent } from 'react-icons/md';

const SMALL_MENU_CONTENTS: Small_MenuContentProps[] = [
  {
    href: '/cart',
    Icon: FaBagShopping,
    text: 'Kundkorg',
  },
  {
    href: '/login',
    Icon: FaUser,
    text: 'Logga in',
  },
  {
    href: '/support',
    Icon: MdSupportAgent,
    text: 'Kundtjänst',
  },
];

export const Small_MenuFooter = () => {
  const { data, isLoading } = api.auth.getAuth.useQuery(undefined, {
    retry: false,
  });

  const isAuthenticated = data && data.isAuthenticated;

  return (
    <div className='flex flex-col items-center justify-end gap-12 py-12 text-sm'>
      <ul className='flex w-full flex-col'>
        {SMALL_MENU_CONTENTS.map(({ Icon, href, text }, i) => (
          <Fragment key={i}>
            {text === 'Logga in' ? (
              <>
                {isLoading ? (
                  <Skeleton className='h-8 w-full' />
                ) : (
                  <Small_MenuContent
                    className='border-b'
                    href={isAuthenticated ? '/account' : '/login'}
                    Icon={FaUser}
                    text={isAuthenticated ? 'Mitt konto' : 'Logga in'}
                  />
                )}
              </>
            ) : (
              <Small_MenuContent
                className='border-b'
                {...{ Icon, href, text }}
              />
            )}
          </Fragment>
        ))}
      </ul>

      <ThemeToggle />
    </div>
  );
};
Small_MenuFooter.displayName = 'Small_MenuFooter';
