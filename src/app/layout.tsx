import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dbcbakes.com"),
  title: { default: `${brand.name} · Baking in Bengal since ${brand.founded}`, template: `%s · ${brand.name}` },
  description: `${brand.formerName}, now ${brand.name}. Fresh bread, biscuit jars, plum cakes and custom celebration cakes from Durgapur and Kolkata since ${brand.founded}.`,
  openGraph: { type: "website", siteName: brand.name, images: ["/images/winter-campaign.jpg"] },
};

export const viewport: Viewport = { themeColor: "#a32d2d" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn btn-primary">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
