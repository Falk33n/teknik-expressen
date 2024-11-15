import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverRuntimeConfig: {
    SECRET_DATABASE_URL: process.env.SECRET_DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    SECRET_JWT_KEY: process.env.SECRET_JWT_KEY,
  },
};
export default nextConfig;
