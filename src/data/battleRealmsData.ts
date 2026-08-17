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
      en: "Boss-tier all-rounder. Adapts to any situation.",
      th: "บอสระดับตำนาน ปรับตัวได้กับทุกสถานการณ์",
    },
    playstyle: {
      en: "Adaptive — will pressure, tech up, and siege simultaneously.",
      th: "ปรับตัว — สามารถกดดัน พัฒนาเทค และโจมตีฐานได้พร้อมกัน",
    },
    stats: [
      { label: "Aggressiveness", value: 100 },
      { label: "Harassment", value: 100 },
      { label: "Battle Gear", value: 100 },
      { label: "Horse", value: 100 },
      { label: "Healer", value: 100 },
      { label: "Intelligence", value: 100 },
      { label: "Memory", value: 100 },
      { label: "Attention", value: 100 },
    ],
    counterTips: {
      en: [
        "Wall off your base early — Nightvol will probe every opening.",
        "Prioritise destroying his Healer units; he uses them expertly.",
        "Engage him on your terms — never let him pick the fight.",
        "Keep peasants safe at all costs; he will raid your economy.",
      ],
      th: [
        "กั้นฐานตั้งแต่เนิ่น ๆ — Nightvol จะหาทางโจมตีทุกช่องโหว่",
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
      th: ["ไม่มีจุดอ่อนที่ชัดเจน — ยากขึ้นในทุกแผนที่"],
    },
  },
  {
    id: "taro",
    name: "Taro",
    tier: "S",
    tagline: {
      en: "Heavy tank cavalry with top-tier sustain.",
      th: "ทัพม้าหนักพร้อมระบบฮีลชั้นยอด",
    },
    playstyle: {
      en: "Cavalry-centric — builds heavy horse units supported by healers.",
      th: "เน้นม้า — สร้างกองทัพม้าหนักพร้อมตัวฮีลคอยหนุน",
    },
    stats: [
      { label: "Aggressiveness", value: 82 },
      { label: "Battle Gear", value: 99 },
      { label: "Horse", value: 100 },
      { label: "Healer", value: 94 },
      { label: "Attention", value: 92 },
    ],
    counterTips: {
      en: [
        "Spearmen are your best friend — deploy them in groups of 8+.",
        "Deny his Bathhouse; killing healers removes his sustain.",
        "Explosive or Fire damage melts his cavalry blobs.",
        "Kite with archers from behind spear walls.",
      ],
      th: [
        "ทหารถือหอก (Spearmen) คือคำตอบ ควรมีอย่างน้อย 8 ตัว",
        "ทำลาย Bathhouse เพื่อตัดระบบฮีลของเขา",
        "ความเสียหายประเภทไฟหรือระเบิดเผาทัพม้าที่รวมตัวกันได้อย่างรวดเร็ว",
        "ล่อทัพด้วยธนูจากด้านหลังแนว Spearmen",
      ],
    },
    strengths: {
      en: ["Unstoppable cavalry ball", "Self-sustaining through Healers", "High gear usage"],
      th: ["กองทัพม้าที่หยุดไม่ได้", "ฮีลตัวเองได้อย่างต่อเนื่อง", "ใช้ Battle Gear อย่างมีประสิทธิภาพ"],
    },
    weaknesses: {
      en: ["Countered hard by massed Spearmen", "Slow initial build"],
      th: ["อ่อนแอมากต่อกองทหารถือหอกจำนวนมาก", "เริ่มต้นช้า"],
    },
  },
  {
    id: "longtooth",
    name: "Longtooth",
    tier: "A+",
    tagline: {
      en: "Skill spammer and relentless early harasser.",
      th: "ผู้เชี่ยวชาญสกิลและการป่วนตั้งแต่ต้นเกม",
    },
    playstyle: {
      en: "Harassment-first — spends Battle Gear constantly and never stops raiding.",
      th: "บุกป่วนก่อน — ใช้ Battle Gear ตลอดเวลาและไม่หยุดโจมตี",
    },
    stats: [
      { label: "Harassment", value: 90 },
      { label: "Battle Gear", value: 100 },
      { label: "Aggressiveness", value: 65 },
      { label: "Exploration", value: 30 },
    ],
    counterTips: {
      en: [
        "Fortify expansion points before he scouts them.",
        "His low exploration score means he may miss flanking paths — use them.",
        "Outlast his early harassment; his mid-game aggression drops.",
        "Counter-harass his rice fields while he is busy raiding you.",
      ],
      th: [
        "เสริมจุดขยายฐานก่อนที่เขาจะสอดแนม",
        "การ Exploration ต่ำหมายความว่าเขาอาจมองข้ามทางลัด — ใช้โอกาสนั้น",
        "ทนต่อการบุกต้นเกม แรงกดดันกลางเกมของเขาจะลดลง",
        "โจมตีนาข้าวของเขาคืนในขณะที่เขากำลังบุกเรา",
      ],
    },
    strengths: {
      en: ["100% Battle Gear usage", "Constant pressure", "Very high harassment rate"],
      th: ["ใช้ Battle Gear 100%", "สร้างแรงกดดันอย่างต่อเนื่อง", "อัตราการป่วนสูงมาก"],
    },
    weaknesses: {
      en: ["Low map awareness", "Mid-game can stall if harassment fails"],
      th: ["การรับรู้แผนที่ต่ำ", "กลางเกมสะดุดถ้าการป่วนไม่ได้ผล"],
    },
  },
  {
    id: "necromancer",
    name: "Necromancer",
    tier: "A",
    tagline: {
      en: "Relentless high-speed heavy cavalry commander.",
      th: "นักรบม้าความเร็วสูงที่ไม่หยุดยั้ง",
    },
    playstyle: {
      en: "Speed-heavy cavalry blitz — rushes with fast horse units, supported by healers.",
      th: "บุกด้วยม้าเร็ว — โจมตีด้วยม้าพร้อมการสนับสนุนจากฮีล",
    },
    stats: [
      { label: "Intelligence", value: 95 },
      { label: "Aggressiveness", value: 80 },
      { label: "Horse", value: 95 },
      { label: "Attention", value: 95 },
      { label: "Healer", value: 1 },
    ],
    counterTips: {
      en: [
        "Build Spearmen immediately — he will be at your gate quickly.",
        "Wall your rice paddies; his fast cavalry will idle-kill peasants.",
        "He almost never uses healers, so you can out-sustain him in prolonged fights.",
        "Use chokepoints to negate his cavalry speed advantage.",
      ],
      th: [
        "สร้าง Spearmen ทันที — เขาจะถึงประตูฐานได้รวดเร็วมาก",
        "กั้นนาข้าวด้วย — ม้าเร็วจะสังหารชาวนาที่ไม่ระวัง",
        "เขาแทบไม่ใช้ฮีล ดังนั้นการสู้แบบยืดเยื้อได้เปรียบ",
        "ใช้คอขวดแผนที่เพื่อยับยั้งความเร็วของม้า",
      ],
    },
    strengths: {
      en: ["Extremely fast cavalry rushes", "High intelligence (smart decisions)", "Relentless attention"],
      th: ["บุกด้วยม้าเร็วอย่างสุดขีด", "ความฉลาดสูง (ตัดสินใจได้ดี)", "ไม่ยั้งมือ"],
    },
    weaknesses: {
      en: ["Virtually no healer usage — attrition works", "Predictable cavalry-heavy army"],
      th: ["แทบไม่ใช้ฮีล — การสู้แบบยืดเยื้อได้เปรียบ", "ทัพม้าล้วน ๆ ที่คาดเดาได้"],
    },
  },
  {
    id: "vetkin",
    name: "Vetkin",
    tier: "B+",
    tagline: {
      en: "Early-game horse rusher. Wins or fades.",
      th: "นักรบม้าต้นเกม บุกหนักหรือดับเงียบ",
    },
    playstyle: {
      en: "All-in horse rush — goes all-out early then stagnates if the rush fails.",
      th: "บุกด้วยม้าแบบ All-in — ทุ่มสุดตัวตั้งแต่ต้น แล้วซบเซาถ้าไม่สำเร็จ",
    },
    stats: [
      { label: "Harassment", value: 95 },
      { label: "Aggressiveness", value: 91 },
      { label: "Horse", value: 100 },
      { label: "Battle Gear", value: 5 },
      { label: "Healer", value: 0 },
    ],
    counterTips: {
      en: [
        "Survive the first 5 minutes and you have already won.",
        "2–3 Spearmen near your base entrance stop his rush cold.",
        "He will not heal — chip his cavalry down and they will never recover.",
        "Expand freely once his first wave is repelled; he cannot recover economically.",
      ],
      th: [
        "รอดจากช่วง 5 นาทีแรกก็แปลว่าชนะแล้ว",
        "Spearmen 2–3 ตัวที่ทางเข้าฐานหยุดการบุกได้",
        "เขาไม่ฮีล — ทำให้ม้าบาดเจ็บทีละนิดและไม่มีวันฟื้น",
        "ขยายฐานได้อิสระหลังขัดการบุกแรก — เศรษฐกิจเขาฟื้นได้ยาก",
      ],
    },
    strengths: {
      en: ["Fastest possible horse rush", "Extreme early harassment"],
      th: ["บุกม้าต้นเกมเร็วที่สุด", "การป่วนอย่างรุนแรงต้นเกม"],
    },
    weaknesses: {
      en: ["Zero healer usage = no staying power", "Negligible Battle Gear", "One-trick pony"],
      th: ["ไม่ใช้ฮีลเลย = ไม่มีทนทาน", "Battle Gear น้อยมาก", "กลยุทธ์เดียว"],
    },
  },
  {
    id: "wildeye",
    name: "Wildeye",
    tier: "B",
    tagline: {
      en: "Direct cavalry striker with exceptional memory.",
      th: "นักรบม้าที่ตีตรงและจำแผนที่ได้แม่นยำ",
    },
    playstyle: {
      en: "Cavalry strikes — charges directly into your base, remembers your layout.",
      th: "โจมตีม้าตรง — พุ่งเข้าฐานตรง ๆ และจำโครงสร้างฐานของเราได้",
    },
    stats: [
      { label: "Aggressiveness", value: 85 },
      { label: "Harassment", value: 76 },
      { label: "Memory", value: 98 },
      { label: "Horse", value: 100 },
    ],
    counterTips: {
      en: [
        "He remembers your base layout — relocate defences regularly.",
        "Spearmen at base entry + Archers on elevated terrain counters his direct charges.",
        "Keep your hero alive; he tends to target heroes when spotted.",
        "Don't leave cavalry units unattended — he will pick them off.",
      ],
      th: [
        "เขาจำแผนผังฐานได้ — เปลี่ยนตำแหน่งแนวป้องกันบ้าง",
        "Spearmen หน้าทาง + ธนูบนที่สูงสกัดการบุกตรง ๆ ได้",
        "รักษาฮีโร่ให้ปลอดภัย — เขาโฟกัสฮีโร่เมื่อเจอ",
        "อย่าปล่อยม้าของเราไว้ตามลำพัง เขาจะตามเก็บ",
      ],
    },
    strengths: {
      en: ["Perfect memory of map layout", "Cavalry specialist", "Relentless aggression"],
      th: ["จำแผนผังแผนที่ได้สมบูรณ์แบบ", "เชี่ยวชาญม้า", "รุกอย่างไม่หยุดยั้ง"],
    },
    weaknesses: {
      en: ["Moderate harassment only", "No Battle Gear usage"],
      th: ["การป่วนระดับปานกลาง", "ไม่ใช้ Battle Gear"],
    },
  },
  {
    id: "tao",
    name: "Tao",
    tier: "B-",
    tagline: {
      en: "Perfectly balanced technician. Master of no single thing.",
      th: "นักเทคที่สมดุลสมบูรณ์แบบ ไม่โดดเด่นในด้านใดด้านหนึ่ง",
    },
    playstyle: {
      en: "Balanced macro — maxes cleverness and tech, keeps all other stats at exactly 50.",
      th: "มาโครสมดุล — เน้นเทคและ Battle Gear รักษาสถิติอื่น ๆ ไว้ที่ 50",
    },
    stats: [
      { label: "Cleverness", value: 100 },
      { label: "Intelligence", value: 100 },
      { label: "Battle Gear", value: 100 },
      { label: "Aggressiveness", value: 50 },
      { label: "Horse", value: 50 },
      { label: "Healer", value: 50 },
      { label: "Harassment", value: 50 },
      { label: "Memory", value: 50 },
    ],
    counterTips: {
      en: [
        "Rush him before he techs up — his aggression is mediocre early.",
        "He is a jack of all trades; hard-counter one aspect to expose his average response.",
        "His 50% aggression means he hesitates; use that window to expand.",
        "Deny his Battle Gear buildings to neuter his biggest advantage.",
      ],
      th: [
        "บุกก่อนที่เขาจะพัฒนาเทค — ความดุดันต้นเกมยังปานกลาง",
        "เขาถนัดทุกอย่างแต่ไม่เก่งสิ่งใดเป็นพิเศษ — โต้ด้านใดด้านหนึ่งแบบเข้มข้น",
        "ความดุดัน 50% หมายความว่าเขาลังเล — ใช้จังหวะนั้นขยายฐาน",
        "ทำลายอาคาร Battle Gear เพื่อตัดจุดแข็งที่ใหญ่ที่สุดของเขา",
      ],
    },
    strengths: {
      en: ["Maxed cleverness & tech", "Good Battle Gear usage"],
      th: ["ความเจ้าเล่ห์และเทคสูงสุด", "ใช้ Battle Gear ได้ดี"],
    },
    weaknesses: {
      en: ["Average aggression", "Will not capitalise on openings aggressively"],
      th: ["ความดุดันปานกลาง", "ไม่คว้าโอกาสเชิงรุก"],
    },
  },
  {
    id: "garrin",
    name: "Garrin",
    tier: "C+",
    tagline: {
      en: "Fast cavalry without skills. Quantity over quality.",
      th: "ม้าไม่มีสกิล เน้นปริมาณมากกว่าคุณภาพ",
    },
    playstyle: {
      en: "Mass cavalry — floods the map with horse units but uses no gear or healing.",
      th: "ม้าจำนวนมาก — เต็มแผนที่ด้วยม้าแต่ไม่ใช้สกิลหรือฮีล",
    },
    stats: [
      { label: "Cleverness", value: 93 },
      { label: "Horse", value: 85 },
      { label: "Hero", value: 75 },
      { label: "Battle Gear", value: 2 },
      { label: "Healer", value: 23 },
    ],
    counterTips: {
      en: [
        "Spearmen completely shut him down — build 6+ immediately.",
        "His hero usage is high — focus-fire his hero to drain his morale.",
        "He rarely uses Battle Gear, so your gear abilities will outshine his.",
        "Let him exhaust his horse waves then counter-push.",
      ],
      th: [
        "Spearmen ปิดเขาได้สนิท — สร้างทันที 6+ ตัว",
        "เขาโฟกัสฮีโร่มาก — ฟาร์มฮีโร่เขาเพื่อทำลายขวัญ",
        "เขาแทบไม่ใช้ Battle Gear — สกิลของเราจะครอบงำการต่อสู้",
        "ให้ม้าของเขาหมดไปทีละระลอก แล้วค่อยตีโต้",
      ],
    },
    strengths: {
      en: ["Decent cleverness & horse usage", "Focuses hero well"],
      th: ["ความเจ้าเล่ห์ดีและใช้ม้ามาก", "โฟกัสฮีโร่ได้ดี"],
    },
    weaknesses: {
      en: ["Near-zero Battle Gear", "Low healer use — attrition beats him"],
      th: ["Battle Gear แทบเป็นศูนย์", "ฮีลน้อย — การสู้ยืดเยื้อได้เปรียบ"],
    },
  },
  {
    id: "teppo",
    name: "Teppo",
    tier: "C",
    tagline: {
      en: "Pure infantry berserker. Ignores cavalry entirely.",
      th: "นักรบเดินเท้าสุดบ้า ไม่แตะม้าเลย",
    },
    playstyle: {
      en: "Infantry spam — masses foot soldiers and pushes aggressively with Battle Gear.",
      th: "ทหารเดินเท้าจำนวนมาก — รุมด้วยทหารราบพร้อม Battle Gear",
    },
    stats: [
      { label: "Aggressiveness", value: 94 },
      { label: "Harassment", value: 76 },
      { label: "Battle Gear", value: 70 },
      { label: "Horse", value: 7 },
      { label: "Memory", value: 17 },
    ],
    counterTips: {
      en: [
        "Cavalry counter-attacks destroy his infantry blobs quickly.",
        "He barely scouts — attack from unexpected angles to catch him off guard.",
        "His low memory means he forgets your base layout after a while.",
        "Outlast his Battle Gear cooldowns; he is vulnerable between gear uses.",
      ],
      th: [
        "ม้าโต้กลับทำลายกองทหารราบได้รวดเร็ว",
        "เขาแทบไม่สอดแนม — โจมตีจากมุมที่คาดไม่ถึง",
        "ความจำต่ำหมายความว่าเขาลืมแผนผังฐานหลังจากผ่านไป",
        "รอให้ Battle Gear หมด Cooldown แล้วจึงโจมตี — เขาอ่อนแอในช่วงนั้น",
      ],
    },
    strengths: {
      en: ["Extremely aggressive", "Decent Battle Gear usage"],
      th: ["รุกอย่างสุดขีด", "ใช้ Battle Gear พอใช้ได้"],
    },
    weaknesses: {
      en: ["No cavalry = easily flanked", "Poor map memory", "Predictable infantry pushes"],
      th: ["ไม่มีม้า = ถูกโอบล้อมได้ง่าย", "ความจำแผนที่แย่", "การบุกทหารราบที่คาดเดาได้"],
    },
  },
  {
    id: "budo",
    name: "Budo",
    tier: "D",
    tagline: {
      en: "Passive late-game builder. Easy prey for any rusher.",
      th: "นักสร้างฐานปลายเกม เหยื่อง่ายของทุกการบุก",
    },
    playstyle: {
      en: "Turtle strategy — focuses on economy, ignores attacking until very late game.",
      th: "กลยุทธ์ป้อมปราการ — เน้นเศรษฐกิจ ไม่โจมตีจนกว่าจะปลายเกมมาก",
    },
    stats: [
      { label: "Cleverness", value: 89 },
      { label: "Intelligence", value: 92 },
      { label: "Memory", value: 96 },
      { label: "Aggressiveness", value: 14 },
      { label: "Harassment", value: 18 },
      { label: "Attention", value: 5 },
    ],
    counterTips: {
      en: [
        "Rush him at any point — he will barely respond.",
        "His attention is near-zero; attack his economy and he may not notice.",
        "If you somehow let him reach late-game, he gets dangerous — don't.",
        "Any early harassment will cripple his passive economy plan.",
      ],
      th: [
        "บุกได้ทุกเวลา — เขาแทบไม่ตอบสนอง",
        "Attention แทบเป็นศูนย์ โจมตีเศรษฐกิจ เขาอาจไม่ทันสังเกต",
        "ถ้าปล่อยให้เขาถึงปลายเกมได้ เขาจะอันตราย — อย่าให้ถึงจุดนั้น",
        "การป่วนต้นเกมใด ๆ ก็ทำลายแผนเศรษฐกิจเชิงรับของเขาได้",
      ],
    },
    strengths: {
      en: ["High cleverness & memory", "Strong economic builder"],
      th: ["ความเจ้าเล่ห์และความจำสูง", "สร้างเศรษฐกิจได้ดี"],
    },
    weaknesses: {
      en: ["Extremely passive aggression (14)", "Near-zero attention means he ignores attacks", "Free win for any rusher"],
      th: ["ความดุดันต่ำสุด (14)", "Attention แทบเป็นศูนย์ — ไม่สนใจการโจมตี", "เป็นเกมง่ายสำหรับทุกคนที่บุก"],
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

// ─── UNITS & CLANS ───────────────────────────────────────────

export type DamageType = "Cutting" | "Piercing" | "Blunt" | "Magic" | "Fire" | "Explosive";
export type ArmorType = "Unarmored" | "Light" | "Medium" | "Heavy" | "Building" | "Horse";

export interface BattleGear {
  name: string;
  buildingRequired: string;
  description: L10n;
  type: "Offensive" | "Defensive" | "Support";
}

export interface UnitEntry {
  id: string;
  name: string;
  tier: string;
  role: L10n;
  trainingBuildings: string[];
  damageType: DamageType;
  armorType: ArmorType;
  battleGears: BattleGear[];
  notes: L10n;
  isAntiCavalry?: boolean;
  isHealer?: boolean;
}

export interface ClanData {
  id: string;
  name: string;
  lore: L10n;
  color: string;
  units: UnitEntry[];
}

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

export const CLAN_DATA: ClanData[] = [
  {
    id: "dragon",
    name: "Dragon Clan",
    lore: {
      en: "Masters of fire and discipline. The Dragon Clan blends precision swordsmanship with devastating alchemical warfare, making them formidable at every tech tier.",
      th: "ผู้เชี่ยวชาญเพลิงและวินัย เผ่ามังกรผสมผสานการต่อสู้ด้วยดาบที่แม่นยำกับสงครามเคมีที่น่าสะพรึง ทำให้พวกเขาน่าเกรงขามในทุกระดับเทคโนโลยี",
    },
    color: "from-red-900/60 to-orange-900/40 border-red-700/50",
    units: [
      {
        id: "samurai",
        name: "Samurai",
        tier: "Tier 3 Melee",
        role: { en: "Elite Frontliner", th: "นักรบชั้นยอดแนวหน้า" },
        trainingBuildings: ["Dojo", "Target Range", "Fireworks Factory"],
        damageType: "Cutting",
        armorType: "Heavy",
        battleGears: [
          {
            name: "Dragon Skin",
            buildingRequired: "Dragon Shrine",
            description: {
              en: "Activates a hardened skin buff that dramatically reduces incoming damage for a short duration.",
              th: "เปิดใช้งานผิวหนังแข็งที่ลดความเสียหายที่รับได้อย่างมากเป็นระยะเวลาสั้น ๆ",
            },
            type: "Defensive",
          },
          {
            name: "Dragon's Breath",
            buildingRequired: "Fireworks Factory",
            description: {
              en: "Unleashes a devastating AoE fire cone in front of the Samurai, burning all enemies in the path.",
              th: "ปลดปล่อยเปลวไฟ AoE รูปกรวยด้านหน้า Samurai เผาไหม้ศัตรูทุกตัวในเส้นทาง",
            },
            type: "Offensive",
          },
        ],
        notes: {
          en: "The backbone of Dragon Clan mid-to-late game. Requires the full Dojo → Target Range → Fireworks Factory chain. Use Dragon Skin before engaging heavy cavalry blobs.",
          th: "กระดูกสันหลังของกลางถึงปลายเกมเผ่ามังกร ต้องการสาย Dojo → Target Range → Fireworks Factory ครบ ใช้ Dragon Skin ก่อนปะทะกับกองม้าหนัก",
        },
      },
      {
        id: "dragon-warrior",
        name: "Dragon Warrior",
        tier: "Tier 2 Melee",
        role: { en: "Versatile Fighter", th: "นักสู้อเนกประสงค์" },
        trainingBuildings: ["Dojo", "Target Range"],
        damageType: "Cutting",
        armorType: "Medium",
        battleGears: [
          {
            name: "Ki Shield",
            buildingRequired: "Dragon Shrine",
            description: {
              en: "Projects a magical barrier that blocks incoming ranged projectiles for several seconds.",
              th: "ฉายเกราะป้องกันเวทมนตร์ที่สกัดกั้นกระสุนระยะไกลที่เข้ามาเป็นระยะเวลาหลายวินาที",
            },
            type: "Defensive",
          },
        ],
        notes: {
          en: "A strong mid-game unit unlocked after building the Target Range. Ki Shield makes your melee ball near-immune to archer fire — activate it before charging.",
          th: "ยูนิตกลางเกมที่แข็งแกร่ง ปลดล็อกหลังสร้าง Target Range Ki Shield ทำให้กองทัพระยะประชิดใกล้จะแพ้ไม่ได้ต่อธนู — เปิดใช้ก่อนบุก",
        },
      },
      {
        id: "spearman",
        name: "Spearman",
        tier: "Tier 1 Melee",
        role: { en: "Anti-Cavalry Specialist", th: "ผู้เชี่ยวชาญต้านม้า" },
        trainingBuildings: ["Dojo"],
        damageType: "Piercing",
        armorType: "Light",
        battleGears: [],
        isAntiCavalry: true,
        notes: {
          en: "Your answer to any cavalry-heavy bot. Build 6–8 immediately when you scout horse units. Cheap, fast to produce, and devastating against Horse armor type.",
          th: "คำตอบต่อบอทที่เน้นม้าทุกตัว สร้าง 6–8 ตัวทันทีเมื่อสอดแนมเจอยูนิตม้า ราคาถูก ผลิตเร็ว และน่ากลัวมากต่อเกราะประเภทม้า",
        },
      },
      {
        id: "archer",
        name: "Archer",
        tier: "Tier 1 Ranged",
        role: { en: "Ranged DPS", th: "ดาเมจระยะไกล" },
        trainingBuildings: ["Target Range"],
        damageType: "Piercing",
        armorType: "Unarmored",
        battleGears: [
          {
            name: "Fire Arrow",
            buildingRequired: "Fireworks Factory",
            description: {
              en: "Dips arrows in alchemical fire, adding Fire damage to all ranged attacks for a limited time.",
              th: "จุ่มลูกธนูในไฟเคมี เพิ่มความเสียหายประเภทไฟให้กับการโจมตีระยะไกลทั้งหมดเป็นเวลาจำกัด",
            },
            type: "Offensive",
          },
        ],
        notes: {
          en: "Ideal for harassing, holding chokepoints, and supporting melee from elevated terrain. Fire Arrow transforms Archers into powerful building killers.",
          th: "เหมาะสำหรับการคุกคาม ยึดจุดคอขวด และสนับสนุนระยะประชิดจากพื้นที่สูง Fire Arrow เปลี่ยน Archers ให้กลายเป็นนักทำลายอาคาร",
        },
      },
      {
        id: "geisha",
        name: "Geisha",
        tier: "Support",
        role: { en: "Healer / Yang Generator", th: "ฮีล / สร้าง Yang" },
        trainingBuildings: ["Bathhouse"],
        damageType: "Magic",
        armorType: "Unarmored",
        battleGears: [],
        isHealer: true,
        notes: {
          en: "Critical support unit. Healers sustain your army, generate Yang Points by healing, and can be looped to farm Yang in the base. Never let them die.",
          th: "ยูนิตสนับสนุนที่สำคัญมาก ฮีลกองทัพ สร้าง Yang Point ขณะฮีล และสามารถใช้ลูปฮีลเพื่อฟาร์ม Yang ในฐาน อย่าปล่อยให้ตาย",
        },
      },
      {
        id: "powderman",
        name: "Powderman / Chemist",
        tier: "Tier 2/3 Siege",
        role: { en: "Siege / AoE", th: "บุกทำลาย / AoE" },
        trainingBuildings: ["Fireworks Factory"],
        damageType: "Explosive",
        armorType: "Unarmored",
        battleGears: [],
        notes: {
          en: "Excellent against building clusters and massed infantry. Explosive damage is double-effective vs. Buildings and Unarmored units. Protect them behind your melee wall.",
          th: "ยอดเยี่ยมต่อกลุ่มอาคารและทหารราบที่รวมตัวกัน ความเสียหาย Explosive ได้สองเท่าต่ออาคารและยูนิตไร้เกราะ ต้องปกป้องพวกเขาด้วยแนวระยะประชิด",
        },
      },
    ],
  },
  {
    id: "serpent",
    name: "Serpent Clan",
    lore: {
      en: "Children of shadow and venom. Serpent Clan masters guerrilla tactics, poison, and cunning ambushes from the darkness.",
      th: "ลูกหลานแห่งเงาและพิษ เผ่างูใหญ่เชี่ยวชาญยุทธวิธีกองโจร พิษ และการดักโจมตีจากความมืด",
    },
    color: "from-green-900/60 to-teal-900/40 border-green-700/50",
    units: [],
  },
  {
    id: "lotus",
    name: "Lotus Clan",
    lore: {
      en: "Weavers of death and rice-paddy alchemy. The Lotus Clan wields undead minions and powerful magic to overwhelm foes with sheer attrition.",
      th: "นักปั้นความตายและเล่นแร่แปรธาตุในนาข้าว เผ่าดอกบัวควบคุมลูกสมุนผีดิบและเวทมนตร์อันทรงพลังเพื่อเอาชนะศัตรูด้วยการบั่นทอน",
    },
    color: "from-purple-900/60 to-violet-900/40 border-purple-700/50",
    units: [],
  },
  {
    id: "wolf",
    name: "Wolf Clan",
    lore: {
      en: "Savage warriors born from the wilderness. Wolf Clan units are cheap, fast, and feral — punishing enemies who dare to overextend.",
      th: "นักรบดุร้ายที่เกิดจากป่าดงดิบ ยูนิตของเผ่าหมาป่าราคาถูก เร็ว และโหดเหี้ยม — ลงโทษศัตรูที่กล้าขยายแนวรบมากเกินไป",
    },
    color: "from-blue-900/60 to-slate-900/40 border-blue-700/50",
    units: [],
  },
];

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
