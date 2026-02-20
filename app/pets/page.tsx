"use client";

import Generator from "@/components/Generator";
import type { GeneratedName } from "@/components/Generator";
import { PET_ADJECTIVES, PET_NOUNS, PET_PREFIXES } from "@/lib/words";

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function generate(): GeneratedName {
  const roll = Math.random();
  // 50% just a name, 30% with title prefix, 20% adjective + name
  if (roll < 0.5) {
    return {
      prefix: null,
      adj: null,
      noun: capitalize(pick(PET_NOUNS)),
    };
  } else if (roll < 0.8) {
    return {
      prefix: pick(PET_PREFIXES),
      adj: null,
      noun: capitalize(pick(PET_NOUNS)),
    };
  } else {
    return {
      prefix: null,
      adj: capitalize(pick(PET_ADJECTIVES)),
      noun: capitalize(pick(PET_NOUNS)),
    };
  }
}

export default function PetsPage() {
  return (
    <Generator
      mode="pets"
      generate={generate}
      tagline="Every good pet deserves a ridiculous name"
      buttonLabel="Adopt Another"
      uppercase={false}
    />
  );
}
