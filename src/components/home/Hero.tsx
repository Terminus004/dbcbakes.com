import Image from "next/image";
import Link from "next/link";
import { brand, yearsBaking } from "@/lib/brand";

export default function Hero() {
  return (
    <section className="grain overflow-hidden bg-cream">
      <div className="container-x relative z-10 grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-24">
        <div className="text-center lg:text-left">
          <p className="eyebrow flex items-center justify-center gap-3 lg:justify-start">
            <span aria-hidden="true" className="h-px w-8 bg-brand/70" />
            {brand.formerName}
          </p>
          <h1 className="mt-6 text-balance text-[2.75rem] leading-[1.04] tracking-[-0.02em] sm:text-[3.75rem] lg:text-wrap lg:text-[4.25rem]">
            Baked in Durgapur,{" "}
            <span className="italic text-brand">loved for three generations</span>.
          </h1>
          <p className="mx-auto mt-7 max-w-[34rem] text-pretty text-[1.05rem] leading-[1.7] text-cocoa-soft sm:text-lg lg:mx-0">
            The biscuit tin on every Durgapur tea table&nbsp;— bread, jars and plum cake
            from the same family ovens, now baking for Kolkata too.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            <Link href="/menu" className="group btn btn-primary">
              Explore the menu
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <a href={brand.whatsappHref} target="_blank" rel="noopener" className="btn btn-ghost">
              Order on WhatsApp
            </a>
          </div>

          <p className="mt-10 flex items-center justify-center gap-4 border-t border-cocoa/10 pt-6 font-display text-base italic text-cocoa-soft sm:text-[1.05rem] lg:justify-start">
            <span aria-hidden="true" className="text-2xl not-italic leading-none text-butter">&ldquo;</span>
            {brand.tagline}
          </p>
        </div>

        <div className="relative pb-16 [perspective:1400px] sm:pb-12 lg:pb-0">
          <div className="hero-card relative mx-auto w-full max-w-[26rem]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-paper">
              <Image
                src="/images/cookie-stack.jpg"
                alt="A stack of chocolate-chip cookies with warm chocolate drizzling down the side"
                fill
                priority
                sizes="26rem"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-2 z-10 flex items-center gap-3 rounded-2xl border border-cocoa/10 bg-paper px-5 py-4 shadow-[0_20px_40px_-24px_rgba(59,42,34,0.5)] sm:left-auto sm:right-6 lg:-bottom-8">
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
