import type { CtxProps } from '@/types';
import { TRPCError } from '@trpc/server';
import * as bcrypt from 'bcrypt';
import { clsx, type ClassValue } from 'clsx';
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
