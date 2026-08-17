"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sword,
  Shield,
  Wrench,
  BookOpen,
  AlertTriangle,
  Zap,
  Heart,
  Building2,
  Sparkles,
  User,
} from "lucide-react";
import type { ClanData, DamageType, ArmorType, UnitData } from "@/data/battleRealmsData";
import {
  CLAN_DATA,
  DAMAGE_MATCHUP,
  ARMOR_TYPES,
  DAMAGE_TYPES,
} from "@/data/battleRealmsData";
import { UI, DAMAGE_TYPE_NAMES, ARMOR_TYPE_NAMES } from "@/data/translations";
import { useLang } from "@/context/LanguageContext";
import {
  getUnitImagePath,
  getBuildingImagePath,
  getGearImagePath,
} from "@/config/assets";

// ─── Fallback Icon Components ─────────────────────────────────

function UnitFallbackIcon({ clan, size = 64 }: { clan: string; size?: number }) {
  const colorMap: Record<string, string> = {
    Dragon: "bg-red-950/80 text-red-300 border-red-700/60 shadow-red-950/40",
    Serpent: "bg-green-950/80 text-green-300 border-green-700/60 shadow-green-950/40",
    Lotus: "bg-purple-950/80 text-purple-300 border-purple-700/60 shadow-purple-950/40",
    Wolf: "bg-blue-950/80 text-blue-300 border-blue-700/60 shadow-blue-950/40",
  };
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border shadow-md shrink-0 ${
        colorMap[clan] ?? "bg-zinc-900 text-zinc-400 border-zinc-700"
      }`}
      style={{ width: size, height: size }}
    >
      <User style={{ width: size * 0.5, height: size * 0.5, opacity: 0.85 }} />
    </div>
  );
}

function BuildingFallbackIcon({ size = 28 }: { size?: number }) {
  return (
    <span
      className="flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 shrink-0 shadow-sm"
      style={{ width: size, height: size }}
    >
      <Building2 style={{ width: size * 0.6, height: size * 0.6 }} />
    </span>
  );
}

function GearFallbackIcon({ size = 36 }: { size?: number }) {
  return (
    <span
      className="flex items-center justify-center rounded-xl bg-amber-950/60 border border-amber-600/50 text-amber-400 shrink-0 shadow-sm"
      style={{ width: size, height: size }}
    >
      <Sparkles style={{ width: size * 0.55, height: size * 0.55 }} />
    </span>
  );
}

// ─── Smart Image Components with Uniform & Clear Sizes ────────

function UnitAvatar({ unitId, unitName, clan, size = 64 }: { unitId: string; unitName: string; clan: string; size?: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <UnitFallbackIcon clan={clan} size={size} />;

  const borderColors: Record<string, string> = {
    Dragon: "border-red-700/60 shadow-red-950/30",
    Serpent: "border-green-700/60 shadow-green-950/30",
    Lotus: "border-purple-700/60 shadow-purple-950/30",
    Wolf: "border-blue-700/60 shadow-blue-950/30",
  };

  return (
    <div
      className={`relative rounded-2xl border ${borderColors[clan] ?? "border-zinc-700"} overflow-hidden shrink-0 bg-zinc-950 shadow-md flex items-center justify-center p-1`}
      style={{ width: size, height: size }}
    >
      <Image
        src={getUnitImagePath(unitId)}
        alt={unitName}
        fill
        sizes={`${size}px`}
        className="object-contain p-0.5"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function BuildingIcon({ buildingNameEn, size = 28 }: { buildingNameEn: string; size?: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <BuildingFallbackIcon size={size} />;

  return (
    <span
      className="relative rounded-xl overflow-hidden shrink-0 bg-zinc-950 border border-zinc-700/90 shadow-sm flex items-center justify-center"
      style={{ width: size, height: size, display: "inline-flex" }}
    >
      <Image
        src={getBuildingImagePath(buildingNameEn)}
        alt={buildingNameEn}
        fill
        sizes={`${size}px`}
        className="object-contain p-0.5"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

function GearIcon({ gearNameEn, size = 36 }: { gearNameEn: string; size?: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <GearFallbackIcon size={size} />;

  return (
    <span
      className="relative rounded-xl overflow-hidden shrink-0 bg-zinc-950 border border-amber-500/40 shadow-sm flex items-center justify-center"
      style={{ width: size, height: size, display: "inline-flex" }}
    >
      <Image
        src={getGearImagePath(gearNameEn)}
        alt={gearNameEn}
        fill
        sizes={`${size}px`}
        className="object-contain p-0.5"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

// ─── Helpers ─────────────────────────────────────────────────

function effectivenessLabel(val: number) {
  if (val >= 2) return { label: "2×", cls: "bg-emerald-500/20 text-emerald-300 font-bold" };
  if (val >= 1.5) return { label: "1.5×", cls: "bg-green-600/20 text-green-300 font-semibold" };
  if (val === 1) return { label: "1×", cls: "bg-zinc-700/60 text-zinc-400" };
  return { label: "0.5×", cls: "bg-rose-500/20 text-rose-400 font-semibold" };
}

function DamageTypePill({ type }: { type: DamageType }) {
  const { lang } = useLang();
  const label = DAMAGE_TYPE_NAMES[type]?.[lang] ?? type;
  const map: Record<DamageType, string> = {
    Cutting: "bg-amber-500/20 text-amber-300 border-amber-600/40",
    Piercing: "bg-sky-500/20 text-sky-300 border-sky-600/40",
    Blunt: "bg-stone-500/20 text-stone-300 border-stone-600/40",
    Magic: "bg-purple-500/20 text-purple-300 border-purple-600/40",
    Fire: "bg-orange-500/20 text-orange-300 border-orange-600/40",
    Explosive: "bg-red-500/20 text-red-300 border-red-600/40",
  };
  return (
    <span className={`text-sm font-medium border rounded-full px-2.5 py-0.5 ${map[type]}`}>
      {label}
    </span>
  );
}

function ArmorTypePill({ type }: { type: ArmorType }) {
  const { lang } = useLang();
  const label = ARMOR_TYPE_NAMES[type]?.[lang] ?? type;
  const map: Record<ArmorType, string> = {
    Unarmored: "bg-zinc-600/30 text-zinc-400 border-zinc-600/40",
    Light: "bg-lime-600/20 text-lime-300 border-lime-600/40",
    Medium: "bg-yellow-600/20 text-yellow-300 border-yellow-600/40",
    Heavy: "bg-slate-600/20 text-slate-300 border-slate-600/40",
    Building: "bg-stone-600/20 text-stone-300 border-stone-600/40",
    Horse: "bg-orange-900/30 text-orange-200 border-orange-700/40",
  };
  return (
    <span className={`text-sm font-medium border rounded-full px-2.5 py-0.5 ${map[type] ?? "bg-zinc-700/40 text-zinc-400 border-zinc-600/40"}`}>
      {label}
    </span>
  );
}

// ─── Clan Tab Button ─────────────────────────────────────────

function ClanTab({ clan, active, onClick }: { clan: ClanData; active: boolean; onClick: () => void }) {
  const activeStyle =
    clan.id === "dragon"
      ? "bg-red-800/40 border-red-600 text-red-300 shadow-md shadow-red-950/40"
      : clan.id === "serpent"
      ? "bg-green-800/40 border-green-600 text-green-300 shadow-md shadow-green-950/40"
      : clan.id === "lotus"
      ? "bg-purple-800/40 border-purple-600 text-purple-300 shadow-md shadow-purple-950/40"
      : "bg-blue-800/40 border-blue-600 text-blue-300 shadow-md shadow-blue-950/40";
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-xl text-base font-bold border transition-all duration-200 ${
        active
          ? activeStyle
          : "bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
      }`}
    >
      {clan.name}
      <span className="ml-2 text-xs opacity-60 font-normal tabular-nums">
        ({clan.units.length})
      </span>
    </button>
  );
}

// ─── Unit Card ───────────────────────────────────────────────

function UnitCard({ unit }: { unit: UnitData }) {
  const { t } = useLang();

  const isAntiCavalry =
    unit.role.en.toLowerCase().includes("anti-cavalry") ||
    unit.id.includes("spearman") ||
    unit.description.en.toLowerCase().includes("cavalry counter");

  const isHealer =
    unit.role.en.toLowerCase().includes("healer") ||
    unit.id.includes("geisha");

  // Accent line by clan
  const clanAccent: Record<string, string> = {
    Dragon: "from-red-600 via-orange-500 to-amber-500",
    Serpent: "from-green-600 via-teal-500 to-emerald-400",
    Lotus: "from-purple-600 via-violet-500 to-fuchsia-400",
    Wolf: "from-blue-600 via-sky-500 to-cyan-400",
  };

  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-200 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 flex flex-col justify-between">
      <div>
        {/* Top accent bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${clanAccent[unit.clan] ?? "from-zinc-600 to-zinc-400"}`} />

        {/* ── Header with 64px Unit Avatar ─────────────────── */}
        <div className="flex items-center gap-3.5 p-4 pb-3 border-b border-zinc-800/80">
          {/* Unit Avatar */}
          <UnitAvatar unitId={unit.id} unitName={unit.name.en} clan={unit.clan} size={64} />

          {/* Name, tier, badges */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-xl font-bold text-zinc-100 leading-tight">{t(unit.name)}</h4>
              {isAntiCavalry && (
                <span className="text-xs font-bold bg-sky-900/50 text-sky-300 border border-sky-700/50 rounded-full px-2.5 py-0.5 shrink-0">
                  {t(UI.unitTable.antiCavalry)}
                </span>
              )}
              {isHealer && (
                <span className="text-xs font-bold bg-rose-900/50 text-rose-300 border border-rose-700/50 rounded-full px-2.5 py-0.5 flex items-center gap-1 shrink-0">
                  <Heart className="w-3 h-3" />
                  {t(UI.unitTable.healerTag)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="text-sm text-amber-400 font-semibold">{unit.tier}</span>
              <span className="text-zinc-700">·</span>
              <span className="text-sm text-zinc-400">{t(unit.role)}</span>
            </div>
          </div>

          {/* Damage / Armor pills */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <DamageTypePill type={unit.dmgType} />
            <ArmorTypePill type={unit.armorType} />
          </div>
        </div>

        <div className="p-4 flex flex-col gap-4">
          {/* ── Training Path (Temporarily disabled due to inaccuracies) ──
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                {t(UI.unitTable.trainingPath)}
              </span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {unit.trainingPath.map((b, i) => (
                <React.Fragment key={i}>
                  <span className="flex items-center gap-2 text-sm font-semibold text-zinc-200 bg-zinc-800/90 border border-zinc-700 rounded-xl px-3 py-1.5 shadow-sm">
                    <BuildingIcon buildingNameEn={b.en} size={28} />
                    <span>{t(b)}</span>
                  </span>
                  {i < unit.trainingPath.length - 1 && (
                    <span className="text-zinc-500 text-base font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          ── */}

          {/* ── Battle Gears with 36px Skill Icons ────────────── */}
          {unit.gears.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                  {t(UI.unitTable.battleGear)}
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {unit.gears.map((gear, i) => (
                  <div
                    key={i}
                    className="bg-amber-950/25 border border-amber-800/40 rounded-xl p-3.5 hover:bg-amber-950/40 transition-colors"
                  >
                    {/* Gear name row — 36px icon + name + type badge */}
                    <div className="flex items-center gap-3 mb-2">
                      <GearIcon gearNameEn={gear.name.en} size={36} />
                      <div className="flex-1 min-w-0">
                        <span className="text-base font-bold text-amber-300 leading-tight block">
                          {t(gear.name)}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-semibold border rounded-full px-2.5 py-0.5 shrink-0 ${
                          gear.type === "Offensive"
                            ? "border-red-700/50 text-red-400 bg-red-950/40"
                            : gear.type === "Defensive"
                            ? "border-blue-700/50 text-blue-400 bg-blue-950/40"
                            : "border-emerald-700/50 text-emerald-400 bg-emerald-950/40"
                        }`}
                      >
                        {gear.type}
                      </span>
                    </div>

                    {/* Effect description */}
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {t(gear.effect)}
                    </p>

                    {/* Requires / Train Location (Temporarily disabled due to inaccuracies) ──
                    <div className="flex items-center gap-2 pt-2 border-t border-amber-800/30">
                      <BuildingIcon buildingNameEn={gear.building.en} size={24} />
                      <span className="text-xs text-zinc-400">
                        {t(UI.unitTable.requires)}{" "}
                        <span className="text-zinc-200 font-semibold">
                          {t(gear.building)}
                        </span>
                      </span>
                    </div>
                    ── */}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Description footer ───────────────────────────────── */}
      <div className="p-4 pt-0">
        <div className="flex items-start gap-2.5 bg-zinc-800/50 rounded-xl p-3 border border-zinc-800">
          <BookOpen className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
          <p className="text-sm text-zinc-300 leading-relaxed">{t(unit.description)}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Damage Matchup Table ────────────────────────────────────

function DamageMatchupTable() {
  const { lang } = useLang();
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="bg-zinc-800 text-zinc-400 font-semibold text-left px-3 py-2.5 rounded-tl-xl whitespace-nowrap border border-zinc-700">
              {UI.unitTable.dmgHeader[lang]}
            </th>
            {ARMOR_TYPES.map((a) => (
              <th
                key={a}
                className="bg-zinc-800 text-zinc-400 font-semibold px-3 py-2.5 border border-zinc-700 text-center whitespace-nowrap"
              >
                {ARMOR_TYPE_NAMES[a]?.[lang] ?? a}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DAMAGE_TYPES.map((dmg) => (
            <tr key={dmg} className="group">
              <td className="bg-zinc-800/50 text-zinc-300 font-semibold px-3 py-2 border border-zinc-700 whitespace-nowrap group-hover:bg-zinc-700/40 transition-colors">
                <span
                  className={`text-xs font-medium border rounded-full px-2 py-0.5 ${
                    dmg === "Cutting"
                      ? "bg-amber-500/20 text-amber-300 border-amber-600/40"
                      : dmg === "Piercing"
                      ? "bg-sky-500/20 text-sky-300 border-sky-600/40"
                      : dmg === "Blunt"
                      ? "bg-stone-500/20 text-stone-300 border-stone-600/40"
                      : dmg === "Magic"
                      ? "bg-purple-500/20 text-purple-300 border-purple-600/40"
                      : dmg === "Fire"
                      ? "bg-orange-500/20 text-orange-300 border-orange-600/40"
                      : "bg-red-500/20 text-red-300 border-red-600/40"
                  }`}
                >
                  {DAMAGE_TYPE_NAMES[dmg]?.[lang] ?? dmg}
                </span>
              </td>
              {ARMOR_TYPES.map((armor) => {
                const val = DAMAGE_MATCHUP[dmg][armor] ?? 1;
                const { label, cls } = effectivenessLabel(val);
                return (
                  <td
                    key={armor}
                    className={`px-3 py-2 border border-zinc-700/60 text-center ${cls} group-hover:opacity-90 transition-all`}
                  >
                    {label}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main UnitTable ──────────────────────────────────────────

export default function UnitTable() {
  const { t, lang } = useLang();
  const [activeClanId, setActiveClanId] = useState<"dragon" | "serpent" | "lotus" | "wolf">(
    "dragon"
  );
  const activeClan = CLAN_DATA.find((c) => c.id === activeClanId) || CLAN_DATA[0];

  return (
    <div className="flex flex-col gap-8">
      {/* Clan Switcher */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-zinc-200">{t(UI.unitTable.selectClan)}</h2>
        <div className="flex flex-wrap gap-2.5">
          {CLAN_DATA.map((clan) => (
            <ClanTab
              key={clan.id}
              clan={clan}
              active={activeClanId === clan.id}
              onClick={() => setActiveClanId(clan.id)}
            />
          ))}
        </div>
      </div>

      {/* Clan Lore Banner */}
      <div className={`bg-gradient-to-r ${activeClan.color} rounded-2xl p-5 border shadow-lg`}>
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <h3 className="text-xl font-bold text-zinc-100">{activeClan.name}</h3>
          <span className="text-xs bg-black/40 border border-white/10 px-2.5 py-1 rounded-full text-zinc-300 font-semibold tabular-nums">
            {activeClan.units.length} Units
          </span>
        </div>
        <p className="text-base text-zinc-300 leading-relaxed">{t(activeClan.lore)}</p>
      </div>

      {/* Unit Grid */}
      {activeClan.units.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeClan.units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 gap-4 bg-zinc-900 border border-zinc-800 border-dashed rounded-2xl">
          <AlertTriangle className="w-8 h-8 text-zinc-600" />
          <div className="text-center">
            <p className="text-zinc-400 font-semibold">{t(UI.unitTable.comingSoon)}</p>
            <p className="text-zinc-600 text-base mt-1">{t(UI.unitTable.comingSoonSub)}</p>
          </div>
        </div>
      )}

      {/* Damage Matchup Table */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-zinc-200">
              {t(UI.unitTable.damageMatchupTitle)}
            </h3>
          </div>
          <p className="text-sm text-zinc-500 ml-7">{t(UI.unitTable.damageMatchupDesc)}</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-1">
          <DamageMatchupTable />
        </div>
        <div className="flex flex-wrap gap-3">
          {(
            [
              {
                key: "legendHighlyEff" as const,
                cls: "bg-emerald-500/20 text-emerald-300 border-emerald-600/30",
              },
              {
                key: "legendStrong" as const,
                cls: "bg-green-600/20 text-green-300 border-green-600/30",
              },
              {
                key: "legendNormal" as const,
                cls: "bg-zinc-700/40 text-zinc-400 border-zinc-600/30",
              },
              {
                key: "legendWeak" as const,
                cls: "bg-rose-500/20 text-rose-400 border-rose-600/30",
              },
            ] as const
          ).map((item) => (
            <span
              key={item.key}
              className={`text-sm font-medium border rounded-full px-3 py-1 ${item.cls}`}
            >
              {UI.unitTable[item.key][lang]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
