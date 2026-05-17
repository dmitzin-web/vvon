import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { faqs, vvon } from "@/lib/vvon/config";
import { buildMetadata } from "@/lib/seo";
import {
  faqJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Vvon™ — AI forensic analysis for property-insurance estimates",
  description: vvon.shortDescription,
  path: "/",
  image: "/opengraph-image",
  keywords: [
    "insurance estimate review",
    "claim document analysis",
    "missing scope insurance",
    "supplement estimate review",
    "AI claim review",
    "Xactimate review",
    "property damage claim",
    "forensic estimate analysis",
  ],
});

// ---------------------------------------------------------------------------
// Vvon™ home page — "Forensic Indigo" design system.
//
// Sections (top → bottom):
//   1. Hero       — dark, full-bleed, big display, dual CTA
//   2. Trust strip — 4 quick metrics in mono
//   3. Problem     — what carrier estimates routinely miss
//   4. How it works — 4-step process
//   5. What it does — feature grid (8 cards, hairline, no shadow)
//   6. Categories   — 4 analysis lenses with pill labels
//   7. Sample CTA   — pointer to /report
//   8. FAQ          — disclosure pattern
//   9. Final CTA    — dark band → /upload
// ---------------------------------------------------------------------------

const features = [
  {
    title: "Scope gap detection",
    body: "Surfaces line items that may be missing or under-scoped relative to the documented loss.",
  },
  {
    title: "Dependency logic",
    body: "Flags connected work that becomes required when one item is approved or removed.",
  },
  {
    title: "Mitigation review",
    body: "Reads water, mold, smoke, fire and emergency-service scope for consistency and completeness.",
  },
  {
    title: "Policy & denial reading",
    body: "Highlights relevant policy language, exclusions, limitations and stated denial reasoning.",
  },
  {
    title: "Photo-to-scope mapping",
    body: "Connects visible damage in your photos to the scope items that typically follow.",
  },
  {
    title: "Carrier consistency",
    body: "Cross-checks what the carrier approved against what the same logic implies elsewhere.",
  },
  {
    title: "Evidence checklist",
    body: "Tells you what documentation — photos, measurements, readings, invoices — to gather next.",
  },
  {
    title: "Structured report",
    body: "Severity-ranked findings, confidence levels, and clarification questions you can use directly.",
  },
];

const categories = [
  {
    title: "Repair scope",
    items: ["Drywall", "Texture", "Paint", "Flooring", "Baseboards", "Cabinetry", "Tile", "Insulation", "Trim"],
  },
  {
    title: "Mitigation scope",
    items: ["Water extraction", "Drying", "Containment", "HEPA filtration", "Demolition", "Antimicrobial", "Mold remediation"],
  },
  {
    title: "Estimate logic",
    items: ["Quantities", "Waste factors", "Labor minimums", "Detach/reset", "Trade sequencing", "Overhead", "Final cleaning"],
  },
  {
    title: "Claim documents",
    items: ["Policy", "Denial letter", "Carrier estimate", "Contractor estimate", "Photos", "Matterport", "Adjuster notes"],
  },
];

const howItWorks = [
  {
    n: "01",
    title: "Upload documents",
    body: "Carrier estimate, contractor estimate, photos, policy, denial letter, mitigation invoice, or notes.",
  },
  {
    n: "02",
    title: "AI forensic review",
    body: "Senior-estimator-level reasoning — line-item logic, quantity consistency, trade sequencing, carrier-consistency cross-checks.",
  },
  {
    n: "03",
    title: "Structured report",
    body: "Forensic findings, severity, evidentiary confidence, and a clarification request you can put to the carrier.",
  },
  {
    n: "04",
    title: "Action packet",
    body: "Clean summary to share with the carrier, contractor, or a licensed claim professional.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO — dark, full bleed, indigo glow */}
      <section className="relative overflow-hidden bg-bg-dark text-fg-on-dark">
        {/* Indigo radial glow — top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(79,70,229,0.18)_0%,rgba(79,70,229,0)_60%)]"
        />
        {/* Subtle grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 lg:px-10 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-accent-fade">
            Vvon™ · Forensic estimate analysis
          </p>

          <h1 className="display mt-10 max-w-4xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Find what your insurance
            <br />
            estimate is{" "}
            <span className="text-accent-fade">missing</span>.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-fg-on-dark-muted">
            {vvon.shortDescription}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/upload"
              className="inline-flex items-center gap-3 border border-accent bg-accent px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-accent-hover"
            >
              Analyze a claim
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/report"
              className="inline-flex items-center gap-3 border border-border-on-dark-strong bg-transparent px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-fg-on-dark transition hover:border-fg-on-dark"
            >
              See sample report
            </Link>
          </div>
        </div>

        {/* Trust strip — mono metrics */}
        <div className="relative border-t border-border-on-dark">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border-on-dark lg:grid-cols-4">
            {[
              { label: "Avg analysis time", value: "< 60s", unit: "" },
              { label: "Concern levels", value: "5", unit: "tiers" },
              { label: "Confidence levels", value: "4", unit: "tiers" },
              { label: "Report sections", value: "6", unit: "" },
            ].map((m) => (
              <div key={m.label} className="bg-bg-dark px-6 py-6 lg:px-8 lg:py-8">
                <p className="eyebrow text-fg-on-dark-subtle">{m.label}</p>
                <p className="mt-3 mono text-2xl font-medium text-fg-on-dark">
                  {m.value}
                  {m.unit && (
                    <span className="ml-2 text-sm font-normal text-fg-on-dark-muted">
                      {m.unit}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-accent">The problem</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                Most policyholders don&apos;t know what&apos;s missing.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-fg-muted">
                Carrier estimates are dense — abbreviations, depreciation
                tables, line-item logic that the average homeowner, and even
                many contractors, never see in any other context. Important
                scope can quietly go missing without anyone noticing until
                it&apos;s too late to negotiate.
              </p>
              <p className="mt-5 text-base leading-relaxed text-fg-muted">
                Things that commonly fall off an estimate:
              </p>
              <ul className="mt-6 grid gap-x-10 gap-y-3 text-sm text-fg sm:grid-cols-2">
                {[
                  "Flooring continuity across rooms",
                  "Baseboard detach/reset and repaint",
                  "Insulation, drywall, texture, paint blending",
                  "Mitigation charges and equipment days",
                  "Mold remediation scope",
                  "HVAC cleaning",
                  "Pack-out / contents handling",
                  "Code-related work",
                  "Supervision, protection, final cleaning",
                  "Quantity differences and waste factors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-px w-3 flex-none bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="border-t border-border bg-bg-subtle">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-accent">How it works</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                Four steps. No guesswork.
              </h2>
            </div>
            <p className="max-w-md text-sm text-fg-muted">
              Upload what you have. The more documents you include, the more
              your report can be tied directly to evidence — and the fewer
              findings will be marked <span className="font-medium text-fg">needs verification</span>.
            </p>
          </div>

          <ol className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <li key={step.n} className="bg-bg p-8">
                <p className="mono text-sm text-accent">{step.n}</p>
                <p className="mt-6 text-lg font-medium tracking-tight text-fg">
                  {step.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section className="border-t border-border bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-accent">What it does</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                From confusing estimate to clear claim insight.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                Carrier estimates often use complex line items, abbreviations,
                depreciation tables and limited explanations. Vvon™ organizes
                the information into a clear, evidence-based report so you
                understand what was included, what may be missing, and what
                questions to ask next.
              </p>
            </div>

            <ul className="grid gap-px border border-border bg-border lg:col-span-7 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f.title} className="bg-bg p-7">
                  <p className="text-base font-medium tracking-tight text-fg">
                    {f.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. ANALYSIS CATEGORIES */}
      <section className="border-t border-border bg-bg-subtle">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-accent">Analysis categories</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                What Vvon™ looks at.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-fg-muted">
                Every uploaded document is read against four lenses — the
                repair scope, the mitigation scope, the estimate logic, and
                the claim documents themselves.
              </p>
            </div>

            <div className="grid gap-px border border-border bg-border lg:col-span-8 sm:grid-cols-2">
              {categories.map((cat) => (
                <div key={cat.title} className="bg-bg p-7">
                  <p className="text-base font-medium tracking-tight text-fg">
                    {cat.title}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="mono border border-border px-2 py-1 text-[11px] text-fg-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE REPORT POINTER */}
      <section className="border-t border-border bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
          <Link
            href="/report"
            className="group block border border-border bg-bg p-10 transition hover:border-accent lg:p-14"
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="eyebrow text-accent">Sample report</p>
                <h2 className="display mt-5 text-3xl leading-tight sm:text-4xl">
                  Want to see what the output looks like first?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted">
                  Open a generic Vvon™ sample report — no signup, no upload.
                  Severity-ranked findings, possible missing scope,
                  inconsistencies, clarification requests, and a
                  documentation checklist.
                </p>
              </div>
              <div className="flex items-end lg:col-span-4 lg:justify-end">
                <span className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-fg transition group-hover:gap-4 group-hover:text-accent">
                  Open sample
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="border-t border-border bg-bg-subtle">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-accent">FAQ</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                Frequently asked.
              </h2>
            </div>
            <dl className="lg:col-span-8">
              {faqs.map((item, i) => (
                <details
                  key={item.q}
                  className={`group border-border py-6 ${
                    i === 0 ? "border-t" : ""
                  } border-b [&[open]_[data-faq-toggle]]:rotate-45`}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium tracking-tight text-fg">
                    <span>{item.q}</span>
                    <span
                      data-faq-toggle
                      aria-hidden="true"
                      className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center text-xl font-light leading-none text-fg-muted transition-transform duration-200"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA — dark band */}
      <section className="relative overflow-hidden border-t border-border bg-bg-dark text-fg-on-dark">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(79,70,229,0.16)_0%,rgba(79,70,229,0)_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-accent-fade">Try it</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                Run your claim through Vvon™.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-on-dark-muted">
                Upload your insurance estimate and related documents. Get a
                structured forensic report on possible missing scope,
                inconsistencies and documentation gaps — in under a minute.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:justify-end">
              <Link
                href="/upload"
                className="inline-flex items-center gap-3 border border-accent bg-accent px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-accent-hover"
              >
                Analyze a claim
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/pricing"
                className="text-xs uppercase tracking-[0.16em] text-fg-on-dark-muted transition hover:text-fg-on-dark"
              >
                See pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          softwareApplicationJsonLd(),
          websiteJsonLd(),
          faqJsonLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />
    </>
  );
}
