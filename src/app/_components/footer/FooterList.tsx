import { FooterCertificate, FooterLink } from '@/app/components';
import { Skeleton } from '@/components';
import { cn } from '@/lib';
import type { ReactNode } from 'react';

export type FooterListProps = {
  className: string;
  heading: { title: string; className?: string };
  content: { children: ReactNode; isAccountListItem?: boolean }[];
  isAuthenticated?: boolean;
  isLoading?: boolean;
};

export const FooterList = ({
  className,
  heading,
  content,
  isAuthenticated,
  isLoading,
}: FooterListProps) => (
  <ul
    role='menu'
    aria-label={`Lista med länkar till ${heading.title}`}
    className={className}
  >
    <li
      aria-hidden
      className={cn('mb-2 text-lg font-semibold', heading.className)}
    >
      {heading.title}
    </li>

    {content.map((listItem, i) => (
      <li role='menuitem' key={i}>
        {listItem.isAccountListItem ? (
          <>
            {isLoading ? (
              <Skeleton className='h-6 w-20 bg-primary/20' />
            ) : (
              <FooterLink
                href={isAuthenticated ? '/account' : '/login'}
                text={isAuthenticated ? 'Mitt konto' : 'Logga in'}
              />
            )}
          </>
        ) : (
          listItem.children
        )}
      </li>
    ))}

    {heading.title === 'Sociala medier' && <FooterCertificate />}
  </ul>
);
FooterList.displayName = 'FooterList';
