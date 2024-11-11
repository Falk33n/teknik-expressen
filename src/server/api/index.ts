export { appRouter, createCaller, type AppRouter } from './root';
// can't export from trpc.ts since it throws error of undefined createTRPCContext
