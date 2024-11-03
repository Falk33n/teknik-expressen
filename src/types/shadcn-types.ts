import type { Toast, ToastAction } from '@/components/shadcn';
import type { buttonVariants, labelVariants, toastVariants } from '@/helpers';
import type {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import type { Checkbox } from '@radix-ui/react-checkbox';
import type {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogProps,
  DialogTitle,
} from '@radix-ui/react-dialog';
import type { Label } from '@radix-ui/react-label';
import type {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@radix-ui/react-navigation-menu';
import type { Slot } from '@radix-ui/react-slot';
import type {
  Toast as RadixToast,
  ToastAction as RadixToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from '@radix-ui/react-toast';
import type { VariantProps } from 'class-variance-authority';
import type {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from 'cmdk';
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
export type AccordionItemType = ElementRef<typeof AccordionItem>;
export type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionItem>;

export type AccordionTriggerType = ElementRef<typeof AccordionTrigger>;
export type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof AccordionTrigger
>;

export type AccordionContentType = ElementRef<typeof AccordionContent>;
export type AccordionContentProps = ComponentPropsWithoutRef<
  typeof AccordionContent
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
export type CheckboxType = ElementRef<typeof Checkbox>;
export type CheckboxProps = ComponentPropsWithoutRef<typeof Checkbox>;

/*
 * shadcn navigation menu types
 */
export type NavigationMenuType = ElementRef<typeof NavigationMenu>;
export type NavigationMenuProps = ComponentPropsWithoutRef<
  typeof NavigationMenu
>;

export type NavigationMenuListType = ElementRef<typeof NavigationMenuList>;
export type NavigationMenuListProps = ComponentPropsWithoutRef<
  typeof NavigationMenuList
>;

export type NavigationMenuTriggerType = ElementRef<
  typeof NavigationMenuTrigger
>;
export type NavigationMenuTriggerProps = ComponentPropsWithoutRef<
  typeof NavigationMenuTrigger
>;

export type NavigationMenuContentType = ElementRef<
  typeof NavigationMenuContent
>;
export type NavigationMenuContentProps = ComponentPropsWithoutRef<
  typeof NavigationMenuContent
>;

export type NavigationMenuViewportType = ElementRef<
  typeof NavigationMenuViewport
>;
export type NavigationMenuViewportProps = ComponentPropsWithoutRef<
  typeof NavigationMenuViewport
>;

export type NavigationMenuIndicatorType = ElementRef<
  typeof NavigationMenuIndicator
>;
export type NavigationMenuIndicatorProps = ComponentPropsWithoutRef<
  typeof NavigationMenuIndicator
>;

/*
 * shadcn toast types
 */
export type ToastViewportType = ElementRef<typeof ToastViewport>;
export type ToastViewportProps = ComponentPropsWithoutRef<typeof ToastViewport>;

export type ToastType = ElementRef<typeof RadixToast>;
export type ToastProps = ComponentPropsWithoutRef<typeof RadixToast> &
  VariantProps<typeof toastVariants>;

export type ToastActionType = ElementRef<typeof RadixToastAction>;
export type ToastActionProps = ComponentPropsWithoutRef<
  typeof RadixToastAction
>;

export type ToastCloseType = ElementRef<typeof ToastClose>;
export type ToastCloseProps = ComponentPropsWithoutRef<typeof ToastClose>;

export type ToastTitleType = ElementRef<typeof ToastTitle>;
export type ToastTitleProps = ComponentPropsWithoutRef<typeof ToastTitle>;

export type ToastDescriptionType = ElementRef<typeof ToastDescription>;
export type ToastDescriptionProps = ComponentPropsWithoutRef<
  typeof ToastDescription
>;

export type ToastShadCNProps = ComponentPropsWithoutRef<typeof Toast>;
export type ToastActionElement = ReactElement<typeof ToastAction>;

/*
 * shadcn use-toast types
 */
export type ToasterToast = ToastShadCNProps & {
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
export type CommandType = ElementRef<typeof Command>;
export type CommandProps = ComponentPropsWithoutRef<typeof Command>;

export type CommandDialogProps = DialogProps;

export type CommandInputType = ElementRef<typeof CommandInput>;
export type CommandInputProps = ComponentPropsWithoutRef<typeof CommandInput>;

export type CommandListType = ElementRef<typeof CommandList>;
export type CommandListProps = ComponentPropsWithoutRef<typeof CommandList>;

export type CommandEmptyType = ElementRef<typeof CommandEmpty>;
export type CommandEmptyProps = ComponentPropsWithoutRef<typeof CommandEmpty>;

export type CommandGroupType = ElementRef<typeof CommandGroup>;
export type CommandGroupProps = ComponentPropsWithoutRef<typeof CommandGroup>;

export type CommandSeparatorType = ElementRef<typeof CommandSeparator>;
export type CommandSeparatorProps = ComponentPropsWithoutRef<
  typeof CommandSeparator
>;

export type CommandItemType = ElementRef<typeof CommandItem>;
export type CommandItemProps = ComponentPropsWithoutRef<typeof CommandItem>;

/*
 * shadcn dialog types
 */
export type DialogOverlayType = ElementRef<typeof DialogOverlay>;
export type DialogOverlayProps = ComponentPropsWithoutRef<typeof DialogOverlay>;

export type DialogContentType = ElementRef<typeof DialogContent>;
export type DialogContentProps = ComponentPropsWithoutRef<typeof DialogContent>;

export type DialogTitleType = ElementRef<typeof DialogTitle>;
export type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogTitle>;

export type DialogDescriptionType = ElementRef<typeof DialogDescription>;
export type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof DialogDescription
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

export type FormLabelType = ElementRef<typeof Label>;
export type FormLabelProps = ComponentPropsWithoutRef<typeof Label>;

export type FormControlType = ElementRef<typeof Slot>;
export type FormControlProps = ComponentPropsWithoutRef<typeof Slot>;

/*
 * shadcn label types
 */
export type LabelType = React.ElementRef<typeof Label>;
export type LabelProps = React.ComponentPropsWithoutRef<typeof Label> &
  VariantProps<typeof labelVariants>;

/*
 * shadcn input types
 */
export type InputProps = InputHTMLAttributes<HTMLInputElement>;
