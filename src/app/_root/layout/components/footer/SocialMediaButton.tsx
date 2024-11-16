import {
  Button,
  Fa6,
  Link,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components';
import { cn } from '@/lib/utils';

type SocialMediaButtonProps = {
  socialMedia: 'Facebook' | 'YouTube' | 'Instagram';
};

export const SocialMediaButton = ({ socialMedia }: SocialMediaButtonProps) => {
  const Icon =
    socialMedia === 'Facebook'
      ? Fa6.FaFacebook
      : socialMedia === 'YouTube'
        ? Fa6.FaYoutube
        : Fa6.FaInstagram;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            variant='outline'
            size='icon'
            className={cn(
              'size-10 dark:bg-background/35',
              socialMedia === 'Facebook'
                ? 'text-primary hover:text-primary/80'
                : socialMedia === 'YouTube'
                  ? 'text-red-600 hover:text-red-600/80'
                  : 'text-orange-500 hover:text-orange-500/80',
            )}
          >
            <Link
              target='_blank'
              aria-label={`Gå till våran ${socialMedia} sida, öppnas i ett nytt fönster`}
              href={`https://www.${socialMedia.toLowerCase()}.com/`}
            >
              <Icon aria-hidden className='scale-125' />
            </Link>
          </Button>
        </TooltipTrigger>

        <TooltipContent sideOffset={10} side='bottom' aria-hidden>
          Gå till våran {socialMedia} sida
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
SocialMediaButton.displayName = 'SocialMediaButton';
