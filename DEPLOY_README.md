# StitchOS — Deploy Guide

This repo builds a Vite front-end to `dist/public` and bundles an Express server to `dist/index.js`.
For Vercel, we deploy the **front-end only** (recommended), and host the Node server separately (Railway/Fly/Render).

## Quick Deploy to Vercel (Frontend Only)

1. **Add scripts to `package.json`:**

```json
{
  "scripts": {
    "build:client": "vite build",
    "preview:client": "npx serve dist/public"
  }
}
```

2. **Commit `vercel.json`** (already included here):

```json
{
  "version": 2,
  "buildCommand": "npm run build:client",
  "outputDirectory": "dist/public",
  "framework": "vite"
}
```

3. **Push to GitHub** and import the repo at https://vercel.com/new
   - Framework Preset: **Vite**
   - Build Command: **npm run build:client**
   - Output Directory: **dist/public**

4. **Custom Domain**: add `stitchos.app` in Vercel → Domains.

## Backend Options

- **Railway.app** / **Render.com** / **Fly.io** to run the Node server in `dist/index.js`.
- Set `PORT` env var (e.g., `PORT=8080`) and point your API URL in the frontend (use env var `VITE_API_BASE`).

### Build server for hosted platforms
```
npm run build
# starts on PORT from env
node dist/index.js
```

## Environment Variables

- `VITE_API_BASE` — front-end base URL for API requests (e.g., `https://api.stitchos.app`).
- `DATABASE_URL` (if used) — set on your backend platform.
- `NODE_ENV` — `production` on hosted environments.

## Local Dev

```
npm install
npm run dev
```

## Notes

- The Vite client builds to `dist/public` (see `vite.config.ts`).
- The Express server serves static files from `dist/public` when run on a VM/host.
- On Vercel, we only deploy static front-end for best compatibility.
