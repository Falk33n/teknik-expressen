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
      await handleErrors.mutateAsync({
        message: error.message,
        name: error.name,
        stack: error.stack ?? undefined,
        statusCode: Number(error.digest) ?? undefined,
      });
    };

    logErrors();
  }, [error, handleErrors]);
};
