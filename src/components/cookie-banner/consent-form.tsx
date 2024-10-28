'use client';

import { Button, Checkbox } from '@/components/ui';
import { useToast } from '@/hooks';
import { api } from '@/trpc/react';
import { useState } from 'react';

type ConsentFormProps = {
  onConsentSubmit: (consentSubmitted: boolean) => void;
};

export const ConsentForm = ({ onConsentSubmit }: ConsentFormProps) => {
  const [isChecked, setIsChecked] = useState(true);
  const { toast } = useToast();

  const createConsent = api.cookie.createConsent.useMutation({
    onSuccess: async () => {
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
    createConsent.mutate({ hasAccepted: isChecked });
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
          checked={isChecked}
          defaultChecked
          onCheckedChange={() => setIsChecked((prev) => !prev)}
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

ConsentForm.displayName = 'ConsentForm';
