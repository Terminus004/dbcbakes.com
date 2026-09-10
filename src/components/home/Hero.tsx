import Image from "next/image";
import Link from "next/link";
import { brand, yearsBaking } from "@/lib/brand";

export default function Hero() {
  return (
    <section className="grain overflow-hidden bg-cream">
      <div className="container-x relative z-10 grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">{brand.formerName} · Est. {brand.founded}</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Baked in Durgapur since{" "}
            <span className="italic text-brand">{brand.founded}</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa-soft">
            The biscuit tin on every Durgapur tea table — bread, jars and plum cake
            from the same family ovens, now baking for Kolkata too.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/menu" className="btn btn-primary">Explore the menu</Link>
            <a href={brand.whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost">
              Order on WhatsApp
            </a>
          </div>

          <p className="mt-8 font-display text-xl italic text-cocoa-soft">
            &ldquo;{brand.tagline}&rdquo;
          </p>
        </div>

        <div className="relative pb-16 sm:pb-12 lg:pb-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(59,42,34,0.45)]">
            <Image
              src="/images/cookies.jpg"
              alt="A DBC Bakery counter case filled with freshly baked biscuits and pastries"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-2 flex items-center gap-3 rounded-2xl border border-cocoa/10 bg-paper px-5 py-4 shadow-[0_20px_40px_-24px_rgba(59,42,34,0.5)] sm:left-auto sm:right-6 lg:-bottom-8">
            <Image src="/logo.png" alt="" width={48} height={48} className="rounded-full" />
            <span className="text-sm font-semibold leading-snug">
              FSSAI licensed
              <span className="block font-normal text-cocoa-soft">{yearsBaking}+ years of baking</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
