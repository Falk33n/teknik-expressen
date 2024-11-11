import Error from '@/app/error';
import RootLayout from '@/app/layout';

type ErrorProps = {
  error: Error & { digest?: string };
};

const GlobalError = ({ error }: ErrorProps) => (
  <RootLayout>
    <Error error={error} />
  </RootLayout>
);
GlobalError.displayName = 'GlobalError';

export default GlobalError;
