import { Inter, JetBrains_Mono } from "next/font/google";

// Forensic Indigo design system uses two fonts:
//
//   - Inter Variable for everything text. Industry-standard for modern
//     AI tools (Anthropic, Linear, Vercel, Stripe). Excellent at small
//     sizes, good display rendering, deep weight range.
//
//   - JetBrains Mono for numeric data and IDs — claim IDs, finding
//     counts, prices, severity badges, technical metadata.
//
// Both load via next/font/google, no CSS imports needed.

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
