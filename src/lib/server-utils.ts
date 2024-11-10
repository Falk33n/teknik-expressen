import { InternalServerError, UnauthorizedError } from '@/lib';
import { genSalt, hash } from 'bcryptjs';
import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';

export const getSecretJwtKey = () => {
  const secretKey = process.env.SECRET_JWT_KEY;
  if (!secretKey) throw new InternalServerError();
  const jwtKey = new TextEncoder().encode(secretKey);
  return { jwtKey, secretKey };
};

type GetSessionReturnType =
  | Promise<{
      status: 200 | 401;
      message: string;
      isAuthenticated: boolean;
    }>
  | never;

export const getSession = async (
  req: NextRequest,
  usedInClient: boolean = true,
): GetSessionReturnType => {
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
    if (usedInClient && error instanceof UnauthorizedError) {
      return {
        status: 401,
        message: 'Misslyckades att verifiera sessionen',
        isAuthenticated: false,
      };
    } else if (
      !(error instanceof InternalServerError) &&
      !(error instanceof UnauthorizedError)
    ) {
      throw new InternalServerError();
    }

    throw error;
  }
};

type GetCookieConsentReturnType = {
  status: 200 | 204;
  message: string;
  isConsentGiven: boolean | null;
};

export const getCookieConsent = (
  req: NextRequest,
): GetCookieConsentReturnType => {
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
