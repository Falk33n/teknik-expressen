import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

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
