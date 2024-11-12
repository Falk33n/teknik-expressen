import { Button, Link } from '@/components';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

export const Footer = () => (
  <footer className='flex flex-col gap-6 bg-accent p-4'>
    <nav aria-label='Fot navigationer' className='flex flex-col gap-6'>
      <ul
        aria-label='Lista med genvägar till olika sidor på webbsidan'
        className='flex flex-col'
      >
        <li aria-hidden className='mb-2 font-semibold'>
          Genvägar
        </li>
        <li>
          <Link href='/account'>Mitt konto</Link>
        </li>
        <li>
          <Link href=''>Orderhistorik</Link>
        </li>
        <li>
          <Link href=''>Kundtjänst</Link>
        </li>
      </ul>

      <ul
        aria-label='Lista med länkar till våra sociala medier'
        className='flex flex-wrap items-center gap-2'
      >
        <li
          aria-hidden
          className='mb-2 flex-shrink-0 font-semibold [flex-basis:100%]'
        >
          Sociala medier
        </li>
        <li>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='text-primary'
          >
            <Link
              target='_blank'
              aria-label='Gå till våran Facebook sida, öppnas i ett nytt fönster'
              href='https://www.facebook.com/'
            >
              <FaFacebook aria-hidden />
            </Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='text-orange-500'
          >
            <Link
              target='_blank'
              aria-label='Gå till våran Instagram sida, öppnas i ett nytt fönster'
              href='https://www.instagram.com/'
            >
              <FaInstagram aria-hidden />
            </Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='text-red-500'
          >
            <Link
              target='_blank'
              aria-label='Gå till våran YouTube sida, öppnas i ett nytt fönster'
              href='https://www.youtube.com/'
            >
              <FaYoutube aria-hidden />
            </Link>
          </Button>
        </li>
      </ul>

      <ul
        aria-label='Lista med länkar till våra policys'
        className='flex flex-col'
      >
        <li aria-hidden className='mb-2 font-semibold'>
          Policys
        </li>
        <li>
          <Link href='/account'>Användning av cookies</Link>
        </li>
        <li>
          <Link href=''>Integritetspolicy</Link>
        </li>
      </ul>
    </nav>
    <p className='text-center text-xs font-bold tracking-wide text-accent-foreground/80'>
      &copy; 2025 TeknikExpressen AB. All rights reserved.
    </p>
  </footer>
);
Footer.displayName = 'Footer';
