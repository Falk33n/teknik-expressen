'use client';

import { Dialog, DialogContent } from '@/components/shadcn';
import { cn } from '@/helpers';
import type {
  CommandDialogProps,
  CommandEmptyProps,
  CommandEmptyType,
  CommandGroupProps,
  CommandGroupType,
  CommandInputProps,
  CommandInputType,
  CommandItemProps,
  CommandItemType,
  CommandListProps,
  CommandListType,
  CommandProps,
  CommandSeparatorProps,
  CommandSeparatorType,
  CommandType,
} from '@/types';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Command as CommandPrimitive } from 'cmdk';
import { forwardRef, type HTMLAttributes } from 'react';

/** `Command` works like a searchbar that shows the results of the `CommandInput` value */
export const Command = forwardRef<CommandType, CommandProps>(
  ({ className, ...props }, ref) => {
    return (
      <CommandPrimitive
        ref={ref}
        className={cn(
          'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
          className
        )}
        {...props}
      />
    );
  }
);

Command.displayName = CommandPrimitive.displayName;

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className='p-0 overflow-hidden'>
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-item]_svg]:size-5 [&_[cmdk-input]]:h-12'>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

CommandDialog.displayName = 'CommandDialog';

export const CommandInput = forwardRef<CommandInputType, CommandInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className='flex items-center px-3 border-b'
        cmdk-input-wrapper=''
      >
        <MagnifyingGlassIcon className='opacity-50 mr-2 shrink-0 size-4' />
        <CommandPrimitive.Input
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

export const CommandList = forwardRef<CommandListType, CommandListProps>(
  ({ className, ...props }, ref) => {
    return (
      <CommandPrimitive.List
        ref={ref}
        className={cn(
          'max-h-[300px] overflow-y-auto overflow-x-hidden',
          className
        )}
        {...props}
      />
    );
  }
);

CommandList.displayName = CommandPrimitive.List.displayName;

export const CommandEmpty = forwardRef<CommandEmptyType, CommandEmptyProps>(
  (props, ref) => {
    return (
      <CommandPrimitive.Empty
        ref={ref}
        className='py-6 text-center text-sm'
        {...props}
      />
    );
  }
);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export const CommandGroup = forwardRef<CommandGroupType, CommandGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <CommandPrimitive.Group
        ref={ref}
        className={cn(
          'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
          className
        )}
        {...props}
      />
    );
  }
);

CommandGroup.displayName = CommandPrimitive.Group.displayName;

export const CommandSeparator = forwardRef<
  CommandSeparatorType,
  CommandSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 h-px bg-border', className)}
      {...props}
    />
  );
});

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export const CommandItem = forwardRef<CommandItemType, CommandItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <CommandPrimitive.Item
        ref={ref}
        className={cn(
          'relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          className
        )}
        {...props}
      />
    );
  }
);

CommandItem.displayName = CommandPrimitive.Item.displayName;

export const CommandShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};

CommandShortcut.displayName = 'CommandShortcut';
