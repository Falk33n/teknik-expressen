import { cn } from '@/lib';
import { ReloadIcon } from '@radix-ui/react-icons';
import type { IconProps } from '@radix-ui/react-icons/dist/types';
import type {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';

type IconWithTextProps = {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  children: ReactNode;
  className?: string;
};

const IconWithTextData: IconWithTextProps[] = [
  {
    Icon: ReloadIcon,
    children: 'Fri retur',
    className: 'rotate-180',
  },
  {
    Icon: ReloadIcon,
    children: 'Reload',
    className: 'rotate-180',
  },
];

const IconWithText = ({ Icon, children, className }: IconWithTextProps) => {
  return (
    <div className='flex items-center gap-2 font-semibold uppercase'>
      {
        <Icon
          aria-hidden
          className={cn('size-4', className)}
        />
      }
      <span>{children}</span>
    </div>
  );
};

IconWithText.displayName = 'TopbarIconWithText';

export const Topbar = () => {
  return (
    <div className='flex justify-center items-center gap-8 w-full'>
      {IconWithTextData.map((data, i) => (
        <IconWithText
          key={`iconWithText-key-${i}`}
          {...data}
        />
      ))}
    </div>
  );
};

Topbar.displayName = 'Topbar';
