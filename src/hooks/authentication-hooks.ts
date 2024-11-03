'use client';

import { useToast } from '@/hooks';
import { api } from '@/trpc';
import type { AuthenticationFormProps, Toast } from '@/types';
import { useCallback } from 'react';

export const useAuth = (
  onAccountSubmit: AuthenticationFormProps['onAccountSubmit']
) => {
  const { toast } = useToast();

  // Memoize the callback to avoid recreating it on every render
  const handleAccountSubmit = useCallback(() => {
    onAccountSubmit(true);
  }, [onAccountSubmit]);

  // Reusable toast function to not repeat code
  const showToast = useCallback(
    ({ variant, title, description }: Toast) => {
      toast({ variant, title, description });
    },
    [toast]
  );

  const createAuth = api.auth.createAuth.useMutation({
    onSuccess: () => {
      showToast({
        variant: 'success',
        title: 'Välkommen tillbaka!',
        description: 'Inloggningen lyckades.',
      });
      // activate the event that triggers the auth component to close
      handleAccountSubmit();
    },
    onError: () => {
      showToast({
        variant: 'destructive',
        title: 'Något gick fel!',
        description: 'Var god försök igen senare.',
      });
    },
  });

  const createUser = api.user.createUser.useMutation({
    onSuccess: () => {
      showToast({
        variant: 'success',
        title: 'Välkommen!',
        description: 'Kontot har skapats. Var god logga in.',
      });
      // activate the event that triggers the auth component to close
      handleAccountSubmit();
    },
    onError: () => {
      showToast({
        variant: 'destructive',
        title: 'Något gick fel!',
        description: 'Var god försök igen senare.',
      });
    },
  });

  return {
    createAuth,
    createUser,
  };
};
