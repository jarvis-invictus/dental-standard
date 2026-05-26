import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Inter_Tight } from "next/font/google";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.theme.colors.primary,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: `${siteConfig.name} — ${siteConfig.subtitle}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.hero.description,
  keywords: ["dental clinic", "dentist", "dental care", "teeth whitening", "dental implants", "root canal", "braces", "orthodontics", "cosmetic dentistry", "Pune", "Baner"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.subtitle}`,
    description: siteConfig.hero.description,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.subtitle}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.subtitle}`,
    description: siteConfig.hero.description,
    images: ["/images/og-image.jpg"],
    creator: "@smiledentalpune",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: siteConfig.siteUrl },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": `${siteConfig.siteUrl}/#dentist`,
        name: siteConfig.name,
        description: siteConfig.hero.description,
        url: siteConfig.siteUrl,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        foundingDate: siteConfig.foundingYear,
        address: {
          "@type": "PostalAddress",
          streetAddress: [siteConfig.address.line1, siteConfig.address.line2].filter(Boolean).join(", "),
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: siteConfig.address.geo.latitude, longitude: siteConfig.address.geo.longitude },
        areaServed: siteConfig.address.areaServed.map((area) => ({ "@type": "City", name: area })),
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
        ],
        priceRange: "$$",
        image: `${siteConfig.siteUrl}${siteConfig.images.logo}`,
        sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.twitter].filter(Boolean),
        hasMap: siteConfig.address.googleMapsLink,
        knowsAbout: ["Dental Implants", "Root Canal Treatment", "Teeth Whitening", "Orthodontics", "Cosmetic Dentistry", "Pediatric Dentistry"],
      },
      { "@type": "WebSite", "@id": `${siteConfig.siteUrl}/#website`, url: siteConfig.siteUrl, name: siteConfig.name, description: siteConfig.hero.description, publisher: { "@type": "Dentist", "@id": `${siteConfig.siteUrl}/#dentist` } },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };

  return (
    <html lang={siteConfig.locale.split("-")[0]} className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className="font-sans antialiased bg-white text-secondary">{children}</body>
    </html>
  );
}
