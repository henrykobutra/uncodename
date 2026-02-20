import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNCODENAME — Startup Name Generator",
  description:
    "Generate catchy startup names instantly. Unique, brandable names combining modern roots and suffixes. Find your next company name in one click.",
  keywords: [
    "startup name generator",
    "company name generator",
    "business name generator",
    "brand name generator",
    "saas name generator",
    "app name generator",
    "startup name ideas",
  ],
  openGraph: {
    title: "UNCODENAME — Startup Name Generator",
    description: "Every startup needs a name nobody can spell.",
    url: "https://uncodename.vercel.app/startups",
    siteName: "UNCODENAME",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNCODENAME — Startup Name Generator",
    description: "Every startup needs a name nobody can spell.",
    creator: "@henrykobutra",
  },
};

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
