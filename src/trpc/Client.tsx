'use client';

import { createQueryClient } from '@/trpc';
import { QueryClientProvider, type QueryClient } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '@/server/api';

import SuperJSON from 'superjson';

import { useState, type ReactNode } from 'react';

let clientQueryClientSingleton: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === 'undefined') {
    return createQueryClient();
  } else {
    return (clientQueryClientSingleton ??= createQueryClient());
  }
};

export const clientApi = createTRPCReact<AppRouter>();

export const TRPCProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    clientApi.createClient({
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
      <clientApi.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </clientApi.Provider>
    </QueryClientProvider>
  );
};
TRPCProvider.displayName = 'TRPCProvider';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  } else if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } else {
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }
};
