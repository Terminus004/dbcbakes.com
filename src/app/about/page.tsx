import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand, yearsBaking } from "@/lib/brand";

export const metadata: Metadata = { title: "Our Story" };

const timeline = [
  {
    year: "1957",
    text: `A small bakery opens in DVC Market, DPL Coke Oven Colony — baking bread for the township's steel and power workers.`,
  },
  {
    year: "1970s–90s",
    text: "Biscuit jars and plum cake become tea-table staples across Durgapur, passed down through the family as the recipes stay the same.",
  },
  {
    year: "2025",
    text: "The family incorporates as DBC Bakery Private Limited and opens a head office in Kolkata, alongside the original Durgapur bakery.",
  },
  {
    year: "Today",
    text: `Same recipes, ${yearsBaking}+ years of baking, two locations — Durgapur and Kolkata.`,
  },
];

const values = [
  {
    title: "Baked fresh daily",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    title: "Honest ingredients",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9Z" />
        <path d="M9.5 14.5h5" />
      </svg>
    ),
  },
  {
    title: "Hands that know the dough",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M7 12a5 5 0 0 1 10 0v2a5 5 0 0 1-10 0v-2Z" />
        <path d="M9 9V7M15 9V7M12 21v-2" />
      </svg>
    ),
  },
  {
    title: "Part of the neighbourhood",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M4 21V10l8-6 8 6v11" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-3 text-4xl md:text-5xl">
            {yearsBaking} years of the same oven.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-cocoa-soft">
            {brand.formerName}, now {brand.legalName}. A family bakery in Durgapur that has
            fed three generations of a steel and power township — and, since 2025, Kolkata too.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-deep">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl">Milestones</h2>
          <ol className="mt-10 space-y-10 border-l-2 border-butter pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[2.55rem] top-0 h-4 w-4 rounded-full bg-butter" aria-hidden="true" />
                <p className="font-display text-2xl text-brand">{item.year}</p>
                <p className="mt-1.5 leading-relaxed text-cocoa-soft">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <h2 className="text-3xl">What stays the same</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-cocoa/10 bg-paper p-6">
                <div className="text-brand">{v.icon}</div>
                <p className="mt-4 font-display text-lg">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/cookies.jpg"
              alt="Biscuit jars and pastries in the bakery display case"
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-[22rem] w-full object-cover md:h-[28rem]"
            />
            <div className="absolute inset-0 bg-cocoa/55" />
            <blockquote className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <p className="font-display max-w-2xl text-2xl italic text-paper md:text-3xl">
                &ldquo;{brand.quote}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-deep">
        <div className="container-x max-w-xl">
          <h2 className="text-2xl">Licensed and registered</h2>
          <dl className="mt-6 space-y-3 text-sm text-cocoa-soft">
            <div className="flex justify-between gap-4 border-b border-cocoa/10 pb-3">
              <dt>FSSAI License</dt>
              <dd className="font-medium text-cocoa">{brand.fssai}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-cocoa/10 pb-3">
              <dt>CIN</dt>
              <dd className="font-medium text-cocoa">{brand.cin}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl">Ready for a slice?</h2>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link href="/menu" className="btn btn-primary">Taste the story</Link>
            <Link href="/contact" className="btn btn-ghost">Visit us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
