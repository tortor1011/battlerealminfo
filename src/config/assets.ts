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
  // Dragon Clan — logo icons from wiki
  dragon_peasant:             "dragon_peasant.gif",
  dragon_spearman:            "dragon_spearman.gif",
  dragon_archer:              "dragon_archer.gif",
  dragon_chemist:             "dragon_chemist.gif",
  dragon_warrior:             "dragon_warrior.gif",
  dragon_kabuki_warrior:      "dragon_kabuki_warrior.gif",
  dragon_powder_keg_cannoneer:"dragon_powder_keg_cannoneer.gif",
  dragon_samurai:             "dragon_samurai.gif",
  dragon_geisha:              "dragon_geisha.gif",
  dragon_guardian:            "dragon_guardian.jpg",
  dragon_battle_maiden:       "dragon_battle_maiden_icon.png",

  // Wolf Clan — all use logo icon .gif files
  wolf_peasant:       "wolf_peasant.gif",
  wolf_brawler:       "wolf_brawler.gif",
  wolf_hurler:        "wolf_hurler.gif",
  wolf_sledger:       "wolf_sledger.gif",
  wolf_digger:        "wolf_digger.gif",
  wolf_pitch_slinger: "wolf_pitch_slinger.gif",
  wolf_ballistaman:   "wolf_ballistaman.gif",
  wolf_mauler:        "wolf_mauler.gif",
  wolf_berserker:     "wolf_berserker.gif",
  wolf_druidess:      "wolf_druidess.gif",
  wolf_werewolf:      "wolf_werewolf.gif",
  wolf_pack_master:   "wolf_pack_master.gif",
  wolf_shale_lord:    "wolf_shale_lord.gif",
  wolf_grayback:      "wolf_grayback.gif",
  wolf_longtooth:     "wolf_longtooth.gif",
  wolf_wildeye:       "wolf_wildeye.png",
  wolf_gaihla:        "wolf_gaihla.gif",
  wolf_dryad:         "wolf_dryad.png",
};

export function getUnitImagePath(unitId: string): string {
  const override = UNIT_OVERRIDES[unitId];
  if (override) return `/assets/units/${override}`;
  return `/assets/units/${unitId}.png`;
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

  // Wolf Clan
  "Zen Counter Punch": "wolf_zen_counter_punch.gif",
  "Lava Rock": "wolf_lava_rock.gif",
  "Stun Slam": "wolf_stun_slam.gif",
  "Tunneling": "wolf_tunneling.png",
  "Scorched Earth": "wolf_scorched_earth.gif",
  "Totem": "wolf_totem.gif",
  "Wrecking Ball": "wolf_wrecking_ball.gif",
  "Lycanthropy": "wolf_lycanthropy.gif",
  "Blessing": "wolf_blessing.gif",
  "Shale Armor": "wolf_shale_armor.png",
  "Wolf's Bite": "wolf_wolfs_bite.gif",
  "Howl": "wolf_howl.gif",
  "Armored Friend": "wolf_armored_friend.gif",
  "Lupine Rage": "wolf_lupine_rage.gif",
  "Razor-Edged Boomerang": "wolf_razor_boomerang.gif",
  "Ancestral Call": "wolf_ancestral_call.jpg",
  "Chant of Life": "wolf_chant_of_life.gif",
  "Howling Winds": "wolf_howling_winds.png",

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
  "wolf_peasant", "wolf_brawler", "wolf_hurler", "wolf_sledger", "wolf_digger",
  "wolf_pitch_slinger", "wolf_ballistaman", "wolf_mauler", "wolf_berserker",
  "wolf_druidess", "wolf_werewolf", "wolf_pack_master",
  "wolf_shale_lord", "wolf_grayback", "wolf_longtooth", "wolf_wildeye", "wolf_gaihla", "wolf_dryad",
] as const;

export const ALL_BUILDING_KEYS = Object.keys(BUILDING_OVERRIDES) as string[];
export const ALL_GEAR_KEYS = Object.keys(GEAR_OVERRIDES) as string[];
