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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';

import { cn, cva, type VariantProps } from '@/lib/utils';

import type { ComponentProps } from 'react';

export const Sheet = RadixDialog;

export const SheetTrigger = RadixDialogTrigger;

export const SheetClose = RadixDialogClose;

export const SheetPortal = RadixDialogPortal;

type SheetOverlayProps = ComponentProps<typeof RadixDialogOverlay>;

export const SheetOverlay = ({ className, ...props }: SheetOverlayProps) => (
  <RadixDialogOverlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
);
SheetOverlay.displayName = RadixDialogOverlay.displayName;

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

type SheetContentProps = ComponentProps<typeof RadixDialogContent> &
  VariantProps<typeof sheetVariants>;

export const SheetContent = ({
  side = 'right',
  className,
  children,
  ...props
}: SheetContentProps) => (
  <SheetPortal>
    <SheetOverlay />

    <RadixDialogContent
      className={cn(
        sheetVariants({ side }),
        '[&>div:nth-child(even)>div>h3]:bg-accent',
        className,
      )}
      {...props}
    >
      <div className='sticky top-0 flex w-full items-center justify-end bg-accent px-4 py-3'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <RadixDialogClose
                aria-label='Stäng menyn'
                className='rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary sm:p-2'
              >
                <RxCross2
                  aria-hidden
                  className='size-4 scale-125 sm:scale-150'
                />
              </RadixDialogClose>
            </TooltipTrigger>

            <TooltipContent aria-hidden side='bottom' sideOffset={10}>
              <p>Stäng menyn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {children}
    </RadixDialogContent>
  </SheetPortal>
);
SheetContent.displayName = RadixDialogContent.displayName;

type SheetHeaderProps = ComponentProps<'div'>;

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

type SheetFooterProps = ComponentProps<'div'>;

export const SheetFooter = ({ className, ...props }: SheetFooterProps) => (
  <div className={cn('flex flex-col justify-end', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

type SheetTitleProps = ComponentProps<typeof RadixDialogTitle>;

export const SheetTitle = ({ className, ...props }: SheetTitleProps) => (
  <RadixDialogTitle
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
);
SheetTitle.displayName = RadixDialogTitle.displayName;

type SheetDescriptionProps = ComponentProps<typeof RadixDialogDescription>;

export const SheetDescription = ({
  className,
  ...props
}: SheetDescriptionProps) => (
  <RadixDialogDescription
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
);
SheetDescription.displayName = RadixDialogDescription.displayName;
