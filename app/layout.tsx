import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Light & Soul - Healing, Emotioneel Lichaamswerk & Astrologie | Loosdrecht",
  description: "Ontdek jezelf met professionele healing, emotioneel lichaamswerk en astrologie. Begeleiding door Beata van Etten met 25+ jaar ervaring. Sessies in Loosdrecht of online.",
  keywords: "healing, emotioneel lichaamswerk, astrologie, Loosdrecht, Beata van Etten, energie werk, burn-out, stress, levensvragen",
  authors: [{ name: "Beata van Etten" }],
  openGraph: {
    title: "Light & Soul - Healing & Astrologie Praktijk",
    description: "Professionele begeleiding voor healing, lichaamswerk en astrologie in Loosdrecht.",
    url: "https://lightnsoul.nl",
    siteName: "Light & Soul",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Light & Soul - Healing & Astrologie",
    description: "Ontdek jezelf met healing en astrologie begeleiding.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${cormorant.variable} ${mulish.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Light & Soul",
              "description": "Praktijk voor healing, emotioneel lichaamswerk en astrologie",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Loosdrecht",
                "addressCountry": "NL"
              },
              "telephone": "+31-6-43106917",
              "email": "info@lightnsoul.nl",
              "url": "https://lightnsoul.nl",
              "founder": {
                "@type": "Person",
                "name": "Beata van Etten"
              },
              "serviceType": ["Healing", "Emotioneel lichaamswerk", "Astrologie"],
              "areaServed": "Loosdrecht en online"
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-warm-beige text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
