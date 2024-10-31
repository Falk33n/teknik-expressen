import { MenuListLink } from '@/components/navbar/menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  NavigationMenuItem,
} from '@/components/shadcn';
import { cn } from '@/helpers';
import type { MenuItemProps } from '@/types';

export const MenuItem = ({
  i,
  title: { icon: Icon, text },
  links,
}: MenuItemProps) => {
  return (
    <NavigationMenuItem className='w-full'>
      <Accordion
        type='single'
        collapsible
      >
        <AccordionItem value={`accordion-item-${i}`}>
          <AccordionTrigger
            aria-label={`${text}, Visa eller dölj innehållet`}
            className={cn('px-6', i % 2 !== 0 && 'bg-secondary')}
          >
            <span
              aria-hidden
              className='flex items-center gap-3'
            >
              <Icon
                aria-hidden
                className='size-4'
              />

              {text}
            </span>
          </AccordionTrigger>

          <AccordionContent
            className={cn(
              'pt-0 pb-12 bg-accent/20',
              i % 2 !== 0 && 'dark:border-background/60'
            )}
          >
            <ul
              role='menu'
              aria-label='Lista med länkar till innehåll inom ACCORDION_ITEM_TITLE'
              className='flex flex-col'
            >
              {links.map((link) => (
                <MenuListLink
                  key={`menuListLink-key-${i}`}
                  {...link}
                />
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </NavigationMenuItem>
  );
};

MenuItem.displayName = 'MenuItem';
