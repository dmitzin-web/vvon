"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VvonWordmark } from "./vvon/VvonWordmark";
import { HeaderAuth } from "./HeaderAuth";

// Vvon-only header. Marketing site for the SaaS product.
//
// Navigation: minimal — wordmark on the left, pricing + sign-in on the
// right. Auth state (signed-in email / sign-out) replaces the sign-in
// link when the user is logged in.

const nav = [
  { href: "/pricing", label: "Pricing" },
  { href: "/#how-it-works", label: "How it works" },
];

export function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 border-b border-line-light bg-ivory/95 text-charcoal backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link
          href="/"
          aria-label="Vvon home"
          className="inline-flex items-center"
        >
          <span className="text-xl font-medium tracking-tight">
            <VvonWordmark tone="dark" />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9 eyebrow text-charcoal/70">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors ${
                      active ? "text-charcoal" : "hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <HeaderAuth tone="light" />
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 border border-charcoal bg-charcoal px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition hover:bg-transparent hover:text-charcoal"
          >
            Analyze a claim
          </Link>
        </div>
      </div>
    </header>
  );
}
