import { cva } from 'class-variance-authority';

/*
 * used in shadcn / toast.tsx
 */
export const toastVariants = cva(
  'relative data-[state=closed]:slide-out-to-right-full data-[state=open]:sm:slide-in-from-bottom-full flex justify-between items-center space-x-2 data-[state=open]:slide-in-from-top-full shadow-lg p-4 pr-6 border rounded-md w-full transition-all data-[swipe=move]:transition-none data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-out data-[state=open]:animate-in data-[swipe=end]:animate-out overflow-hidden pointer-events-auto group data-[state=closed]:fade-out-80',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
        success: 'bg-green-500 border-green-600 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/*
 * used in shadcn / navigationMenu.tsx
 */
export const navigationMenuTriggerStyle = cva(
  'inline-flex justify-center items-center bg-primary dark:hover:bg-accent/40 data-[state=open]:bg-accent/15 hover:bg-accent/15 dark:focus:bg-accent/40 focus:bg-accent/15 dark:data-[state=open]:bg-accent/40 disabled:opacity-50 px-4 py-2 focus:ring-2 dark:focus:ring-accent/65 focus:ring-accent/35 focus:ring-inset w-max h-9 font-medium text-sm text-white transition-colors disabled:pointer-events-none group focus:outline-none'
);

/*
 * used in shadcn / label.tsx
 */
export const labelVariants = cva(
  'peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed'
);

/*
 * used in shadcn / button.tsx
 */
export const buttonVariants = cva(
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
  }
);
