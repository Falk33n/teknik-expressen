'use server';

import { InternalServerError } from '@/lib/utils';
import { cookies } from 'next/headers';

type GetCookieConsentReturn =
  | Promise<{
      status: 'success' | 'no-content';
      message:
        | 'Hittade ingen samtyckes cookie'
        | 'Hittade en samtyckes cookie med värdet sant'
        | 'Hittade en samtyckes cookie med värdet falskt';
      hasConsented?: boolean;
    }>
  | never;

export const getCookieConsent = async (): GetCookieConsentReturn => {
  try {
    const cookieStore = await cookies();
    const consetCookie = cookieStore.get('cc');

    if (!consetCookie || !consetCookie.value) {
      return {
        status: 'no-content',
        message: 'Hittade ingen samtyckes cookie',
      };
    } else if (consetCookie.value === 'false') {
      return {
        status: 'success',
        message: 'Hittade en samtyckes cookie med värdet falskt',
        hasConsented: false,
      };
    }

    return {
      status: 'success',
      message: 'Hittade en samtyckes cookie med värdet sant',
      hasConsented: true,
    };
  } catch {
    throw new InternalServerError();
  }
};
