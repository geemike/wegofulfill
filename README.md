# WegoFulfill

China dropshipping agent & fulfillment partner website. Built with [Astro](https://astro.build) — static, fast, SEO/GEO optimized.

🌐 **Live**: [wegofulfill.vercel.app](https://wegofulfill.vercel.app)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # output to dist/
npm run preview  # preview the build
```

## Tech Stack

- **Astro 4** — static site generation, pure HTML output
- **Scoped CSS** — per-component styles, no framework overhead
- **TypeScript** — content managed via `src/data/*.ts`
- **JSON-LD** — structured data for SEO/GEO (Organization, Article, FAQ, HowTo)
- **Zero backend** — no database, no server, CDN-only

## Project Structure

```
src/
├── components/
│   ├── Header.astro       # Sticky nav (responsive: desktop + mobile)
│   ├── Footer.astro       # Footer with policies
│   └── InquiryForm.astro  # Quote inquiry form
├── data/                  # Content (edit these to add articles)
│   ├── products.ts        # 6 services
│   ├── guides.ts          # 4 guides
│   ├── comparisons.ts     # 3 comparisons
│   ├── case-studies.ts    # 3 case studies
│   └── posts.ts           # 4 blog posts
├── layouts/
│   └── BaseLayout.astro   # SEO meta, JSON-LD, WhatsApp float button
├── pages/                 # 34 static pages
└── styles/
    └── global.css         # CSS variables + utility classes
public/images/             # Logos, photos, SVG icons
```

## Key Pages

| Page | Description |
|------|-------------|
| `/` | Landing — hero, stats, shipping, how it works, comparison table, FAQ |
| `/about/` | Founder story (2016→2024 timeline), team, values |
| `/services/` | 6 core services with detail pages |
| `/resources/` | Guides, comparisons, case studies hub |
| `/contact/` | Inquiry form |
| `/blog/` | SEO articles |

## Responsive Design

- **Desktop** (>900px): Logo left | Nav center | "Get a Quote" right
- **Mobile** (≤900px): ☰ left | Logo center | "Quote" right
- Stats grid: 4→2→1 columns
- All sections fully responsive

## Deployment

Connected to GitHub → Vercel auto-deploys on every `git push`.

```bash
git add -A && git commit -m "update" && git push
```

- **GitHub**: [geemike/wegofulfill](https://github.com/geemike/wegofulfill)
- **Vercel**: [wegofulfill.vercel.app](https://wegofulfill.vercel.app)

## Adding Content

1. Edit the relevant file in `src/data/`
2. `git push`
3. Vercel auto-deploys

No CMS, no database — just TypeScript files.