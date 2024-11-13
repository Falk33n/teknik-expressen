import { LargeMenuProducts, ThemeToggle } from '@/app/components';
import { Link } from '@/components';

export const LargeMenu = ({
  isAuthenticated,
}: {
  isAuthenticated?: boolean;
}) => (
  <ul className='flex items-center gap-6 whitespace-nowrap xl:gap-10'>
    <li>
      <LargeMenuProducts />
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
LargeMenu.displayName = 'LargeMenu';
