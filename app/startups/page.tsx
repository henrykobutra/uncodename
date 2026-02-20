"use client";

import Generator from "@/components/Generator";
import type { GeneratedName } from "@/components/Generator";
import { STARTUP_ROOTS, STARTUP_SUFFIXES, STARTUP_PREFIXES_WORD } from "@/lib/words";

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function generate(): GeneratedName {
  const roll = Math.random();

  if (roll < 0.45) {
    // root + suffix: "Cloudify", "Novabase", "Fluxio"
    const root = pick(STARTUP_ROOTS);
    const suffix = pick(STARTUP_SUFFIXES);
    return {
      prefix: null,
      adj: null,
      noun: capitalize(root) + suffix,
    };
  } else if (roll < 0.75) {
    // root + root compound: "CloudMint", "DataForge", "SwiftNode"
    const a = pick(STARTUP_ROOTS);
    const b = pick(STARTUP_ROOTS);
    return {
      prefix: null,
      adj: null,
      noun: capitalize(a) + capitalize(b),
    };
  } else {
    // prefix + root: "UnCloud", "GoMint", "TryForge"
    const prefix = pick(STARTUP_PREFIXES_WORD);
    const root = pick(STARTUP_ROOTS);
    return {
      prefix: null,
      adj: null,
      noun: capitalize(prefix) + capitalize(root),
    };
  }
}

export default function StartupsPage() {
  return (
    <Generator
      mode="startups"
      generate={generate}
      tagline="Every startup needs a name nobody can spell"
      buttonLabel="Pivot to Another"
      uppercase={false}
    />
  );
}
