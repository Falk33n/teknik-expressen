import { Menu, Searchbar } from '@/app/_components';

export const Navbar = () => (
  <nav
    className='sticky top-0 z-[20] flex w-full items-center justify-between gap-6 bg-accent/20 p-4 shadow-md backdrop-blur-lg sm:gap-20 sm:px-12 sm:py-5'
    aria-label='Huvudnavigation'
  >
    {/* TODO: place brand logo here */}
    <p>logo</p>

    <Searchbar />

    <Menu />
  </nav>
);
Navbar.displayName = 'Navbar';
