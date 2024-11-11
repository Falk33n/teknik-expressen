import { getSession } from '@/lib';
import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const { status } = await getSession(req, false);

  const isAuthenticated = status === 'success';

  switch (req.nextUrl.pathname) {
    case '/register': {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/account', req.url));
      }
      break;
    }
    case '/login': {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/account', req.url));
      }
      break;
    }
    case '/account': {
      if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url));
      }
      break;
    }
    default: {
      return NextResponse.next();
    }
  }
};

export const config = {
  matcher: [
    '/account/:path*',
    '/login/:path*',
    '/register/:path*',
    '/dashboard/:path*',
  ],
};
