# Pivot For Dancers

Marketing site for the Pivot For Dancers ecosystem, built as a static-exported Next.js application and designed to help professional dancers navigate career transition with products, services, and free resources.

Live site: `https://pivotfordancers.com/`

## Overview

This repository powers the public-facing Pivot For Dancers website. The site acts as the brand home for:

- dancer-focused digital products
- direct support services
- free educational resources
- ecosystem entry points such as Pivot Paths

The current implementation is intentionally content-led, design-sensitive, and simple to maintain. It uses typed local data files instead of a CMS, shared page primitives to keep the UI consistent, and a static deployment model for reliability and low operational overhead.

## Why This Project Matters

Pivot For Dancers is not a generic coaching site. The product and brand positioning are specific to the emotional and practical realities of dancers transitioning away from performance.

From an engineering perspective, the goal of this codebase is to support that brand with:

- a polished, high-trust marketing experience
- strong visual consistency across detail and catalogue pages
- low-friction content updates
- lightweight deployment via GitHub Pages
- a maintainable structure that can be extended without redesigning the system each time

## Tech Stack

- `Next.js 15` with the Pages Router
- `React 18`
- `TypeScript`
- `Tailwind CSS`
- `framer-motion` for selected motion/animation
- `Recharts` for data-driven resource pages
- `Lucide React` for iconography
- `Jest` + `Testing Library` for unit/integration coverage
- GitHub Actions + GitHub Pages for deployment

## Architecture

The site is structured as a static marketing platform with reusable UI shells and data-driven catalogue content.

### Routing

The app uses the Next.js `pages/` directory:

- `/`
- `/about`
- `/faqs`
- `/products`
- `/products/how-to-pivot`
- `/products/happy-trails`
- `/services`
- `/services/mentorship`
- `/services/mock-interviews`
- `/resources`
- `/resources/pivot-paths`
- `/resources/pivot-podcast`
- `/resources/expectations-vs-reality`
- `/resources/find-your-pivot-personality`
- `/find-your-pivot-personality`

### Shared UI Patterns

The design system in this repo is code-native rather than externalized into a component library. The most important shared primitives are:

- [MarketingPrimitives.tsx](./components/site/MarketingPrimitives.tsx)
  General marketing layout primitives used across the homepage and branded sections.
- [CataloguePrimitives.tsx](./components/site/CataloguePrimitives.tsx)
  Shared catalogue scaffolding for product, service, and resource listing pages.
- [DetailCardShell.tsx](./components/site/DetailCardShell.tsx)
  Shared shell used to keep detail pages visually consistent.
- [Navigation.tsx](./components/Navigation.tsx)
  Top-level navigation with branded mega menu behavior.
- [Footer.tsx](./components/Footer.tsx)
  Shared footer, mailing-list capture, and brand links.

### Content Model

Catalogue content is maintained in typed local data modules:

- [products.ts](./data/products.ts)
- [services.ts](./data/services.ts)
- [resources.ts](./data/resources.ts)

This approach keeps the content easy to audit in Git, easy to review in pull requests, and easy to reuse across navigation, catalogue pages, and detail page entry points.

## Project Structure

```text
.
├── __tests__/                 Jest coverage for core marketing routes and chrome
├── components/                App-level UI components
│   ├── site/                  Shared marketing/catalogue/detail primitives
├── data/                      Typed content/data sources
├── pages/                     Next.js routes
├── public/assets/             Brand imagery and static assets
├── .github/workflows/         GitHub Pages deployment workflow
├── jest.config.js             Next-aware Jest config
├── jest.setup.ts              Testing environment setup/mocks
├── next.config.js             Static export + GitHub Pages-friendly config
├── tailwind.config.js         Brand theme extensions
└── styles.css                 Global styles
```

## Local Development

### Requirements

- Node.js `22.x` recommended to match CI
- npm

### Install

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

The local site will be available at `http://localhost:3000`.

### Run tests

```bash
npm test -- --runInBand
```

### Run linting

```bash
npm run lint
```

### Run type-checking

```bash
npm run typecheck
```

### Create a production build

```bash
npm run build
```

## Testing Strategy

This repo currently uses focused page-level and shared-layout coverage rather than a huge snapshot suite.

The current tests cover:

- homepage smoke coverage
- catalogue routes and approved item links
- detail-page rendering
- navigation and footer behavior
- FAQ interaction behavior

Test files:

- [home-page.test.tsx](./__tests__/home-page.test.tsx)
- [catalog-pages.test.tsx](./__tests__/catalog-pages.test.tsx)
- [detail-pages.test.tsx](./__tests__/detail-pages.test.tsx)
- [navigation-footer.test.tsx](./__tests__/navigation-footer.test.tsx)
- [faqs-page.test.tsx](./__tests__/faqs-page.test.tsx)

The intent is to protect approved content, route wiring, and core layout behavior during refactors.

## Deployment

This project is deployed via GitHub Actions to GitHub Pages.

Key deployment characteristics:

- pushes to `main` trigger the deploy workflow
- production builds use static export output in `out/`
- `next.config.js` enables `output: 'export'` in production
- `trailingSlash: true` is enabled for GitHub Pages/static hosting compatibility
- Next image optimization is configured with `images.unoptimized: true`

Deployment workflow:

- [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

## Design Notes

The site is intentionally brand-first. A few implementation decisions follow from that:

- content and layout are treated as product decisions, not placeholder filler
- shared shells are used to keep catalogue/detail pages coherent
- visual changes should preserve the existing brand language unless a redesign is intentional
- marketing copy, CTA structure, and route relationships matter as much here as raw component code

In practice, that means refactors should prioritize:

- preserving approved spacing and alignment
- keeping copy and destination links exact unless explicitly changed
- reducing duplication without flattening the brand experience

## SEO and Metadata

Route-level metadata is centralized in:

- [\_app.tsx](./pages/_app.tsx)

The app applies canonical URLs, Open Graph tags, Twitter card tags, and alias-route handling from a shared route metadata map so public pages stay consistent as the site evolves.
