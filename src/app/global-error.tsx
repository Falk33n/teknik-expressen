'use client';

import { ErrorButton, ErrorContainer } from '@/app/_root/errors/components';

import { Inter } from 'next/font/google';

import '@/styles/globals.css';

const inter = Inter({
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  preload: true,
});

type ErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

const GlobalError = ({ error, retry }: ErrorProps) => (
  <html lang='sv'>
    <body className={`${inter.className} w-full`}>
      <main className='mx-auto flex w-full flex-col bg-background lg:w-[90vw] xl:w-[75vw]'>
        <ErrorContainer
          errorCode={error.digest ?? 500}
          errorAriaLabel={`Felkod: ${error.digest ?? 500}. ${error.message}`}
          errorMessage={error.message}
        >
          <ErrorButton
            onClick={() => retry()}
            text='Försök igen'
            className='mt-1.5'
          />

          <span className='mt-1.5 flex items-center gap-2'>
            <ErrorButton asLink href='/support' text='Kontakta kundtjänst' />

            <ErrorButton asLink text='Gå till hemsidan' />
          </span>
        </ErrorContainer>
      </main>
    </body>
  </html>
);
GlobalError.displayName = 'GlobalError';
export default GlobalError;
