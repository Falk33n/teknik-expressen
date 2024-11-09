import { cn } from '@/lib';
import {
  DropdownMenu as Radix_DropdownMenu,
  DropdownMenuCheckboxItem as Radix_DropdownMenuCheckboxItem,
  DropdownMenuContent as Radix_DropdownMenuContent,
  DropdownMenuGroup as Radix_DropdownMenuGroup,
  DropdownMenuItem as Radix_DropdownMenuItem,
  DropdownMenuItemIndicator as Radix_DropdownMenuItemIndicator,
  DropdownMenuLabel as Radix_DropdownMenuLabel,
  DropdownMenuPortal as Radix_DropdownMenuPortal,
  DropdownMenuRadioGroup as Radix_DropdownMenuRadioGroup,
  DropdownMenuRadioItem as Radix_DropdownMenuRadioItem,
  DropdownMenuSeparator as Radix_DropdownMenuSeparator,
  DropdownMenuSub as Radix_DropdownMenuSub,
  DropdownMenuSubContent as Radix_DropdownMenuSubContent,
  DropdownMenuSubTrigger as Radix_DropdownMenuSubTrigger,
  DropdownMenuTrigger as Radix_DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type HTMLAttributes,
} from 'react';
import { RxCheck, RxChevronRight, RxDotFilled } from 'react-icons/rx';

export const DropdownMenu = Radix_DropdownMenu;

export const DropdownMenuTrigger = Radix_DropdownMenuTrigger;

export const DropdownMenuGroup = Radix_DropdownMenuGroup;

export const DropdownMenuPortal = Radix_DropdownMenuPortal;

export const DropdownMenuSub = Radix_DropdownMenuSub;

export const DropdownMenuRadioGroup = Radix_DropdownMenuRadioGroup;

type DropdownMenuSubTriggerType = ElementRef<
  typeof Radix_DropdownMenuSubTrigger
>;
type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<
  typeof Radix_DropdownMenuSubTrigger
> & {
  inset?: boolean;
};

export const DropdownMenuSubTrigger = forwardRef<
  DropdownMenuSubTriggerType,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <Radix_DropdownMenuSubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <RxChevronRight aria-hidden className='ml-auto' />
  </Radix_DropdownMenuSubTrigger>
));
DropdownMenuSubTrigger.displayName = Radix_DropdownMenuSubTrigger.displayName;

type DropdownMenuSubContentType = ElementRef<
  typeof Radix_DropdownMenuSubContent
>;
type DropdownMenuSubContentProps = ComponentPropsWithoutRef<
  typeof Radix_DropdownMenuSubContent
>;

export const DropdownMenuSubContent = forwardRef<
  DropdownMenuSubContentType,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => (
  <Radix_DropdownMenuSubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = Radix_DropdownMenuSubContent.displayName;

type DropdownMenuContentType = ElementRef<typeof Radix_DropdownMenuContent>;
type DropdownMenuContentProps = ComponentPropsWithoutRef<
  typeof Radix_DropdownMenuContent
>;

export const DropdownMenuContent = forwardRef<
  DropdownMenuContentType,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Radix_DropdownMenuPortal>
    <Radix_DropdownMenuContent
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </Radix_DropdownMenuPortal>
));
DropdownMenuContent.displayName = Radix_DropdownMenuContent.displayName;

type DropdownMenuItemType = ElementRef<typeof Radix_DropdownMenuItem>;
type DropdownMenuItemProps = ComponentPropsWithoutRef<
  typeof Radix_DropdownMenuItem
> & {
  inset?: boolean;
};

export const DropdownMenuItem = forwardRef<
  DropdownMenuItemType,
  DropdownMenuItemProps
>(({ className, inset, ...props }, ref) => (
  <Radix_DropdownMenuItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = Radix_DropdownMenuItem.displayName;

type DropdownMenuCheckboxItemType = ElementRef<
  typeof Radix_DropdownMenuCheckboxItem
>;
type DropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<
  typeof Radix_DropdownMenuCheckboxItem
>;

export const DropdownMenuCheckboxItem = forwardRef<
  DropdownMenuCheckboxItemType,
  DropdownMenuCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <Radix_DropdownMenuCheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex size-3.5 items-center justify-center'>
      <Radix_DropdownMenuItemIndicator>
        <RxCheck aria-hidden className='size-4' />
      </Radix_DropdownMenuItemIndicator>
    </span>
    {children}
  </Radix_DropdownMenuCheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  Radix_DropdownMenuCheckboxItem.displayName;

type DropdownMenuRadioItemType = ElementRef<typeof Radix_DropdownMenuRadioItem>;
type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<
  typeof Radix_DropdownMenuRadioItem
>;

export const DropdownMenuRadioItem = forwardRef<
  DropdownMenuRadioItemType,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, ref) => (
  <Radix_DropdownMenuRadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className='absolute left-2 flex size-3.5 items-center justify-center'>
      <Radix_DropdownMenuItemIndicator>
        <RxDotFilled aria-hidden className='size-2 fill-current' />
      </Radix_DropdownMenuItemIndicator>
    </span>
    {children}
  </Radix_DropdownMenuRadioItem>
));
DropdownMenuRadioItem.displayName = Radix_DropdownMenuRadioItem.displayName;

type DropdownMenuLabelType = ElementRef<typeof Radix_DropdownMenuLabel>;
type DropdownMenuLabelProps = ComponentPropsWithoutRef<
  typeof Radix_DropdownMenuLabel
> & {
  inset?: boolean;
};

export const DropdownMenuLabel = forwardRef<
  DropdownMenuLabelType,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <Radix_DropdownMenuLabel
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = Radix_DropdownMenuLabel.displayName;

export const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Radix_DropdownMenuSeparator>,
  ComponentPropsWithoutRef<typeof Radix_DropdownMenuSeparator>
>(({ className, ...props }, ref) => (
  <Radix_DropdownMenuSeparator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = Radix_DropdownMenuSeparator.displayName;

type DropdownMenuShortcutProps = HTMLAttributes<HTMLSpanElement>;

export const DropdownMenuShortcut = ({
  className,
  ...props
}: DropdownMenuShortcutProps) => (
  <span
    className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
    {...props}
  />
);
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
