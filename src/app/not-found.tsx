'use client';

import { Button, Link } from '@/components';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NotFound = () => {
  const pathname = usePathname();

  return (
    <section className='flex h-[80vh] flex-col items-center justify-center gap-6 px-4'>
      <figure aria-hidden>
        <Image
          width={200}
          height={200}
          src='/error-sobbing.png'
          aria-hidden
          alt='Ledsen tecknad människa'
          className='dark:invert-[100%]'
          priority
        />
      </figure>

      <h2
        aria-hidden
        className='text-5xl font-bold tracking-wide text-red-600 lg:text-7xl'
      >
        404
      </h2>

      <h2
        aria-label={`Felkod: 404. Sidan '${pathname}' finns inte`}
        className='text-lg font-medium md:mx-auto md:w-[60%] md:text-center'
      >
        Sidan <span className='italic'>&apos;{pathname}&apos;</span> finns inte
      </h2>

      <Button asChild>
        <Link
          href='/'
          resetClassName
          className='mt-1.5 hover:bg-primary/60 hover:text-white focus-visible:bg-primary/60 focus-visible:text-white'
        >
          Gå tillbaka till hemsidan
        </Link>
      </Button>
    </section>
  );
};
NotFound.displayName = 'NotFound';
export default NotFound;
