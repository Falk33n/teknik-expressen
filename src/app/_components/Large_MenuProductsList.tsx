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
    <div
      aria-hidden
      className='pointer-events-none mb-0.5 px-2 py-1.5 text-base font-semibold tracking-wide'
    >
      {category}
    </div>

    {listItems.map((item, i) => (
      <DropdownMenuItem asChild key={i}>
        <Link
          href={item.href}
          aria-label={`Gå till sidan ${item.text} inom kategorin ${category}`}
        >
          {item.text}
        </Link>
      </DropdownMenuItem>
    ))}
  </div>
);
Large_MenuProductsList.displayName = 'Large_MenuProductsList';
