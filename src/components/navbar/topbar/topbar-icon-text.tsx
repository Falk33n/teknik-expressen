import { cn } from '@/helpers';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

export type TopbarIconWithTextProps = {
  icon: IconType;
  children: ReactNode;
  className?: string;
};

export const TopbarIconWithText = ({
  icon: Icon,
  children,
  className,
}: TopbarIconWithTextProps) => {
  return (
    <div className='flex flex-shrink-0 items-center gap-2'>
      <Icon
        aria-hidden
        className={cn('size-4 sm:size-5', className)}
      />
      {children}
    </div>
  );
};

TopbarIconWithText.displayName = 'TopbarIconWithText';
