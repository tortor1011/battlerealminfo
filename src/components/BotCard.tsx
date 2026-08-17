"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Shield,
  Sword,
  Zap,
  Star,
} from "lucide-react";
import type { BotProfile, BotTier } from "@/data/battleRealmsData";
import { TIER_COLOR } from "@/data/battleRealmsData";

// ─── Stat Bar ────────────────────────────────────────────────

function StatBar({ label, value }: { label: string; value: number }) {
  const color =
    value >= 80
      ? "from-emerald-500 to-green-400"
      : value >= 50
      ? "from-amber-500 to-yellow-400"
      : "from-rose-600 to-red-500";

  const textColor =
    value >= 80
      ? "text-emerald-400"
      : value >= 50
      ? "text-amber-400"
      : "text-rose-400";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span className="text-xs text-zinc-400 font-medium uppercase tracking-wide">
          {label}
        </span>
        <span className={`text-xs font-bold tabular-nums ${textColor}`}>
          {value}
        </span>
      </div>
      <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// ─── Tier Badge ──────────────────────────────────────────────

function TierBadge({ tier }: { tier: BotTier }) {
  const classes = TIER_COLOR[tier];
  const isSSS = tier === "SSS";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black border ${classes} shadow-md ${
        isSSS ? "animate-pulse" : ""
      }`}
    >
      {isSSS && <Star className="w-3 h-3 fill-yellow-300" />}
      {tier}
    </span>
  );
}

// ─── Bot Card ────────────────────────────────────────────────

interface BotCardProps {
  bot: BotProfile;
}

export default function BotCard({ bot }: BotCardProps) {
  const [counterOpen, setCounterOpen] = useState(false);

  return (
    <div className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-600 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5">
      {/* Top accent bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${
          bot.tier === "SSS"
            ? "from-yellow-400 via-amber-300 to-yellow-600"
            : bot.tier === "S"
            ? "from-amber-400 to-amber-600"
            : bot.tier === "A+" || bot.tier === "A"
            ? "from-emerald-400 to-teal-600"
            : bot.tier === "B+" || bot.tier === "B" || bot.tier === "B-"
            ? "from-sky-400 to-blue-600"
            : bot.tier === "C+" || bot.tier === "C"
            ? "from-violet-400 to-purple-600"
            : "from-rose-400 to-red-700"
        }`}
      />

      <div className="flex flex-col gap-4 p-5 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-zinc-100 tracking-tight leading-tight">
              {bot.name}
            </h3>
            <p className="text-xs text-zinc-500 mt-0.5 italic">{bot.tagline}</p>
          </div>
          <TierBadge tier={bot.tier} />
        </div>

        {/* Playstyle */}
        <div className="flex items-start gap-2 bg-zinc-800/60 rounded-xl px-3 py-2.5">
          <Sword className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
          <p className="text-xs text-zinc-300 leading-relaxed">{bot.playstyle}</p>
        </div>

        {/* Stat Bars */}
        <div className="flex flex-col gap-2.5">
          {bot.stats.map((stat) => (
            <StatBar key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-2 gap-2 mt-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 mb-0.5">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                Strengths
              </span>
            </div>
            <ul className="flex flex-col gap-0.5">
              {bot.strengths.map((s) => (
                <li
                  key={s}
                  className="text-[10px] text-zinc-400 pl-2 border-l border-emerald-700"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 mb-0.5">
              <Shield className="w-3 h-3 text-rose-400" />
              <span className="text-[10px] font-semibold text-rose-400 uppercase tracking-wider">
                Weaknesses
              </span>
            </div>
            <ul className="flex flex-col gap-0.5">
              {bot.weaknesses.map((w) => (
                <li
                  key={w}
                  className="text-[10px] text-zinc-400 pl-2 border-l border-rose-800"
                >
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Counter Tips Toggle */}
        <button
          onClick={() => setCounterOpen((v) => !v)}
          className="mt-auto flex items-center justify-between w-full bg-amber-950/40 hover:bg-amber-900/40 border border-amber-800/50 hover:border-amber-700/70 rounded-xl px-3 py-2.5 transition-all duration-200 group/btn"
          aria-expanded={counterOpen}
        >
          <div className="flex items-center gap-2">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-amber-300" />
            <span className="text-xs font-semibold text-amber-400 group-hover/btn:text-amber-300">
              How to Counter
            </span>
          </div>
          {counterOpen ? (
            <ChevronUp className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
          )}
        </button>

        {/* Counter Tips Expanded */}
        {counterOpen && (
          <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-3 -mt-2 animate-in slide-in-from-top-1 duration-200">
            <ul className="flex flex-col gap-2">
              {bot.counterTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold text-xs mt-0.5 shrink-0">
                    {i + 1}.
                  </span>
                  <span className="text-xs text-amber-200/80 leading-relaxed">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
