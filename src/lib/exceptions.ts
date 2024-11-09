import { TRPCError } from '@trpc/server';

export class ConflictError extends TRPCError {
  constructor(message: string) {
    super({
      code: 'CONFLICT',
      message,
    });
    this.name = 'ConflictError';
  }
}
