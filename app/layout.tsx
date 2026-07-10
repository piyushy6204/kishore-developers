import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Platinum Royale — Premium 2 BHK Residences in Wakad, Pune | Kishor Developers",
  description:
    "Discover Platinum Royale by Kishor Developers — exclusive premium 2 BHK residences in Wakad, Pune. Starting from ₹95 Lakhs. MAHA RERA: P52100031950. Schedule your site visit today.",
  keywords: ["Platinum Royale", "Kishor Developers", "2 BHK Wakad Pune", "luxury apartments Wakad", "premium flats Pune"],
  openGraph: {
    title: "Platinum Royale — Premium 2 BHK in Wakad, Pune",
    description: "Exclusive single-tower premium residences starting ₹95 Lakhs. Crafted for families who appreciate thoughtful design.",
    type: "website",
    locale: "en_IN",
  },
  robots: "index, follow",
  themeColor: "#B8976A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-pr-white text-pr-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
