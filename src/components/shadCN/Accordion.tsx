import { cn } from '@/helpers';
import type {
  AccordionContentProps,
  AccordionContentType,
  AccordionItemProps,
  AccordionItemType,
  AccordionTriggerProps,
  AccordionTriggerType,
} from '@/types';
import {
  Accordion as RadixAccordion,
  AccordionContent as RadixAccordionContent,
  AccordionHeader as RadixAccordionHeader,
  AccordionItem as RadixAccordionItem,
  AccordionTrigger as RadixAccordionTrigger,
} from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';

export const Accordion = RadixAccordion;

export const AccordionItem = forwardRef<AccordionItemType, AccordionItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadixAccordionItem
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
    <RadixAccordionHeader className='flex'>
      <RadixAccordionTrigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset hover:underline hover:underline-offset-4 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className='text-muted-foreground transition-transform duration-200 shrink-0 sm:size-5 size-4' />
      </RadixAccordionTrigger>
    </RadixAccordionHeader>
  );
});

AccordionTrigger.displayName = RadixAccordionTrigger.displayName;

export const AccordionContent = forwardRef<
  AccordionContentType,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <RadixAccordionContent
      ref={ref}
      className={cn(
        'py-4 border-y text-sm data-[state=closed]:animate-accordion-up overflow-hidden data-[state=open]:animate-accordion-down',
        className
      )}
      {...props}
    >
      {children}
    </RadixAccordionContent>
  );
});

AccordionContent.displayName = RadixAccordionContent.displayName;
