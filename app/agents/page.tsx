"use client";

import Generator from "@/components/Generator";
import type { GeneratedName } from "@/components/Generator";
import { AGENT_ADJECTIVES, AGENT_NOUNS } from "@/lib/words";

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function generate(): GeneratedName {
  // 80% single word, 20% two-word
  const twoWord = Math.random() < 0.2;
  return {
    prefix: null,
    adj: twoWord ? pick(AGENT_ADJECTIVES) : null,
    noun: pick(AGENT_NOUNS),
  };
}

export default function AgentsPage() {
  return (
    <Generator
      mode="agents"
      generate={generate}
      tagline="Every great agent needs a name"
      buttonLabel="Initialize Another"
    />
  );
}
