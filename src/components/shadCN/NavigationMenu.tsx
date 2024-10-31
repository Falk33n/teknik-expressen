import { cn } from '@/helpers';
import type {
  NavigationMenuContentProps,
  NavigationMenuContentType,
  NavigationMenuIndicatorProps,
  NavigationMenuIndicatorType,
  NavigationMenuListProps,
  NavigationMenuListType,
  NavigationMenuProps,
  NavigationMenuTriggerProps,
  NavigationMenuTriggerType,
  NavigationMenuType,
  NavigationMenuViewportProps,
  NavigationMenuViewportType,
} from '@/types';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

export const NavigationMenu = forwardRef<
  NavigationMenuType,
  NavigationMenuProps & { isSearchbar?: boolean }
>(({ className, isSearchbar, children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center',
        className
      )}
      data-isSearchbar={isSearchbar}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
});

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export const NavigationMenuList = forwardRef<
  NavigationMenuListType,
  NavigationMenuListProps
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn(
        'group flex flex-1 list-none items-center justify-center space-x-1',
        className
      )}
      {...props}
    />
  );
});

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const navigationMenuTriggerStyle = cva(
  'inline-flex justify-center items-center bg-primary dark:hover:bg-accent/40 data-[state=open]:bg-accent/15 hover:bg-accent/15 dark:focus:bg-accent/40 focus:bg-accent/15 dark:data-[state=open]:bg-accent/40 disabled:opacity-50 px-4 py-2 focus:ring-2 dark:focus:ring-accent/65 focus:ring-accent/35 focus:ring-inset w-max h-9 font-medium text-sm text-white transition-colors disabled:pointer-events-none group focus:outline-none'
);

export const NavigationMenuTrigger = forwardRef<
  NavigationMenuTriggerType,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Trigger>
  );
});

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

export const NavigationMenuContent = forwardRef<
  NavigationMenuContentType,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 ',
        className
      )}
      {...props}
    />
  );
});

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

export const NavigationMenuLink = NavigationMenuPrimitive.Link;

export const NavigationMenuViewport = forwardRef<
  NavigationMenuViewportType,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => {
  return (
    <div className={cn('fixed left-0 top-0 flex justify-center')}>
      <NavigationMenuPrimitive.Viewport
        ref={ref}
        className={cn(
          'origin-top-center relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-52 data-[state=open]:slide-in-from-left-52',
          className
        )}
        {...props}
      />
    </div>
  );
});

NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

export const NavigationMenuIndicator = forwardRef<
  NavigationMenuIndicatorType,
  NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className
      )}
      {...props}
    >
      <div className='relative top-[60%] shadow-md bg-border rotate-45 size-2' />
    </NavigationMenuPrimitive.Indicator>
  );
});

NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;
