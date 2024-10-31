import { createCaller, createTRPCContext, type AppRouter } from '@/server/api';
import { createQueryClient, trpcReact } from '@/trpc';
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { cache } from 'react';
import 'server-only';

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set('x-trpc-source', 'rsc');

  /**
   * Made seperate header for request by combining the URL to the api with headers,
   * to allow `resHeaders` to be added which will enable response headers to
   * successfully make cookies being created in the browser.
   */
  const req = new NextRequest(new URL(trpcReact.getBaseUrl() + '/api/trpc'), {
    headers: heads,
  });

  return createTRPCContext({
    req,
    resHeaders: heads,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient
);
