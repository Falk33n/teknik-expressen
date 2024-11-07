import { LinkIconWithText, type LinkIconWithTextProps } from '@/components';
import { cn } from '@/lib';

type MenuContentProps = LinkIconWithTextProps & {
  className?: string;
};

export const MenuContent = ({ className, ...props }: MenuContentProps) => (
  <li className={cn('h-fit w-full', className)}>
    <LinkIconWithText {...props} />
  </li>
);
MenuContent.displayName = 'MenuContent';
