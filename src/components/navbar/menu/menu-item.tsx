import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  NavigationMenuItem,
} from '@/components/ui';
import { cn } from '@/lib';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { BsMouse2 } from 'react-icons/bs';
import { FaRegKeyboard } from 'react-icons/fa6';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoPhonePortraitOutline, IoTvOutline } from 'react-icons/io5';
import { LuCable } from 'react-icons/lu';
import { TbDeviceIpad } from 'react-icons/tb';

type MenuItemProps = {
  i: number;
  title: { icon: IconType; children?: ReactNode };
  children?: ReactNode;
};

export const MenuItem = ({
  i,
  title: { icon: Icon, children: title },
  children,
}: MenuItemProps) => {
  return (
    <NavigationMenuItem className={cn(i % 2 !== 0 && 'bg-secondary', 'w-full')}>
      <Accordion
        type='single'
        collapsible
      >
        <AccordionItem value={`accordion-item-${i}`}>
          <AccordionTrigger
            aria-label={`${title}, Visa eller dölj innehållet`}
            className='px-6'
          >
            <span
              aria-hidden
              className='flex items-center gap-3'
            >
              <Icon
                aria-hidden
                className='size-4'
              />
              {title}
            </span>
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              'py-0 bg-accent/10',
              i % 2 !== 0 && 'dark:border-background/60'
            )}
          >
            <ul
              role='menu'
              aria-label='Lista med länkar till innehåll inom ACCORDION_ITEM_TITLE'
              className='flex flex-col'
            >
              {children}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </NavigationMenuItem>
  );
};

MenuItem.displayName = 'MenuItem';

export const menuItemData: MenuItemProps[] = [
  {
    i: 0,
    title: { icon: BsMouse2, children: 'Datorutrustning' },
    children: (
      <>
        <li
          role='menuitem'
          className='focus-within:ring-2 focus-within:ring-primary focus-within:ring-inset'
        >
          <Link
            href=''
            aria-label='Gå till sidan tangentbord'
            className='flex items-center py-4 border-b w-full text-foreground hover:text-primary focus-visible:text-primary underline-offset-4 hover:underline transition-colors hover:decoration-primary focus-visible:outline-none'
          >
            <span
              className='flex items-center gap-2 px-6'
              aria-hidden
            >
              <FaRegKeyboard
                aria-hidden
                className='size-4'
              />
              Tangentbord
            </span>
          </Link>
        </li>
        <li
          role='menuitem'
          className='focus-within:ring-2 focus-within:ring-primary focus-within:ring-inset'
        >
          <Link
            href=''
            aria-label='Gå till sidan tangentbord'
            className='flex items-center py-4 border-b w-full text-foreground hover:text-primary focus-visible:text-primary underline-offset-4 hover:underline transition-colors hover:decoration-primary focus-visible:outline-none'
          >
            <span
              className='flex items-center gap-2 px-6'
              aria-hidden
            >
              <FaRegKeyboard
                aria-hidden
                className='size-4'
              />
              Tangentbord
            </span>
          </Link>
        </li>
        <li
          role='menuitem'
          className='focus-within:ring-2 focus-within:ring-primary focus-within:ring-inset'
        >
          <Link
            href=''
            aria-label='Gå till sidan tangentbord'
            className='flex items-center py-4 border-b w-full text-foreground hover:text-primary focus-visible:text-primary underline-offset-4 hover:underline transition-colors hover:decoration-primary focus-visible:outline-none'
          >
            <span
              className='flex items-center gap-2 px-6'
              aria-hidden
            >
              <FaRegKeyboard
                aria-hidden
                className='size-4'
              />
              Tangentbord
            </span>
          </Link>
        </li>
        <li
          role='menuitem'
          className='focus-within:ring-2 focus-within:ring-primary focus-within:ring-inset'
        >
          <Link
            href=''
            aria-label='Gå till sidan tangentbord'
            className='flex items-center py-4 border-b w-full text-foreground hover:text-primary focus-visible:text-primary underline-offset-4 hover:underline transition-colors hover:decoration-primary focus-visible:outline-none'
          >
            <span
              className='flex items-center gap-2 px-6'
              aria-hidden
            >
              <FaRegKeyboard
                aria-hidden
                className='size-4'
              />
              Tangentbord
            </span>
          </Link>
        </li>
      </>
    ),
  },
  {
    i: 1,
    title: { icon: HiOutlineDesktopComputer, children: 'Datorer' },
    children: 'Hej hej',
  },
  {
    i: 2,
    title: { icon: TbDeviceIpad, children: 'Surfplattor' },
    children: 'Hej hej',
  },
  {
    i: 3,
    title: { icon: IoPhonePortraitOutline, children: 'Mobiltelefoner' },
    children: 'Hej hej',
  },
  {
    i: 4,
    title: { icon: IoTvOutline, children: 'TV' },
    children: 'Hej hej',
  },
  {
    i: 5,
    title: { icon: LuCable, children: 'Tillbehör' },
    children: 'Hej hej',
  },
];
