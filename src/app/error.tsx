'use client';

import { ErrorButton, ErrorContainer } from '@/components';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <ErrorContainer
      errorCode={error.digest ?? 500}
      errorAriaLabel={`Felkod: ${error.digest ?? 500}. ${error.message}`}
      errorMessage={error.message}
    >
      <ErrorButton
        text='Försök igen'
        className='mb-10 mt-1.5'
        onClick={() => reset()}
      />

      <span className='mt-1.5 flex items-center gap-2'>
        <ErrorButton asLink href='/support' text='Kontakta kundtjänst' />

        <ErrorButton asLink text='Gå till hemsidan' />
      </span>
    </ErrorContainer>
  );
};
Error.displayName = 'Error';

export default Error;
