'use client';

import {
  SmallMenuFooter,
  SmallMenuList,
  type SmallMenuListProps,
} from '@/app/_root/layout/components';
import {
  BsHeadset,
  BsLightningCharge,
  BsMouse2,
  Button,
  FaBars,
  FaRegKeyboard,
  HiOutlineDesktopComputer,
  IoLaptopOutline,
  IoPhonePortraitOutline,
  IoPhonePortraitSharp,
  IoTv,
  IoTvOutline,
  LuCable,
  MdOutlineDevicesOther,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  TbDeviceIpad,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { HasActiveSession } from '@/app/_root/layout/lib/types';

const SMALL_MENU_LISTS: SmallMenuListProps[] = [
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
        Icon: IoTv,
        text: '48-60 Tums TV',
      },
      {
        href: '',
        Icon: IoTv,
        text: '65-70 Tums TV',
      },
      {
        href: '',
        Icon: IoTv,
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

export const SmallMenu = ({ hasActiveSession }: HasActiveSession) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className='lg:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <TooltipProvider>
          <Tooltip>
            <SheetTrigger asChild>
              <TooltipTrigger asChild>
                <Button
                  aria-label='Öppna menyn'
                  variant='outline'
                  size='icon'
                  className='p-2 sm:size-10'
                  onClick={() => setIsOpen(true)}
                >
                  <FaBars aria-hidden className='sm:scale-110' />
                </Button>
              </TooltipTrigger>
            </SheetTrigger>

            <TooltipContent
              className='focus-visible:outline-none'
              side='bottom'
              sideOffset={10}
              aria-hidden
            >
              <p>Öppna menyn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <SheetContent className='max-h-screen overflow-y-auto'>
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
            <SmallMenuFooter hasActiveSession={hasActiveSession} />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
SmallMenu.displayName = 'SmallMenu';
