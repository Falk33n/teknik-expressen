export { createQueryClient } from './query-client';
export {
  TRPCReactProvider,
  api,
  getBaseUrl,
  type RouterInputs,
  type RouterOutputs,
} from './react';
// can't import from server.ts since it is strict server-only (will give error if you try to)
