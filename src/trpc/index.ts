// index.ts allows a more clean way to import packages
export * from './query-client';
export * from './react';
// can't import server.ts since it is strict server-only (will give error if you try to)
