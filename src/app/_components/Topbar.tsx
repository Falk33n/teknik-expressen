import { IconWithText, type IconWithTextProps } from '@/components';
import { FaAward, FaTruckFast } from 'react-icons/fa6';
import { IoReloadSharp } from 'react-icons/io5';

const ICONS_WITH_TEXTS: IconWithTextProps[] = [
  {
    Icon: FaAward,
    text: 'Prismatch',
  },
  {
    Icon: IoReloadSharp,
    iconClassName: 'scale-x-[-1]',
    text: 'Fri retur',
  },
  {
    Icon: FaTruckFast,
    text: (
      <>
        <span aria-label='Fri frakt över 500kr' className='sm:hidden'>
          Fri frakt*
        </span>
        <span className='hidden sm:inline'>Fri frakt över 500kr</span>
      </>
    ),
  },
];

export const Topbar = () => (
  <>
    <header className='sr-only'>
      <h1>Välkommen till Teknik-Expressen</h1>
    </header>

    <aside className='flex w-full items-center justify-evenly gap-3 bg-secondary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground sm:justify-center sm:gap-12 sm:text-sm sm:tracking-wide'>
      {ICONS_WITH_TEXTS.map((props, i) => (
        <IconWithText key={i} {...props} />
      ))}
    </aside>
  </>
);
Topbar.displayName = 'Topbar';
