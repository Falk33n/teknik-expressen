import type { CtxProps } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { genSalt, hash } from 'bcryptjs';
import { clsx, type ClassValue } from 'clsx';
import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getCookieConsent = (ctx: CtxProps) => {
  const consetCookie = ctx.req.cookies.get('cc');

  if (!consetCookie || !consetCookie.value) {
    return {
      hasAccepted: null,
      message: 'Consent has never been given by the user',
    };
  } else if (consetCookie.value === 'true') {
    return {
      hasAccepted: true,
      message: 'Consent has been accepted by the user',
    };
  } else {
    return {
      hasAccepted: false,
      message: 'Consent has not been accepted by the user',
    };
  }
};

export const generateSaltHash = async (password: string) => {
  try {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    return { salt, hashedPassword };
  } catch {
    throw new TRPCError({
      message: 'Something went wrong',
      code: 'INTERNAL_SERVER_ERROR',
    });
  }
};

export const verifyPassword = async (
  password: string,
  storedSalt: string,
  storedHashedPassword: string,
) => {
  try {
    const hashedPassword = await hash(password, storedSalt);

    if (hashedPassword === storedHashedPassword) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

export const getSession = async (
  req: NextRequest,
  usedInClient: boolean = true,
) => {
  const authCookie = req.cookies.get('ac');

  const handleUnauthenticated = () =>
    usedInClient
      ? { message: 'User is not authenticated', isAuthenticated: false }
      : (() => {
          throw new TRPCError({
            message: 'User is not authenticated',
            code: 'UNAUTHORIZED',
          });
        })();

  if (!authCookie || !authCookie.value) {
    return handleUnauthenticated();
  }

  const key = new TextEncoder().encode(process.env.SECRET_JWT_KEY);

  try {
    const { payload } = await jwtVerify(authCookie.value, key);

    if (typeof payload !== 'object' || !('userId' in payload)) {
      return handleUnauthenticated();
    }

    return {
      message: 'Successfully authenticated user',
      isAuthenticated: true,
    };
  } catch {
    return handleUnauthenticated();
  }
};

export const omitKeys = <T extends object, K extends keyof T>(
  obj: T,
  keys: K | K[],
): Omit<T, K> => {
  const result = { ...obj };
  const keysArray = Array.isArray(keys) ? keys : [keys];

  for (const key of keysArray) {
    delete result[key];
  }

  return result;
};

export const pickKeys = <T extends object, K extends keyof T>(
  obj: T,
  keys: K | K[],
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  const keysArray = Array.isArray(keys) ? keys : [keys];

  for (const key of keysArray) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
};

export const handleServerError = () => {
  throw new TRPCError({
    message: 'Something went wrong',
    code: 'INTERNAL_SERVER_ERROR',
  });
};
