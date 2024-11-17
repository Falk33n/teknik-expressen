import {
  IconWithText,
  IoReloadSharp,
  LiaAwardSolid,
  LiaShippingFastSolid,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  type IconWithTextProps,
} from '@/components';

const ICONS_WITH_TEXTS: IconWithTextProps[] = [
  {
    Icon: LiaAwardSolid,
    text: 'Prismatch',
  },
  {
    Icon: IoReloadSharp,
    iconClassName: 'scale-x-[-1]',
    text: (
      <>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              aria-label='Fri retur inom 30 dagar'
              className='rounded-md uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-secondary sm:hidden'
            >
              Fri retur*
            </TooltipTrigger>

            <TooltipContent sideOffset={10} side='bottom' aria-hidden>
              <p>*Inom 30 dagar</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <span className='hidden sm:inline'>Fri retur inom 30 dagar</span>
      </>
    ),
  },
  {
    Icon: LiaShippingFastSolid,
    text: (
      <>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              aria-label='Fri frakt över 500kr'
              className='rounded-md uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-secondary sm:hidden'
            >
              Fri frakt*
            </TooltipTrigger>

            <TooltipContent sideOffset={10} side='bottom' aria-hidden>
              <p>*Över 500 kr</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <span className='hidden sm:inline'>Fri frakt över 500kr</span>
      </>
    ),
  },
];

export const Topbar = () => (
  <>
    <header className='sr-only'>
      <h1>Välkommen till Teknik-Expressen</h1>
    </header>

    <aside className='flex w-full items-center justify-evenly gap-2 overflow-x-auto bg-secondary px-4 py-2.5 text-xs uppercase text-secondary-foreground sm:justify-center sm:gap-8 sm:py-3 sm:text-sm sm:tracking-wide md:gap-12'>
      {ICONS_WITH_TEXTS.map((props, i) => (
        <IconWithText key={i} {...props} />
      ))}
    </aside>
  </>
);
Topbar.displayName = 'Topbar';
