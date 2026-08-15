export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const adminEmail = (process.env.ADMIN_EMAIL || 'admin@v2.ltd').toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (email.toLowerCase() === adminEmail && password === adminPassword) {
    const cookie = 'auth_session=admin; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000';
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json({ ok: true, redirect: '/' });
  }

  return res.status(401).json({ error: 'Wrong email or password.' });
}