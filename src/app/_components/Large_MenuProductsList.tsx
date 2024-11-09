import { DropdownMenuItem, Link } from '@/components';
import type { ReactNode } from 'react';

export type Large_MenuProductsListProps = {
  category: string;
  href: string;
  text: ReactNode;
};

export const Large_MenuProductsList = ({
  category,
  href,
  text,
}: Large_MenuProductsListProps) => (
  <div
    aria-orientation='vertical'
    role='menu'
    aria-label={`Lista med länkar inom kategorin ${category}`}
    className='flex flex-col gap-1'
  >
    <DropdownMenuItem aria-hidden className='mb-1.5 font-semibold'>
      {category}
    </DropdownMenuItem>

    <DropdownMenuItem asChild>
      <Link href={href} aria-label={`Gå till sidan ${text}`}>
        {text}
      </Link>
    </DropdownMenuItem>
  </div>
);
Large_MenuProductsList.displayName = 'Large_MenuProductsList';
