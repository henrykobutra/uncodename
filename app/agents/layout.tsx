import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNCODENAME — AI Agent Name Generator",
  description:
    "Generate unique names for your AI agents, bots, and assistants. Mythological, celestial, cyberpunk — find the perfect identity for your next agent.",
  keywords: [
    "ai agent name generator",
    "ai bot name",
    "ai assistant name",
    "agent name ideas",
    "openclaw agent name",
    "chatbot name generator",
    "llm agent name",
  ],
  openGraph: {
    title: "UNCODENAME — AI Agent Name Generator",
    description: "Every great agent needs a name.",
    url: "https://uncodename.vercel.app/agents",
    siteName: "UNCODENAME",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNCODENAME — AI Agent Name Generator",
    description: "Every great agent needs a name.",
    creator: "@henrykobutra",
  },
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
