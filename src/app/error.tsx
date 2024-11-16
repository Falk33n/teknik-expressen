'use client';

import { ErrorButton, ErrorContainer } from '@/app/root/error/components';

type ErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

const Error = ({ error, retry }: ErrorProps) => (
  <ErrorContainer
    errorCode={error.digest ?? 500}
    errorAriaLabel={`Felkod: ${error.digest ?? 500}. ${error.message}`}
    errorMessage={error.message}
  >
    <ErrorButton
      onClick={() => retry()}
      text='Försök igen'
      className='mt-1.5'
    />

    <span className='mt-1.5 flex items-center gap-2'>
      <ErrorButton asLink href='/support' text='Kontakta kundtjänst' />

      <ErrorButton asLink text='Gå till hemsidan' />
    </span>
  </ErrorContainer>
);
Error.displayName = 'Error';

export default Error;
