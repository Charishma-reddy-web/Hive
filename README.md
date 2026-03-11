# nurturehive

Frontend marketing site for Nurturehive.

## Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS

## Repo structure

```txt
/web   frontend app
/cms   backend/CMS codebase (optional for local use)
```

## Common local instructions (if needed)

Requirements:

- Node.js 20+
- npm

Install packages:

```bash
npm install
```

Create frontend env file:

```bash
cp web/.env.example web/.env
```

Set API base URL in `web/.env` (example):

```env
VITE_CMS_URL=http://localhost:3001
```

Sync your branch with remote (safe fast-forward only):

```bash
npm run sync
```

Start frontend locally:

```bash
npm run dev:web
```

Local frontend URL:

- `http://localhost:5173`

## Git workflow rules

Branch naming for day-to-day work:

- `feat/<short-name>` for features
- `fix/<short-name>` for bug fixes
- `chore/<short-name>` for maintenance work
- `docs/<short-name>` for documentation updates

Promotion branches:

- `sandbox`: integration branch for team development
- `staging`: QA/UAT release branch
- `production`: live branch

PR flow:

1. Create a work branch from `sandbox`
2. Open PR into `sandbox` and get it reviewed
3. Do not merge directly into `staging` or `production`
4. Batch approved changes by opening one PR from `sandbox` to `staging`
5. After staging approval, open PR from `staging` to `production`
