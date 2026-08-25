// ============================================================
//  Battle Realms Strategy & Database Hub — Bilingual Data Layer
// ============================================================

import type { L10n, L10nArray } from "@/data/translations";

// ─── BOT PROFILES ────────────────────────────────────────────

export type BotTier = "SSS" | "S" | "A+" | "A" | "B+" | "B" | "B-" | "C+" | "C" | "D";

export interface BotStat {
  label: string; // English key — translated via STAT_NAMES lookup
  value: number; // 0–100
}

export interface BotProfile {
  id: string;
  name: string;
  tier: BotTier;
  tagline: L10n;
  playstyle: L10n;
  stats: BotStat[];
  counterTips: L10nArray;
  strengths: L10nArray;
  weaknesses: L10nArray;
}

export const BOT_PROFILES: BotProfile[] = [
  {
    id: "nightvol",
    name: "Nightvol",
    tier: "SSS",
    tagline: {
      en: "Legendary boss AI. Flawless in every dimension, relentless raids, full skills, and non-stop heals.",
      th: "บอสใหญ่ระดับตำนาน ไร้จุดอ่อนรอบด้าน บุกเร็ว ป่วนยับ สกิลแน่น และฮีลตลอดเวลา",
    },
    playstyle: {
      en: "Adaptive — pressures, techs up, and sieges simultaneously with unmatched micro and macro.",
      th: "ปรับตัวรอบด้าน — สามารถกดดัน พัฒนาเทค และโจมตีฐานได้พร้อมกันอย่างสมบูรณ์แบบ",
    },
    stats: [
      { label: "Aggressiveness", value: 100 },
      { label: "Cleverness", value: 100 },
      { label: "Exploration", value: 100 },
      { label: "Harassment", value: 100 },
      { label: "Intelligence", value: 100 },
      { label: "Attention Span", value: 100 },
      { label: "Battle Gear Usage", value: 100 },
      { label: "Memory", value: 100 },
      { label: "Horse Usage", value: 100 },
      { label: "Hero Usage", value: 100 },
      { label: "Healer Usage", value: 100 },
    ],
    counterTips: {
      en: [
        "Build watchtowers and deploy spearmen to secure choke points.",
        "Seize momentum in large team fights using skill combos before his healers stabilize.",
        "Wall off your base early — Nightvol will probe every opening.",
        "Keep peasants safe at all costs; he will raid your economy relentlessly.",
      ],
      th: [
        "สร้างหอคอย + พลหอกดักทาง ชิงจังหวะไฟต์ใหญ่ด้วยคอมโบสกิล",
        "โฟกัสทำลายยูนิตฮีลของเขาก่อน เขาใช้มันได้อย่างชำนาญ",
        "รบในจังหวะที่เราเลือก อย่าให้เขาเป็นฝ่ายกำหนดสนามรบ",
        "ปกป้องชาวนาให้ดีที่สุด เขาจะบุกโจมตีเศรษฐกิจเราเสมอ",
      ],
    },
    strengths: {
      en: ["Counters every strategy", "Perfect macro & micro", "Never idle"],
      th: ["สามารถรับมือทุกกลยุทธ์", "มาโครและไมโครแบบสมบูรณ์แบบ", "ไม่มีจังหวะหยุดพัก"],
    },
    weaknesses: {
      en: ["No exploitable weaknesses — difficulty spike on any map"],
      th: ["ไม่มีจุดอ่อนที่ชัดเจน — ยกระดับความยากในทุกแผนที่"],
    },
  },
  {
    id: "taro",
    name: "Taro",
    tier: "S",
    tagline: {
      en: "Heavy crushing cavalry with max gear usage and 94 healer score for supreme battle sustain.",
      th: "ทหารม้าสายบดขยี้ สกิลแน่นและมีตัวฮีลสูงถึง 94 ทัพอึดยืนระยะได้นานมาก",
    },
    playstyle: {
      en: "Cavalry-centric — builds heavy horse units supported by dedicated healers.",
      th: "เน้นม้า — สร้างกองทัพม้าหนักพร้อมตัวฮีลคอยหนุน",
    },
    stats: [
      { label: "Aggressiveness", value: 82 },
      { label: "Cleverness", value: 78 },
      { label: "Exploration", value: 9 },
      { label: "Harassment", value: 2 },
      { label: "Intelligence", value: 84 },
      { label: "Attention Span", value: 92 },
      { label: "Battle Gear Usage", value: 99 },
      { label: "Memory", value: 97 },
      { label: "Horse Usage", value: 100 },
      { label: "Hero Usage", value: 3 },
      { label: "Healer Usage", value: 94 },
    ],
    counterTips: {
      en: [
        "Mass Spearmen in front of your base to melt cavalry before healers can react.",
        "Deny his Bathhouse / healing structures to strip away his sustain.",
        "Explosive and Fire damage melt his cavalry balls quickly.",
        "Kite with archers from behind spear walls.",
      ],
      th: [
        "ใช้มวลชน Spearman ดักหน้าบ้านเพื่อแทงม้าให้ละลายก่อนฮีลทัน",
        "ทำลายอาคารสร้างตัวฮีลเพื่อตัดระบบการฟื้นฟูของเขา",
        "ความเสียหายประเภทไฟหรือระเบิดเผาทัพม้าที่รวมตัวกันได้อย่างรวดเร็ว",
        "ล่อทัพด้วยธนูจากด้านหลังแนว Spearmen",
      ],
    },
    strengths: {
      en: ["Unstoppable cavalry ball", "Self-sustaining through Healers", "99% Battle Gear usage"],
      th: ["กองทัพม้าที่หยุดได้ยาก", "ฮีลตัวเองได้อย่างต่อเนื่อง (94)", "ใช้ Battle Gear สูงถึง 99%"],
    },
    weaknesses: {
      en: ["Countered hard by massed Spearmen", "Slow initial build & low harassment"],
      th: ["แพ้ทางกองทหารถือหอกจำนวนมาก", "เริ่มต้นช้าและการป่วนต่ำ (2)"],
    },
  },
  {
    id: "longtooth",
    name: "Longtooth",
    tier: "A+",
    tagline: {
      en: "Relentless early harasser with 100% Battle Gear usage. Spams abilities non-stop.",
      th: "ตัวป่วนต้นเกมมือฉมัง ใช้ Battle Gear 100% กดสกิลไม่พัก",
    },
    playstyle: {
      en: "Harassment-first — spends Battle Gear constantly and never stops raiding.",
      th: "บุกป่วนก่อน — ใช้ Battle Gear ตลอดเวลาและไม่หยุดโจมตี",
    },
    stats: [
      { label: "Aggressiveness", value: 65 },
      { label: "Cleverness", value: 87 },
      { label: "Exploration", value: 30 },
      { label: "Harassment", value: 90 },
      { label: "Intelligence", value: 78 },
      { label: "Attention Span", value: 31 },
      { label: "Battle Gear Usage", value: 100 },
      { label: "Memory", value: 80 },
      { label: "Horse Usage", value: 35 },
      { label: "Hero Usage", value: 50 },
      { label: "Healer Usage", value: 25 },
    ],
    counterTips: {
      en: [
        "Spread out troop formations to avoid AoE gear and fight back with your own Battle Gear.",
        "Fortify expansion points before he scouts them.",
        "His low exploration score means he may miss flanking paths — use them.",
        "Outlast his early harassment; his mid-game aggression drops.",
      ],
      th: [
        "กระจายแนวทัพกันโดนสกิลหมู่ ใส่ Battle Gear สู้กลับ",
        "เสริมจุดขยายฐานก่อนที่เขาจะสอดแนม",
        "การสำรวจต่ำทำให้มองข้ามทางอ้อม — ใช้จังหวะนั้นโอบล้อม",
        "ทนต่อการบุกต้นเกม แรงกดดันกลางเกมของเขาจะลดลง",
      ],
    },
    strengths: {
      en: ["100% Battle Gear usage", "Constant early harassment (90)", "High cleverness (87)"],
      th: ["ใช้ Battle Gear 100%", "การป่วนต้นเกมสูงมาก (90)", "ความเจ้าเล่ห์สูง (87)"],
    },
    weaknesses: {
      en: ["Low attention span (31)", "Mid-game stalls if harassment fails"],
      th: ["สมาธิเกาะเป้าต่ำ (31)", "กลางเกมสะดุดถ้าการป่วนไม่ได้ผล"],
    },
  },
  {
    id: "necromancer",
    name: "Necromancer",
    tier: "A",
    tagline: {
      en: "High-speed cavalry blitzkrieg. Smart, hyper-focused target-lock, but zero healer sustain.",
      th: "กองทัพม้าบุกชนความเร็วสูง ฉลาดและล็อกเป้ากัดไม่ปล่อย แต่ไม่มีตัวฮีล",
    },
    playstyle: {
      en: "Speed cavalry blitz — rushes with fast horse units, relies on aggression rather than heals.",
      th: "บุกด้วยม้าเร็ว — โจมตีด้วยม้าความเร็วสูง ล็อกเป้ากัดไม่ปล่อยโดยไม่มีตัวฮีล",
    },
    stats: [
      { label: "Aggressiveness", value: 80 },
      { label: "Cleverness", value: 90 },
      { label: "Exploration", value: 15 },
      { label: "Harassment", value: 5 },
      { label: "Intelligence", value: 95 },
      { label: "Attention Span", value: 95 },
      { label: "Battle Gear Usage", value: 50 },
      { label: "Memory", value: 95 },
      { label: "Horse Usage", value: 95 },
      { label: "Hero Usage", value: 30 },
      { label: "Healer Usage", value: 1 },
    ],
    counterTips: {
      en: [
        "Form spearman defensive lines up front and use Geisha healers to win long attrition fights.",
        "Build Spearmen immediately — he will be at your gate quickly.",
        "Wall your rice paddies; his fast cavalry will kill exposed peasants.",
        "He almost never uses healers (1), so prolonged engagements always favor you.",
      ],
      th: [
        "พลหอกตั้งแถวดักหน้า และใช้ Geisha ฮีลยื้อไฟต์ระยะยาว",
        "สร้าง Spearmen ทันที — เขาจะถึงประตูฐานได้รวดเร็วมาก",
        "กั้นนาข้าวด้วย — ม้าเร็วจะสังหารชาวนาที่ไม่ระวัง",
        "เขาแทบไม่ใช้ฮีล (1) ดังนั้นการสู้แบบยืดเยื้อได้เปรียบแน่นอน",
      ],
    },
    strengths: {
      en: ["Extreme speed & focus (95 Attention)", "High intelligence & memory (95)", "95 Horse usage"],
      th: ["สมาธิและการล็อกเป้าสูงมาก (95)", "ความฉลาดและความจำสูง (95)", "ใช้ม้าสูงถึง 95%"],
    },
    weaknesses: {
      en: ["Practically 0 healers (1)", "Predictable cavalry rush"],
      th: ["แทบไม่ใช้ฮีลเลย (1) — แพ้ไฟต์ยืดเยื้อ", "ทัพม้าล้วนที่คาดเดาได้"],
    },
  },
  {
    id: "vetkin",
    name: "Vetkin",
    tier: "B+",
    tagline: {
      en: "Early-game horse rush king. Severe peasant raider, but neglects battle gear and healers.",
      th: "ราชา Rush ม้าต้นเกม ป่วนชาวนาหนักสุดๆ แต่ไม่ใช้สกิลและไม่มีตัวฮีล",
    },
    playstyle: {
      en: "All-in horse rush — goes all-out early then stagnates if the rush fails.",
      th: "บุกด้วยม้าแบบ All-in — ทุ่มสุดตัวตั้งแต่ต้น แล้วซบเซาถ้าไม่สำเร็จ",
    },
    stats: [
      { label: "Aggressiveness", value: 91 },
      { label: "Cleverness", value: 97 },
      { label: "Exploration", value: 6 },
      { label: "Harassment", value: 95 },
      { label: "Intelligence", value: 87 },
      { label: "Attention Span", value: 47 },
      { label: "Battle Gear Usage", value: 5 },
      { label: "Memory", value: 79 },
      { label: "Horse Usage", value: 100 },
      { label: "Hero Usage", value: 2 },
      { label: "Healer Usage", value: 0 },
    ],
    counterTips: {
      en: [
        "Build watchtowers and station spearmen near peasants early on.",
        "Survive the first 5 minutes and you will win the match easily.",
        "2–3 Spearmen near your entrance stop his rush cold.",
        "He will not heal (0) — chip his cavalry down and they will never recover.",
      ],
      th: [
        "วางหอคอยและส่งพลหอกเฝ้าชาวนาแต่เนิ่นๆ",
        "รอดจากช่วง 5 นาทีแรกก็แปลว่าชนะแล้ว",
        "Spearmen 2–3 ตัวที่ทางเข้าฐานหยุดการบุกได้",
        "เขาไม่ฮีล (0) — ทำให้ม้าบาดเจ็บทีละนิดและไม่มีวันฟื้น",
      ],
    },
    strengths: {
      en: ["100% horse usage", "Extreme early harassment (95)", "High cleverness (97)"],
      th: ["ใช้ม้า 100%", "การป่วนต้นเกมรุนแรงสุดขีด (95)", "ความเจ้าเล่ห์สูง (97)"],
    },
    weaknesses: {
      en: ["0% Healer usage", "5% Battle Gear usage", "One-trick rush strategy"],
      th: ["ไม่ใช้ฮีลเลย (0%)", "ใช้ Battle Gear ต่ำมาก (5%)", "แผนเดียวถ้ากันได้คือจบ"],
    },
  },
  {
    id: "wildeye",
    name: "Wildeye",
    tier: "B",
    tagline: {
      en: "Fierce cavalry striker with near-perfect memory and high focus, but barely touches gear.",
      th: "ทหารม้าบุกเดือด จำทางแม่นและสมาธิสูง แต่แทบไม่ใช้เกียร์",
    },
    playstyle: {
      en: "Cavalry strikes — charges directly into your base, remembers your layout.",
      th: "โจมตีม้าตรง — พุ่งเข้าฐานตรง ๆ และจำโครงสร้างฐานของเราได้อย่างแม่นยำ",
    },
    stats: [
      { label: "Aggressiveness", value: 85 },
      { label: "Cleverness", value: 59 },
      { label: "Exploration", value: 24 },
      { label: "Harassment", value: 76 },
      { label: "Intelligence", value: 92 },
      { label: "Attention Span", value: 86 },
      { label: "Battle Gear Usage", value: 12 },
      { label: "Memory", value: 98 },
      { label: "Horse Usage", value: 100 },
      { label: "Hero Usage", value: 13 },
      { label: "Healer Usage", value: 25 },
    ],
    counterTips: {
      en: [
        "Choke his charges with spearmen and counter-attack with gear-equipped units.",
        "He remembers your base layout (98) — relocate defences and traps periodically.",
        "Spearmen at base entrance + Archers on elevated terrain counter his direct charges.",
        "Keep your hero alive; he tends to target high-value units when spotted.",
      ],
      th: [
        "ดักทางด้วยพลหอกและสวนกลับด้วยยูนิตที่มี Battle Gear ครบมือ",
        "เขาจำแผนผังฐานได้แม่น (98) — ปรับเปลี่ยนตำแหน่งแนวป้องกันบ้าง",
        "Spearmen หน้าทาง + ธนูบนที่สูงสกัดการบุกตรง ๆ ได้",
        "อย่าปล่อยม้าหรือชาวนาไว้ตามลำพัง เขาจะตามเก็บ",
      ],
    },
    strengths: {
      en: ["98 Memory & 92 Intelligence", "100% Horse usage", "Relentless aggression (85)"],
      th: ["ความจำ 98 & ความฉลาด 92", "ใช้ม้า 100%", "ความดุดันสูง (85)"],
    },
    weaknesses: {
      en: ["Very low gear usage (12)", "Low cleverness (59)"],
      th: ["แทบไม่ใช้ Battle Gear (12)", "ความเจ้าเล่ห์ปานกลาง (59)"],
    },
  },
  {
    id: "kazan",
    name: "Kazan",
    tier: "B",
    tagline: {
      en: "Fast-horse poke master with 99 harassment. Kills peasants and retreats, flees large fights.",
      th: "จอมตอดม้าเร็ว Harassment เกือบเต็มร้อย วิ่งไล่ฆ่าชาวนาแล้วหนี แต่ไม่สู้ไฟต์ใหญ่",
    },
    playstyle: {
      en: "Hit-and-run — harasses peasants relentlessly but avoids large engagements.",
      th: "Hit-and-run — ป่วนชาวนาไม่หยุดแต่หลีกเลี่ยงการต่อสู้ใหญ่",
    },
    stats: [
      { label: "Aggressiveness", value: 28 },
      { label: "Cleverness", value: 85 },
      { label: "Exploration", value: 1 },
      { label: "Harassment", value: 99 },
      { label: "Intelligence", value: 89 },
      { label: "Attention Span", value: 25 },
      { label: "Battle Gear Usage", value: 28 },
      { label: "Memory", value: 46 },
      { label: "Horse Usage", value: 100 },
      { label: "Hero Usage", value: 14 },
      { label: "Healer Usage", value: 0 },
    ],
    counterTips: {
      en: [
        "Towers by rice fields + spearmen escorting peasants; push directly into his base once defended.",
        "Place watchtowers near your rice paddies to catch his raids early.",
        "A dedicated Spearman escort on your peasants shuts him down.",
        "He avoids big fights (28 Aggressiveness) — march straight to his main base to force an end.",
      ],
      th: [
        "หอคอยเฝ้าแปลงข้าว + พลหอกคุ้มกันชาวนา เมื่อกันได้ให้ยกทัพใหญ่ชนบ้านตรงๆ",
        "ส่งพลหอกคุ้มกันชาวนาโดยตรงเพื่อตัดอำนาจ Harassment",
        "เขาหลีกเลี่ยงการไฟต์ใหญ่ — เมื่อหยุดการป่วนได้ให้บุกทันที",
        "ใช้โอกาสที่เขาออกบุกเพื่อยกทัพใหญ่ทำลายฐานตรงๆ",
      ],
    },
    strengths: {
      en: ["99 Harassment rate", "100% horse mobility", "Clever hit-and-run tactics (85)"],
      th: ["อัตราการป่วนสูงถึง 99", "ความคล่องตัวของม้า 100%", "เทคนิค Hit-and-run (85)"],
    },
    weaknesses: {
      en: ["Very low aggressiveness (28)", "0 Healer usage", "Short attention span (25)"],
      th: ["ความดุดันต่ำมาก (28) ไม่กล้าไฟต์", "ไม่มีตัวฮีล (0)", "สมาธิสั้น (25)"],
    },
  },
  {
    id: "tao",
    name: "Tao",
    tier: "B-",
    tagline: {
      en: "Balanced genius with 100% intelligence and battle gear, but moderate aggressiveness across the board.",
      th: "อัจฉริยะสายสมดุล ฉลาดและใช้เกียร์ 100% แต่ความดุดันปานกลาง",
    },
    playstyle: {
      en: "Balanced macro — maxes cleverness, intelligence and gear; keeps all other stats at exactly 50.",
      th: "มาโครสมดุล — เน้นความฉลาดและ Battle Gear 100% รักษาสถิติอื่น ๆ ไว้ที่ 50",
    },
    stats: [
      { label: "Aggressiveness", value: 50 },
      { label: "Cleverness", value: 100 },
      { label: "Exploration", value: 50 },
      { label: "Harassment", value: 50 },
      { label: "Intelligence", value: 100 },
      { label: "Attention Span", value: 50 },
      { label: "Battle Gear Usage", value: 100 },
      { label: "Memory", value: 50 },
      { label: "Horse Usage", value: 50 },
      { label: "Hero Usage", value: 50 },
      { label: "Healer Usage", value: 50 },
    ],
    counterTips: {
      en: [
        "Farm up Tier 3 units and initiate standard team fights with superior unit tier advantage.",
        "Rush him before he techs up — his aggression is moderate early.",
        "He is a jack of all trades; hard-counter one aspect to expose his average response.",
        "Deny his Battle Gear buildings to neuter his biggest advantage.",
      ],
      th: [
        "ฟาร์มสร้างยูนิต Tier 3 และเปิดไฟต์ปะทะตามปกติ",
        "บุกก่อนที่เขาจะพัฒนาเทค — ความดุดันต้นเกมยังปานกลาง (50)",
        "เขาถนัดทุกอย่างแต่ไม่สุดสักทาง — โต้ด้านใดด้านหนึ่งแบบเข้มข้น",
        "ทำลายอาคาร Battle Gear เพื่อตัดจุดแข็งที่ใหญ่ที่สุดของเขา",
      ],
    },
    strengths: {
      en: ["100 Cleverness, Intelligence & Battle Gear", "Balanced macro execution"],
      th: ["ความเจ้าเล่ห์ ความฉลาด & Battle Gear 100%", "บริหารจัดการสมดุลรอบด้าน"],
    },
    weaknesses: {
      en: ["Average aggression (50)", "Hesitates to push tactical openings"],
      th: ["ความดุดันปานกลาง (50)", "ลังเลในการคว้าโอกาสเผด็จศึก"],
    },
  },
  {
    id: "garrin",
    name: "Garrin",
    tier: "C+",
    tagline: {
      en: "Aggressive horse army backed by heroes, but virtually zero battle gear usage.",
      th: "กองทัพม้าบุกดุดันและพกฮีโร่มาด้วย แต่ไม่ใช้สกิลเกียร์เลย",
    },
    playstyle: {
      en: "Mass cavalry & hero rush — floods the map with horse units and heroes without gear.",
      th: "ม้าจำนวนมากพร้อมฮีโร่ — เต็มแผนที่ด้วยม้าและฮีโร่แต่ไม่ใช้สกิลเกียร์",
    },
    stats: [
      { label: "Aggressiveness", value: 70 },
      { label: "Cleverness", value: 93 },
      { label: "Exploration", value: 4 },
      { label: "Harassment", value: 12 },
      { label: "Intelligence", value: 85 },
      { label: "Attention Span", value: 94 },
      { label: "Battle Gear Usage", value: 2 },
      { label: "Memory", value: 82 },
      { label: "Horse Usage", value: 85 },
      { label: "Hero Usage", value: 75 },
      { label: "Healer Usage", value: 23 },
    ],
    counterTips: {
      en: [
        "Place spearmen in front, unleash full battle gear abilities, and focus-fire his hero.",
        "Spearmen completely shut down his cavalry rush.",
        "His hero usage is high (75) — focus-fire his hero to collapse his army morale.",
        "He rarely uses Battle Gear (2), so your gear abilities will dominate every skirmish.",
      ],
      th: [
        "พลหอกดักทางด้านหน้า และกดใช้ Battle Gear เต็มพิกัดเพื่อขยี้",
        "Spearmen ปิดกองทัพม้าของเขาได้สนิท",
        "เขาพึ่งพาฮีโร่มาก (75) — โฟกัสฆ่าฮีโร่เพื่อตัดกำลังหลัก",
        "เขาแทบไม่ใช้ Battle Gear (2) — สกิลของเราจะครองไฟต์ได้ง่ายดาย",
      ],
    },
    strengths: {
      en: ["High cleverness (93) & focus (94)", "Strong hero presence (75)", "85 Horse usage"],
      th: ["ความเจ้าเล่ห์สูง (93) & สมาธิสูง (94)", "ใช้ฮีโร่ได้ดี (75)", "ใช้ม้าสูง (85)"],
    },
    weaknesses: {
      en: ["Almost 0 Battle Gear (2)", "Low healer usage (23)", "Very low exploration (4)"],
      th: ["Battle Gear แทบเป็นศูนย์ (2)", "ตัวฮีลน้อย (23)", "การสำรวจต่ำมาก (4)"],
    },
  },
  {
    id: "teppo",
    name: "Teppo",
    tier: "C",
    tagline: {
      en: "Frenzied infantry berserker. Extremely aggressive foot soldiers, zero horses, short memory, and no healers.",
      th: "จอมคลั่งเดินเท้า บุกดุมากแต่ไม่ใช้ม้า ความจำสั้น และไม่มีตัวฮีล",
    },
    playstyle: {
      en: "Infantry spam — masses foot soldiers and pushes aggressively with Battle Gear.",
      th: "ทหารเดินเท้าจำนวนมาก — รุมด้วยทหารราบพร้อม Battle Gear",
    },
    stats: [
      { label: "Aggressiveness", value: 94 },
      { label: "Cleverness", value: 54 },
      { label: "Exploration", value: 24 },
      { label: "Harassment", value: 76 },
      { label: "Intelligence", value: 79 },
      { label: "Attention Span", value: 80 },
      { label: "Battle Gear Usage", value: 70 },
      { label: "Memory", value: 17 },
      { label: "Horse Usage", value: 7 },
      { label: "Hero Usage", value: 46 },
      { label: "Healer Usage", value: 13 },
    ],
    counterTips: {
      en: [
        "Use ranged units or cavalry to kite his slow infantry blobs from distance as they march.",
        "Cavalry counter-attacks destroy his infantry blobs quickly.",
        "He barely scouts — flank from unexpected angles to catch him off guard.",
        "His low memory (17) means he forgets base layouts quickly.",
      ],
      th: [
        "ใช้ยูนิตยิงไกลหรือม้า Kite ล่อระยะ ยิงตอดขณะที่มันเดินเข้ามา",
        "ม้าโต้กลับทำลายกองทหารราบได้รวดเร็ว",
        "เขาแทบไม่สอดแนม — โจมตีจากมุมที่คาดไม่ถึง",
        "ความจำต่ำมาก (17) หมายความว่าเขาลืมแผนผังฐานได้ง่าย",
      ],
    },
    strengths: {
      en: ["Extreme aggression (94)", "High harassment (76)", "Solid Battle Gear usage (70)"],
      th: ["ความดุดันสุดขีด (94)", "การป่วนฐานสูง (76)", "ใช้ Battle Gear ได้ดี (70)"],
    },
    weaknesses: {
      en: ["No horse mobility (7)", "Terrible memory (17)", "Low healers (13)"],
      th: ["แทบไม่มีม้า (7)", "ความจำแย่มาก (17)", "ตัวฮีลน้อยมาก (13)"],
    },
  },
  {
    id: "budo",
    name: "Budo",
    tier: "D",
    tagline: {
      en: "Passive late-game builder. Doesn't rush or harass, micro attention is near zero. Free farm for you.",
      th: "สายตั้งรับท้ายเกม ไม่บุก ไม่ป่วน สมาธิสั้น ปล่อยให้เราฟาร์มสบาย",
    },
    playstyle: {
      en: "Turtle strategy — focuses entirely on economy, ignores attacking until very late game.",
      th: "กลยุทธ์ป้อมปราการ — เน้นเศรษฐกิจ ไม่โจมตีจนกว่าจะปลายเกมมาก",
    },
    stats: [
      { label: "Aggressiveness", value: 14 },
      { label: "Cleverness", value: 89 },
      { label: "Exploration", value: 2 },
      { label: "Harassment", value: 18 },
      { label: "Intelligence", value: 92 },
      { label: "Attention Span", value: 5 },
      { label: "Battle Gear Usage", value: 45 },
      { label: "Memory", value: 96 },
      { label: "Horse Usage", value: 12 },
      { label: "Hero Usage", value: 7 },
      { label: "Healer Usage", value: 35 },
    ],
    counterTips: {
      en: [
        "Send early units to raid his peasants and workers for a fast, decisive early-game victory.",
        "Rush him at any point — he will barely respond.",
        "His attention is near-zero (5); attack his economy and he won't notice in time.",
        "Any early harassment permanently cripples his passive build plan.",
      ],
      th: [
        "ส่งยูนิตไปบุกตัดคนงานตั้งแต่ต้นเกมเพื่อปิดเกมอย่างรวดเร็ว",
        "บุกได้ทุกเวลา — เขาแทบไม่ตอบสนอง",
        "สมาธิต่ำสุดขีด (5) โจมตีเศรษฐกิจ เขาอาจไม่ทันสังเกต",
        "การป่วนต้นเกมใด ๆ ก็ทำลายแผนเศรษฐกิจเชิงรับของเขาได้ทันที",
      ],
    },
    strengths: {
      en: ["High cleverness (89), intelligence (92) & memory (96)", "Strong economic scaling if left alone"],
      th: ["ความเจ้าเล่ห์ (89) ความฉลาด (92) และความจำ (96) สูง", "เศรษฐกิจโตดีถ้าปล่อยให้สร้าง"],
    },
    weaknesses: {
      en: ["Lowest aggressiveness (14)", "5 Attention span means zero micro response", "Free win for any rusher"],
      th: ["ความดุดันต่ำสุด (14)", "สมาธิ 5 แทบไม่สั่งการยูนิตป้องกัน", "แพ้การบุกต้นเกมทุกรูปแบบ"],
    },
  },
];

// ─── TIER ORDERING ───────────────────────────────────────────

export const TIER_ORDER: BotTier[] = ["SSS", "S", "A+", "A", "B+", "B", "B-", "C+", "C", "D"];

export const TIER_COLOR: Record<BotTier, string> = {
  SSS: "text-yellow-300 border-yellow-400 bg-yellow-400/10 shadow-yellow-400/30",
  S: "text-amber-300 border-amber-400 bg-amber-400/10 shadow-amber-400/20",
  "A+": "text-emerald-300 border-emerald-400 bg-emerald-400/10 shadow-emerald-400/20",
  A: "text-teal-300 border-teal-400 bg-teal-400/10 shadow-teal-400/20",
  "B+": "text-sky-300 border-sky-400 bg-sky-400/10 shadow-sky-400/20",
  B: "text-blue-300 border-blue-400 bg-blue-400/10 shadow-blue-400/20",
  "B-": "text-indigo-300 border-indigo-400 bg-indigo-400/10 shadow-indigo-400/20",
  "C+": "text-violet-300 border-violet-400 bg-violet-400/10 shadow-violet-400/20",
  C: "text-purple-300 border-purple-400 bg-purple-400/10 shadow-purple-400/20",
  D: "text-rose-300 border-rose-400 bg-rose-400/10 shadow-rose-400/20",
};

// ─── UNITS & CLANS DATA DEFINITIONS ─────────────────────────

export type DamageType = "Cutting" | "Piercing" | "Blunt" | "Magic" | "Fire" | "Explosive";
export type ArmorType = "Unarmored" | "Light" | "Medium" | "Heavy" | "Building" | "Horse";

export interface BattleGear {
  name: { en: string; th: string };
  type: "Offensive" | "Defensive" | "Utility" | "Passive" | "Toggle" | "Initiate";
  effect: { en: string; th: string };
  duration?: { en: string; th: string };
  building?: { en: string; th: string };
  icon?: string;
}

export interface UnitData {
  id: string;
  name: { en: string; th: string };
  tier: string;
  role: { en: string; th: string };
  clan: "Dragon" | "Serpent" | "Lotus" | "Wolf";
  dmgType: "Cutting" | "Piercing" | "Blunt" | "Magic" | "Fire" | "Explosive";
  armorType: "Unarmored" | "Light" | "Medium" | "Heavy" | "Building" | "Horse";
  trainingPath: { en: string; th: string }[];
  gears: BattleGear[];
  description: { en: string; th: string };
}

export interface ClanData {
  id: "dragon" | "serpent" | "lotus" | "wolf";
  name: string;
  lore: L10n;
  color: string;
  units: UnitData[];
}

// ─── COMPLETE ALL 4 CLANS UNITS DATASET ───────────────────────

export const ALL_UNITS_DATA: UnitData[] = [
  // ==================== DRAGON CLAN ====================
  {
    id: "dragon_peasant",
    name: { en: "Peasant", th: "ชาวนา (Peasant)" },
    tier: "Tier 0 Worker",
    role: { en: "Gatherer & Base Builder", th: "เก็บเกี่ยวทรัพยากร & ฐานการฝึกทหาร" },
    clan: "Dragon",
    dmgType: "Piercing",
    armorType: "Unarmored",
    trainingPath: [{ en: "Peasant Hut", th: "กระท่อมชาวนา (Peasant Hut)" }],
    gears: [],
    description: {
      en: "The humble foundation of the Dragon Clan economy. Harvests rice, waters crops, puts out fires, and enters military dojos for training.",
      th: "รากฐานเศรษฐกิจของตระกูลมังกร ทำหน้าที่เกี่ยวข้าว ตักน้ำ ดับเพลิงอาคาร และเข้าฝึกวิชาในโรงฝึกเพื่อพัฒนาเป็นนักรบ",
    },
  },
  {
    id: "dragon_spearman",
    name: { en: "Spearman", th: "พลหอก (Spearman)" },
    tier: "Tier 1 Melee",
    role: { en: "Anti-Cavalry Specialist", th: "ผู้เชี่ยวชาญการต่อต้านม้า & ทหารราบแนวหน้า" },
    clan: "Dragon",
    dmgType: "Piercing",
    armorType: "Light",
    trainingPath: [{ en: "Dojo", th: "โรงดาบ (Dojo)" }],
    gears: [
      {
        name: { en: "Stun Strike", th: "แทงสกัดมึนงง" },
        type: "Offensive",
        effect: {
          en: "Strikes an enemy with immense thrusting force, stunning the target for a brief duration (effective against Zen Masters).",
          th: "แทงกระแทกศัตรูอย่างรุนแรง ทำให้เป้าหมายติดสถานะมึนงงชั่วคราว (ใช้หยุด Zen Master ได้ชะงัด)",
        },
        duration: { en: "~3-4 seconds stun", th: "มึนงงประมาณ 3-4 วินาที" },
      },
      {
        name: { en: "Whirling Spear", th: "ควงหอกสะเก็ดไฟ" },
        type: "Offensive",
        effect: {
          en: "Fuses black powder with the spear and twirls it rapidly, spraying explosive sparks that deal projectile damage to all nearby enemies.",
          th: "ควงหอกติดดินปืนอย่างรวดเร็ว ปล่อยสะเก็ดไฟสร้างความเสียหายรอบตัวเป็นวงกว้าง จัดการกลุ่มศัตรูเกราะบางได้ดีเยี่ยม",
        },
        duration: { en: "Active spin (~4s)", th: "ควงต่อเนื่องประมาณ 4 วินาที" },
      },
    ],
    description: {
      en: "Primary counter to cavalry units. Deals high piercing damage against horses and controls the frontline.",
      th: "ตัวเคาน์เตอร์ทหารม้าหลัก สร้างความเสียหายทะลวงเกราะใส่ยูนิตขี่ม้าอย่างรุนแรงและคุมแนวรบได้อย่างมั่นคง",
    },
  },
  {
    id: "dragon_archer",
    name: { en: "Archer", th: "พลธนู (Archer)" },
    tier: "Tier 1 Ranged",
    role: { en: "Ranged Harasser & Scout", th: "พลยิงระยะไกล & สอดแนม" },
    clan: "Dragon",
    dmgType: "Piercing",
    armorType: "Unarmored",
    trainingPath: [{ en: "Target Range", th: "ลานฝึกยิงธนู (Target Range)" }],
    gears: [
      {
        name: { en: "Zen Arrows", th: "ลูกศรส่องนภา" },
        type: "Utility",
        effect: {
          en: "Fires a mystical arrow high into the sky that grants vision and reveals the fog of war in a large target area around where it lands.",
          th: "ยิงลูกศรขึ้นสู่ท้องฟ้าเพื่อเปิดแผนที่และหมอกสงคราม (Fog of War) ในบริเวณเป้าหมายระยะไกล",
        },
        duration: { en: "Reveals map for ~15s", th: "เปิดหมอกส่องพื้นที่นาน 15 วินาที" },
      },
      {
        name: { en: "Fire Arrows", th: "ลูกศรเพลิง" },
        type: "Offensive",
        effect: {
          en: "Equips arrows with flaming tips, dealing continuous Fire damage to targets and rapidly setting enemy buildings ablaze.",
          th: "เปลี่ยนหัวลูกศรเป็นไฟ สร้างความเสียหายเพลิงต่อเนื่อง และเผาทำลายสิ่งก่อสร้างของศัตรูได้อย่างรวดเร็ว",
        },
        duration: { en: "Continuous burn damage", th: "เผาไหม้สร้างดาเมจไฟต่อเนื่อง" },
      },
    ],
    description: {
      en: "Fast and versatile ranged unit. Strong on elevated cliffs or watchtowers, providing vital vision and siege burning.",
      th: "ยูนิตยิงไกลที่มีความคล่องตัวสูง ได้เปรียบมากเมื่อยืนบนหน้าผาหรือหอคอย ช่วยเปิดหมอกและเผาทำลายฐานข้าศึก",
    },
  },
  {
    id: "dragon_chemist",
    name: { en: "Chemist", th: "นักเล่นแร่แปรธาตุ (Chemist)" },
    tier: "Tier 1 Support / Siege",
    role: { en: "Bombardier & Passive Healer", th: "พลปาระเบิด & ฟื้นฟูเพื่อนร่วมทัพ" },
    clan: "Dragon",
    dmgType: "Explosive",
    armorType: "Unarmored",
    trainingPath: [{ en: "Fireworks Factory", th: "โรงงานดอกไม้ไฟ (Fireworks Factory)" }],
    gears: [
      {
        name: { en: "Mandrake Spores", th: "ละอองสปอร์แมนเดรก" },
        type: "Utility",
        effect: {
          en: "Flings a flask of soporific spores that reduces enemy armor and slows enemy movement and attack speed.",
          th: "ปาขวดสปอร์พืชพิษ ทำให้เกราะของศัตรูลดลง พร้อมสโลว์ความเร็วในการเคลื่อนที่และโจมตี",
        },
        duration: { en: "Debuff lasts ~10s", th: "ลดพลังป้องกันและสโลว์นาน 10 วินาที" },
      },
      {
        name: { en: "Starburst Rockets", th: "จรวดดอกไม้ไฟระเบิดกระจาย" },
        type: "Offensive",
        effect: {
          en: "Fires a salvo of high-explosive fireworks rockets, dealing massive area-of-effect explosive damage to enemy buildings and clusters of troops (3 charges).",
          th: "ยิงจรวดดอกไม้ไฟระเบิดเป็นวงกว้าง สร้างความเสียหายระเบิดรุนแรงใส่สิ่งก่อสร้างและยูนิตศัตรูที่ยืนรวมกัน (พกได้ 3 ลูก)",
        },
        duration: { en: "Instant AoE burst", th: "ระเบิดสร้างความเสียหายเป็นวงกว้างทันที" },
      },
    ],
    description: {
      en: "Armed with volatile alchemy and healing herbs, the Chemist passively regenerates nearby allies' health while bombarding enemy structures.",
      th: "พกพาสมุนไพรรักษาคอยฮีลเลือดให้เพื่อนรอบตัวเมื่อยืนนิ่ง พร้อมขว้างสารเคมีระเบิดทำลายสิ่งก่อสร้างศัตรู",
    },
  },
  {
    id: "dragon_warrior",
    name: { en: "Dragon Warrior", th: "นักรบมังกร (Dragon Warrior)" },
    tier: "Tier 2 Melee",
    role: { en: "Versatile Brawler & Flanker", th: "นักสู้สายประชิดสารพัดประโยชน์" },
    clan: "Dragon",
    dmgType: "Cutting",
    armorType: "Medium",
    trainingPath: [
      { en: "Dojo", th: "โรงดาบ (Dojo)" },
      { en: "Target Range", th: "ลานฝึกยิงธนู (Target Range)" },
    ],
    gears: [
      {
        name: { en: "Chi Shield", th: "โล่พลังปราณ" },
        type: "Defensive",
        effect: {
          en: "Projects an energy shield around the warrior that deflects and completely negates incoming ranged projectile attacks for the duration.",
          th: "สร้างโล่ม่านพลังปราณคุ้มกัน ปัดป้องและบล็อกการโจมตีระยะไกล (ลูกธนู กระสุน) ทั้งหมดโดยสมบูรณ์",
        },
        duration: { en: "Active for ~10s", th: "ป้องกันการโจมตีระยะไกลนาน 10 วินาที" },
      },
      {
        name: { en: "Flame Sword", th: "ดาบเพลิงพิฆาต" },
        type: "Toggle",
        effect: {
          en: "Enchants the warrior's twin blades with roaring flames, converting melee attacks into Fire damage that burns structures and scorches infantry.",
          th: "เคลือบเปลวเพลิงลงบนดาบคู่ เปลี่ยนความเสียหายเป็นประเภท Fire เผาทำลายอาคารและศัตรูได้อย่างรวดเร็ว",
        },
        duration: { en: "Drains stamina while active", th: "เปิดใช้งานต่อเนื่องโดยเผาผลาญ Stamina" },
      },
    ],
    description: {
      en: "The agile dual-blade vanguard of the Dragon Clan, mastering both offensive flame swordplay and projectile-deflecting chi barriers.",
      th: "ทัพหน้าดาบคู่ผู้คล่องแคล่ว วิ่งเข้าประชิดได้อย่างรวดเร็วด้วยโล่ปราณกันธนู และจุดไฟเผาฐานด้วยเพลงดาบเพลิง",
    },
  },
  {
    id: "dragon_kabuki_warrior",
    name: { en: "Kabuki Warrior", th: "นักรบคะบุกิ (Kabuki Warrior)" },
    tier: "Tier 2 Hybrid Melee / Support",
    role: { en: "Illusionist & Disruptor", th: "นักรบระบำมนตรา & ปั่นป่วนสนามรบ" },
    clan: "Dragon",
    dmgType: "Magic",
    armorType: "Medium",
    trainingPath: [
      { en: "Dojo", th: "โรงดาบ (Dojo)" },
      { en: "Fireworks Factory", th: "โรงงานดอกไม้ไฟ (Fireworks Factory)" },
    ],
    gears: [
      {
        name: { en: "Stardust", th: "ละอองดาวสะกดอาวุธ" },
        type: "Utility",
        effect: {
          en: "Throws glistening stardust across an area that temporarily disables all enemy ranged weapon attacks, forcing ranged units into melee.",
          th: "หว่านละอองดาวระยิบระยับ ปิดผนึกและทำให้ศัตรูในพื้นที่ไม่สามารถใช้อาวุธยิงระยะไกลได้ชั่วคราว",
        },
        duration: { en: "Disables ranged for ~8-10s", th: "ปิดการยิงระยะไกลของศัตรูนาน 8-10 วินาที" },
      },
      {
        name: { en: "Flashpowder", th: "ผงแฟลชตาบอด" },
        type: "Utility",
        effect: {
          en: "Unleashes a blinding flash of powder in a wide area, reducing enemy sight range to zero, lowering enemy defenses, and resetting enemy aggro (3 charges).",
          th: "จุดระเบิดผงแสงวาบ ทำให้ศัตรูในระยะตาบอด ลดระยะการมองเห็นจนเหลือศูนย์ ลดเกราะศัตรู และรีเซ็ตเป้าหมายการโจมตี (พกได้ 3 ครั้ง)",
        },
        duration: { en: "Blinds enemies for ~6-8s", th: "ติดสถานะตาบอดและลดเกราะนาน 6-8 วินาที" },
      },
    ],
    description: {
      en: "An enigmatic theater warrior who juggles energy orbs to restore peasants' stamina and bewilders enemies with blinding magical powders.",
      th: "นักรบละครคาบูกิผู้ใช้มนตราสับเปลี่ยน โยนลูกแก้วฟื้นพลัง Stamina ให้ชาวนา และใช้ผงสะกดปิดฉากทหารยิงไกลของข้าศึก",
    },
  },
  {
    id: "dragon_powder_keg_cannoneer",
    name: { en: "Powder Keg Cannoneer", th: "พลปืนใหญ่ถังดินปืน (Powder Keg Cannoneer)" },
    tier: "Tier 2 Heavy Ranged / Siege",
    role: { en: "Long-Range Heavy Artillery", th: "ปืนใหญ่ถล่มฐานระยะไกล" },
    clan: "Dragon",
    dmgType: "Explosive",
    armorType: "Heavy",
    trainingPath: [
      { en: "Target Range", th: "ลานฝึกยิงธนู (Target Range)" },
      { en: "Fireworks Factory", th: "โรงงานดอกไม้ไฟ (Fireworks Factory)" },
    ],
    gears: [
      {
        name: { en: "Indirect Fire", th: "ยิงวิถีโค้งข้ามสิ่งกีดขวาง" },
        type: "Toggle",
        effect: {
          en: "Adjusts the cannon trajectory to arc high above cliffs, trees, and obstacles, greatly increasing maximum attack range.",
          th: "ปรับวิถีการยิงเป็นมุมโค้งสูง ข้ามหน้าผาและสิ่งกีดขวาง เพิ่มระยะยิงไกลขึ้นอย่างมหาศาล",
        },
        duration: { en: "Toggle mode (active until switched)", th: "เปิด/ปิด โหมดยิงวิถีโค้งได้ตามต้องการ" },
      },
      {
        name: { en: "Shrapnel Keg", th: "ถังระเบิดสะเก็ดกระจาย" },
        type: "Offensive",
        effect: {
          en: "Launches a massive reinforced keg filled with jagged shrapnel, detonating upon impact to deal devastating cutting/explosive damage across a huge radius.",
          th: "ยิงถังดินปืนอัดสะเก็ดเหล็กขนาดใหญ่ ระเบิดสร้างความเสียหายสะเก็ดรุนแรงเป็นวงกว้างใส่ทหารราบศัตรู",
        },
        duration: { en: "Instant heavy AoE burst", th: "ระเบิดทำลายล้างเป็นวงกว้างทันที" },
      },
    ],
    description: {
      en: "The Dragon Clan's primary siege artillery unit, wielding a massive shoulder-mounted cannon capable of demolishing watchtowers and infantry formations from afar.",
      th: "หน่วยปืนใหญ่หลักของตระกูลมังกร แบกกระบอกปืนใหญ่ยิงถล่มหอคอยและค่ายศัตรูจากระยะปลอดภัย",
    },
  },
  {
    id: "dragon_samurai",
    name: { en: "Samurai", th: "ซามูไร (Samurai)" },
    tier: "Tier 3 Elite Melee",
    role: { en: "Elite Champion & Army Inspirer", th: "สุดยอดนักรบเกราะหนัก & ผู้นำขวัญกำลังใจ" },
    clan: "Dragon",
    dmgType: "Cutting",
    armorType: "Heavy",
    trainingPath: [
      { en: "Dojo", th: "Dojo" },
      { en: "Target Range", th: "Target Range" },
      { en: "Fireworks Factory", th: "Fireworks Factory" },
    ],
    gears: [
      {
        name: { en: "Yang Blade", th: "ดาบเทพหยาง" },
        type: "Toggle",
        effect: {
          en: "Infuses the katana with the sacred power of Yang, generating bonus Yang points with every successful strike and dealing heightened damage.",
          th: "ผสานพลังหยางอันศักดิ์สิทธิ์เข้าสู่ตัวดาบ ทุกครั้งที่ฟันโดนศัตรูจะช่วยสะสมแต้ม Yang ให้กองทัพเร็วขึ้นพร้อมเพิ่มพลังโจมตี",
        },
        duration: { en: "Drains stamina continuously", th: "เผาผลาญ Stamina ต่อเนื่องขณะเปิดใช้งาน" },
      },
      {
        name: { en: "Dragon Skin", th: "เกราะผิวมังกรคุ้มกาย" },
        type: "Toggle",
        effect: {
          en: "Harnesses mystical martial concentration to render the Samurai completely immune to all missile and ranged projectile damage.",
          th: "รวบรวมสมาธิเปลี่ยนเกราะเหล็กให้กลายเป็นผิวมังกร ทำให้ป้องกันและไม่ได้รับความเสียหายจากการโจมตีระยะไกลทุกชนิด 100%",
        },
        duration: { en: "Drains stamina continuously", th: "เผาผลาญ Stamina ต่อเนื่องขณะเปิดใช้งาน" },
      },
    ],
    description: {
      en: "The pinnacle of Dragon Clan martial discipline. Honored warriors who fight with extreme precision, sacrificing their life upon death to release a spirit that buffs nearby allies.",
      th: "ขุมกำลังสูงสุดของตระกูลมังกร ฟันดาบด้วยความแม่นยำและรุนแรง เมื่อตายจะปล่อยดวงจิตมอบบัฟเพิ่มพลังใจให้กองทัพ",
    },
  },
  {
    id: "dragon_geisha",
    name: { en: "Geisha", th: "เกอิชา (Geisha)" },
    tier: "Support Healer",
    role: { en: "Combat Medic & Yang Sustainer", th: "หมอรักษาพยาบาล & สะสมแต้มหยาง" },
    clan: "Dragon",
    dmgType: "Magic",
    armorType: "Unarmored",
    trainingPath: [{ en: "Bathhouse", th: "โรงอาบน้ำ (Bathhouse)" }],
    gears: [
      {
        name: { en: "Sacrifice", th: "มหาเวทสละชีพฟื้นฟู" },
        type: "Utility",
        effect: {
          en: "Sacrifices the Geisha's physical life to channel pure spiritual light, instantly restoring full health and curing debuffs for all nearby allied units in a wide area.",
          th: "สละชีวิตตนเองเพื่อปลดปล่อยพลังวิญญาณ ฟื้นฟูพลังชีวิตของเพื่อนร่วมทัพทุกคนในบริเวณใกล้เคียงจนเต็มทันที พร้อมล้างสถานะผิดปกติทั้งหมด",
        },
        duration: { en: "Instant 100% mass heal (unit dies)", th: "ฮีลเพื่อนรอบตัวเต็ม 100% ทันที (ผู้ใช้จะเสียชีวิต)" },
      },
      {
        name: { en: "Fire Shield", th: "ม่านเพลิงคุ้มกาย" },
        type: "Toggle",
        effect: {
          en: "Projects a rotating sphere of intense flame around her body that burns and damages all enemy melee attackers who get close.",
          th: "สร้างม่านเปลวเพลิงหมุนวนรอบตัว เผาผลาญและสร้างความเสียหายไฟต่อเนื่องแก่ศัตรูระยะประชิดที่เข้ามาโจมตี",
        },
        duration: { en: "Drains stamina continuously", th: "เผาผลาญ Stamina ต่อเนื่องขณะเปิดใช้งาน" },
      },
    ],
    description: {
      en: "Graceful healers skilled in the gentler arts, sustaining soldiers on the battlefield and generating Yang points during combat.",
      th: "ยูนิตสนับสนุนที่ขาดไม่ได้ คอยเติมเลือดรักษาทหาร ช่วยเร่งการฟาร์มแต้ม Yang และมีเวทสละชีพพลิกสถานการณ์สงคราม",
    },
  },
  {
    id: "dragon_guardian",
    name: { en: "Guardian", th: "การ์เดียน (Guardian)" },
    tier: "Tier 3 Heavy Juggernaut (WotW)",
    role: { en: "Colossal Frontline Tank", th: "สุดยอดทหารแทงก์ร่างยักษ์" },
    clan: "Dragon",
    dmgType: "Blunt",
    armorType: "Heavy",
    trainingPath: [{ en: "Monastery", th: "อาราม (Monastery)" }],
    gears: [
      {
        name: { en: "Last Stand", th: "คลั่งสู้หยดสุดท้าย" },
        type: "Passive",
        effect: {
          en: "When fatally wounded, enters an unstoppable berserk rage for a short duration, becoming completely impervious to all damage and dealing increased attack damage before dying.",
          th: "เมื่อพลังชีวิตหมดลง จะเข้าสู่สถานะคลั่งไร้เทียมทานชั่วขณะ โดยเป็นอมตะต่อความเสียหายทุกชนิดและโจมตีแรงขึ้นอย่างมากก่อนจะสิ้นชีพ",
        },
        duration: { en: "Invulnerable rage for ~5s", th: "อมตะและคลั่งเป็นเวลาประมาณ 5 วินาที" },
      },
      {
        name: { en: "Concussion Smash", th: "ทุบพื้นสะเทือนปฐพี" },
        type: "Offensive",
        effect: {
          en: "Slams his explosive-runed club into the ground, detonating shockwaves that damage and heavily stun all nearby enemy units at the expense of some of his own health.",
          th: "ฟาดกระบองสลักอักขระระเบิดลงพื้น สร้างคลื่นกระแทกทำดาเมจและสตั้นศัตรูรอบตัวเป็นวงกว้าง (แลกด้วยพลังชีวิตของผู้ใช้ส่วนหนึ่ง)",
        },
        duration: { en: "AoE stun for ~4s", th: "สตั้นศัตรูรอบตัวนานประมาณ 4 วินาที" },
      },
    ],
    description: {
      en: "A hulking warrior possessing devastating blunt strength and rune-carved clubs, holding the frontline to the bitter end with his legendary Last Stand.",
      th: "ยูนิตเกราะหนักร่างยักษ์จากภาค Winter of the Wolf ทุบทำลายแนวรบศัตรูด้วยกระบองอักขระ และมีสกิลคลั่งเป็นอมตะก่อนตาย",
    },
  },
  {
    id: "dragon_battle_maiden",
    name: { en: "Battle Maiden", th: "แบทเทิลไมเดน (Battle Maiden)" },
    tier: "Tier 2 Hybrid (WotW)",
    role: { en: "Tactical Infiltrator & Siphoner", th: "นักรบหญิงมนตราแยกร่าง & สูบพลังหอคอย" },
    clan: "Dragon",
    dmgType: "Magic",
    armorType: "Medium",
    trainingPath: [
      { en: "Bathhouse", th: "โรงอาบน้ำ (Bathhouse)" },
      { en: "Dojo", th: "โรงดาบ (Dojo)" },
    ],
    gears: [
      {
        name: { en: "Double Image", th: "วิชากระจกแยกร่าง" },
        type: "Utility",
        effect: {
          en: "Splits into two transparent mirror images that can be commanded independently, dealing 50% damage. When one dies, the survivor reverts to normal form.",
          th: "แยกร่างเงาออกเป็น 2 ร่างที่สามารถบังคับแยกกันได้ (สร้างดาเมจ 50%) หากร่างเงาใดร่างหนึ่งตาย ร่างที่เหลือจะกลับคืนสภาพเดิม",
        },
        duration: { en: "Active until clone dies", th: "อยู่จนกว่าร่างเงาจะตายหรือหมดเวลา" },
      },
      {
        name: { en: "Blazing Purity", th: "สูบพลังหอคอยเสริมแกร่ง" },
        type: "Toggle",
        effect: {
          en: "Channels energy while standing still to sap magical defenses from enemy watchtowers and transfer the power to nearby allies as a bonus damage buff.",
          th: "ยืนร่ายเพื่อดูดซับพลังเวทจากหอคอยศัตรู แล้วถ่ายทอดเป็นบัฟเพิ่มพลังโจมตีให้เพื่อนร่วมทัพรอบตัว",
        },
        duration: { en: "Drains stamina while channeling", th: "เผาผลาญ Stamina ต่อเนื่องขณะยืนร่าย" },
      },
    ],
    description: {
      en: "An elite warrior maiden adept in illusionary martial arts and disrupting enemy tower fortifications.",
      th: "นักรบหญิงสายมนตรา แยกเงาลวงตาข้าศึกและสามารถตัดตอนพลังเวทของป้อมปราการศัตรูได้อย่างแยบยล",
    },
  },
  {
    id: "zen_kenji",
    name: { en: "Kenji Oja", th: "เคนจิ โอจา (Kenji Oja)" },
    tier: "Zen Master / Hero",
    role: { en: "Dragon Heir & Master Swordsman", th: "ทายาทตระกูลมังกร & ปรมาจารย์เพลงดาบ" },
    clan: "Dragon",
    dmgType: "Cutting",
    armorType: "Medium",
    trainingPath: [{ en: "Keep / Fortress", th: "ป้อมปราการ (Keep)" }],
    gears: [
      {
        name: { en: "Dragon's Spirit", th: "จิตวิญญาณมังกรศักดิ์สิทธิ์" },
        type: "Passive",
        effect: {
          en: "Innate hero mastery. After completing lethal sword combos, Kenji inspires nearby allies to fight harder. In his awakened form, he gains extreme HP and damage resistances.",
          th: "ความสามารถประจำตัว เมื่อออกคอมโบเพลงดาบสำเร็จจะสร้างขวัญกำลังใจเพิ่มพลังให้ทหารรอบตัว และเมื่อได้รับพลังจิตวิญญาณมังกรจะมีเลือดและความทนทานสูงยิ่งยวด",
        },
        duration: { en: "Permanent passive hero aura", th: "ความสามารถติดตัวตลอดเวลา" },
      },
    ],
    description: {
      en: "The protagonist and leader of the Dragon Clan. Masters quickdraw katana strikes, pistol marksmanship, and inspires his warriors to glorious victory.",
      th: "ผู้นำสูงสุดของตระกูลมังกร เชี่ยวชาญเพลงดาบตัดสลับปืนสั้น และเป็นศูนย์รวมจิตใจของเหล่านักรบมังกรทุกคน",
    },
  },
  {
    id: "zen_otomo",
    name: { en: "Otomo", th: "โอโตโมะ (Otomo)" },
    tier: "Zen Master",
    role: { en: "Loyal General & Army Commander", th: "แม่ทัพผู้ภักดี & ปลุกขวัญกองทัพ" },
    clan: "Dragon",
    dmgType: "Cutting",
    armorType: "Heavy",
    trainingPath: [{ en: "Keep / Fortress", th: "ป้อมปราการ (Keep)" }],
    gears: [
      {
        name: { en: "Battle Cry", th: "เสียงกู่ร้องแห่งศึก" },
        type: "Utility",
        effect: {
          en: "Unleashes a thunderous battle roar, increasing the attack power of himself and surrounding allied units by 20% for a duration.",
          th: "เปล่งเสียงคำรามปลุกใจศึก เพิ่มพลังโจมตีของตัวเองและเพื่อนทหารรอบตัวขึ้น 20% นาน 15-20 วินาที",
        },
        duration: { en: "Buff lasts ~15-20s", th: "เพิ่มพลังโจมตีนาน 15-20 วินาที" },
      },
    ],
    description: {
      en: "Kenji's steadfast mentor and commander, embodying unwavering loyalty and inspiring all Dragon warriors to fight with redoubled fury.",
      th: "แม่ทัพคู่ใจของเคนจิ เปี่ยมด้วยเกียรติยศและความซื่อสัตย์ เสียงคำรามของเขาสามารถพลิกแนวรบให้บุกตะลุยได้อย่างฮึกเหิม",
    },
  },
  {
    id: "zen_kazan",
    name: { en: "Kazan", th: "คาซาน (Kazan)" },
    tier: "Zen Master",
    role: { en: "Gourmand Monk & Fire Brawler", th: "พระนักสู้หมัดเมา & พ่นเพลิงพิฆาต" },
    clan: "Dragon",
    dmgType: "Blunt",
    armorType: "Medium",
    trainingPath: [{ en: "Keep / Fortress", th: "ป้อมปราการ (Keep)" }],
    gears: [
      {
        name: { en: "Flame Breath", th: "ลมหายใจเพลิงสุรา" },
        type: "Offensive",
        effect: {
          en: "Takes a swig of potent flammable sake and spits it through a flame, scorching melee enemies and structures with intense continuous fire.",
          th: "ดื่มสุราแรงสูงแล้วพ่นไฟเผาผลาญศัตรูระยะประชิดและสิ่งก่อสร้างอย่างรุนแรง",
        },
        duration: { en: "Instant spray with lingering burn", th: "พ่นไฟเผาไหม้เป้าหมายทันทีพร้อมดาเมจไฟตกค้าง" },
      },
    ],
    description: {
      en: "A jovial monk with immense physical strength and a love for fine spirits, turning his fiery brew into a terrifying weapon on the battlefield.",
      th: "พระนักสู้ผู้รักสุราและการกิน ร่างกายกำยำทนทาน สามารถพ่นไฟจากเหล้าเผาศัตรูและสิ่งปลูกสร้างให้มอดไหม้",
    },
  },
  {
    id: "zen_arah",
    name: { en: "Arah", th: "อาราห์ (Arah)" },
    tier: "Zen Master",
    role: { en: "Master Sniper & Grand Scout", th: "สุดยอดพลซุ่มยิง & ส่องตรวจการณ์ข้ามพิกัด" },
    clan: "Dragon",
    dmgType: "Piercing",
    armorType: "Light",
    trainingPath: [{ en: "Keep / Fortress", th: "ป้อมปราการ (Keep)" }],
    gears: [
      {
        name: { en: "Sight Beyond Sight", th: "เนตรทิพย์ส่องนภา" },
        type: "Utility",
        effect: {
          en: "Shoots a mind-linked arrow across vast distances, enabling Arah to glimpse distant landscape and sniper-target enemies far outside standard vision range.",
          th: "ยิงลูกศรเชื่อมจิตระยะไกล เปิดหมอกส่องพื้นที่และช่วยให้ซุ่มยิงศัตรูได้จากระยะไกลลิบเกินสายตาปกติ",
        },
        duration: { en: "Reveals terrain for ~15s", th: "เปิดวิสัยทัศน์ระยะไกลนาน 15 วินาที" },
      },
    ],
    description: {
      en: "The realm's premier Dragon archer whose shots never miss and whose heightened senses reveal concealed enemies far across the battlefield.",
      th: "สุดยอดพลแม่นปืนธนูของตระกูลมังกร ยิงศัตรูได้จากระยะไกลลิบและใช้เนตรทิพย์เปิดแผนที่หาตำแหน่งศัตรู",
    },
  },
  {
    id: "zen_tao",
    name: { en: "Tao", th: "เต๋า (Tao)" },
    tier: "Zen Master",
    role: { en: "Balance Monk & Damage Reflector", th: "นักพรตแห่งสมดุล & สะท้อนความเสียหาย" },
    clan: "Dragon",
    dmgType: "Blunt",
    armorType: "Medium",
    trainingPath: [{ en: "Keep / Fortress", th: "ป้อมปราการ (Keep)" }],
    gears: [
      {
        name: { en: "Reversal of Fortune", th: "สมดุลกรรมสะท้อนกลับ" },
        type: "Toggle",
        effect: {
          en: "Taps into the universal cosmic balance, returning a portion of all incoming damage back to the attacker as pure recoil harm.",
          th: "ปรับสมดุลพลังจักรวาล สะท้อนความเสียหายส่วนหนึ่งที่ได้รับกลับไปยังผู้โจมตีทันที",
        },
        duration: { en: "Drains stamina while active", th: "เผาผลาญ Stamina ต่อเนื่องขณะเปิดใช้งาน" },
      },
    ],
    description: {
      en: "A philosophical monk living in harmony with Yin and Yang, turning enemy aggression against themselves through spiritual reflection.",
      th: "นักพรตผู้เข้าใจในสัจธรรมแห่งหยินหยาง ใช้กระบองคู่กายและมนตราสะท้อนพลังโจมตีคืนใส่ผู้ที่คิดร้าย",
    },
  },
  {
    id: "zen_teppo",
    name: { en: "Teppo", th: "เทปโปะ (Teppo)" },
    tier: "Zen Master (WotW)",
    role: { en: "Pyrotechnic Engineer & Anti-Magic Defender", th: "วิศวกรปืนใหญ่ & โล่ต้านเวทมนตร์" },
    clan: "Dragon",
    dmgType: "Explosive",
    armorType: "Heavy",
    trainingPath: [{ en: "Keep / Fortress", th: "ป้อมปราการ (Keep)" }],
    gears: [
      {
        name: { en: "Magic Negation", th: "ม่านพลังสลายเวทมนตร์" },
        type: "Toggle",
        effect: {
          en: "Generates a powerful anti-magic barrier that renders Teppo completely immune to all enemy magical damage and spell effects.",
          th: "กางม่านพลังพิเศษต้านเวท ทำให้เทปโปะไม่ได้รับผลกระทบหรือความเสียหายจากเวทมนตร์ทุกชนิด 100%",
        },
        duration: { en: "Drains stamina while active", th: "เผาผลาญ Stamina ต่อเนื่องขณะเปิดใช้งาน" },
      },
    ],
    description: {
      en: "A master mechanic and pyrotechnician equipped with explosive rocket packs and anti-magic shielding technology.",
      th: "ปรมาจารย์ด้านดินปืนและดอกไม้ไฟ แบกแท่นยิงจรวดคู่หลังและมีเกราะป้องกันเวทมนตร์ชั้นสูง",
    },
  },
  {
    id: "zen_garrin",
    name: { en: "Garrin", th: "การ์ริน (Garrin)" },
    tier: "Zen Master",
    role: { en: "Master of Steeds & Cavalry Commander", th: "เจ้าแห่งอาชา & แม่ทัพทหารม้า" },
    clan: "Dragon",
    dmgType: "Piercing",
    armorType: "Medium",
    trainingPath: [{ en: "Keep / Fortress", th: "ป้อมปราการ (Keep)" }],
    gears: [
      {
        name: { en: "Call Horse", th: "ผิวปากเรียกม้าป่า" },
        type: "Utility",
        effect: {
          en: "Whistles to instantly summon the nearest free wild horse to his location, enabling instant mounting with massive cavalry attack bonuses.",
          th: "ผิวปากเรียกม้าป่าที่อยู่ใกล้ที่สุดให้วิ่งมาหาทันที เพื่อให้ตนเองหรือเพื่อนร่วมทัพขึ้นขี่ได้ทันใจ พร้อมมอบโบนัสพลังโจมตีบนหลังม้าอย่างมหาศาล",
        },
        duration: { en: "Instant horse summon", th: "เรียกม้ามายังตำแหน่งทันที" },
      },
    ],
    description: {
      en: "A legendary horseman whose kinship with wild steeds allows him to summon horses across the battlefield without needing stables.",
      th: "ยอดนักขี่ม้าแห่งแผ่นดิน สามารถเรียกม้าป่ามาช่วยรบได้ทุกที่และเพิ่มพลังการโจมตีบนหลังม้าให้สูงเป็นพิเศษ",
    },
  },

  // ==================== SERPENT CLAN ====================
  {
    id: "serpent_peasant",
    name: { en: "Peasant (Serpent)", th: "ชาวบ้าน (Serpent)" },
    tier: "Tier 0 Worker",
    role: { en: "Resource Gatherer & Trainer", th: "เก็บเกี่ยวทรัพยากร & ฐานฝึกทหาร" },
    clan: "Serpent",
    dmgType: "Piercing",
    armorType: "Unarmored",
    trainingPath: [{ en: "Peasant Hut", th: "กระท่อมชาวนา (Peasant Hut)" }],
    gears: [],
    description: {
      en: "The Serpent Clan's workforce. Harvests rice and water, fights fires, and enters the Tavern or other buildings to train into combat units.",
      th: "กำลังแรงงานของเผ่างู เก็บเกี่ยวข้าวและน้ำ ดับไฟ และเข้า Tavern เพื่อฝึกเป็นนักรบสไตล์กองโจรของเผ่างู",
    },
  },
  {
    id: "serpent_swordsman",
    name: { en: "Swordsman", th: "นักดาบ (Swordsman)" },
    tier: "Tier 1 Melee",
    role: { en: "Light Infantry Raider", th: "พลดาบจู่โจมเร็ว & ฉกทรัพยากร" },
    clan: "Serpent",
    dmgType: "Cutting",
    armorType: "Light",
    trainingPath: [{ en: "Tavern", th: "โรงเหล้า (Tavern)" }],
    gears: [
      {
        name: { en: "Mugging", th: "ปล้นสะดม" },
        building: { en: "Thieves Guild", th: "Thieves Guild" },
        type: "Utility",
        effect: {
          en: "Steals rice or water directly from enemy peasants upon striking them, funneling resources back to the Serpent economy.",
          th: "ฟันแย่งชิงข้าวหรือน้ำจากชาวบ้านศัตรูทันทีเมื่อโจมตี ส่งทรัพยากรกลับมายังเศรษฐกิจของเผ่างู",
        },
      },
      {
        name: { en: "Glass Sword", th: "ดาบแก้วพิฆาต" },
        building: { en: "Metal Shop", th: "Metal Shop" },
        type: "Offensive",
        effect: {
          en: "Charges up and delivers a single devastating blow dealing massive burst damage — but shatters the blade on impact, reducing attack power afterward.",
          th: "สะสมพลังแล้วฟันครั้งเดียวด้วยดาเมจมหาศาล — แต่ดาบแตกหักหลังจากนั้น ลดพลังโจมตีลง",
        },
      },
    ],
    description: {
      en: "The backbone of Serpent early aggression. Cheap, fast, and sneaky — perfect for raiding enemy peasants and stealing resources while the main army builds up.",
      th: "กำลังหลักของการบุกต้นเกมของเผ่างู ราคาถูก คล่องตัว และแอบเงียบ — เหมาะสำหรับบุกชิงทรัพยากรจากชาวบ้านศัตรูขณะที่กองทัพยังสร้าง",
    },
  },
  {
    id: "serpent_crossbowman",
    name: { en: "Crossbowman", th: "พลหน้าไม้ (Crossbowman)" },
    tier: "Tier 1 Ranged",
    role: { en: "Heavy Ranged Piercer", th: "พลยิงระยะไกลเจาะเกราะ" },
    clan: "Serpent",
    dmgType: "Piercing",
    armorType: "Light",
    trainingPath: [{ en: "Sharpshooter Guild", th: "Sharpshooter Guild" }],
    gears: [
      {
        name: { en: "Phosphorus Bolts", th: "ลูกดอกฟอสฟอรัส" },
        building: { en: "Alchemist Hut", th: "Alchemist Hut" },
        type: "Offensive",
        effect: {
          en: "Dips crossbow bolts in phosphorus solution — bolts ignite on impact, dealing continuous Fire damage and setting wooden structures ablaze.",
          th: "จุ่มลูกดอกในสารฟอสฟอรัส ลูกดอกลุกไหม้เมื่อกระทบ สร้างความเสียหายไฟต่อเนื่องและเผาสิ่งก่อสร้างไม้",
        },
      },
    ],
    description: {
      en: "Reliable Tier-1 ranged unit with armor-piercing bolts. Slower rate of fire than archers but heavier damage per shot, especially effective against cavalry and light-armored troops.",
      th: "ยูนิตยิงระยะไกล Tier-1 ที่เชื่อถือได้ ลูกดอกเจาะเกราะ อัตราการยิงช้ากว่าธนูแต่ดาเมจต่อครั้งสูงกว่า ได้เปรียบมากต่อม้าและทหารเกราะเบา",
    },
  },
  {
    id: "serpent_musketeer",
    name: { en: "Musketeer", th: "พลปืนคาบศิลา (Musketeer)" },
    tier: "Tier 1 Ranged / Gunpowder",
    role: { en: "Accurate Gunpowder Marksman", th: "พลปืนแม่นยำพิสัยกลาง" },
    clan: "Serpent",
    dmgType: "Explosive",
    armorType: "Light",
    trainingPath: [{ en: "Alchemist Hut", th: "Alchemist Hut" }],
    gears: [
      {
        name: { en: "Blast Shot", th: "กระสุนระเบิด" },
        building: { en: "Metal Shop", th: "Metal Shop" },
        type: "Offensive",
        effect: {
          en: "The Metal Shop reinforces the musket barrel to fire explosive charges instead of shot. Deals AoE explosive damage and can set buildings on fire — extremely effective against clustered troops and structures.",
          th: "Metal Shop เสริมลำกล้องปืนให้ยิงกระสุนระเบิดแทนกระสุนธรรมดา สร้างดาเมจระเบิดเป็นวงกว้างและเผาสิ่งก่อสร้าง — ได้ผลมากกับทหารที่ยืนรวมกันและอาคาร",
        },
      },
      {
        name: { en: "Sniper Scope", th: "กล้องซุ่มยิง" },
        building: { en: "Thieves Guild", th: "Thieves Guild" },
        type: "Toggle",
        effect: {
          en: "Costly glasswork scopes from the Thieves Guild greatly extend the Musketeer range and change attack type to Piercing — deadly against cavalry. The Musketeer cannot move while in sniper mode.",
          th: "กล้องแก้วราคาแพงจาก Thieves Guild เพิ่มระยะโจมตีอย่างมากและเปลี่ยนประเภทความเสียหายเป็น Piercing — ร้ายแรงต่อม้า แต่ไม่สามารถเคลื่อนที่ขณะซุ่มยิง",
        },
        duration: { en: "Toggle — cannot move while active, changes dmg type to Piercing", th: "เปิด/ปิด — เคลื่อนที่ไม่ได้ขณะเปิด เปลี่ยนดาเมจเป็น Piercing" },
      },
    ],
    description: {
      en: "The proud Musketeer never misses — their musket normal attack is an instant hit. Blast Shot devastates groups and Sniper Scope makes them lethal at extreme range against cavalry.",
      th: "Musketeer ผู้หยิ่งทะนงตนไม่เคยพลาดเป้า — การโจมตีปกติเป็น Instant Hit Blast Shot ทำลายล้างกลุ่มทหาร และ Sniper Scope ทำให้ร้ายแรงในระยะสุดลึกโดยเฉพาะต่อม้า",
    },
  },
  {
    id: "serpent_raider",
    name: { en: "Raider", th: "เรดเดอร์ (Raider)" },
    tier: "Tier 2 Siege/Melee",
    role: { en: "Base Destroyer / Arsonist", th: "ตัวลอบเผาทำลายฐาน" },
    clan: "Serpent",
    dmgType: "Fire",
    armorType: "Medium",
    trainingPath: [
      { en: "Tavern", th: "Tavern" },
      { en: "Thieves Guild", th: "Thieves Guild" },
    ],
    gears: [
      {
        name: { en: "Brush Fire", th: "ไฟลามทุ่ง" },
        building: { en: "Alchemist Hut", th: "Alchemist Hut" },
        type: "Offensive",
        effect: {
          en: "Ignites surrounding terrain, burning down buildings and rice fields rapidly.",
          th: "จุดไฟเผาพื้นที่โดยรอบ เผาแปลงข้าวและสิ่งก่อสร้างอย่างรวดเร็ว",
        },
      },
    ],
    description: {
      en: "The infamous building burner of Serpent Clan. After acquiring Magnesium Torches upgrade, even a single Raider can burn down a building alone. Terrifying when sent to raid enemy rice paddies.",
      th: "ราชาแห่งการเผาทำลายของเผ่างู เมื่อได้รับอัปเกรด Magnesium Torches แม้แต่ Raider คนเดียวก็สามารถเผาอาคารได้ น่าหวาดกลัวมากเมื่อส่งไปบุกแปลงข้าวศัตรู",
    },
  },
  {
    id: "serpent_bandit",
    name: { en: "Bandit", th: "โจรกบดาน (Bandit)" },
    tier: "Tier 2 Scout / Assassin",
    role: { en: "Stealthy Guerrilla & Assassin", th: "โจรกบดานสายซุ่มโจมตี" },
    clan: "Serpent",
    dmgType: "Cutting",
    armorType: "Medium",
    trainingPath: [
      { en: "Tavern", th: "Tavern" },
      { en: "Sharpshooter Guild", th: "Sharpshooter Guild" },
    ],
    gears: [
      {
        name: { en: "Paralysis Darts", th: "ดาร์ทพิษอัมพาต" },
        building: { en: "Metal Shop", th: "Metal Shop" },
        type: "Offensive",
        effect: {
          en: "The Metal Shop coats the Bandit ammunition with a quick-acting muscle-paralyzing poison. Causes intense spasms that render an enemy completely helpless. The Bandit can carry only 6 such darts at a time.",
          th: "Metal Shop เคลือบดาร์ทด้วยยาพิษทำอัมพาตกล้ามเนื้ออย่างรวดเร็ว ทำให้ศัตรูเคลื่อนไหวไม่ได้ Bandit พกได้เพียง 6 ดาร์ทเท่านั้น",
        },
        duration: { en: "6 darts max — instant paralysis on hit", th: "สูงสุด 6 ดาร์ท — อัมพาตทันทีเมื่อโดน" },
      },
      {
        name: { en: "Stealth", th: "กบดานล่องหน" },
        building: { en: "Thieves Guild", th: "Thieves Guild" },
        type: "Toggle",
        effect: {
          en: "Moving stealthily drains the Bandit stamina continuously, making him nearly invisible while moving. Stealth breaks the instant he attacks or engages combat.",
          th: "การเดินกบดานดูดสตามิน่าต่อเนื่อง ทำให้ Bandit แทบมองไม่เห็นขณะเคลื่อนที่ ล่องหนสิ้นสุดทันทีที่โจมตีหรือเข้าสู่การสู้รบ",
        },
        duration: { en: "Drains stamina — breaks on attack", th: "กินสตามิน่าต่อเนื่อง — สิ้นสุดเมื่อโจมตี" },
      },
    ],
    description: {
      en: "Veteran survivors who fight dirty and never take prisoners. Masters of guerrilla warfare — can turn invisible to assassinate key targets or disrupt enemy flanks with paralysis darts.",
      th: "ทหารผ่านศึกที่รอดมาได้ด้วยการสู้แบบสกปรก ผู้เชี่ยวชาญสงครามกองโจรที่ล่องหนเพื่อลอบสังหารเป้าหมายสำคัญหรือก่อกวนปีกข้าศึกด้วยดาร์ทพิษ",
    },
  },
  {
    id: "serpent_cannoneer",
    name: { en: "Cannoneer", th: "พลปืนใหญ่ (Cannoneer)" },
    tier: "Tier 2 Heavy Ranged / Siege",
    role: { en: "Long-Range Heavy Artillery", th: "ปืนใหญ่ถล่มระยะไกล" },
    clan: "Serpent",
    dmgType: "Explosive",
    armorType: "Heavy",
    trainingPath: [
      { en: "Sharpshooter Guild", th: "Sharpshooter Guild" },
      { en: "Alchemist Hut", th: "Alchemist Hut" },
    ],
    gears: [
      {
        name: { en: "Chain Shot", th: "ลูกกระสุนโซ่ตัด" },
        building: { en: "Metal Shop", th: "Metal Shop" },
        type: "Offensive",
        effect: {
          en: "Loads a chain-linked shot that rips through multiple enemies in a line, dealing devastating cutting damage to all units caught in its path.",
          th: "บรรจุกระสุนโซ่เชื่อมที่ฉีกผ่านหลายศัตรูในแนวเดียวกัน สร้างความเสียหาย Cutting ที่รุนแรงต่อทุกยูนิตในเส้นทาง",
        },
        duration: { en: "Instant — pierces multiple units in a line", th: "ทันที — ผ่านทะลุยูนิตหลายตัวในแนวเดียว" },
      },
    ],
    description: {
      en: "Respected and feared unlike the arrogant Musketeer, the Cannoneer hauls tremendous solid-iron cannons across the battlefield. Heavy iron shot rips through enemy ranks and topples fortifications.",
      th: "ได้รับความยำเกรงต่างจาก Musketeer ผู้หยิ่งทะนง Cannoneer ลากปืนใหญ่เหล็กมหึมาข้ามสนามรบ กระสุนเหล็กฉีกทะลุแนวทหารและพังป้อมปราการอย่างโหดร้าย",
    },
  },
  {
    id: "serpent_slasher",
    name: { en: "Slasher", th: "สแลชเชอร์ (Slasher)" },
    tier: "Tier 2 Melee / Cavalry",
    role: { en: "Fast Mounted Raider", th: "นักรบขี่ม้าจู่โจมเร็ว" },
    clan: "Serpent",
    dmgType: "Cutting",
    armorType: "Medium",
    trainingPath: [
      { en: "Tavern", th: "Tavern" },
      { en: "Alchemist Hut", th: "Alchemist Hut" },
    ],
    gears: [
      {
        name: { en: "Garotte", th: "สายรัดคอสังหาร" },
        building: { en: "Thieves Guild", th: "Thieves Guild" },
        type: "Offensive",
        effect: {
          en: "The Slasher uses a garrote wire to silently strangle an isolated target unit, dealing massive Cutting damage to separated or lone enemies.",
          th: "Slasher ใช้ลวดรัดคอสังหารเป้าหมายที่แยกตัวอย่างเงียบ สร้างความเสียหาย Cutting มหาศาลกับศัตรูที่อยู่คนเดียวหรือแยกตัวออกมา",
        },
        duration: { en: "Instant single-target high damage", th: "ดาเมจสูงใส่เป้าหมายเดี่ยวทันที" },
      },
    ],
    description: {
      en: "The Serpent Clan mounted raider. Slashers use horse speed to strike-and-retreat, harassing enemy formations and picking off isolated units with their garrote.",
      th: "นักรบขี่ม้าบุกโจมตีของเผ่างู ใช้ความเร็วม้าโจมตีแล้วถอย รบกวนแนวทหารศัตรูและเก็บยูนิตที่แยกตัวด้วยลวดรัดคอ",
    },
  },
  {
    id: "serpent_fan_geisha",
    name: { en: "Fan Geisha", th: "พัดเกอิชา (Fan Geisha)" },
    tier: "Support Healer",
    role: { en: "Combat Medic & Yin Sustainer", th: "หมอรักษาพยาบาล & สะสม Yin" },
    clan: "Serpent",
    dmgType: "Magic",
    armorType: "Unarmored",
    trainingPath: [{ en: "Bathhouse", th: "Bathhouse" }],
    gears: [
      {
        name: { en: "Seduction", th: "เสน่ห์ล่อศัตรู" },
        building: { en: "Thieves Guild", th: "Thieves Guild" },
        type: "Utility",
        effect: {
          en: "Uses irresistible charm to bewitch enemy soldiers, temporarily causing them to ignore orders and stop attacking while under the Fan Geisha influence.",
          th: "ใช้เสน่ห์ที่ต้านทานไม่ได้ล่อใจทหารศัตรู ทำให้พวกเขาเพิกเฉยต่อคำสั่งชั่วคราวและหยุดโจมตีขณะอยู่ภายใต้อิทธิพลของ Fan Geisha",
        },
        duration: { en: "Stuns/distracts nearby enemies for several seconds", th: "หยุดหรือรบกวนศัตรูรอบข้างหลายวินาที" },
      },
    ],
    description: {
      en: "Resilient support units who tend to the Serpent army day after day. Their fans restore health to nearby allies and generate Yin points during combat.",
      th: "ยูนิตสนับสนุนที่ทนทานซึ่งดูแลกองทัพเผ่างูทุกวัน พัดของพวกเขาฟื้นฟูพลังชีวิตให้พันธมิตรรอบข้างและสร้าง Yin Point ระหว่างการต่อสู้",
    },
  },
  {
    id: "serpent_enforcer",
    name: { en: "Enforcer", th: "บังคับการ (Enforcer)" },
    tier: "Tier 3 Heavy Melee",
    role: { en: "Slow Juggernaut & Disabler", th: "ทหารหนักสายสตั้นดิสเอเบิล" },
    clan: "Serpent",
    dmgType: "Blunt",
    armorType: "Heavy",
    trainingPath: [
      { en: "Tavern", th: "Tavern" },
      { en: "Sharpshooter Guild", th: "Sharpshooter Guild" },
      { en: "Alchemist Hut", th: "Alchemist Hut" },
    ],
    gears: [
      {
        name: { en: "Hobnailed Boots", th: "รองเท้าตะปูเหล็ก" },
        building: { en: "Metal Shop", th: "Metal Shop" },
        type: "Passive",
        effect: {
          en: "The Metal Shop attaches wicked steel nails to the Enforcer boots, dramatically improving his movement speed — removing his primary weakness.",
          th: "Metal Shop ติดตะปูเหล็กแหลมบนรองเท้าของ Enforcer เพิ่มความเร็วในการเคลื่อนที่อย่างมาก — ขจัดจุดอ่อนหลักของเขา",
        },
        duration: { en: "Permanent passive movement speed bonus", th: "โบนัสความเร็วการเคลื่อนที่ถาวร" },
      },
      {
        name: { en: "Low Blow", th: "หมัดใต้เข็มขัด" },
        building: { en: "Thieves Guild", th: "Thieves Guild" },
        type: "Offensive",
        effect: {
          en: "A dishonorable sucker punch to the gut — the epitome of the Enforcer fighting style. Drains stamina considerably but knocks the wind out of the victim, leaving them dazed, slowed, and slow to recover.",
          th: "หมัดชกท้องไร้เกียรติ — สุดยอดสไตล์ของ Enforcer กินสตามิน่ามาก แต่ทำให้เหยื่อหอบ เซ ช้า และฟื้นตัวได้ยาก",
        },
        duration: { en: "Costs 60% stamina — stuns and slows target", th: "กินสตามิน่า 60% — สตั้นและสโลว์เป้าหมาย" },
      },
    ],
    description: {
      en: "A hulking bruiser who fights with dishonor and brute force. Slow without Hobnailed Boots, but once equipped becomes a terrifying engine of destruction. Low Blow can disable even elite units.",
      th: "ยักษ์ใหญ่ที่ต่อสู้ด้วยความไร้เกียรติและกำลัง ช้าโดยธรรมชาติแต่เมื่อติดตั้ง Hobnailed Boots กลายเป็นเครื่องทำลายล้างที่น่าสะพรึง Low Blow ปิดการใช้งานได้แม้แต่ยูนิตชั้นยอด",
    },
  },
  {
    id: "serpent_witch",
    name: { en: "Witch", th: "แม่มด (Witch)" },
    tier: "Tier 2 Hybrid Caster",
    role: { en: "Shape-Shifting Support & Tower Drain", th: "นักมนตราแปลงร่าง & ดูดพลังหอคอย" },
    clan: "Serpent",
    dmgType: "Magic",
    armorType: "Unarmored",
    trainingPath: [
      { en: "Tavern", th: "Tavern" },
      { en: "Alchemist Hut", th: "Alchemist Hut" },
    ],
    gears: [
      {
        name: { en: "Demon's Amulet", th: "ดวงแก้วมารสาป" },
        building: { en: "Metal Shop", th: "Metal Shop" },
        type: "Toggle",
        effect: {
          en: "The Metal Shop provides a possessed amulet cursed by an unknown demon. Activated, it transforms the Witch into a powerful Demoness. Stamina drains continuously; when exhausted she reverts to human form, shattering the amulet.",
          th: "Metal Shop จัดหาดวงแก้วที่สิงสถิตโดยมารที่ไม่รู้จัก เปิดใช้งานแปลงร่าง Witch เป็น Demoness ทรงพลัง สตามิน่าดูดต่อเนื่อง เมื่อหมดจะกลับสู่ร่างมนุษย์และดวงแก้วแตก",
        },
        duration: { en: "Drains stamina — amulet shatters when stamina exhausted", th: "กินสตามิน่าต่อเนื่อง — ดวงแก้วแตกเมื่อสตามิน่าหมด" },
      },
      {
        name: { en: "Gathering Mists", th: "หมอกรวมพลัง" },
        building: { en: "Thieves Guild", th: "Thieves Guild" },
        type: "Toggle",
        effect: {
          en: "Stolen tomes from the Thieves Guild teach the Witch to harness energy from enemy Watchtowers, converting it to blood essence that heals nearby allies and herself — but she must remain stationary, draining stamina.",
          th: "คัมภีร์ที่ขโมยจาก Thieves Guild สอน Witch ให้ดูดพลังจากหอยามศัตรู แปลงเป็นแก่นเลือดรักษาพันธมิตรและตนเองใกล้ๆ — แต่ต้องยืนนิ่งและกินสตามิน่าต่อเนื่อง",
        },
        duration: { en: "Drains stamina — must remain stationary", th: "กินสตามิน่า — ต้องยืนนิ่ง" },
      },
    ],
    description: {
      en: "A versatile caster who can transform into a fearsome Demoness or drain enemy watchtower energy to heal allies. Her dual form makes her a wild card in both offense and support.",
      th: "นักมนตราอเนกประสงค์ที่แปลงร่างเป็น Demoness น่ากลัวหรือดูดพลังหอยามศัตรูเพื่อรักษาพันธมิตร ความสามารถสองด้านทำให้เป็น Wild Card ทั้งฝ่ายโจมตีและสนับสนุน",
    },
  },
  {
    id: "serpent_ronin",
    name: { en: "Ronin", th: "โรนิน (Ronin)" },
    tier: "Tier 3 Elite Melee",
    role: { en: "Dual-Katana Duelist & Self-Sustainer", th: "จอมดาบคู่สังหาร & ฟื้นเลือดตัวเอง" },
    clan: "Serpent",
    dmgType: "Cutting",
    armorType: "Heavy",
    trainingPath: [
      { en: "Tavern", th: "Tavern" },
      { en: "Sharpshooter Guild", th: "Sharpshooter Guild" },
      { en: "Alchemist Hut", th: "Alchemist Hut" },
    ],
    gears: [
      {
        name: { en: "Yin Blade", th: "ดาบมารหยิน" },
        building: { en: "Alchemist Hut", th: "Alchemist Hut" },
        type: "Toggle",
        effect: {
          en: "Imbues the Ronin blades with dark Yin energy, converting each strike into life-drain — every hit restores HP to the Ronin, enabling sustained combat without dedicated healers.",
          th: "ผสานพลัง Yin มืดเข้าดาบของ Ronin เปลี่ยนทุกการโจมตีเป็นการดูดพลังชีวิต — ทุกการฟันฟื้นฟู HP ทำให้สู้ได้ต่อเนื่องโดยไม่ต้องพึ่งตัวฮีล",
        },
        duration: { en: "Drains stamina — life steal on every hit", th: "กินสตามิน่า — ดูดเลือดทุกครั้งที่โจมตี" },
      },
      {
        name: { en: "Blood Bond", th: "พันธนาการโลหิต" },
        building: { en: "Necromancer Throne", th: "Necromancer Throne" },
        type: "Utility",
        effect: {
          en: "Creates a dark magical contract that transfers all damage taken by the Ronin to nearby friendly peasants instead, making him practically invulnerable while peasants are present.",
          th: "สร้างสัญญามนตราดำที่ถ่ายโอนความเสียหายทั้งหมดที่ Ronin รับไปยังชาวบ้านพันธมิตรรอบข้างแทน ทำให้เขาแทบอยู่ยงคงกระพันขณะที่มีชาวบ้าน",
        },
        duration: { en: "Stamina cost — transfers incoming damage to nearby peasants", th: "กินสตามิน่า — ถ่ายโอนดาเมจที่รับไปยังชาวบ้านรอบข้าง" },
      },
    ],
    description: {
      en: "The pinnacle of Serpent melee combat. Ronin wield dual katana with lethal precision — Yin Blade makes them self-sustaining in prolonged fights, while Blood Bond makes them near-invulnerable at the cost of nearby peasants.",
      th: "ยอดสุดของการต่อสู้ระยะประชิดของเผ่างู Ronin ใช้ดาบคู่ด้วยความแม่นยำอันร้ายกาจ — Yin Blade ทำให้พึ่งตนเองในการต่อสู้ยืดเยื้อ ในขณะที่ Blood Bond ทำให้แทบอยู่ยงคงกระพัน",
    },
  },

  // ==================== SERPENT HEROES / ZEN MASTERS ====================
  {
    id: "zen_shinja",
    name: { en: "Shinja", th: "ชินจา (Shinja)" },
    tier: "Zen Master / Hero",
    role: { en: "Ruthless Warlord & Intimidator", th: "ขุนศึกผู้โหดเหี้ยม & ขู่ขวัญศัตรู" },
    clan: "Serpent",
    dmgType: "Cutting",
    armorType: "Heavy",
    trainingPath: [{ en: "Keep / Necromancer Throne", th: "ป้อมหลัก / Necromancer Throne" }],
    gears: [
      {
        name: { en: "Intimidation", th: "ขู่ขวัญศัตรู" },
        type: "Offensive",
        effect: {
          en: "Shinja fearsome reputation precedes him in battle, weakening the strongest warrior blows. Anyone who strikes him knows he will repay it a hundredfold — nearby enemies suffer significantly reduced attack power.",
          th: "ชื่อเสียงอันน่าเกรงขามของ Shinja นำหน้าเขาในสนามรบ ทำให้การโจมตีของนักรบที่แข็งแกร่งที่สุดอ่อนแรงลง ศัตรูรอบข้างได้รับพลังโจมตีลดลงอย่างมาก",
        },
        duration: { en: "Costs 40% stamina — reduces nearby enemy attack power", th: "กินสตามิน่า 40% — ลดพลังโจมตีศัตรูรอบข้าง" },
      },
    ],
    description: {
      en: "Ruthless and warmongering warlord who rules the Serpent Clan with an iron grip. His twin poisonous blades add slow poison effects to all attacks. He is a realist — and magic attacks do him no harm.",
      th: "ขุนศึกผู้โหดเหี้ยมและชอบสงครามที่ปกครองเผ่างูด้วยกำปั้นเหล็ก ดาบพิษคู่เพิ่มเอฟเฟกต์พิษช้าๆ ให้การโจมตีทั้งหมด เขาเป็นนักสัจนิยม — และเวทมนตร์ไม่สามารถทำร้ายเขาได้",
    },
  },
  {
    id: "zen_vetkin",
    name: { en: "Vetkin", th: "เวทกิน (Vetkin)" },
    tier: "Zen Master",
    role: { en: "Charismatic Sai Master & Debuffer", th: "จ้าวดาบไสซ่า & ดูดพลังศัตรู" },
    clan: "Serpent",
    dmgType: "Piercing",
    armorType: "Medium",
    trainingPath: [{ en: "Keep / Necromancer Throne", th: "ป้อมหลัก / Necromancer Throne" }],
    gears: [
      {
        name: { en: "Bravado", th: "ความกล้าอวดดี" },
        type: "Offensive",
        effect: {
          en: "Vetkin charisma makes him seem like a hero from the old tales. His dashing displays sap energy right out of foes — enemies hit by Bravado take 50% more damage afterward.",
          th: "เสน่ห์ของ Vetkin ทำให้เหมือนวีรบุรุษในนิทาน การแสดงความกล้าดูดพลังงานออกจากศัตรู — ศัตรูที่โดน Bravado รับดาเมจเพิ่ม 50%",
        },
        duration: { en: "Costs 50% stamina — enemies take 50% more damage", th: "กินสตามิน่า 50% — ศัตรูรับดาเมจเพิ่ม 50%" },
      },
    ],
    description: {
      en: "A young, handsome sai master. Tireless — can travel the whole map without spending stamina. Bravado makes enemies take 50% more damage. Can run faster than a horse can gallop.",
      th: "หนุ่มหล่อจ้าวดาบไสซ่า ไม่รู้จักเหนื่อย สามารถเดินทางทั้งแผนที่โดยไม่ใช้สตามิน่า Bravado ทำให้ศัตรูรับดาเมจเพิ่ม 50% และวิ่งเร็วกว่าม้าได้",
    },
  },
  {
    id: "zen_budo",
    name: { en: "Budo", th: "บูโด (Budo)" },
    tier: "Zen Master",
    role: { en: "Slavedriver & Frontline Tank", th: "จอมโบยทาส & แทงก์แถวหน้า" },
    clan: "Serpent",
    dmgType: "Blunt",
    armorType: "Heavy",
    trainingPath: [{ en: "Keep / Necromancer Throne", th: "ป้อมหลัก / Necromancer Throne" }],
    gears: [
      {
        name: { en: "Slave Driver", th: "โบยทาสเร่งงาน" },
        type: "Utility",
        effect: {
          en: "At this point in his career, Budo does not need to beat people to death quite so often — a mere crack of his whip sends nearby Serpent peasants scurrying into faster action (though it drains their health).",
          th: "ในจุดนี้ของอาชีพเขา Budo ไม่ต้องตีคนจนตายบ่อยนัก — การสะบัดแส้เพียงครั้งเดียวส่ง Peasant รอบข้างให้ทำงานเร็วขึ้นอย่างมาก (แต่สูบพลังชีวิตพวกเขา)",
        },
        duration: { en: "Costs 30% stamina — nearby peasants work faster but lose HP", th: "กินสตามิน่า 30% — Peasant รอบข้างทำงานเร็วขึ้นแต่เสีย HP" },
      },
    ],
    description: {
      en: "Fat and none too handsome, this lumbering slavedriver has the highest endurance of all Zen Masters. His fast whip attack combined with immense health makes him a terrifying frontline presence.",
      th: "อ้วนและไม่งามตา จอมโบยทาสผู้นี้มีความอึดสูงสุดในบรรดา Zen Master ทั้งหมด การโจมตีด้วยแส้และพลังชีวิตมหาศาลทำให้เขาน่าสะพรึงในแถวหน้า",
    },
  },
  {
    id: "zen_utara",
    name: { en: "Utara", th: "อุตารา (Utara)" },
    tier: "Zen Master",
    role: { en: "Vengeance Singer & Poison Caster", th: "นักร้องแห่งแค้น & ผู้หว่านพิษ" },
    clan: "Serpent",
    dmgType: "Magic",
    armorType: "Light",
    trainingPath: [{ en: "Keep / Necromancer Throne", th: "ป้อมหลัก / Necromancer Throne" }],
    gears: [
      {
        name: { en: "Song of Sorrow", th: "เพลงคร่ำครวญแห่งโศกา" },
        type: "Offensive",
        effect: {
          en: "Utara sings a strange, keening song borne of her tragic past and thirst for revenge. None can hear it without risking their life — deals AoE Magic damage and can kill or seriously wound all nearby enemies.",
          th: "Utara ร้องเพลงครวญครางแปลกๆ ที่เกิดจากอดีตอันน่าเศร้าและความกระหายการแก้แค้น ไม่มีใครได้ยินโดยไม่เสี่ยงชีวิต — สร้างดาเมจ Magic วงกว้างและสามารถฆ่าหรือทำบาดเจ็บสาหัสศัตรูรอบข้าง",
        },
        duration: { en: "Costs 40% stamina — AoE Magic damage to all nearby enemies", th: "กินสตามิน่า 40% — ดาเมจ Magic วงกว้างต่อศัตรูรอบข้างทั้งหมด" },
      },
    ],
    description: {
      en: "After killing the bandits who murdered her parents, she returned from self-exile as the strangest weapon in the Serpent arsenal. Her songs drain enemy strength and deal deadly magic damage. She stuns all units when she herself takes harm.",
      th: "หลังจากฆ่าโจรที่สังหารพ่อแม่ กลับจากการเนรเทศตัวเองในฐานะอาวุธที่แปลกประหลาดที่สุดของเผ่างู เพลงของเธอสูบพลังศัตรูและสร้างดาเมจมนตราอันร้ายกาจ และสตั้นทุกยูนิตรอบข้างเมื่อตัวเองได้รับบาดเจ็บ",
    },
  },
  {
    id: "zen_necromancer",
    name: { en: "The Necromancer", th: "จอมมาร (The Necromancer)" },
    tier: "Zen Master",
    role: { en: "Undead Summoner & Spirit Commander", th: "ผู้เรียกซอมบี้ & ผู้บัญชาการวิญญาณ" },
    clan: "Serpent",
    dmgType: "Magic",
    armorType: "Medium",
    trainingPath: [{ en: "Necromancer Throne", th: "บัลลังก์จอมมาร (Necromancer Throne)" }],
    gears: [
      {
        name: { en: "Spirit Warriors", th: "เรียกนักรบวิญญาณ" },
        type: "Utility",
        effect: {
          en: "The Necromancer summons spirit warriors from the realm of the dead to do his bidding — spectral soldiers who fight for the Serpent Clan without costing any resources.",
          th: "จอมมารเรียกนักรบวิญญาณจากอาณาจักรคนตายมาทำตามคำสั่ง — ทหารผีที่สู้เพื่อเผ่างูโดยไม่เสียทรัพยากรใดๆ",
        },
        duration: { en: "Summons spirit soldiers — persist until destroyed", th: "เรียกทหารผี — อยู่จนกว่าจะถูกทำลาย" },
      },
      {
        name: { en: "Raise Dead", th: "ชุบชีวิตศพ" },
        type: "Utility",
        effect: {
          en: "Summons the fallen corpses of enemies to rise as undead soldiers, turning the tide of battle by reanimating enemy casualties to fight for the Serpent Clan.",
          th: "เรียกศพศัตรูที่ล้มลงให้ลุกขึ้นมาเป็นทหารซอมบี้ พลิกสถานการณ์การสู้รบด้วยการชุบชีวิตผู้เสียชีวิตของศัตรูให้มาสู้เพื่อเผ่างู",
        },
        duration: { en: "Raises fallen enemy corpses as undead allies", th: "ชุบชีวิตศพศัตรูที่ล้มเป็นพันธมิตรซอมบี้" },
      },
    ],
    description: {
      en: "An ancient undead sorcerer older than almost all living beings. He summons spirit warriors and raises enemy corpses as undead soldiers, building an unstoppable army from nothing but death.",
      th: "นักมนตราซอมบี้โบราณที่เก่าแก่กว่าสิ่งมีชีวิตเกือบทุกชนิด เรียกนักรบวิญญาณและชุบชีวิตศพศัตรูเป็นทหารซอมบี้ สร้างกองทัพที่หยุดไม่ได้จากความตายล้วนๆ",
    },
  },

  // ==================== LOTUS CLAN ====================
  {
    id: "lotus_blade_acolyte",
    name: { en: "Blade Acolyte", th: "สาวกดาบ (Blade Acolyte)" },
    tier: "Tier 1 Melee",
    role: { en: "Mobile Infantry", th: "ทหารราบเพลงดาบควง" },
    clan: "Lotus",
    dmgType: "Cutting",
    armorType: "Light",
    trainingPath: [{ en: "Blade Garden", th: "Blade Garden" }],
    gears: [
      {
        name: { en: "Inner Light", th: "จิตวิญญาณส่องสว่าง" },
        building: { en: "Warlock Tower", th: "Warlock Tower" },
        type: "Utility",
        effect: {
          en: "Sacrifices self to provide massive stamina recharge to nearby allies.",
          th: "สละชีพเพื่อฟื้นฟูสตามิน่าให้เพื่อนร่วมทีมรอบตัวอย่างรวดเร็ว",
        },
      },
    ],
    description: {
      en: "Fast blade fighter capable of evolving into devastating staff and magic wielders.",
      th: "นักดาบพื้นฐานที่ว่องไว สามารถฝึกฝนต่อยอดไปเป็นสายเวทมนตร์ขั้นสูงได้",
    },
  },
  {
    id: "lotus_staff_adept",
    name: { en: "Staff Adept", th: "ผู้ใช้พลอง (Staff Adept)" },
    tier: "Tier 1 Melee / Disruptor",
    role: { en: "Spinning Crowd Controller", th: "ตัวป่วนหมุนพลองสกัด" },
    clan: "Lotus",
    dmgType: "Blunt",
    armorType: "Light",
    trainingPath: [{ en: "Training Yard", th: "Training Yard" }],
    gears: [
      {
        name: { en: "Whirling Dervish", th: "พายุหมุนพลอง" },
        building: { en: "Blade Garden", th: "Blade Garden" },
        type: "Offensive",
        effect: {
          en: "Spins staff rapidly, damaging all adjacent enemies and deflecting arrows.",
          th: "ควงพลองเป็นพายุหมุน สร้างความเสียหายรอบตัวและปัดป้องลูกธนู",
        },
      },
    ],
    description: {
      en: "Excellent defensive unit against mass light infantry and archers.",
      th: "เก่งมากในการรับมือฝูงทหารราบขนาดเล็กและปัดป้องกระสุนระยะไกล",
    },
  },
  {
    id: "lotus_unclean_one",
    name: { en: "Unclean One", th: "ผู้แปดเปื้อน (Unclean One)" },
    tier: "Tier 2 Ranged / Siege",
    role: { en: "Corrosive Artillery", th: "จอมพ่นเมือกกัดกร่อน" },
    clan: "Lotus",
    dmgType: "Magic",
    armorType: "Medium",
    trainingPath: [
      { en: "Training Yard", th: "Training Yard" },
      { en: "Blade Garden", th: "Blade Garden" },
    ],
    gears: [
      {
        name: { en: "Death Siphon", th: "สูบพลังชีวิต" },
        building: { en: "Warlock Tower", th: "Warlock Tower" },
        type: "Offensive",
        effect: {
          en: "Drains health from target unit over time from long range.",
          th: "ดูดกลืนพลังชีวิตของศัตรูจากระยะไกลอย่างต่อเนื่อง",
        },
      },
    ],
    description: {
      en: "Spits corrosive sludge over long distances. Melts heavy armor and fortifications.",
      th: "พ่นเมือกพิษกรดระยะไกล ละลายเกราะหนักและสิ่งก่อสร้างได้อย่างรวดเร็ว",
    },
  },
  {
    id: "lotus_warlock",
    name: { en: "Warlock / Master Warlock", th: "วอร์ล็อค (Warlock)" },
    tier: "Tier 3 Magic AoE",
    role: { en: "Devastating Spellcaster", th: "จอมเวททำลายล้างวงกว้าง" },
    clan: "Lotus",
    dmgType: "Magic",
    armorType: "Heavy",
    trainingPath: [
      { en: "Blade Garden", th: "Blade Garden" },
      { en: "Training Yard", th: "Training Yard" },
      { en: "Warlock Tower", th: "Warlock Tower" },
    ],
    gears: [
      {
        name: { en: "Soul Chill", th: "เยือกแข็งสะกดวิญญาณ" },
        building: { en: "Warlock Tower", th: "Warlock Tower" },
        type: "Offensive",
        effect: {
          en: "Freezes groups of enemy units in place, rendering them completely helpless.",
          th: "แช่แข็งศัตรูทั้งกลุ่ม ขยับและโจมตีไม่ได้ชั่วขณะ",
        },
      },
    ],
    description: {
      en: "The most feared caster in the game. Soul Chill combined with high magic AoE can wipe entire armies in seconds.",
      th: "จอมเวทที่น่ากลัวที่สุดในเกม มีสกิลแช่แข็งหมู่และดาเมจเวทที่สามารถกวาดล้างกองทัพได้ในพริบตา",
    },
  },

  // ==================== WOLF CLAN ====================
  {
    id: "wolf_peasant",
    name: { en: "Peasant (Wolf)", th: "ชาวนา (วูฟ)" },
    tier: "Peasant",
    role: { en: "Resource Gatherer", th: "เก็บเกี่ยวทรัพยากร" },
    clan: "Wolf",
    dmgType: "Piercing",
    armorType: "Unarmored",
    trainingPath: [{ en: "Peasant Hut", th: "กระท่อมชาวนา" }],
    gears: [],
    description: {
      en: "Hardy Wolf peasants toil the land with a deep love for nature. They say the rice is their brother and the wind their sister.",
      th: "ชาวนาวูฟผู้เข้มแข็งที่รักและผูกพันกับธรรมชาติ ทำงานเก็บเกี่ยวอาหารเลี้ยงเผ่าอย่างขยันขันแข็ง",
    },
  },
  {
    id: "wolf_brawler",
    name: { en: "Brawler", th: "นักชกสนับมือ (Brawler)" },
    tier: "Tier 1 Melee",
    role: { en: "Frontline Bruiser", th: "นักสู้แถวหน้าพละกำลังสูง" },
    clan: "Wolf",
    dmgType: "Blunt",
    armorType: "Medium",
    trainingPath: [{ en: "Combat Pit", th: "Combat Pit" }],
    gears: [
      {
        name: { en: "Zen Counter Punch", th: "หมัดสวนแบบเซน" },
        type: "Offensive",
        effect: {
          en: "Blessed by a Druidess, the Brawler delivers a single perfectly timed strike that can devastate overconfident enemies and even one-shot heroic units.",
          th: "ได้รับพรจาก Druidess เพื่อต่อยตอบโต้ด้วยหมัดเดียวที่แม่นยำจนฆ่ายูนิตที่แข็งแกร่งได้ในทีเดียว",
        },
        duration: { en: "Instant — single devastating counter strike", th: "ทันที — หมัดสวนครั้งเดียวแต่พลังมหาศาล" },
      },
    ],
    description: {
      en: "Tough frontline fighter with high health who excels at brawling and absorbing punishment.",
      th: "นักสู้แถวหน้าที่พลังชีวิตสูง ถึกทน ทุบดาเมจได้หนักและต้านทานการโจมตีได้ดี",
    },
  },
  {
    id: "wolf_hurler",
    name: { en: "Hurler", th: "นักขว้างหิน (Hurler)" },
    tier: "Tier 1 Ranged",
    role: { en: "Pass-Through Boulder Slinger", th: "นักขว้างหินเจาะแถว" },
    clan: "Wolf",
    dmgType: "Blunt",
    armorType: "Light",
    trainingPath: [{ en: "Ballistics Grounds", th: "Ballistics Grounds" }],
    gears: [
      {
        name: { en: "Lava Rock", th: "หินลาวาเพลิง" },
        type: "Offensive",
        effect: {
          en: "A Druidess enchants the Hurler's fork to superheat ordinary stones to near-molten temperatures. These brittle missiles explode on impact, spraying scalding shrapnel on nearby enemies.",
          th: "Druidess เสกให้หินธรรมดากลายเป็นหินลาวาร้อน เมื่อกระทบพื้นระเบิดกระจายเศษหินเผาศัตรูรอบข้าง",
        },
        duration: { en: "Drains stamina per throw", th: "กินสตามิน่าต่อการขว้างแต่ละครั้ง" },
      },
    ],
    description: {
      en: "Cheap ranged unit whose boulders pass through enemies in a line, hitting multiple targets.",
      th: "ยูนิตยิงระยะไกลราคาถูกที่หินผ่านทะลุแถวศัตรูได้ ทำดาเมจหลายตัวในคราวเดียว",
    },
  },
  {
    id: "wolf_sledger",
    name: { en: "Sledger", th: "สเลดเจอร์ค้อนหนัก (Sledger)" },
    tier: "Tier 2 Melee / Siege",
    role: { en: "Earth-Shattering Brawler", th: "นักรบค้อนสะเทือนพื้น" },
    clan: "Wolf",
    dmgType: "Blunt",
    armorType: "Heavy",
    trainingPath: [
      { en: "Combat Pit", th: "Combat Pit" },
      { en: "Ballistics Grounds", th: "Ballistics Grounds" },
    ],
    gears: [
      {
        name: { en: "Stun Slam", th: "ค้อนฟาดสะเทือนดิน" },
        type: "Offensive",
        effect: {
          en: "Inspired by a Druidess, the Sledger smashes the earth with full force, stunning all nearby enemies in a wide area with a single blow.",
          th: "ได้รับแรงบันดาลใจจาก Druidess ฟาดค้อนลงพื้นอย่างเต็มแรง สร้างแรงสั่นสะเทือนมึนงงศัตรูรอบตัวในพื้นที่กว้าง",
        },
        duration: { en: "Costs 70 stamina — wide AoE stun", th: "ใช้สตามิน่า 70 — มึนงงเป็นพื้นที่กว้าง" },
      },
    ],
    description: {
      en: "A brutishly powerful melee fighter that can stun groups of enemies with earthquake-force slams.",
      th: "นักรบค้อนยักษ์ที่ทรงพลังมหาศาล มีสกิลฟาดพื้นทำมึนงงศัตรูหมู่อย่างรุนแรง",
    },
  },
  {
    id: "wolf_digger",
    name: { en: "Digger", th: "นักขุดอุโมงค์ (Digger)" },
    tier: "Tier 2 Scout / Assassin",
    role: { en: "Tunnel Scout & Assassin", th: "สายสอดแนม & นักลอบสังหาร" },
    clan: "Wolf",
    dmgType: "Cutting",
    armorType: "Medium",
    trainingPath: [
      { en: "Combat Pit", th: "Combat Pit" },
      { en: "Quarry", th: "Quarry" },
    ],
    gears: [
      {
        name: { en: "Tunneling", th: "ขุดอุโมงค์ลอดใต้ดิน" },
        type: "Utility",
        effect: {
          en: "Burrows underground and tunnels quickly to any location on the battlefield. Upon emerging, reveals the surrounding area through the fog of war while remaining undetected. Drains stamina continuously while underground.",
          th: "ขุดรูลงดินแล้วขุดอุโมงค์เดินทางไปยังจุดใดก็ได้อย่างรวดเร็ว เมื่อโผล่ขึ้นมาจะเปิดหมอกสงครามในบริเวณรอบข้างโดยไม่ถูกตรวจจับ กินสตามิน่าตลอดเวลาขณะอยู่ใต้ดิน",
        },
        duration: { en: "Drains stamina — forced to surface when depleted", th: "กินสตามิน่าต่อเนื่อง — บังคับโผล่เมื่อหมด" },
      },
    ],
    description: {
      en: "A sneaky underground scout and assassin with powerful cutting claws, ideal for flanking fragile units.",
      th: "สายสอดแนมและนักลอบสังหารที่ขุดอุโมงค์ลอดใต้ดินได้ เหมาะสำหรับโจมตีสายลอบสังหารยูนิตบอบบาง",
    },
  },
  {
    id: "wolf_pitch_slinger",
    name: { en: "Pitch Slinger", th: "นักขว้างน้ำมันดิน (Pitch Slinger)" },
    tier: "Tier 2 Ranged / Siege",
    role: { en: "Incendiary Siege Bombardier", th: "นักยิงระเบิดเพลิงระยะไกล" },
    clan: "Wolf",
    dmgType: "Fire",
    armorType: "Medium",
    trainingPath: [
      { en: "Ballistics Grounds", th: "Ballistics Grounds" },
      { en: "Quarry", th: "Quarry" },
    ],
    gears: [
      {
        name: { en: "Scorched Earth", th: "เผาพื้นที่ทำลายล้าง" },
        type: "Offensive",
        effect: {
          en: "Launches a massive ball of burning pitch that scorches a wide area, igniting both enemies and terrain alike.",
          th: "ขว้างลูกน้ำมันดินเผาไหม้ขนาดใหญ่ออกไป เผาไหม้พื้นที่กว้างทั้งยูนิตและพื้นที่โดยรอบพร้อมกัน",
        },
        duration: { en: "Area denial fire — burns terrain and enemies continuously", th: "สร้างโซนไฟปฏิเสธพื้นที่ — เผาไหม้ต่อเนื่อง" },
      },
    ],
    description: {
      en: "Ranged siege unit that lobs flaming pitch balls in arcing trajectories, capable of hitting targets over walls.",
      th: "ยูนิตระยะไกลที่ขว้างลูกเพลิงข้ามกำแพง เหมาะสำหรับทำลายสิ่งก่อสร้างและเผาพื้นที่ศัตรู",
    },
  },
  {
    id: "wolf_ballistaman",
    name: { en: "Ballistaman", th: "บาลิสต้า (Ballistaman)" },
    tier: "Tier 2 Heavy Ranged",
    role: { en: "Long-Range Artillery & Totem Support", th: "ปืนใหญ่ระยะไกลและซัพพอร์ตโทเท็ม" },
    clan: "Wolf",
    dmgType: "Piercing",
    armorType: "Heavy",
    trainingPath: [
      { en: "Ballistics Grounds", th: "Ballistics Grounds" },
      { en: "Quarry", th: "Quarry" },
      { en: "Cairn", th: "Cairn" },
    ],
    gears: [
      {
        name: { en: "Totem", th: "เสาโทเท็มศักดิ์สิทธิ์" },
        type: "Utility",
        effect: {
          en: "A Druidess crafts intricate totems from blessed saplings. When fired into the ground, the totem blankets the surrounding area with a beneficial aura that strengthens nearby Wolf allies and slows enemy movement.",
          th: "Druidess สร้างโทเท็มจากกิ่งไม้ศักดิ์สิทธิ์ เมื่อยิงลงดินจะสร้างออร่าพื้นที่ที่เพิ่มพลังพันธมิตรวูฟและลดความเร็วศัตรู",
        },
        duration: { en: "Toggle — maintains aura while chanting (disables firing)", th: "Toggle — ออร่าใช้งานขณะสวด (ปิดการยิง)" },
      },
    ],
    description: {
      en: "The longest-range unit of the Wolf Clan, launching massive bolts with tremendous force while also deploying field totems.",
      th: "ยูนิตระยะยิงไกลที่สุดของ Wolf Clan ยิงลูกธนูขนาดใหญ่ด้วยพลังมหาศาล และสามารถวางโทเท็มเพิ่มกำลังพลได้",
    },
  },
  {
    id: "wolf_mauler",
    name: { en: "Mauler", th: "มอลเลอร์ค้อนยักษ์ (Mauler)" },
    tier: "Tier 2 Heavy Melee / Siege",
    role: { en: "Building Demolisher & AoE Brawler", th: "จอมทุบฐานและทำดาเมจรอบตัว" },
    clan: "Wolf",
    dmgType: "Blunt",
    armorType: "Heavy",
    trainingPath: [
      { en: "Combat Pit", th: "Combat Pit" },
      { en: "Ballistics Grounds", th: "Ballistics Grounds" },
    ],
    gears: [
      {
        name: { en: "Wrecking Ball", th: "หมุนค้อนถล่มทลายรอบตัว" },
        type: "Offensive",
        effect: {
          en: "Emboldened by a Druidess' chants, the Mauler swings his boulder in a full circle, smashing and scattering all enemies in every direction.",
          th: "ได้รับพลังจากบทสวดของ Druidess เหวี่ยงลูกหินยักษ์หมุนรอบตัว กระแทกและกระเด็นศัตรูออกทุกทิศทาง",
        },
        duration: { en: "Costs 33 stamina — also drains stamina continuously", th: "ใช้สตามิน่า 33 — กินสตามิน่าต่อเนื่องด้วย" },
      },
    ],
    description: {
      en: "Demolishes enemy structures in seconds and scatters infantry lines with blunt force.",
      th: "ทุบสิ่งก่อสร้างพังในไม่กี่วินาที และมีพลังเหวี่ยงพัดแนวรบศัตรูให้กระเจิง",
    },
  },
  {
    id: "wolf_berserker",
    name: { en: "Berserker", th: "เบอร์เซิร์กเกอร์ (Berserker)" },
    tier: "Tier 3 Elite Melee",
    role: { en: "Relentless Lycanthrope Fighter", th: "นักรบคลั่งผู้แปลงร่างเป็นมนุษย์หมาป่า" },
    clan: "Wolf",
    dmgType: "Cutting",
    armorType: "Heavy",
    trainingPath: [
      { en: "Combat Pit", th: "Combat Pit" },
      { en: "Ballistics Grounds", th: "Ballistics Grounds" },
      { en: "Wolf Den", th: "Wolf Den" },
    ],
    gears: [
      {
        name: { en: "Lycanthropy", th: "สาปแปลงร่างมนุษย์หมาป่า" },
        type: "Offensive",
        effect: {
          en: "Only a Berserker has the strength and wisdom to survive a Druidess' greatest sorcery. This blessing-curse transforms the Berserker into a fearsome Werewolf with massively increased speed and attack power.",
          th: "มีเพียง Berserker เท่านั้นที่แกร่งพอจะรับทนเวทสูงสุดของ Druidess — แปลงร่างเป็นมนุษย์หมาป่าที่ดุร้ายพร้อมความเร็วและพลังโจมตีที่พุ่งสูงขึ้นมหาศาล",
        },
        duration: { en: "No stamina cost — permanent transform into Werewolf unit", th: "ไม่เสียสตามิน่า — แปลงร่างถาวรเป็น Werewolf" },
      },
    ],
    description: {
      en: "The ultimate Wolf melee unit. Massive health pool and high cutting damage, can transform into an unstoppable Werewolf.",
      th: "ยูนิตต่อสู้สูงสุดของ Wolf Clan เลือดสูงมาก ฟันดาเมจสูง และแปลงร่างเป็นมนุษย์หมาป่าที่หยุดไม่ได้",
    },
  },
  {
    id: "wolf_druidess",
    name: { en: "Druidess", th: "ดรูอิดเดส (Druidess)" },
    tier: "Support / Caster",
    role: { en: "Primary Support & Buff Caster", th: "ซัพพอร์ตหลักและนักสวดเสริมพลัง" },
    clan: "Wolf",
    dmgType: "Magic",
    armorType: "Unarmored",
    trainingPath: [{ en: "Cairn", th: "Cairn" }],
    gears: [
      {
        name: { en: "Blessing", th: "บทอวยพรจาก Cairn" },
        type: "Utility",
        effect: {
          en: "After praying at the Cairn, the Druidess may bless three of her warriors with great strength and prowess, enabling them to use their Battle Gear abilities. She must return to the Cairn to bestow additional blessings.",
          th: "หลังจากสวดมนต์ที่ Cairn Druidess จะอวยพรนักรบสามคนด้วยพลังพิเศษ เปิดใช้งานสกิล Battle Gear ของพวกเขาได้ จากนั้นต้องกลับไป Cairn เพื่ออวยพรเพิ่ม",
        },
        duration: { en: "Blesses 3 warriors per Cairn visit", th: "อวยพรนักรบ 3 คนต่อการไปพักที่ Cairn" },
      },
      {
        name: { en: "Shale Armor", th: "เกราะหินเชล" },
        type: "Passive",
        effect: {
          en: "Wolf warriors outfitted by a Shalery gain heavy stone armor that significantly reduces incoming damage from most attack types.",
          th: "นักรบวูฟที่ติดตั้งเกราะหินจาก Shalery จะลดดาเมจที่รับจากการโจมตีส่วนใหญ่อย่างมีนัยสำคัญ",
        },
        duration: { en: "Passive — requires Shalery upgrade", th: "Passive — ต้องอัปเกรด Shalery ก่อน" },
      },
    ],
    description: {
      en: "Primary support of the Wolf clan. Grants Battle Gear blessings and can summon Dryads to assist in battle.",
      th: "ซัพพอร์ตหลักของ Wolf Clan อวยพรสกิล Battle Gear ให้นักรบ และสามารถเรียก Dryad มาช่วยรบได้",
    },
  },
  {
    id: "wolf_werewolf",
    name: { en: "Werewolf", th: "มนุษย์หมาป่า (Werewolf)" },
    tier: "Tier 3 Elite / Special",
    role: { en: "Unstoppable Lycanthrope Assassin", th: "นักล่าผู้แปลงร่างที่หยุดไม่ได้" },
    clan: "Wolf",
    dmgType: "Cutting",
    armorType: "Heavy",
    trainingPath: [{ en: "Berserker using Lycanthropy BG", th: "เบอร์เซิร์กเกอร์ใช้สกิล Lycanthropy" }],
    gears: [
      {
        name: { en: "Wolf's Bite", th: "เขี้ยวสาปมนุษย์หมาป่า" },
        type: "Offensive",
        effect: {
          en: "The Werewolf transfers the curse of lycanthropy to its prey, turning the victim into a helpless ordinary wolf permanently while the Werewolf reverts to Berserker form. There is no cure.",
          th: "มนุษย์หมาป่าถ่ายสาปแปลงร่างไปยังเหยื่อ ทำให้เหยื่อกลายเป็นหมาป่าธรรมดาตลอดกาลโดยไม่มีทางแก้ ขณะที่ตัวเองกลับคืนสู่ร่าง Berserker",
        },
        duration: { en: "Costs 70 stamina — instant permanent lycanthropy curse on target", th: "ใช้สตามิน่า 70 — สาปถาวรทันที" },
      },
    ],
    description: {
      en: "The transformed Berserker — a primal, fast, and terrifyingly powerful beast that can curse enemies into wolves.",
      th: "ร่างแปลงของ Berserker — สัตว์ป่าดึกดำบรรพ์ที่เร็วและทรงพลังอย่างน่าหวาดกลัว สามารถสาปศัตรูให้กลายเป็นหมาป่าธรรมดา",
    },
  },
  {
    id: "wolf_pack_master",
    name: { en: "Pack Master", th: "จ่าฝูงหมาป่า (Pack Master)" },
    tier: "Tier 3 Support",
    role: { en: "Wolf Pack Summoner", th: "ผู้เรียกกลุ่มหมาป่า" },
    clan: "Wolf",
    dmgType: "Cutting",
    armorType: "Medium",
    trainingPath: [
      { en: "Combat Pit", th: "Combat Pit" },
      { en: "Wolf Den", th: "Wolf Den" },
    ],
    gears: [
      {
        name: { en: "Howl", th: "หอนเรียกฝูงหมาป่า" },
        type: "Utility",
        effect: {
          en: "With the blessing of the Druidess, the Pack Master is granted the true voice of the Wolf. He can summon any living wolves from anywhere on the battlefield instantly to fight at his side.",
          th: "ได้รับพรจาก Druidess ด้วยเสียงหอนที่แท้จริงแห่งหมาป่า สามารถเรียกหมาป่าที่ยังมีชีวิตอยู่ที่ไหนบนสนามรบมาสู้ข้างๆ ได้ทันที",
        },
        duration: { en: "No stamina cost — instant wolf summon from anywhere on map", th: "ไม่เสียสตามิน่า — เรียกหมาป่ามาทันทีจากทุกที่บนแผนที่" },
      },
    ],
    description: {
      en: "Commands wolf packs in battle, able to call all living wolves to his location instantly.",
      th: "ผู้บัญชาการฝูงหมาป่าในการต่อสู้ สามารถเรียกหมาป่าทุกตัวที่ยังมีชีวิตให้วิ่งมาหาทันที",
    },
  },

  // ==================== WOLF HEROES / ZEN MASTERS ====================
  {
    id: "wolf_shale_lord",
    name: { en: "Shale Lord", th: "ลอร์ดแห่งหินเชล (Shale Lord)" },
    tier: "Hero / Zen Master",
    role: { en: "Living Stone Tank & Armor Provider", th: "แทงก์หินมีชีวิต & ผู้แจกเกราะ" },
    clan: "Wolf",
    dmgType: "Blunt",
    armorType: "Heavy",
    trainingPath: [{ en: "Keep / Wolf Den", th: "Keep / Wolf Den" }],
    gears: [
      {
        name: { en: "Armored Friend", th: "มอบเกราะหินจากตัวเอง" },
        type: "Utility",
        effect: {
          en: "The Shale Lord flakes sheets of living stone off his own body to forge plate armor for his allies, sacrificing a portion of his own health with each use.",
          th: "Shale Lord แงะแผ่นหินมีชีวิตออกจากร่างตัวเองเพื่อทำเกราะให้พันธมิตร โดยเสียพลังชีวิตของตัวเองทุกครั้งที่ใช้",
        },
        duration: { en: "No stamina cost — costs own health per use", th: "ไม่เสียสตามิน่า — เสียพลังชีวิตตัวเองทุกครั้งที่ใช้" },
      },
    ],
    description: {
      en: "A hero made entirely of living shale stone. Can sacrifice his own health to grant stone armor to Wolf warriors.",
      th: "วีรบุรุษที่ร่างกายทำจากหินเชลมีชีวิต สามารถเสียสละพลังชีวิตตัวเองเพื่อมอบเกราะหินให้นักรบวูฟ",
    },
  },
  {
    id: "wolf_grayback",
    name: { en: "Grayback", th: "เกรย์แบ็ค (Grayback)" },
    tier: "Hero / Zen Master",
    role: { en: "Warrior Leader & Morale Buffer", th: "ผู้นำนักรบและเสริมพลังขวัญ" },
    clan: "Wolf",
    dmgType: "Blunt",
    armorType: "Heavy",
    trainingPath: [{ en: "Keep / Wolf Den", th: "Keep / Wolf Den" }],
    gears: [
      {
        name: { en: "Lupine Rage", th: "หอนปลุกพลังหมาป่า" },
        type: "Utility",
        effect: {
          en: "Grayback is a peerless battle leader. With a mighty howl, he urges nearby warriors to strike with greatly increased force, boosting their attack power.",
          th: "Grayback คือผู้นำนักรบที่ไม่มีใครเทียบได้ ด้วยเสียงหอนอันทรงพลัง เขากระตุ้นนักรบรอบข้างให้โจมตีด้วยพลังที่สูงขึ้นมาก",
        },
        duration: { en: "Costs 60 stamina — AoE attack power boost for nearby allies", th: "ใช้สตามิน่า 60 — เพิ่มพลังโจมตีพันธมิตรรอบข้าง" },
      },
    ],
    description: {
      en: "Legendary Wolf hero who organized his people's rebellion against the Lotus. Strong fighter and powerful morale booster.",
      th: "วีรบุรุษวูฟในตำนานผู้จัดตั้งการกบฏต่อ Lotus Clan เป็นทั้งนักสู้ที่แข็งแกร่งและผู้เพิ่มขวัญกำลังใจ",
    },
  },
  {
    id: "wolf_longtooth",
    name: { en: "Longtooth", th: "ลองทูธ (Longtooth)" },
    tier: "Hero / Zen Master",
    role: { en: "Long-Range Wall-Penetrating Assassin", th: "นักลอบสังหารยิงทะลุกำแพง" },
    clan: "Wolf",
    dmgType: "Cutting",
    armorType: "Medium",
    trainingPath: [{ en: "Keep / Wolf Den", th: "Keep / Wolf Den" }],
    gears: [
      {
        name: { en: "Razor-Edged Boomerang", th: "บูมเมอแรงคมประหาร" },
        type: "Offensive",
        effect: {
          en: "Longtooth's boomerang is made of an unknown alloy of terrifying sharpness. Thrown with full force, it passes unimpeded through unlimited numbers of flesh and bone — and even solid walls.",
          th: "บูมเมอแรงของ Longtooth ทำจากโลหะผสมลึกลับที่คมกริบ เมื่อขว้างออกไปมันผ่านทะลุยูนิตได้ไม่จำกัด และยังทะลุกำแพงได้ด้วย",
        },
        duration: { en: "Drains stamina — passes through unlimited units and walls", th: "กินสตามิน่า — ทะลุยูนิตไม่จำกัดและทะลุกำแพงได้" },
      },
    ],
    description: {
      en: "A ranged Wolf hero whose boomerang passes through any number of enemies and even solid walls.",
      th: "วีรบุรุษวูฟนักยิงระยะไกล บูมเมอแรงของเขาทะลุผ่านยูนิตศัตรูได้ไม่จำกัดจำนวนและแม้แต่กำแพงก็ยังทะลุได้",
    },
  },
  {
    id: "wolf_wildeye",
    name: { en: "Wildeye", th: "ไวลด์อาย (Wildeye)" },
    tier: "Hero / Zen Master",
    role: { en: "Spirit Wolf Summoner", th: "ผู้เรียก Spirit Wolf" },
    clan: "Wolf",
    dmgType: "Magic",
    armorType: "Light",
    trainingPath: [{ en: "Keep / Wolf Den", th: "Keep / Wolf Den" }],
    gears: [
      {
        name: { en: "Ancestral Call", th: "เรียกวิญญาณหมาป่าบรรพบุรุษ" },
        type: "Utility",
        effect: {
          en: "Wildeye summons the very essence of the Wolf clan — the Spirit Wolf. These mystical animals are faster and deadlier than real wolves. Up to three Spirit Wolves can be summoned at once, and they vanish if Wildeye dies.",
          th: "Wildeye เรียกสาระสำคัญแห่งวูฟ — Spirit Wolf วิญญาณหมาป่า มีความเร็วและพลังสูงกว่าหมาป่าธรรมดา เรียกได้สูงสุด 3 ตัวพร้อมกัน หายไปเมื่อ Wildeye สิ้นชีวิต",
        },
        duration: { en: "Costs 50 stamina — summons up to 3 Spirit Wolves", th: "ใช้สตามิน่า 50 — เรียก Spirit Wolf สูงสุด 3 ตัว" },
      },
    ],
    description: {
      en: "A mystical Wolf hero who can summon Spirit Wolves — ethereal, fast, and deadly supernatural wolves.",
      th: "วีรบุรุษวูฟผู้ลึกลับที่สื่อสารกับโลกวิญญาณ เรียก Spirit Wolf อันรวดเร็วและดุร้ายมาร่วมรบได้",
    },
  },
  {
    id: "wolf_gaihla",
    name: { en: "Gaihla", th: "ไกห์ล่า (Gaihla)" },
    tier: "Hero / Zen Master",
    role: { en: "Nature Healer & Rice Grower", th: "นักรักษาธรรมชาติ & เร่งข้าว" },
    clan: "Wolf",
    dmgType: "Magic",
    armorType: "Unarmored",
    trainingPath: [{ en: "Keep / Vitality Garden", th: "Keep / Vitality Garden" }],
    gears: [
      {
        name: { en: "Chant of Life", th: "บทขับขานแห่งชีวิต" },
        type: "Utility",
        effect: {
          en: "Gaihla sings an ancient druidic chant that heals nearby Wolf allies over time. Her song resonates with the natural world, restoring health in a wide radius.",
          th: "ไกห์ล่าร้องเพลงดรูอิดโบราณที่รักษาพันธมิตรวูฟรอบข้างต่อเนื่อง เสียงเพลงของเธอสอดคล้องกับพลังธรรมชาติรักษาในรัศมีกว้าง",
        },
        duration: { en: "Continuous — heals allies in wide AoE while chanting", th: "ต่อเนื่อง — รักษาพันธมิตรในรัศมีกว้างตลอดเวลาที่ขับขาน" },
      },
    ],
    description: {
      en: "A gentle but powerful Wolf hero with innate healing aura and the ability to rapidly grow rice fields by her mere presence.",
      th: "วีรบุรุษวูฟหญิงที่อ่อนโยนแต่ทรงพลัง มีออร่ารักษาตามธรรมชาติและสามารถเร่งการเพาะปลูกข้าวได้ด้วยการยืนอยู่ใกล้ๆ",
    },
  },
  {
    id: "wolf_dryad",
    name: { en: "Dryad", th: "ดรายแอด (Dryad)" },
    tier: "Summon / Special",
    role: { en: "Watchtower Drainer & Ally Empowerer", th: "ดูดพลังป้อมยาม & เสริมพลังพันธมิตร" },
    clan: "Wolf",
    dmgType: "Magic",
    armorType: "Unarmored",
    trainingPath: [{ en: "Summoned by Druidess", th: "เรียกโดย Druidess" }],
    gears: [
      {
        name: { en: "Howling Winds", th: "สายลมหอน" },
        type: "Utility",
        effect: {
          en: "When blessed by a Druidess, the Dryad channels \"Howling Winds\" — draining the magical energy of enemy watchtowers and channeling that power to empower nearby Wolf allies, at the cost of remaining stationary and draining stamina.",
          th: "เมื่อได้รับพรจาก Druidess Dryad จะใช้ 'Howling Winds' ดูดพลังพ่อมดจากป้อมยามศัตรูและถ่ายพลังนั้นเสริมกำลังพันธมิตรวูฟใกล้ๆ โดยต้องยืนนิ่งและกินสตามิน่า",
        },
        duration: { en: "Drains stamina — must remain stationary while active", th: "กินสตามิน่า — ต้องยืนนิ่งตลอดเวลาที่ใช้งาน" },
      },
    ],
    description: {
      en: "A magical forest spirit summoned by the Druidess. Drains enemy watchtower magic and redirects it to empower Wolf allies.",
      th: "วิญญาณป่าผู้วิเศษที่ Druidess เรียกขึ้นมา ดูดพลังเวทจากป้อมยามศัตรูและส่งต่อพลังให้พันธมิตรวูฟ",
    },
  },
];

// ─── CLAN DATA WITH POPULATED UNITS ───────────────────────────

export const CLAN_DATA: ClanData[] = [
  {
    id: "dragon",
    name: "Dragon Clan",
    lore: {
      en: "Masters of fire and discipline. The Dragon Clan blends precision swordsmanship with devastating alchemical warfare, making them formidable at every tech tier.",
      th: "ผู้เชี่ยวชาญเพลิงและวินัย เผ่ามังกรผสมผสานการต่อสู้ด้วยดาบที่แม่นยำกับสงครามเคมีที่น่าสะพรึง ทำให้พวกเขาน่าเกรงขามในทุกระดับเทคโนโลยี",
    },
    color: "from-red-900/60 to-orange-900/40 border-red-700/50",
    units: ALL_UNITS_DATA.filter((u) => u.clan === "Dragon"),
  },
  {
    id: "serpent",
    name: "Serpent Clan",
    lore: {
      en: "Children of shadow and venom. Serpent Clan masters guerrilla tactics, poison, and cunning ambushes from the darkness.",
      th: "ลูกหลานแห่งเงาและพิษ เผ่างูใหญ่เชี่ยวชาญยุทธวิธีกองโจร พิษ และการดักโจมตีจากความมืด",
    },
    color: "from-green-900/60 to-teal-900/40 border-green-700/50",
    units: ALL_UNITS_DATA.filter((u) => u.clan === "Serpent"),
  },
  {
    id: "lotus",
    name: "Lotus Clan",
    lore: {
      en: "Weavers of death and rice-paddy alchemy. The Lotus Clan wields undead minions and powerful magic to overwhelm foes with sheer attrition.",
      th: "นักปั้นความตายและเล่นแร่แปรธาตุในนาข้าว เผ่าดอกบัวควบคุมลูกสมุนผีดิบและเวทมนตร์อันทรงพลังเพื่อเอาชนะศัตรูด้วยการบั่นทอน",
    },
    color: "from-purple-900/60 to-violet-900/40 border-purple-700/50",
    units: ALL_UNITS_DATA.filter((u) => u.clan === "Lotus"),
  },
  {
    id: "wolf",
    name: "Wolf Clan",
    lore: {
      en: "Savage warriors born from the wilderness. Wolf Clan units are cheap, fast, and feral — punishing enemies who dare to overextend.",
      th: "นักรบดุร้ายที่เกิดจากป่าดงดิบ ยูนิตของเผ่าหมาป่าราคาถูก เร็ว และโหดเหี้ยม — ลงโทษศัตรูที่กล้าขยายแนวรบมากเกินไป",
    },
    color: "from-blue-900/60 to-slate-900/40 border-blue-700/50",
    units: ALL_UNITS_DATA.filter((u) => u.clan === "Wolf"),
  },
];

// Damage vs Armor effectiveness multipliers
export const DAMAGE_MATCHUP: Record<DamageType, Partial<Record<ArmorType, number>>> = {
  Cutting: { Unarmored: 2, Light: 1.5, Medium: 1, Heavy: 0.5, Building: 0.5, Horse: 1 },
  Piercing: { Unarmored: 1.5, Light: 2, Medium: 1, Heavy: 0.5, Building: 0.5, Horse: 1.5 },
  Blunt: { Unarmored: 1, Light: 1, Medium: 1.5, Heavy: 1.5, Building: 1, Horse: 1 },
  Magic: { Unarmored: 1.5, Light: 1.5, Medium: 1.5, Heavy: 1.5, Building: 1, Horse: 1.5 },
  Fire: { Unarmored: 2, Light: 2, Medium: 1.5, Heavy: 1, Building: 2, Horse: 1.5 },
  Explosive: { Unarmored: 2, Light: 1.5, Medium: 1.5, Heavy: 1, Building: 2, Horse: 1.5 },
};

export const ARMOR_TYPES: ArmorType[] = ["Unarmored", "Light", "Medium", "Heavy", "Building", "Horse"];
export const DAMAGE_TYPES: DamageType[] = ["Cutting", "Piercing", "Blunt", "Magic", "Fire", "Explosive"];

// ─── GAMEPLAY GUIDES ─────────────────────────────────────────

export interface GuideSection {
  id: string;
  title: L10n;
  icon: string;
  content: L10n;
  tips: L10nArray;
  formula?: L10n;
  formulaLabel?: L10n;
}

export const GAMEPLAY_GUIDES: GuideSection[] = [
  {
    id: "peasant-ratio",
    title: { en: "Peasant Distribution & Macro", th: "สูตรจัดสรรชาวนาต้นเกม" },
    icon: "🌾",
    content: {
      en: "The most critical early-game decision is how you split your peasants between Rice and Water. Both resources are required for training units, with different costs depending on the unit trained. The optimal split depends on your clan and build order, but the general rule is a 3–4 Rice : 3–4 Water ratio.",
      th: "การตัดสินใจที่สำคัญที่สุดในช่วงต้นเกมคือการแบ่งชาวนาระหว่างข้าวและน้ำ ทรัพยากรทั้งสองจำเป็นสำหรับการฝึกยูนิต สัดส่วนที่ดีที่สุดขึ้นอยู่กับเผ่าและลำดับการสร้าง แต่กฎทั่วไปคือสัดส่วน 3–4 ข้าว : 3–4 น้ำ",
    },
    tips: {
      en: [
        "Start with 3 Rice / 3 Water peasants from your initial supply.",
        "Each peasant added to rice fields increases rice income by ~1.2× (diminishing returns after 5).",
        "Water is often the bottleneck for cavalry — add a 4th Water peasant if going horse-heavy.",
        "Never drop below 2 rice peasants; units will queue-lock if rice runs dry.",
        "Assign idle peasants to rice/water immediately after building construction finishes.",
        "Scout with your hero only — never send a peasant to explore (wastes economic time).",
      ],
      th: [
        "เริ่มต้นด้วยชาวนา 3 ข้าว / 3 น้ำ จากโควต้าเริ่มต้น",
        "ชาวนาข้าวแต่ละคนเพิ่มรายได้ข้าวประมาณ 1.2× (ผลตอบแทนลดลงหลัง 5 คน)",
        "น้ำมักเป็นคอขวดสำหรับม้า — เพิ่มชาวนาน้ำคนที่ 4 ถ้าเน้นกลยุทธ์ม้า",
        "อย่าให้ชาวนาข้าวน้อยกว่า 2 คน ยูนิตจะหยุดคิวถ้าข้าวหมด",
        "มอบหมายชาวนาที่ว่างงานไปที่นาข้าว/น้ำทันทีหลังสร้างอาคารเสร็จ",
        "สำรวจแผนที่ด้วยฮีโร่เท่านั้น — อย่าส่งชาวนาไปสำรวจ (เสียเวลาเศรษฐกิจ)",
      ],
    },
    formula: {
      en: "Optimal Ratio: 3–4 Rice : 3–4 Water (adjust +1 Water for cavalry builds)",
      th: "สัดส่วนที่ดีที่สุด: 3–4 ข้าว : 3–4 น้ำ (เพิ่ม +1 น้ำสำหรับกลยุทธ์ม้า)",
    },
    formulaLabel: { en: "Peasant Split Formula", th: "สูตรจัดสรรชาวนา" },
  },
  {
    id: "yang-generation",
    title: { en: "Yang Point Generation", th: "การสะสม Yang Point" },
    icon: "⚡",
    content: {
      en: "Yang Points power your hero's Battle Gear abilities. They are generated through combat — every hit dealt or received, every unit killed, and most importantly, every unit healed by a Geisha yields Yang. The Geisha healing loop is the fastest way to accumulate Yang in the base without fighting.",
      th: "Yang Points เป็นแหล่งพลังของ Battle Gear ฮีโร่ สร้างได้จากการต่อสู้ — ทุกการโจมตีที่ทำและรับ ทุกยูนิตที่สังหาร และที่สำคัญที่สุด ทุกยูนิตที่ Geisha ฮีล ลูปการฮีลของ Geisha คือวิธีที่เร็วที่สุดในการสะสม Yang ในฐาน",
    },
    tips: {
      en: [
        "Yang is earned per hit: even small skirmishes generate significant Yang if sustained.",
        "Geisha Healing Loop: Injure your own unit slightly, then have a Geisha heal it repeatedly. Each heal tick awards Yang.",
        "Samurai training itself does not generate Yang; only combat and healing do.",
        "Killing enemy units gives a bonus Yang burst — prioritise last-hitting with your hero.",
        "A Geisha healing a single unit for 30 seconds can generate enough Yang for one Battle Gear use.",
        "Multiple Geisha stacked on one low-HP unit maximises Yang-per-second.",
      ],
      th: [
        "Yang ได้รับต่อการโจมตี แม้การต่อสู้เล็กน้อยก็สร้าง Yang ได้มากถ้าสู้ยืดเยื้อ",
        "ลูปการฮีลของ Geisha: ทำให้ยูนิตตัวเองบาดเจ็บเล็กน้อย แล้วให้ Geisha ฮีลซ้ำ ๆ ทุก tick ของการฮีลให้ Yang",
        "การฝึก Samurai ไม่สร้าง Yang เองได้ — ต้องมาจากการต่อสู้และการฮีลเท่านั้น",
        "การสังหารยูนิตศัตรูให้ Yang โบนัส — ให้ฮีโร่เป็นผู้โจมตีสุดท้าย",
        "Geisha ที่ฮีลยูนิตเดียวเป็นเวลา 30 วินาทีสามารถสร้าง Yang ได้เพียงพอสำหรับ Battle Gear 1 ครั้ง",
        "Geisha หลายตัวบนยูนิต HP ต่ำ 1 ตัว สร้าง Yang ต่อวินาทีได้สูงสุด",
      ],
    },
    formula: {
      en: "Yang = Σ(Damage Dealt) + Σ(Damage Taken) + Σ(Heal Ticks × 2)",
      th: "Yang = Σ(ความเสียหายที่ทำ) + Σ(ความเสียหายที่รับ) + Σ(Heal Ticks × 2)",
    },
    formulaLabel: { en: "Yang Generation Formula (simplified)", th: "สูตรสะสม Yang (ประมาณการ)" },
  },
  {
    id: "samurai-training",
    title: { en: "Samurai Training Optimisation", th: "การเพิ่มประสิทธิภาพการฝึก Samurai" },
    icon: "⚔️",
    content: {
      en: "Samurai are your most powerful melee units, but require the full Dojo + Target Range + Fireworks Factory chain. Efficient training queues and resource management determine how quickly you can field them.",
      th: "Samurai คือยูนิตระยะประชิดที่ทรงพลังที่สุด แต่ต้องการสาย Dojo + Target Range + Fireworks Factory ครบถ้วน คิวการฝึกและการจัดการทรัพยากรที่มีประสิทธิภาพกำหนดว่าเราจะมีกองทัพ Samurai ได้เร็วแค่ไหน",
    },
    tips: {
      en: [
        "Build Dojo first (Spearmen / Dragon Warriors immediately available).",
        "Target Range unlocks Dragon Warriors and Archers simultaneously — build it second.",
        "Fireworks Factory is the final unlock for Samurai, Powdermen, Fire Arrow, and Dragon's Breath.",
        "Queue Samurai training in batches of 3 to maintain continuous production.",
        "Always build a Dragon Shrine alongside your Fireworks Factory to unlock Battle Gears.",
        "Two Dojo buildings double your training throughput late game.",
      ],
      th: [
        "สร้าง Dojo ก่อน (Spearmen / Dragon Warriors พร้อมใช้งานทันที)",
        "Target Range ปลดล็อก Dragon Warriors และ Archers พร้อมกัน — สร้างเป็นอันดับสอง",
        "Fireworks Factory คือการปลดล็อกสุดท้ายสำหรับ Samurai, Powdermen, Fire Arrow และ Dragon's Breath",
        "คิวการฝึก Samurai ทีละ 3 เพื่อให้การผลิตต่อเนื่อง",
        "สร้าง Dragon Shrine ควบคู่กับ Fireworks Factory เพื่อปลดล็อก Battle Gear เสมอ",
        "สร้าง Dojo สองหลังเพื่อเพิ่มกำลังการฝึกเป็นสองเท่าในช่วงปลายเกม",
      ],
    },
    formula: {
      en: "Tech Path: Dojo → Target Range → Fireworks Factory → Dragon Shrine (Gear unlock)",
      th: "เส้นทางเทค: Dojo → Target Range → Fireworks Factory → Dragon Shrine (ปลดล็อกสกิล)",
    },
    formulaLabel: { en: "Dragon Clan Tech Order", th: "ลำดับเทคเผ่ามังกร" },
  },
  {
    id: "combat-tips",
    title: { en: "General Combat Principles", th: "หลักการต่อสู้ทั่วไป" },
    icon: "🛡️",
    content: {
      en: "Understanding damage type vs. armor type is the foundation of Battle Realms combat. Every unit interaction has an effectiveness multiplier. Knowing which units to build against which enemy compositions is the difference between a good and great player.",
      th: "การเข้าใจประเภทความเสียหายเทียบกับประเภทเกราะเป็นรากฐานของการต่อสู้ใน Battle Realms ทุกการปะทะมีค่าตัวคูณประสิทธิภาพ การรู้ว่าจะสร้างยูนิตใดต่อต้านยูนิตของฝ่ายตรงข้ามคือความแตกต่างระหว่างผู้เล่นที่ดีและยอดเยี่ยม",
    },
    tips: {
      en: [
        "Fire damage is double-effective against Unarmored, Light, and Buildings — use Fire Arrow for base raids.",
        "Spearmen deal Piercing damage with a Horse armor bonus — always the answer to cavalry.",
        "Cutting damage (Samurai) struggles vs. Heavy armor — switch to Blunt or Magic for armored foes.",
        "Use Dragon Skin before engaging Heavy cavalry to negate their armored bonus.",
        "Explosive (Powderman) destroys buildings and infantry blobs — but keep them protected.",
        "Elevated terrain gives ranged units a range and damage bonus — always contest high ground.",
      ],
      th: [
        "ความเสียหายไฟประสิทธิภาพสองเท่าต่อยูนิตไร้เกราะ เกราะเบา และสิ่งก่อสร้าง — ใช้ Fire Arrow สำหรับการบุกโจมตีฐาน",
        "Spearmen ทำความเสียหาย Piercing พร้อมโบนัสต่อม้า — คือคำตอบต่อกองทัพม้าเสมอ",
        "ความเสียหาย Cutting (Samurai) อ่อนต่อเกราะหนัก — เปลี่ยนเป็น Blunt หรือ Magic สำหรับศัตรูที่มีเกราะ",
        "ใช้ Dragon Skin ก่อนปะทะกับม้าเกราะหนักเพื่อหักล้างโบนัสเกราะ",
        "ระเบิด (Powderman) ทำลายอาคารและกลุ่มทหารราบ — แต่ต้องปกป้องพวกเขาไว้",
        "พื้นที่สูงให้โบนัสระยะและความเสียหายแก่ยูนิตระยะไกล — ยึดที่สูงเสมอ",
      ],
    },
    formula: {
      en: "Effective Damage = Base Damage × Matchup Multiplier (see Damage Chart)",
      th: "ความเสียหายจริง = ความเสียหายพื้นฐาน × ค่าตัวคูณประสิทธิภาพ (ดูตาราง)",
    },
    formulaLabel: { en: "Combat Effectiveness Formula", th: "สูตรประสิทธิภาพการต่อสู้" },
  },
];

// ─── COMBAT STATS & CALCULATION HELPERS (Zen Edition 1.6.0) ───

export interface CombatStats {
  hp: number;
  baseDmg: number;
  attackInterval: number; // in seconds
  isRanged: boolean;
}

export const UNIT_COMBAT_DATABASE: Record<string, CombatStats> = {
  // ─── DRAGON CLAN ──────────────────────────────────────────
  dragon_peasant:             { hp: 150, baseDmg: 8,  attackInterval: 1.0, isRanged: false },
  dragon_spearman:            { hp: 360, baseDmg: 28, attackInterval: 0.95, isRanged: false },
  dragon_archer:              { hp: 280, baseDmg: 32, attackInterval: 1.3, isRanged: true },
  dragon_chemist:             { hp: 310, baseDmg: 36, attackInterval: 1.4, isRanged: true },
  dragon_warrior:             { hp: 520, baseDmg: 44, attackInterval: 1.0, isRanged: false },
  dragon_kabuki_warrior:      { hp: 480, baseDmg: 48, attackInterval: 0.85, isRanged: false }, // Magic vs Heavy: counters Ronin & Samurai
  dragon_powder_keg_cannoneer:{ hp: 420, baseDmg: 68, attackInterval: 1.6, isRanged: true },
  dragon_samurai:             { hp: 680, baseDmg: 54, attackInterval: 0.95, isRanged: false },
  dragon_geisha:              { hp: 250, baseDmg: 12, attackInterval: 1.2, isRanged: false },
  dragon_guardian:            { hp: 760, baseDmg: 58, attackInterval: 1.1, isRanged: false },
  dragon_battle_maiden:       { hp: 460, baseDmg: 42, attackInterval: 0.95, isRanged: false },
  zen_kenji:                  { hp: 900, baseDmg: 70, attackInterval: 0.9, isRanged: false },
  zen_otomo:                  { hp: 850, baseDmg: 65, attackInterval: 1.0, isRanged: false },
  zen_kazan:                  { hp: 950, baseDmg: 72, attackInterval: 1.2, isRanged: false },
  zen_arah:                   { hp: 650, baseDmg: 64, attackInterval: 1.2, isRanged: true },
  zen_tao:                    { hp: 800, baseDmg: 62, attackInterval: 0.95, isRanged: false },
  zen_teppo:                  { hp: 820, baseDmg: 68, attackInterval: 1.3, isRanged: true },
  zen_garrin:                 { hp: 850, baseDmg: 66, attackInterval: 0.95, isRanged: false },

  // ─── SERPENT CLAN ─────────────────────────────────────────
  serpent_peasant:            { hp: 150, baseDmg: 8,  attackInterval: 1.0, isRanged: false },
  serpent_swordsman:          { hp: 340, baseDmg: 26, attackInterval: 0.95, isRanged: false },
  serpent_crossbowman:        { hp: 290, baseDmg: 34, attackInterval: 1.4, isRanged: true },
  serpent_musketeer:          { hp: 310, baseDmg: 38, attackInterval: 1.5, isRanged: true },
  serpent_raider:             { hp: 360, baseDmg: 32, attackInterval: 1.0, isRanged: false },
  serpent_bandit:             { hp: 340, baseDmg: 28, attackInterval: 0.9, isRanged: false },
  serpent_slasher:            { hp: 500, baseDmg: 44, attackInterval: 0.95, isRanged: false },
  serpent_cannoneer:          { hp: 420, baseDmg: 68, attackInterval: 1.6, isRanged: true },
  serpent_ronin:              { hp: 660, baseDmg: 52, attackInterval: 1.0, isRanged: false },
  serpent_fan_geisha:         { hp: 250, baseDmg: 12, attackInterval: 1.2, isRanged: false },
  serpent_enforcer:           { hp: 720, baseDmg: 56, attackInterval: 1.05, isRanged: false },
  serpent_witch:              { hp: 440, baseDmg: 42, attackInterval: 1.1, isRanged: true },
  zen_shinja:                 { hp: 850, baseDmg: 68, attackInterval: 0.95, isRanged: false },
  zen_vetkin:                 { hp: 800, baseDmg: 62, attackInterval: 0.85, isRanged: false },
  zen_budo:                   { hp: 1000, baseDmg: 68, attackInterval: 1.2, isRanged: false },
  zen_utok:                   { hp: 950, baseDmg: 72, attackInterval: 1.1, isRanged: false },
  zen_necromancer:            { hp: 750, baseDmg: 65, attackInterval: 1.2, isRanged: true },

  // ─── LOTUS CLAN ───────────────────────────────────────────
  lotus_peasant:              { hp: 150, baseDmg: 8,  attackInterval: 1.0, isRanged: false },
  lotus_blade_acolyte:        { hp: 340, baseDmg: 28, attackInterval: 0.95, isRanged: false },
  lotus_staff_adept:          { hp: 340, baseDmg: 26, attackInterval: 1.0, isRanged: false },
  lotus_root_acolyte:         { hp: 310, baseDmg: 30, attackInterval: 1.2, isRanged: false },
  lotus_infested_one:         { hp: 480, baseDmg: 44, attackInterval: 1.2, isRanged: false },
  lotus_diseased_one:         { hp: 460, baseDmg: 40, attackInterval: 1.1, isRanged: false },
  lotus_unclean_one:          { hp: 500, baseDmg: 48, attackInterval: 1.1, isRanged: true }, // Corrosive Magic vs Heavy
  lotus_warlock:              { hp: 520, baseDmg: 62, attackInterval: 1.3, isRanged: true },
  lotus_master_bowman:        { hp: 450, baseDmg: 50, attackInterval: 1.35, isRanged: true },
  lotus_channeler:            { hp: 250, baseDmg: 14, attackInterval: 1.2, isRanged: false },
  lotus_brother_lyde:         { hp: 620, baseDmg: 55, attackInterval: 1.0, isRanged: false },
  lotus_brother_seito:        { hp: 600, baseDmg: 52, attackInterval: 0.95, isRanged: false },
  lotus_brother_tausen:       { hp: 640, baseDmg: 56, attackInterval: 1.05, isRanged: false },
  zen_zymeth:                 { hp: 850, baseDmg: 75, attackInterval: 1.1, isRanged: true },
  zen_koril:                  { hp: 800, baseDmg: 66, attackInterval: 0.95, isRanged: false },
  zen_issyl:                  { hp: 780, baseDmg: 64, attackInterval: 1.0, isRanged: false },
  zen_sobek:                  { hp: 950, baseDmg: 74, attackInterval: 1.1, isRanged: false },
  zen_yvaine:                 { hp: 780, baseDmg: 68, attackInterval: 1.1, isRanged: true },

  // ─── WOLF CLAN ────────────────────────────────────────────
  wolf_peasant:               { hp: 160, baseDmg: 9,  attackInterval: 1.0, isRanged: false },
  wolf_brawler:               { hp: 380, baseDmg: 26, attackInterval: 0.85, isRanged: false },
  wolf_hurler:                { hp: 310, baseDmg: 32, attackInterval: 1.35, isRanged: true },
  wolf_sledger:               { hp: 400, baseDmg: 34, attackInterval: 1.1, isRanged: false },
  wolf_digger:                { hp: 420, baseDmg: 36, attackInterval: 0.95, isRanged: false },
  wolf_pitch_slinger:         { hp: 440, baseDmg: 42, attackInterval: 1.4, isRanged: true },
  wolf_ballistaman:           { hp: 450, baseDmg: 55, attackInterval: 1.6, isRanged: true },
  wolf_mauler:                { hp: 550, baseDmg: 46, attackInterval: 1.0, isRanged: false }, // Heavy Blunt, demolishes heavy armor
  wolf_berserker:             { hp: 700, baseDmg: 60, attackInterval: 0.95, isRanged: false },
  wolf_druidess:              { hp: 280, baseDmg: 18, attackInterval: 1.2, isRanged: false },
  wolf_werewolf:              { hp: 780, baseDmg: 68, attackInterval: 0.85, isRanged: false },
  wolf_pack_master:           { hp: 420, baseDmg: 34, attackInterval: 1.0, isRanged: false },
  wolf_shale_lord:            { hp: 850, baseDmg: 66, attackInterval: 1.15, isRanged: false },
  wolf_dryad:                 { hp: 300, baseDmg: 16, attackInterval: 1.2, isRanged: false },
  wolf_grayback:              { hp: 950, baseDmg: 72, attackInterval: 0.95, isRanged: false },
  wolf_longtooth:             { hp: 820, baseDmg: 65, attackInterval: 0.85, isRanged: false },
  wolf_wildeye:               { hp: 880, baseDmg: 66, attackInterval: 0.95, isRanged: false },
  wolf_gaihla:                { hp: 780, baseDmg: 55, attackInterval: 1.1, isRanged: false },
};

export function getUnitCombatStats(unit: UnitData): CombatStats {
  const directMatch = UNIT_COMBAT_DATABASE[unit.id];
  if (directMatch) return directMatch;

  const id = unit.id.toLowerCase();
  for (const key of Object.keys(UNIT_COMBAT_DATABASE)) {
    if (id.includes(key) || key.includes(id)) {
      return UNIT_COMBAT_DATABASE[key];
    }
  }

  const tier = unit.tier.toLowerCase();
  if (tier.includes("hero") || tier.includes("zen")) {
    return { hp: 900, baseDmg: 65, attackInterval: 1.0, isRanged: false };
  }
  if (tier.includes("tier 3") || tier.includes("master")) {
    return { hp: 660, baseDmg: 54, attackInterval: 1.1, isRanged: false };
  }
  if (tier.includes("tier 2")) {
    return { hp: 480, baseDmg: 40, attackInterval: 1.1, isRanged: tier.includes("range") || tier.includes("siege") };
  }
  if (tier.includes("tier 1")) {
    return { hp: 340, baseDmg: 26, attackInterval: 1.1, isRanged: tier.includes("range") };
  }
  return { hp: 350, baseDmg: 25, attackInterval: 1.1, isRanged: false };
}

export function calculateEffectiveDamage(
  attackerDmgType: DamageType,
  targetArmorType: ArmorType,
  attackerBaseDmg: number,
  isTargetWolfShaleArmor: boolean = false
): { multiplier: number; effectiveDmg: number } {
  const baseMultiplier = DAMAGE_MATCHUP[attackerDmgType]?.[targetArmorType] ?? 1.0;
  // If target has Wolf Shale Armor, reduce incoming damage (75% for physical/fire/explosive, 50% for magic)
  let shaleMultiplier = 1.0;
  if (isTargetWolfShaleArmor) {
    shaleMultiplier = attackerDmgType === "Magic" ? 0.50 : 0.75;
  }
  const finalMultiplier = baseMultiplier * shaleMultiplier;
  const effectiveDmg = Math.round(attackerBaseDmg * finalMultiplier);
  return {
    multiplier: baseMultiplier,
    effectiveDmg: Math.max(1, effectiveDmg),
  };
}


