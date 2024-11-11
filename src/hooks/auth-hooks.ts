'use client';

import { useToast } from '@/hooks';
import { api } from '@/trpc';
import { useRouter } from 'next/navigation';

export const useCreateSession = () => {
  const { toast } = useToast();
  const router = useRouter();

  const createSession = api.session.createSession.useMutation({
    onSuccess: (data) => {
      const isSessionCreated = data.status === 200 ? true : false;

      if (isSessionCreated) router.push('/');

      toast({
        variant: isSessionCreated ? 'success' : 'destructive',
        title: isSessionCreated ? 'Välkommen tillbaka!' : 'Misslyckades!',
        description: isSessionCreated
          ? 'Inloggningen lyckades.'
          : 'Felaktig e-postadress eller lösenord.',
      });
    },
  });

  return { createSession };
};
