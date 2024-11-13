import {
  RadixDropdownMenu,
  RadixDropdownMenuCheckboxItem,
  RadixDropdownMenuContent,
  RadixDropdownMenuGroup,
  RadixDropdownMenuItem,
  RadixDropdownMenuItemIndicator,
  RadixDropdownMenuLabel,
  RadixDropdownMenuPortal,
  RadixDropdownMenuRadioGroup,
  RadixDropdownMenuRadioItem,
  RadixDropdownMenuSeparator,
  RadixDropdownMenuSub,
  RadixDropdownMenuSubContent,
  RadixDropdownMenuSubTrigger,
  RadixDropdownMenuTrigger,
  RxCheck,
  RxChevronRight,
  RxDotFilled,
} from '@/components';
import { cn } from '@/lib';
import type { ComponentProps } from 'react';

export const DropdownMenu = RadixDropdownMenu;

export const DropdownMenuTrigger = RadixDropdownMenuTrigger;

export const DropdownMenuGroup = RadixDropdownMenuGroup;

export const DropdownMenuPortal = RadixDropdownMenuPortal;

export const DropdownMenuSub = RadixDropdownMenuSub;

export const DropdownMenuRadioGroup = RadixDropdownMenuRadioGroup;

type DropdownMenuSubTriggerProps = ComponentProps<
  typeof RadixDropdownMenuSubTrigger
> & {
  inset?: boolean;
};

export const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) => (
  <RadixDropdownMenuSubTrigger
    className={cn(
      'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&svg]:pointer-events-none [&svg]:size-4 [&svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <RxChevronRight aria-hidden className='ml-auto' />
  </RadixDropdownMenuSubTrigger>
);
DropdownMenuSubTrigger.displayName = RadixDropdownMenuSubTrigger.displayName;

type DropdownMenuSubContentProps = ComponentProps<
  typeof RadixDropdownMenuSubContent
>;

export const DropdownMenuSubContent = ({
  className,
  ...props
}: DropdownMenuSubContentProps) => (
  <RadixDropdownMenuSubContent
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
);
DropdownMenuSubContent.displayName = RadixDropdownMenuSubContent.displayName;

type DropdownMenuContentProps = ComponentProps<typeof RadixDropdownMenuContent>;

export const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) => (
  <RadixDropdownMenuPortal>
    <RadixDropdownMenuContent
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </RadixDropdownMenuPortal>
);
DropdownMenuContent.displayName = RadixDropdownMenuContent.displayName;

type DropdownMenuItemProps = ComponentProps<typeof RadixDropdownMenuItem> & {
  inset?: boolean;
};

export const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: DropdownMenuItemProps) => (
  <RadixDropdownMenuItem
    className={cn(
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);
DropdownMenuItem.displayName = RadixDropdownMenuItem.displayName;

type DropdownMenuCheckboxItemProps = ComponentProps<
  typeof RadixDropdownMenuCheckboxItem
>;

export const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) => (
  <RadixDropdownMenuCheckboxItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex size-3.5 items-center justify-center'>
      <RadixDropdownMenuItemIndicator>
        <RxCheck aria-hidden className='size-4' />
      </RadixDropdownMenuItemIndicator>
    </span>
    {children}
  </RadixDropdownMenuCheckboxItem>
);
DropdownMenuCheckboxItem.displayName =
  RadixDropdownMenuCheckboxItem.displayName;

type DropdownMenuRadioItemProps = ComponentProps<
  typeof RadixDropdownMenuRadioItem
>;

export const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) => (
  <RadixDropdownMenuRadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className='absolute left-2 flex size-3.5 items-center justify-center'>
      <RadixDropdownMenuItemIndicator>
        <RxDotFilled aria-hidden className='size-2 fill-current' />
      </RadixDropdownMenuItemIndicator>
    </span>
    {children}
  </RadixDropdownMenuRadioItem>
);
DropdownMenuRadioItem.displayName = RadixDropdownMenuRadioItem.displayName;

type DropdownMenuLabelProps = ComponentProps<typeof RadixDropdownMenuLabel> & {
  inset?: boolean;
};

export const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: DropdownMenuLabelProps) => (
  <RadixDropdownMenuLabel
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);
DropdownMenuLabel.displayName = RadixDropdownMenuLabel.displayName;

type DropdownMenuSeparatorProps = ComponentProps<
  typeof RadixDropdownMenuSeparator
>;

export const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => (
  <RadixDropdownMenuSeparator
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
);
DropdownMenuSeparator.displayName = RadixDropdownMenuSeparator.displayName;

type DropdownMenuShortcutProps = ComponentProps<'span'>;

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
