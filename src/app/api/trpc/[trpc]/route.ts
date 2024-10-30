import { env } from '@/env';
import { appRouter } from '@/server/api/root';
import { createTRPCContext, type CtxProps } from '@/server/api/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { type NextRequest } from 'next/server';

const createContext = async (
  req: NextRequest,
  resHeaders: Headers
): Promise<CtxProps> => {
  return createTRPCContext({
    req,
    resHeaders,
  });
};

const handler = (req: NextRequest): Promise<Response> => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: ({ resHeaders }: { resHeaders: Headers }) =>
      createContext(req, resHeaders),
    onError:
      env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
            );
          }
        : undefined,
  });
};

export { handler as GET, handler as POST };
