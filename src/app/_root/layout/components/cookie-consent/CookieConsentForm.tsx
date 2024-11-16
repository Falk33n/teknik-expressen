'use client';

import { Button, CheckboxWithText } from '@/components';
import { useToast } from '@/hooks';
import { clientApi } from '@/trpc/Client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const CookieConsentForm = () => {
  const [isChecked, setIsChecked] = useState(true);

  const router = useRouter();
  const { toast } = useToast();

  const createConsent = clientApi.cookie.createConsent.useMutation({
    onSuccess: (data) => {
      toast({
        variant: data.status,
        title: data.title,
        description: data.message,
      });

      router.refresh();
    },
  });

  const handleSubmit = () => {
    createConsent.mutate({ hasAccepted: isChecked });
  };

  return (
    <form
      noValidate
      className='flex flex-col gap-6'
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <CheckboxWithText
        id='necessary-cookies'
        checked={isChecked}
        defaultChecked
        className='items-start'
        onCheckedChange={() => setIsChecked((prev) => !prev)}
        label='Nödvändiga cookies'
        description='Cookies som är nödvändiga för att våran tjänst ska fungera. Till
            exempel att vi håller dig inloggad, tar hand om varorna i din
            kundvagn och kommer ihåg dina inställningar.'
      />

      <Button
        aria-label='Acceptera samtycke'
        type='submit'
        disabled={!isChecked || createConsent.isPending}
      >
        Acceptera vald
      </Button>

      <Button
        variant='outline'
        type='submit'
        onClick={() => setIsChecked(false)}
        aria-label='Acceptera inte samtycke'
        disabled={createConsent.isPending}
      >
        Acceptera inte
      </Button>
    </form>
  );
};
CookieConsentForm.displayName = 'CookieConsentForm';
