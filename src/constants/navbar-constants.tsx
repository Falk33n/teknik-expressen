import { Authentication } from '@/components/navbar/authentication';
import { Menu } from '@/components/navbar/menu';
import { Searchbar } from '@/components/navbar/searchbar';
import { Link } from '@/components/shared';
import type {
  MenuItemProps,
  NavbarListItemProps,
  TopbarItemProps,
} from '@/types';
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
      iconClassName: 'size-6 sm:size-7 top-3',
    },
    children: <Menu />,
  },
  {
    title: {
      icon: FaSearch,
      text: 'Sök',
      ariaLabel: 'Visa eller dölj sökrutan',
    },
    children: <Searchbar />,
  },
  {
    title: {
      icon: FaUser,
      text: 'Logga in',
      ariaLabel: 'Visa eller dölj logga in rutan',
    },
    children: <Authentication component='login' />,
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
    title: { icon: BsMouse2, text: 'Datorutrustning' },
    links: [
      {
        title: { icon: FaRegKeyboard, text: 'Tangentbord' },
        href: '',
      },
      {
        title: { icon: BsMouse2, text: 'Datormöss' },
        href: '',
      },
      {
        title: { icon: BsHeadset, text: 'Hörlurar' },
        href: '',
      },
    ],
  },
  {
    i: 1,
    title: { icon: HiOutlineDesktopComputer, text: 'Datorer' },
    links: [
      {
        title: { icon: IoLaptopOutline, text: 'Bärbara datorer' },
        href: '',
      },
      {
        title: {
          icon: HiOutlineDesktopComputer,
          text: 'Stationära datorer',
        },
        href: '',
      },
    ],
  },
  {
    i: 2,
    title: { icon: TbDeviceIpad, text: 'Surfplattor' },
    links: [
      {
        title: { icon: TbDeviceIpad, text: 'Samsungs surfplattor' },
        href: '',
      },
      {
        title: { icon: TbDeviceIpad, text: 'Apples surfplattor' },
        href: '',
      },
    ],
  },
  {
    i: 3,
    title: { icon: IoPhonePortraitOutline, text: 'Mobiltelefoner' },
    links: [
      {
        title: { icon: IoPhonePortraitSharp, text: 'Samsungs telefoner' },
        href: '',
      },
      {
        title: { icon: IoPhonePortraitOutline, text: 'Apples telefoner' },
        href: '',
      },
    ],
  },
  {
    i: 4,
    title: { icon: IoTvOutline, text: 'TV' },
    links: [
      {
        title: { icon: IoMdTv, text: '48-60 Tum TV' },
        href: '',
      },
      {
        title: { icon: IoMdTv, text: '65-70 Tum TV' },
        href: '',
      },
      {
        title: { icon: IoMdTv, text: '75-85 Tum TV' },
        href: '',
      },
    ],
  },
  {
    i: 5,
    title: { icon: LuCable, text: 'Tillbehör' },
    links: [
      {
        title: { icon: BsLightningCharge, text: 'Laddare' },
        href: '',
      },
      {
        title: { icon: LuCable, text: 'Datorkablar' },
        href: '',
      },
      {
        title: { icon: MdOutlineDevicesOther, text: 'Övriga tillbehör' },
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
