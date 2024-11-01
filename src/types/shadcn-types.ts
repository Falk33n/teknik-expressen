import {
  buttonVariants,
  labelVariants,
  Toast,
  ToastAction,
  toastVariants,
} from '@/components/shadcn';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { DialogProps } from '@radix-ui/react-dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { Slot } from '@radix-ui/react-slot';
import * as ToastPrimitives from '@radix-ui/react-toast';
import type { VariantProps } from 'class-variance-authority';
import { Command as CommandPrimitive } from 'cmdk';
import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  ElementRef,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

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

/*
 * shadcn command types
 */
export type CommandType = ElementRef<typeof CommandPrimitive>;
export type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;

export type CommandDialogProps = DialogProps;

export type CommandInputType = ElementRef<typeof CommandPrimitive.Input>;
export type CommandInputProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
>;

export type CommandListType = ElementRef<typeof CommandPrimitive.List>;
export type CommandListProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
>;

export type CommandEmptyType = ElementRef<typeof CommandPrimitive.Empty>;
export type CommandEmptyProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Empty
>;

export type CommandGroupType = ElementRef<typeof CommandPrimitive.Group>;
export type CommandGroupProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
>;

export type CommandSeparatorType = ElementRef<
  typeof CommandPrimitive.Separator
>;
export type CommandSeparatorProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Separator
>;

export type CommandItemType = ElementRef<typeof CommandPrimitive.Item>;
export type CommandItemProps = ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
>;

/*
 * shadcn dialog types
 */
export type DialogOverlayType = ElementRef<typeof DialogPrimitive.Overlay>;
export type DialogOverlayProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

export type DialogContentType = ElementRef<typeof DialogPrimitive.Content>;
export type DialogContentProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

export type DialogTitleType = ElementRef<typeof DialogPrimitive.Title>;
export type DialogTitleProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export type DialogDescriptionType = ElementRef<
  typeof DialogPrimitive.Description
>;
export type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

/*
 * shadcn form types
 */
export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export type FormItemContextValue = {
  id: string;
};

export type FormLabelType = ElementRef<typeof LabelPrimitive.Root>;
export type FormLabelProps = ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
>;

export type FormControlType = ElementRef<typeof Slot>;
export type FormControlProps = ComponentPropsWithoutRef<typeof Slot>;

/*
 * shadcn label types
 */
export type LabelType = React.ElementRef<typeof LabelPrimitive.Root>;
export type LabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> &
  VariantProps<typeof labelVariants>;

/*
 * shadcn input types
 */
export type InputProps = InputHTMLAttributes<HTMLInputElement>;
