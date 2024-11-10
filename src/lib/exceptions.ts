import { TRPCError } from '@trpc/server';

export class ConflictError extends TRPCError {
  public statusCode: number;

  constructor(message: string) {
    super({
      code: 'CONFLICT',
      message,
    });
    this.name = 'ConflictError';
    this.statusCode = 409;
  }
}

export class UnauthorizedError extends TRPCError {
  public statusCode: number;

  constructor(message: string) {
    super({
      code: 'UNAUTHORIZED',
      message,
    });
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
  }
}

export class InternalServerError extends TRPCError {
  public statusCode: number;

  constructor(message: string = 'Något gick fel') {
    super({
      code: 'INTERNAL_SERVER_ERROR',
      message,
    });
    this.name = 'InternalServerError';
    this.statusCode = 500;
  }
}
