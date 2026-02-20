"use client";

import { useState, useEffect, useCallback } from "react";

export type Mode = "projects" | "agents";

interface GeneratorProps {
  mode: Mode;
  generate: () => GeneratedName;
  tagline: string;
  buttonLabel: string;
}

export interface GeneratedName {
  prefix: string | null;
  adj: string | null;
  noun: string;
}

export default function Generator({ mode, generate, tagline, buttonLabel }: GeneratorProps) {
  const [name, setName] = useState<GeneratedName | null>(null);
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const regen = useCallback(() => {
    setName(generate());
    setKey((k) => k + 1);
    setCopied(false);
  }, [generate]);

  useEffect(() => { regen(); }, [regen]);

  // Easter egg: console message
  useEffect(() => {
    console.log(
      "%c█ CLASSIFIED █",
      "background: #dc2626; color: white; font-size: 20px; font-weight: bold; padding: 8px 16px;"
    );
    console.log(
      "%cYou have accessed a restricted terminal.\nClearance level: ULTRA\n\nIf you're poking around in here, we should talk.\nhttps://github.com/henrykobutra/uncodename",
      "color: #a1a1aa; font-size: 12px; font-family: monospace; line-height: 1.6;"
    );
    console.log(
      "%c// Built with ☕ and mass declassification",
      "color: #3f3f46; font-size: 11px; font-style: italic;"
    );
  }, []);

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
    const parts = [name.prefix, name.adj, name.noun].filter(Boolean);
    navigator.clipboard.writeText(parts.join(" ").toUpperCase());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [name]);

  if (!name) return null;

  const displayParts = [name.adj, name.noun].filter(Boolean);
  const displayName = displayParts.join(" ").toUpperCase();
  const fullDisplay = [name.prefix, name.adj, name.noun].filter(Boolean).join(" ").toUpperCase();

  return (
    <main
      className="relative z-10 flex flex-col items-center justify-center h-screen select-none px-4"
      role="application"
      aria-label={mode === "projects" ? "Codename Generator" : "Agent Name Generator"}
    >
      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="assertive" aria-atomic="true">
        {fullDisplay}
      </div>

      {/* Mode switcher */}
      <nav className="absolute top-8 flex items-center gap-1 text-[11px] font-mono tracking-widest uppercase" aria-label="Generator mode">
        <a
          href="/"
          className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
            mode === "projects"
              ? "text-zinc-200 bg-zinc-800/80 border border-zinc-700"
              : "text-zinc-600 hover:text-zinc-400"
          }`}
          aria-current={mode === "projects" ? "page" : undefined}
        >
          Projects
        </a>
        <span className="text-zinc-800 mx-1">/</span>
        <a
          href="/agents"
          className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
            mode === "agents"
              ? "text-zinc-200 bg-zinc-800/80 border border-zinc-700"
              : "text-zinc-600 hover:text-zinc-400"
          }`}
          aria-current={mode === "agents" ? "page" : undefined}
        >
          Agents
        </a>
      </nav>

      {/* Prefix (projects only) */}
      {name.prefix && (
        <div
          key={`p-${key}`}
          className="animate-prefix text-xs sm:text-sm tracking-[0.35em] text-zinc-500 uppercase font-mono mb-3"
          aria-hidden="true"
        >
          {name.prefix}
        </div>
      )}

      {/* Name */}
      <h1
        key={`n-${key}`}
        className="animate-codename text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-center leading-none"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {displayName}
      </h1>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-10" role="group" aria-label="Actions">
        <button
          onClick={regen}
          aria-label={`Generate a new ${mode === "projects" ? "codename" : "agent name"}`}
          className="group px-6 py-2.5 text-sm font-medium tracking-wider uppercase border border-zinc-700 rounded-full text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
        >
          {buttonLabel}
        </button>

        <button
          onClick={copyName}
          aria-label={copied ? "Name copied to clipboard" : "Copy name to clipboard"}
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
      <p className="absolute bottom-14 text-[11px] tracking-[0.25em] text-zinc-700 uppercase font-mono">
        {tagline}
      </p>

      {/* Keyboard hint */}
      <p className="absolute bottom-9 text-[10px] text-zinc-800 font-mono">
        Space / Enter to regenerate
      </p>

      {/* Attribution */}
      <footer className="absolute bottom-3 text-[10px] text-zinc-700 font-mono">
        made with ☕ by{" "}
        <a
          href="https://github.com/henrykobutra/uncodename"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200 underline underline-offset-2 decoration-zinc-800 hover:decoration-zinc-500"
        >
          @henrykobutra
        </a>
      </footer>
    </main>
  );
}
