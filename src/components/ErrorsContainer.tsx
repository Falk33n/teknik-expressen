import Image from 'next/image';
import type { ReactNode } from 'react';

type ErrorsContainerProps = {
  errorCode: string | number;
  errorAriaLabel: string;
  errorMessage: ReactNode;
  children?: ReactNode;
};

export const ErrorsContainer = ({
  errorCode,
  errorAriaLabel,
  errorMessage,
  children,
}: ErrorsContainerProps) => (
  <section className='flex h-[80vh] flex-col items-center justify-center gap-6 px-4'>
    <figure aria-hidden>
      <Image
        width={200}
        height={200}
        src='/error-sobbing.png'
        aria-hidden
        alt='Ledsen tecknad människa'
        className='dark:invert-[100%]'
        priority
      />
    </figure>

    <h2
      aria-hidden
      className='text-5xl font-bold tracking-wide text-red-600 lg:text-7xl'
    >
      {errorCode}
    </h2>

    <h2
      aria-label={errorAriaLabel}
      className='text-lg font-medium md:mx-auto md:w-[60%] md:text-center'
    >
      {errorMessage}
    </h2>

    {children}
  </section>
);
ErrorsContainer.displayName = 'ErrorsContainer';
