import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl md:text-5xl">This shelf is empty.</h1>
      <p className="mx-auto mt-4 max-w-md text-cocoa-soft">The page you were after has been sold out or never existed. The menu, however, is fully stocked.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/menu" className="btn btn-primary">See the menu</Link>
        <Link href="/" className="btn btn-ghost">Go home</Link>
      </div>
    </section>
  );
}
