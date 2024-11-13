export * from './root';
export * from './routers';

// can't export from trpc.ts
/* ERROR MESSAGE: hook.js:608 Error: ❌ Attempted to access a server-side environment variable on the client */
