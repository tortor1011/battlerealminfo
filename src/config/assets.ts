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
// Key = English gear name (exact) → filename in /public/assets/gears/

const GEAR_OVERRIDES: Record<string, string> = {
  // Dragon
  "Stun Strike": "dragon_stun_strike.gif",
  "Whirling Spear": "dragon_whirling_spear.gif",
  "Zen Arrows": "dragon_zen_arrows.gif",
  "Fire Arrows": "dragon_fire_arrows.gif",
  "Mandrake Spores": "dragon_mandrake_spores.gif",
  "Starburst Rockets": "dragon_starburst_rockets.gif",
  "Chi Shield": "dragon_chi_shield.gif",
  "Flame Sword": "dragon_flame_sword.gif",
  "Stardust": "dragon_stardust.gif",
  "Flashpowder": "dragon_flashpowder.gif",
  "Indirect Fire": "dragon_indirect_fire.gif",
  "Shrapnel Keg": "dragon_shrapnel_keg.gif",
  "Yang Blade": "dragon_yang_blade.gif",
  "Dragon Skin": "dragon_skin.gif",
  "Sacrifice": "dragon_sacrifice.gif",
  "Fire Shield": "dragon_fire_shield.gif",
  "Last Stand": "dragon_last_stand.png",
  "Concussion Smash": "dragon_concussion_smash.png",
  "Double Image": "dragon_double_image.png",
  "Blazing Purity": "dragon_blazing_purity.png",
  "Dragon's Spirit": "dragon_skin.gif",
  "Battle Cry": "zen_otomo_battle_cry.gif",
  "Flame Breath": "zen_kazan_flame_breath.gif",
  "Sight Beyond Sight": "zen_arah_sight_beyond_sight.gif",
  "Reversal of Fortune": "zen_tao_reversal_of_fortune.gif",
  "Magic Negation": "zen_teppo_magic_negation.png",
  "Call Horse": "zen_garrin_call_horse.gif",

  // Legacy & other clans
  "Stun Thrust": "dragon_stun_strike.gif",
  "Fire Arrow": "dragon_fire_arrows.gif",
  "Zen Arrow": "dragon_zen_arrows.gif",
  "Ki Shield": "dragon_chi_shield.gif",
  "Chi Wave": "chi_wave.png",
  "Dragon's Breath": "dragons_breath.png",
  "Mugging": "mugging.png",
  "Glass Sword": "glass_sword.png",
  "Phosphorus Bolts": "phosphorus_bolts.png",
  "Brush Fire": "brush_fire.png",
  "Yin Blade": "yin_blade.png",
  "Blood Bond": "blood_bond.png",
  "Inner Light": "inner_light.png",
  "Whirling Dervish": "whirling_dervish.png",
  "Death Siphon": "death_siphon.png",
  "Soul Chill": "soul_chill.png",
  "Zen Focus": "zen_focus.png",
  "Lava Rocks": "lava_rocks.png",
  "Wrecking Ball": "wrecking_ball.png",
  "Lycanthropy / Blood Lust": "lycanthropy_blood_lust.png",
  "Entangle Roots": "entangle_roots.png",
};

export function getGearImagePath(gearNameEn: string): string {
  const file = GEAR_OVERRIDES[gearNameEn];
  if (file) {
    return `/assets/gears/${file}`;
  }
  const slug = toSlug(gearNameEn);
  return `/assets/gears/${slug}.png`;
}

// ─── All known asset slugs (for reference / future preloading) ────

export const ALL_UNIT_IDS = [
  // Dragon
  "dragon_peasant", "dragon_spearman", "dragon_archer", "dragon_chemist",
  "dragon_warrior", "dragon_kabuki_warrior", "dragon_powder_keg_cannoneer",
  "dragon_samurai", "dragon_geisha", "dragon_guardian", "dragon_battle_maiden",
  "zen_kenji", "zen_otomo", "zen_kazan", "zen_arah", "zen_tao", "zen_teppo", "zen_garrin",
  // Serpent
  "serpent_swordsman", "serpent_crossbowman", "serpent_raider", "serpent_ronin",
  // Lotus
  "lotus_blade_acolyte", "lotus_staff_adept", "lotus_unclean_one", "lotus_warlock",
  // Wolf
  "wolf_brawler", "wolf_hurler", "wolf_mauler", "wolf_berserker", "wolf_druidess",
] as const;

export const ALL_BUILDING_KEYS = Object.keys(BUILDING_OVERRIDES) as string[];
export const ALL_GEAR_KEYS = Object.keys(GEAR_OVERRIDES) as string[];
