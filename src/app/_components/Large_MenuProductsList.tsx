import { DropdownMenuItem, Link } from '@/components';

export type Large_MenuProductsListProps = {
  category: string;
  listItems: { text: string; href: string }[];
};

export const Large_MenuProductsList = ({
  category,
  listItems,
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

    {listItems.map(({ text, href }, i) => (
      <DropdownMenuItem asChild key={i}>
        <Link
          href={href}
          aria-label={`Gå till sidan ${text} inom kategorin ${category}`}
        >
          {text}
        </Link>
      </DropdownMenuItem>
    ))}
  </div>
);
Large_MenuProductsList.displayName = 'Large_MenuProductsList';
