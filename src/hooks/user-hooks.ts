'use client';

import { useToast } from '@/hooks';
import { api } from '@/trpc';
import { useRouter } from 'next/navigation';

export const useCreateUser = () => {
  const { toast } = useToast();
  const router = useRouter();

  const createUser = api.user.createUser.useMutation({
    onSuccess: (data) => {
      const isUserCreated = data.status === 200 ? true : false;

      if (isUserCreated) router.push('/login');

      toast({
        variant: isUserCreated ? 'success' : 'destructive',
        title: isUserCreated ? 'Välkommen!' : 'Misslyckades!',
        description: isUserCreated
          ? 'Var god och logga in.'
          : 'E-postadress eller telefonnummer är upptaget.',
      });
    },
  });

  return { createUser };
};
