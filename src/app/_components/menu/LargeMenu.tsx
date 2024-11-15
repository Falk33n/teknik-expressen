import { LargeMenuProducts } from '@/app/components/menu';
import type { HasActiveSession } from '@/app/layout';
import { Link } from '@/components/ui';

export const LargeMenu = ({ hasActiveSession }: HasActiveSession) => (
  <ul className='flex items-center gap-6 whitespace-nowrap max-lg:hidden xl:gap-10'>
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
        aria-label={`Gå till sidan ${hasActiveSession ? 'Mitt konto' : 'Logga in'}`}
        href={hasActiveSession ? '/account' : '/login'}
      >
        {hasActiveSession ? 'Mitt konto' : 'Logga in'}
      </Link>
    </li>
    <li>
      <Link className='rounded-sm px-4 py-2' href='/cart'>
        Kundkorg
      </Link>
    </li>
  </ul>
);
LargeMenu.displayName = 'LargeMenu';
