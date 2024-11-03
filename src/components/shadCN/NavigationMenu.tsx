import { cn, navigationMenuTriggerStyle } from '@/helpers';
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
import {
  NavigationMenu as RadixNavigationMenu,
  NavigationMenuContent as RadixNavigationMenuContent,
  NavigationMenuIndicator as RadixNavigationMenuIndicator,
  NavigationMenuItem as RadixNavigationMenuItem,
  NavigationMenuLink as RadixNavigationMenuLink,
  NavigationMenuList as RadixNavigationMenuList,
  NavigationMenuTrigger as RadixNavigationMenuTrigger,
  NavigationMenuViewport as RadixNavigationMenuViewport,
} from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

export const NavigationMenu = forwardRef<
  NavigationMenuType,
  NavigationMenuProps & { isSearchbar?: boolean }
>(({ className, isSearchbar, children, ...props }, ref) => {
  return (
    <RadixNavigationMenu
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
    </RadixNavigationMenu>
  );
});

NavigationMenu.displayName = RadixNavigationMenu.displayName;

export const NavigationMenuList = forwardRef<
  NavigationMenuListType,
  NavigationMenuListProps
>(({ className, ...props }, ref) => {
  return (
    <RadixNavigationMenuList
      ref={ref}
      className={cn(
        'group flex flex-1 list-none items-center justify-center space-x-1',
        className
      )}
      {...props}
    />
  );
});

NavigationMenuList.displayName = RadixNavigationMenuList.displayName;

export const NavigationMenuItem = RadixNavigationMenuItem;

export const NavigationMenuTrigger = forwardRef<
  NavigationMenuTriggerType,
  NavigationMenuTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <RadixNavigationMenuTrigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}
    </RadixNavigationMenuTrigger>
  );
});

NavigationMenuTrigger.displayName = RadixNavigationMenuTrigger.displayName;

export const NavigationMenuContent = forwardRef<
  NavigationMenuContentType,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => {
  return (
    <RadixNavigationMenuContent
      ref={ref}
      className={cn(
        'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 ',
        className
      )}
      {...props}
    />
  );
});

NavigationMenuContent.displayName = RadixNavigationMenuContent.displayName;

export const NavigationMenuLink = RadixNavigationMenuLink;

export const NavigationMenuViewport = forwardRef<
  NavigationMenuViewportType,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => {
  return (
    <div className={cn('fixed left-0 w-fit mx-auto top-0 flex justify-center')}>
      <RadixNavigationMenuViewport
        ref={ref}
        className={cn(
          'origin-top w-fit relative h-[var(--radix-navigation-menu-viewport-height)] rounded-md overflow-hidden border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left-52 data-[state=open]:slide-in-from-left-52',
          className
        )}
        {...props}
      />
    </div>
  );
});

NavigationMenuViewport.displayName = RadixNavigationMenuViewport.displayName;

export const NavigationMenuIndicator = forwardRef<
  NavigationMenuIndicatorType,
  NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <RadixNavigationMenuIndicator
      ref={ref}
      className={cn(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className
      )}
      {...props}
    >
      <div className='relative top-[60%] shadow-md bg-border rotate-45 size-2' />
    </RadixNavigationMenuIndicator>
  );
});

NavigationMenuIndicator.displayName = RadixNavigationMenuIndicator.displayName;
