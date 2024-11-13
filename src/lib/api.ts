import { InternalServerError } from '@/lib';
import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/unstable-core-do-not-import';
import { genSalt, hash } from 'bcryptjs';

export const generateSaltHash = async (password: string) => {
  try {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return { salt, hashedPassword };
  } catch {
    throw new InternalServerError();
  }
};

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
