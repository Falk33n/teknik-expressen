'use client';

import {
  SmallMenuFooter,
  SmallMenuList,
  type SmallMenuListProps,
} from '@/app/root/layout/components/menu';
import type { HasActiveSession } from '@/app/root/layout/lib';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/feedback';
import { Button } from '@/components/form';
import { Bs, Fa6, Hi, Io5, Lu, Md, Tb } from '@/components/icons';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/modals';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SMALL_MENU_LISTS: SmallMenuListProps[] = [
  {
    trigger: { Icon: Bs.BsMouse2, text: 'Datorutrustning' },
    content: [
      {
        href: '',
        Icon: Fa6.FaRegKeyboard,
        text: 'Tangentbord',
      },
      {
        href: '',
        Icon: Bs.BsMouse2,
        text: 'Datormöss',
      },
      {
        href: '',
        Icon: Bs.BsHeadset,
        text: 'Hörlurar',
      },
    ],
  },
  {
    trigger: { Icon: Hi.HiOutlineDesktopComputer, text: 'Datorer' },
    content: [
      {
        href: '',
        Icon: Io5.IoLaptopOutline,
        text: 'Bärbara datorer',
      },
      {
        href: '',
        Icon: Hi.HiOutlineDesktopComputer,
        text: 'Stationära datorer',
      },
    ],
  },
  {
    trigger: { Icon: Tb.TbDeviceIpad, text: 'Surfplattor' },
    content: [
      {
        href: '',
        Icon: Tb.TbDeviceIpad,
        text: 'Samsungs surfplattor',
      },
      {
        href: '',
        Icon: Tb.TbDeviceIpad,
        text: 'Apples surfplattor',
      },
    ],
  },
  {
    trigger: { Icon: Io5.IoPhonePortraitOutline, text: 'Mobiltelefoner' },
    content: [
      {
        href: '',
        Icon: Io5.IoPhonePortraitSharp,
        text: 'Samsungs mobiltelefoner',
      },
      {
        href: '',
        Icon: Io5.IoPhonePortraitOutline,
        text: 'Apples mobiltelefoner',
      },
    ],
  },
  {
    trigger: { Icon: Io5.IoTvOutline, text: 'TV' },
    content: [
      {
        href: '',
        Icon: Io5.IoTv,
        text: '48-60 Tums TV',
      },
      {
        href: '',
        Icon: Io5.IoTv,
        text: '65-70 Tums TV',
      },
      {
        href: '',
        Icon: Io5.IoTv,
        text: '75-85 Tums TV',
      },
    ],
  },
  {
    trigger: { Icon: Lu.LuCable, text: 'Tillbehör' },
    content: [
      {
        href: '',
        Icon: Bs.BsLightningCharge,
        text: 'Laddare',
      },
      {
        href: '',
        Icon: Lu.LuCable,
        text: 'Datorkablar',
      },
      {
        href: '',
        Icon: Md.MdOutlineDevicesOther,
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
                  <Fa6.FaBars aria-hidden className='sm:scale-110' />
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
