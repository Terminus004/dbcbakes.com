import { categories, type Category } from "@/lib/products";
import { brand } from "@/lib/brand";
import MenuBrowser from "@/components/menu/MenuBrowser";

export const metadata = { title: "Menu" };

const categoryNames = categories.map((c) => c.name);

export default async function Page(props: PageProps<"/menu">) {
  const { c } = await props.searchParams;
  const requested = Array.isArray(c) ? c[0] : c;
  const initialCategory: Category | "All" = categoryNames.includes(requested as Category)
    ? (requested as Category)
    : "All";

  return (
    <>
      <section className="container-x py-16 md:py-24">
        <p className="eyebrow">Our menu</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Everything we bake</h1>
        <p className="mt-4 max-w-xl text-cocoa-soft">
          Prices are starting from — for large orders, just ask us on WhatsApp.
        </p>
      </section>

      <MenuBrowser initialCategory={initialCategory} />

      <section className="grain border-t border-cocoa-soft/15 bg-cream-deep py-16 text-center md:py-24">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl">Need a bulk order or a custom cake?</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${brand.whatsappHref}?text=${encodeURIComponent("Hi DBC Bakery, I'd like to place a bulk order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Order on WhatsApp
            </a>
            <a href={brand.phoneHref} className="btn btn-ghost">
              Call {brand.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
