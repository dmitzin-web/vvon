import Link from "next/link";
import { site } from "@/lib/site";
import { VvonWordmark } from "./vvon/VvonWordmark";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <p className="text-lg font-medium tracking-tight">
            <VvonWordmark tone="light" />
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
            {site.shortDescription}
          </p>
          <p className="mt-6 text-sm text-ivory/60">
            Built by ONA Restoration. {" "}
            <a
              href="https://www.onarestore.com"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-2 hover:text-ivory"
            >
              onarestore.com
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-ivory/50">Product</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="text-ivory/80 transition hover:text-ivory">
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-ivory/80 transition hover:text-ivory"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/upload"
                className="text-ivory/80 transition hover:text-ivory"
              >
                Analyze a claim
              </Link>
            </li>
            <li>
              <Link
                href="/report"
                className="text-ivory/80 transition hover:text-ivory"
              >
                Sample report
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-ivory/50">Legal</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/privacy"
                className="text-ivory/80 transition hover:text-ivory"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-ivory/80 transition hover:text-ivory"
              >
                Terms
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-ivory/80 transition hover:text-ivory"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-charcoal-mute px-6 py-6 text-xs text-ivory/50 lg:flex-row lg:items-center lg:px-10">
        <p>
          © {new Date().getFullYear()} {site.legalName} · All rights reserved.
        </p>
        <p className="eyebrow text-ivory/40">
          Informational analysis only · Not legal advice
        </p>
      </div>
    </footer>
  );
}
