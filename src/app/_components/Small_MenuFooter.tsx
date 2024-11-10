'use client';

import {
  Small_MenuContent,
  type Small_MenuContentProps,
  ThemeToggle,
} from '@/app/_components';
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

export const Small_MenuFooter = ({
  isAuthenticated,
}: {
  isAuthenticated?: boolean;
}) => (
  <div className='flex flex-col items-center justify-end gap-12 py-12 text-sm'>
    <ul className='flex w-full flex-col'>
      {SMALL_MENU_CONTENTS.map((content, i) => (
        <Fragment key={i}>
          {content.text === 'Logga in' ? (
            <Small_MenuContent
              className={content.className}
              href={isAuthenticated ? '/account' : content.href}
              Icon={content.Icon}
              text={isAuthenticated ? 'Mitt konto' : content.text}
            />
          ) : (
            <Small_MenuContent {...content} />
          )}
        </Fragment>
      ))}
    </ul>

    <ThemeToggle />
  </div>
);
Small_MenuFooter.displayName = 'Small_MenuFooter';
