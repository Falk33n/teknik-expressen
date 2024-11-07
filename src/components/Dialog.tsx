import { cn } from '@/lib';
import {
  Dialog as Radix_Dialog,
  DialogClose as Radix_DialogClose,
  DialogContent as Radix_DialogContent,
  DialogDescription as Radix_DialogDescription,
  DialogOverlay as Radix_DialogOverlay,
  DialogPortal as Radix_DialogPortal,
  DialogTitle as Radix_DialogTitle,
  DialogTrigger as Radix_DialogTrigger,
} from '@radix-ui/react-dialog';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
} from 'react';
import { RxCross2 } from 'react-icons/rx';

export const Dialog = Radix_Dialog;

export const DialogTrigger = Radix_DialogTrigger;

export const DialogPortal = Radix_DialogPortal;

export const DialogClose = Radix_DialogClose;

type DialogOverlayType = ElementRef<typeof Radix_DialogOverlay>;
type DialogOverlayProps = ComponentPropsWithoutRef<typeof Radix_DialogOverlay>;

export const DialogOverlay = forwardRef<DialogOverlayType, DialogOverlayProps>(
  ({ className, ...props }, ref) => (
    <Radix_DialogOverlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
    />
  ),
);
DialogOverlay.displayName = Radix_DialogOverlay.displayName;

type DialogContentType = ElementRef<typeof Radix_DialogContent>;
type DialogContentProps = ComponentPropsWithoutRef<typeof Radix_DialogContent>;

export const DialogContent = forwardRef<DialogContentType, DialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <Radix_DialogContent
        ref={ref}
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
      </Radix_DialogContent>
    </DialogPortal>
  ),
);
DialogContent.displayName = Radix_DialogContent.displayName;

type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

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

type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

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

type DialogTitleType = ElementRef<typeof Radix_DialogTitle>;
type DialogTitleProps = ComponentPropsWithoutRef<typeof Radix_DialogTitle>;

export const DialogTitle = forwardRef<DialogTitleType, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <Radix_DialogTitle
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  ),
);
DialogTitle.displayName = Radix_DialogTitle.displayName;

type DialogDescriptionType = ElementRef<typeof Radix_DialogDescription>;
type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof Radix_DialogDescription
>;

export const DialogDescription = forwardRef<
  DialogDescriptionType,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <Radix_DialogDescription
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = Radix_DialogDescription.displayName;
