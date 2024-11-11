'use client';

import { api } from '@/trpc';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
};

export const useErrorLog = ({ error }: ErrorProps) => {
  const handleErrors = api.log.createError.useMutation();

  useEffect(() => {
    const logErrors = async () => {
      try {
        await handleErrors.mutateAsync({
          message: error.message,
          name: error.name,
          stack: error.stack || '',
          statusCode: Number(error.digest) || 500,
        });
      } catch {
        console.error('INTERNAL_SERVER_ERROR');
      }
    };

    logErrors();
  }, [error, handleErrors]);
};
