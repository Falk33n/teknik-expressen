import { cn } from '@/lib';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { FaAward } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { IoReloadSharp } from 'react-icons/io5';

type IconWithTextProps = {
  icon: IconType;
  children: ReactNode;
  className?: string;
};

const IconWithTextData: IconWithTextProps[] = [
  {
    icon: FaAward,
    children: 'Prismatch',
  },
  {
    icon: IoReloadSharp,
    children: 'Fri retur',

    className: 'scale-x-[-1]',
  },
  {
    icon: FaTruckFast,
    children: (
      <span aria-label='Fri frakt över 500kr'>
        Fri frakt <span className='sm:inline hidden'>över 500kr</span>
      </span>
    ),
  },
];

const IconWithText = ({
  icon: Icon,
  children,
  className,
}: IconWithTextProps) => {
  return (
    <div className='flex flex-shrink-0 items-center gap-2'>
      <Icon
        aria-hidden
        className={cn('size-4 sm:size-5', className)}
      />
      {children}
    </div>
  );
};

IconWithText.displayName = 'TopbarIconWithText';

export const Topbar = () => {
  return (
    <div className='flex justify-evenly sm:justify-center items-center gap-4 sm:gap-12 bg-secondary px-4 py-2.5 w-full font-semibold text-secondary-foreground text-xs sm:text-sm uppercase tracking-wider sm:tracking-wide'>
      {IconWithTextData.map((data, i) => (
        <IconWithText
          key={`iconWithText-key-${i}`}
          {...data}
        />
      ))}
    </div>
  );
};

Topbar.displayName = 'Topbar';
