import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import OrderForm from "@/components/contact/OrderForm";

export const metadata: Metadata = { title: "Contact & Custom Orders" };

const faqs = [
  {
    q: "How much lead time do custom cakes need?",
    a: "Please give us at least 48 hours' notice for custom cakes so we can plan the bake properly.",
  },
  {
    q: "Do you take bulk biscuit-jar orders?",
    a: "Yes — for offices, pujas and other events. Message us with quantities and a date and we'll work it out with you.",
  },
  {
    q: "Do you deliver?",
    a: "You can pick up from either the Durgapur or Kolkata location. Delivery within the city is available on request.",
  },
  {
    q: "Do you have eggless options?",
    a: "Ask us — most of our biscuits and breads are egg-free, and we can guide you to the right pick for your order.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Order, ask, or plan a cake.</h1>
          <p className="mt-5 text-lg leading-relaxed text-cocoa-soft">
            Call or WhatsApp us at{" "}
            <a href={brand.phoneHref} className="font-medium text-brand hover:underline">{brand.phone}</a>{" "}
            or email{" "}
            <a href={`mailto:${brand.email}`} className="break-all font-medium text-brand hover:underline">{brand.email}</a>.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Custom order enquiry</h2>
            <div className="mt-6">
              <OrderForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl">Find us</h2>
            {brand.locations.map((loc) => (
              <div key={loc.label} className="rounded-2xl border border-cocoa/10 bg-paper p-6">
                <p className="font-display text-xl">{loc.label}</p>
                <address className="mt-2 text-sm not-italic leading-relaxed text-cocoa-soft">
                  {loc.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
                <p className="mt-3 text-sm text-cocoa-soft">{brand.hours}</p>
                <a
                  href={loc.mapsHref}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-block text-sm font-medium text-brand underline underline-offset-4 hover:text-brand-deep"
                >
                  Get directions
                </a>
              </div>
            ))}
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener"
              className="text-sm font-medium text-brand underline underline-offset-4 hover:text-brand-deep"
            >
              Follow us on Instagram {brand.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-deep">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl">Frequently asked</h2>
          <div className="mt-6 divide-y divide-cocoa/10 rounded-2xl border border-cocoa/10 bg-paper">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none font-medium marker:content-none focus-visible:outline-2 focus-visible:outline-brand">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
