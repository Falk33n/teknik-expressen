import { createCallerFactory, createTRPCRouter } from '@/server/api';
import { postRouter } from '@/server/api/routers';

export const appRouter = createTRPCRouter({
  post: postRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
