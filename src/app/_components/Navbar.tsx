import { MenuWrapper, Searchbar } from '@/app/_components';

export const Navbar = () => (
  <nav
    className='sticky top-0 z-[20] bg-accent/20 shadow-md backdrop-blur-lg'
    aria-label='Huvudnavigation'
  >
    <div className='mx-auto flex w-full items-center justify-between gap-6 p-4 sm:gap-8 sm:px-12 sm:py-5 md:gap-10 lg:w-[90vw] xl:w-[75vw]'>
      <div className='flex flex-1 items-center justify-between gap-6 sm:gap-8 md:justify-start md:gap-10'>
        {/* TODO: place brand logo here */}
        <p>logo</p>

        <Searchbar />
      </div>

      <MenuWrapper />
    </div>
  </nav>
);
Navbar.displayName = 'Navbar';
