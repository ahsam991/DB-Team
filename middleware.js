import { next } from '@vercel/functions';

export const config = {
  runtime: 'nodejs',
  matcher: ['/((?!api|authentication/login|authentication/signup|authentication/logout|authentication/styles\\.css|authentication/logo\\.png|authentication/favicon\\.png).*)'],
};

const PUBLIC_PATHS = new Set([
  '/login',
  '/login.html',
  '/signup',
  '/signup.html',
  '/authentication/login.html',
  '/authentication/signup.html',
  '/authentication/logout.html',
  '/authentication/styles.css',
  '/authentication/logo.png',
  '/authentication/favicon.png',
  '/favicon.ico',
  '/favicon.png',
]);

function isAdminPath(pathname) {
  return (
    pathname === '/admin' ||
    pathname === '/admin.html' ||
    pathname === '/authentication/admin.html'
  );
}

function getAuthCookie(request) {
  const cookieHeader = request.headers.get('cookie') ?? '';
  const cookies = cookieHeader.split(';').map(c => c.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith('auth_session=')) {
      return cookie.split('=')[1];
    }
  }
  return null;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (PUBLIC_PATHS.has(pathname) || pathname.startsWith('/api/')) {
    return next();
  }

  const session = getAuthCookie(request);

  if (!session) {
    return Response.redirect(
      new URL('/authentication/login.html?next=' + encodeURIComponent(pathname), request.url),
      302,
    );
  }

  if (isAdminPath(pathname) && session !== 'admin') {
    return Response.redirect(new URL('/', request.url), 302);
  }

  return next();
}