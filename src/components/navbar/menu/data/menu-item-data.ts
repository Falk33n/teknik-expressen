import type { MenuItemProps } from '@/components/navbar/menu';
import { BsHeadset, BsLightningCharge, BsMouse2 } from 'react-icons/bs';
import { FaRegKeyboard } from 'react-icons/fa6';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoMdTv } from 'react-icons/io';
import {
  IoLaptopOutline,
  IoPhonePortraitOutline,
  IoPhonePortraitSharp,
  IoTvOutline,
} from 'react-icons/io5';
import { LuCable } from 'react-icons/lu';
import { MdOutlineDevicesOther } from 'react-icons/md';
import { TbDeviceIpad } from 'react-icons/tb';

export const menuItemData: MenuItemProps[] = [
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