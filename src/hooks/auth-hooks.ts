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
      toast({
        variant: 'destructive',
        title: error.message,
        description: 'Var god försök igen.',
      });
    },
  });

  return { createAuth };
};
