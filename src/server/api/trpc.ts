import {
  ConflictError,
  getSession,
  InternalServerError,
  parseTRPCErrorCode,
  UnauthorizedError,
} from '@/lib/utils';

import superjson from 'superjson';
import { ZodError } from 'zod';

import { db } from '@/server';

import { initTRPC, TRPCError } from '@trpc/server';

import type { NextRequest } from 'next/server';

export const createTRPCContext = async (opts: {
  req: NextRequest;
  resHeaders: Headers;
}) => ({ db, ...opts });

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
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

// ONLY FOR DEVELOPMENT, Remove before building
const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();
  const end = Date.now();

  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);
  return result;
});

const errorLoggingMiddleware = t.middleware(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error instanceof TRPCError) {
      await db.errorLog.create({
        data: {
          message: error.message,
          name: error.name,
          stack: error.stack,
          statusCode: parseTRPCErrorCode(error.code),
        },
      });
    } else if (
      error instanceof UnauthorizedError ||
      error instanceof InternalServerError ||
      error instanceof ConflictError
    ) {
      await db.errorLog.create({
        data: {
          message: error.message,
          name: error.name,
          stack: error.stack,
          statusCode: Number(error.digest),
        },
      });
    } else if (error instanceof Error) {
      await db.errorLog.create({
        data: {
          message: error.message,
          name: error.name,
          stack: error.stack,
        },
      });
    }

    throw error;
  }
});

export const sessionMiddleware = t.middleware(async ({ ctx, next }) => {
  const user = await getSession(false);
  if (user.status === 'unauthorized') {
    throw new InternalServerError();
  }

  return await next({
    ctx: {
      ...ctx,
      userId: user.userId,
    },
  });
});

export const publicProcedure = t.procedure
  .use(timingMiddleware)
  .use(errorLoggingMiddleware);

export const sessionProcedure = t.procedure
  .use(errorLoggingMiddleware)
  .use(timingMiddleware)
  .use(sessionMiddleware);
