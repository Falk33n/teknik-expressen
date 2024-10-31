'use client';

import { CookieConsentForm } from '@/components/cookie-banner';
import { api } from '@/trpc';
import { useState } from 'react';

export const CookieBanner = () => {
  const [isConsentSubmitted, setIsConsentSubmitted] = useState(false);
  const { data, isLoading } = api.cookie.getConsent.useQuery(undefined, {
    retry: false,
  });

  if (isConsentSubmitted) {
    // Hide the cookie banner
    return null;
  } else if (data === undefined && !isLoading) {
    // if no consent has previously been submitted then show
    return (
      <div
        aria-label='Cookie-banner för att samla in samtycke'
        className='z-[50] fixed inset-0 flex flex-col justify-center gap-6 bg-background p-8 w-full h-screen text-balance'
      >
        {/* TODO: place brand logo here */}

        <p className='text-sm leading-6 tracking-wide'>
          Vi på TeknikExpressen vill ge dig en unik shoppingupplevelse, för
          detta använder vi egna cookies och andra teknologier. Vissa av dessa
          är nödvändiga för att vår webbutik ska fungera Genom att välja
          &apos;Acceptera vald&apos; ger du samtycke till alla syften. Du kan
          också göra val nedan och välja &apos;Acceptera inte&apos;. Du kan när
          som helst ångra eller ändra ditt samtycke på Min sida.
        </p>

        <CookieConsentForm onConsentSubmit={setIsConsentSubmitted} />
      </div>
    );
  }
};

CookieBanner.displayName = 'CookieBanner';
