import { FooterCertificate, FooterLink } from '@/app/components/footer';
import type { HasActiveSession } from '@/app/layout';
import { Separator } from '@/components/ui';
import { cn } from '@/lib/utils';
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
