"use client";

import { useSyncExternalStore } from "react";
import type { MouseEvent } from "react";

type Theme = "light" | "dark";

function read(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}
function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}

function apply(next: Theme) {
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, read, () => "light" as Theme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!doc.startViewTransition || reduce) return apply(next);
    // Circle wipe from the toggle: radius reaches the farthest viewport corner.
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = left + width / 2, y = top + height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const s = document.documentElement.style;
    s.setProperty("--vt-x", `${x}px`); s.setProperty("--vt-y", `${y}px`); s.setProperty("--vt-r", `${r}px`);
    doc.startViewTransition(() => apply(next));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle shrink-0"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <span className="knob" aria-hidden="true">
        <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg className="moon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      </span>
    </button>
  );
}
