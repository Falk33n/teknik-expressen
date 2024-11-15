import { NextResponse, type NextRequest } from 'next/server';

export const handleProtectedRouteMiddleware = (
  req: NextRequest,
  isAuthenticated: boolean,
) => {
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
