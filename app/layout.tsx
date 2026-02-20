import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "UNCODENAME",
  url: "https://uncodename.com",
  description:
    "Generate cinematic project codenames instantly. One click. One name.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Henry Kobutra",
    url: "https://github.com/henrykobutra",
  },
};

export const metadata: Metadata = {
  title: "UNCODENAME — Codename Generator",
  description:
    "Generate cinematic project codenames instantly. One click. One name. Every great project starts with a name.",
  keywords: [
    "codename generator",
    "project name generator",
    "operation name",
    "random codename",
    "project codename",
  ],
  authors: [{ name: "Henry Kobutra", url: "https://github.com/henrykobutra" }],
  creator: "Henry Kobutra",
  openGraph: {
    title: "UNCODENAME",
    description: "Every great project starts with a name.",
    url: "https://uncodename.com",
    siteName: "UNCODENAME",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNCODENAME",
    description: "Every great project starts with a name.",
    creator: "@henrykobutra",
  },
  metadataBase: new URL("https://uncodename.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Easter egg #1: the curious inspector */}
        <meta name="classified" content="CLEARANCE LEVEL: ULTRA — You weren't supposed to find this." />
        <meta name="recruitment" content="If you're reading this, you're our kind of person. github.com/henrykobutra/uncodename" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
