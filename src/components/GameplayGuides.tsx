"use client";

import React, { useState } from "react";
import {
  Wheat,
  Zap,
  Sword,
  Shield,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";
import { GAMEPLAY_GUIDES } from "@/data/battleRealmsData";

// ─── Formula Chip ────────────────────────────────────────────

function FormulaChip({ label, formula }: { label: string; formula: string }) {
  return (
    <div className="flex flex-col gap-1.5 bg-zinc-950 border border-zinc-700/60 rounded-xl p-3">
      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
        {label}
      </span>
      <code className="text-xs text-zinc-300 font-mono leading-relaxed break-words">
        {formula}
      </code>
    </div>
  );
}

// ─── Guide Icon ───────────────────────────────────────────────

function GuideIcon({ icon }: { icon: string }) {
  return (
    <span className="text-2xl" role="img">
      {icon}
    </span>
  );
}

// ─── Peasant Ratio Visual ────────────────────────────────────

function PeasantRatioVisual() {
  const [riceCount, setRiceCount] = useState(4);
  const [waterCount, setWaterCount] = useState(4);

  const total = riceCount + waterCount;
  const ricePct = Math.round((riceCount / total) * 100);
  const waterPct = 100 - ricePct;

  const isOptimal =
    riceCount >= 3 && riceCount <= 4 && waterCount >= 3 && waterCount <= 4;

  return (
    <div className="bg-zinc-800/40 rounded-2xl border border-zinc-700/50 p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-300">
          Interactive Peasant Ratio
        </span>
        <span
          className={`text-[11px] font-bold border rounded-full px-2.5 py-0.5 ${
            isOptimal
              ? "text-emerald-300 border-emerald-700/50 bg-emerald-900/20"
              : "text-rose-300 border-rose-700/50 bg-rose-900/20"
          }`}
        >
          {isOptimal ? "✓ Optimal" : "⚠ Adjust ratio"}
        </span>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-amber-400 font-semibold w-16 shrink-0">
            🌾 Rice ×{riceCount}
          </span>
          <div className="flex-1 h-5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full transition-all duration-300"
              style={{ width: `${ricePct}%` }}
            />
          </div>
          <span className="text-xs tabular-nums text-zinc-500 w-8 text-right">
            {ricePct}%
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-sky-400 font-semibold w-16 shrink-0">
            💧 Water ×{waterCount}
          </span>
          <div className="flex-1 h-5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-600 to-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${waterPct}%` }}
            />
          </div>
          <span className="text-xs tabular-nums text-zinc-500 w-8 text-right">
            {waterPct}%
          </span>
        </div>
      </div>

      {/* Steppers */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
            Rice Peasants
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setRiceCount((v) => Math.max(1, v - 1))}
              className="w-7 h-7 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-zinc-300 flex items-center justify-center transition-colors"
            >
              −
            </button>
            <span className="text-sm font-bold text-zinc-200 w-6 text-center tabular-nums">
              {riceCount}
            </span>
            <button
              onClick={() => setRiceCount((v) => Math.min(8, v + 1))}
              className="w-7 h-7 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-zinc-300 flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
            Water Peasants
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setWaterCount((v) => Math.max(1, v - 1))}
              className="w-7 h-7 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-zinc-300 flex items-center justify-center transition-colors"
            >
              −
            </button>
            <span className="text-sm font-bold text-zinc-200 w-6 text-center tabular-nums">
              {waterCount}
            </span>
            <button
              onClick={() => setWaterCount((v) => Math.min(8, v + 1))}
              className="w-7 h-7 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-zinc-300 flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Guide Card ───────────────────────────────────────────────

function GuideCard({ guide }: { guide: (typeof GAMEPLAY_GUIDES)[number] }) {
  const [open, setOpen] = useState(true);

  const iconMap: Record<string, React.ReactNode> = {
    "🌾": <Wheat className="w-4 h-4 text-amber-400" />,
    "⚡": <Zap className="w-4 h-4 text-yellow-400" />,
    "⚔️": <Sword className="w-4 h-4 text-rose-400" />,
    "🛡️": <Shield className="w-4 h-4 text-sky-400" />,
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 p-5 hover:bg-zinc-800/30 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0">
            {iconMap[guide.icon] || <Info className="w-4 h-4 text-zinc-400" />}
          </div>
          <div className="text-left">
            <h3 className="text-sm font-bold text-zinc-200">{guide.title}</h3>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-zinc-500 shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-5 flex flex-col gap-4 border-t border-zinc-800">
          {/* Overview */}
          <p className="text-sm text-zinc-400 leading-relaxed pt-3">{guide.content}</p>

          {/* Interactive widget for peasant guide */}
          {guide.id === "peasant-ratio" && <PeasantRatioVisual />}

          {/* Tips */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Key Tips
            </span>
            <ul className="flex flex-col gap-2">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-amber-900/40 text-amber-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-zinc-400 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formula */}
          {guide.formula && guide.formulaLabel && (
            <FormulaChip label={guide.formulaLabel} formula={guide.formula} />
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────

export default function GameplayGuides() {
  return (
    <div className="flex flex-col gap-5">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-zinc-200">Core Gameplay Guides</h2>
        <p className="text-sm text-zinc-500">
          Fundamental mechanics, formulas, and strategies to dominate every match.
        </p>
      </div>

      {/* Guide Cards */}
      {GAMEPLAY_GUIDES.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
