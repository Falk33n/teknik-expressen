import { FooterCertificate, FooterLink } from '@/app/_root/layout/components';
import { Separator } from '@/components';

import { cn } from '@/lib/utils';

import type { HasActiveSession } from '@/app/_root/layout/lib/types';

import type { ReactNode } from 'react';

export type FooterListProps = HasActiveSession & {
  className: string;
  heading: { title: string; className?: string };
  content: { children: ReactNode; isAccountListItem?: boolean }[];
};

export const FooterList = ({
  className,
  heading,
  content,
  hasActiveSession,
}: FooterListProps) => (
  <>
    <ul
      role='menu'
      aria-label={`Lista med länkar till ${heading.title}`}
      className={className}
    >
      <li
        aria-hidden
        className={cn('mb-2 text-base font-bold sm:text-lg', heading.className)}
      >
        {heading.title}
      </li>

      {content.map((listItem, i) => (
        <li role='menuitem' key={i}>
          {listItem.isAccountListItem ? (
            <FooterLink
              href={hasActiveSession ? '/account' : '/login'}
              text={hasActiveSession ? 'Mitt konto' : 'Logga in'}
            />
          ) : (
            listItem.children
          )}
        </li>
      ))}

      {heading.title === 'Sociala medier' && <FooterCertificate />}
    </ul>

    <Separator />
  </>
);
FooterList.displayName = 'FooterList';
