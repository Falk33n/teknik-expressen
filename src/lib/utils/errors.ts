import { TRPCError } from '@trpc/server';
import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/unstable-core-do-not-import';

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

export const parseTRPCErrorCode = (code: TRPC_ERROR_CODE_KEY) => {
  switch (code) {
    case 'BAD_GATEWAY':
      return 502;
    case 'CLIENT_CLOSED_REQUEST':
      return 499;
    case 'BAD_REQUEST':
      return 400;
    case 'CONFLICT':
      return 409;
    case 'FORBIDDEN':
      return 403;
    case 'GATEWAY_TIMEOUT':
      return 504;
    case 'METHOD_NOT_SUPPORTED':
      return 405;
    case 'NOT_FOUND':
      return 404;
    case 'NOT_IMPLEMENTED':
      return 501;
    case 'PARSE_ERROR':
      return 422;
    case 'PAYLOAD_TOO_LARGE':
      return 413;
    case 'PRECONDITION_FAILED':
      return 412;
    case 'SERVICE_UNAVAILABLE':
      return 503;
    case 'TIMEOUT':
      return 408;
    case 'TOO_MANY_REQUESTS':
      return 429;
    case 'UNAUTHORIZED':
      return 401;
    case 'UNPROCESSABLE_CONTENT':
      return 422;
    case 'UNSUPPORTED_MEDIA_TYPE':
      return 415;
    default:
      return 500;
  }
};
