'use client';

import { Button, ErrorsContainer, Link } from '@/components';
import { usePathname } from 'next/navigation';

const NotFound = () => {
  const pathname = usePathname();

  return (
    <ErrorsContainer
      errorCode={404}
      errorAriaLabel={`Felkod: 404. Sidan '${pathname}' finns inte`}
      errorMessage={
        <>
          Sidan <span className='italic'>&apos;{pathname}&apos;</span> finns
          inte
        </>
      }
    >
      <Button asChild>
        <Link
          href='/'
          resetClassName
          className='mt-1.5 hover:bg-primary/60 hover:text-white focus-visible:bg-primary/60 focus-visible:text-white'
        >
          Gå tillbaka till hemsidan
        </Link>
      </Button>
    </ErrorsContainer>
  );
};
NotFound.displayName = 'NotFound';
export default NotFound;
