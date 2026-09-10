import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

export default function Categories() {
  return (
    <section aria-labelledby="categories-heading" className="container-x py-20 md:py-28">
      <p className="eyebrow">What we bake</p>
      <h2 id="categories-heading" className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
        Six counters, one bakery.
      </h2>
      <p className="mt-4 max-w-xl text-cocoa-soft">
        Everything is mixed, proofed and baked in-house — the same recipes the family
        has kept since the DVC Market days.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <li key={c.name}>
            <Link
              href={`/menu?c=${encodeURIComponent(c.name)}`}
              className="group block h-full overflow-hidden rounded-2xl border border-cocoa/10 bg-paper transition-shadow hover:shadow-[0_24px_48px_-30px_rgba(59,42,34,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.name} from DBC Bakery`}
                  fill
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-soft">{c.blurb}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand">
                  See the counter &rarr;
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
