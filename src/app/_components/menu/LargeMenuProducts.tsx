import {
  LargeMenuProductsList,
  type LargeMenuProductsListProps,
} from '@/app/components/menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/modals';

const MENU_PRODUCTS_LISTS: LargeMenuProductsListProps[] = [
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

export const LargeMenuProducts = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className='rounded-sm px-4 py-2 underline-offset-2 transition-colors hover:text-primary hover:underline hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'>
      Produkter
    </DropdownMenuTrigger>

    <DropdownMenuContent
      sideOffset={21}
      className='flex w-[75vw] max-w-[700px] flex-wrap gap-x-10 gap-y-9 rounded-t-none p-4'
    >
      <DropdownMenuLabel className='sr-only'>
        Lista med alla produkter
      </DropdownMenuLabel>

      {MENU_PRODUCTS_LISTS.map((props, i) => (
        <LargeMenuProductsList key={i} {...props} />
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);
LargeMenuProducts.displayName = 'LargeMenuProducts';
