import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * @constant {Readonly<{ DATABASE_URL: string; NODE_ENV: "development" | "test" | "production" }>}
 * @description
 * A readonly environment configuration object for server-side settings, validated and enforced using Zod schemas.
 *
 * The `env` object is constructed using `createEnv` from `@t3-oss/env-nextjs`, which ensures that required environment variables
 * are present and correctly formatted. This constant provides type-safe access to critical environment variables such as
 * `DATABASE_URL` and `NODE_ENV`, promoting safer and more predictable runtime behavior.
 *
 * ### Fields
 * - **DATABASE_URL** (`string`): The URL for the database connection. Validated as a properly formatted URL.
 * - **NODE_ENV** (`"development" | "test" | "production"`): Indicates the runtime environment (e.g., development, test, production). Defaults to `"development"` if not explicitly set.
 *
 * ### Options
 * - **runtimeEnv**: Provides mappings to actual environment variables, using `process.env` values.
 * - **skipValidation** (`boolean`): If `true`, validation is skipped. Controlled by the `SKIP_ENV_VALIDATION` environment variable.
 * - **emptyStringAsUndefined** (`boolean`): Treats empty strings as `undefined`, which helps in dealing with optional environment variables.
 *
 * @example
 * // Access the database URL in a type-safe manner
 * const dbUrl = env.DATABASE_URL;
 *
 * @example
 * // Check the environment mode
 * if (env.NODE_ENV === 'production') {
 *   // Production-specific logic here
 * }
 *
 * @see {@link https://github.com/t3-oss/env-nextjs} for documentation on `createEnv`.
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
  emptyStringAsUndefined: !!process.env.EMPTY_ENV_STRING_UNDEFINED,
});
