'use client';

import {
  FooterLink,
  FooterList,
  FooterListProps,
  SocialMediaButton,
  ThemeToggle,
} from '@/app/components';
import { api } from '@/trpc';
import { Fragment } from 'react';

const FOOTER_LISTS: FooterListProps[] = [
  {
    className: 'flex flex-col gap-2 relative',
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
      {
        children: (
          <ThemeToggle className='absolute right-0 top-1/2 -translate-y-1/2' />
        ),
      },
    ],
  },
  {
    className: 'flex flex-wrap items-center gap-x-6 gap-y-2',
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
    <footer className='flex flex-col gap-3.5 border-t bg-accent dark:border-primary/20'>
      <nav className='mx-auto flex w-full flex-col gap-6 p-4 pt-8 sm:px-12 sm:pt-12 lg:w-[90vw] xl:w-[75vw]'>
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
        className='mx-auto p-4 pb-11 text-center text-xs font-bold tracking-wide text-accent-foreground/80 sm:px-12 sm:text-sm lg:w-[90vw] xl:w-[75vw]'
      >
        &copy; 2025 TeknikExpressen AB. All rights reserved.
      </p>
    </footer>
  );
};
Footer.displayName = 'Footer';
