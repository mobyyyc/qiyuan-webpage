# Qiyuan Cai — Personal Website

This repository contains the source for my personal website. It uses a Next.js frontend (App Router) for the public site and a minimal ASP.NET Core Web API backend that provides a small JSON API used by the frontend (projects/status).

This README explains how the repo is organized, how to run the site locally, and helpful notes for deployment and troubleshooting.

## Table of contents
- What this repo contains
- Getting started (local development)
- Project structure
- Frontend (Next.js)
- Backend (ASP.NET Core)
- Environment and configuration
- Deploying
- CI / development tips
- Troubleshooting
- License & credits

---

## What this repo contains

- `src/` — Next.js app (App Router) with React components, styles, and pages.
- `public/` — static assets used by the frontend.
- `server/` — minimal ASP.NET Core Web API project (provides `/api/projects` and `/api/status`).
- `.gitignore`, `package.json`, `tsconfig.json`, Next.js config files, etc.

This repo is intentionally small: the backend is only used to serve a tiny API for the frontend and is implemented with an in-memory data store to keep things simple for a personal website.

## Getting started (local development)

Requirements
- Node.js (18+) and npm or pnpm/yarn for the frontend.
- .NET SDK 8.0+ for the backend.

Run the backend

```bash
cd server
dotnet run
```

By default the backend listens on `http://localhost:5041`. It exposes:
- `GET /api/projects` — returns a small JSON array of projects
- `GET /api/status` — simple health endpoint

Run the frontend

```bash
# from repo root
npm install
npm run dev
```

The frontend runs on `http://localhost:3000` by default and fetches the projects from the backend. You can override the backend URL by setting the environment variable `NEXT_PUBLIC_API_URL`.

## Project structure

- `src/app/` — Next.js App Router entry. `src/app/page.tsx` is the home page and contains the Projects UI.
- `server/` — ASP.NET Core Web API:
  - `Program.cs` — app startup, DI and CORS configuration.
  - `Controllers/` — API controllers (`ProjectsController`, `StatusController`).
  - `Services/` — a tiny `ProjectService` that returns an in-memory list of projects.
  - `Models/ProjectDto.cs` — project DTO.

## Frontend (Next.js)

- Built with the App Router and TypeScript.
- Client-side component fetches project data from the backend at runtime using `fetch()`.
- To change the API URL in development, set `NEXT_PUBLIC_API_URL`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5041 npm run dev
```

## Backend (ASP.NET Core)

- Minimal Web API with in-memory sample data.
- CORS is configured to allow the frontend origin (`http://localhost:3000`) by default. Change `server/appsettings.json` to update allowed origins or Kestrel endpoints.

If you edit code in `server/`, rebuild and run using the .NET SDK:

```bash
cd server
dotnet build
dotnet run
```

## Environment and configuration

- Frontend reads `NEXT_PUBLIC_API_URL` for the backend base URL.
- Backend reads `Frontend:Origin` from `server/appsettings.json` to configure the CORS origin.

## Deploying

Option A — Deploy frontend and backend separately
- Frontend: Deploy the Next.js app to Vercel, Netlify, or a static host (if you prerender everything). Configure `NEXT_PUBLIC_API_URL` in the host to point to your backend.
- Backend: Deploy the ASP.NET Core Web API to Azure App Service, Azure Container Instances, or any container host.

Option B — Deploy frontend to Vercel and leave backend on a small cloud VM or Azure App Service (recommended if you want Vercel's CDN and easy CI).

Option C — Build backend as a Docker image (add a simple `Dockerfile` to `server/`) and deploy both with a container service.

## CI / development tips

- If you use VS Code: add the `.sln` to the workspace or open the `server/` folder so the C# extension (OmniSharp) can find the project and dependencies. You may need to set `omnisharp.useModernNet` to `true` in VS Code settings.
- Git: Add the usual `.gitignore` entries for Node and .NET. (This repo includes both in `.gitignore`.)

## Troubleshooting

- `gpg` / signed commits: If git complains about `gpg` when committing with `-S`, install GnuPG (Homebrew or GPG Suite) or commit without signing: `git -c commit.gpgsign=false commit -m "msg"`.
- Editor shows missing types (eg. `Microsoft.AspNetCore`): ensure OmniSharp is running, the `.sln` is present, and `omnisharp.useModernNet` is enabled if you use .NET 6/7/8.
- CORS errors when loading the frontend: ensure the backend CORS origin matches the frontend origin (including http/https and port).

## License & credits

This is my personal website. The repository is provided as-is. If you reuse code from this repo, please keep attribution and respect any licensing of small libraries used.

---

If you want I can also:
- Add a `Dockerfile` for the `server/` project.
- Add a small CI workflow to build/test and optionally deploy the frontend/backend.
- Add instructions for generating/verifying signed commits on macOS.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
