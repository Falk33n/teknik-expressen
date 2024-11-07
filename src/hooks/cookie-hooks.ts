'use client';

import type { OnConsentSubmit } from '@/app/_components';
import { useToast } from '@/hooks';
import { api } from '@/trpc';

export const useCreateCookieConsent = ({
  onConsentSubmit,
}: OnConsentSubmit) => {
  const { toast } = useToast();

  const createConsent = api.cookieConsent.createConsent.useMutation({
    onSuccess: () => {
      toast({
        variant: 'success',
        title: 'Tack!',
        description: 'Vi har sparat dina preferenser.',
      });

      onConsentSubmit(true);
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Något gick fel!',
        description: 'Var god försök igen senare.',
      });

      onConsentSubmit(true);
    },
  });

  return { createConsent };
};
