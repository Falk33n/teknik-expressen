import { MenuContent } from '@/app/_components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  IconWithText,
  type IconWithTextProps,
  type LinkIconWithTextProps,
} from '@/components';
import { cn } from '@/lib';

export type MenuListProps = {
  trigger: IconWithTextProps;
  content: LinkIconWithTextProps[];
};

export const MenuList = ({ trigger, content }: MenuListProps) => (
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
            <MenuContent key={i} {...props} />
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
MenuList.displayName = 'MenuList';
