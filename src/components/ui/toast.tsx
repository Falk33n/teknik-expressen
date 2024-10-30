'use client';

import { cn } from '@/lib';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactElement,
} from 'react';

export const ToastProvider = ToastPrimitives.Provider;

type ToastViewportType = ElementRef<typeof ToastPrimitives.Viewport>;
type ToastViewportProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Viewport
>;

export const ToastViewport = forwardRef<ToastViewportType, ToastViewportProps>(
  ({ className, ...props }, ref) => {
    return (
      <ToastPrimitives.Viewport
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

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

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

type ToastType = ElementRef<typeof ToastPrimitives.Root>;
type ToastComponentProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Root
> &
  VariantProps<typeof toastVariants>;

export const Toast = forwardRef<ToastType, ToastComponentProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <ToastPrimitives.Root
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Toast.displayName = ToastPrimitives.Root.displayName;

type ToastActionType = ElementRef<typeof ToastPrimitives.Action>;
type ToastActionProps = ComponentPropsWithoutRef<typeof ToastPrimitives.Action>;

export const ToastAction = forwardRef<ToastActionType, ToastActionProps>(
  ({ className, ...props }, ref) => {
    return (
      <ToastPrimitives.Action
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

ToastAction.displayName = ToastPrimitives.Action.displayName;

type ToastCloseType = ElementRef<typeof ToastPrimitives.Close>;
type ToastCloseProps = ComponentPropsWithoutRef<typeof ToastPrimitives.Close>;

export const ToastClose = forwardRef<ToastCloseType, ToastCloseProps>(
  ({ className, ...props }, ref) => {
    return (
      <ToastPrimitives.Close
        ref={ref}
        className={cn(
          'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
          className
        )}
        toast-close=''
        {...props}
      >
        <Cross2Icon className='size-4' />
      </ToastPrimitives.Close>
    );
  }
);

ToastClose.displayName = ToastPrimitives.Close.displayName;

type ToastTitleType = ElementRef<typeof ToastPrimitives.Title>;
type ToastTitleProps = ComponentPropsWithoutRef<typeof ToastPrimitives.Title>;

export const ToastTitle = forwardRef<ToastTitleType, ToastTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <ToastPrimitives.Title
        ref={ref}
        className={cn('text-sm font-semibold [&+div]:text-xs', className)}
        {...props}
      />
    );
  }
);

ToastTitle.displayName = ToastPrimitives.Title.displayName;

type ToastDescriptionType = ElementRef<typeof ToastPrimitives.Description>;
type ToastDescriptionProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Description
>;

export const ToastDescription = forwardRef<
  ToastDescriptionType,
  ToastDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn('text-sm opacity-90', className)}
      {...props}
    />
  );
});

ToastDescription.displayName = ToastPrimitives.Description.displayName;

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>;
export type ToastActionElement = ReactElement<typeof ToastAction>;
