import { InternalServerError } from '@/lib';
import type { NextRequest } from 'next/server';

type GetCookieConsentReturn =
  | {
      status: 'success' | 'no-content';
      message:
        | 'Hittade ingen samtyckes cookie'
        | 'Hittade en samtyckes cookie med värdet sant'
        | 'Hittade en samtyckes cookie med värdet falskt';
      isConsentGiven?: boolean;
    }
  | never;

export const getCookieConsent = (req: NextRequest): GetCookieConsentReturn => {
  try {
    const consetCookie = req.cookies.get('cc');

    if (!consetCookie || !consetCookie.value) {
      return {
        status: 'no-content',
        message: 'Hittade ingen samtyckes cookie',
      };
    } else if (consetCookie.value === 'false') {
      return {
        status: 'success',
        message: 'Hittade en samtyckes cookie med värdet falskt',
        isConsentGiven: false,
      };
    }

    return {
      status: 'success',
      message: 'Hittade en samtyckes cookie med värdet sant',
      isConsentGiven: true,
    };
  } catch {
    throw new InternalServerError();
  }
};
