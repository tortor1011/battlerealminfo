"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Swords,
  Shield,
  Zap,
  RotateCcw,
  Sparkles,
  User,
  Crosshair,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import {
  ALL_UNITS_DATA,
  DAMAGE_MATCHUP,
  getUnitCombatStats,
  calculateEffectiveDamage,
  type UnitData,
  type ArmorType,
} from "@/data/battleRealmsData";
import { UI, DAMAGE_TYPE_NAMES } from "@/data/translations";
import { useLang } from "@/context/LanguageContext";
import { getUnitImagePath } from "@/config/assets";

// ─── Fallback Unit Avatar ────────────────────────────────────

function UnitAvatar({
  unit,
  size = 64,
}: {
  unit: UnitData;
  size?: number;
}) {
  const [imgError, setImgError] = useState(false);
  const clanColors: Record<string, string> = {
    Dragon: "border-red-600/50 bg-red-950/40 text-red-300 shadow-red-950/50",
    Serpent: "border-green-600/50 bg-green-950/40 text-green-300 shadow-green-950/50",
    Lotus: "border-purple-600/50 bg-purple-950/40 text-purple-300 shadow-purple-950/50",
    Wolf: "border-blue-600/50 bg-blue-950/40 text-blue-300 shadow-blue-950/50",
  };

  const imageSrc = getUnitImagePath(unit.id);

  return (
    <div
      className={`relative rounded-2xl border flex items-center justify-center overflow-hidden shrink-0 shadow-lg ${
        clanColors[unit.clan] ?? "border-zinc-700 bg-zinc-900 text-zinc-400"
      }`}
      style={{ width: size, height: size }}
    >
      {!imgError && imageSrc ? (
        <Image
          src={imageSrc}
          alt={unit.name.en}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={`${size}px`}
          onError={() => setImgError(true)}
          unoptimized
        />
      ) : (
        <User style={{ width: size * 0.5, height: size * 0.5, opacity: 0.8 }} />
      )}
    </div>
  );
}

// ─── Multiplier Badge ─────────────────────────────────────────

function MultiplierBadge({
  multiplier,
  isSmall = false,
}: {
  multiplier: number;
  isSmall?: boolean;
}) {
  let badgeStyle = "bg-zinc-800 text-zinc-300 border-zinc-700";
  let label = `${multiplier}×`;

  if (multiplier >= 2.0) {
    badgeStyle = "bg-rose-950/80 text-rose-300 border-rose-600/60 shadow-rose-950/50 font-black";
    label = `${multiplier}× (Crushing)`;
  } else if (multiplier >= 1.5) {
    badgeStyle = "bg-amber-950/80 text-amber-300 border-amber-600/60 shadow-amber-950/50 font-bold";
    label = `${multiplier}× (Strong)`;
  } else if (multiplier <= 0.5) {
    badgeStyle = "bg-blue-950/80 text-blue-300 border-blue-600/60 shadow-blue-950/50 font-bold";
    label = `${multiplier}× (Resisted)`;
  }

  return (
    <span
      className={`inline-flex items-center gap-1 border rounded-lg shadow-sm ${
        isSmall ? "px-2 py-0.5 text-xs font-semibold" : "px-3 py-1 text-sm font-bold"
      } ${badgeStyle}`}
    >
      {label}
    </span>
  );
}

// ─── Main Matchup Calculator Component ───────────────────────

export default function MatchupCalculator() {
  const { t, lang } = useLang();

  // Unit A State (Player)
  const [clanA, setClanA] = useState<string>("Dragon");
  const [unitAId, setUnitAId] = useState<string>("dragon_spearman");
  const [isAMounted, setIsAMounted] = useState<boolean>(false);
  const [isAShaleArmor, setIsAShaleArmor] = useState<boolean>(false);

  // Unit B State (Opponent)
  const [clanB, setClanB] = useState<string>("Wolf");
  const [unitBId, setUnitBId] = useState<string>("wolf_pack_master");
  const [isBMounted, setIsBMounted] = useState<boolean>(false);
  const [isBShaleArmor, setIsBShaleArmor] = useState<boolean>(false);

  // Counter filter clan
  const [counterClanFilter, setCounterClanFilter] = useState<string>("ALL");

  // Simulation animation state
  const [isFighting, setIsFighting] = useState<boolean>(false);
  const [simProgressA, setSimProgressA] = useState<number>(100);
  const [simProgressB, setSimProgressB] = useState<number>(100);

  // Available units per clan
  const unitsA = useMemo(() => ALL_UNITS_DATA.filter((u) => u.clan === clanA), [clanA]);
  const unitsB = useMemo(() => ALL_UNITS_DATA.filter((u) => u.clan === clanB), [clanB]);

  // Selected Unit Objects
  const unitA = useMemo(
    () => ALL_UNITS_DATA.find((u) => u.id === unitAId) || unitsA[0] || ALL_UNITS_DATA[0],
    [unitAId, unitsA]
  );
  const unitB = useMemo(
    () => ALL_UNITS_DATA.find((u) => u.id === unitBId) || unitsB[0] || ALL_UNITS_DATA[1],
    [unitBId, unitsB]
  );

  // Reset unit if clan changes and current unit is not in new clan
  useEffect(() => {
    if (unitA && unitA.clan !== clanA && unitsA.length > 0) {
      setUnitAId(unitsA[0].id);
    }
  }, [clanA, unitA, unitsA]);

  useEffect(() => {
    if (unitB && unitB.clan !== clanB && unitsB.length > 0) {
      setUnitBId(unitsB[0].id);
    }
  }, [clanB, unitB, unitsB]);

  // Stats calculation
  const statsA = useMemo(() => getUnitCombatStats(unitA), [unitA]);
  const statsB = useMemo(() => getUnitCombatStats(unitB), [unitB]);

  // Effective Armors
  const effectiveArmorA: ArmorType = isAMounted ? "Horse" : unitA.armorType;
  const effectiveArmorB: ArmorType = isBMounted ? "Horse" : unitB.armorType;

  // Multipliers & Effective Damage
  const { multiplier: rawMultA, effectiveDmg: effDmgA } = calculateEffectiveDamage(
    unitA.dmgType,
    effectiveArmorB,
    statsA.baseDmg,
    isBShaleArmor && unitB.clan === "Wolf"
  );

  const { multiplier: rawMultB, effectiveDmg: effDmgB } = calculateEffectiveDamage(
    unitB.dmgType,
    effectiveArmorA,
    statsB.baseDmg,
    isAShaleArmor && unitA.clan === "Wolf"
  );

  // Combat Outcome Metrics
  const htkB = Math.max(1, Math.ceil(statsB.hp / effDmgA));
  const ttkB = Number(((htkB - 1) * statsA.attackInterval).toFixed(1));

  const htkA = Math.max(1, Math.ceil(statsA.hp / effDmgB));
  const ttkA = Number(((htkA - 1) * statsB.attackInterval).toFixed(1));

  // Determine winner
  const isAWinner = ttkB <= ttkA;
  const winnerUnit = isAWinner ? unitA : unitB;
  const winnerTime = isAWinner ? ttkB : ttkA;
  const loserDmgDealt = isAWinner
    ? Math.floor((winnerTime / statsB.attackInterval) * effDmgB)
    : Math.floor((winnerTime / statsA.attackInterval) * effDmgA);
  const winnerMaxHp = isAWinner ? statsA.hp : statsB.hp;
  const winnerRemainingHp = Math.max(1, winnerMaxHp - loserDmgDealt);
  const winnerRemainingPct = Math.round((winnerRemainingHp / winnerMaxHp) * 100);

  // Overall Matchup Rating
  const advantageScore = rawMultA - rawMultB;
  let advantageLabel = t(UI.calculator.advantageEven);
  let advantageColor = "text-amber-400 bg-amber-950/40 border-amber-600/40";

  if (rawMultA >= 2.0 && rawMultB <= 1.0) {
    advantageLabel = t(UI.calculator.advantageCrushing);
    advantageColor = "text-emerald-300 bg-emerald-950/60 border-emerald-500/60 shadow-emerald-950/50";
  } else if (advantageScore > 0) {
    advantageLabel = t(UI.calculator.advantageStrong);
    advantageColor = "text-emerald-400 bg-emerald-950/40 border-emerald-600/40";
  } else if (rawMultA <= 0.5 && rawMultB >= 1.5) {
    advantageLabel = t(UI.calculator.advantageCountered);
    advantageColor = "text-rose-400 bg-rose-950/60 border-rose-600/60 shadow-rose-950/50";
  } else if (advantageScore < 0) {
    advantageLabel = t(UI.calculator.advantageDisadvantage);
    advantageColor = "text-rose-300 bg-rose-950/40 border-rose-700/40";
  }

  // Simulation handler
  const handleSimulateDuel = () => {
    setIsFighting(true);
    setSimProgressA(100);
    setSimProgressB(100);

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      const remainingPctB = Math.max(0, Math.round(((htkB - currentStep) / htkB) * 100));
      const remainingPctA = Math.max(0, Math.round(((htkA - currentStep) / htkA) * 100));

      if (isAWinner) {
        setSimProgressB(remainingPctB);
        setSimProgressA(Math.max(winnerRemainingPct, remainingPctA));
        if (currentStep >= htkB) {
          clearInterval(interval);
          setIsFighting(false);
        }
      } else {
        setSimProgressA(remainingPctA);
        setSimProgressB(Math.max(winnerRemainingPct, remainingPctB));
        if (currentStep >= htkA) {
          clearInterval(interval);
          setIsFighting(false);
        }
      }
    }, 280);
  };

  const handleResetDuel = () => {
    setIsFighting(false);
    setSimProgressA(100);
    setSimProgressB(100);
  };

  // ─── Smart Counter Recommendations ─────────────────────────
  const smartCounters = useMemo(() => {
    const candidates = ALL_UNITS_DATA.filter((u) => {
      if (u.id === unitB.id) return false;
      if (counterClanFilter !== "ALL" && u.clan !== counterClanFilter) return false;
      return true;
    });

    const scored = candidates.map((unit) => {
      const uStats = getUnitCombatStats(unit);
      const multiVsB = DAMAGE_MATCHUP[unit.dmgType]?.[effectiveArmorB] ?? 1.0;
      const multiFromB = DAMAGE_MATCHUP[unitB.dmgType]?.[unit.armorType] ?? 1.0;

      // Score formula: high damage to target + high defense from target
      const score = multiVsB * 40 - multiFromB * 25 + uStats.baseDmg * 0.2;
      let reasonEn = `Deals ${multiVsB}× ${unit.dmgType} damage vs ${effectiveArmorB} armor`;
      let reasonTh = `ทำความเสียหาย ${multiVsB}× (${DAMAGE_TYPE_NAMES[unit.dmgType]?.[lang] || unit.dmgType}) เจาะเกราะ ${effectiveArmorB}`;

      if (multiVsB >= 2.0) {
        reasonEn += ` (Double Damage Crushing Weakness!)`;
        reasonTh += ` (ดาเมจคูณ 2 เท่า เจาะจุดตาย!)`;
      }
      if (multiFromB <= 0.5) {
        reasonEn += ` and resists enemy ${unitB.dmgType} (takes only 0.5× DMG).`;
        reasonTh += ` พร้อมทั้งทนทานต่อดาเมจของศัตรู (รับดาเมจเพียง 0.5×)`;
      }

      return {
        unit,
        stats: uStats,
        multiVsB,
        multiFromB,
        score,
        reason: { en: reasonEn, th: reasonTh },
      };
    });

    // Sort by best counter score
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 3);
  }, [unitB, effectiveArmorB, counterClanFilter, lang]);

  return (
    <div className="flex flex-col gap-10">
      {/* ─── Header ─────────────────────────────────────────── */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-400 shadow-md">
            <Swords className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t(UI.calculator.title)}
            </h1>
            <p className="text-zinc-400 text-base mt-1">
              {t(UI.calculator.subtitle)}
            </p>
          </div>
        </div>
      </div>

      {/* ─── Dual Unit Selection ─────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
        {/* VS Badge Center */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-14 h-14 rounded-full bg-zinc-950 border-2 border-amber-500/60 shadow-xl shadow-amber-950/40 text-amber-300 font-black text-lg">
          VS
        </div>

        {/* ─── Unit A (Player) ─────────────────────────────── */}
        <div className="flex flex-col gap-5 p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <span className="text-sm font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Shield className="w-4 h-4" /> {t(UI.calculator.unitA)}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 font-bold border border-zinc-700">
              {unitA.clan} Clan
            </span>
          </div>

          {/* Clan & Unit Pickers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400">
                {t(UI.calculator.selectClan)}
              </label>
              <select
                value={clanA}
                onChange={(e) => setClanA(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-zinc-200 font-semibold focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="Dragon">Dragon Clan</option>
                <option value="Serpent">Serpent Clan</option>
                <option value="Lotus">Lotus Clan</option>
                <option value="Wolf">Wolf Clan</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400">
                {t(UI.calculator.selectUnit)}
              </label>
              <select
                value={unitAId}
                onChange={(e) => setUnitAId(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-zinc-200 font-semibold focus:outline-none focus:border-amber-500 transition-colors"
              >
                {unitsA.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name[lang]} ({u.tier})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Unit A Profile Card */}
          <div className="flex items-center gap-4 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
            <UnitAvatar unit={unitA} size={72} />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white truncate">
                  {unitA.name[lang]}
                </span>
              </div>
              <span className="text-xs text-zinc-400 font-medium">{unitA.role[lang]}</span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-semibold border border-zinc-700">
                  {t(UI.calculator.dmgTypeLabel)}{" "}
                  <strong className="text-amber-400 font-bold">{unitA.dmgType}</strong>
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-semibold border border-zinc-700">
                  {t(UI.calculator.armorTypeLabel)}{" "}
                  <strong className="text-cyan-400 font-bold">{effectiveArmorA}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Modifiers (Horse / Shale Armor) */}
          <div className="flex flex-wrap gap-3 pt-2">
            <label className="flex items-center gap-2 cursor-pointer bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 transition-all">
              <input
                type="checkbox"
                checked={isAMounted}
                onChange={(e) => setIsAMounted(e.target.checked)}
                className="w-4 h-4 rounded text-amber-500 accent-amber-500 bg-zinc-900 border-zinc-700"
              />
              <span>🐎 {t(UI.calculator.onHorseToggle)}</span>
            </label>

            {unitA.clan === "Wolf" && (
              <label className="flex items-center gap-2 cursor-pointer bg-blue-950/40 border border-blue-800/60 hover:border-blue-700 px-3 py-2 rounded-xl text-xs font-bold text-blue-300 transition-all">
                <input
                  type="checkbox"
                  checked={isAShaleArmor}
                  onChange={(e) => setIsAShaleArmor(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-500 accent-blue-500 bg-zinc-900 border-blue-700"
                />
                <span>🛡️ {t(UI.calculator.shaleArmorToggle)}</span>
              </label>
            )}
          </div>
        </div>

        {/* ─── Unit B (Opponent) ───────────────────────────── */}
        <div className="flex flex-col gap-5 p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <span className="text-sm font-extrabold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <Crosshair className="w-4 h-4" /> {t(UI.calculator.unitB)}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 font-bold border border-zinc-700">
              {unitB.clan} Clan
            </span>
          </div>

          {/* Clan & Unit Pickers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400">
                {t(UI.calculator.selectClan)}
              </label>
              <select
                value={clanB}
                onChange={(e) => setClanB(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-zinc-200 font-semibold focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="Dragon">Dragon Clan</option>
                <option value="Serpent">Serpent Clan</option>
                <option value="Lotus">Lotus Clan</option>
                <option value="Wolf">Wolf Clan</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400">
                {t(UI.calculator.selectUnit)}
              </label>
              <select
                value={unitBId}
                onChange={(e) => setUnitBId(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-zinc-200 font-semibold focus:outline-none focus:border-amber-500 transition-colors"
              >
                {unitsB.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name[lang]} ({u.tier})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Unit B Profile Card */}
          <div className="flex items-center gap-4 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
            <UnitAvatar unit={unitB} size={72} />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white truncate">
                  {unitB.name[lang]}
                </span>
              </div>
              <span className="text-xs text-zinc-400 font-medium">{unitB.role[lang]}</span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-semibold border border-zinc-700">
                  {t(UI.calculator.dmgTypeLabel)}{" "}
                  <strong className="text-amber-400 font-bold">{unitB.dmgType}</strong>
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300 font-semibold border border-zinc-700">
                  {t(UI.calculator.armorTypeLabel)}{" "}
                  <strong className="text-cyan-400 font-bold">{effectiveArmorB}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Modifiers (Horse / Shale Armor) */}
          <div className="flex flex-wrap gap-3 pt-2">
            <label className="flex items-center gap-2 cursor-pointer bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 transition-all">
              <input
                type="checkbox"
                checked={isBMounted}
                onChange={(e) => setIsBMounted(e.target.checked)}
                className="w-4 h-4 rounded text-rose-500 accent-rose-500 bg-zinc-900 border-zinc-700"
              />
              <span>🐎 {t(UI.calculator.onHorseToggle)}</span>
            </label>

            {unitB.clan === "Wolf" && (
              <label className="flex items-center gap-2 cursor-pointer bg-blue-950/40 border border-blue-800/60 hover:border-blue-700 px-3 py-2 rounded-xl text-xs font-bold text-blue-300 transition-all">
                <input
                  type="checkbox"
                  checked={isBShaleArmor}
                  onChange={(e) => setIsBShaleArmor(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-500 accent-blue-500 bg-zinc-900 border-blue-700"
                />
                <span>🛡️ {t(UI.calculator.shaleArmorToggle)}</span>
              </label>
            )}
          </div>
        </div>
      </div>

      {/* ─── Advantage Gauge ─────────────────────────────────── */}
      <div
        className={`flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl border shadow-lg gap-4 ${advantageColor}`}
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 shrink-0" />
          <div className="flex flex-col">
            <span className="text-xs uppercase font-extrabold tracking-widest opacity-80">
              Matchup Rating (Unit A vs Unit B)
            </span>
            <span className="text-lg sm:text-xl font-black">{advantageLabel}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold shrink-0">
          <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
            <span>{unitA.name[lang]}:</span>
            <span className="text-amber-300 font-extrabold">{rawMultA}× DMG</span>
          </div>
          <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
            <span>{unitB.name[lang]}:</span>
            <span className="text-rose-300 font-extrabold">{rawMultB}× DMG</span>
          </div>
        </div>
      </div>

      {/* ─── Detailed Combat Simulation & Breakdown ──────────── */}
      <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {t(UI.calculator.winnerVerdict)}
              </h2>
              <p className="text-xs text-zinc-400">
                1v1 theoretical engagement based on exact HP, Attack Interval, and Damage Type multipliers
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateDuel}
              disabled={isFighting}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm shadow-lg transition-all ${
                isFighting
                  ? "bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-amber-900/30 active:scale-95"
              }`}
            >
              <Swords className="w-4 h-4" />
              {isFighting ? t(UI.calculator.simulating) : t(UI.calculator.simulateDuel)}
            </button>
            <button
              onClick={handleResetDuel}
              className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors"
              title={t(UI.calculator.resetDuel)}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Health Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Unit A Health Bar */}
          <div className="flex flex-col gap-2 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/80">
            <div className="flex items-center justify-between text-sm font-bold">
              <span className="text-amber-300 flex items-center gap-2 truncate">
                {unitA.name[lang]}
              </span>
              <span className="text-zinc-400 tabular-nums">
                {Math.round((statsA.hp * simProgressA) / 100)} / {statsA.hp} HP ({simProgressA}%)
              </span>
            </div>
            <div className="h-4 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 p-0.5">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  simProgressA > 50
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-400"
                    : simProgressA > 20
                    ? "bg-gradient-to-r from-amber-600 to-yellow-400"
                    : "bg-gradient-to-r from-rose-700 to-rose-500"
                }`}
                style={{ width: `${simProgressA}%` }}
              />
            </div>
          </div>

          {/* Unit B Health Bar */}
          <div className="flex flex-col gap-2 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/80">
            <div className="flex items-center justify-between text-sm font-bold">
              <span className="text-rose-300 flex items-center gap-2 truncate">
                {unitB.name[lang]}
              </span>
              <span className="text-zinc-400 tabular-nums">
                {Math.round((statsB.hp * simProgressB) / 100)} / {statsB.hp} HP ({simProgressB}%)
              </span>
            </div>
            <div className="h-4 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 p-0.5">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  simProgressB > 50
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-400"
                    : simProgressB > 20
                    ? "bg-gradient-to-r from-amber-600 to-yellow-400"
                    : "bg-gradient-to-r from-rose-700 to-rose-500"
                }`}
                style={{ width: `${simProgressB}%` }}
              />
            </div>
          </div>
        </div>

        {/* Detailed Metrics Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Unit A Metrics */}
          <div className="flex flex-col gap-3 bg-zinc-950/40 p-5 rounded-2xl border border-zinc-800/60">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-sm font-bold text-amber-300">
                {unitA.name[lang]} {t(UI.calculator.dmgTypeLabel)}
              </span>
              <MultiplierBadge multiplier={rawMultA} />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400 font-semibold">{t(UI.calculator.effectiveDmg)}</span>
                <span className="text-base font-extrabold text-white">
                  {effDmgA}{" "}
                  <span className="text-xs font-normal text-zinc-500">
                    (Base: {statsA.baseDmg})
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400 font-semibold">{t(UI.calculator.hitsToKill)}</span>
                <span className="text-base font-extrabold text-amber-300">
                  {htkB} <span className="text-xs font-normal text-zinc-500">hits</span>
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400 font-semibold">{t(UI.calculator.timeToKill)}</span>
                <span className="text-base font-extrabold text-emerald-400">
                  {ttkB}s
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400 font-semibold">Attack Speed</span>
                <span className="text-base font-extrabold text-zinc-300">
                  {statsA.attackInterval}s / atk
                </span>
              </div>
            </div>
          </div>

          {/* Unit B Metrics */}
          <div className="flex flex-col gap-3 bg-zinc-950/40 p-5 rounded-2xl border border-zinc-800/60">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-sm font-bold text-rose-300">
                {unitB.name[lang]} {t(UI.calculator.dmgTypeLabel)}
              </span>
              <MultiplierBadge multiplier={rawMultB} />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400 font-semibold">{t(UI.calculator.effectiveDmg)}</span>
                <span className="text-base font-extrabold text-white">
                  {effDmgB}{" "}
                  <span className="text-xs font-normal text-zinc-500">
                    (Base: {statsB.baseDmg})
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400 font-semibold">{t(UI.calculator.hitsToKill)}</span>
                <span className="text-base font-extrabold text-rose-300">
                  {htkA} <span className="text-xs font-normal text-zinc-500">hits</span>
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400 font-semibold">{t(UI.calculator.timeToKill)}</span>
                <span className="text-base font-extrabold text-emerald-400">
                  {ttkA}s
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-zinc-400 font-semibold">Attack Speed</span>
                <span className="text-base font-extrabold text-zinc-300">
                  {statsB.attackInterval}s / atk
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Verdict Box */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-zinc-950 border border-amber-500/30 shadow-xl gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                {t(UI.calculator.winnerLabel)}
              </span>
              <div className="text-lg font-black text-white flex items-center gap-2">
                <span className={isAWinner ? "text-amber-300" : "text-rose-300"}>
                  {winnerUnit.name[lang]}
                </span>
                <span className="text-sm font-semibold text-zinc-400">
                  ({t(UI.calculator.winnerRemaining)} ~{winnerRemainingPct}% HP)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-zinc-900/90 px-4 py-2 rounded-xl border border-zinc-800">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>
              {t(UI.calculator.timeSpent)} <strong className="text-white">{winnerTime} {t(UI.calculator.seconds)}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* ─── Smart Counter Recommendations ──────────────────── */}
      <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              {t(UI.calculator.smartCounters)}
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              {t(UI.calculator.countersFor)}{" "}
              <strong className="text-rose-300 font-bold">{unitB.name[lang]}</strong> (
              {effectiveArmorB} Armor)
            </p>
          </div>

          {/* Clan Filter for Counters */}
          <div className="flex items-center gap-2 bg-zinc-950 p-1.5 rounded-xl border border-zinc-800">
            {["ALL", "Dragon", "Serpent", "Lotus", "Wolf"].map((c) => (
              <button
                key={c}
                onClick={() => setCounterClanFilter(c)}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  counterClanFilter === c
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {c === "ALL" ? t(UI.calculator.allClans) : c}
              </button>
            ))}
          </div>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {smartCounters.map(({ unit, multiVsB, multiFromB, reason }, idx) => (
            <div
              key={unit.id}
              className="flex flex-col gap-4 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-200 shadow-lg relative group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs font-extrabold">
                  #{idx + 1} Best Counter
                </div>
                <span className="text-xs text-zinc-500 font-bold">{unit.clan}</span>
              </div>

              <div className="flex items-center gap-3">
                <UnitAvatar unit={unit} size={54} />
                <div className="flex flex-col min-w-0">
                  <span className="text-base font-bold text-white truncate">
                    {unit.name[lang]}
                  </span>
                  <span className="text-xs text-zinc-400 truncate">{unit.role[lang]}</span>
                </div>
              </div>

              {/* Matchup Badges */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex-1 flex flex-col gap-1 p-2 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 uppercase font-bold">
                    DMG vs Enemy
                  </span>
                  <MultiplierBadge multiplier={multiVsB} isSmall />
                </div>

                <div className="flex-1 flex flex-col gap-1 p-2 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[10px] text-zinc-500 uppercase font-bold">
                    DMG Taken
                  </span>
                  <MultiplierBadge multiplier={multiFromB} isSmall />
                </div>
              </div>

              {/* Rationale explanation */}
              <div className="text-xs text-zinc-300 bg-zinc-900/40 p-3 rounded-xl border border-zinc-800/60 leading-relaxed">
                <strong className="text-amber-400 block mb-1">
                  {t(UI.calculator.whyGood)}
                </strong>
                {reason[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
