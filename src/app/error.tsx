'use client';

import { ErrorButton, ErrorContainer } from '@/components';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <ErrorContainer
      errorCode={error.digest ?? 500}
      errorAriaLabel={`Felkod: ${error.digest ?? 500}. ${error.message}`}
      errorMessage={error.message}
    >
      <span className='mt-1.5 flex items-center gap-2'>
        <ErrorButton asLink href='/support' text='Kontakta kundtjänst' />

        <ErrorButton asLink text='Gå till hemsidan' />
      </span>
    </ErrorContainer>
  );
};
Error.displayName = 'Error';

export default Error;
