'use client';

import {
  FooterLink,
  FooterList,
  FooterListProps,
  SocialMediaButton,
} from '@/app/components';
import { api } from '@/trpc';
import { Fragment } from 'react';

const FOOTER_LISTS: FooterListProps[] = [
  {
    className: 'flex flex-col gap-2',
    heading: {
      title: 'Genvägar',
    },
    content: [
      {
        children: <FooterLink href='/account' text='Mitt konto' />,
        isAccountListItem: true,
      },
      { children: <FooterLink href='/orders' text='Orderhistorik' /> },
      { children: <FooterLink href='/support' text='Kundtjänst' /> },
    ],
  },
  {
    className: 'my-4 flex flex-wrap items-center gap-x-6 gap-y-2',
    heading: {
      title: 'Sociala medier',
      className: '[flex-basis:100%] flex-shrink-0',
    },
    content: [
      { children: <SocialMediaButton socialMedia='Facebook' /> },
      { children: <SocialMediaButton socialMedia='YouTube' /> },
      { children: <SocialMediaButton socialMedia='Instagram' /> },
    ],
  },
  {
    className: 'flex flex-col gap-2',
    heading: {
      title: 'Policys',
    },
    content: [
      {
        children: <FooterLink href='/cookies' text='Cookie policy' />,
      },
      { children: <FooterLink href='/' text='Integritetspolicy' /> },
    ],
  },
];

export const Footer = () => {
  const { data, isLoading } = api.session.getSession.useQuery(undefined, {
    retry: false,
  });

  const isAuthenticated = data && data.status === 'success';

  return (
    <footer className='flex flex-col gap-6 bg-accent p-4 pt-8'>
      <nav className='flex flex-col gap-6'>
        {/* PLACE BRAND LOGO HERE */}

        {FOOTER_LISTS.map((props, i) => (
          <Fragment key={i}>
            <FooterList
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
              {...props}
            />
          </Fragment>
        ))}
      </nav>

      <p
        lang='en'
        className='py-4 text-center text-xs font-bold tracking-wide text-accent-foreground/80'
      >
        &copy; 2025 TeknikExpressen AB. All rights reserved.
      </p>
    </footer>
  );
};
Footer.displayName = 'Footer';
