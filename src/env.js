import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * @type {Readonly<{
 *   DATABASE_URL: string;
 *   NODE_ENV: "development" | "test" | "production"
 * }>}
 */
export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.SECRET_DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
