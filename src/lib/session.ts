import { InternalServerError, UnauthorizedError } from '@/lib';
import { hash } from 'bcryptjs';
import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';

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
