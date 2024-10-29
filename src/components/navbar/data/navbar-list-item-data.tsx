import type { NavbarListItemProps } from '@/components/navbar';
import { Menu, MenuTrigger } from '@/components/navbar/menu';
import Link from 'next/link';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
export const navbarListItemData: NavbarListItemProps[] = [
  {
    title: {
      icon: IoMenu,
      children: 'Meny',
    },
    ariaLabel: 'Visa eller dölj menyn',
    children: (
      <Menu>
        <MenuTrigger />
      </Menu>
    ),
    className: 'size-6 top-3',
  },
  {
    title: {
      icon: FaSearch,
      children: 'Sök',
    },
    ariaLabel: 'Visa eller dölj sökrutan',
    children: <Link href='/'>testing testing</Link>,
  },
  {
    title: {
      icon: FaUser,
      children: 'Logga in',
    },
    ariaLabel: 'Visa eller dölj logga in rutan',
    children: <Link href='/'>testing testing</Link>,
  },
  {
    title: {
      icon: FaShoppingBag,
      children: 'Kundkorg',
    },
    ariaLabel: 'Visa eller dölj kundkorgen',
    children: <Link href='/'>testing testing</Link>,
  },
];
