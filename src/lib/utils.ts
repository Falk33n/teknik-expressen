import { InternalServerError, UnauthorizedError } from '@/lib';
import { genSalt, hash } from 'bcryptjs';
import { clsx, type ClassValue } from 'clsx';
import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getCookieConsent = (req: NextRequest) => {
  const consetCookie = req.cookies.get('cc');
  if (!consetCookie || !consetCookie.value) {
    return {
      status: 204,
      message: 'Misslyckades att hitta en samtyckes cookie',
      isConsentGiven: null,
    };
  } else if (consetCookie.value === 'true')
    return {
      status: 200,
      message: 'Lyckades hitta en samtyckes cookie med värdet samtycker',
      isConsentGiven: true,
    };

  return {
    status: 200,
    message: 'Lyckades hitta en samtyckes cookie med värdet samtycker inte',
    isConsentGiven: false,
  };
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

export const getSession = async (
  req: NextRequest,
  usedInClient: boolean = true,
) => {
  try {
    const authCookie = req.cookies.get('sc');
    if (!authCookie || !authCookie.value) {
      throw new UnauthorizedError('Misslyckades att verifiera sessionen');
    }

    const { jwtKey } = getSecretJwtKey();
    const { payload } = await jwtVerify(authCookie.value, jwtKey);
    if (typeof payload !== 'object' || !('userId' in payload)) {
      throw new UnauthorizedError('Misslyckades att verifiera sessionen');
    }

    return {
      status: 200,
      message: 'Lyckades att verifiera sessionen',
      isAuthenticated: true,
    };
  } catch (error) {
    if (usedInClient) {
      return {
        status: 401,
        message: 'Misslyckades att verifiera sessionen',
        isAuthenticated: false,
      };
    } else if (
      (!usedInClient && !(error instanceof UnauthorizedError)) ||
      !(error instanceof InternalServerError)
    ) {
      throw new InternalServerError();
    }

    throw error;
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

export const getSecretJwtKey = () => {
  const secretKey = process.env.SECRET_JWT_KEY;
  if (!secretKey) throw new InternalServerError();
  const jwtKey = new TextEncoder().encode(secretKey);
  return { jwtKey, secretKey };
};
