import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

export type NavbarListItemProps = {
  title: {
    icon: IconType;
    iconClassName?: string;
    text: 'Meny' | 'Sök' | 'Logga in' | 'Kundkorg';
    ariaLabel: string;
  };
  children: ReactNode;
};

export type TopbarItemProps = {
  icon: IconType;
  children: ReactNode;
  iconClassName?: string;
};

export type MenuListLinkProps = {
  title: { icon: IconType; text: ReactNode };
  href: string;
  className?: string;
};

export type MenuItemProps = {
  i: number;
  title: { icon: IconType; text: ReactNode };
  links: MenuListLinkProps[];
};

export type AuthenticationProps = {
  component: 'login' | 'register';
};

export type NavigationMenuCloseProps = {
  trigger: '.menu-trigger' | '.authentication-trigger' | '.searchbar-trigger';
};

export type AuthenticationFieldProps = {
  name: 'email' | 'password' | 'confirmPassword';
  label: string;
  placeholder: string;
  description: string;
};
