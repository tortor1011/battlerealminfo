// ============================================================
//  Asset Path Configuration
//  Maps unit IDs / building names / gear names → static image
//  paths served from /public/assets/{units|buildings|gears}/
//
//  Naming convention:
//    units/     → <unit-id>.png          e.g. dragon_samurai.png
//    buildings/ → <slug>.png             e.g. dojo.png
//    gears/     → <slug>.png             e.g. fire_arrow.png
// ============================================================

// ─── Utility ─────────────────────────────────────────────────

/** Convert any string to a safe filename slug */
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

// ─── Unit avatars ─────────────────────────────────────────────
// Key = UnitData.id  (e.g. "dragon_samurai")

const UNIT_OVERRIDES: Record<string, string> = {
  // Add manual overrides here if the file name differs from the ID
  // e.g. dragon_warrior: "dragon_warrior_alt"
};

export function getUnitImagePath(unitId: string): string {
  const slug = UNIT_OVERRIDES[unitId] ?? unitId;
  return `/assets/units/${slug}.png`;
}

// ─── Building icons ───────────────────────────────────────────
// Key = English building name (exact, case-sensitive match)

const BUILDING_OVERRIDES: Record<string, string> = {
  "Dojo": "dojo",
  "Target Range": "target_range",
  "Fireworks Factory": "fireworks_factory",
  "Dragon Shrine": "dragon_shrine",
  "Bathhouse": "bathhouse",
  // Serpent
  "Tavern": "tavern",
  "Thieves Guild": "thieves_guild",
  "Sharpshooter Guild": "sharpshooter_guild",
  "Alchemist Hut": "alchemist_hut",
  "Metalworks": "metalworks",
  "Necromancer Throne": "necromancer_throne",
  // Lotus
  "Blade Garden": "blade_garden",
  "Training Yard": "training_yard",
  "Warlock Tower": "warlock_tower",
  // Wolf
  "Combat Pit": "combat_pit",
  "Ballistics Den": "ballistics_den",
  "Wolf Den": "wolf_den",
  "Cairn": "cairn",
};

export function getBuildingImagePath(buildingNameEn: string): string {
  const slug = BUILDING_OVERRIDES[buildingNameEn] ?? toSlug(buildingNameEn);
  return `/assets/buildings/${slug}.png`;
}

// ─── Battle Gear (skill) icons ────────────────────────────────
// Key = English gear name (exact)

const GEAR_OVERRIDES: Record<string, string> = {
  // Dragon
  "Stun Thrust": "stun_thrust",
  "Fire Arrow": "fire_arrow",
  "Zen Arrow": "zen_arrow",
  "Ki Shield": "ki_shield",
  "Chi Wave": "chi_wave",
  "Dragon Skin": "dragon_skin",
  "Dragon's Breath": "dragons_breath",
  // Serpent
  "Mugging": "mugging",
  "Glass Sword": "glass_sword",
  "Phosphorus Bolts": "phosphorus_bolts",
  "Brush Fire": "brush_fire",
  "Yin Blade": "yin_blade",
  "Blood Bond": "blood_bond",
  // Lotus
  "Inner Light": "inner_light",
  "Whirling Dervish": "whirling_dervish",
  "Death Siphon": "death_siphon",
  "Soul Chill": "soul_chill",
  // Wolf
  "Zen Focus": "zen_focus",
  "Lava Rocks": "lava_rocks",
  "Wrecking Ball": "wrecking_ball",
  "Lycanthropy / Blood Lust": "lycanthropy_blood_lust",
  "Entangle Roots": "entangle_roots",
};

export function getGearImagePath(gearNameEn: string): string {
  const slug = GEAR_OVERRIDES[gearNameEn] ?? toSlug(gearNameEn);
  return `/assets/gears/${slug}.png`;
}

// ─── All known asset slugs (for reference / future preloading) ────

export const ALL_UNIT_IDS = [
  // Dragon
  "dragon_spearman", "dragon_archer", "dragon_warrior", "dragon_samurai", "dragon_geisha",
  // Serpent
  "serpent_swordsman", "serpent_crossbowman", "serpent_raider", "serpent_ronin",
  // Lotus
  "lotus_blade_acolyte", "lotus_staff_adept", "lotus_unclean_one", "lotus_warlock",
  // Wolf
  "wolf_brawler", "wolf_hurler", "wolf_mauler", "wolf_berserker", "wolf_druidess",
] as const;

export const ALL_BUILDING_KEYS = Object.keys(BUILDING_OVERRIDES) as string[];
export const ALL_GEAR_KEYS = Object.keys(GEAR_OVERRIDES) as string[];
