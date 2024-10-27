import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  NavigationMenuItem,
} from '@/components/ui';
import { cn } from '@/lib';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { BsMouse2 } from 'react-icons/bs';
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
    <NavigationMenuItem
      className={cn(i % 2 !== 0 && 'bg-secondary', 'w-full px-6')}
    >
      <Accordion
        type='single'
        collapsible
      >
        <AccordionItem value={`accordion-item-${i}`}>
          <AccordionTrigger aria-label={`${title}, Visa eller dölj innehållet`}>
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
            className={i % 2 !== 0 ? 'dark:border-background/60' : ''}
          >
            {children}
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
    children: 'Hej hej',
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
