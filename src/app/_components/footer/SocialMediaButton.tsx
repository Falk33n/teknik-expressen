import { Button, FaFacebook, FaInstagram, FaYoutube, Link } from '@/components';
import { cn } from '@/lib';

type SocialMediaButtonProps = {
  socialMedia: 'Facebook' | 'YouTube' | 'Instagram';
};

export const SocialMediaButton = ({ socialMedia }: SocialMediaButtonProps) => {
  const Icon =
    socialMedia === 'Facebook'
      ? FaFacebook
      : socialMedia === 'YouTube'
        ? FaYoutube
        : FaInstagram;

  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className={cn(
        'size-10',
        socialMedia === 'Facebook'
          ? 'text-primary'
          : socialMedia === 'YouTube'
            ? 'text-red-600'
            : 'text-orange-500',
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
  );
};
SocialMediaButton.displayName = 'SocialMediaButton';
