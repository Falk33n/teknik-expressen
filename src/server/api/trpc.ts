import { db, type PrismaClientType } from '@/server/db';
import { initTRPC } from '@trpc/server';
import type {
  DefaultErrorShape,
  MiddlewareBuilder,
  ProcedureBuilder,
  TRPCError,
  unsetMarker,
} from '@trpc/server/unstable-core-do-not-import';
import type { NextRequest } from 'next/server';
import superjson from 'superjson';
import { ZodError } from 'zod';

type CtxProps = { req: NextRequest; resHeaders: Headers; db: PrismaClientType };

type TRPCContextType = Promise<CtxProps>;

export const createTRPCContext = async (opts: {
  req: NextRequest;
  resHeaders: Headers;
}): TRPCContextType => {
  return {
    db,
    ...opts,
  };
};

type ErrorProps = {
  shape: DefaultErrorShape;
  error: TRPCError;
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }: ErrorProps) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;

type TimingMiddlewareType = MiddlewareBuilder<
  CtxProps,
  object,
  object,
  unknown
>;

const timingMiddleware: TimingMiddlewareType = t.middleware(
  async ({ next, path }) => {
    const start: number = Date.now();

    if (t._config.isDev) {
      const waitMs = Math.floor(Math.random() * 400) + 100;
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }

    const result = await next();

    const end = Date.now();
    console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

    return result;
  }
);

type PublicProcedureType = ProcedureBuilder<
  CtxProps,
  object,
  {}, // eslint-disable-line
  typeof unsetMarker,
  typeof unsetMarker,
  typeof unsetMarker,
  typeof unsetMarker,
  false
>;

export const publicProcedure: PublicProcedureType =
  t.procedure.use(timingMiddleware);
