import { Large_MenuProducts, ThemeToggle } from '@/app/_components';
import { Link } from '@/components';

export const Large_Menu = ({
  isAuthenticated,
}: {
  isAuthenticated?: boolean;
}) => (
  <ul className='flex items-center gap-6 whitespace-nowrap xl:gap-10'>
    <li>
      <Large_MenuProducts />
    </li>
    <li>
      <Link className='rounded-sm px-4 py-2' href='/support'>
        Kundtjänst
      </Link>
    </li>
    <li>
      <Link
        className='rounded-sm px-4 py-2'
        aria-live='polite'
        aria-label={`Gå till sidan ${isAuthenticated ? 'Mitt konto' : 'Logga in'}`}
        href={isAuthenticated ? '/account' : '/login'}
      >
        {isAuthenticated ? 'Mitt konto' : 'Logga in'}
      </Link>
    </li>
    <li>
      <Link className='rounded-sm px-4 py-2' href='/cart'>
        Kundkorg
      </Link>
    </li>
    <li>
      <ThemeToggle />
    </li>
  </ul>
);
Large_Menu.displayName = 'Large_Menu';
