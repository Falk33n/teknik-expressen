'use server';

import { InternalServerError, UnauthorizedError } from '@/lib/utils';
import { genSalt, hash } from 'bcryptjs';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export const getSecretJwtKey = async () => {
  const secretKey = process.env.SECRET_JWT_KEY;
  if (!secretKey) throw new InternalServerError();
  const jwtKey = new TextEncoder().encode(secretKey);
  return { jwtKey, secretKey };
};

type GetSessionReturn =
  | Promise<{
      status: 'success' | 'unauthorized';
      message: 'Kunde inte verifiera sessionen.' | 'Kunde verifiera sessionen.';
      userId?: string;
    }>
  | never;

export const getSession = async (
  usedInClient: boolean = true,
): GetSessionReturn => {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('sc');
    if (!sessionCookie || !sessionCookie.value) {
      throw new UnauthorizedError('Kunde inte verifiera sessionen');
    }

    const { jwtKey } = await getSecretJwtKey();
    const { payload } = await jwtVerify(sessionCookie.value, jwtKey);
    if (typeof payload !== 'object' || !('userId' in payload)) {
      throw new UnauthorizedError('Kunde inte verifiera sessionen');
    }

    const userId = payload.userId as string;

    return {
      status: 'success',
      message: 'Kunde verifiera sessionen.',
      userId: userId,
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

export const generateSaltHash = async (password: string) => {
  try {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return { salt, hashedPassword };
  } catch {
    throw new InternalServerError();
  }
};
