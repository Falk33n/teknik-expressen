import {
  buttonVariants,
  Toast,
  ToastAction,
  toastVariants,
} from '@/components/shadcn';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as ToastPrimitives from '@radix-ui/react-toast';
import type { VariantProps } from 'class-variance-authority';
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactElement,
  ReactNode,
} from 'react';

/*
 * shadcn accordion types
 */
export type AccordionItemType = ElementRef<typeof AccordionPrimitive.Item>;
export type AccordionItemProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export type AccordionTriggerType = ElementRef<
  typeof AccordionPrimitive.Trigger
>;
export type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;

export type AccordionContentType = ElementRef<
  typeof AccordionPrimitive.Content
>;
export type AccordionContentProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

/*
 * shadcn button types
 */
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

/*
 * shadcn checkbox types
 */
export type CheckboxType = ElementRef<typeof CheckboxPrimitive.Root>;
export type CheckboxProps = ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

/*
 * shadcn navigation menu types
 */
export type NavigationMenuType = ElementRef<
  typeof NavigationMenuPrimitive.Root
>;
export type NavigationMenuProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
>;

export type NavigationMenuListType = ElementRef<
  typeof NavigationMenuPrimitive.List
>;
export type NavigationMenuListProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.List
>;

export type NavigationMenuTriggerType = ElementRef<
  typeof NavigationMenuPrimitive.Trigger
>;
export type NavigationMenuTriggerProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Trigger
>;

export type NavigationMenuContentType = ElementRef<
  typeof NavigationMenuPrimitive.Content
>;
export type NavigationMenuContentProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Content
>;

export type NavigationMenuViewportType = ElementRef<
  typeof NavigationMenuPrimitive.Viewport
>;
export type NavigationMenuViewportProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Viewport
>;

export type NavigationMenuIndicatorType = ElementRef<
  typeof NavigationMenuPrimitive.Indicator
>;
export type NavigationMenuIndicatorProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Indicator
>;

/*
 * shadcn toast types
 */
export type ToastViewportType = ElementRef<typeof ToastPrimitives.Viewport>;
export type ToastViewportProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Viewport
>;

export type ToastType = ElementRef<typeof ToastPrimitives.Root>;
export type ToastComponentProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Root
> &
  VariantProps<typeof toastVariants>;

export type ToastActionType = ElementRef<typeof ToastPrimitives.Action>;
export type ToastActionProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Action
>;

export type ToastCloseType = ElementRef<typeof ToastPrimitives.Close>;
export type ToastCloseProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Close
>;

export type ToastTitleType = ElementRef<typeof ToastPrimitives.Title>;
export type ToastTitleProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Title
>;

export type ToastDescriptionType = ElementRef<
  typeof ToastPrimitives.Description
>;
export type ToastDescriptionProps = ComponentPropsWithoutRef<
  typeof ToastPrimitives.Description
>;

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>;
export type ToastActionElement = ReactElement<typeof ToastAction>;

/*
 * shadcn use-toast types
 */
export type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
};

export type ActionType = Readonly<{
  ADD_TOAST: 'ADD_TOAST';
  UPDATE_TOAST: 'UPDATE_TOAST';
  DISMISS_TOAST: 'DISMISS_TOAST';
  REMOVE_TOAST: 'REMOVE_TOAST';
}>;

export type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToasterToast;
    }
  | {
      type: ActionType['UPDATE_TOAST'];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType['DISMISS_TOAST'];
      toastId?: ToasterToast['id'];
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToasterToast['id'];
    };

export type State = {
  toasts: ToasterToast[];
};

export type Toast = Omit<ToasterToast, 'id'>;
