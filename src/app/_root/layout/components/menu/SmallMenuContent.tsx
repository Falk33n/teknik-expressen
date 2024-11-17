import { LinkIconWithText, type LinkIconWithTextProps } from '@/components';

import { cn } from '@/lib/utils';

export type SmallMenuContentProps = LinkIconWithTextProps & {
  className?: string;
};

export const SmallMenuContent = ({
  className,
  ...props
}: SmallMenuContentProps) => (
  <li className={cn('h-fit w-full', className)}>
    <LinkIconWithText {...props} />
  </li>
);
SmallMenuContent.displayName = 'SmallMenuContent';
