# nurturehive

Frontend marketing site with a Payload CMS backend.

## Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS
- CMS: Payload (Next.js)
- Database: PostgreSQL

## Repo structure

```txt
/web   frontend app
/cms   Payload CMS
```

## Local setup (Frontend + Payload + DB)

Requirements:

- Node.js 20+
- npm
- Docker Desktop

Install dependencies:

```bash
npm install
```

Create env files:

```bash
cp cms/.env.example cms/.env
cp web/.env.example web/.env
```

`cms/.env` uses PostgreSQL via:

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/nurturehive
PAYLOAD_SECRET=replace-this-with-a-long-random-string
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
CORS_ORIGINS=http://localhost:3001,http://127.0.0.1:3001,http://localhost:5173,http://127.0.0.1:5173
CSRF_ORIGINS=http://localhost:3001,http://127.0.0.1:3001,http://localhost:5173,http://127.0.0.1:5173
PAYLOAD_DB_PUSH=true
```

`web/.env` should point to local Payload:

```env
VITE_CMS_URL=http://localhost:3001
```

Start local PostgreSQL:

```bash
docker compose up -d
```

Run frontend + CMS:

```bash
npm run dev
```

Local URLs:

- Frontend: `http://localhost:5173`
- Payload CMS: `http://localhost:3001`
- Payload Admin: `http://localhost:3001/admin`

Cloud env mapping:

- `sandbox`/dev: set `PAYLOAD_PUBLIC_SERVER_URL` and `VITE_CMS_URL` to your dev Payload URL
- `staging`: set both to staging Payload URL
- `production`: set both to production Payload URL
- In cloud, set `PAYLOAD_DB_PUSH=false` unless you explicitly want schema push

First local run:

1. Open Payload admin and create the first admin user
2. Create content in Payload (`Pages`, `Media`, etc.)
3. Refresh frontend to see published content

Common reset (if DB/schema gets out of sync):

```bash
docker compose down -v
docker compose up -d
npm run dev
```

## Daily git command

Sync your branch safely (fast-forward only):

```bash
npm run sync
```

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
