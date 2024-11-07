import { env } from '@/env';
import { appRouter } from '@/server/api';
import { createTRPCContext } from '@/server/api/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { NextRequest } from 'next/server';

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (
  req: NextRequest,
  /**
   * `resHeaders` allows response headers to be sent, which allows for creating and setting cookies in the browser.
   */
  resHeaders: Headers,
) =>
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
