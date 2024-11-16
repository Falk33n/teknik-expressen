import {
  Button,
  Link,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';
import Image from 'next/image';

export const FooterCertificate = () => (
  <li role='menuitem' className='flex flex-1 items-center justify-end'>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='size-[2.6rem] dark:bg-background/35'
          >
            <Link
              href='https://tryggehandel.svenskhandel.se/'
              aria-label='Gå till Trygg e-handels hemsida, öppnas i ett nytt fönster'
              target='_blank'
            >
              <Image
                src='/safe-e-commerce.png'
                alt='Trygg e-handels certifikat'
                width={80}
                height={80}
                loading='lazy'
                className='scale-110'
              />
            </Link>
          </Button>
        </TooltipTrigger>

        <TooltipContent sideOffset={10} side='bottom' aria-hidden>
          Gå till Trygg e-handels hemsida
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </li>
);
FooterCertificate.displayName = 'FooterCertificate';
