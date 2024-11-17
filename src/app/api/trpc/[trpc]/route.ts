import { appRouter } from '@/server/api';
import { createTRPCContext } from '@/server/api/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { env } from '@/env';
import type { NextRequest } from 'next/server';

const createContext = async (req: NextRequest, resHeaders: Headers) =>
  await createTRPCContext({
    req,
    resHeaders,
  });

const handler = async (req: NextRequest) =>
  await fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async ({ resHeaders }) =>
      await createContext(req, resHeaders),
    onError:
      env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };
