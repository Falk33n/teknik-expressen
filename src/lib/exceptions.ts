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

export class UnauthorizedError extends TRPCError {
  constructor(message: string) {
    super({
      code: 'UNAUTHORIZED',
      message,
    });
    this.name = 'UnauthorizedError';
  }
}

export class InternalServerError extends TRPCError {
  constructor(message: string = 'Något gick fel') {
    super({
      code: 'INTERNAL_SERVER_ERROR',
      message,
    });
    this.name = 'InternalServerError';
  }
}
