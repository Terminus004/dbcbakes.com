# Changelog

## 2026-09-29 — One photo per category card

### Added
- `public/images/celebration-cake.jpg`, `muffins.jpg`, `croissants.jpg` — Pexels licence (no attribution): Silvia Trigo #1857157, Castorly Stock #3650438, Valeria Boltneva #19498991. Resized to 1600 px wide, JPEG q80.
- `public/images/savouries.jpg` — "Curry turnovers" by Joy, CC BY 2.0, via Wikimedia Commons. 1600 px, q60. Credit line added to the footer's bottom bar (required by the licence; drop it when the client replaces the photo).

### Changed
- `src/lib/products.ts` — every one of the 14 categories now has its own image: Cakes → winter-campaign (client's plum-cake artwork), Toast & Rusk → rusk, Celebration Cakes → celebration-cake, Tea Cakes & Muffins → muffins, Pastries & Tarts → cupcakes, Brownies → brownies, The Reserve → croissants, Breads & Buns → buns, Snacks → snack-mix, Artisan Breads → bread, Savouries → savouries, Biscuits → cookie-bowl, Cookies → cookie-stack, Biscuit Jars → coconut-jar.
- `src/components/Footer.tsx` — photo credit under the copyright line.
- `CLAUDE.md` — open item reworded: photos are unique stock placeholders pending client photography.

### Verification
- `grep -o 'image: "[^"]*"' src/lib/products.ts | sort -u | wc -l` = 14. `tsc`, `eslint src`, `npm run build` clean; home page serves 14 distinct category images.

## 2026-09-29 — Menu rebuilt from the 2026 catalogue

### Changed
- `src/lib/products.ts` — old 65-SKU dbcbakes.com menu replaced by the 158 items in `../DBC_Bakery_Catalogue_2026.pdf`, in catalogue order across 14 categories: Cakes, Toast & Rusk, Celebration Cakes, Tea Cakes & Muffins, Pastries & Tarts, Brownies, The Reserve, Breads & Buns, Snacks, Artisan Breads, Savouries, Biscuits, Cookies, Biscuit Jars. Category blurbs are the PDF's section intros. `Product.price` is now optional: the 65 legacy items keep their old prices, the 93 new items have none (the PDF carries no prices). `bestseller` = "Signature" in the PDF (19 items). "Cinnamon Roll" is listed under both The Reserve and Artisan Breads, as printed.
- `src/components/menu/MenuBrowser.tsx` — price cell shows "Ask" when there is no price.
- `src/components/home/BestsellerCarousel.tsx` — unpriced bestsellers show "Ask us for today's price" instead of a `from ₹` line.
- `src/app/menu/page.tsx`, `src/components/home/Bestsellers.tsx` — "starting from" copy now says prices are shown where known, ask for the rest.
- `src/components/home/Categories.tsx` — "Six counters" → "Fourteen counters". Category card images are reused stock: cupcakes (Celebration Cakes, Tea Cakes & Muffins), bread (The Reserve, Artisan Breads), buns (Breads & Buns, Savouries), plus the winter-campaign plum cake for Cakes. Needs real photography.
- Stats strip "Products on the counter" auto-updates to 150+.
- `CLAUDE.md` — catalogue description and two new open items (photos, prices for the new items).

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Every legacy name+price pair verified present in the new array by script. Production server curl: `/menu` renders 158 Order rows and 93 "Ask" cells, home renders 14 category cards, `/menu?c=Savouries` selects the pill.

## 2026-09-29 — Drop "since 1957" copy

### Changed
- `src/app/layout.tsx` — default title `DBC Bakery · Bakery in Durgapur & Kolkata`; description no longer ends "since 1957".
- `src/components/Header.tsx` — "Since 1957" pill under the logo removed.
- `src/components/home/Hero.tsx` — eyebrow is now just "Durgapur Bakery"; H1 "Baked in Durgapur since 1957." → "Baked in Durgapur, *loved for three generations*."
- `src/components/Footer.tsx` — "Durgapur Bakery since 1957." → "Durgapur Bakery, now DBC Bakery."
- `src/components/home/HeritageStrip.tsx` — "1957 / Baking since" stat removed; strip is three columns at every width.
- Kept on purpose: `brand.founded`, the "65+ years" stat, the About timeline 1957 entry and the StoryTeaser "It started in 1957" line — narrative, not "since" badges.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. `grep -rn "since\|Est\." src` shows no remaining founding-year badges.

## 2026-09-10 — Dark mode

### Added
- `src/components/ThemeToggle.tsx` ("use client") — sun/moon pill toggle in the header (desktop nav and mobile bar). Reads the current theme with `useSyncExternalStore` + a MutationObserver on `<html data-theme>` (no effects/state), writes `data-theme` and `localStorage.theme`. On click, when the View Transitions API is available and motion is allowed, the new theme wipes in as a circle expanding from the toggle (`--vt-x/--vt-y/--vt-r` → `theme-reveal` keyframes); otherwise colours cross-fade over 400 ms. Knob slides with a spring curve; sun and moon icons spin and cross-fade.
- Inline pre-paint script in `src/app/layout.tsx` sets `data-theme` from `localStorage.theme`, falling back to `prefers-color-scheme`, so there is no flash. `suppressHydrationWarning` on `<html>`. Theme-color meta now per scheme.

### Changed
- `src/app/globals.css` — `@custom-variant dark` bound to `[data-theme="dark"]`; dark palette under `[data-theme="dark"]` (espresso surfaces `#16100d/#1e1613/#251b17`, cream ink `#f4ebdf`, lifted brand red `#d94a48`, gold kept, `--butter-soft` muted for the hero slab) plus `color-scheme` so native controls follow. Two new literal tokens `--espresso` and `--linen` that never flip; `btn-primary` text now `--linen` so it stays light on red in dark mode. Light values unchanged, so light mode is pixel-identical.
- Bands that must stay dark-with-light-text in both themes switched from flipping tokens to literals: `Footer`, `HeritageStrip` (`bg-espresso text-linen`), `CustomCakes` (`text-linen`, white-ish button), about-page image overlay (`bg-espresso/60 text-linen`).
- `CLAUDE.md` — client-component list and a note on the token rule.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Every route screenshotted in dark via CDP (`Emulation.setEmulatedMedia` prefers-color-scheme: dark) and in light; toggle click verified to flip `data-theme` and persist to `localStorage`.

## 2026-09-10 — Kolkata address: Baguihati replaces Salt Lake

### Changed
- `src/lib/brand.ts` — Kolkata location is now "73/2 Ashwini Datta Road, Near VIP Garden, Baguihati, Kolkata 700059" with a matching Google Maps link; label changed from "Head Office, Kolkata" to "Kolkata" (whether this is the registered office is unconfirmed — the CIN record still points at Salt Lake). Footer, contact page and every other address reader pick it up automatically.
- `src/components/home/StoryTeaser.tsx`, `src/app/about/page.tsx` — story copy no longer says "head office in Salt Lake"; now "set up in Baguihati, Kolkata" / "opens in Baguihati, Kolkata".
- `src/components/home/Testimonials.tsx` — placeholder author "Rina, Bidhannagar" → "Rina, Baguihati" so the testimonial still reads as local.
- Pin code 700059 is the standard Baguiati (Baguihati) code; confirm with the client.

### Verification
- `grep -rni "salt|bidhannagar|head office|700064" src/` empty. `tsc`, `eslint src`, `npm run build` clean. Contact page and footer screenshot reviewed.

## 2026-09-10 — Our story: newspaper clipping

### Added
- `public/images/press-clipping.jpg` (906×600) — client-supplied photo of a Bengali newspaper feature ("দুই ভাই", the two brothers) with a photo of the founder behind the counter; moved out of the repo root and renamed.

### Changed
- `src/components/home/StoryTeaser.tsx` — home "Our story" image now the press clipping (intrinsic 906×600; `width`/`height` updated so there is no layout shift). Alt text describes the clipping. `winter-campaign.jpg` is still the Open Graph image in `layout.tsx`.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome screenshot of the section at 1440px reviewed.

## 2026-09-10 — Bestsellers carousel: prev/next buttons, swipeable

### Added
- `src/components/home/BestsellerCarousel.tsx` ("use client") — the card row is now a native `scroll-snap` scroller. Round paper buttons on either side (chevron SVGs, lift and fill brand-red on hover) step one card; touch swipe and trackpad scroll work natively. Auto-advance every 2.6 s (2 s hold + 0.6 s smooth scroll) via `setInterval`; wraps to the start at the end. Pauses on hover/focus and backs off for 6 s after any manual action. Under `prefers-reduced-motion` there is no auto-advance and scrolls are instant. Refs only, no state, so nothing re-renders.

### Changed
- `src/components/home/Bestsellers.tsx` — back to a thin server component: heading, `<BestsellerCarousel items={bestsellers} />`, footnote, CTAs. The CSS keyframe generator and the cloned item list are gone.
- `src/app/globals.css` — `.bestseller-viewport` now sets scroll-snap, hidden scrollbar and the edge mask; `.bestseller-track` animation rules and the reduced-motion override removed.
- `CLAUDE.md` — client-component list updated.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome at 1440px and 390px: buttons sit outside the row on desktop and inside its edges on phones; snapped card fully visible. Auto-advance and button clicks verified by scripting `scrollLeft` in headless Chrome.

## 2026-09-10 — Bestsellers: one card per item, auto-stepping carousel

### Changed
- `src/components/home/Bestsellers.tsx` — the single boxed list is replaced by a horizontal row of cards (one per bestseller: category eyebrow, name, "from" price, per-item WhatsApp Order link). The row auto-advances one card at a time, holding 2 s on each and sliding in 0.6 s. Pure CSS: the component emits the `bestseller-slide` keyframes and duration from `bestsellers.length`, so the timing stays correct if the list changes. The list is rendered twice (clones `aria-hidden`, links untabbable) so the loop restarts seamlessly. Hover or keyboard focus pauses it. Still a server component.
- `src/app/globals.css` — `.bestseller-viewport` (step size, 1.5rem inline padding plus a matching edge fade so a resting card is never faded) and `.bestseller-track` (animation, pause on hover/focus-within). Reduced-motion users get a plain horizontally scrollable row instead of a frozen track.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome cannot advance CSS animations under virtual time, so motion was verified by inspecting the emitted keyframes (8 hold/slide pairs, 20.8 s cycle) rather than frames; static layout reviewed at 1440px and 390px.

## 2026-09-10 — Bestsellers ("Loved for generations"): boxed, centred, glowing CTA

### Changed
- `src/components/home/Bestsellers.tsx` — section is centre-aligned (eyebrow, heading, footnote, CTAs). The bestseller rows now sit inside a rounded paper card (max 4xl, soft shadow); rows keep their name / dotted leader / price layout inside the card, with the trailing borders dropped on the last row of each column. Category labels are `whitespace-nowrap` so they never split mid-phrase inside the narrower card. New primary "Order now" WhatsApp button with the `btn-glow` utility, and the "See full menu" link moved beside it.
- `src/app/globals.css` — `btn-glow` utility: pulsing brand-red ring + butter-gold halo (`btn-glow` keyframes, 2.4 s), pauses on hover. Global reduced-motion rule leaves it as a static glow.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome screenshots at 1440px and 390px reviewed.

## 2026-09-10 — Menu: tabular layout

### Changed
- `src/components/menu/MenuBrowser.tsx` — the two-column dotted-leader list is replaced by a real `<table>` per category inside a rounded paper card: small-caps header (Item / Price / Order), hairline row dividers, hover tint, right-aligned tabular-nums prices with a muted "from", Bestseller as a small gold pill after the name, and a pill-shaped Order button per row. Each card is wrapped in `overflow-x-auto` so narrow screens never scroll the page sideways. Price and Order cells are `w-px whitespace-nowrap` so they shrink to content and the item name keeps the remaining width on phones; cell padding tightens below `sm`. Category sections in the "All" view get a header row with the blurb on the left and an item count on the right. Pills, search, URL sync and empty state unchanged.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome screenshots of `/menu` at 1440px and 390px reviewed.

## 2026-09-10 — Category cards: stock photos for Toast & Rusk and Snacks

### Added
- `public/images/rusk.jpg` (1280×660) — Wikimedia Commons "Choipaku Rusk variants.jpg", CC0. Cropped to remove the ruler along the bottom edge.
- `public/images/snack-mix.jpg` (1280×946) — Wikimedia Commons "Cofresh Bombay Mix.jpg", CC0. Used as-is.
- Both are CC0 (no attribution required). Downloaded via the Commons API at the fixed 1280px thumbnail width (arbitrary widths return HTTP 400). Rejected: "Rusk from India", "Chanachur", "Bombaymix from Kerala", the West Bengal namkeen bowl and "A bowl of snacks" — all dim phone snapshots.

### Changed
- `src/lib/products.ts` — Toast & Rusk → `rusk.jpg`, Snacks → `snack-mix.jpg`. All six counters now have a distinct, relatable photo; `cookies.jpg` is still used on the about page; `bread.jpg` is now unreferenced and kept for the client to reuse.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Category grid screenshot at 1440px reviewed.

## 2026-09-10 — Category cards: client photos

### Added
- `public/images/brownies.jpg` (704×1024), `cookie-bowl.jpg` (736×1104), `buns.jpg` (736×1104), `coconut-jar.jpg` (cropped from 1200×1600 to 1200×820 around the lid, biscuits and label so the 5:3 card shows the full "COCONUT" wordmark) — client-supplied WhatsApp photos, moved out of the repo root and renamed.

### Changed
- `src/lib/products.ts` — category images: Cakes → brownies, Breads & Buns → buns, Biscuits → cookie bowl, Biscuit Jars → the DBC Coconut jar. Toast & Rusk keeps `bread.jpg`; Snacks keeps `cookies.jpg` (no photo supplied for those two).

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome screenshot of the category grid at 1440px reviewed for crop.

## 2026-09-10 — Hero text: underline animation removed, column rebalanced

### Changed
- `src/components/home/Hero.tsx` — headline is plain text again (year italic in brand red); the two SVG underline strokes are gone. Desktop grid is now `minmax(0,1fr) 26rem` with a wider gap, so the text column takes all the width the 26rem card does not, and the headline sits on two lines instead of a narrow three-line stack. Lead paragraph widened to 34rem. Below `lg` the whole column is centred (eyebrow, copy, buttons, signature) to match the centred photo card, and the headline uses `text-balance` there so it rags evenly.
- `src/app/globals.css` — removed `.hero-underline`, `.hero-underline-delay`, `@keyframes hero-draw` and the reduced-motion override. `.hero-card` unchanged.

### Verification
- `tsc`, `eslint src`, `npm run build` clean; `grep hero-underline src/` empty. Headless Chrome 1440px and 390px screenshots reviewed.

## 2026-09-10 — Hero text: clean, premium typography

### Changed
- `src/components/home/Hero.tsx` (left column only) — eyebrow gets a short brand-red hairline; headline tightened (`leading-[1.02]`, `tracking-[-0.02em]`, `text-balance`, 2.75/3.75/4.5rem); lead paragraph narrowed to 30rem with `text-pretty` and looser leading; primary CTA gains an arrow that nudges on hover; tagline demoted to a quiet signature line under a hairline with a gold opening quote; `lg:pr-6` so text breathes away from the tilted card. Copy unchanged except a non-breaking space before the em dash so it never starts a line on phones.

### Review fixes (Fable, after Sonnet worker hand-off)
- Worker's diff matched spec. Added the `&nbsp;` before the em dash after the 390px screenshot showed "— bread" opening a line.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome 1440px and 390px: hierarchy reads eyebrow → headline → lead → CTAs → signature; no overflow.

## 2026-09-10 — Hero photo: poppy 3D card

### Changed
- `src/components/home/Hero.tsx` — image column gets `perspective:1400px`; photo wrapped in `.hero-card`; Tailwind shadow moved to CSS; FSSAI badge gets `z-10` so it stays above the tilted card.
- `src/app/globals.css` — `.hero-card`: perspective tilt (rotateY −12°/rotateX 7° on desktop, −6°/4° below `lg` so the near edge is not clipped by the section on phones), butter-gold slab behind via `::before` at `translateZ(-60px)`, glossy top-left highlight via `::after`, layered warm drop-shadows, 6 s float using the `translate` property so it composes with the tilt, hover straightens and lifts the card. Global reduced-motion rule already stops the float and transition; the static tilt remains.

### Review fixes (Fable, after Sonnet worker hand-off)
- Worker's diff matched spec. Mobile tilt reduced after screenshot showed the card's left edge clipped at 390px.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome 1440px and 390px (iframe): no clipping, badge above card. Hover and float not capturable headless; check in browser.

## 2026-09-10 — Hero photo swap + animated headline underline

### Review fixes (Fable, after Sonnet worker hand-off)
- Worker wrapped the whole first line in `inline-block`, which stopped it wrapping and overflowed at every breakpoint; reduced the underline to the word "Durgapur". Draw order was reversed (year first); delay moved to the year's stroke. Dropped a desktop `max-h` cap that would have cropped the chocolate drizzle.

### Verification
- `tsc`, `eslint src`, `npm run build` clean. Headless Chrome at 1440px and 390px (iframe): no overflow, badge still overlaps the card.

### Changed
- `public/images/cookie-stack.jpg` — new client photo (cookie stack with chocolate drizzle, 735×1008) added; it replaces `cookies.jpg` in the home hero. `cookies.jpg` is still used by the category cards.
- `src/components/home/Hero.tsx` — hero image is now the portrait cookie-stack shot in a 3:4 card (`bg-paper` so the white photo background blends; centred and capped at 26rem wide at all sizes so the full drizzle stays uncropped). Headline gets two decorative SVG strokes (butter gold → brand red under "Durgapur", brand red → butter gold under the year) that draw themselves in sequence via a stroke-dashoffset animation. Only single words are wrapped in `inline-block` so the headline still wraps at every breakpoint. Pure CSS, still a server component.
- `src/app/globals.css` — `.hero-underline` draw animation (`hero-draw` keyframes, second stroke delayed). Reduced-motion users see the strokes fully drawn instead of hidden.

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
