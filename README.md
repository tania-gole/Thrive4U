# Thrive4U — Website

A professional website for Thrive4U Coaching & Consulting, built for life coach and consultant Sanah Singh Tomar.

## Overview
A clean, mobile-responsive 4-page site built with Next.js (App Router), deployed on Vercel. All content is managed directly in code — no CMS.

## Pages
- **Home** (`/`) — hero, intro video, call to action
- **About Me** (`/about`) — bio, coaching philosophy, credentials
- **My Process** (`/process`) — coaching approach and methodology
- **Testimonials** (`/testimonials`) — client stories

## Tech Stack
| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| React 18 + TypeScript | UI |
| Vercel | Hosting + SSL |
| YouTube embed | Homepage intro video |

## Project Structure
```
Thrive4U/
├── app/
│   ├── layout.tsx              # Root layout (header + footer)
│   ├── page.tsx                # Home
│   ├── globals.css             # Global styles
│   ├── about/page.tsx
│   ├── process/page.tsx
│   └── testimonials/page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── package.json
├── next.config.mjs
├── tsconfig.json
└── README.md
```

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push this repo to GitHub.
2. Import the project at https://vercel.com/new.
3. Vercel auto-detects Next.js — no configuration needed.
4. Connect your custom domain via Vercel → Project → Settings → Domains.

## Editing content
All copy lives directly inside the page files under `/app`. Edit the page, commit, push — Vercel redeploys automatically.

- Replace `VIDEO_ID` in `app/page.tsx` with the real YouTube video ID.
- Update contact email in `components/Footer.tsx`.

## Delivered By
[Tania Gole](https://github.com/taniagole) — Freelance Consultant
