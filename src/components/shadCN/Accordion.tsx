import { cn } from '@/helpers';
import type {
  AccordionContentProps,
  AccordionContentType,
  AccordionItemProps,
  AccordionItemType,
  AccordionTriggerProps,
  AccordionTriggerType,
} from '@/types';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<AccordionItemType, AccordionItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <AccordionPrimitive.Item
        ref={ref}
        className={cn(className)}
        {...props}
      />
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = forwardRef<
  AccordionTriggerType,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset hover:underline hover:underline-offset-4 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className='text-muted-foreground transition-transform duration-200 shrink-0 sm:size-5 size-4' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = forwardRef<
  AccordionContentType,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        'py-4 border-y text-sm data-[state=closed]:animate-accordion-up overflow-hidden data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
