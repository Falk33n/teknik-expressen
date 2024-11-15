import { Button, type ButtonProps } from '@/components/form';
import { Link } from '@/components/ui';
import { cn } from '@/lib/utils';

type ErrorButtonProps = ButtonProps & {
  href?: string;
  asLink?: boolean;
  text: string;
};

export const ErrorButton = ({
  href = '/',
  text,
  asLink = false,
  className,
  ...props
}: ErrorButtonProps) => (
  <Button
    asChild={asLink}
    className={cn(
      'hover:bg-primary/60 hover:text-white focus-visible:bg-primary/60 focus-visible:text-white',
      className,
    )}
    {...props}
  >
    {asLink ? (
      <Link href={href} resetClassName>
        {text}
      </Link>
    ) : (
      text
    )}
  </Button>
);
ErrorButton.displayName = 'ErrorButton';
