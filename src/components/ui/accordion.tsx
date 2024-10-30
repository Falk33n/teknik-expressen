'use client';

import { cn } from '@/lib';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

export const Accordion = AccordionPrimitive.Root;

type AccordionItemType = ElementRef<typeof AccordionPrimitive.Item>;
type AccordionItemProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export const AccordionItem = forwardRef<AccordionItemType, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(className)}
      {...props}
    />
  )
);

AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerType = ElementRef<typeof AccordionPrimitive.Trigger>;
type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;

export const AccordionTrigger = forwardRef<
  AccordionTriggerType,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
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
      <ChevronDownIcon className='text-muted-foreground transition-transform duration-200 shrink-0 size-4' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

type AccordionContentType = ElementRef<typeof AccordionPrimitive.Content>;
type AccordionContentProps = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

export const AccordionContent = forwardRef<
  AccordionContentType,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
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
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
