import {
  RadixToast,
  RadixToastAction,
  RadixToastClose,
  RadixToastDescription,
  RadixToastProvider,
  RadixToastTitle,
  RadixToastViewport,
  RxCross2,
} from '@/components';
import { cn } from '@/lib';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

export const ToastProvider = RadixToastProvider;

type ToastViewportProps = ComponentProps<typeof RadixToastViewport>;

export const ToastViewport = ({ className, ...props }: ToastViewportProps) => (
  <RadixToastViewport
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
);
ToastViewport.displayName = RadixToastViewport.displayName;

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

type ToastProps = ComponentProps<typeof RadixToast> &
  VariantProps<typeof toastVariants>;

export const Toast = ({
  className,
  variant = 'default',
  ...props
}: ToastProps) => (
  <RadixToast
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
);
Toast.displayName = RadixToast.displayName;

type ToastActionProps = ComponentProps<typeof RadixToastAction>;

export const ToastAction = ({ className, ...props }: ToastActionProps) => (
  <RadixToastAction
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className,
    )}
    {...props}
  />
);
ToastAction.displayName = RadixToastAction.displayName;

type ToastCloseProps = ComponentProps<typeof RadixToastClose>;

export const ToastClose = ({ className, ...props }: ToastCloseProps) => (
  <RadixToastClose
    className={cn(
      'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className,
    )}
    toast-close=''
    aria-label='Stäng'
    {...props}
  >
    <RxCross2 aria-hidden className='size-4' />
  </RadixToastClose>
);
ToastClose.displayName = RadixToastClose.displayName;

type ToastTitleProps = ComponentProps<typeof RadixToastTitle>;

export const ToastTitle = ({ className, ...props }: ToastTitleProps) => (
  <RadixToastTitle
    className={cn('text-sm font-semibold [&+div]:text-xs', className)}
    {...props}
  />
);
ToastTitle.displayName = RadixToastTitle.displayName;

type ToastDescriptionProps = ComponentProps<typeof RadixToastDescription>;

export const ToastDescription = ({
  className,
  ...props
}: ToastDescriptionProps) => (
  <RadixToastDescription
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
);
ToastDescription.displayName = RadixToastDescription.displayName;
