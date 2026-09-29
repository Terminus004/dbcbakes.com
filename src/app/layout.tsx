import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dbcbakes.com"),
  title: { default: `${brand.name} · Bakery in Durgapur & Kolkata`, template: `%s · ${brand.name}` },
  description: `${brand.formerName}, now ${brand.name}. Fresh bread, biscuit jars, plum cakes and custom celebration cakes from Durgapur and Kolkata.`,
  openGraph: { type: "website", siteName: brand.name, images: ["/images/winter-campaign.jpg"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#a32d2d" },
    { media: "(prefers-color-scheme: dark)", color: "#16100d" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          // Runs before paint so the stored theme never flashes. Keep in sync with ThemeToggle.
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn btn-primary">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
