'use client';

import {
  Small_MenuContent,
  type Small_MenuContentProps,
  ThemeToggle,
} from '@/app/_components';
import { Skeleton } from '@/components';
import { api } from '@/trpc';
import { Fragment } from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { MdOutlineShoppingCart, MdSupportAgent } from 'react-icons/md';

const SMALL_MENU_CONTENTS: Small_MenuContentProps[] = [
  {
    href: '/cart',
    Icon: MdOutlineShoppingCart,
    text: 'Kundkorg',
    className: 'border-y',
  },
  {
    href: '/login',
    Icon: FaRegUser,
    text: 'Logga in',
    className: 'border-b',
  },
  {
    href: '/support',
    Icon: MdSupportAgent,
    text: 'Kundtjänst',
    className: 'border-b',
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
        {SMALL_MENU_CONTENTS.map(({ Icon, href, text, className }, i) => (
          <Fragment key={i}>
            {text === 'Logga in' ? (
              <>
                {isLoading ? (
                  <Skeleton className='h-14 w-full' />
                ) : (
                  <Small_MenuContent
                    className={className}
                    href={isAuthenticated ? '/account' : href}
                    Icon={Icon}
                    text={isAuthenticated ? 'Mitt konto' : text}
                  />
                )}
              </>
            ) : (
              <Small_MenuContent {...{ Icon, href, text, className }} />
            )}
          </Fragment>
        ))}
      </ul>

      <ThemeToggle />
    </div>
  );
};
Small_MenuFooter.displayName = 'Small_MenuFooter';
