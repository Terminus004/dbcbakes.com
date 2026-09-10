export const brand = {
  name: "DBC Bakery",
  legalName: "DBC Bakery Private Limited",
  formerName: "Durgapur Bakery",
  founded: 1957,
  tagline: "Taste the freshness, share the happiness.",
  quote: "Where every slice carries a story of love, warmth and tradition.",
  phone: "+91 87940 30954",
  phoneHref: "tel:+918794030954",
  whatsappHref: "https://wa.me/918794030954",
  email: "basundhara.chakraborty@dbcbakes.com",
  instagram: "https://www.instagram.com/dbcbakery24/",
  instagramHandle: "@dbcbakery24",
  fssai: "22825136001375",
  cin: "U46304WB2025PTC281467",
  locations: [
    {
      label: "Kolkata",
      lines: ["73/2 Ashwini Datta Road", "Near VIP Garden, Baguihati", "Kolkata 700059, West Bengal"],
      mapsHref: "https://maps.google.com/?q=73%2F2+Ashwini+Datta+Road+Baguihati+Kolkata+700059",
    },
    {
      label: "Bakery, Durgapur",
      lines: ["DVC Market, DPL Coke Oven Colony", "Durgapur", "West Bengal"],
      mapsHref: "https://maps.google.com/?q=DVC+Market+DPL+Coke+Oven+Colony+Durgapur",
    },
  ],
  hours: "Open daily, 8:00 am – 9:00 pm", // ponytail: unverified, confirm with client
} as const;

export const yearsBaking = new Date().getFullYear() - brand.founded;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
] as const;
