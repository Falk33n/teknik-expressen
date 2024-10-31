import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

export type NavbarListItemProps = {
  title: {
    icon: IconType;
    iconClassName?: string;
    text: ReactNode;
    ariaLabel: string;
  };
  children: ReactNode;
};

export type TopbarItemProps = {
  icon: IconType;
  children: ReactNode;
  iconClassName?: string;
};
