'use client';

import { Button, Link } from '@/components';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => (
  <section>
    <h3>{error.name}</h3>
    <h4>{error.message}</h4>
    <Button
      onClick={() => reset()}
      className='rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700'
    >
      Försök igen
    </Button>
    <span>
      <Link href='support'>Kontakta kundtjänst</Link>
      eller
      <Link href='support'>Gå till hemsidan</Link>
    </span>
  </section>
);
Error.displayName = 'Error';
export default Error;
