# কাজকর্ম শিখ — AI Utilization Hub (Database Team)

> **Main hub** for Claude-এর ২৫টি সেটিংস ও অভ্যাস এবং Database Team-এর Best-Tool-for-Task AI Ecosystem। সব গাইড ও ডকুমেন্ট এক dashboard-এ connected।

A static, deployable project (Vercel / Netlify ready) that packages two guides into a polished landing page, two visual HTML guides, and combined markdown documentation.

---

## 📚 What's Inside

| File | Type | Description |
|------|------|-------------|
| [`index.html`](index.html) | Dashboard / Landing | **Main hub** — document hub, 19-tool AI ecosystem dashboard with category filter, workflows, golden rules |
| [`claude-guide.html`](claude-guide.html) | Visual Guide | **Part 1** — Page1.md-এর সম্পূর্ণ content স্টাইলিশ, interactive HTML-এ |
| [`db-guide.html`](db-guide.html) | Visual Guide | **Part 2** — Page2.md-এর সম্পূর্ণ content স্টাইলিশ HTML-এ (১৯টি tool, ৬টি workflow) |
| [`Page1.md`](Page1.md) | Markdown | **Part 1** — Claude ব্যবহারের ২৫টি সেটিংস ও অভ্যাস (Setup, Speed, Security, Judgment, Advanced) |
| [`Page2.md`](Page2.md) | Markdown | **Part 2** — Database Team AI Ecosystem: ১৯টি AI tool, ৬টি workflow, Golden Rules, Recommended Stack |
| [`COMBINED-GUIDE.md`](COMBINED-GUIDE.md) | Markdown | Page1 + Page2 একসাথে (৭৫০+ লাইন) |
| [`README.md`](README.md) | Docs | This file |

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
open index.html        # main dashboard hub
open claude-guide.html # visual guide
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
>>>>>>> 7f4b547 (Add AI Utilization Hub: dashboard landing, Claude 25 settings guide, DB Team AI ecosystem)
