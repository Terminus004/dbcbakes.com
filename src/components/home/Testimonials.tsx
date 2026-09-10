const testimonials = [
  {
    quote:
      "The jeera jar has been on our tea table since I was in school. Nothing else tastes like it, and I have tried.",
    author: "Rina, Baguihati",
  },
  {
    quote:
      "Every Christmas my mother sends me for two plum cakes. I come back with three, because one never survives the walk home.",
    author: "Sourav, DPL Colony",
  },
  {
    quote:
      "Bread every morning for eleven years now. Still warm when I reach the house.",
    author: "Mitali, Benachity",
  },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="container-x py-20 md:py-28">
      <p className="eyebrow">From our tea tables</p>
      <h2 id="testimonials-heading" className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
        What people tell us at the counter.
      </h2>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.author} className="flex flex-col rounded-2xl border border-cocoa/10 bg-paper p-7">
            <p aria-hidden className="font-display text-4xl leading-none text-butter">&ldquo;</p>
            <blockquote className="mt-3 flex-1 leading-relaxed text-cocoa-soft">{t.quote}</blockquote>
            <p className="mt-5 text-sm font-semibold">&mdash; {t.author}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
