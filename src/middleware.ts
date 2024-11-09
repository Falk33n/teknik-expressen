import { getSession } from '@/lib';
import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const { isAuthenticated } = await getSession(req, false);

  const authPaths = ['/account'];
  // const adminPaths = ['/dashboard'];

  /* if (adminPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!isAuthenticated || !isAdmin) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  } else */
  if (authPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  } else {
    return NextResponse.next();
  }
};

export const config = {
  matcher: ['/account/:path*', '/dashboard/:path*'],
};
