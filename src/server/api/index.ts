export { appRouter, createCaller, type AppRouter } from './root';
export { cookieRouter, logRouter, sessionRouter, userRouter } from './routers';

// can't export from trpc.ts
/* ERROR MESSAGE: hook.js:608 Error: ❌ Attempted to access a server-side environment variable on the client */
