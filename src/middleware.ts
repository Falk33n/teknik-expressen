import { getSession, handleProtectedRouteMiddleware } from '@/lib/utils';
import type { NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const { status } = await getSession(false);
  const isAuthenticated = status === 'success';
  return handleProtectedRouteMiddleware(req, isAuthenticated);
};

export const config = {
  matcher: ['/account/:path*', '/login/:path*', '/register/:path*'],
};
