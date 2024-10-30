import { env } from '@/env';
import { PrismaClient } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';

type PrismaClientType = PrismaClient<
  {
    log: ('query' | 'warn' | 'error')[];
  },
  never,
  DefaultArgs
>;

const createPrismaClient = (): PrismaClientType => {
  return new PrismaClient({
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
