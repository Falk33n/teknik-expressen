import { type AppRouter, createCaller } from '@/server/api';
import { createTRPCContext } from '@/server/api/trpc';
import { createQueryClient } from '@/trpc';
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { NextRequest } from 'next/server';
import { cache } from 'react';
import 'server-only';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  } else if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } else {
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }
};

const createContext = () => {
  const heads = new Headers();
  heads.set('x-trpc-source', 'rsc');

  const req = new NextRequest(new URL(getBaseUrl() + '/api/trpc'), {
    headers: heads,
  });

  return createTRPCContext({
    req,
    resHeaders: heads,
  });
};

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: serverApi, HydrateClient } =
  createHydrationHelpers<AppRouter>(caller, getQueryClient);
