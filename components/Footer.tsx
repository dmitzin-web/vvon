import Link from "next/link";
import { site } from "@/lib/site";
import { VvonWordmark } from "./vvon/VvonWordmark";

// Footer — Forensic Indigo. Deep ink background, hairline-divided
// columns, restrained type. Mirrors the Header's minimal posture.

export function Footer() {
  return (
    <footer className="bg-bg-dark text-fg-on-dark">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xl font-medium tracking-tight">
              <VvonWordmark tone="light" />
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fg-on-dark-muted">
              {site.shortDescription}
            </p>
            <p className="mt-6 text-xs text-fg-on-dark-subtle">
              Built by ONA Restoration &nbsp;·&nbsp;{" "}
              <a
                href="https://www.onarestore.com"
                target="_blank"
                rel="noopener"
                className="underline-offset-4 hover:underline"
              >
                onarestore.com
              </a>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-fg-on-dark-subtle">Product</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/upload"
                  className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
                >
                  Analyze a claim
                </Link>
              </li>
              <li>
                <Link
                  href="/report"
                  className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
                >
                  Sample report
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-fg-on-dark-subtle">Legal &amp; contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
                >
                  Terms
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 border-t border-border-on-dark px-6 py-6 text-xs text-fg-on-dark-subtle lg:flex-row lg:items-center lg:px-10">
        <p>
          © {new Date().getFullYear()} {site.legalName} · All rights reserved.
        </p>
        <p className="eyebrow">
          Informational analysis only · Not legal advice
        </p>
      </div>
    </footer>
  );
}
