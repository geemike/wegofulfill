# WegoFulfill

**China Fulfillment Partner** for Shopify & e-commerce sellers worldwide. Built with [Astro](https://astro.build) - static, fast, SEO/GEO optimized.

**Live**: [wegofulfill.com](https://wegofulfill.com) | [GitHub](https://github.com/geemike/wegofulfill) | [Vercel](https://wegofulfill.vercel.app)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # output to dist/ (40 pages)
npm run preview  # preview the build
```

LAN access: `npx astro dev --port 4321 --host 0.0.0.0`

## Tech Stack

- **Astro 4** - static site generation, zero JS by default
- **@astrojs/sitemap** (pinned 3.2.1) - auto sitemap generation
- **Scoped CSS** - per-component styles, no framework overhead
- **TypeScript** - content managed via `src/data/*.ts`
- **Schema.org JSON-LD** - auto-generated structured data for SEO/GEO

## Project Structure

```
src/
├── components/
│   ├── Header.astro          # Responsive nav (desktop + mobile)
│   ├── Footer.astro          # Footer + policies
│   ├── InquiryForm.astro     # Quote inquiry form
│   └── RelatedLinks.astro    # Auto related articles
├── data/                     # Content (edit these to add articles)
│   ├── products.ts           # 6 services
│   ├── guides.ts             # 6 guides (incl. DDP, Branded Dropshipping)
│   ├── comparisons.ts        # 6 comparisons (incl. Spocket/Zendrop/AutoDS)
│   ├── case-studies.ts       # 3 case studies
│   └── posts.ts              # 4 blog posts
├── lib/
│   └── schema.ts             # JSON-LD generators (8 schema types)
├── layouts/
│   └── BaseLayout.astro      # SEO meta, favicon, auto-schema, WhatsApp float
├── pages/                    # 40 static pages
│   ├── index.astro           # Landing page
│   ├── china-fulfillment-partner.astro  # Core service landing
│   ├── about/ contact/ faq/ resources/
│   ├── services/ guides/ blog/
│   ├── case-studies/ comparisons/
│   └── privacy/ terms/ shipping-delivery/ refund-reshipment
└── styles/
    └── global.css            # CSS variables + utility classes
public/
├── images/                   # Logos, photos, OG image, SVG icons
├── favicon.ico               # Multi-size favicon (16/32/48)
├── favicon-16/32/48/180/192/512.png
├── favicon.svg               # Vector favicon (crisp at any size)
├── apple-touch-icon.png      # iOS home-screen icon
└── site.webmanifest          # PWA manifest (theme color #2563eb)
```

## Key Pages

| Page | Purpose |
|------|---------|
| `/` | Landing - hero, stats, shipping, how it works, comparison table, data band, testimonials, FAQ |
| `/china-fulfillment-partner/` | Core service page (China Fulfillment Partner keyword) |
| `/about/` | Founder story (2016->2024 timeline) |
| `/services/` | 6 core services with detail pages |
| `/contact/` | Inquiry form + FAQ + shipping regions |
| `/guides/` | SEO content (6 guides) |
| `/comparisons/` | Competitor comparisons (6 articles) |
| `/case-studies/` | Real client results with hard data |

## SEO/GEO Features

- **Auto Schema.org** - Organization, BreadcrumbList, FAQPage, Article, Service, AboutPage, ContactPage, HowTo (via `src/lib/schema.ts`)
- **Auto Sitemap** - `@astrojs/sitemap` generates `sitemap-index.xml` on build
- **Favicon suite** - `.ico` + PNG sizes + SVG + apple-touch-icon + webmanifest (theme color `#2563eb`)
- **404-free** - all internal links verified
- **Mobile-first** - responsive nav, 2-column stats, fullscreen mobile menu
- **Image optimized** - lazy loading, width/height (zero CLS), compressed
- **Hard data points** - refund rates, shipping times, cost comparisons (AI citation-friendly)
- **WhatsApp float** - global CTA button on every page (`wa.me/8619925247178`)

## Schema System (`src/lib/schema.ts`)

8 reusable JSON-LD generators. Every page auto-injects:

```typescript
import { breadcrumbSchema, faqSchema } from '../lib/schema';

<BaseLayout
  breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services/' }]}
  schema={[faqSchema(myFaqs)]}
>
```

Generators: `organizationSchema()`, `breadcrumbSchema()`, `faqSchema()`, `articleSchema()`, `serviceSchema()`, `aboutPageSchema()`, `contactPageSchema()`, `howToSchema()`

## Responsive Design

- **Desktop** (>900px): Logo left | Nav center | "Get a Quote" right
- **Mobile** (<=900px): Hamburger left | Logo center | "Quote" right

## Deployment

GitHub push triggers auto-deploy on both Vercel and Cloudflare Pages.

```bash
# Push via SSH (HTTPS 443 is blocked on this network; SSH port 22 works)
git add -A && git commit -m "update" && git push origin main
```

- **GitHub**: [geemike/wegofulfill](https://github.com/geemike/wegofulfill)
- **Vercel**: [wegofulfill.vercel.app](https://wegofulfill.vercel.app) (auto-deploy)
- **Cloudflare Pages**: connected to same repo (auto-deploy)
- **Domain**: [wegofulfill.com](https://wegofulfill.com)

> Note: `git push` uses SSH (`git@github.com:geemike/wegofulfill.git`) because port 443 to github.com is blocked locally. SSH key (`~/.ssh/id_ed25519`) is set up.

## Adding Content

1. Edit `src/data/*.ts` (products, guides, comparisons, posts, case-studies)
2. Schema, sitemap, breadcrumbs, related links all auto-generate
3. `git push` - Vercel/Cloudflare deploy

No CMS, no database - just TypeScript files.