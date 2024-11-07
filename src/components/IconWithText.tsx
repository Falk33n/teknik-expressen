import { Link, type LinkProps } from '@/components';
import { cn, omitKeys, pickKeys } from '@/lib';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

export type IconWithTextProps = {
  Icon: IconType;
  iconClassName?: string;
  text: ReactNode;
};

export const IconWithText = ({
  Icon,
  iconClassName,
  text,
}: IconWithTextProps) => (
  <span className='flex flex-shrink-0 items-center gap-2'>
    <Icon aria-hidden className={cn('size-4 sm:size-5', iconClassName)} />

    {text}
  </span>
);
IconWithText.displayName = IconWithText;

export type LinkIconWithTextProps = LinkProps & IconWithTextProps;

export const LinkIconWithText = ({
  'aria-label': ariaLabel,
  ...props
}: LinkIconWithTextProps) => {
  const linkProps = omitKeys(props, ['Icon', 'iconClassName', 'text']);
  const iconWithTextProps = pickKeys(props, ['Icon', 'iconClassName', 'text']);

  return (
    <Link
      className='flex w-full items-center p-4 font-medium capitalize'
      aria-label={ariaLabel ?? `Gå till sidan ${iconWithTextProps.text}`}
      {...linkProps}
    >
      <IconWithText {...iconWithTextProps} />
    </Link>
  );
};
LinkIconWithText.displayName = 'LinkIconWithText';
