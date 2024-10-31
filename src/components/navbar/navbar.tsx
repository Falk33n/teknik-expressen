import { NavbarListItem } from '@/components/navbar';
import { Topbar } from '@/components/navbar/topbar';
import { NavigationMenu, NavigationMenuList } from '@/components/shadcn';
import { NAVBAR_LIST_ITEMS_ARRAY } from '@/constants';

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
          {NAVBAR_LIST_ITEMS_ARRAY.map((item, i) => (
            <NavbarListItem
              key={`listItem-key-${i}`}
              {...item}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

Navbar.displayName = 'Navbar';
