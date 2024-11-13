'use client';

import {
  CMDKCommand,
  CMDKCommandEmpty,
  CMDKCommandGroup,
  CMDKCommandInput,
  CMDKCommandItem,
  CMDKCommandList,
  CMDKCommandSeparator,
  Dialog,
  DialogContent,
  RxMagnifyingGlass,
  type RadixDialogProps,
} from '@/components';
import { cn } from '@/lib';
import type { ComponentProps } from 'react';

type CommandProps = ComponentProps<typeof CMDKCommand>;

export const Command = ({ className, ...props }: CommandProps) => (
  <CMDKCommand
    className={cn(
      'flex h-full flex-col rounded-sm bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  />
);
Command.displayName = CMDKCommand.displayName;

type CommandDialogProps = RadixDialogProps;

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

type CommandInputProps = ComponentProps<typeof CMDKCommandInput>;

export const CommandInput = ({ className, ...props }: CommandInputProps) => (
  <div className='flex items-center justify-end px-4' cmdk-input-wrapper=''>
    <RxMagnifyingGlass
      aria-hidden
      className='mr-2 size-4 shrink-0 opacity-50 sm:size-5'
    />
    <CMDKCommandInput
      className={cn(
        'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
);
CommandInput.displayName = CMDKCommandInput.displayName;

type CommandListProps = ComponentProps<typeof CMDKCommandList>;

export const CommandList = ({ className, ...props }: CommandListProps) => (
  <CMDKCommandList
    className={cn(
      'max-h-[300px] overflow-y-auto overflow-x-hidden rounded-b-sm p-4',
      className,
    )}
    {...props}
  />
);
CommandList.displayName = CMDKCommandList.displayName;

type CommandEmptyProps = ComponentProps<typeof CMDKCommandEmpty>;

export const CommandEmpty = ({ className, ...props }: CommandEmptyProps) => (
  <CMDKCommandEmpty
    className={cn('py-8 text-center text-sm', className)}
    {...props}
  />
);
CommandEmpty.displayName = CMDKCommandEmpty.displayName;

type CommandGroupProps = ComponentProps<typeof CMDKCommandGroup>;

export const CommandGroup = ({ className, ...props }: CommandGroupProps) => (
  <CMDKCommandGroup
    className={cn(
      'text-foreground [&[cmdk-group-heading]]:text-sm [&[cmdk-group-heading]]:font-medium [&[cmdk-group-heading]]:text-accent-foreground [&[cmdk-item]]:mt-3 [&[cmdk-item]]:text-sm [&[cmdk-item]]:sm:mt-5',
      className,
    )}
    {...props}
  />
);
CommandGroup.displayName = CMDKCommandGroup.displayName;

type CommandSeparatorProps = ComponentProps<typeof CMDKCommandSeparator>;

export const CommandSeparator = ({
  className,
  ...props
}: CommandSeparatorProps) => (
  <CMDKCommandSeparator
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
);
CommandSeparator.displayName = CMDKCommandSeparator.displayName;

type CommandItemProps = ComponentProps<typeof CMDKCommandItem>;

export const CommandItem = ({ className, ...props }: CommandItemProps) => (
  <CMDKCommandItem
    className={cn(
      'relative flex cursor-default select-none items-center gap-2 truncate rounded-sm bg-background/30 px-4 py-2 text-sm text-foreground outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&svg]:pointer-events-none [&svg]:size-4 [&svg]:shrink-0',
      className,
    )}
    {...props}
  />
);
CommandItem.displayName = CMDKCommandItem.displayName;

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
