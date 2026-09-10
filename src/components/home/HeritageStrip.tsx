import { yearsBaking } from "@/lib/brand";
import { products } from "@/lib/products";

const stats = [
  { value: "1957", label: "Baking since" },
  { value: `${yearsBaking}+`, label: "Years of baking" },
  { value: `${Math.floor(products.length / 10) * 10}+`, label: "Products on the counter" },
  { value: "2", label: "Durgapur & Kolkata" },
];

export default function HeritageStrip() {
  return (
    <section aria-label="DBC Bakery at a glance" className="bg-espresso text-linen">
      <div className="container-x grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4 md:py-14">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl leading-none text-butter md:text-4xl">{s.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-linen/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
