import { cn } from '@/lib';
import {
  Accordion as Radix_Accordion,
  AccordionContent as Radix_AccordionContent,
  AccordionHeader as Radix_AccordionHeader,
  AccordionItem as Radix_AccordionItem,
  AccordionTrigger as Radix_AccordionTrigger,
} from '@radix-ui/react-accordion';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';
import { RxChevronDown } from 'react-icons/rx';

export const Accordion = Radix_Accordion;

type AccordionItemType = ElementRef<typeof Radix_AccordionItem>;
type AccordionItemProps = ComponentPropsWithoutRef<typeof Radix_AccordionItem>;

export const AccordionItem = forwardRef<AccordionItemType, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <Radix_AccordionItem ref={ref} className={cn(className)} {...props} />
  ),
);
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerType = ElementRef<typeof Radix_AccordionTrigger>;
type AccordionTriggerProps = ComponentPropsWithoutRef<
  typeof Radix_AccordionTrigger
>;

export const AccordionTrigger = forwardRef<
  AccordionTriggerType,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <Radix_AccordionHeader className='flex'>
    <Radix_AccordionTrigger
      ref={ref}
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
    </Radix_AccordionTrigger>
  </Radix_AccordionHeader>
));
AccordionTrigger.displayName = Radix_AccordionTrigger.displayName;

type AccordionContentType = ElementRef<typeof Radix_AccordionContent>;
type AccordionContentProps = ComponentPropsWithoutRef<
  typeof Radix_AccordionContent
>;

export const AccordionContent = forwardRef<
  AccordionContentType,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <Radix_AccordionContent
    ref={ref}
    className={cn(
      'overflow-hidden border-y py-4 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className,
    )}
    {...props}
  >
    {children}
  </Radix_AccordionContent>
));
AccordionContent.displayName = Radix_AccordionContent.displayName;
