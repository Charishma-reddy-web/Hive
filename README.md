# nurturehive

Minimal split setup for:

- `web/`: Next.js frontend
- `cms/`: Payload CMS on Next.js

## Current state

- `web/` is now a standardized Next.js App Router starter
- `cms/` is a clean Payload app with only `users` and `media`
- there is no frontend-to-CMS integration yet
- Payload uses local uploads in development and can use S3 in cloud when the S3 env vars are set

## Frontend

`web/` is Next.js App Router with a server-first structure.

Standardized frontend structure:

```txt
web/
  src/
    app/
      (site)/
      robots.ts
      sitemap.ts
    components/
      layout/
      sections/
      ui/
    lib/
      cms/
      seo/
    types/
```

Team rules:

- use server components by default
- add `"use client"` only for interactive UI
- keep CMS fetching inside `src/lib/cms`
- keep metadata logic inside `src/lib/seo`

Run locally:

```bash
cp web/.env.example web/.env.local
npm run dev:web
```

Frontend env vars:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CMS_URL=http://localhost:3001
CMS_URL=http://localhost:3001
```

## CMS

Run locally:

```bash
cp cms/.env.example cms/.env.local
docker compose up -d
npm run dev:cms
```

Local CMS URLs:

- `http://localhost:3001`
- `http://localhost:3001/admin`

Required CMS env vars:

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/nurturehive
PAYLOAD_SECRET=replace-this-with-a-long-random-string
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
CORS_ORIGINS=http://localhost:3001,http://127.0.0.1:3001
CSRF_ORIGINS=http://localhost:3001,http://127.0.0.1:3001
PAYLOAD_DB_PUSH=true
S3_BUCKET=
S3_REGION=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
```

## Local setup

From the repo root:

```bash
cp web/.env.example web/.env.local
cp cms/.env.example cms/.env.local
docker compose up -d
npm install
npm run dev
```

This starts:

- frontend at `http://localhost:3000`
- cms at `http://localhost:3001`
- payload admin at `http://localhost:3001/admin`

## App Runner

Deploy `cms/` directly with the Node runtime.

- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Port: `3000`
- Health check: `/api/health`
