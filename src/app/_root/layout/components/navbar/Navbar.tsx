import { MenuWrapper } from '@/app/root/layout/components/menu';
import { Searchbar } from '@/app/root/layout/components/navbar';
import type { HasActiveSession } from '@/app/root/layout/lib';
import { Logo } from '@/components/ui';

export const Navbar = ({ hasActiveSession }: HasActiveSession) => (
  <nav
    className='sticky top-0 z-[20] bg-accent/20 shadow backdrop-blur-lg'
    aria-label='Huvudnavigation'
  >
    <div className='mx-auto flex w-full items-center justify-between gap-6 p-4 sm:gap-8 sm:px-12 sm:py-5 md:gap-10 lg:w-[90vw] xl:w-[75vw]'>
      <div className='flex flex-1 items-center justify-between gap-6 sm:gap-8 md:justify-start md:gap-10'>
        <Logo />

        <Searchbar className='max-sm:hidden' />
      </div>

      <MenuWrapper hasActiveSession={hasActiveSession} />
    </div>

    <Searchbar className='sm:hidden' />
  </nav>
);
Navbar.displayName = 'Navbar';
