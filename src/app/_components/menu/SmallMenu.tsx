'use client';

import {
  SmallMenuFooter,
  SmallMenuList,
  type SmallMenuListProps,
} from '@/app/components';
import {
  Button,
  Icons,
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

const SMALL_MENU_LISTS: SmallMenuListProps[] = [
  {
    trigger: { Icon: Icons.BsMouse2, text: 'Datorutrustning' },
    content: [
      {
        href: '',
        Icon: Icons.FaRegKeyboard,
        text: 'Tangentbord',
      },
      {
        href: '',
        Icon: Icons.BsMouse2,
        text: 'Datormöss',
      },
      {
        href: '',
        Icon: Icons.BsHeadset,
        text: 'Hörlurar',
      },
    ],
  },
  {
    trigger: { Icon: Icons.HiOutlineDesktopComputer, text: 'Datorer' },
    content: [
      {
        href: '',
        Icon: Icons.IoLaptopOutline,
        text: 'Bärbara datorer',
      },
      {
        href: '',
        Icon: Icons.HiOutlineDesktopComputer,
        text: 'Stationära datorer',
      },
    ],
  },
  {
    trigger: { Icon: Icons.TbDeviceIpad, text: 'Surfplattor' },
    content: [
      {
        href: '',
        Icon: Icons.TbDeviceIpad,
        text: 'Samsungs surfplattor',
      },
      {
        href: '',
        Icon: Icons.TbDeviceIpad,
        text: 'Apples surfplattor',
      },
    ],
  },
  {
    trigger: { Icon: Icons.IoPhonePortraitOutline, text: 'Mobiltelefoner' },
    content: [
      {
        href: '',
        Icon: Icons.IoPhonePortraitSharp,
        text: 'Samsungs mobiltelefoner',
      },
      {
        href: '',
        Icon: Icons.IoPhonePortraitOutline,
        text: 'Apples mobiltelefoner',
      },
    ],
  },
  {
    trigger: { Icon: Icons.IoTvOutline, text: 'TV' },
    content: [
      {
        href: '',
        Icon: Icons.IoTv,
        text: '48-60 Tums TV',
      },
      {
        href: '',
        Icon: Icons.IoTv,
        text: '65-70 Tums TV',
      },
      {
        href: '',
        Icon: Icons.IoTv,
        text: '75-85 Tums TV',
      },
    ],
  },
  {
    trigger: { Icon: Icons.LuCable, text: 'Tillbehör' },
    content: [
      {
        href: '',
        Icon: Icons.BsLightningCharge,
        text: 'Laddare',
      },
      {
        href: '',
        Icon: Icons.LuCable,
        text: 'Datorkablar',
      },
      {
        href: '',
        Icon: Icons.MdOutlineDevicesOther,
        text: 'Övriga tillbehör',
      },
    ],
  },
];

export const SmallMenu = ({
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
          <Icons.FaBars aria-hidden className='sm:scale-110' />
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
          <SmallMenuList key={i} {...props} />
        ))}

        <SheetFooter className='flex-1'>
          <SmallMenuFooter isAuthenticated={isAuthenticated} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
SmallMenu.displayName = 'SmallMenu';
