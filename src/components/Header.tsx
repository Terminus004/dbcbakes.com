"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand, nav } from "@/lib/brand";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  // Close the mobile menu on navigation without an effect: derive from the route that opened it.
  const menuOpen = open && openedAt === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-cocoa/10 bg-cream/85 backdrop-blur-md">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${brand.name} home`}>
          <Image src="/logo.png" alt="" width={44} height={44} priority className="rounded-full" />
          <span className="font-display text-xl leading-none tracking-tight">
            DBC <span className="text-brand">Bakery</span>
            <span className="block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-cocoa-soft">
              Since {brand.founded}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-brand ${active ? "text-brand" : "text-cocoa"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={brand.whatsappHref} target="_blank" rel="noopener" className="btn btn-primary !py-2.5 !px-5 text-sm">
            Order on WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-cocoa hover:bg-cocoa/5"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => { setOpenedAt(pathname); setOpen(!menuOpen); }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div id="mobile-nav" hidden={!menuOpen} className="md:hidden border-t border-cocoa/10 bg-cream">
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-cocoa/5">
              {item.label}
            </Link>
          ))}
          <a href={brand.whatsappHref} target="_blank" rel="noopener" className="btn btn-primary mt-2 justify-center">
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
