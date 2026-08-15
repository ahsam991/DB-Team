# কাজকর্ম শিখ — AI Utilization Hub (Database Team)

> **Main hub** for Claude-এর ২৫টি সেটিংস ও অভ্যাস এবং Database Team-এর Best-Tool-for-Task AI Ecosystem। সব গাইড ও ডকুমেন্ট এক dashboard-এ connected।

A static, deployable project (Vercel / Netlify ready) that packages two guides into a polished landing page, two visual HTML guides, and combined markdown documentation.

---

## 📚 What's Inside

### Root
| File | Type | Description |
|------|------|-------------|
| [`index.html`](index.html) | Dashboard / Landing | **Main hub** — Command Center, Knowledge Map, 19-tool AI Ecosystem, ECRM Knowledge Base, Workflow Engine, Document Library, Team, Author, Video |
| [`README.md`](README.md) | Docs | This file |

### `files/` — Content (guides, docs, images)
| File | Type | Description |
|------|------|-------------|
| [`files/claude-guide.html`](files/claude-guide.html) | Visual Guide | **Part 1** — Page1.md-এর সম্পূর্ণ content স্টাইলিশ, interactive HTML-এ |
| [`files/db-guide.html`](files/db-guide.html) | Visual Guide | **Part 2** — Page2.md-এর সম্পূর্ণ content স্টাইলিশ HTML-এ (১৯টি tool, ৬টি workflow) |
| [`files/ecrm-tutorial.html`](files/ecrm-tutorial.html) | Visual Guide | **ECRM** — business & logic visual guide (from `ecrm_tutorial.md`) |
| [`files/tutorial.html`](files/tutorial.html) | Tutorial & Tasks | **ECRM Tutorial** — business logic + ৫টি Analytics Problem Solving task, Practice Tasks, Reports |
| [`files/eCRM_Complete_Documentation.html`](files/eCRM_Complete_Documentation.html) | Documentation | **ECRM Complete Database Reference** — ১৩১ table, ৫ views, ১৪ modules, Knowledge Graph, search |
| [`files/team.html`](files/team.html) | Team Page | Database Team পরিচিতি পেজ |
| [`files/author.html`](files/author.html) | Author Page | Author profile + GitHub + Project Presentation video |
| [`files/memories.html`](files/memories.html) | Memories Gallery | Database Team-এর ছবি ও পোস্ট — LinkedIn embed থেকে caption-সহ auto-fetch (click-to-load) |
| [`files/Page1.md`](files/Page1.md) | Markdown | **Part 1** — Claude ব্যবহারের ২৫টি সেটিংস ও অভ্যাস |
| [`files/Page2.md`](files/Page2.md) | Markdown | **Part 2** — Database Team AI Ecosystem |
| [`files/COMBINED-GUIDE.md`](files/COMBINED-GUIDE.md) | Markdown | Page1 + Page2 একসাথে (৭৫০+ লাইন) |
| [`files/ecrm_tutorial.md`](files/ecrm_tutorial.md) | Markdown | ECRM business & logic সোর্স (মূল `ecrm-tutorial.html`-এর উৎস) |
| [`files/author.md`](files/author.md) | Markdown | Author profile সোর্স (এর HTML রূপ → `files/author.html`) |
| `files/images/` | Assets | Team photos (`ahsam.png`, `Rahat.png`, `sajib.png`, `sohan.png`) |

---

## 🎯 What This Project Covers

### Part 1 — Claude ২৫টি সেটিংস ও অভ্যাস
- **Setup ঠিক করুন** — Claude Desktop, Chat vs Cowork, Projects, Project Instructions, Skills
- **কাজের গতি বাড়ান** — model selector, effort, Extended Thinking, outcome-based prompting
- **Security ও Privacy** — placeholder usage, Incognito Chat, Memory review
- **নিজের বিচারবুদ্ধি** — cross-check, counter-arguments, self-audit
- **Advanced** — Research + ৩টি critical thinking prompt

### Part 2 — Database Team AI Ecosystem
- **১৯টি AI tool** ৬ category-তে ম্যাপ করা: Core, Design, Development, Data & Analytics, Meeting
- **৬টি Recommended Workflow** — query optimization, problem solving, documentation, research, dashboard, visual planning
- **Golden Rules** — production safety, secrets handling, human validation
- **Recommended AI Stack** per work area

---

## 🚀 Quick Start

### Local
```bash
open index.html             # main dashboard hub
open files/claude-guide.html # visual guide
```

### Deploy (Free — Vercel / Netlify)
No build step required — it's a static site.

**Netlify (Drag & Drop)**
1. Go to <https://app.netlify.com/drop>
2. Drag this project folder onto the page
3. Done — live site URL generated

**Vercel (CLI)**
```bash
npm i -g vercel
vercel
# → answer prompts, deploy static files
```

**GitHub + Vercel/Netlify auto-deploy**
1. Push this repo to GitHub
2. In Vercel/Netlify: *New Project → Import from Git* → select `DB-Team`
3. Build command: *none* · Output directory: *root*

---

## 🔐 Authentication (Supabase Auth — required for Vercel)

The entire site is locked behind authentication. A Vercel **Routing Middleware** (`middleware.js`) validates the Supabase session cookie on every request and redirects unauthenticated visitors to `/authentication/login.html`. Without a valid login the site does not work.

### Pages
| Page | URL | Access |
|------|-----|--------|
| Login | `/authentication/login.html` | Public |
| Sign up | `/authentication/signup.html` | Public |
| Admin (manage users) | `/authentication/admin.html` | Admins only |
| Log out | `/authentication/logout.html` | Public |

### Vercel environment variables
Set these in **Vercel → Project → Settings → Environment Variables** (Production + Preview):

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | ✅ | Your Supabase project URL, e.g. `https://hgipkotrchoksdpuotjt.supabase.co` |
| `SUPABASE_ANON_KEY` | ✅ | Public anon key — **Supabase → Project → Settings → API** |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ | Service role key (server-side only, never exposed) for admin user management |
| `ADMIN_EMAILS` | ✅ | Comma-separated emails allowed to access `/authentication/admin.html`, e.g. `admin@example.com,dev@example.com` |

> ⚠️ The service role key bypasses RLS — keep it server-side only (used in `api/admin/users.js`, never in the browser).

### How it works
1. `middleware.js` runs on every request (except `/api/*`, login/signup and their assets). It reads the Supabase session cookie, calls `getUser()`, and redirects to `/login?next=<path>` when there is no valid session. Admin routes also require the email to be in `ADMIN_EMAILS`.
2. `authentication/login.html` signs in with email + password and stores the session in cookies.
3. `authentication/signup.html` creates an account (email + password). Existing admins can then approve/delete users from the Admin panel.
4. `api/admin/users.js` (service role) lists, creates and deletes users — admin-only.
5. `api/config.js` serves the public `SUPABASE_URL` + `SUPABASE_ANON_KEY` to the browser.

### Local test
Create a `.env.local` with the four variables above, then:
```bash
npx vercel dev
```
Open the printed local URL — you'll be redirected to the login page.

---

## 🛠️ Development Notes

This project was built with opencode and two custom skills:
- **`claude-bangla-guide`** — Bengali output style (Technical terms English, explanation Bangla)
- **`frontend-design`** — distinctive, production-grade frontend aesthetics

### Knowledge Graph (graphify)
The repo includes a [graphify](https://github.com/safishamsi/graphify) integration (`.opencode/` + `AGENTS.md`). Rebuild after code changes:

```bash
python3 -m venv .venv
.venv/bin/pip install graphifyy
.venv/bin/graphify update .
```

---

## 📄 License

Built for internal team use — Database Team AI ecosystem documentation.
