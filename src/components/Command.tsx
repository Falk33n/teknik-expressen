'use client';

import { Dialog, DialogContent } from '@/components';
import { cn } from '@/lib';
import type { DialogProps } from '@radix-ui/react-dialog';
import {
  Command as CMDK_Command,
  CommandEmpty as CMDK_CommandEmpty,
  CommandGroup as CMDK_CommandGroup,
  CommandInput as CMDK_CommandInput,
  CommandItem as CMDK_CommandItem,
  CommandList as CMDK_CommandList,
  CommandSeparator as CMDK_CommandSeparator,
} from 'cmdk';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type HTMLAttributes,
} from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';

type CommandType = ElementRef<typeof CMDK_Command>;
type CommandProps = ComponentPropsWithoutRef<typeof CMDK_Command>;

export const Command = forwardRef<CommandType, CommandProps>(
  ({ className, ...props }, ref) => (
    <CMDK_Command
      ref={ref}
      className={cn(
        'flex h-full flex-col rounded-sm bg-popover text-popover-foreground',
        className,
      )}
      {...props}
    />
  ),
);
Command.displayName = CMDK_Command.displayName;

type CommandDialogProps = DialogProps;

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='p-0'>
      <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5'>
        {children}
      </Command>
    </DialogContent>
  </Dialog>
);
CommandDialog.displayName = 'CommandDialog';

type CommandInputType = ElementRef<typeof CMDK_CommandInput>;
type CommandInputProps = ComponentPropsWithoutRef<typeof CMDK_CommandInput>;

export const CommandInput = forwardRef<CommandInputType, CommandInputProps>(
  ({ className, ...props }, ref) => (
    <div className='flex items-center px-4' cmdk-input-wrapper=''>
      <RxMagnifyingGlass
        aria-hidden
        className='mr-2 size-4 shrink-0 opacity-50 sm:size-5'
      />
      <CMDK_CommandInput
        ref={ref}
        className={cn(
          'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  ),
);
CommandInput.displayName = CMDK_CommandInput.displayName;

type CommandListType = ElementRef<typeof CMDK_CommandList>;
type CommandListProps = ComponentPropsWithoutRef<typeof CMDK_CommandList>;

export const CommandList = forwardRef<CommandListType, CommandListProps>(
  ({ className, ...props }, ref) => (
    <CMDK_CommandList
      ref={ref}
      className={cn(
        'max-h-[300px] overflow-y-auto overflow-x-hidden rounded-b-sm p-4',
        className,
      )}
      {...props}
    />
  ),
);
CommandList.displayName = CMDK_CommandList.displayName;

type CommandEmptyType = ElementRef<typeof CMDK_CommandEmpty>;
type CommandEmptyProps = ComponentPropsWithoutRef<typeof CMDK_CommandEmpty>;

export const CommandEmpty = forwardRef<CommandEmptyType, CommandEmptyProps>(
  (props, ref) => (
    <CMDK_CommandEmpty
      ref={ref}
      className='py-8 text-center text-sm'
      {...props}
    />
  ),
);
CommandEmpty.displayName = CMDK_CommandEmpty.displayName;

type CommandGroupType = ElementRef<typeof CMDK_CommandGroup>;
type CommandGroupProps = ComponentPropsWithoutRef<typeof CMDK_CommandGroup>;

export const CommandGroup = forwardRef<CommandGroupType, CommandGroupProps>(
  ({ className, ...props }, ref) => (
    <CMDK_CommandGroup
      ref={ref}
      className={cn(
        'text-foreground [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-accent-foreground [&_[cmdk-item]]:mt-3 [&_[cmdk-item]]:text-sm [&_[cmdk-item]]:sm:mt-5',
        className,
      )}
      {...props}
    />
  ),
);
CommandGroup.displayName = CMDK_CommandGroup.displayName;

type CommandSeparatorType = ElementRef<typeof CMDK_CommandSeparator>;
type CommandSeparatorProps = ComponentPropsWithoutRef<
  typeof CMDK_CommandSeparator
>;

export const CommandSeparator = forwardRef<
  CommandSeparatorType,
  CommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CMDK_CommandSeparator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CMDK_CommandSeparator.displayName;

type CommandItemType = ElementRef<typeof CMDK_CommandItem>;
type CommandItemProps = ComponentPropsWithoutRef<typeof CMDK_CommandItem>;

export const CommandItem = forwardRef<CommandItemType, CommandItemProps>(
  ({ className, ...props }, ref) => (
    <CMDK_CommandItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 truncate rounded-sm bg-background/30 px-4 py-2 text-sm text-foreground outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        className,
      )}
      {...props}
    />
  ),
);
CommandItem.displayName = CMDK_CommandItem.displayName;

type CommandShortcutProps = HTMLAttributes<HTMLSpanElement>;

export const CommandShortcut = ({
  className,
  ...props
}: CommandShortcutProps) => (
  <span
    className={cn(
      'ml-auto text-xs tracking-widest text-muted-foreground',
      className,
    )}
    {...props}
  />
);
CommandShortcut.displayName = 'CommandShortcut';
