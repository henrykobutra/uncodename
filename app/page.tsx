"use client";

import { useState, useEffect, useCallback } from "react";

const ADJECTIVES = [
  "phantom","silent","crimson","neon","quantum","shadow","iron","arctic","ember","rogue",
  "nova","midnight","chrome","obsidian","velvet","thunder","cobalt","scarlet","azure","onyx",
  "prism","cipher","stealth","apex","zero","delta","omega","binary","liquid","frozen",
  "solar","lunar","void","cosmic","rapid","feral","lucid","wicked","hollow","stark",
  "brutal","sublime","spectral","volatile","savage","toxic","nimble","orbital","radiant","muted","deep",
];

const NOUNS = [
  "falcon","horizon","catalyst","spectre","phoenix","vanguard","cipher","summit","nexus","forge",
  "pulse","titan","oracle","sentinel","drift","echo","vertex","mantis","raptor","hydra",
  "nebula","matrix","vector","conduit","helix","paradox","mirage","tempest","voltage","zenith",
  "anvil","beacon","cascade","dominion","eclipse","frontier","genesis","inferno","keystone","labyrinth",
  "monolith","octane","pinnacle","reactor","sabre","thunder","uprising","wraith","exodus","bastion",
];

const PREFIXES = ["Operation", "Project", "Protocol"];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function generate() {
  const singleWord = Math.random() < 0.5;
  return {
    prefix: pick(PREFIXES),
    adj: singleWord ? null : pick(ADJECTIVES),
    noun: pick(NOUNS),
  };
}

export default function Home() {
  const [name, setName] = useState<{ prefix: string; adj: string | null; noun: string } | null>(null);
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const regen = useCallback(() => {
    setName(generate());
    setKey((k) => k + 1);
    setCopied(false);
  }, []);

  useEffect(() => { regen(); }, [regen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        regen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [regen]);

  const copyName = useCallback(() => {
    if (!name) return;
    const full = name.adj
      ? `${name.prefix} ${name.adj} ${name.noun}`.toUpperCase()
      : `${name.prefix} ${name.noun}`.toUpperCase();
    navigator.clipboard.writeText(full);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [name]);

  if (!name) return null;

  const fullName = name.adj
    ? `${name.adj} ${name.noun}`.toUpperCase()
    : name.noun.toUpperCase();

  return (
    <main className="relative z-10 flex flex-col items-center justify-center h-screen select-none px-4">
      {/* Prefix */}
      <div key={`p-${key}`} className="animate-prefix text-xs sm:text-sm tracking-[0.35em] text-zinc-500 uppercase font-mono mb-3">
        {name.prefix}
      </div>

      {/* Code name */}
      <h1
        key={`n-${key}`}
        className="animate-codename text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-center leading-none"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {fullName}
      </h1>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-10">
        <button
          onClick={regen}
          className="group px-6 py-2.5 text-sm font-medium tracking-wider uppercase border border-zinc-700 rounded-full text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
        >
          Declassify Another
        </button>

        <button
          onClick={copyName}
          className={`px-4 py-2.5 text-sm font-mono tracking-wider uppercase border rounded-full transition-all duration-200 cursor-pointer ${
            copied
              ? "border-emerald-700 text-emerald-400 animate-copy"
              : "border-zinc-800 text-zinc-600 hover:text-zinc-400 hover:border-zinc-600"
          }`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Tagline */}
      <p className="absolute bottom-8 text-[11px] tracking-[0.25em] text-zinc-700 uppercase font-mono">
        Every great project starts with a name
      </p>

      {/* Keyboard hint */}
      <p className="absolute bottom-3 text-[10px] text-zinc-800 font-mono">
        Space / Enter to regenerate
      </p>
    </main>
  );
}
