import { IconWithText, type IconWithTextProps } from '@/components';
import { IoReloadSharp } from 'react-icons/io5';
import { LiaAwardSolid, LiaShippingFastSolid } from 'react-icons/lia';

const ICONS_WITH_TEXTS: IconWithTextProps[] = [
  {
    Icon: LiaAwardSolid,
    text: 'Prismatch',
  },
  {
    Icon: IoReloadSharp,
    iconClassName: 'scale-x-[-1]',
    text: (
      <>
        <span aria-label='Fri retur inom 30 dagar' className='sm:hidden'>
          Fri retur*
        </span>
        <span className='hidden sm:inline'>Fri retur inom 30 dagar</span>
      </>
    ),
  },
  {
    Icon: LiaShippingFastSolid,
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

    <aside className='flex w-full items-center justify-evenly gap-2 overflow-x-auto bg-secondary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground sm:justify-center sm:gap-8 sm:py-3 sm:text-sm sm:tracking-wide md:gap-12'>
      {ICONS_WITH_TEXTS.map((props, i) => (
        <IconWithText key={i} {...props} />
      ))}
    </aside>
  </>
);
Topbar.displayName = 'Topbar';
