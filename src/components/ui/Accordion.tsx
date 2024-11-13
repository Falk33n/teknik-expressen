import {
  RadixAccordion,
  RadixAccordionContent,
  RadixAccordionHeader,
  RadixAccordionItem,
  RadixAccordionTrigger,
  RxChevronDown,
} from '@/components';
import { cn } from '@/lib';
import type { ComponentProps } from 'react';

export const Accordion = RadixAccordion;

type AccordionItemProps = ComponentProps<typeof RadixAccordionItem>;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => (
  <RadixAccordionItem className={cn(className)} {...props} />
);
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = ComponentProps<typeof RadixAccordionTrigger>;

export const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionTriggerProps) => (
  <RadixAccordionHeader className='flex'>
    <RadixAccordionTrigger
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <RxChevronDown
        aria-hidden
        className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 sm:size-5'
      />
    </RadixAccordionTrigger>
  </RadixAccordionHeader>
);
AccordionTrigger.displayName = RadixAccordionTrigger.displayName;

type AccordionContentProps = ComponentProps<typeof RadixAccordionContent>;

export const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionContentProps) => (
  <RadixAccordionContent
    className={cn(
      'overflow-hidden border-y py-4 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className,
    )}
    {...props}
  >
    {children}
  </RadixAccordionContent>
);
AccordionContent.displayName = RadixAccordionContent.displayName;
