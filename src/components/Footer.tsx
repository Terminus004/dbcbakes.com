import Image from "next/image";
import Link from "next/link";
import { brand, nav } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="mt-24 bg-espresso text-linen">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={48} height={48} className="rounded-full bg-linen" />
            <p className="font-display text-2xl">DBC Bakery</p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-linen/75">
            {brand.formerName}, now {brand.name}. Bread, biscuits and cakes baked the way Durgapur has loved them for three generations.
          </p>
          <p className="mt-6 font-display text-lg italic text-butter">“A party without cake is just a meeting.”</p>
        </div>

        <div>
          <p className="eyebrow !text-butter">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-linen/85 hover:text-white">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/menu?c=Cakes" className="text-linen/85 hover:text-white">Custom cakes</Link></li>
          </ul>
        </div>

        {brand.locations.map((loc) => (
          <div key={loc.label}>
            <p className="eyebrow !text-butter">{loc.label}</p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-linen/85">
              {loc.lines.map((l) => <span key={l} className="block">{l}</span>)}
              <a href={loc.mapsHref} target="_blank" rel="noopener" className="mt-2 inline-block underline decoration-butter/60 underline-offset-4 hover:text-white">
                Get directions
              </a>
            </address>
          </div>
        ))}
      </div>

      <div className="border-t border-linen/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-linen/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.legalName}. FSSAI Lic. No. {brand.fssai}
            <span className="block text-linen/40">
              Savouries photo: Joy,{" "}
              <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-white">
                CC BY 2.0
              </a>
            </span>
          </p>
          <div className="flex flex-wrap gap-5">
            <a href={brand.phoneHref} className="hover:text-white">{brand.phone}</a>
            <a href={`mailto:${brand.email}`} className="hover:text-white">{brand.email}</a>
            <a href={brand.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram {brand.instagramHandle}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
