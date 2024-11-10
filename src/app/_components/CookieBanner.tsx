'use client';

import { CookieConsentForm } from '@/app/_components';
import { api } from '@/trpc';
import { useState } from 'react';

export const CookieBanner = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data, isLoading } = api.cookie.getConsent.useQuery(undefined, {
    retry: false,
  });

  const status = data && data.status;

  if (isSubmitted || status !== 204 || isLoading) return null;
  else if (status === 204 && !isLoading) {
    return (
      <div
        aria-label='Cookie-banner för att samla in samtycke'
        className='fixed inset-0 z-[50] flex h-screen w-full flex-col justify-center gap-6 bg-background p-8'
      >
        {/* TODO: place brand logo here */}

        <p className='text-balance text-sm leading-6 tracking-wide'>
          Vi på TeknikExpressen vill ge dig en unik shoppingupplevelse, för
          detta använder vi egna cookies och andra teknologier. Vissa av dessa
          är nödvändiga för att vår webbutik ska fungera Genom att välja
          &apos;Acceptera vald&apos; ger du samtycke till alla syften. Du kan
          också göra val nedan och välja &apos;Acceptera inte&apos;. Du kan när
          som helst ångra eller ändra ditt samtycke på Min sida.
        </p>

        <CookieConsentForm onConsentSubmit={setIsSubmitted} />
      </div>
    );
  }
};
CookieBanner.displayName = 'CookieBanner';
