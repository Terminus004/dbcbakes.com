import Link from "next/link";
import { brand } from "@/lib/brand";

export default function CustomCakes() {
  return (
    <section aria-labelledby="cakes-heading" className="grain bg-brand text-linen">
      <div className="container-x relative z-10 flex flex-col items-start gap-10 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <div className="max-w-2xl">
          <h2 id="cakes-heading" className="text-3xl leading-tight sm:text-4xl">
            Celebrating something?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-linen/85">
            Birthdays, weddings, annaprashan, office parties — tell us the date, the
            flavour and how many people, and we will bake it fresh for the morning of.
          </p>
          <p className="mt-4 text-sm text-linen/75">
            Call us on{" "}
            <a href={brand.phoneHref} className="font-semibold underline decoration-butter underline-offset-4 hover:text-white">
              {brand.phone}
            </a>{" "}
            — orders at least 48 hours ahead.
          </p>
        </div>

        <Link href="/contact" className="btn bg-linen text-brand shadow-[0_16px_36px_-20px_rgba(0,0,0,0.7)] hover:bg-white">
          Plan your cake
        </Link>
      </div>
    </section>
  );
}
