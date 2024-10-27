import { createCaller, createTRPCContext, type AppRouter } from '@/server/api';
import { createQueryClient } from '@/trpc';
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { headers } from 'next/headers';
import { cache } from 'react';
import 'server-only';

const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set('x-trpc-source', 'rsc');

  return createTRPCContext({
    headers: heads,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api_server, HydrateClient } =
  createHydrationHelpers<AppRouter>(caller, getQueryClient);
