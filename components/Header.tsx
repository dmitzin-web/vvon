"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VvonWordmark } from "./vvon/VvonWordmark";
import { HeaderAuth } from "./HeaderAuth";

// Vvon header — Forensic Indigo design system.
//
// Layout: thin sticky bar with hairline 1px bottom border. Wordmark on
// the left, nav in the center on lg, auth + primary CTA on the right.
// No shadow, no blur, no rounded corners. The whole site is rectangles
// and hairlines.

const nav = [
  { href: "/pricing", label: "Pricing" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/report", label: "Sample report" },
];

export function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 lg:px-10">
        <Link
          href="/"
          aria-label="Vvon home"
          className="inline-flex items-center text-fg transition-opacity hover:opacity-70"
        >
          <span className="text-lg font-medium tracking-tight">
            <VvonWordmark tone="dark" />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-fg-muted">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors ${
                      active ? "text-fg" : "hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <HeaderAuth tone="light" />
          </div>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 border border-fg bg-fg px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-bg hover:text-fg"
          >
            Analyze a claim
          </Link>
        </div>
      </div>
    </header>
  );
}
