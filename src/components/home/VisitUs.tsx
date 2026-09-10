import { brand } from "@/lib/brand";

export default function VisitUs() {
  return (
    <section aria-labelledby="visit-heading" className="bg-cream-deep">
      <div className="container-x py-20 md:py-28">
        <p className="eyebrow">Visit us</p>
        <h2 id="visit-heading" className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
          Two doors, the same bakery.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {brand.locations.map((loc) => (
            <div key={loc.label} className="rounded-2xl border border-cocoa/10 bg-paper p-7">
              <h3 className="text-xl">{loc.label}</h3>
              <address className="mt-4 not-italic leading-relaxed text-cocoa-soft">
                {loc.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </address>
              <p className="mt-4 text-sm font-semibold">{brand.hours}</p>
              <a
                href={loc.mapsHref}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-brand underline decoration-butter underline-offset-8 hover:decoration-brand"
              >
                Get directions &rarr;
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-cocoa-soft">
          New jars, festival bakes and the odd photo of the oven at 5 am — follow us on{" "}
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener"
            className="font-semibold text-brand underline decoration-butter underline-offset-4 hover:decoration-brand"
          >
            Instagram {brand.instagramHandle}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
