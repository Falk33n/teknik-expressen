import { Link } from '@/components';
import { cn } from '@/lib';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex justify-center items-center gap-2 disabled:opacity-50 rounded-md focus-visible:ring-1 focus-visible:ring-ring font-medium text-sm whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonType = HTMLButtonElement;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<ButtonType, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

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
    {!asLink && text}
    {asLink && (
      <Link href={href} resetClassName>
        {text}
      </Link>
    )}
  </Button>
);
ErrorButton.displayName = 'ErrorButton';
