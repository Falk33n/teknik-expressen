import { TopbarItem } from '@/components/navbar/topbar';
import { TOPBAR_ITEMS_ARRAY } from '@/constants';

// The bar that is over the navbar
export const Topbar = () => {
  return (
    <div className='flex justify-evenly sm:justify-center items-center gap-3 sm:gap-12 bg-secondary px-4 py-2.5 w-full font-semibold text-secondary-foreground text-xs sm:text-sm uppercase tracking-wider sm:tracking-wide'>
      {TOPBAR_ITEMS_ARRAY.map((item, i) => (
        <TopbarItem
          key={`topbarItem-key-${i}`}
          {...item}
        />
      ))}
    </div>
  );
};

Topbar.displayName = 'Topbar';
