import { cn } from '@/helpers';
import type {
  DialogContentProps,
  DialogContentType,
  DialogDescriptionProps,
  DialogDescriptionType,
  DialogOverlayProps,
  DialogOverlayType,
  DialogTitleProps,
  DialogTitleType,
} from '@/types';
import {
  Dialog as RadixDialog,
  DialogClose as RadixDialogClose,
  DialogContent as RadixDialogContent,
  DialogDescription as RadixDialogDescription,
  DialogOverlay as RadixDialogOverlay,
  DialogPortal as RadixDialogPortal,
  DialogTitle as RadixDialogTitle,
  DialogTrigger as RadixDialogTrigger,
} from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { type HTMLAttributes, forwardRef } from 'react';

/*
 * Dialog works like a modal that when triggered renders on top of everything else,
 * making it the only thing focused.
 */

export const Dialog = RadixDialog;
export const DialogTrigger = RadixDialogTrigger;
export const DialogPortal = RadixDialogPortal;
export const DialogClose = RadixDialogClose;

export const DialogOverlay = forwardRef<DialogOverlayType, DialogOverlayProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixDialogOverlay
        ref={ref}
        className={cn(
          'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          className
        )}
        {...props}
      />
    );
  }
);

DialogOverlay.displayName = RadixDialogOverlay.displayName;

export const DialogContent = forwardRef<DialogContentType, DialogContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <DialogPortal>
        <DialogOverlay />
        <RadixDialogContent
          ref={ref}
          className={cn(
            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
            className
          )}
          {...props}
        >
          {children}
          <DialogClose className='top-4 right-4 absolute data-[state=open]:bg-accent opacity-70 hover:opacity-100 rounded-sm focus:ring-2 focus:ring-ring ring-offset-background transition-opacity focus:outline-none focus:ring-offset-2 data-[state=open]:text-muted-foreground disabled:pointer-events-none'>
            <Cross2Icon className='size-4' />
            <span className='sr-only'>Close</span>
          </DialogClose>
        </RadixDialogContent>
      </DialogPortal>
    );
  }
);

DialogContent.displayName = RadixDialogContent.displayName;

export const DialogHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className
      )}
      {...props}
    />
  );
};

DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className
      )}
      {...props}
    />
  );
};

DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = forwardRef<DialogTitleType, DialogTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixDialogTitle
        ref={ref}
        className={cn(
          'text-lg font-semibold leading-none tracking-tight',
          className
        )}
        {...props}
      />
    );
  }
);

DialogTitle.displayName = RadixDialogTitle.displayName;

export const DialogDescription = forwardRef<
  DialogDescriptionType,
  DialogDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <RadixDialogDescription
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});

DialogDescription.displayName = RadixDialogDescription.displayName;
