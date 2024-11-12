import { TRPCError } from '@trpc/server';
import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/unstable-core-do-not-import';
import { genSalt, hash } from 'bcryptjs';
import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';

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

export const getSecretJwtKey = () => {
  const secretKey = process.env.SECRET_JWT_KEY;
  if (!secretKey) throw new InternalServerError();
  const jwtKey = new TextEncoder().encode(secretKey);
  return { jwtKey, secretKey };
};

type GetSessionReturn =
  | Promise<{
      status: 'success' | 'unauthorized';
      message: 'Kunde inte verifiera sessionen.' | 'Kunde verifiera sessionen.';
    }>
  | never;

export const getSession = async (
  req: NextRequest,
  usedInClient: boolean = true,
): GetSessionReturn => {
  try {
    const authCookie = req.cookies.get('sc');
    if (!authCookie || !authCookie.value) {
      throw new UnauthorizedError('Kunde inte verifiera sessionen');
    }

    const { jwtKey } = getSecretJwtKey();
    const { payload } = await jwtVerify(authCookie.value, jwtKey);
    if (typeof payload !== 'object' || !('userId' in payload)) {
      throw new UnauthorizedError('Kunde inte verifiera sessionen');
    }

    return {
      status: 'success',
      message: 'Kunde verifiera sessionen.',
    };
  } catch (error) {
    if (usedInClient && error instanceof UnauthorizedError) {
      return {
        status: 'unauthorized',
        message: 'Kunde inte verifiera sessionen.',
      };
    } else if (!usedInClient && error instanceof UnauthorizedError) {
      throw error;
    }

    throw new InternalServerError();
  }
};

type GetCookieConsentReturn =
  | {
      status: 'success' | 'no-content';
      message:
        | 'Hittade ingen samtyckes cookie'
        | 'Hittade en samtyckes cookie med värdet sant'
        | 'Hittade en samtyckes cookie med värdet falskt';
      isConsentGiven?: boolean;
    }
  | never;

export const getCookieConsent = (req: NextRequest): GetCookieConsentReturn => {
  try {
    const consetCookie = req.cookies.get('cc');

    if (!consetCookie || !consetCookie.value) {
      return {
        status: 'no-content',
        message: 'Hittade ingen samtyckes cookie',
      };
    } else if (consetCookie.value === 'false') {
      return {
        status: 'success',
        message: 'Hittade en samtyckes cookie med värdet falskt',
        isConsentGiven: false,
      };
    }

    return {
      status: 'success',
      message: 'Hittade en samtyckes cookie med värdet sant',
      isConsentGiven: true,
    };
  } catch {
    throw new InternalServerError();
  }
};

export const generateSaltHash = async (password: string) => {
  try {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return { salt, hashedPassword };
  } catch {
    throw new InternalServerError();
  }
};

export const verifyPassword = async (
  password: string,
  storedSalt: string,
  storedHashedPassword: string,
) => {
  try {
    const hashedPassword = await hash(password, storedSalt);
    if (hashedPassword === storedHashedPassword) return true;
    return false;
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
