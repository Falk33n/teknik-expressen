'use client';

import { useToast } from '@/hooks';
import { api } from '@/trpc';
import { useRouter } from 'next/navigation';

export const useCreateUser = () => {
  const { toast } = useToast();

  const router = useRouter();

  const createUser = api.user.createUser.useMutation({
    onSuccess: () => {
      router.push('/login');

      toast({
        variant: 'success',
        title: 'Välkommen!',
        description: 'Registreringen lyckades, var god och logga in.',
      });
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Något gick fel!',
        description: 'Var god försök igen.',
      });
    },
  });

  return { createUser };
};
