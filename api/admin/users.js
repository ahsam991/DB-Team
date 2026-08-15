import { createClient } from '@supabase/supabase-js';
import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || '')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

function createSessionClient(req, res) {
  const cookiesToSet = [];
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(req.headers.cookie ?? '');
        },
        setAll(cookies) {
          cookies.forEach(({ name, value, options }) =>
            cookiesToSet.push(serializeCookieHeader(name, value, options)),
          );
        },
      },
    },
  );
}

async function isAdmin(req, res) {
  const supabase = createSessionClient(req, res);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user && ADMIN_EMAILS.includes(user.email?.toLowerCase()) ? user : null;
}

function adminClient() {
  return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function readBody(req) {
  return new Promise((resolve) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(req, res) {
  const user = await isAdmin(req, res);
  if (!user) {
    res.status(403).json({ error: 'Forbidden: admin access required' });
    return;
  }

  const supabase = adminClient();

  if (req.method === 'GET') {
    const { data, error } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json(
      (data.users || []).map((u) => ({
        id: u.id,
        email: u.email,
        createdAt: u.created_at,
        lastSignIn: u.last_sign_in_at,
        confirmed: !!u.email_confirmed_at,
      })),
    );
    return;
  }

  if (req.method === 'POST') {
    const { email, password } = await readBody(req);
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }
    res.status(201).json({ id: data.user.id, email: data.user.email });
    return;
  }

  if (req.method === 'DELETE') {
    const { id } = await readBody(req);
    if (!id) {
      res.status(400).json({ error: 'User id is required' });
      return;
    }
    const { error } = await supabase.auth.admin.deleteUser(id);
    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }
    res.status(200).json({ ok: true });
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}