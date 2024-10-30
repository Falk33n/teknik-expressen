import { createCaller, type AppRouter } from '@/server/api/root';
import { createTRPCContext } from '@/server/api/trpc';
import { getBaseUrl } from '@/trpc/React';
import { PrismaClient } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';
import type { QueryClient } from '@tanstack/react-query';
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import { cache } from 'react';
import 'server-only';
import { createQueryClient } from './query-client';

type ContextType = Promise<{
  req: NextRequest;
  resHeaders: Headers;
  db: PrismaClient<
    {
      log: ('query' | 'warn' | 'error')[];
    },
    never,
    DefaultArgs
  >;
}>;

const createContext = cache((): ContextType => {
  const heads = new Headers(headers());
  const req = new NextRequest(new URL(getBaseUrl() + '/api/trpc'), {
    headers: heads,
  });
  heads.set('x-trpc-source', 'rsc');

  return createTRPCContext({
    req,
    resHeaders: heads,
  });
});

const getQueryClient: () => QueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient
);
