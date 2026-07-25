# Thrive4U Website

A professional website for Thrive4U Coaching & Consulting, built for executive coach and consultant Sanah Singh Tomar.

## Overview
A single-page, mobile-responsive site built with Next.js (App Router) and deployed on Vercel. All content is managed directly in code — no CMS.

Navigation links are in-page anchors rather than separate routes.

## Sections
In page order, each an anchor target:

| Anchor | Section | Notes |
|---|---|---|
| `#home` | Hero | Name, headline, socials, two CTAs, portrait |
| `#about` | My story | Three paragraphs over a background image |
| `#whole-person` | The whole person | 4 clickable cards → modal with story + image gallery |
| `#credentials` | Credentials | 2 large + 3 small badges, stats row |
| `#brands` | Trusted by | 15 client logos |
| `#process` | How we work together | Reflect / Root / Rise / Thrive + closing quote |
| `#testimonials` | Stories of transformation | Drag/arrow carousel, long quotes open in a modal |
| `#blog` | Notes on coaching & growth | 2-per-page pagination, posts open in a modal |
| `#contact` | Ready to begin? | Mailto CTA button |

## Tech Stack
| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| React 18 + TypeScript | UI |
| Plain CSS (`app/globals.css`) | All styling — no Tailwind, no CSS modules |
| Cormorant Garamond via `next/font` | Display type; Georgia for body |
| Vercel | Hosting + SSL |

No runtime dependencies beyond `next`, `react` and `react-dom`.

## Project Structure
```
Thrive4U/
├── app/
│   ├── layout.tsx              # Root layout, metadata/OG, font, Header + Footer
│   ├── page.tsx                # The whole page; hero/about/credentials/brands/process/contact copy inline
│   ├── globals.css             # All styling, section-commented
│   ├── icon.png                # Favicon
│   └── apple-icon.png
├── components/
│   ├── Header.tsx              # Fixed nav, scroll-triggered white flip, mobile drawer
│   ├── Footer.tsx
│   ├── ScrollReveal.tsx        # One IntersectionObserver driving .reveal / .stagger
│   ├── WholePerson.tsx         # Card + modal content for the 4 pillars
│   ├── Testimonials.tsx        # Testimonial data, carousel, modal
│   └── Blog.tsx                # Post data, pagination, modal
├── public/images/              # Photos, cert badges, client logos
├── CONTENT.md                  # Client-facing copy doc — keep in sync with the code
└── README.md
```

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy
`main` is deployed by Vercel automatically. Commit, push, and the site rebuilds in about a minute.

## Editing content
Copy lives in the component or page that renders it:

- **Hero, About, Credentials, Brands, Process, Contact** — inline in `app/page.tsx`. Client logos and the supporting certificates are arrays at the top of that file.
- **The whole person** — the `pillars` array in `components/WholePerson.tsx` (title, icon, card blurb, full story, images).
- **Testimonials** — the `rawItems` array in `components/Testimonials.tsx`. Each entry takes a `date` (ISO `yyyy-mm-dd`) and the list sorts newest-first on its own, so new entries can go anywhere in the array. Bodies over `LONG_BODY` characters are clamped on the card and open in a modal; blank lines become paragraphs.
- **Blog** — the `posts` array in `components/Blog.tsx`. `#hashtags` are styled automatically.
- **Contact address** — three `mailto:` links, all needing the same edit: the hero icon and the contact CTA in `app/page.tsx`, plus `components/Footer.tsx`.

`CONTENT.md` mirrors all of the above in plain language for the client to mark up. **Update it whenever copy changes** — it drifts easily.

## Conventions worth knowing
- **Design tokens are literal hex, repeated throughout `globals.css`**: gold `#C9900C`, deep red `#7B1A1A`/`#8B1A1A`, brown `#5A3A10`, cream `#FAFAF8`. There are no CSS custom properties except the font variable.
- **Responsive breakpoints**: the main cascade (1024, 900, 640, 480, 400px) is at the bottom of `globals.css` under `── RESPONSIVE ──`, but individual sections also carry their own local queries higher up — 560px in Process, 700px in Blog, and several at 640px. Grep `@media` rather than assuming the bottom block is the whole story.
- **The nav uses `mix-blend-mode: multiply`** over the hero gradient to knock out the logo JPEG's cream background, swapping to a solid white bar the moment scrolling starts. Both flips happen in the same frame with no transition — it's deliberate and fragile, so test the top of the page after touching nav styles.
- **Modals** (Whole Person, Blog, Testimonials) share one pattern: overlay click and Escape to close, `document.body` scroll locked while open, animations reused from `wp-modal-in` / `wp-overlay-in`.
- **Long text on cards** is clamped with `-webkit-line-clamp` inside a flex-column `<button>`, with the full text in a modal. Used by both `.blog-card` and `.tcard`.
- **`thrive4u_preview_*.html`** is the original 16 MB design reference. Gitignored, kept locally.

## Delivered By
[Tania Gole](https://github.com/taniagole) — Freelance Consultant
