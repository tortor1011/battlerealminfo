"use client";

import React, { useState } from "react";
import { Wheat, Zap, Sword, Shield, ChevronDown, ChevronUp, Info } from "lucide-react";
import { GAMEPLAY_GUIDES } from "@/data/battleRealmsData";
import { UI } from "@/data/translations";
import { useLang } from "@/context/LanguageContext";

// ─── Formula Chip ────────────────────────────────────────────

function FormulaChip({ label, formula }: { label: string; formula: string }) {
  return (
    <div className="flex flex-col gap-1.5 bg-zinc-950 border border-zinc-700/60 rounded-xl p-3">
      <span className="text-sm font-bold text-amber-400 uppercase tracking-widest">{label}</span>
      <code className="text-sm text-zinc-300 font-mono leading-relaxed break-words">{formula}</code>
    </div>
  );
}

// ─── Peasant Ratio Visual ─────────────────────────────────────

function PeasantRatioVisual() {
  const { t } = useLang();
  const [riceCount, setRiceCount] = useState(4);
  const [waterCount, setWaterCount] = useState(4);

  const total = riceCount + waterCount;
  const ricePct = Math.round((riceCount / total) * 100);
  const waterPct = 100 - ricePct;
  const isOptimal = riceCount >= 3 && riceCount <= 4 && waterCount >= 3 && waterCount <= 4;

  return (
    <div className="bg-zinc-800/40 rounded-2xl border border-zinc-700/50 p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-zinc-300">{t(UI.guides.interactive)}</span>
        <span
          className={`text-sm font-bold border rounded-full px-2.5 py-0.5 ${
            isOptimal
              ? "text-emerald-300 border-emerald-700/50 bg-emerald-900/20"
              : "text-rose-300 border-rose-700/50 bg-rose-900/20"
          }`}
        >
          {isOptimal ? t(UI.guides.optimal) : t(UI.guides.adjustRatio)}
        </span>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-sm text-amber-400 font-semibold w-20 shrink-0">
            {t(UI.guides.riceLabel)} ×{riceCount}
          </span>
          <div className="flex-1 h-5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full transition-all duration-300"
              style={{ width: `${ricePct}%` }}
            />
          </div>
          <span className="text-sm tabular-nums text-zinc-500 w-8 text-right">{ricePct}%</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-sky-400 font-semibold w-20 shrink-0">
            {t(UI.guides.waterLabel)} ×{waterCount}
          </span>
          <div className="flex-1 h-5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-600 to-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${waterPct}%` }}
            />
          </div>
          <span className="text-sm tabular-nums text-zinc-500 w-8 text-right">{waterPct}%</span>
        </div>
      </div>

      {/* Steppers */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: t(UI.guides.ricePeasants), count: riceCount, set: setRiceCount },
          { label: t(UI.guides.waterPeasants), count: waterCount, set: setWaterCount },
        ].map(({ label, count, set }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-sm text-zinc-500 font-semibold uppercase tracking-wider">
              {label}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => set((v) => Math.max(1, v - 1))}
                className="w-7 h-7 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-zinc-300 flex items-center justify-center transition-colors"
              >
                −
              </button>
              <span className="text-base font-bold text-zinc-200 w-6 text-center tabular-nums">
                {count}
              </span>
              <button
                onClick={() => set((v) => Math.min(8, v + 1))}
                className="w-7 h-7 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-zinc-300 flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Guide Card ───────────────────────────────────────────────

function GuideCard({ guide }: { guide: (typeof GAMEPLAY_GUIDES)[number] }) {
  const { t, ta } = useLang();
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
            {iconMap[guide.icon] ?? <Info className="w-4 h-4 text-zinc-400" />}
          </div>
          <h3 className="text-base font-bold text-zinc-200 text-left">{t(guide.title)}</h3>
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
          <p className="text-base text-zinc-400 leading-relaxed pt-3">{t(guide.content)}</p>

          {/* Interactive widget for peasant guide */}
          {guide.id === "peasant-ratio" && <PeasantRatioVisual />}

          {/* Tips */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
              {t(UI.guides.keyTips)}
            </span>
            <ul className="flex flex-col gap-2">
              {ta(guide.tips).map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-amber-900/40 text-amber-400 text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-base text-zinc-400 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formula */}
          {guide.formula && guide.formulaLabel && (
            <FormulaChip label={t(guide.formulaLabel)} formula={t(guide.formula)} />
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────

export default function GameplayGuides() {
  const { t } = useLang();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-zinc-200">{t(UI.guides.title)}</h2>
        <p className="text-base text-zinc-500">{t(UI.guides.subtitle)}</p>
      </div>
      {GAMEPLAY_GUIDES.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
