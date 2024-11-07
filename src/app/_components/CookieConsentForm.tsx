'use client';

import { Button, CheckboxWithText } from '@/components';
import { useCreateCookieConsent } from '@/hooks';
import { useState } from 'react';

export type OnConsentSubmit = {
  onConsentSubmit: (isSubmitted: boolean) => void;
};

export const CookieConsentForm = ({ onConsentSubmit }: OnConsentSubmit) => {
  const [isChecked, setIsChecked] = useState(true);

  const { createConsent } = useCreateCookieConsent({ onConsentSubmit });

  const handleSubmit = async () => {
    await createConsent.mutateAsync({ hasAccepted: isChecked });
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
        aria-label='Acceptera valt samtycke'
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
