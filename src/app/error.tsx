'use client';

import { ErrorButton, ErrorContainer } from '@/components';
import { api } from '@/trpc';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error }: ErrorProps) => {
  const handleErrors = api.log.createError.useMutation();

  useEffect(() => {
    const logErrors = async () => {
      await handleErrors.mutateAsync({
        message: error.message,
        name: error.name,
        stack: error.stack,
        statusCode: Number(error.digest),
      });
    };
    logErrors();
  }, [
    error.cause,
    error.digest,
    error.message,
    error.name,
    error.stack,
    handleErrors,
  ]);

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
