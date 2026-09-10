export type Category =
  | "Cakes"
  | "Breads & Buns"
  | "Biscuits"
  | "Biscuit Jars"
  | "Toast & Rusk"
  | "Snacks";

export type Product = {
  name: string;
  price: number; // INR, "starting from"
  category: Category;
  bestseller?: boolean;
};

export const categories: { name: Category; blurb: string; image: string }[] = [
  { name: "Cakes", blurb: "Plum, fruit, roll and foil cakes — the Durgapur classics.", image: "/images/brownies.jpg" },
  { name: "Breads & Buns", blurb: "Soft loaves and cream buns baked before sunrise.", image: "/images/buns.jpg" },
  { name: "Biscuits", blurb: "Jeera, badam, nan khatai — sold by the piece.", image: "/images/cookie-bowl.jpg" },
  { name: "Biscuit Jars", blurb: "Our signature jars. Twenty-plus flavours, always crisp.", image: "/images/coconut-jar.jpg" },
  { name: "Toast & Rusk", blurb: "Makhan and Bombay toast, made for evening tea.", image: "/images/rusk.jpg" },
  { name: "Snacks", blurb: "Anytime mixes and chips for the road.", image: "/images/snack-mix.jpg" },
];

// Source: dbcbakes.com/menu (Sept 2026). Names normalised from the POS export; prices as published.
export const products: Product[] = [
  // Cakes
  { name: "Plum Cake", price: 40, category: "Cakes", bestseller: true },
  { name: "Fruit Slice Cake", price: 42, category: "Cakes", bestseller: true },
  { name: "Balish Cake", price: 42, category: "Cakes" },
  { name: "Special Foil Cake", price: 95, category: "Cakes" },
  { name: "S R Roll Cake", price: 110, category: "Cakes" },
  { name: "Container Roll Cake", price: 84, category: "Cakes" },
  { name: "Cup Cake Container (6 pcs)", price: 50, category: "Cakes" },
  { name: "Badam Jar Cake", price: 130, category: "Cakes" },
  { name: "Butter Cherry Foil Jar", price: 130, category: "Cakes" },
  { name: "Marble Foil Cake Jar", price: 130, category: "Cakes" },
  { name: "Mixfruit Foil Cake Jar", price: 145, category: "Cakes" },
  // Breads & Buns
  { name: "Butter Loaf", price: 30, category: "Breads & Buns", bestseller: true },
  { name: "Brown Bread – 400 g", price: 32, category: "Breads & Buns" },
  { name: "Brown Bread – Half Pound", price: 180, category: "Breads & Buns" },
  { name: "Fruit Bread", price: 16, category: "Breads & Buns" },
  { name: "Mini Bun Bread", price: 72, category: "Breads & Buns" },
  { name: "Cream Bun – Vanilla", price: 78, category: "Breads & Buns", bestseller: true },
  { name: "Cream Bun – Super", price: 84, category: "Breads & Buns" },
  { name: "Laccha Bun", price: 96, category: "Breads & Buns" },
  { name: "Ring Bun", price: 60, category: "Breads & Buns" },
  { name: "Plain Quarter", price: 72, category: "Breads & Buns" },
  { name: "Lero", price: 20, category: "Breads & Buns" },
  { name: "Pop", price: 18, category: "Breads & Buns" },
  // Biscuits (by the piece)
  { name: "Jeera Biscuit", price: 25, category: "Biscuits", bestseller: true },
  { name: "Badam Biscuit", price: 25, category: "Biscuits" },
  { name: "Chamach Biscuit", price: 25, category: "Biscuits" },
  { name: "Fata Biscuit", price: 25, category: "Biscuits" },
  { name: "Joba Biscuit", price: 25, category: "Biscuits" },
  { name: "Madhu Biscuit", price: 25, category: "Biscuits" },
  { name: "Manpasand Biscuit", price: 42, category: "Biscuits" },
  { name: "Russian Biscuit", price: 42, category: "Biscuits" },
  { name: "Osmania Biscuit", price: 42, category: "Biscuits" },
  // Biscuit Jars
  { name: "Nan Khatai Jar", price: 140, category: "Biscuit Jars", bestseller: true },
  { name: "Kaju Badam Biscuit Jar", price: 145, category: "Biscuit Jars", bestseller: true },
  { name: "Badam Biscuit Jar", price: 145, category: "Biscuit Jars" },
  { name: "Coconut Biscuit Jar", price: 145, category: "Biscuit Jars" },
  { name: "Jam Biscuit Jar", price: 145, category: "Biscuit Jars" },
  { name: "Jeera Biscuit Jar", price: 145, category: "Biscuit Jars" },
  { name: "Jowan Biscuit Jar", price: 135, category: "Biscuit Jars" },
  { name: "Kalo Jeera Biscuit Jar", price: 145, category: "Biscuit Jars" },
  { name: "Lemon Pop Biscuit Jar", price: 145, category: "Biscuit Jars" },
  { name: "Pineapple Biscuit Jar", price: 145, category: "Biscuit Jars" },
  { name: "Apple Jar", price: 140, category: "Biscuit Jars" },
  { name: "Chouko Jeera Jar", price: 140, category: "Biscuit Jars" },
  { name: "Gol Badam Jar", price: 140, category: "Biscuit Jars" },
  { name: "Joba Jar", price: 140, category: "Biscuit Jars" },
  { name: "Kusum Jar", price: 140, category: "Biscuit Jars" },
  { name: "Lomba Coconut Jar", price: 140, category: "Biscuit Jars" },
  { name: "Lombu Jar", price: 140, category: "Biscuit Jars" },
  { name: "Milk Jam Jar", price: 140, category: "Biscuit Jars" },
  { name: "Mix Fruit Jar", price: 140, category: "Biscuit Jars" },
  { name: "Moch Moch Jar", price: 140, category: "Biscuit Jars" },
  { name: "Modhu Jar", price: 140, category: "Biscuit Jars" },
  { name: "Mr Butter Jar", price: 140, category: "Biscuit Jars" },
  { name: "Osmania Jar", price: 140, category: "Biscuit Jars" },
  { name: "Pakhija Jar", price: 140, category: "Biscuit Jars" },
  { name: "Pencil Jar", price: 140, category: "Biscuit Jars" },
  { name: "Suji Jar", price: 140, category: "Biscuit Jars" },
  { name: "Tali Jar", price: 140, category: "Biscuit Jars" },
  // Toast & Rusk
  { name: "Makhan Toast", price: 135, category: "Toast & Rusk", bestseller: true },
  { name: "Bombay Toast", price: 35, category: "Toast & Rusk" },
  { name: "Small Toast", price: 8.5, category: "Toast & Rusk" },
  // Snacks
  { name: "Anytime – 200 g", price: 150, category: "Snacks" },
  { name: "Anytime – 400 g", price: 25, category: "Snacks" }, // ponytail: price as published; looks wrong, confirm with client
  { name: "Chips", price: 26, category: "Snacks" },
];

export const bestsellers = products.filter((p) => p.bestseller);

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: n % 1 ? 2 : 0 }).format(n);
