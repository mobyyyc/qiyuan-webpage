# Qiyuan Cai — Personal Website

This repository contains the source for my personal website. The site is built with Next.js (App Router) and TypeScript, and styled with Tailwind CSS. Project data is embedded in the frontend at `src/data/projects.ts`.

This README explains how the repo is organized, how to run the site locally, and helpful notes for deployment and troubleshooting.

## Table of contents
- What this repo contains
- Getting started (local development)
- Project structure
- Styling
- Deploy
- Contributing

## What this repo contains

- A Next.js frontend using the App Router (under `src/app/`).
- Small, reusable React components under `src/components/`.
- Static project data in `src/data/projects.ts` used by the site.
- Static assets in `public/`.

## Quick start (development)

Requirements
- Node.js 18+ and a package manager (npm, pnpm or yarn).

Install and run locally

```bash
# from repo root
npm install
npm run dev
```

Open http://localhost:3000 in your browser to view the site.

Available scripts (from `package.json`)
- `dev` — start Next.js in development mode (`next dev --turbopack`).
- `build` — build the production app (`next build --turbopack`).
- `start` — start the production server (`next start`).
- `lint` — run ESLint.

## Project structure

- `src/app/` — Next.js App Router entry. `src/app/page.tsx` is the home page and contains the Projects UI.
- `src/components/` — React components used across the site (for example `Navbar.tsx`, `Animator.tsx`, `ThemeToggle.tsx`).
- `src/data/projects.ts` — static list of projects and the `Project` TypeScript type.
- `public/` — static assets (images, favicon, etc.).
- `tailwind.config.ts` — Tailwind configuration.
- `next.config.ts`, `tsconfig.json` — Next.js and TypeScript config.

## Styling

This project uses Tailwind CSS. The configuration file `tailwind.config.ts` scans the `./src/` directory for utility classes. Styles are loaded from `src/app/globals.css`.

## Deploy

You can deploy this Next.js app to platforms like Vercel, Netlify, or any host that supports Next.js. For Vercel, simply connect the repository and use the default build command (`npm run build`) and output directory managed by Next.js.

If you need a static export, evaluate which Next.js features you use (App Router, dynamic routes, server components) and follow Next.js export docs — exporting `next export` may not work for all App Router features.

## Notes

- Project data is stored in `src/data/projects.ts` and served statically from the client.
- If you want to add an API later, you can create API routes under `src/app/api/` (or restore a previous backend from git history).
