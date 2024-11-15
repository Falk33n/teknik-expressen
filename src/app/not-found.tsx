'use client';

import { ErrorButton, ErrorContainer } from '@/app/components/error';
import { usePathname } from 'next/navigation';

const NotFound = () => {
  const pathname = usePathname();

  return (
    <ErrorContainer
      errorCode={404}
      errorAriaLabel={`Felkod: 404. Sidan '${pathname}' finns inte`}
      errorMessage={
        <>
          Sidan <span className='italic'>&apos;{pathname}&apos;</span> finns
          inte
        </>
      }
    >
      <ErrorButton asLink text='Gå tillbaka till hemsidan' className='mt-1.5' />
    </ErrorContainer>
  );
};
NotFound.displayName = 'NotFound';

export default NotFound;
