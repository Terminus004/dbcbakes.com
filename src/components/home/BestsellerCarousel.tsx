"use client";

import { useEffect, useRef } from "react";
import { formatINR, type Product } from "@/lib/products";
import { brand } from "@/lib/brand";

const HOLD_MS = 2000; // pause on each card
const SLIDE_MS = 600;
const STEP_REM = 18.25; // card 17rem + gap 1.25rem — must match --step in globals.css
const USER_GRACE_MS = 6000; // no auto-advance for a while after the user drives it

function orderHref(name: string) {
  return `${brand.whatsappHref}?text=${encodeURIComponent(`Hi DBC Bakery, I'd like to order: ${name}`)}`;
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollStep(el: HTMLElement, dir: 1 | -1) {
  const step = STEP_REM * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const max = el.scrollWidth - el.clientWidth;
  let left = el.scrollLeft + dir * step;
  if (dir === 1 && el.scrollLeft >= max - 2) left = 0; // wrap to start
  if (dir === -1 && el.scrollLeft <= 2) left = max; // wrap to end
  el.scrollTo({ left, behavior: reducedMotion() ? "auto" : "smooth" });
}

export default function BestsellerCarousel({ items }: { items: Product[] }) {
  const viewport = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const lastUserAction = useRef(0);

  useEffect(() => {
    if (reducedMotion()) return;
    const id = setInterval(() => {
      const el = viewport.current;
      if (!el || paused.current || Date.now() - lastUserAction.current < USER_GRACE_MS) return;
      scrollStep(el, 1);
    }, HOLD_MS + SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  function manual(dir: 1 | -1) {
    lastUserAction.current = Date.now();
    if (viewport.current) scrollStep(viewport.current, dir);
  }

  const btn =
    "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-cocoa/15 bg-paper text-brand shadow-[0_14px_28px_-14px_rgba(59,42,34,0.6)] transition-[transform,background-color,color] duration-200 hover:scale-110 hover:bg-brand hover:text-paper active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

  return (
    <div
      className="relative mt-12"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div
        ref={viewport}
        className="bestseller-viewport overflow-x-auto py-4"
        onTouchStart={() => (lastUserAction.current = Date.now())}
        onWheel={() => (lastUserAction.current = Date.now())}
      >
        <ul className="flex w-max gap-5">
          {items.map((p) => (
            <li key={p.name} className="w-[17rem] shrink-0 snap-start">
              <article className="flex h-full flex-col items-center rounded-3xl border border-cocoa/10 bg-paper px-6 py-8 shadow-[0_24px_48px_-36px_rgba(59,42,34,0.5)]">
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-3 text-balance text-2xl leading-tight">{p.name}</h3>
                {p.price !== undefined ? (
                  <p className="mt-4 text-sm text-cocoa-soft">
                    from <span className="text-lg font-semibold text-cocoa">{formatINR(p.price)}</span>
                  </p>
                ) : (
                  <p className="mt-4 text-sm text-cocoa-soft">Ask us for today&apos;s price</p>
                )}
                <a
                  href={orderHref(p.name)}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center rounded-full border border-brand/40 px-4 py-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-paper focus-visible:outline-2 focus-visible:outline-brand"
                >
                  Order
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <button type="button" aria-label="Previous bestseller" onClick={() => manual(-1)} className={`${btn} left-1 lg:-left-6`}>
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.5 4.5 7 10l5.5 5.5" />
        </svg>
      </button>
      <button type="button" aria-label="Next bestseller" onClick={() => manual(1)} className={`${btn} right-1 lg:-right-6`}>
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.5 5.5 5.5-5.5 5.5" />
        </svg>
      </button>
    </div>
  );
}
