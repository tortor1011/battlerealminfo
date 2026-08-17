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
import { BOT_PROFILES, TIER_ORDER, ALL_UNITS_DATA } from "@/data/battleRealmsData";
import type { BotTier } from "@/data/battleRealmsData";
import { UI } from "@/data/translations";
import { LanguageProvider, useLang, type Lang } from "@/context/LanguageContext";

// ─── Types ────────────────────────────────────────────────────

type Tab = "bots" | "units" | "guides";

// ─── Language Switcher ────────────────────────────────────────

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const options: { code: Lang; flag: string; label: string }[] = [
    { code: "en", flag: "🇬🇧", label: "EN" },
    { code: "th", flag: "🇹🇭", label: "TH" },
  ];
  return (
    <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-700 rounded-xl p-1 shrink-0">
      {options.map(({ code, flag, label }) => (
        <button
          key={code}
          id={`lang-${code}`}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all duration-200 ${
            lang === code
              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
              : "text-zinc-500 hover:text-zinc-200"
          }`}
        >
          <span>{flag}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

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
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-semibold transition-all duration-200 whitespace-nowrap ${
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
      className={`px-3 py-1 rounded-full text-sm font-bold border transition-all duration-150 ${
        active
          ? "bg-amber-500/20 text-amber-300 border-amber-500/50"
          : "bg-zinc-800/60 text-zinc-500 border-zinc-700 hover:border-zinc-500 hover:text-zinc-300"
      }`}
    >
      {tier}
    </button>
  );
}

// ─── Inner Page (has access to lang context) ──────────────────

function InnerPage() {
  const { t, lang } = useLang();

  const [activeTab, setActiveTab] = useState<Tab>("bots");
  const [search, setSearch] = useState("");
  const [selectedTier, setSelectedTier] = useState<BotTier | "ALL">("ALL");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredBots = useMemo(() => {
    return BOT_PROFILES.filter((bot) => {
      const matchesSearch = bot.name.toLowerCase().includes(search.toLowerCase());
      const matchesTier = selectedTier === "ALL" || bot.tier === selectedTier;
      return matchesSearch && matchesTier;
    });
  }, [search, selectedTier]);

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
              <span className="text-sm font-bold text-amber-500/70 uppercase tracking-widest">
                {t(UI.header.fanGuide)}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-5xl font-black tracking-tight leading-tight">
              <span className="gradient-text">Battle Realms</span>
              <br />
              <span className="text-zinc-300 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider">
                {t(UI.header.subtitle)}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base sm:text-lg text-zinc-500 leading-relaxed">
              {t(UI.header.heroDesc)}
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              {[
                { value: BOT_PROFILES.length.toString(), labelKey: "statBots" as const },
                { value: ALL_UNITS_DATA.length.toString(), labelKey: "statUnits" as const },
                { value: "4", labelKey: "statGuides" as const },
                { value: "6×6", labelKey: "statMatchups" as const },
              ].map((s) => (
                <div key={s.labelKey} className="flex flex-col items-center gap-0.5 px-3">
                  <span className="text-xl font-black text-amber-400 tabular-nums">{s.value}</span>
                  <span className="text-sm text-zinc-600 font-medium uppercase tracking-wider">
                    {UI.header[s.labelKey][lang]}
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
              label={t(UI.nav.bots)}
            />
            <TabButton
              tab="units"
              activeTab={activeTab}
              onClick={() => setActiveTab("units")}
              icon={<Swords className="w-4 h-4" />}
              label={t(UI.nav.units)}
            />
            <TabButton
              tab="guides"
              activeTab={activeTab}
              onClick={() => setActiveTab("guides")}
              icon={<BookOpen className="w-4 h-4" />}
              label={t(UI.nav.guides)}
            />

            {/* Language Switcher — pushed to the right */}
            <div className="ml-auto">
              <LanguageSwitcher />
            </div>
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
                  placeholder={t(UI.botList.searchPlaceholder)}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-10 py-2.5 text-base text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/20 transition-colors"
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-base font-semibold border transition-all duration-200 ${
                  selectedTier !== "ALL"
                    ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                    : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                {t(UI.botList.tierLabel)}: {selectedTier}
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
                {tierOptions.map((tier) => (
                  <TierPill
                    key={tier}
                    tier={tier}
                    active={selectedTier === tier}
                    onClick={() => {
                      setSelectedTier(tier);
                      setFilterOpen(false);
                    }}
                  />
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-600">
                {t(UI.botList.showing)}{" "}
                <span className="text-zinc-400 font-semibold">{sortedBots.length}</span>{" "}
                {t(UI.botList.of)}{" "}
                <span className="text-zinc-400 font-semibold">{BOT_PROFILES.length}</span>{" "}
                {t(UI.botList.botsWord)}
                {selectedTier !== "ALL" && (
                  <span className="text-amber-500/70">
                    {" "}
                    ({t(UI.botList.tierSuffix)} {selectedTier})
                  </span>
                )}
              </p>
              {(search || selectedTier !== "ALL") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedTier("ALL");
                  }}
                  className="text-sm text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors"
                >
                  <X className="w-3 h-3" /> {t(UI.botList.clearFilters)}
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
                  <p className="text-zinc-400 font-semibold">{t(UI.botList.noBots)}</p>
                  <p className="text-zinc-600 text-base mt-1">{t(UI.botList.noBotsHint)}</p>
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
          <div className="flex items-center gap-2 text-zinc-600 text-sm">
            <Flame className="w-3.5 h-3.5 text-amber-700" />
            <span>{t(UI.footer.disclaimer)}</span>
          </div>
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
      </footer>
    </div>
  );
}

// ─── Root Export — wraps everything in LanguageProvider ───────

export default function HomePage() {
  return (
    <LanguageProvider>
      <InnerPage />
    </LanguageProvider>
  );
}
