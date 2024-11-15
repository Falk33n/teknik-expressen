import { Rx } from '@/components/icons';
import { cn } from '@/lib/utils';
import * as Radix from '@radix-ui/react-accordion';
import type { ComponentProps } from 'react';

export const Accordion = Radix.Accordion;

type AccordionItemProps = ComponentProps<typeof Radix.AccordionItem>;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => (
  <Radix.AccordionItem className={cn(className)} {...props} />
);
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = ComponentProps<typeof Radix.AccordionTrigger>;

export const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionTriggerProps) => (
  <Radix.AccordionHeader className='flex'>
    <Radix.AccordionTrigger
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <Rx.RxChevronDown
        aria-hidden
        className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 sm:size-5'
      />
    </Radix.AccordionTrigger>
  </Radix.AccordionHeader>
);
AccordionTrigger.displayName = Radix.AccordionTrigger.displayName;

type AccordionContentProps = ComponentProps<typeof Radix.AccordionContent>;

export const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionContentProps) => (
  <Radix.AccordionContent
    className={cn(
      'overflow-hidden border-y py-4 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className,
    )}
    {...props}
  >
    {children}
  </Radix.AccordionContent>
);
AccordionContent.displayName = Radix.AccordionContent.displayName;
