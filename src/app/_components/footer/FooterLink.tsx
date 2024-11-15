import { Link } from '@/components/ui';

type FooterLinkProps = {
  text: string;
  href: string;
};

export const FooterLink = ({ text, href }: FooterLinkProps) => (
  <Link
    aria-label={`Gå till ${text}`}
    className='-ml-2 rounded-md p-2 text-sm sm:text-base'
    href={href}
  >
    {text}
  </Link>
);
FooterLink.displayName = 'FooterLink';
