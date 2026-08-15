(function () {
  'use strict';

  var CONFIG = null;

  async function getConfig() {
    if (CONFIG) return CONFIG;
    const res = await fetch('/api/config', { cache: 'no-store' });
    CONFIG = await res.json();
    return CONFIG;
  }

  function getCookie(name) {
    const match = document.cookie.match('(?:^|;\\s*)' + name + '=([^;]*)');
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value, maxAge) {
    document.cookie = name + '=' + encodeURIComponent(value) + '; Path=/; Max-Age=' + maxAge + '; SameSite=Lax';
  }

  function deleteCookie(name) {
    document.cookie = name + '=; Path=/; Max-Age=0; SameSite=Lax';
  }

  async function createSupabaseClient() {
    const cfg = await getConfig();
    if (!cfg.supabaseUrl || !cfg.supabaseAnonKey) {
      throw new Error('Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in Vercel.');
    }
    return window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storage: {
          getItem: (key) => getCookie(key),
          setItem: (key, value) => setCookie(key, value, 60 * 60 * 24 * 30),
          removeItem: (key) => deleteCookie(key),
        },
      },
    });
  }

  function getNext() {
    const params = new URLSearchParams(window.location.search);
    const next = params.get('next');
    if (next && next.startsWith('/')) return next;
    return '/';
  }

  function redirectAfterAuth() {
    const next = getNext();
    if (next === '/login' || next === '/signup') {
      window.location.href = '/';
    } else {
      window.location.href = next;
    }
  }

  function showError(form, message) {
    let el = form.querySelector('.form-error');
    if (!el) {
      el = document.createElement('div');
      el.className = 'form-error';
      form.prepend(el);
    }
    el.textContent = message;
  }

  function clearError(form) {
    const el = form.querySelector('.form-error');
    if (el) el.remove();
  }

  async function handleAuthStateChange(supabase, loggedIn, onLoggedIn) {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'INITIAL_SESSION') {
        if (loggedIn.current) return;
        loggedIn.current = true;
        onLoggedIn && onLoggedIn();
      }
    });
  }

  window.AuthUtils = {
    getConfig: getConfig,
    createSupabaseClient: createSupabaseClient,
    getNext: getNext,
    redirectAfterAuth: redirectAfterAuth,
    showError: showError,
    clearError: clearError,
    handleAuthStateChange: handleAuthStateChange,
  };
})();