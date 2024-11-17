import {
  Link,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';

import { cn } from '@/lib/utils';

import { Moul } from 'next/font/google';

const moul = Moul({
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
  preload: true,
});

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <h1>
          <Link
            href='/'
            className={cn(
              '-ml-2 rounded-md p-2 text-foreground/80',
              moul.className,
              className,
            )}
          >
            TeknikExpressen
          </Link>
        </h1>
      </TooltipTrigger>

      <TooltipContent aria-hidden side='bottom' sideOffset={16}>
        <p>Gå till startsidan</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
Logo.displayName = 'Logo';

export const LogoReadonly = ({ className }: LogoProps) => (
  <h1
    className={cn(
      'text-2xl text-foreground/80 md:text-3xl lg:text-4xl',
      moul.className,
      className,
    )}
  >
    TeknikExpressen
  </h1>
);
LogoReadonly.displayName = 'LogoReadonly';
