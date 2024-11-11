import { TRPCError } from '@trpc/server';

export class ConflictError extends TRPCError {
  public digest: string;

  constructor(message: string) {
    super({
      code: 'CONFLICT',
      message,
    });
    this.name = 'ConflictError';
    this.digest = '409';
  }
}

export class UnauthorizedError extends TRPCError {
  public digest: string;

  constructor(message: string) {
    super({
      code: 'UNAUTHORIZED',
      message,
    });
    this.name = 'UnauthorizedError';
    this.digest = '401';
  }
}

export class InternalServerError extends TRPCError {
  public digest: string;

  constructor(message: string = 'Något gick fel') {
    super({
      code: 'INTERNAL_SERVER_ERROR',
      message,
    });
    this.name = 'InternalServerError';
    this.digest = '500';
  }
}
