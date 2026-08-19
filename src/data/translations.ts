// ============================================================
//  Translations — UI strings & lookup tables
// ============================================================

// ─── Core types (also re-exported for data layer) ────────────
export type L10n = { en: string; th: string };
export type L10nArray = { en: string[]; th: string[] };

// ─── Stat name lookup ────────────────────────────────────────
export const STAT_NAMES: Record<string, L10n> = {
  Aggressiveness: { en: "Aggressiveness", th: "ความดุดัน" },
  Cleverness: { en: "Cleverness", th: "ความเจ้าเล่ห์" },
  Exploration: { en: "Exploration", th: "การสำรวจ" },
  Harassment: { en: "Harassment", th: "การป่วนฐาน" },
  Intelligence: { en: "Intelligence", th: "ความฉลาด" },
  "Attention Span": { en: "Attention Span", th: "สมาธิ/การเกาะเป้าหมาย" },
  "Battle Gear Usage": { en: "Battle Gear Usage", th: "การใช้สกิล" },
  "Battle Gear": { en: "Battle Gear Usage", th: "การใช้สกิล" },
  Memory: { en: "Memory", th: "ความจำ" },
  "Horse Usage": { en: "Horse Usage", th: "การใช้ม้า" },
  Horse: { en: "Horse Usage", th: "การใช้ม้า" },
  "Hero Usage": { en: "Hero Usage", th: "การใช้ฮีโร่" },
  Hero: { en: "Hero Usage", th: "การใช้ฮีโร่" },
  "Healer Usage": { en: "Healer Usage", th: "การใช้ตัวฮีล" },
  Healer: { en: "Healer Usage", th: "การใช้ตัวฮีล" },
  Attention: { en: "Attention Span", th: "สมาธิ/การเกาะเป้าหมาย" },
};

// ─── Damage & Armor type labels ───────────────────────────────
export const DAMAGE_TYPE_NAMES: Record<string, L10n> = {
  Cutting: { en: "Cutting", th: "ฟัน (Cutting)" },
  Piercing: { en: "Piercing", th: "แทง/ยิง (Piercing)" },
  Blunt: { en: "Blunt", th: "ทุบ (Blunt)" },
  Magic: { en: "Magic", th: "เวทมนตร์ (Magic)" },
  Fire: { en: "Fire", th: "ไฟ (Fire)" },
  Explosive: { en: "Explosive", th: "ระเบิด (Explosive)" },
};

export const ARMOR_TYPE_NAMES: Record<string, L10n> = {
  Unarmored: { en: "Unarmored", th: "ไร้เกราะ" },
  Light: { en: "Light", th: "เกราะเบา" },
  Medium: { en: "Medium", th: "เกราะกลาง" },
  Heavy: { en: "Heavy", th: "เกราะหนัก" },
  Building: { en: "Building", th: "สิ่งก่อสร้าง" },
  Horse: { en: "Horse", th: "ม้า" },
};

// ─── Full UI string dictionary ────────────────────────────────
export const UI = {
  header: {
    fanGuide: { en: "Fan Strategy Guide", th: "คู่มือกลยุทธ์แฟนเกม" },
    subtitle: { en: "Strategy & Database Hub", th: "ศูนย์ข้อมูลและกลยุทธ์" },
    heroDesc: {
      en: "Master every AI opponent, unlock unit synergies, and dominate the battlefield with comprehensive guides and data.",
      th: "เอาชนะบอท AI ทุกตัว เข้าใจซินเนอร์จีของยูนิต และครองสนามรบด้วยคู่มือและข้อมูลที่ครบครัน",
    },
    statBots: { en: "AI Bot Profiles", th: "โปรไฟล์บอท AI" },
    statUnits: { en: "Clan Units", th: "ยูนิต" },
    statGuides: { en: "Gameplay Guides", th: "คู่มือการเล่น" },
    statMatchups: { en: "Damage Matchups", th: "ตารางประสิทธิภาพ" },
  },
  nav: {
    bots: { en: "Bot Database", th: "ฐานข้อมูลบอท AI" },
    units: { en: "Units & Gear", th: "ยูนิต & แบทเทิลเกียร์" },
    guides: { en: "Guides", th: "คู่มือการเล่น" },
  },
  botCard: {
    howToCounter: { en: "💡 How to Counter", th: "💡 วิธีแก้ทาง" },
    strengths: { en: "Strengths", th: "จุดแข็ง" },
    weaknesses: { en: "Weaknesses", th: "จุดอ่อน" },
  },
  botList: {
    searchPlaceholder: { en: "Search bot by name…", th: "ค้นหาบอทตามชื่อ…" },
    tierLabel: { en: "Tier", th: "ระดับ" },
    showing: { en: "Showing", th: "แสดง" },
    of: { en: "of", th: "จาก" },
    botsWord: { en: "bots", th: "บอท" },
    tierSuffix: { en: "Tier", th: "ระดับ" },
    clearFilters: { en: "Clear filters", th: "ล้างตัวกรอง" },
    noBots: { en: "No bots found", th: "ไม่พบบอท" },
    noBotsHint: { en: "Try a different name or tier filter.", th: "ลองชื่ออื่นหรือเปลี่ยนตัวกรองระดับ" },
  },
  unitTable: {
    selectClan: { en: "Select Clan", th: "เลือกเผ่า" },
    comingSoon: { en: "Unit data coming soon", th: "ข้อมูลยูนิตเร็ว ๆ นี้" },
    comingSoonSub: {
      en: "Dragon Clan data is fully available. Other clans will be updated.",
      th: "ข้อมูลเผ่ามังกรพร้อมแล้ว เผ่าอื่น ๆ จะอัปเดตเร็ว ๆ นี้",
    },
    trainingPath: { en: "Training Path", th: "เส้นทางการฝึก" },
    battleGear: { en: "Battle Gear", th: "แบทเทิลเกียร์" },
    requires: { en: "Requires:", th: "ต้องการ:" },
    antiCavalry: { en: "Anti-Cavalry", th: "ต้านม้า" },
    healerTag: { en: "Healer", th: "ตัวฮีล" },
    dmgHeader: { en: "Dmg \\ Armor", th: "ความเสียหาย \\ เกราะ" },
    damageMatchupTitle: {
      en: "Damage vs. Armor Matchup Chart",
      th: "ตารางประสิทธิภาพความเสียหาย",
    },
    damageMatchupDesc: {
      en: "Effectiveness multipliers applied to base damage. 2× = Highly Effective, 0.5× = Weak.",
      th: "ค่าตัวคูณประสิทธิภาพที่ใช้กับความเสียหายพื้นฐาน 2× = ประสิทธิภาพสูงมาก, 0.5× = อ่อนแอ",
    },
    legendHighlyEff: { en: "2× Highly Effective", th: "2× ประสิทธิภาพสูงมาก" },
    legendStrong: { en: "1.5× Strong", th: "1.5× แข็งแกร่ง" },
    legendNormal: { en: "1× Normal", th: "1× ปกติ" },
    legendWeak: { en: "0.5× Weak", th: "0.5× อ่อนแอ" },
  },
  guides: {
    title: { en: "Core Gameplay Guides", th: "คู่มือหลักการเล่น" },
    subtitle: {
      en: "Fundamental mechanics, formulas, and strategies to dominate every match.",
      th: "กลไกพื้นฐาน สูตรคำนวณ และกลยุทธ์เพื่อครองสนามรบในทุกแมตช์",
    },
    keyTips: { en: "Key Tips", th: "เคล็ดลับสำคัญ" },
    interactive: { en: "Interactive Peasant Ratio", th: "จำลองสัดส่วนชาวนา" },
    optimal: { en: "✓ Optimal", th: "✓ สัดส่วนดี" },
    adjustRatio: { en: "⚠ Adjust ratio", th: "⚠ ปรับสัดส่วน" },
    ricePeasants: { en: "Rice Peasants", th: "ชาวนาข้าว" },
    waterPeasants: { en: "Water Peasants", th: "ชาวนาน้ำ" },
    riceLabel: { en: "🌾 Rice", th: "🌾 ข้าว" },
    waterLabel: { en: "💧 Water", th: "💧 น้ำ" },
  },
  footer: {
    disclaimer: {
      en: "Battle Realms Strategy & Database Hub — Fan-made. Not affiliated with Liquid Entertainment.",
      th: "ศูนย์ข้อมูลและกลยุทธ์ Battle Realms — สร้างโดยแฟนเกม ไม่ได้สังกัด Liquid Entertainment",
    },
  },
} as const satisfies Record<string, Record<string, L10n>>;
