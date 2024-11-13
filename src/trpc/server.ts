import { type AppRouter, createCaller } from '@/server';
import { createTRPCContext } from '@/server/api/trpc';
import { createQueryClient, getBaseUrl } from '@/trpc';
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { cache } from 'react';
import 'server-only';
/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = async () => {
  const heads = new Headers(await headers());
  heads.set('x-trpc-source', 'rsc');

  /**
   * Made seperate header for request by combining the URL to the api with headers,
   * to allow `resHeaders` to be added which will enable response headers to
   * successfully make cookies being set in the browser.
   */
  const req = new NextRequest(new URL(getBaseUrl() + '/api/trpc'), {
    headers: heads,
  });

  return createTRPCContext({
    req,
    resHeaders: heads,
  });
};

const getQueryClient = cache(createQueryClient);
const createCallerWithContext = async () => createCaller(await createContext());
const asyncCaller = await createCallerWithContext();

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  asyncCaller,
  getQueryClient,
);
