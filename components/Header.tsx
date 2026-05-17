"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderAuth } from "./HeaderAuth";

// Vvon header — B2B enterprise SaaS layout.
//
// Layout: wide hairline-bordered bar. Two-line stacked wordmark on the
// left (VVON / CLAIMLENS), full primary nav in the center, LOG IN +
// REQUEST A DEMO solid indigo CTA on the right.

const nav = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions", caret: true },
  { href: "/resources", label: "Resources", caret: true },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5 lg:px-10">
        {/* Stacked wordmark: VVON / CLAIMLENS */}
        <Link href="/" aria-label="Vvon home" className="group inline-flex">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-semibold tracking-tight text-fg group-hover:opacity-80">
              VVON
              <sup className="ml-0.5 text-[0.4em] font-medium text-fg-muted">™</sup>
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.42em] text-accent">
              ClaimLens
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-sm font-medium text-fg-muted">
            {nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-1 transition-colors ${
                      active ? "text-fg" : "hover:text-fg"
                    }`}
                  >
                    {item.label}
                    {item.caret && (
                      <span aria-hidden="true" className="text-[10px] opacity-50">
                        ▾
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <HeaderAuth tone="light" />
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-accent-hover"
          >
            Request a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
