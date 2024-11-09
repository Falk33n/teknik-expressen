import { LinkIconWithText, type LinkIconWithTextProps } from '@/components';
import { cn } from '@/lib';

export type Small_MenuContentProps = LinkIconWithTextProps & {
  className?: string;
};

export const Small_MenuContent = ({
  className,
  ...props
}: Small_MenuContentProps) => (
  <li className={cn('h-fit w-full', className)}>
    <LinkIconWithText {...props} />
  </li>
);
Small_MenuContent.displayName = 'Small_MenuContent';
