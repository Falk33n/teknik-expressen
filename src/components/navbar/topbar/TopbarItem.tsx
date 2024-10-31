import { cn } from '@/helpers';
import type { TopbarItemProps } from '@/types';

export const TopbarItem = ({
  icon: Icon,
  children,
  iconClassName,
}: TopbarItemProps) => {
  return (
    <div className='flex flex-shrink-0 items-center gap-2'>
      <Icon
        aria-hidden
        className={cn('size-4 sm:size-5', iconClassName)}
      />
      {children}
    </div>
  );
};

TopbarItem.displayName = 'TopbarItem';
