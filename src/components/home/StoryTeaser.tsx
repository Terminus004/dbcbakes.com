import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

export default function StoryTeaser() {
  return (
    <section aria-labelledby="story-heading" className="container-x py-20 md:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div aria-hidden className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] border-2 border-butter sm:-bottom-5 sm:-left-5" />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-paper">
            <Image
              src="/images/winter-campaign.jpg"
              alt="DBC Bakery winter poster showing a plum cake and the bakery's red monogram"
              width={1280}
              height={853}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">Our story</p>
          <h2 id="story-heading" className="mt-4 text-3xl leading-tight sm:text-4xl">
            Three generations, one oven.
          </h2>
          <p className="mt-6 leading-relaxed text-cocoa-soft">
            It started in {brand.founded} as {brand.formerName}, a single counter in the DVC
            Market of the DPL Coke Oven Colony. Steel-town families walked over for the
            evening bread; the biscuit jar on the shelf became the one on their tea table.
          </p>
          <p className="mt-4 leading-relaxed text-cocoa-soft">
            In 2025 the family incorporated as {brand.legalName}, with a head office in Salt
            Lake. Same hands, same measures, same jars — now carried to Kolkata as well.
          </p>
          <p className="mt-6 font-display text-xl italic">&ldquo;{brand.quote}&rdquo;</p>
          <Link href="/about" className="btn btn-ghost mt-8">Read our story</Link>
        </div>
      </div>
    </section>
  );
}
