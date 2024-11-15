import { cookieRouter, sessionRouter, userRouter } from '@/server/api/routers';
import { createCallerFactory, createTRPCRouter } from '@/server/api/trpc';

export const appRouter = createTRPCRouter({
  cookie: cookieRouter,
  user: userRouter,
  session: sessionRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
