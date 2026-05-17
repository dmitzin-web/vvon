import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";

// Fonts used across vvon.ai.
//
//   Inter           — primary sans, body and display in production
//                     "Forensic Indigo" design.
//   JetBrains Mono  — numeric data, IDs, severity badges.
//   Fraunces        — modern variable serif used only on the
//                     /preview/editorial showcase page. Big-name
//                     editorial sites like Anthropic use a similar
//                     Tiempos-ish serif for display headings.

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  // Variable font — full weight range exposed (300-900).
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});
