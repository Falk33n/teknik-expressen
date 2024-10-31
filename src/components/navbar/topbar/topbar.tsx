import { TopbarIconWithText } from '@/components/navbar/topbar';
import { TOPBAR_CONTENT_ARRAY } from '@/constants';

export const Topbar = () => {
  return (
    <div className='flex justify-evenly sm:justify-center items-center gap-3 sm:gap-12 bg-secondary px-4 py-2.5 w-full font-semibold text-secondary-foreground text-xs sm:text-sm uppercase tracking-wider sm:tracking-wide'>
      {TOPBAR_CONTENT_ARRAY.map((content, i) => (
        <TopbarIconWithText
          key={`iconWithText-key-${i}`}
          {...content}
        />
      ))}
    </div>
  );
};

Topbar.displayName = 'Topbar';
