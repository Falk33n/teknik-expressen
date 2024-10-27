import { cn } from '@/lib';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { FaAward, FaTruckFast } from 'react-icons/fa6';
import { IoReloadSharp } from 'react-icons/io5';

type TopbarIconWithTextProps = {
  icon: IconType;
  children: ReactNode;
  className?: string;
};

export const TopbarIconWithText = ({
  icon: Icon,
  children,
  className,
}: TopbarIconWithTextProps) => {
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

TopbarIconWithText.displayName = 'TopbarIconWithText';

export const topbarIconWithTextData: TopbarIconWithTextProps[] = [
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
