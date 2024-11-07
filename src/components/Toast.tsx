import { cn } from '@/lib';
import {
  Toast as Radix_Toast,
  ToastAction as Radix_ToastAction,
  ToastClose as Radix_ToastClose,
  ToastDescription as Radix_ToastDescription,
  ToastProvider as Radix_ToastProvider,
  ToastTitle as Radix_ToastTitle,
  ToastViewport as Radix_ToastViewport,
} from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { RxCross2 } from 'react-icons/rx';

export const ToastProvider = Radix_ToastProvider;

type ToastViewportType = ElementRef<typeof Radix_ToastViewport>;
type ToastViewportProps = ComponentPropsWithoutRef<typeof Radix_ToastViewport>;

export const ToastViewport = forwardRef<ToastViewportType, ToastViewportProps>(
  ({ className, ...props }, ref) => (
    <Radix_ToastViewport
      ref={ref}
      className={cn(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        className,
      )}
      {...props}
    />
  ),
);
ToastViewport.displayName = Radix_ToastViewport.displayName;

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

type ToastType = ElementRef<typeof Radix_Toast>;
type ToastProps = ComponentPropsWithoutRef<typeof Radix_Toast> &
  VariantProps<typeof toastVariants>;

export const Toast = forwardRef<ToastType, ToastProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <Radix_Toast
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  ),
);
Toast.displayName = Radix_Toast.displayName;

type ToastActionType = ElementRef<typeof Radix_ToastAction>;
type ToastActionProps = ComponentPropsWithoutRef<typeof Radix_ToastAction>;

export const ToastAction = forwardRef<ToastActionType, ToastActionProps>(
  ({ className, ...props }, ref) => (
    <Radix_ToastAction
      ref={ref}
      className={cn(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
        className,
      )}
      {...props}
    />
  ),
);
ToastAction.displayName = Radix_ToastAction.displayName;

type ToastCloseType = ElementRef<typeof Radix_ToastClose>;
type ToastCloseProps = ComponentPropsWithoutRef<typeof Radix_ToastClose>;

export const ToastClose = forwardRef<ToastCloseType, ToastCloseProps>(
  ({ className, ...props }, ref) => (
    <Radix_ToastClose
      ref={ref}
      className={cn(
        'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
        className,
      )}
      toast-close=''
      aria-label='Stäng'
      {...props}
    >
      <RxCross2 aria-hidden className='size-4' />
    </Radix_ToastClose>
  ),
);
ToastClose.displayName = Radix_ToastClose.displayName;

type ToastTitleType = ElementRef<typeof Radix_ToastTitle>;
type ToastTitleProps = ComponentPropsWithoutRef<typeof Radix_ToastTitle>;

export const ToastTitle = forwardRef<ToastTitleType, ToastTitleProps>(
  ({ className, ...props }, ref) => (
    <Radix_ToastTitle
      ref={ref}
      className={cn('text-sm font-semibold [&+div]:text-xs', className)}
      {...props}
    />
  ),
);
ToastTitle.displayName = Radix_ToastTitle.displayName;

type ToastDescriptionType = ElementRef<typeof Radix_ToastDescription>;
type ToastDescriptionProps = ComponentPropsWithoutRef<
  typeof Radix_ToastDescription
>;

export const ToastDescription = forwardRef<
  ToastDescriptionType,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <Radix_ToastDescription
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = Radix_ToastDescription.displayName;
