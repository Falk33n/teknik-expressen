import { Rx } from '@/components/icons';
import { cn } from '@/lib/utils';
import * as Radix from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

export const ToastProvider = Radix.ToastProvider;

type ToastViewportProps = ComponentProps<typeof Radix.ToastViewport>;

export const ToastViewport = ({ className, ...props }: ToastViewportProps) => (
  <Radix.ToastViewport
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
);
ToastViewport.displayName = Radix.ToastViewport.displayName;

const toastVariants = cva(
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
  },
);

type ToastProps = ComponentProps<typeof Radix.Toast> &
  VariantProps<typeof toastVariants>;

export const Toast = ({
  className,
  variant = 'default',
  ...props
}: ToastProps) => (
  <Radix.Toast
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
);
Toast.displayName = Radix.Toast.displayName;

type ToastActionProps = ComponentProps<typeof Radix.ToastAction>;

export const ToastAction = ({ className, ...props }: ToastActionProps) => (
  <Radix.ToastAction
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className,
    )}
    {...props}
  />
);
ToastAction.displayName = Radix.ToastAction.displayName;

type ToastCloseProps = ComponentProps<typeof Radix.ToastClose>;

export const ToastClose = ({ className, ...props }: ToastCloseProps) => (
  <Radix.ToastClose
    className={cn(
      'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className,
    )}
    toast-close=''
    aria-label='Stäng'
    {...props}
  >
    <Rx.RxCross2 aria-hidden className='size-4' />
  </Radix.ToastClose>
);
ToastClose.displayName = Radix.ToastClose.displayName;

type ToastTitleProps = ComponentProps<typeof Radix.ToastTitle>;

export const ToastTitle = ({ className, ...props }: ToastTitleProps) => (
  <Radix.ToastTitle
    className={cn('text-sm font-semibold [&+div]:text-xs', className)}
    {...props}
  />
);
ToastTitle.displayName = Radix.ToastTitle.displayName;

type ToastDescriptionProps = ComponentProps<typeof Radix.ToastDescription>;

export const ToastDescription = ({
  className,
  ...props
}: ToastDescriptionProps) => (
  <Radix.ToastDescription
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
);
ToastDescription.displayName = Radix.ToastDescription.displayName;
