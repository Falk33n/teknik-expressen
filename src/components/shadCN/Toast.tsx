import { cn, toastVariants } from '@/helpers';
import type {
  ToastActionProps,
  ToastActionType,
  ToastCloseProps,
  ToastCloseType,
  ToastDescriptionProps,
  ToastDescriptionType,
  ToastProps,
  ToastTitleProps,
  ToastTitleType,
  ToastType,
  ToastViewportProps,
  ToastViewportType,
} from '@/types';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
  Toast as RadixToast,
  ToastAction as RadixToastAction,
  ToastClose as RadixToastClose,
  ToastDescription as RadixToastDescription,
  ToastProvider as RadixToastProvider,
  ToastTitle as RadixToastTitle,
  ToastViewport as RadixToastViewport,
} from '@radix-ui/react-toast';
import { forwardRef } from 'react';

export const ToastProvider = RadixToastProvider;

/**
 * Container for the toast.
 */
export const ToastViewport = forwardRef<ToastViewportType, ToastViewportProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixToastViewport
        ref={ref}
        className={cn(
          'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
          className
        )}
        {...props}
      />
    );
  }
);

ToastViewport.displayName = RadixToastViewport.displayName;

export const Toast = forwardRef<ToastType, ToastProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <RadixToast
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Toast.displayName = RadixToast.displayName;

export const ToastAction = forwardRef<ToastActionType, ToastActionProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixToastAction
        ref={ref}
        className={cn(
          'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
          className
        )}
        {...props}
      />
    );
  }
);

ToastAction.displayName = RadixToastAction.displayName;

export const ToastClose = forwardRef<ToastCloseType, ToastCloseProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixToastClose
        ref={ref}
        className={cn(
          'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
          className
        )}
        toast-close=''
        {...props}
      >
        <Cross2Icon className='size-4' />
      </RadixToastClose>
    );
  }
);

ToastClose.displayName = RadixToastClose.displayName;

export const ToastTitle = forwardRef<ToastTitleType, ToastTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixToastTitle
        ref={ref}
        className={cn('text-sm font-semibold [&+div]:text-xs', className)}
        {...props}
      />
    );
  }
);

ToastTitle.displayName = RadixToastTitle.displayName;

export const ToastDescription = forwardRef<
  ToastDescriptionType,
  ToastDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <RadixToastDescription
      ref={ref}
      className={cn('text-sm opacity-90', className)}
      {...props}
    />
  );
});

ToastDescription.displayName = RadixToastDescription.displayName;
