import { InternalServerError, UnauthorizedError } from '@/lib';
import { genSalt, hash } from 'bcryptjs';
import { clsx, type ClassValue } from 'clsx';
import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getCookieConsent = (req: NextRequest) => {
  const consetCookie = req.cookies.get('cc');
  if (!consetCookie || !consetCookie.value) return null;
  else if (consetCookie.value === 'true') return true;
  return false;
};

export const generateSaltHash = async (password: string) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return { salt, hashedPassword };
};

export const verifyPassword = async (
  password: string,
  storedSalt: string,
  storedHashedPassword: string,
) => {
  const hashedPassword = await hash(password, storedSalt);
  if (hashedPassword === storedHashedPassword) return true;
  return false;
};

export const getSession = async (
  req: NextRequest,
  usedInClient: boolean = true,
) => {
  const authCookie = req.cookies.get('sc');
  if (!authCookie || !authCookie.value) {
    return handleUnauthorized(
      'Failed to authenticate user',
      usedInClient ? false : true,
    );
  }

  const processedKey = process.env.SECRET_JWT_KEY;
  if (!processedKey) throw new InternalServerError();
  const jwtKey = new TextEncoder().encode(processedKey);

  const { payload } = await jwtVerify(authCookie.value, jwtKey);
  if (typeof payload !== 'object' || !('userId' in payload)) {
    return handleUnauthorized(
      'Failed to authenticate user',
      usedInClient ? false : true,
    );
  }

  return {
    message: 'Successfully authenticated user',
    isAuthenticated: true,
  };
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

export const getSecretJwtKey = () => {
  const secretKey = process.env.SECRET_JWT_KEY;
  if (!secretKey) throw new InternalServerError();
  return { secretKey };
};

type UnauthorizedReturnType =
  | {
      message: string;
      isAuthenticated: boolean;
    }
  | never;

export const handleUnauthorized = (
  message: string,
  shouldThrow: boolean = true,
): UnauthorizedReturnType => {
  if (!shouldThrow) {
    return {
      message,
      isAuthenticated: false,
    };
  }

  throw new UnauthorizedError(message);
};
