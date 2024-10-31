import type { MenuItemProps } from '@/components/navbar/menu';
import { Menu, MenuTrigger } from '@/components/navbar/menu';
import type { NavbarListItemProps, TopbarItemProps } from '@/types';
import Link from 'next/link';
import { BsHeadset, BsLightningCharge, BsMouse2 } from 'react-icons/bs';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { FaAward, FaRegKeyboard, FaTruckFast, FaUser } from 'react-icons/fa6';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoMdTv } from 'react-icons/io';
import {
  IoLaptopOutline,
  IoMenu,
  IoPhonePortraitOutline,
  IoPhonePortraitSharp,
  IoReloadSharp,
  IoTvOutline,
} from 'react-icons/io5';
import { LuCable } from 'react-icons/lu';
import { MdOutlineDevicesOther } from 'react-icons/md';
import { TbDeviceIpad } from 'react-icons/tb';

/**
 * Data for the list items in the navbar
 */
export const NAVBAR_LIST_ITEMS_ARRAY: NavbarListItemProps[] = [
  {
    title: {
      icon: IoMenu,
      text: 'Meny',
      ariaLabel: 'Visa eller dölj menyn',
      iconClassName: 'size-6 top-3',
    },
    children: (
      <Menu>
        <MenuTrigger />
      </Menu>
    ),
  },
  {
    title: {
      icon: FaSearch,
      text: 'Sök',
      ariaLabel: 'Visa eller dölj sökrutan',
    },
    children: <Link href='/'>testing testing</Link>,
  },
  {
    title: {
      icon: FaUser,
      text: 'Logga in',
      ariaLabel: 'Visa eller dölj logga in rutan',
    },
    children: <Link href='/'>testing testing</Link>,
  },
  {
    title: {
      icon: FaShoppingBag,
      text: 'Kundkorg',
      ariaLabel: 'Visa eller dölj kundkorgen',
    },
    children: <Link href='/'>testing testing</Link>,
  },
];

/**
 * Data for the menu items
 */
export const MENU_ITEM_ARRAY: MenuItemProps[] = [
  {
    i: 0,
    title: { icon: BsMouse2, children: 'Datorutrustning' },
    links: [
      {
        title: { icon: FaRegKeyboard, children: 'Tangentbord' },
        href: '',
      },
      {
        title: { icon: BsMouse2, children: 'Datormöss' },
        href: '',
      },
      {
        title: { icon: BsHeadset, children: 'Hörlurar' },
        href: '',
      },
    ],
  },
  {
    i: 1,
    title: { icon: HiOutlineDesktopComputer, children: 'Datorer' },
    links: [
      {
        title: { icon: IoLaptopOutline, children: 'Bärbara datorer' },
        href: '',
      },
      {
        title: {
          icon: HiOutlineDesktopComputer,
          children: 'Stationära datorer',
        },
        href: '',
      },
    ],
  },
  {
    i: 2,
    title: { icon: TbDeviceIpad, children: 'Surfplattor' },
    links: [
      {
        title: { icon: TbDeviceIpad, children: 'Samsungs surfplattor' },
        href: '',
      },
      {
        title: { icon: TbDeviceIpad, children: 'Apples surfplattor' },
        href: '',
      },
    ],
  },
  {
    i: 3,
    title: { icon: IoPhonePortraitOutline, children: 'Mobiltelefoner' },
    links: [
      {
        title: { icon: IoPhonePortraitSharp, children: 'Samsungs telefoner' },
        href: '',
      },
      {
        title: { icon: IoPhonePortraitOutline, children: 'Apples telefoner' },
        href: '',
      },
    ],
  },
  {
    i: 4,
    title: { icon: IoTvOutline, children: 'TV' },
    links: [
      {
        title: { icon: IoMdTv, children: '48-60 Tum TV' },
        href: '',
      },
      {
        title: { icon: IoMdTv, children: '65-70 Tum TV' },
        href: '',
      },
      {
        title: { icon: IoMdTv, children: '75-85 Tum TV' },
        href: '',
      },
    ],
  },
  {
    i: 5,
    title: { icon: LuCable, children: 'Tillbehör' },
    links: [
      {
        title: { icon: BsLightningCharge, children: 'Laddare' },
        href: '',
      },
      {
        title: { icon: LuCable, children: 'Datorkablar' },
        href: '',
      },
      {
        title: { icon: MdOutlineDevicesOther, children: 'Övriga tillbehör' },
        href: '',
      },
    ],
  },
];

/**
 * Data for the items in the topbar (the bar that is over the navbar)
 */
export const TOPBAR_ITEMS_ARRAY: TopbarItemProps[] = [
  {
    icon: FaAward,
    children: 'Prismatch',
  },
  {
    icon: IoReloadSharp,
    children: 'Fri retur',
    iconClassName: 'scale-x-[-1]',
  },
  {
    icon: FaTruckFast,
    children: (
      <span aria-label='Fri frakt över 500kr'>
        <span
          aria-hidden
          className='sm:hidden'
        >
          Fri frakt*
        </span>
        <span
          aria-hidden
          className='sm:inline hidden'
        >
          Fri frakt över 500kr
        </span>
      </span>
    ),
  },
];
