# Changelog

## 2026-09-10 — Initial build (fresh setup)

### Research
- Sources: dbcbakes.com (home + menu, incl. `menu/load-more.php` for the full 66-item catalogue), Tracxn legal-entity page, client logo and winter campaign artwork from the live site. Instagram @dbcbakery24 was not reachable (login wall); handle linked but unverified.
- Facts captured in `src/lib/brand.ts`: est. 1957 as Durgapur Bakery (DVC Market, DPL Coke Oven Colony); incorporated 30 Jul 2025 as DBC Bakery Private Limited (CIN U46304WB2025PTC281467), directors Basundhara Chakraborty and Arup Dutta; head office CD-51 Salt Lake Sector I, Kolkata 700064; phone +91 87940 30954; FSSAI 22825136001375.
- Design direction: brand red from the logo (#a32d2d) instead of the old site's amber; cream paper, cocoa ink, butter-gold accent; Playfair Display + DM Sans. Inspired by heritage-bakery sites (product-first, typographic menu boards, generous whitespace).

### Added
- Scaffolded Next.js 16.3.4 + Tailwind v4 + TypeScript (`create-next-app`). Removed default README/AGENTS/SVGs.
- `src/app/globals.css` — design tokens and utilities (`container-x`, `eyebrow`, `btn`, `btn-primary`, `btn-ghost`, `.grain`), reduced-motion guard.
- `src/app/layout.tsx` — fonts, metadata, theme color, skip link, Header/Footer.
- `src/components/Header.tsx` — sticky header, active-link state, accessible mobile menu, WhatsApp CTA.
- `src/components/Footer.tsx` — brand, nav, both locations, legal line with FSSAI.
- `src/lib/brand.ts`, `src/lib/products.ts` — brand data and categorised catalogue (names normalised from POS export: e.g. "LOMBA COCNUT JAR" → "Lomba Coconut Jar", "Lamon Pop" → "Lemon Pop", "Ring Bon" → "Ring Bun", "Plain Quatar" → "Plain Quarter", "Rasian" → "Russian"). Prices kept as published.
- `public/logo.png`, `src/app/icon.png`, `public/images/{bread,cookies,cupcakes,winter-campaign}.jpg` — client's own assets, resized to ≤1600px.
- `CLAUDE.md` — project notes and open items.

### Pages (built by Opus/Sonnet workers, reviewed and integrated by Fable)
- `/` — `src/app/page.tsx` + `src/components/home/*`: Hero, heritage stats strip, six category cards (link to `/menu?c=`), typographic bestsellers board, story teaser with the client's winter artwork, custom-cake CTA, three modest first-name testimonials, visit-us cards.
- `/menu` — `src/app/menu/page.tsx` + `src/components/menu/MenuBrowser.tsx`: category pills (URL-synced via `?c=`), native search, grouped list with dotted leaders, bestseller tags, per-item WhatsApp "Order" links, empty state, bulk-order CTA.
- `/about` — timeline (1957 → today), values with inline SVG icons, pull-quote image band, FSSAI/CIN block, CTA.
- `/contact` — `src/components/contact/OrderForm.tsx`: no-backend enquiry form that opens WhatsApp with a prefilled message (native validation, Indian mobile pattern, date min = today), location cards, FAQ with `<details>`.
- `not-found.tsx`, `sitemap.ts`, `robots.ts`.

### Review fixes after worker hand-off
- Removed nested `<main>` in the menu page (layout already provides it).
- Empty-search WhatsApp link now sends a generic question instead of "order: ".
- Dropped an unverified "prices may vary between counters" footnote from Bestsellers.
- Header: replaced `useEffect(setOpen)` with derived state to satisfy `react-hooks/set-state-in-effect`.
- Contact: long email address now wraps on narrow screens.

### Verification
- `npm run build` and `eslint src` clean. All routes return 200, unknown routes 404.
- Headless Chrome screenshots at 1440px and 390px (via iframe, since desktop Chrome enforces a ~500px minimum window) — no horizontal overflow on any page.

### Known gaps / for the client
- Category cards reuse three stock photos; real product photography needed.
- Opening hours, 48-hour cake lead time, and the eggless FAQ wording are placeholders to confirm.
- Instagram handle unverified (profile not reachable without login).
