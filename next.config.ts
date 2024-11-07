import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    // silenced for now, issue is said to be fixed Next.js v.16+
    silenceDeprecations: ['legacy-js-api'],
  },
  /**
   * Specify your server-side environment variables here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  serverRuntimeConfig: {
    SECRET_DATABASE_URL: process.env.SECRET_DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    SECRET_JWT_KEY: process.env.SECRET_JWT_KEY,
  },
  /**
   * Specify your client-side environment variables here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  publicRuntimeConfig: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },
};
export default nextConfig;
