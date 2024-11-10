'use client';

import type { OnConsentSubmit } from '@/app/_components';
import { useToast } from '@/hooks';
import { api } from '@/trpc';

export const useCreateCookieConsent = ({
  onConsentSubmit,
}: OnConsentSubmit) => {
  const { toast } = useToast();

  const createConsent = api.cookie.createConsent.useMutation({
    onSuccess: () => {
      onConsentSubmit(true);
      toast({
        variant: 'success',
        title: 'Tack!',
        description: 'Vi har sparat dina preferenser.',
      });
    },
  });

  return { createConsent };
};
