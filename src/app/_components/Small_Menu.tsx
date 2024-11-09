'use client';

import {
  Small_MenuFooter,
  Small_MenuList,
  type Small_MenuListProps,
} from '@/app/_components';
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsHeadset, BsLightningCharge, BsMouse2 } from 'react-icons/bs';
import { FaBars, FaRegKeyboard } from 'react-icons/fa6';
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

const SMALL_MENU_LISTS: Small_MenuListProps[] = [
  {
    trigger: { Icon: BsMouse2, text: 'Datorutrustning' },
    content: [
      {
        href: '',
        Icon: FaRegKeyboard,
        text: 'Tangentbord',
      },
      {
        href: '',
        Icon: BsMouse2,
        text: 'Datormöss',
      },
      {
        href: '',
        Icon: BsHeadset,
        text: 'Hörlurar',
      },
    ],
  },
  {
    trigger: { Icon: HiOutlineDesktopComputer, text: 'Datorer' },
    content: [
      {
        href: '',
        Icon: IoLaptopOutline,
        text: 'Bärbara datorer',
      },
      {
        href: '',
        Icon: HiOutlineDesktopComputer,
        text: 'Stationära datorer',
      },
    ],
  },
  {
    trigger: { Icon: TbDeviceIpad, text: 'Surfplattor' },
    content: [
      {
        href: '',
        Icon: TbDeviceIpad,
        text: 'Samsungs surfplattor',
      },
      {
        href: '',
        Icon: TbDeviceIpad,
        text: 'Apples surfplattor',
      },
    ],
  },
  {
    trigger: { Icon: IoPhonePortraitOutline, text: 'Mobiltelefoner' },
    content: [
      {
        href: '',
        Icon: IoPhonePortraitSharp,
        text: 'Samsungs mobiltelefoner',
      },
      {
        href: '',
        Icon: IoPhonePortraitOutline,
        text: 'Apples mobiltelefoner',
      },
    ],
  },
  {
    trigger: { Icon: IoTvOutline, text: 'TV' },
    content: [
      {
        href: '',
        Icon: IoMdTv,
        text: '48-60 Tums TV',
      },
      {
        href: '',
        Icon: IoMdTv,
        text: '65-70 Tums TV',
      },
      {
        href: '',
        Icon: IoMdTv,
        text: '75-85 Tums TV',
      },
    ],
  },
  {
    trigger: { Icon: LuCable, text: 'Tillbehör' },
    content: [
      {
        href: '',
        Icon: BsLightningCharge,
        text: 'Laddare',
      },
      {
        href: '',
        Icon: LuCable,
        text: 'Datorkablar',
      },
      {
        href: '',
        Icon: MdOutlineDevicesOther,
        text: 'Övriga tillbehör',
      },
    ],
  },
];

export const Small_Menu = ({
  isAuthenticated,
}: {
  isAuthenticated?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          aria-label='Öppna eller dölj menyn'
          variant='outline'
          size='icon'
          className='p-2 sm:size-10'
          onClick={() => setIsOpen(true)}
        >
          <FaBars aria-hidden className='sm:scale-110' />
        </Button>
      </SheetTrigger>

      <SheetContent className='overflow-y-auto'>
        <SheetHeader>
          <SheetTitle className='sr-only'>Meny</SheetTitle>

          <SheetDescription className='sr-only'>
            Navigera till olika sidor inom denna webbplats
          </SheetDescription>
        </SheetHeader>

        {SMALL_MENU_LISTS.map((props, i) => (
          <Small_MenuList key={i} {...props} />
        ))}

        <SheetFooter className='flex-1'>
          <Small_MenuFooter isAuthenticated={isAuthenticated} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
Small_Menu.displayName = 'Small_Menu';
