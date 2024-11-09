'use client';

import { Link } from '@/components';
import { usePathname } from 'next/navigation';

const NotFound = () => {
  const pathname = usePathname();

  return (
    <section className='flex h-[80vh] flex-col items-center justify-center gap-6'>
      <h2
        aria-hidden
        className='text-5xl font-bold tracking-wide text-red-600 lg:text-7xl'
      >
        404
      </h2>

      <h2
        aria-label={`Felkod: 404. Sidan '${pathname}' finns inte`}
        className='text-lg font-medium'
      >
        Sidan <span className='italic'>&apos;{pathname}&apos;</span> finns inte
      </h2>

      <Link href='/' className='rounded-md p-2 underline'>
        Gå tillbaka till hemsidan
      </Link>
    </section>
  );
};
NotFound.displayName = 'NotFound';
export default NotFound;
