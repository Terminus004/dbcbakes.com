import Link from "next/link";
import { bestsellers, formatINR } from "@/lib/products";

export default function Bestsellers() {
  return (
    <section aria-labelledby="bestsellers-heading" className="bg-cream-deep">
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Loved for generations</p>
            <h2 id="bestsellers-heading" className="mt-4 text-3xl leading-tight sm:text-4xl">
              What Durgapur asks for by name.
            </h2>
          </div>
          <Link href="/menu" className="text-sm font-semibold text-brand underline decoration-butter underline-offset-8 hover:decoration-brand">
            See full menu &rarr;
          </Link>
        </div>

        <ul className="mt-12 grid gap-x-16 gap-y-1 md:grid-cols-2">
          {bestsellers.map((p) => (
            <li key={p.name} className="flex items-baseline gap-3 border-b border-cocoa/10 py-4">
              <span className="font-display text-lg leading-snug">
                {p.name}
                <span className="ml-2 font-sans text-xs uppercase tracking-[0.16em] text-cocoa-soft">
                  {p.category}
                </span>
              </span>
              <span aria-hidden className="min-w-6 flex-1 translate-y-[-0.3rem] border-b border-dotted border-cocoa/35" />
              <span className="whitespace-nowrap text-sm text-cocoa-soft">
                from <span className="font-semibold text-cocoa">{formatINR(p.price)}</span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-cocoa-soft">Prices are per piece or per jar, starting from.</p>
      </div>
    </section>
  );
}
