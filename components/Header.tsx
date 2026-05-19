"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { HeaderAuth } from "./HeaderAuth";

// Vvon header — single wordmark, primary trial CTA, secondary demo link.
// Hairline-bordered sticky bar. Sub-brand ("ClaimLens") deliberately
// dropped — Vvon is the only brand.

const nav = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions", caret: true },
  { href: "/resources", label: "Resources", caret: true },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

const demoMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Vvon demo request",
)}`;

export function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5 lg:px-10">
        <Link
          href="/"
          aria-label="Vvon home"
          className="group inline-flex items-baseline gap-0.5"
        >
          <span className="text-2xl font-semibold tracking-[-0.04em] text-fg transition group-hover:opacity-80">
            VVON
          </span>
          <sup className="text-[0.55em] font-medium text-fg-muted">™</sup>
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

        <div className="flex items-center gap-5">
          <div className="hidden sm:block">
            <HeaderAuth tone="light" />
          </div>
          <a
            href={demoMailto}
            className="hidden text-xs font-medium uppercase tracking-[0.16em] text-fg-muted transition hover:text-fg md:inline-flex"
          >
            Book a demo
          </a>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-accent-hover"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </header>
  );
}
