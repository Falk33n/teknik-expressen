'use client';

import {
  Large_MenuProductsList,
  Large_MenuProductsListProps,
} from '@/app/_components';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components';

const MENU_PRODUCTS_LISTS: Large_MenuProductsListProps[] = [
  {
    category: 'Datorutrustning',
    listItems: [
      { text: 'Tangentbord', href: '' },
      { text: 'Datormöss', href: '' },
      { text: 'Hörlurar', href: '' },
    ],
  },
  {
    category: 'Datorer',
    listItems: [
      { text: 'Bärbara', href: '' },
      { text: 'Stationära', href: '' },
    ],
  },
  {
    category: 'Surfplattor',
    listItems: [
      { text: 'Samsung', href: '' },
      { text: 'Apple', href: '' },
    ],
  },
  {
    category: 'Mobiltelefoner',
    listItems: [
      { text: 'Samsung', href: '' },
      { text: 'Apple', href: '' },
    ],
  },
  {
    category: 'TV',
    listItems: [
      { text: '48-60 Tum', href: '' },
      { text: '65-70 Tum', href: '' },
      { text: '75-85 Tum', href: '' },
    ],
  },
  {
    category: 'Tillbehör',
    listItems: [
      { text: 'Datorkablar', href: '' },
      { text: 'Laddare', href: '' },
      { text: 'Övrigt', href: '' },
    ],
  },
];

export const Large_MenuProducts = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className='rounded-sm px-4 py-2 underline-offset-2 transition-colors hover:text-primary hover:underline hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'>
      Produkter
    </DropdownMenuTrigger>

    <DropdownMenuContent
      sideOffset={20}
      className='flex w-[50vw] max-w-[700px] flex-wrap rounded-t-none p-4'
    >
      <DropdownMenuLabel className='sr-only'>
        Lista med alla produkter
      </DropdownMenuLabel>

      {MENU_PRODUCTS_LISTS.map((props, i) => (
        <Large_MenuProductsList key={i} {...props} />
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
Large_MenuProducts.displayName = 'Large_MenuProducts';
