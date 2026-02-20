import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNCODENAME — Pet Name Generator",
  description:
    "Generate unique, ridiculous, and regal names for your pets. From Sir Biscuit to Professor Gremlin — find the perfect name for your new companion.",
  keywords: [
    "pet name generator",
    "dog name generator",
    "cat name generator",
    "funny pet names",
    "unique pet names",
    "creative pet names",
  ],
  openGraph: {
    title: "UNCODENAME — Pet Name Generator",
    description: "Every good pet deserves a ridiculous name.",
    url: "https://uncodename.vercel.app/pets",
    siteName: "UNCODENAME",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNCODENAME — Pet Name Generator",
    description: "Every good pet deserves a ridiculous name.",
    creator: "@henrykobutra",
  },
};

export default function PetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
