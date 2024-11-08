import { Small_MenuContent } from '@/app/_components';
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

export type Small_MenuListProps = {
  trigger: IconWithTextProps;
  content: LinkIconWithTextProps[];
};

export const Small_MenuList = ({
  trigger: { Icon, text },
  content,
}: Small_MenuListProps) => (
  <Accordion type='single' collapsible>
    <AccordionItem value='accordion-item-1'>
      <AccordionTrigger
        aria-label={`${text}, Visa eller dölj innehållet`}
        className='px-4'
      >
        <IconWithText Icon={Icon} text={text} />
      </AccordionTrigger>

      <AccordionContent className={cn('pb-12 pt-0')}>
        <ul
          aria-label={`Lista med länkar inom kategorin ${text}`}
          className='flex flex-col [&>li:nth-child(even)]:bg-accent [&>li:nth-child(odd)]:bg-accent/35'
        >
          {content.map((props, i) => (
            <Small_MenuContent key={i} {...props} />
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
Small_MenuList.displayName = 'Small_MenuList';