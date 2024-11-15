import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SECRET_DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    SECRET_JWT_KEY: z.string(),
  },
  runtimeEnv: {
    SECRET_DATABASE_URL: process.env.SECRET_DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    SECRET_JWT_KEY: process.env.SECRET_JWT_KEY,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: !!process.env.EMPTY_ENV_STRING_UNDEFINED,
});
