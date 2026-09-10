"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { categories, products, formatINR, type Category } from "@/lib/products";
import { brand } from "@/lib/brand";

type Filter = Category | "All";

const filters: Filter[] = ["All", ...categories.map((c) => c.name)];

function countFor(filter: Filter) {
  return filter === "All" ? products.length : products.filter((p) => p.category === filter).length;
}

function orderHref(name?: string) {
  const text = name ? `Hi DBC Bakery, I'd like to order: ${name}` : "Hi DBC Bakery, I have a question about your menu.";
  return `${brand.whatsappHref}?text=${encodeURIComponent(text)}`;
}

export default function MenuBrowser({ initialCategory }: { initialCategory: Filter }) {
  const router = useRouter();
  const [category, setCategory] = useState<Filter>(initialCategory);
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const matches = useMemo(
    () =>
      products.filter(
        (p) => (category === "All" || p.category === category) && p.name.toLowerCase().includes(query)
      ),
    [category, query]
  );

  function selectCategory(next: Filter) {
    setCategory(next);
    router.replace(next === "All" ? "/menu" : `/menu?c=${encodeURIComponent(next)}`, { scroll: false });
  }

  return (
    <div className="container-x pb-16 md:pb-24">
      {/* Category pills */}
      <div
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
        role="group"
        aria-label="Filter by category"
      >
        {filters.map((f) => {
          const selected = f === category;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={selected}
              onClick={() => selectCategory(f)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-brand ${
                selected
                  ? "border-cocoa bg-cocoa text-cream"
                  : "border-cocoa-soft/30 bg-paper text-cocoa hover:border-cocoa"
              }`}
            >
              {f} <span className="opacity-60">({countFor(f)})</span>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="mt-6">
        <label htmlFor="menu-search" className="sr-only">
          Search the menu
        </label>
        <input
          id="menu-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search the menu, e.g. 'jar' or 'cake'"
          className="w-full rounded-lg border border-cocoa-soft/30 bg-paper px-4 py-3 text-cocoa placeholder:text-cocoa-soft/60 focus-visible:outline-2 focus-visible:outline-brand"
        />
      </div>

      <p className="mt-4 text-sm text-cocoa-soft">
        {matches.length} item{matches.length === 1 ? "" : "s"}
      </p>

      {/* Results */}
      <div className="mt-4">
        {matches.length === 0 ? (
          <p className="py-12 text-center text-cocoa-soft">
            Nothing by that name — try &lsquo;jar&rsquo; or &lsquo;cake&rsquo;, or{" "}
            <a
              href={orderHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline underline-offset-2"
            >
              ask us on WhatsApp
            </a>
            .
          </p>
        ) : category === "All" ? (
          <div className="space-y-12">
            {categories.map((cat) => {
              const items = matches.filter((p) => p.category === cat.name);
              if (items.length === 0) return null;
              return (
                <section key={cat.name}>
                  <h2 className="text-2xl">{cat.name}</h2>
                  <p className="mt-1 text-sm text-cocoa-soft">{cat.blurb}</p>
                  <ProductList items={items} />
                </section>
              );
            })}
          </div>
        ) : (
          <ProductList items={matches} />
        )}
      </div>
    </div>
  );
}

function ProductList({ items }: { items: typeof products }) {
  return (
    <ul className="mt-4 grid gap-x-8 md:grid-cols-2">
      {items.map((p) => (
        <li key={p.name} className="flex items-baseline gap-2 border-b border-cocoa-soft/15 py-3">
          <span className="text-cocoa">{p.name}</span>
          {p.bestseller && (
            <span className="shrink-0 rounded-full bg-butter px-2 py-0.5 text-xs font-semibold text-cocoa">
              Bestseller
            </span>
          )}
          <span className="flex-1 border-b border-dotted border-cocoa-soft/40" aria-hidden="true" />
          <span className="shrink-0 font-medium text-cocoa">from {formatINR(p.price)}</span>
          <a
            href={orderHref(p.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-brand underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-brand"
          >
            Order
          </a>
        </li>
      ))}
    </ul>
  );
}
