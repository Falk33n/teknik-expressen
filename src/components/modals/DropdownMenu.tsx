import { Rx } from '@/components/icons';
import { cn } from '@/lib/utils';
import * as Radix from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

export const DropdownMenu = Radix.DropdownMenu;

export const DropdownMenuTrigger = Radix.DropdownMenuTrigger;

export const DropdownMenuGroup = Radix.DropdownMenuGroup;

export const DropdownMenuPortal = Radix.DropdownMenuPortal;

export const DropdownMenuSub = Radix.DropdownMenuSub;

export const DropdownMenuRadioGroup = Radix.DropdownMenuRadioGroup;

type DropdownMenuSubTriggerProps = ComponentProps<
  typeof Radix.DropdownMenuSubTrigger
> & {
  inset?: boolean;
};

export const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) => (
  <Radix.DropdownMenuSubTrigger
    className={cn(
      'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&svg]:pointer-events-none [&svg]:size-4 [&svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <Rx.RxChevronRight aria-hidden className='ml-auto' />
  </Radix.DropdownMenuSubTrigger>
);
DropdownMenuSubTrigger.displayName = Radix.DropdownMenuSubTrigger.displayName;

type DropdownMenuSubContentProps = ComponentProps<
  typeof Radix.DropdownMenuSubContent
>;

export const DropdownMenuSubContent = ({
  className,
  ...props
}: DropdownMenuSubContentProps) => (
  <Radix.DropdownMenuSubContent
    className={cn(
      'z-50 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
);
DropdownMenuSubContent.displayName = Radix.DropdownMenuSubContent.displayName;

type DropdownMenuContentProps = ComponentProps<
  typeof Radix.DropdownMenuContent
>;

export const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) => (
  <Radix.DropdownMenuPortal>
    <Radix.DropdownMenuContent
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </Radix.DropdownMenuPortal>
);
DropdownMenuContent.displayName = Radix.DropdownMenuContent.displayName;

type DropdownMenuItemProps = ComponentProps<typeof Radix.DropdownMenuItem> & {
  inset?: boolean;
};

export const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: DropdownMenuItemProps) => (
  <Radix.DropdownMenuItem
    className={cn(
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);
DropdownMenuItem.displayName = Radix.DropdownMenuItem.displayName;

type DropdownMenuCheckboxItemProps = ComponentProps<
  typeof Radix.DropdownMenuCheckboxItem
>;

export const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) => (
  <Radix.DropdownMenuCheckboxItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex size-3.5 items-center justify-center'>
      <Radix.DropdownMenuItemIndicator>
        <Rx.RxCheck aria-hidden className='size-4' />
      </Radix.DropdownMenuItemIndicator>
    </span>
    {children}
  </Radix.DropdownMenuCheckboxItem>
);
DropdownMenuCheckboxItem.displayName =
  Radix.DropdownMenuCheckboxItem.displayName;

type DropdownMenuRadioItemProps = ComponentProps<
  typeof Radix.DropdownMenuRadioItem
>;

export const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) => (
  <Radix.DropdownMenuRadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className='absolute left-2 flex size-3.5 items-center justify-center'>
      <Radix.DropdownMenuItemIndicator>
        <Rx.RxDotFilled aria-hidden className='size-2 fill-current' />
      </Radix.DropdownMenuItemIndicator>
    </span>

    {children}
  </Radix.DropdownMenuRadioItem>
);
DropdownMenuRadioItem.displayName = Radix.DropdownMenuRadioItem.displayName;

type DropdownMenuLabelProps = ComponentProps<typeof Radix.DropdownMenuLabel> & {
  inset?: boolean;
};

export const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: DropdownMenuLabelProps) => (
  <Radix.DropdownMenuLabel
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);
DropdownMenuLabel.displayName = Radix.DropdownMenuLabel.displayName;

type DropdownMenuSeparatorProps = ComponentProps<
  typeof Radix.DropdownMenuSeparator
>;

export const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => (
  <Radix.DropdownMenuSeparator
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
);
DropdownMenuSeparator.displayName = Radix.DropdownMenuSeparator.displayName;

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
