export type Category =
  | "Cakes"
  | "Toast & Rusk"
  | "Celebration Cakes"
  | "Tea Cakes & Muffins"
  | "Pastries & Tarts"
  | "Brownies"
  | "The Reserve"
  | "Breads & Buns"
  | "Snacks"
  | "Artisan Breads"
  | "Savouries"
  | "Biscuits"
  | "Cookies"
  | "Biscuit Jars";

export type Product = {
  name: string;
  price?: number; // INR, "starting from". Absent = ask on WhatsApp (the 2026 catalogue carries no prices).
  category: Category;
  bestseller?: boolean; // "Signature" in the catalogue
};

// Order and blurbs follow DBC_Bakery_Catalogue_2026.pdf. Images are stock placeholders, one per category (see changelog for credits).
export const categories: { name: Category; blurb: string; image: string }[] = [
  { name: "Cakes", blurb: "Plum, fruit, roll and foil cakes — the Durgapur classics.", image: "/images/winter-campaign.jpg" },
  { name: "Toast & Rusk", blurb: "Makhan and Bombay toast, twice-baked for evening tea.", image: "/images/rusk.jpg" },
  { name: "Celebration Cakes", blurb: "Birthdays, anniversaries, pujas — by the half pound or built to your design.", image: "/images/celebration-cake.jpg" },
  { name: "Tea Cakes & Muffins", blurb: "Loaf cakes and muffins for the afternoon cup.", image: "/images/muffins.jpg" },
  { name: "Pastries & Tarts", blurb: "Cream pastries, tarts and swiss rolls, finished by hand each morning.", image: "/images/cupcakes.jpg" },
  { name: "Brownies", blurb: "Dense, fudgy and generous.", image: "/images/brownies.jpg" },
  { name: "The Reserve", blurb: "Our finest bakes — slow-proofed, butter-rich, made in small batches.", image: "/images/croissants.jpg" },
  { name: "Breads & Buns", blurb: "Soft loaves and cream buns, out of the oven before sunrise.", image: "/images/buns.jpg" },
  { name: "Snacks", blurb: "Anytime mixes and chips, made for the road.", image: "/images/snack-mix.jpg" },
  { name: "Artisan Breads", blurb: "From everyday milk bread to French loaves, focaccia and laminated pastry.", image: "/images/bread.jpg" },
  { name: "Savouries", blurb: "Patties, puffs, pies, sandwiches and pizzas — baked fresh for the day.", image: "/images/savouries.jpg" },
  { name: "Biscuits", blurb: "Jeera, badam, osmania — the tea-time biscuits Bengal grew up on.", image: "/images/cookie-bowl.jpg" },
  { name: "Cookies", blurb: "Boxed by the dozen or sold by weight.", image: "/images/cookie-stack.jpg" },
  { name: "Biscuit Jars", blurb: "Our signature jars. Twenty-seven flavours, sealed fresh and always crisp.", image: "/images/coconut-jar.jpg" },
];

// Source: DBC_Bakery_Catalogue_2026.pdf (Sept 2026). Prices carried over from the old dbcbakes.com/menu export where the item existed; the catalogue itself lists none.
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
  // Toast & Rusk
  { name: "Makhan Toast", price: 135, category: "Toast & Rusk", bestseller: true },
  { name: "Bombay Toast", price: 35, category: "Toast & Rusk" },
  { name: "Small Toast", price: 8.5, category: "Toast & Rusk" },
  // Celebration Cakes
  { name: "Fondant Customised Cake", category: "Celebration Cakes", bestseller: true },
  { name: "Customised Theme Cake", category: "Celebration Cakes" },
  { name: "Red Velvet Cake", category: "Celebration Cakes", bestseller: true },
  { name: "Truffle Cake", category: "Celebration Cakes", bestseller: true },
  { name: "Marble Truffle Cake", category: "Celebration Cakes" },
  { name: "Chocolate Cake", category: "Celebration Cakes" },
  { name: "Belgian Chocolate Cake", category: "Celebration Cakes" },
  { name: "Oreo Cake", category: "Celebration Cakes" },
  { name: "Black Forest Cake", category: "Celebration Cakes" },
  { name: "White Forest Cake", category: "Celebration Cakes" },
  { name: "Pineapple Cake", category: "Celebration Cakes" },
  { name: "Butterscotch Cake", category: "Celebration Cakes" },
  { name: "Mango Delight Cake", category: "Celebration Cakes" },
  { name: "White Marble Cake", category: "Celebration Cakes" },
  // Tea Cakes & Muffins
  { name: "Dry Fruit Cake", category: "Tea Cakes & Muffins" },
  { name: "Marble Cake", category: "Tea Cakes & Muffins" },
  { name: "Vanilla Muffin", category: "Tea Cakes & Muffins" },
  { name: "Chocochip Muffin", category: "Tea Cakes & Muffins" },
  // Pastries & Tarts
  { name: "Black Forest Pastry", category: "Pastries & Tarts", bestseller: true },
  { name: "Red Velvet Cheese Pastry", category: "Pastries & Tarts", bestseller: true },
  { name: "Chocolate Pastry", category: "Pastries & Tarts" },
  { name: "Pineapple Pastry", category: "Pastries & Tarts" },
  { name: "Mango Mousse Pastry", category: "Pastries & Tarts" },
  { name: "Fudge Cake", category: "Pastries & Tarts" },
  { name: "Apple Tart", category: "Pastries & Tarts" },
  { name: "Lemon Tart", category: "Pastries & Tarts" },
  { name: "Chocolate Tart", category: "Pastries & Tarts" },
  { name: "Vanilla Swiss Roll", category: "Pastries & Tarts" },
  { name: "Dutch Swiss Roll", category: "Pastries & Tarts" },
  { name: "Nut Corner", category: "Pastries & Tarts" },
  { name: "Strawberry Cupcake", category: "Pastries & Tarts" },
  { name: "Chocolate Cupcake", category: "Pastries & Tarts" },
  // Brownies
  { name: "Mud Brownie", category: "Brownies", bestseller: true },
  { name: "Sponge Brownie", category: "Brownies" },
  // The Reserve
  { name: "Top Notch Butter Croissant", category: "The Reserve" },
  { name: "Korean Garlic Cheese Bun", category: "The Reserve" },
  { name: "Cinnamon Roll", category: "The Reserve" },
  { name: "Honey Lemon Cake", category: "The Reserve" },
  { name: "Blueberry Cheese Cake", category: "The Reserve" },
  { name: "Hazelnut Cheese Cake", category: "The Reserve" },
  { name: "Tiramisu Pastry", category: "The Reserve" },
  { name: "Oatmeal Raisin Cookie", category: "The Reserve" },
  { name: "Dark Chocochip Cookie", category: "The Reserve" },
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
  // Snacks
  { name: "Anytime – 200 g", price: 150, category: "Snacks" },
  { name: "Anytime – 400 g", price: 25, category: "Snacks" }, // ponytail: price as published; looks wrong, confirm with client
  { name: "Chips", price: 26, category: "Snacks" },
  // Artisan Breads
  { name: "Sandwich Bread", category: "Artisan Breads" },
  { name: "Milk Bread", category: "Artisan Breads", bestseller: true },
  { name: "Multigrain Bread", category: "Artisan Breads" },
  { name: "Gluten-Free Bread", category: "Artisan Breads" },
  { name: "Millet Bread", category: "Artisan Breads" },
  { name: "French Loaf", category: "Artisan Breads" },
  { name: "Garlic Loaf", category: "Artisan Breads" },
  { name: "Garlic Bread", category: "Artisan Breads" },
  { name: "Focaccia", category: "Artisan Breads" },
  { name: "Chilli Cheese Bread", category: "Artisan Breads" },
  { name: "Butter Croissant", category: "Artisan Breads", bestseller: true },
  { name: "Danish", category: "Artisan Breads" },
  { name: "Cinnamon Roll", category: "Artisan Breads" },
  { name: "Butterscotch Cream Roll", category: "Artisan Breads" },
  { name: "Burger Bun", category: "Artisan Breads" },
  { name: "Pav Bun", category: "Artisan Breads" },
  { name: "Soup Bun", category: "Artisan Breads" },
  { name: "Soup Stick", category: "Artisan Breads" },
  { name: "Kulcha", category: "Artisan Breads" },
  { name: "Pita Bread", category: "Artisan Breads" },
  { name: "Sweet Bun", category: "Artisan Breads" },
  { name: "Pizza Base", category: "Artisan Breads" },
  // Savouries
  { name: "Veg Patties", category: "Savouries" },
  { name: "Paneer Patties", category: "Savouries" },
  { name: "Chicken Patties", category: "Savouries", bestseller: true },
  { name: "Chicken Kosha Puff", category: "Savouries", bestseller: true },
  { name: "Cheese Creamy Chicken Puff", category: "Savouries" },
  { name: "Mushroom Spinach Puff", category: "Savouries" },
  { name: "Chicken Mushroom Pie", category: "Savouries" },
  { name: "Chicken Quiche", category: "Savouries" },
  { name: "Chicken Envelope", category: "Savouries" },
  { name: "Veg Burger", category: "Savouries" },
  { name: "Chicken Burger", category: "Savouries" },
  { name: "Veg Hot Dog", category: "Savouries" },
  { name: "Chicken Hot Dog", category: "Savouries" },
  { name: "Chicken Sandwich", category: "Savouries" },
  { name: "Egg Sandwich", category: "Savouries" },
  { name: "Veg Coleslaw Sandwich", category: "Savouries" },
  { name: "Corn Spinach Sandwich", category: "Savouries" },
  { name: "Margherita Pizza", category: "Savouries" },
  { name: "Paneer Pizza", category: "Savouries" },
  { name: "Chicken Pizza", category: "Savouries" },
  // Biscuits
  { name: "Jeera Biscuit", price: 25, category: "Biscuits", bestseller: true },
  { name: "Badam Biscuit", price: 25, category: "Biscuits" },
  { name: "Chamach Biscuit", price: 25, category: "Biscuits" },
  { name: "Fata Biscuit", price: 25, category: "Biscuits" },
  { name: "Joba Biscuit", price: 25, category: "Biscuits" },
  { name: "Madhu Biscuit", price: 25, category: "Biscuits" },
  { name: "Manpasand Biscuit", price: 42, category: "Biscuits" },
  { name: "Russian Biscuit", price: 42, category: "Biscuits" },
  { name: "Osmania Biscuit", price: 42, category: "Biscuits" },
  // Cookies
  { name: "Brookies", category: "Cookies", bestseller: true },
  { name: "Honey Crunch", category: "Cookies" },
  { name: "Chocochip", category: "Cookies" },
  { name: "Cashew", category: "Cookies" },
  { name: "Coconut", category: "Cookies" },
  { name: "Jeera", category: "Cookies" },
  { name: "Karachi", category: "Cookies" },
  { name: "Sugar-Free Almond", category: "Cookies" },
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
];

export const bestsellers = products.filter((p) => p.bestseller);

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: n % 1 ? 2 : 0 }).format(n);
