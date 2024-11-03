import type { CtxProps } from '@/types';
import { TRPCError } from '@trpc/server';
import * as bcrypt from 'bcrypt';
import { clsx, type ClassValue } from 'clsx';
import * as jwt from 'jsonwebtoken';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { twMerge } from 'tailwind-merge';

/**
 * Takes an array of tailwind-css strings and merges them into one single
 * string, ordered by its initial order.
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

/**
 * Retrieves the consent cookie and returns the value as a
 * boolean OR undefined
 */
export const getCookieConsent = async (ctx: CtxProps) => {
  const consetCookie: RequestCookie | undefined = ctx.req.cookies.get('cc'); // 'cc' = cookie consent
  if (!consetCookie) {
    throw new TRPCError({
      message: 'Consent cookie not found',
      code: 'NOT_FOUND',
    });
  } else if (consetCookie.value === 'true') {
    return true;
  } else {
    return false;
  }
};

/**
 * generates a secure and encrypted password through bcrypt
 */
export const generateSaltHash = async (password: string) => {
  const salt: string = await bcrypt.genSalt(10);
  const hashedPassword: string = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
};

/**
 * generates a hashed password from the given salt and password,
 * and compares the stored hashed password with the created hashed password.
 */
export const verifyPassword = async (
  password: string,
  storedSalt: string,
  storedHashedPassword: string
) => {
  const hashedPassword: string = await bcrypt.hash(password, storedSalt);
  if (hashedPassword === storedHashedPassword) {
    return true;
  } else {
    return false;
  }
};

/**
 * Retrieves the authentication cookie and checks if its valid
 */
export const getAuth = async (ctx: CtxProps) => {
  const key: string | undefined = process.env.SECRET_JWT_KEY;
  if (!key) {
    throw new TRPCError({
      message: 'Something went wrong',
      code: 'INTERNAL_SERVER_ERROR',
    });
  }

  const authCookie: RequestCookie | undefined = ctx.req.cookies.get('ac'); // 'ac' = authentication cookie
  if (!authCookie || !authCookie.value) {
    throw new TRPCError({
      message: 'Authentication cookie not found or is empty',
      code: 'UNAUTHORIZED',
    });
  }

  // attempt to verify the JWT token
  const decoded: string | jwt.JwtPayload = jwt.verify(authCookie.value, key);
  if (typeof decoded === 'object' && decoded !== null && 'userId' in decoded) {
    return true;
  } else {
    throw new TRPCError({
      message: 'Authentication cookie is invalid',
      code: 'UNAUTHORIZED',
    });
  }
};
