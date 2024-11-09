'use client';

import { useToast } from '@/hooks';
import { api } from '@/trpc';
import { useRouter } from 'next/navigation';

export const useCreateAuth = () => {
  const { toast } = useToast();

  const router = useRouter();

  const createAuth = api.session.createSession.useMutation({
    onSuccess: () => {
      router.push('/');

      toast({
        variant: 'success',
        title: 'Välkommen tillbaka!',
        description: 'Inloggningen lyckades.',
      });
    },
    onError: (error) => {
      const { data } = error;

      const errorTitle =
        data?.code === 'UNAUTHORIZED'
          ? 'Fel e-postadress eller lösenord!'
          : 'Något gick fel!';

      toast({
        variant: 'destructive',
        title: errorTitle,
        description: 'Var god försök igen.',
      });
    },
  });

  return { createAuth };
};
