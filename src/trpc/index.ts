export * from './query-client';

// you CAN import from Client.tsx but I choose not to.
// since it will make the imports easier to understand directly.

// **IMPORTANT**
// DO NOT blend exports from server.ts with the other exports.
// since its strict server only and will cause a error to be thrown.
