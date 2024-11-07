'use client';

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
import { cva, type VariantProps } from 'class-variance-authority';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type HTMLAttributes,
} from 'react';
import { RxCross2 } from 'react-icons/rx';

export const Sheet = Radix_Dialog;

export const SheetTrigger = Radix_DialogTrigger;

export const SheetClose = Radix_DialogClose;

export const SheetPortal = Radix_DialogPortal;

type SheetOverlayType = ElementRef<typeof Radix_DialogOverlay>;
type SheetOverlayProps = ComponentPropsWithoutRef<typeof Radix_DialogOverlay>;

export const SheetOverlay = forwardRef<SheetOverlayType, SheetOverlayProps>(
  ({ className, ...props }, ref) => (
    <Radix_DialogOverlay
      className={cn(
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
);
SheetOverlay.displayName = Radix_DialogOverlay.displayName;

const sheetVariants = cva(
  'z-50 fixed flex flex-col bg-background shadow-lg transition data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500 ease-in-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

type SheetContentType = ElementRef<typeof Radix_DialogContent>;
type SheetContentProps = ComponentPropsWithoutRef<typeof Radix_DialogContent> &
  VariantProps<typeof sheetVariants>;

export const SheetContent = forwardRef<SheetContentType, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />

      <Radix_DialogContent
        ref={ref}
        className={cn(
          sheetVariants({ side }),
          '[&>div:nth-child(even)>div>h3]:bg-accent',
          className,
        )}
        {...props}
      >
        <div className='sticky top-0 flex w-full items-center justify-end bg-accent px-4 py-3'>
          <Radix_DialogClose
            aria-label='Stäng'
            className='rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'
          >
            <RxCross2 aria-hidden className='size-4 scale-125' />
          </Radix_DialogClose>
        </div>

        {children}
      </Radix_DialogContent>
    </SheetPortal>
  ),
);
SheetContent.displayName = Radix_DialogContent.displayName;

type SheetHeaderProps = HTMLAttributes<HTMLDivElement>;

export const SheetHeader = ({ className, ...props }: SheetHeaderProps) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

type SheetFooterProps = HTMLAttributes<HTMLDivElement>;

export const SheetFooter = ({ className, ...props }: SheetFooterProps) => (
  <div className={cn('flex flex-col justify-end', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

type SheetTitleType = ElementRef<typeof Radix_DialogTitle>;
type SheetTitleProps = ComponentPropsWithoutRef<typeof Radix_DialogTitle>;

export const SheetTitle = forwardRef<SheetTitleType, SheetTitleProps>(
  ({ className, ...props }, ref) => (
    <Radix_DialogTitle
      ref={ref}
      className={cn('text-lg font-semibold text-foreground', className)}
      {...props}
    />
  ),
);
SheetTitle.displayName = Radix_DialogTitle.displayName;

type SheetDescriptionType = ElementRef<typeof Radix_DialogDescription>;
type SheetDescriptionProps = ComponentPropsWithoutRef<
  typeof Radix_DialogDescription
>;

export const SheetDescription = forwardRef<
  SheetDescriptionType,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <Radix_DialogDescription
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = Radix_DialogDescription.displayName;
