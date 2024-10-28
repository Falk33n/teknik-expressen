'use client';

import { Button, Checkbox } from '@/components/ui';
import { useState } from 'react';

export const ConsentForm = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleSubmit = () => {};

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
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
        disabled={!isChecked}
      >
        Acceptera vald
      </Button>
      <Button
        variant='outline'
        type='submit'
        aria-label='Acceptera inte samtycke'
      >
        Acceptera inte
      </Button>
    </form>
  );
};

ConsentForm.displayName = 'ConsentForm';
