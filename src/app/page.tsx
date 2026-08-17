"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  X,
  Bot,
  Swords,
  BookOpen,
  Filter,
  ChevronDown,
  GitBranch,
  Flame,
} from "lucide-react";
import BotCard from "@/components/BotCard";
import UnitTable from "@/components/UnitTable";
import GameplayGuides from "@/components/GameplayGuides";
import { BOT_PROFILES, TIER_ORDER } from "@/data/battleRealmsData";
import type { BotTier } from "@/data/battleRealmsData";

// ─── Types ────────────────────────────────────────────────────

type Tab = "bots" | "units" | "guides";

// ─── Tab Button ───────────────────────────────────────────────

function TabButton({
  tab,
  activeTab,
  onClick,
  icon,
  label,
}: {
  tab: Tab;
  activeTab: Tab;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  const isActive = tab === activeTab;
  return (
    <button
      onClick={onClick}
      id={`tab-${tab}`}
      role="tab"
      aria-selected={isActive}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
        isActive
          ? "bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-900/20"
          : "text-zinc-400 border border-transparent hover:text-zinc-200 hover:bg-zinc-800/60"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

// ─── Tier Filter Pill ─────────────────────────────────────────

function TierPill({
  tier,
  active,
  onClick,
}: {
  tier: BotTier | "ALL";
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-bold border transition-all duration-150 ${
        active
          ? "bg-amber-500/20 text-amber-300 border-amber-500/50"
          : "bg-zinc-800/60 text-zinc-500 border-zinc-700 hover:border-zinc-500 hover:text-zinc-300"
      }`}
    >
      {tier}
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>("bots");
  const [search, setSearch] = useState("");
  const [selectedTier, setSelectedTier] = useState<BotTier | "ALL">("ALL");
  const [filterOpen, setFilterOpen] = useState(false);

  // Filtered + searched bots
  const filteredBots = useMemo(() => {
    return BOT_PROFILES.filter((bot) => {
      const matchesSearch = bot.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesTier =
        selectedTier === "ALL" || bot.tier === selectedTier;
      return matchesSearch && matchesTier;
    });
  }, [search, selectedTier]);

  // Sort by tier order
  const sortedBots = useMemo(() => {
    return [...filteredBots].sort(
      (a, b) => TIER_ORDER.indexOf(a.tier) - TIER_ORDER.indexOf(b.tier)
    );
  }, [filteredBots]);

  const tierOptions: (BotTier | "ALL")[] = ["ALL", ...TIER_ORDER];

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-200">
      {/* ── Hero Header ──────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-zinc-800/60">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute -top-12 left-1/4 w-[200px] h-[150px] rounded-full bg-red-700/5 blur-2xl" />
          <div className="absolute -top-12 right-1/4 w-[200px] h-[150px] rounded-full bg-orange-700/5 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="flex flex-col items-center text-center gap-4">
            {/* Logo Row */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Flame className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-xs font-bold text-amber-500/70 uppercase tracking-widest">
                Fan Strategy Guide
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              <span className="gradient-text">Battle Realms</span>
              <br />
              <span className="text-zinc-300 text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">
                Strategy & Database Hub
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-sm sm:text-base text-zinc-500 leading-relaxed">
              Master every AI opponent, unlock unit synergies, and dominate the
              battlefield with comprehensive guides and data.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              {[
                { value: "10", label: "AI Bot Profiles" },
                { value: "6", label: "Dragon Clan Units" },
                { value: "4", label: "Gameplay Guides" },
                { value: "6×6", label: "Damage Matchups" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-0.5 px-3"
                >
                  <span className="text-lg font-black text-amber-400 tabular-nums">
                    {s.value}
                  </span>
                  <span className="text-[10px] text-zinc-600 font-medium uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Navigation Tabs ───────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            <TabButton
              tab="bots"
              activeTab={activeTab}
              onClick={() => setActiveTab("bots")}
              icon={<Bot className="w-4 h-4" />}
              label="Bot Database"
            />
            <TabButton
              tab="units"
              activeTab={activeTab}
              onClick={() => setActiveTab("units")}
              icon={<Swords className="w-4 h-4" />}
              label="Units & Gear"
            />
            <TabButton
              tab="guides"
              activeTab={activeTab}
              onClick={() => setActiveTab("guides")}
              icon={<BookOpen className="w-4 h-4" />}
              label="Guides"
            />
          </div>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── BOT DATABASE TAB ─────────────────────────────── */}
        {activeTab === "bots" && (
          <div className="flex flex-col gap-6">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                <input
                  id="bot-search"
                  type="search"
                  placeholder="Search bot by name…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-10 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/20 transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Filter Toggle */}
              <button
                id="tier-filter-toggle"
                onClick={() => setFilterOpen((v) => !v)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  selectedTier !== "ALL"
                    ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                    : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                Tier: {selectedTier}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    filterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Tier Filter Chips */}
            {filterOpen && (
              <div className="flex flex-wrap gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl animate-in slide-in-from-top-1 duration-200">
                {tierOptions.map((t) => (
                  <TierPill
                    key={t}
                    tier={t}
                    active={selectedTier === t}
                    onClick={() => {
                      setSelectedTier(t);
                      setFilterOpen(false);
                    }}
                  />
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-zinc-600">
                Showing{" "}
                <span className="text-zinc-400 font-semibold">
                  {sortedBots.length}
                </span>{" "}
                of{" "}
                <span className="text-zinc-400 font-semibold">
                  {BOT_PROFILES.length}
                </span>{" "}
                bots
                {selectedTier !== "ALL" && (
                  <span className="text-amber-500/70"> (Tier {selectedTier})</span>
                )}
              </p>
              {(search || selectedTier !== "ALL") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedTier("ALL");
                  }}
                  className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors"
                >
                  <X className="w-3 h-3" /> Clear filters
                </button>
              )}
            </div>

            {/* Bot Grid */}
            {sortedBots.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sortedBots.map((bot) => (
                  <BotCard key={bot.id} bot={bot} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Search className="w-10 h-10 text-zinc-700" />
                <div className="text-center">
                  <p className="text-zinc-400 font-semibold">No bots found</p>
                  <p className="text-zinc-600 text-sm mt-1">
                    Try a different name or tier filter.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── UNITS & GEAR TAB ─────────────────────────────── */}
        {activeTab === "units" && <UnitTable />}

        {/* ── GUIDES TAB ───────────────────────────────────── */}
        {activeTab === "guides" && <GameplayGuides />}
      </main>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-800/60 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-600 text-xs">
            <Flame className="w-3.5 h-3.5 text-amber-700" />
            <span>
              Battle Realms Strategy & Database Hub — Fan-made. Not affiliated
              with Liquid Entertainment.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-300 transition-colors"
              aria-label="GitHub"
            >
              <GitBranch className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
