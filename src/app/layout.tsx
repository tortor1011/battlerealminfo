import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Battle Realms Strategy & Database Hub",
  description:
    "The definitive fan-made strategy guide for Battle Realms. Explore AI bot profiles, unit databases, clan guides, damage matchups, and core gameplay mechanics.",
  keywords: [
    "Battle Realms",
    "strategy guide",
    "AI bot database",
    "Dragon Clan",
    "unit guide",
    "Battle Gear",
    "RTS",
  ],
  openGraph: {
    title: "Battle Realms Strategy & Database Hub",
    description:
      "Master Battle Realms with our comprehensive bot database, unit breakdowns, and gameplay guides.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} dark`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
