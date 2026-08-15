import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';
import { next } from '@vercel/functions';

export const config = {
  runtime: 'nodejs',
  matcher: ['/((?!api|authentication/login|authentication/signup|authentication/logout|authentication/supabase\\.js|authentication/styles\\.css|authentication/auth\\.js|authentication/logo\\.png|authentication/favicon\\.png).*)'],
};

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

const PUBLIC_PATHS = new Set([
  '/login',
  '/login.html',
  '/signup',
  '/signup.html',
  '/authentication/login.html',
  '/authentication/signup.html',
  '/authentication/logout.html',
  '/authentication/supabase.js',
  '/authentication/styles.css',
  '/authentication/auth.js',
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

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (PUBLIC_PATHS.has(pathname) || pathname.startsWith('/api/')) {
    return next();
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    return Response.redirect(
      new URL('/authentication/login.html?next=' + encodeURIComponent(pathname), request.url),
      302,
    );
  }

  const cookiesToSet = [];

  const supabase = createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get('cookie') ?? '');
        },
        setAll(cookies) {
          cookies.forEach(({ name, value, options }) =>
            cookiesToSet.push(serializeCookieHeader(name, value, options)),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return Response.redirect(
      new URL('/authentication/login.html?next=' + encodeURIComponent(pathname), request.url),
      302,
    );
  }

  if (isAdminPath(pathname) && !ADMIN_EMAILS.includes(user.email?.toLowerCase())) {
    return Response.redirect(new URL('/', request.url), 302);
  }

  const headers = new Headers();
  cookiesToSet.forEach((cookie) => headers.append('Set-Cookie', cookie));

  return next({ request: { headers: request.headers }, headers });
}