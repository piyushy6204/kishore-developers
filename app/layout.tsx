import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#B8976A",
};

export const metadata: Metadata = {
  title: "Platinum Royale Premium 2 BHK Residences in Wakad, Pune | Kishor Developers",
  description:
    "Discover Platinum Royale by Kishor Developers — exclusive premium 2 BHK residences in Wakad, Pune. Starting from ₹90 Lakhs. MAHA RERA: P52100031950. Schedule your site visit today.",
  keywords: ["Platinum Royale", "Kishor Developers", "2 BHK Wakad Pune", "luxury apartments Wakad", "premium flats Pune"],
  openGraph: {
    title: "Platinum Royale Premium 2 BHK in Wakad, Pune",
    description: "Exclusive single-tower premium residences starting ₹90 Lakhs. Crafted for families who appreciate thoughtful design.",
    type: "website",
    locale: "en_IN",
  },
  robots: "index, follow",
  appleWebApp: {
    title: "Platinum Royale",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18433433651"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18433433651');
          `}
        </Script>
      </head>
      <body className="bg-pr-white text-pr-charcoal antialiased lining-nums proportional-nums" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
