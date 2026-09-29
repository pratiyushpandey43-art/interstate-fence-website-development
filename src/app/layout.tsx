import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingEstimate from "@/components/FloatingEstimate";
import { business } from "@/lib/site";

const SITE_URL = "https://interstate-fence.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} | Fencing & Railing in ${business.location}`,
    template: `%s | ${business.shortName}`,
  },
  description: `Premium residential, commercial, and industrial fencing and railing in ${business.location}. Wood, vinyl, aluminum, chain link, custom fences, and railing. Call ${business.phone}.`,
  keywords: [
    "Interstate Fence",
    "Geneseo Illinois",
    "fencing",
    "residential fencing",
    "commercial fencing",
    "industrial fencing",
    "fence installation",
    "railing",
    "custom fencing",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: business.name,
    title: `${business.name} | Fencing & Railing in ${business.location}`,
    description: `Premium fencing and railing in ${business.location}. Call ${business.phone}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.location}`,
    description: `Premium fencing and railing in ${business.location}.`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-offwhite text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cedar focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingEstimate />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: business.name,
              image: `${SITE_URL}/images/hero.jpg`,
              telephone: business.phone,
              email: business.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: business.city,
                addressRegion: business.state,
                addressCountry: "US",
              },
              areaServed: business.state,
              url: SITE_URL,
            }),
          }}
        />
      </body>
    </html>
  );
}
