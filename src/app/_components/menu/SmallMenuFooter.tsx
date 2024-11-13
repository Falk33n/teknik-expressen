'use client';

import {
  SmallMenuContent,
  ThemeToggle,
  type SmallMenuContentProps,
} from '@/app/components';
import { Icons } from '@/components';
import { Fragment } from 'react';

const SMALL_MENU_CONTENTS: SmallMenuContentProps[] = [
  {
    href: '/cart',
    Icon: Icons.MdOutlineShoppingCart,
    text: 'Kundkorg',
    className: 'border-y',
  },
  {
    href: '/login',
    Icon: Icons.FaRegUser,
    text: 'Logga in',
    className: 'border-b',
  },
  {
    href: '/support',
    Icon: Icons.MdSupportAgent,
    text: 'Kundtjänst',
    className: 'border-b',
  },
];

export const SmallMenuFooter = ({
  isAuthenticated,
}: {
  isAuthenticated?: boolean;
}) => (
  <div className='flex flex-col items-center justify-end gap-12 py-12 text-sm'>
    <ul className='flex w-full flex-col'>
      {SMALL_MENU_CONTENTS.map((content, i) => (
        <Fragment key={i}>
          {content.text === 'Logga in' ? (
            <SmallMenuContent
              className={content.className}
              href={isAuthenticated ? '/account' : content.href}
              Icon={content.Icon}
              text={isAuthenticated ? 'Mitt konto' : content.text}
            />
          ) : (
            <SmallMenuContent {...content} />
          )}
        </Fragment>
      ))}
    </ul>

    <ThemeToggle />
  </div>
);
SmallMenuFooter.displayName = 'SmallMenuFooter';
