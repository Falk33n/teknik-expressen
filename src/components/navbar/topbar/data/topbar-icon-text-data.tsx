import type { TopbarIconWithTextProps } from '@/components/navbar/topbar';
import { FaAward, FaTruckFast } from 'react-icons/fa6';
import { IoReloadSharp } from 'react-icons/io5';

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
