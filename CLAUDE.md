# DBC Bakery website

Marketing site for DBC Bakery Private Limited (formerly Durgapur Bakery, est. 1957). Next.js 16 App Router, React 19, Tailwind v4, TypeScript. No backend: orders go to WhatsApp click-to-chat.

## Layout
- `src/lib/brand.ts` — single source for contact details, addresses, hours, socials. Edit here, not in components.
- `src/lib/products.ts` — catalogue (66 SKUs scraped from dbcbakes.com/menu, Sept 2026) with categories and bestseller flags.
- `src/app/globals.css` — brand tokens (cream/cocoa/brand red/butter gold), fonts, `container-x`, `btn*`, `eyebrow`, `.grain` utilities.
- Pages: `/` `/menu?c=<Category>` `/about` `/contact`.

## Conventions
- Server components by default; `"use client"` only for Header, ThemeToggle, MenuBrowser, OrderForm, BestsellerCarousel.
- Theming: `cream/cream-deep/paper` (surfaces) and `cocoa/cocoa-soft` (ink) flip under `[data-theme="dark"]`. `espresso` and `linen` are literal and never flip — use them for bands that must stay dark-with-light-text in both themes (footer, stats strip, text on brand red).
- No icon/animation/form libraries. Native HTML validation.
- Only `changelog.md` and this file are allowed as Markdown.

## Next.js 16 notes
- `searchParams`/`params` are Promises; `PageProps<'/route'>` and `LayoutProps` are global types.
- Docs for this exact version live in `node_modules/next/dist/docs/`.

## Open items for the client
- Instagram (@dbcbakery24) could not be scraped; confirm handle and get real product photography.
- Opening hours in `brand.ts` are a placeholder.
- "Anytime – 400 g" price (₹25) copied from the old site looks wrong.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
