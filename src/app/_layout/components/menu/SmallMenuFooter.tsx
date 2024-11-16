import {
  SmallMenuContent,
  type SmallMenuContentProps,
} from '@/app/layout/components/menu';
import { ThemeToggle } from '@/app/layout/components/theme';
import type { HasActiveSession } from '@/app/layout/lib';
import { Fa6, Md } from '@/components/icons';
import { Fragment } from 'react';

const SMALL_MENU_CONTENTS: SmallMenuContentProps[] = [
  {
    href: '/cart',
    Icon: Md.MdOutlineShoppingCart,
    text: 'Kundkorg',
    className: 'border-y',
  },
  {
    href: '/login',
    Icon: Fa6.FaRegUser,
    text: 'Logga in',
    className: 'border-b',
  },
  {
    href: '/support',
    Icon: Md.MdSupportAgent,
    text: 'Kundtjänst',
    className: 'border-b',
  },
];

export const SmallMenuFooter = ({ hasActiveSession }: HasActiveSession) => (
  <div className='flex flex-col items-center justify-end gap-12 py-12 text-sm'>
    <ul className='flex w-full flex-col'>
      {SMALL_MENU_CONTENTS.map((content, i) => (
        <Fragment key={i}>
          {content.text === 'Logga in' ? (
            <SmallMenuContent
              className={content.className}
              href={hasActiveSession ? '/account' : content.href}
              Icon={content.Icon}
              text={hasActiveSession ? 'Mitt konto' : content.text}
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
