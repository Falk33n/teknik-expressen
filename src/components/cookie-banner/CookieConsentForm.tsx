'use client';

import { Button, Checkbox } from '@/components/shadcn';
import { useToast } from '@/hooks';
import { api } from '@/trpc';
import type { CookieConsentFormProps } from '@/types';
import { useState } from 'react';

export const CookieConsentForm = ({
  onConsentSubmit,
}: CookieConsentFormProps) => {
  const [isAccepted, setIsAccepted] = useState(true);
  const { toast } = useToast();

  const createConsent = api.cookieConsent.createConsent.useMutation({
    onSuccess: () => {
      toast({
        variant: 'success',
        title: 'Tack!',
        description: 'Vi har sparat dina preferenser.',
      });
      // set the event to true which will
      // make the cookie-banner disappear
      onConsentSubmit(true);
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Något gick fel!',
        description: 'Var god försök igen senare.',
      });
    },
  });

  const handleSubmit = () => {
    createConsent.mutate({ isAccepted });
  };

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className='flex flex-col gap-6'
    >
      <div className='flex items-top space-x-2'>
        <Checkbox
          id='necessary-cookies'
          checked={isAccepted}
          defaultChecked
          onCheckedChange={() => setIsAccepted((prev) => !prev)}
        />

        <div className='gap-1.5 grid leading-none'>
          <label
            htmlFor='necessary-cookies'
            className='peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed'
          >
            Nödvändiga
          </label>

          <p className='text-muted-foreground text-sm'>
            Cookies som är nödvändiga för att våran tjänst ska fungera. Till
            exempel att vi håller dig inloggad, tar hand om varorna i din
            kundvagn och kommer ihåg dina inställningar.
          </p>
        </div>
      </div>

      <Button
        aria-label='Acceptera valt samtycke'
        type='submit'
        disabled={!isAccepted || createConsent.isPending}
      >
        Acceptera vald
      </Button>

      <Button
        variant='outline'
        type='submit'
        onClick={() => setIsAccepted(false)}
        aria-label='Acceptera inte samtycke'
        disabled={createConsent.isPending}
      >
        Acceptera inte
      </Button>
    </form>
  );
};

CookieConsentForm.displayName = 'CookieConsentForm';
