'use client';

import Error from '@/app/error';
import { Inter } from 'next/font/google';

const inter = Inter({
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  preload: true,
});

type ErrorProps = {
  error: Error & { digest?: string };
};

const GlobalError = ({ error }: ErrorProps) => (
  <html lang='sv'>
    <body className={`${inter.className} w-full`}>
      <main className='mx-auto flex w-full flex-col bg-background lg:w-[90vw] xl:w-[75vw]'>
        <Error error={error} />
      </main>
    </body>
  </html>
);
GlobalError.displayName = 'GlobalError';

export default GlobalError;
