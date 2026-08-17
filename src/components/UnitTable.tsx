"use client";

import React, { useState } from "react";
import { Sword, Shield, Wrench, BookOpen, AlertTriangle, Zap, Heart } from "lucide-react";
import type { ClanData, DamageType, ArmorType } from "@/data/battleRealmsData";
import {
  CLAN_DATA,
  DAMAGE_MATCHUP,
  ARMOR_TYPES,
  DAMAGE_TYPES,
} from "@/data/battleRealmsData";

// ─── Helpers ─────────────────────────────────────────────────

function effectivenessLabel(val: number) {
  if (val >= 2) return { label: "2×", cls: "bg-emerald-500/20 text-emerald-300 font-bold" };
  if (val >= 1.5) return { label: "1.5×", cls: "bg-green-600/20 text-green-300 font-semibold" };
  if (val === 1) return { label: "1×", cls: "bg-zinc-700/60 text-zinc-400" };
  return { label: "0.5×", cls: "bg-rose-500/20 text-rose-400 font-semibold" };
}

function DamageTypePill({ type }: { type: DamageType }) {
  const map: Record<DamageType, string> = {
    Cutting: "bg-amber-500/20 text-amber-300 border-amber-600/40",
    Piercing: "bg-sky-500/20 text-sky-300 border-sky-600/40",
    Blunt: "bg-stone-500/20 text-stone-300 border-stone-600/40",
    Magic: "bg-purple-500/20 text-purple-300 border-purple-600/40",
    Fire: "bg-orange-500/20 text-orange-300 border-orange-600/40",
    Explosive: "bg-red-500/20 text-red-300 border-red-600/40",
  };
  return (
    <span className={`text-[10px] font-medium border rounded-full px-2 py-0.5 ${map[type]}`}>
      {type}
    </span>
  );
}

function ArmorTypePill({ type }: { type: ArmorType }) {
  const map: Record<ArmorType, string> = {
    Unarmored: "bg-zinc-600/30 text-zinc-400 border-zinc-600/40",
    Light: "bg-lime-600/20 text-lime-300 border-lime-600/40",
    Medium: "bg-yellow-600/20 text-yellow-300 border-yellow-600/40",
    Heavy: "bg-slate-600/20 text-slate-300 border-slate-600/40",
    Building: "bg-stone-600/20 text-stone-300 border-stone-600/40",
    Horse: "bg-brown-600/20 text-orange-200 border-orange-700/40",
  };
  return (
    <span className={`text-[10px] font-medium border rounded-full px-2 py-0.5 ${map[type] ?? "bg-zinc-700/40 text-zinc-400 border-zinc-600/40"}`}>
      {type}
    </span>
  );
}

// ─── Clan Tab Button ─────────────────────────────────────────

function ClanTab({
  clan,
  active,
  onClick,
}: {
  clan: ClanData;
  active: boolean;
  onClick: () => void;
}) {
  const activeStyle =
    clan.id === "dragon"
      ? "bg-red-800/40 border-red-600 text-red-300"
      : clan.id === "serpent"
      ? "bg-green-800/40 border-green-600 text-green-300"
      : clan.id === "lotus"
      ? "bg-purple-800/40 border-purple-600 text-purple-300"
      : "bg-blue-800/40 border-blue-600 text-blue-300";

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 ${
        active
          ? activeStyle
          : "bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
      }`}
    >
      {clan.name}
    </button>
  );
}

// ─── Unit Card ───────────────────────────────────────────────

function UnitCard({ unit }: { unit: ClanData["units"][number] }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-200 hover:shadow-lg hover:shadow-black/30">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-4 pb-3 border-b border-zinc-800/80">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-bold text-zinc-100">{unit.name}</h4>
            {unit.isAntiCavalry && (
              <span className="text-[10px] font-bold bg-sky-900/50 text-sky-300 border border-sky-700/50 rounded-full px-2 py-0.5">
                Anti-Cavalry
              </span>
            )}
            {unit.isHealer && (
              <span className="text-[10px] font-bold bg-rose-900/50 text-rose-300 border border-rose-700/50 rounded-full px-2 py-0.5 flex items-center gap-1">
                <Heart className="w-2.5 h-2.5" /> Healer
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-zinc-500 font-medium">{unit.tier}</span>
            <span className="text-zinc-700">·</span>
            <span className="text-[10px] text-zinc-500">{unit.role}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <DamageTypePill type={unit.damageType} />
          <ArmorTypePill type={unit.armorType} />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Training Path */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <Wrench className="w-3 h-3 text-zinc-500" />
            <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
              Training Path
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-1.5">
            {unit.trainingBuildings.map((b, i) => (
              <React.Fragment key={b}>
                <span className="text-xs text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg px-2.5 py-1">
                  {b}
                </span>
                {i < unit.trainingBuildings.length - 1 && (
                  <span className="text-zinc-600 text-xs">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Battle Gears */}
        {unit.battleGears.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-wider">
                Battle Gear
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {unit.battleGears.map((gear) => (
                <div
                  key={gear.name}
                  className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-2.5"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-amber-300">{gear.name}</span>
                    <span
                      className={`text-[10px] border rounded-full px-1.5 py-0.5 ${
                        gear.type === "Offensive"
                          ? "border-red-700/50 text-red-400"
                          : gear.type === "Defensive"
                          ? "border-blue-700/50 text-blue-400"
                          : "border-green-700/50 text-green-400"
                      }`}
                    >
                      {gear.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {gear.description}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Sword className="w-2.5 h-2.5 text-zinc-600" />
                    <span className="text-[10px] text-zinc-600">
                      Requires: {gear.buildingRequired}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="flex items-start gap-2 bg-zinc-800/40 rounded-xl px-3 py-2.5">
          <BookOpen className="w-3 h-3 text-zinc-500 mt-0.5 shrink-0" />
          <p className="text-[11px] text-zinc-400 leading-relaxed">{unit.notes}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Damage Matchup Table ────────────────────────────────────

function DamageMatchupTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <th className="bg-zinc-800 text-zinc-400 font-semibold text-left px-3 py-2 rounded-tl-xl whitespace-nowrap border border-zinc-700">
              Dmg \ Armor
            </th>
            {ARMOR_TYPES.map((a) => (
              <th
                key={a}
                className="bg-zinc-800 text-zinc-400 font-semibold px-3 py-2 border border-zinc-700 text-center whitespace-nowrap"
              >
                {a}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DAMAGE_TYPES.map((dmg) => (
            <tr key={dmg} className="group">
              <td className="bg-zinc-800/50 text-zinc-300 font-semibold px-3 py-2 border border-zinc-700 whitespace-nowrap group-hover:bg-zinc-700/40 transition-colors">
                <DamageTypePill type={dmg} />
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
  const [activeClanId, setActiveClanId] = useState("dragon");
  const activeClan = CLAN_DATA.find((c) => c.id === activeClanId)!;

  return (
    <div className="flex flex-col gap-8">
      {/* Clan Switcher */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-200">Select Clan</h2>
        </div>
        <div className="flex flex-wrap gap-2">
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
      <div
        className={`bg-gradient-to-r ${activeClan.color} rounded-2xl p-5 border`}
      >
        <h3 className="text-base font-bold text-zinc-100 mb-1">{activeClan.name}</h3>
        <p className="text-sm text-zinc-300 leading-relaxed">{activeClan.lore}</p>
      </div>

      {/* Unit Grid or Placeholder */}
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
            <p className="text-zinc-400 font-semibold">Unit data coming soon</p>
            <p className="text-zinc-600 text-sm mt-1">
              Dragon Clan data is fully available. Other clans will be updated.
            </p>
          </div>
        </div>
      )}

      {/* Damage Matchup Table */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-bold text-zinc-200">
              Damage vs. Armor Matchup Chart
            </h3>
          </div>
          <p className="text-xs text-zinc-500 ml-6">
            Effectiveness multipliers applied to base damage. 2× = Highly Effective,
            0.5× = Weak.
          </p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-1">
          <DamageMatchupTable />
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "2× Highly Effective", cls: "bg-emerald-500/20 text-emerald-300 border-emerald-600/30" },
            { label: "1.5× Strong", cls: "bg-green-600/20 text-green-300 border-green-600/30" },
            { label: "1× Normal", cls: "bg-zinc-700/40 text-zinc-400 border-zinc-600/30" },
            { label: "0.5× Weak", cls: "bg-rose-500/20 text-rose-400 border-rose-600/30" },
          ].map((item) => (
            <span
              key={item.label}
              className={`text-[11px] font-medium border rounded-full px-3 py-1 ${item.cls}`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
