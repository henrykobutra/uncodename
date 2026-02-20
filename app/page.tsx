"use client";

import Generator from "@/components/Generator";
import type { GeneratedName } from "@/components/Generator";
import { PROJECT_ADJECTIVES, PROJECT_NOUNS, PROJECT_PREFIXES } from "@/lib/words";

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function generate(): GeneratedName {
  const singleWord = Math.random() < 0.5;
  return {
    prefix: pick(PROJECT_PREFIXES),
    adj: singleWord ? null : pick(PROJECT_ADJECTIVES),
    noun: pick(PROJECT_NOUNS),
  };
}

export default function Home() {
  return (
    <Generator
      mode="projects"
      generate={generate}
      tagline="Every great project starts with a name"
      buttonLabel="Declassify Another"
    />
  );
}
