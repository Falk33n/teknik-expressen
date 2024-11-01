import { MenuItem } from '@/components/navbar/menu';
import { NavigationMenuClose } from '@/components/navbar/shared';
import { NavigationMenu, NavigationMenuList } from '@/components/shadcn';
import { Link } from '@/components/shared';
import { ThemeToggle } from '@/components/theme';
import { MENU_ITEM_ARRAY } from '@/constants';
import { MdSupportAgent } from 'react-icons/md';

export const Menu = () => {
  return (
    <div className='flex flex-col w-full h-[calc(100vh-4.5rem)] overflow-y-auto'>
      <NavigationMenuClose trigger='.menu-trigger' />

      <NavigationMenu
        className='justify-start items-start w-full max-w-full [&>div]:w-full'
        aria-label='Navigering till flikar inom webbsidan'
      >
        <NavigationMenuList
          data-orientation='vertical'
          className='flex-col space-x-0 w-full'
        >
          {MENU_ITEM_ARRAY.map((item, i) => (
            <MenuItem
              key={`menuItem-key-${i}`}
              {...item}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className='flex flex-col justify-end items-center py-10'>
        <Link
          aria-label='Gå till kundtjänst sidan'
          href=''
          className='mb-10 py-4 border-b focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset w-full text-sm sm:text-base hover:text-primary hover:underline transition-colors self-start hover:decoration-primary focus-visible:outline-none hover:underline-offset-4'
        >
          <span
            aria-hidden
            className='flex items-center gap-3 px-6 font-medium'
          >
            <MdSupportAgent
              aria-hidden
              className='size-5 sm:size-6'
            />
            Kundtjänst
          </span>
        </Link>

        <ThemeToggle />
      </div>
    </div>
  );
};

Menu.displayName = 'Menu';
