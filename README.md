# nurturehive

Public marketing site with a separate Payload CMS.

## Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS
- CMS: Payload 3 on Next.js
- Database: PostgreSQL
- Local database: Docker

## Repo structure

```txt
/web   frontend app
/cms   Payload CMS
```

Frontend structure:

```txt
/web/src
  /api
  /blocks
  /components
  /hooks
  /pages
  /styles
  /types
  /utils
```

## How this project works

- Marketing content is managed in Payload admin.
- Payload stores content in PostgreSQL.
- The frontend fetches page data from Payload REST APIs.
- Page layout is built from Payload blocks, so blocks can be reordered in admin without changing frontend code.

## Local setup

Requirements:

- Node.js 20+
- npm
- Docker Desktop

Start local PostgreSQL:

```bash
docker compose up -d
```

Create env files:

```bash
cp cms/.env.example cms/.env
cp web/.env.example web/.env
```

Install packages:

```bash
npm install
```

Sync your branch with remote (safe fast-forward only):

```bash
npm run sync
```

Start both apps:

```bash
npm run dev
```

Local URLs:

- Frontend: `http://localhost:5173`
- CMS: `http://localhost:3001`
- Payload admin: `http://localhost:3001/admin`

## First run

1. Open `http://localhost:3001/admin`
2. Create the first admin user
3. Create a `Media` item if you want to use images
4. Create a `Pages` item with slug `home`
5. Add blocks to the `layout` field
6. Refresh the frontend

## Payload content model

Current collections:

- `Users`
- `Media`
- `Pages`

`Pages` includes:

- header content
- footer content
- SEO fields
- block-based layout

Current blocks:

- Hero
- Feature Grid
- CTA
- Rich Text

## Frontend notes

- `api` holds fetch logic and endpoint helpers
- `blocks` holds components that map to Payload blocks
- `hooks` holds reusable React logic
- `types` defines the data shapes used by the frontend

## Git workflow rules

Branch naming for day-to-day work:

- `feat/<short-name>` for features
- `fix/<short-name>` for bug fixes
- `chore/<short-name>` for maintenance work

Promotion branches:

- `sandbox`: integration branch for team development
- `staging`: QA/UAT release branch
- `production`: live branch

PR flow:

1. Create a feature branch from `sandbox`
2. Open PR into `sandbox` and get it reviewed
3. No direct pushes or direct merges into `sandbox`, `staging`, or `production`
4. Batch approved changes by opening one PR from `sandbox` to `staging`
5. After staging approval, open PR from `staging` to `production`

Repository settings to enforce:

- Protect `sandbox`, `staging`, and `production`
- Require pull request before merge
- Require at least one approval
- Require status checks to pass

## Git guard rails (current)

Until branch protection is enabled in GitHub plan settings, follow these team rules manually:

1. Do not push directly to `sandbox`, `staging`, or `production`
2. Create work branches from `sandbox` using names like `feat/<name>`, `fix/<name>`, `chore/<name>`
3. Open PRs to `sandbox` for all changes
4. Merge into `staging` only via a release PR from `sandbox`
5. Merge into `production` only via a release PR from `staging`
6. Keep commits small and include clear PR descriptions and testing notes

## Common local reset

If the CMS gets stuck after schema changes during local development:

```bash
docker compose down -v
docker compose up -d
npm run dev
```
