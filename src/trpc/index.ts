export * from './query-client';
export * from './react';

// can't import from server.ts
/* ERROR MESSAGE: You're importing a component that needs "next/headers".
 * That only works in a Server Component which is not supported in the pages/ directory.
 * Read more: https://nextjs.org/docs/getting-started/react-essentials#server-components
 */
