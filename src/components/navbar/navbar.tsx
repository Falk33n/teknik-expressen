import { NavbarListItem } from '@/components/navbar';
import { navbarListItemData } from '@/components/navbar/data';
import { Topbar } from '@/components/navbar/topbar';
import { NavigationMenu, NavigationMenuList } from '@/components/ui';

export const Navbar = () => {
  return (
    <header>
      <Topbar />
      <div></div>
      <NavigationMenu
        aria-label='Huvudnavigering'
        className='max-lg:bottom-0 max-lg:fixed flex justify-center items-center space-x-0 bg-primary [&>div]:w-full w-full max-w-full text-primary-foreground'
      >
        <NavigationMenuList className='space-x-0 lg:hidden w-full'>
          {navbarListItemData.map((data, i) => (
            <NavbarListItem
              key={`listItem-key-${i}`}
              {...data}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

Navbar.displayName = 'Navbar';
