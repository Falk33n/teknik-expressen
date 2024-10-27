import {
  TopbarIconWithText,
  topbarIconWithTextData,
} from '@/components/navbar/topbar';

export const Topbar = () => {
  return (
    <div className='flex justify-evenly sm:justify-center items-center gap-3 sm:gap-12 bg-secondary px-4 py-2.5 w-full font-semibold text-secondary-foreground text-xs sm:text-sm uppercase tracking-wider sm:tracking-wide'>
      {topbarIconWithTextData.map((data, i) => (
        <TopbarIconWithText
          key={`iconWithText-key-${i}`}
          {...data}
        />
      ))}
    </div>
  );
};

Topbar.displayName = 'Topbar';
