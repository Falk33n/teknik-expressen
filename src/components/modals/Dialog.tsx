import {
  RadixDialog,
  RadixDialogClose,
  RadixDialogContent,
  RadixDialogDescription,
  RadixDialogOverlay,
  RadixDialogPortal,
  RadixDialogTitle,
  RadixDialogTrigger,
  RxCross2,
} from '@/components';
import { cn } from '@/lib';
import type { ComponentProps } from 'react';

export const Dialog = RadixDialog;

export const DialogTrigger = RadixDialogTrigger;

export const DialogPortal = RadixDialogPortal;

export const DialogClose = RadixDialogClose;

type DialogOverlayProps = ComponentProps<typeof RadixDialogOverlay>;

export const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => (
  <RadixDialogOverlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
);
DialogOverlay.displayName = RadixDialogOverlay.displayName;

type DialogContentProps = ComponentProps<typeof RadixDialogContent>;

export const DialogContent = ({
  className,
  children,
  ...props
}: DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />
    <RadixDialogContent
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogClose
        aria-label='Stäng'
        className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
      >
        <RxCross2 aria-hidden className='size-4' />
      </DialogClose>
    </RadixDialogContent>
  </DialogPortal>
);
DialogContent.displayName = RadixDialogContent.displayName;

type DialogHeaderProps = ComponentProps<'div'>;

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

type DialogFooterProps = ComponentProps<'div'>;

export const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

type DialogTitleProps = ComponentProps<typeof RadixDialogTitle>;

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => (
  <RadixDialogTitle
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
);
DialogTitle.displayName = RadixDialogTitle.displayName;

type DialogDescriptionProps = ComponentProps<typeof RadixDialogDescription>;

export const DialogDescription = ({
  className,
  ...props
}: DialogDescriptionProps) => (
  <RadixDialogDescription
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
);
DialogDescription.displayName = RadixDialogDescription.displayName;
