import { Link } from '@/components';

type FooterLinkProps = {
  text: string;
  href: string;
};

export const FooterLink = ({ text, href }: FooterLinkProps) => (
  <Link
    aria-label={`Gå till ${text}`}
    className='-ml-2 rounded-md p-2'
    href={href}
  >
    {text}
  </Link>
);
FooterLink.displayName = 'FooterLink';
