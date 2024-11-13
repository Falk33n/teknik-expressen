'use client';

import { Dialog, DialogContent, Icons } from '@/components';
import { cn } from '@/lib';
import type { DialogProps } from '@radix-ui/react-dialog';
import * as CMDK from 'cmdk';
import type { ComponentProps } from 'react';

type CommandProps = ComponentProps<typeof CMDK.Command>;

export const Command = ({ className, ...props }: CommandProps) => (
  <CMDK.Command
    className={cn(
      'flex h-full flex-col rounded-sm bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  />
);
Command.displayName = CMDK.Command.displayName;

type CommandDialogProps = DialogProps;

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => (
  <Dialog {...props}>
    <DialogContent className='p-0'>
      <Command className='[&>[cmdk-input]]:h-12 [&[cmdk-group-heading]]:px-2 [&[cmdk-group-heading]]:font-medium [&[cmdk-group-heading]]:text-muted-foreground [&[cmdk-group]:not([hidden])~[cmdk-group]]:pt-0 [&[cmdk-group]]:px-2 [&[cmdk-input-wrapper]&svg]:size-5 [&[cmdk-item]&svg]:size-5 [&[cmdk-item]]:px-2 [&[cmdk-item]]:py-3'>
        {children}
      </Command>
    </DialogContent>
  </Dialog>
);
CommandDialog.displayName = 'CommandDialog';

type CommandInputProps = ComponentProps<typeof CMDK.CommandInput>;

export const CommandInput = ({ className, ...props }: CommandInputProps) => (
  <div className='flex items-center justify-end px-4' cmdk-input-wrapper=''>
    <Icons.RxMagnifyingGlass
      aria-hidden
      className='mr-2 size-4 shrink-0 opacity-50 sm:size-5'
    />
    <CMDK.CommandInput
      className={cn(
        'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
);
CommandInput.displayName = CMDK.CommandInput.displayName;

type CommandListProps = ComponentProps<typeof CMDK.CommandList>;

export const CommandList = ({ className, ...props }: CommandListProps) => (
  <CMDK.CommandList
    className={cn(
      'max-h-[300px] overflow-y-auto overflow-x-hidden rounded-b-sm p-4',
      className,
    )}
    {...props}
  />
);
CommandList.displayName = CMDK.CommandList.displayName;

type CommandEmptyProps = ComponentProps<typeof CMDK.CommandEmpty>;

export const CommandEmpty = ({ className, ...props }: CommandEmptyProps) => (
  <CMDK.CommandEmpty
    className={cn('py-8 text-center text-sm', className)}
    {...props}
  />
);
CommandEmpty.displayName = CMDK.CommandEmpty.displayName;

type CommandGroupProps = ComponentProps<typeof CMDK.CommandGroup>;

export const CommandGroup = ({ className, ...props }: CommandGroupProps) => (
  <CMDK.CommandGroup
    className={cn(
      'text-foreground [&[cmdk-group-heading]]:text-sm [&[cmdk-group-heading]]:font-medium [&[cmdk-group-heading]]:text-accent-foreground [&[cmdk-item]]:mt-3 [&[cmdk-item]]:text-sm [&[cmdk-item]]:sm:mt-5',
      className,
    )}
    {...props}
  />
);
CommandGroup.displayName = CMDK.CommandGroup.displayName;

type CommandSeparatorProps = ComponentProps<typeof CMDK.CommandSeparator>;

export const CommandSeparator = ({
  className,
  ...props
}: CommandSeparatorProps) => (
  <CMDK.CommandSeparator
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
);
CommandSeparator.displayName = CMDK.CommandSeparator.displayName;

type CommandItemProps = ComponentProps<typeof CMDK.CommandItem>;

export const CommandItem = ({ className, ...props }: CommandItemProps) => (
  <CMDK.CommandItem
    className={cn(
      'relative flex cursor-default select-none items-center gap-2 truncate rounded-sm bg-background/30 px-4 py-2 text-sm text-foreground outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&svg]:pointer-events-none [&svg]:size-4 [&svg]:shrink-0',
      className,
    )}
    {...props}
  />
);
CommandItem.displayName = CMDK.CommandItem.displayName;

type CommandShortcutProps = ComponentProps<'span'>;

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
