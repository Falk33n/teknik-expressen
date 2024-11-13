'use client';

import { type AppRouter } from '@/server';
import { createQueryClient } from '@/trpc';
import { QueryClientProvider, type QueryClient } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { useState, type ReactNode } from 'react';
import SuperJSON from 'superjson';

let clientQueryClientSingleton: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return createQueryClient();
  } else {
    // Browser: use singleton pattern to keep the same query client
    return (clientQueryClientSingleton ??= createQueryClient());
  }
};

export const api = createTRPCReact<AppRouter>();
const Api = api;

export const TRPCReactProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === 'development' ||
            (op.direction === 'down' && op.result instanceof Error),
        }),
        httpBatchLink({
          transformer: SuperJSON,
          url: getBaseUrl() + '/api/trpc',
          headers: () => {
            const headers = new Headers();
            headers.set('x-trpc-source', 'nextjs-react');
            return headers;
          },
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </Api.Provider>
    </QueryClientProvider>
  );
};
TRPCReactProvider.displayName = 'TRPCReactProvider';

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  } else if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } else {
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }
};
