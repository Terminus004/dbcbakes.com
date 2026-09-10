import Link from "next/link";
import { bestsellers } from "@/lib/products";
import { brand } from "@/lib/brand";
import BestsellerCarousel from "./BestsellerCarousel";

export default function Bestsellers() {
  return (
    <section aria-labelledby="bestsellers-heading" className="overflow-hidden bg-cream-deep">
      <div className="container-x py-20 text-center md:py-28">
        <p className="eyebrow">Loved for generations</p>
        <h2 id="bestsellers-heading" className="mx-auto mt-4 max-w-2xl text-balance text-3xl leading-tight sm:text-4xl">
          What Durgapur asks for by name.
        </h2>

        <BestsellerCarousel items={bestsellers} />

        <p className="mt-6 text-sm text-cocoa-soft">Prices are per piece or per jar, starting from.</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={brand.whatsappHref} target="_blank" rel="noopener" className="btn btn-primary btn-glow">
            Order now
          </a>
          <Link href="/menu" className="text-sm font-semibold text-brand underline decoration-butter underline-offset-8 hover:decoration-brand">
            See full menu &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
