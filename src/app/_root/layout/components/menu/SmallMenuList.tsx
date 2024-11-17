import { SmallMenuContent } from '@/app/_root/layout/components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  IconWithText,
  type IconWithTextProps,
  type LinkIconWithTextProps,
} from '@/components';

import { cn } from '@/lib/utils';

export type SmallMenuListProps = {
  trigger: IconWithTextProps;
  content: LinkIconWithTextProps[];
};

export const SmallMenuList = ({ trigger, content }: SmallMenuListProps) => (
  <Accordion type='single' collapsible>
    <AccordionItem value='accordion-item-1'>
      <AccordionTrigger
        aria-label={`${trigger.text}, Visa eller dölj innehållet`}
        className='px-4'
      >
        <IconWithText Icon={trigger.Icon} text={trigger.text} />
      </AccordionTrigger>

      <AccordionContent className={cn('pb-12 pt-0')}>
        <ul
          aria-label={`Lista med länkar inom kategorin ${trigger.text}`}
          className='flex flex-col [&>li:nth-child(even)]:bg-accent [&>li:nth-child(odd)]:bg-accent/35'
        >
          {content.map((props, i) => (
            <SmallMenuContent key={i} {...props} />
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
SmallMenuList.displayName = 'SmallMenuList';
