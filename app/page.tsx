import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import {
  faqJsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";

// Vvon home — "Forensic Indigo, refined".
//
// Single white-surface marketing site with hairline borders. Hero anchors
// a product-screenshot card (rendered natively in HTML, not an image), so
// the first thing a visitor sees is the actual product UI register, not a
// stock illustration. Stats row is intentionally absent — wire real
// numbers in once tracking exists; never invent.

export const metadata: Metadata = buildMetadata({
  title: "Vvon™ — Find what the carrier missed.",
  description:
    "AI-powered forensic review of property-insurance estimates, invoices, scopes, and documentation. Built for contractors, estimators, and public adjusters who need to defend every line.",
  path: "/",
  image: "/opengraph-image",
  keywords: [
    "forensic estimate analysis",
    "AI claim review",
    "insurance estimate review",
    "Xactimate review",
    "supplement opportunity",
    "missing scope",
    "carrier consistency",
  ],
});

const demoMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Vvon demo request",
)}`;

const features = [
  {
    title: "Forensic Issue Detection",
    body: "Identifies missing scope, pricing errors, guideline conflicts, and unsupported denials across every line.",
    icon: IconLens,
  },
  {
    title: "Line Item Verification",
    body: "Validates quantities, unit costs, coverage, and code-guideline compliance against the documented loss.",
    icon: IconCheck,
  },
  {
    title: "Document Intelligence",
    body: "Extracts and links key data from estimates, photos, invoices, denial letters, and policies.",
    icon: IconDoc,
  },
  {
    title: "Guideline & Code Engine",
    body: "Built on IICRC S500, ANSI standards, and industry best practices — cited inline on every finding.",
    icon: IconScale,
  },
  {
    title: "Evidence-Ready Reports",
    body: "Export clear, professional reports with line-level explanations and source-document citations.",
    icon: IconExport,
  },
  {
    title: "Carrier Comparison",
    body: "Benchmarks estimates against carrier patterns and historical outcomes to flag inconsistencies early.",
    icon: IconCompare,
  },
] as const;

const workflow = [
  {
    n: "01",
    t: "Upload",
    d: "Drop in estimates, invoices, scopes, photos, and reports — PDF, JPG, PNG, DOCX.",
    icon: IconUpload,
  },
  {
    n: "02",
    t: "Analyze",
    d: "AI reviews every line item against IICRC guidelines, code, and known carrier patterns.",
    icon: IconAnalyze,
  },
  {
    n: "03",
    t: "Review",
    d: "Explore findings with line-level explanations, severity ranking, and source citations.",
    icon: IconReview,
  },
  {
    n: "04",
    t: "Export",
    d: "Generate a professional report and use the evidence to defend your claim line by line.",
    icon: IconDownload,
  },
] as const;

const issues = [
  {
    title: "Missing Scope",
    detail: "Structural drying — overlooked rooms",
    amount: "$7,842",
    severity: "critical" as const,
  },
  {
    title: "Pricing Inconsistency",
    detail: "Overhead & Profit exceeds carrier limit",
    amount: "$3,214",
    severity: "high" as const,
  },
  {
    title: "Unsupported Denial",
    detail: "Wear & tear applied inconsistently",
    amount: "$2,113",
    severity: "critical" as const,
  },
  {
    title: "Continuous Flooring",
    detail: "Partial replace on continuous-material plan",
    amount: "$1,982",
    severity: "medium" as const,
  },
  {
    title: "Drying Protocol Conflict",
    detail: "Equipment runtime below standard",
    amount: "$1,541",
    severity: "medium" as const,
  },
];

const severityClass = {
  critical: "bg-severity-critical",
  high: "bg-severity-high",
  medium: "bg-severity-medium",
  low: "bg-severity-low",
} as const;

const faqs = [
  {
    q: "Is Vvon™ a public adjuster?",
    a: "No. Vvon™ provides informational document and estimate analysis only. It does not negotiate with carriers, represent you, or adjust your claim.",
  },
  {
    q: "Does Vvon™ guarantee a higher settlement?",
    a: "No. The platform identifies possible scope gaps and documentation deficiencies. Claim outcomes depend on policy terms, evidence, carrier review, and applicable state law.",
  },
  {
    q: "What documents should I upload?",
    a: "Carrier estimate, contractor estimate, photos, policy, denial letter, mitigation invoice, and any claim correspondence. The more complete the file, the higher the evidentiary confidence on each finding.",
  },
  {
    q: "Can contractors and public adjusters use it?",
    a: "Yes. Vvon™ is designed as a second-pass scope review for IICRC-certified restoration contractors, public adjusters, attorneys, and estimators.",
  },
  {
    q: "Is Xactimate-format compatible?",
    a: "Yes. Vvon™ reads Xactimate-format estimates as text PDFs. Native ESX (Xactimate XML) parsing is on the roadmap.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1 · HERO — copy left, product mock right
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-28">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            {/* Copy column */}
            <div className="lg:col-span-5">
              <p className="eyebrow text-accent">
                AI-powered forensic review
              </p>

              <h1 className="display mt-8 text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[4.25rem]">
                Find what
                <br />
                the carrier
                <br />
                missed<span className="text-accent">.</span>
              </h1>

              <p className="mt-10 max-w-md text-base leading-relaxed text-fg-muted">
                Vvon™ analyzes estimates, invoices, scopes, and
                documentation to surface what&apos;s missing, mispriced,
                or unsupported — so you can defend every line.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-3 border border-accent bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-accent-hover"
                >
                  Start free trial
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-fg-muted transition hover:text-fg"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 items-center justify-center border border-border text-[8px]"
                  >
                    ▶
                  </span>
                  See how it works
                </a>
              </div>

              <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-fg-subtle">
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1 w-1 rounded-full bg-accent"
                  />
                  14-day free trial
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1 w-1 rounded-full bg-accent"
                  />
                  No credit card
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1 w-1 rounded-full bg-accent"
                  />
                  Cancel anytime
                </span>
              </p>
            </div>

            {/* Product mock column */}
            <div className="lg:col-span-7">
              <ProductMockCard />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2 · TRUST ROW
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
            <p className="eyebrow text-fg-subtle">
              Trusted by restoration professionals
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <TrustBadge primary="IICRC" secondary="D500 Standard" />
              <TrustBadge primary="Xactimate" secondary="Partner" />
              <TrustBadge primary="ANSI" secondary="IICRC S500" />
              <div className="hidden h-6 w-px bg-border md:block" />
              <p className="text-xs leading-tight text-fg-muted">
                Trusted by
                <br />
                <span className="font-medium text-fg">
                  Contractors &amp; Public Adjusters
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3 · FEATURES — 2x3 grid, hairline-separated
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent">Features</p>
            <h2 className="display mt-6 text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Forensic intelligence
              <br />
              built for claim defense.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
              Vvon combines AI with industry standards to reveal issues
              human eyes miss.
            </p>
          </div>

          <ul className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, body, icon: Icon }) => (
              <li key={title} className="bg-bg p-8">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-border text-accent">
                  <Icon />
                </span>
                <p className="mt-6 text-base font-medium text-fg">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4 · BUILT FOR PROFESSIONALS — bar with trust checkmarks
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-accent-bg/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow text-accent">Built for professionals</p>
              <h3 className="display mt-6 text-3xl leading-[1.1] tracking-[-0.03em] sm:text-4xl">
                Contractors. Estimators.
                <br />
                Public Adjusters.
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                Differentiate your work. Strengthen your negotiation.
                Get paid what&apos;s fair.
              </p>
            </div>

            <ul className="grid gap-4 text-sm lg:col-span-5">
              {[
                "Compatible with Xactimate®",
                "SOC 2 Type II infrastructure",
                "Enterprise-grade security",
                "US-based support",
              ].map((line) => (
                <li key={line} className="flex items-center gap-3 text-fg">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 items-center justify-center border border-accent text-accent"
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path
                        d="M2 6.5L5 9L10 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex justify-end lg:col-span-1">
              <SocBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5 · PRODUCT OVERVIEW — "platform that finds the truth"
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-accent">The platform</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                The platform that
                <br />
                finds the truth
                <br />
                in every line.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                Upload your documents and let Vvon analyze, cross-check,
                and surface what matters — across every estimate, invoice,
                and scope of work in the file.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ProductOverviewCard />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6 · WORKFLOW — 4 steps, horizontal with arrow connectors
          ───────────────────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="border-b border-border bg-bg-subtle"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent">How it works</p>
            <h2 className="display mt-6 text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Four steps from documents
              <br />
              to a defensible report.
            </h2>
          </div>

          <ol className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {workflow.map(({ n, t, d, icon: Icon }, i) => (
              <li key={n} className="relative bg-bg p-8">
                <div className="flex items-center justify-between">
                  <span className="mono text-xs uppercase tracking-[0.16em] text-accent">
                    {n}
                  </span>
                  <span className="text-fg-muted">
                    <Icon />
                  </span>
                </div>
                <p className="mt-8 text-xl font-medium tracking-tight text-fg">
                  {t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {d}
                </p>
                {i < workflow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 hidden h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center bg-bg-subtle text-fg-subtle lg:flex"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6.5 · PRICING TEASER — three prices visible without leaving page
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-accent">Pricing</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                Simple pricing.
                <br />
                Real claim work.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                Pay per claim when volume is low. Unlimited reviews when
                it isn&apos;t. Same forensic engine on every plan.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent transition hover:text-fg"
              >
                Compare full pricing
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ul className="grid gap-px border border-border bg-border sm:grid-cols-3 lg:col-span-8">
              {[
                {
                  name: "Starter",
                  amount: "$49",
                  suffix: "/ claim",
                  note: "One-time. No subscription.",
                  features: [
                    "Single forensic claim review",
                    "AI issue detection",
                    "Standard PDF report",
                  ],
                  recommended: false,
                },
                {
                  name: "Professional",
                  amount: "$99",
                  suffix: "/ mo",
                  note: "Unlimited reviews. 20% off annual.",
                  features: [
                    "Unlimited claim reviews",
                    "Document intelligence",
                    "Guideline & code engine",
                  ],
                  recommended: true,
                },
                {
                  name: "Enterprise",
                  amount: "Custom",
                  suffix: "",
                  note: "Volume pricing. Annual contract.",
                  features: [
                    "Team accounts & seats",
                    "Advanced integrations",
                    "Dedicated success manager",
                  ],
                  recommended: false,
                },
              ].map((tier) => (
                <li
                  key={tier.name}
                  className={`relative bg-bg p-6 ${
                    tier.recommended ? "ring-1 ring-inset ring-accent" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium tracking-tight text-fg">
                      {tier.name}
                    </p>
                    {tier.recommended && (
                      <span className="mono inline-flex items-center border border-accent bg-accent-bg/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-accent">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span
                      className={`mono text-3xl font-medium tracking-tight ${
                        tier.recommended ? "text-accent" : "text-fg"
                      }`}
                    >
                      {tier.amount}
                    </span>
                    {tier.suffix && (
                      <span className="text-xs text-fg-muted">
                        {tier.suffix}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-fg-subtle">{tier.note}</p>
                  <ul className="mt-5 space-y-2 text-xs">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-fg-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 inline-block h-1 w-1 flex-none rounded-full bg-accent"
                        />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7 · FAQ — concise, hairline-divided
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-accent">FAQ</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
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

      {/* ─────────────────────────────────────────────────────────────
          8 · FINAL CTA — dark, two actions, no-CC reassurance
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-dark text-fg-on-dark">
        {/* Subtle radial wash — never a full gradient. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(79,70,229,0.18),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-fade/30 to-transparent"
        />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:px-10 lg:py-36">
          <h2 className="display mx-auto max-w-3xl text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Stop leaving money
            <br />
            on the table<span className="text-accent-fade">.</span>
          </h2>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/login"
              className="inline-flex items-center gap-3 border border-accent bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-accent-hover"
            >
              Start free trial
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={demoMailto}
              className="inline-flex items-center gap-3 border border-border-on-dark-strong px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-bg-dark-elevated"
            >
              Talk to an expert
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-fg-on-dark-subtle">
            No credit card required.
          </p>
        </div>
      </section>

      <JsonLd
        data={[
          organizationJsonLd(),
          softwareApplicationJsonLd(),
          websiteJsonLd(),
          faqJsonLd(faqs),
        ]}
      />
    </>
  );
}

// ───────────────────────────────────────────────────────────────────
// Hero product mock — looks like a screenshot of the real product.
// Rendered as native HTML so it's pixel-sharp at every density.
// ───────────────────────────────────────────────────────────────────

function ProductMockCard() {
  return (
    <div className="overflow-hidden border border-border bg-bg">
      {/* Chrome */}
      <div className="flex items-center justify-between border-b border-border bg-bg-subtle px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center bg-fg text-[10px] font-semibold text-fg-on-dark">
            V
          </span>
          <p className="mono text-xs tracking-tight text-fg">
            Property Claim — 24-5678
          </p>
          <span className="mono inline-flex items-center border border-border bg-bg px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-fg-muted">
            Xactimate
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-fg-muted sm:inline">
            Export report
          </span>
          <span className="inline-flex items-center border border-accent bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-on-dark">
            Share
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* Icon rail */}
        <aside className="col-span-1 hidden border-r border-border bg-bg-subtle py-3 sm:block">
          <ul className="flex flex-col items-center gap-5 text-fg-subtle">
            <li className="text-accent">▤</li>
            <li>▦</li>
            <li>▧</li>
            <li>▨</li>
            <li>○</li>
          </ul>
        </aside>

        <div className="col-span-12 sm:col-span-11">
          {/* Stat strip */}
          <div className="grid grid-cols-2 gap-px border-b border-border bg-border lg:grid-cols-4">
            <Stat label="Total Line Items" value="1,246" />
            <Stat
              label="Issues Found"
              value="37"
              dot="bg-severity-critical"
            />
            <Stat
              label="Missed Amount"
              value="$18,732"
              valueClass="text-accent"
            />
            <Stat
              label="Review Confidence"
              value="96%"
              dot="bg-severity-low"
            />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-border bg-bg px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em]">
            <span className="border-b-2 border-accent pb-2 text-fg">
              Issues (37)
            </span>
            <span className="text-fg-subtle">Summary</span>
            <span className="text-fg-subtle">Documents (12)</span>
          </div>

          {/* Issue list + preview */}
          <div className="grid grid-cols-12">
            <ul className="col-span-12 divide-y divide-border md:col-span-7">
              {issues.map((it) => (
                <li
                  key={it.title}
                  className="flex items-center gap-4 px-5 py-3.5"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${
                      severityClass[it.severity]
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-fg">
                      {it.title}
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-fg-muted">
                      {it.detail}
                    </p>
                  </div>
                  <span className="mono shrink-0 text-[12px] font-medium text-fg">
                    {it.amount}
                  </span>
                </li>
              ))}
            </ul>

            <div className="col-span-12 border-t border-border bg-bg-subtle p-5 md:col-span-5 md:border-l md:border-t-0">
              <p className="eyebrow text-fg-subtle">Document preview</p>
              <FloorPlanMock />
              <p className="mono mt-3 text-[11px] text-fg">Living Room</p>
              <p className="mt-1 text-[11px] leading-relaxed text-fg-muted">
                3 issues found · missing scope, pricing
                inconsistency, drying protocol
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  valueClass = "",
  dot,
}: {
  label: string;
  value: string;
  valueClass?: string;
  dot?: string;
}) {
  return (
    <div className="bg-bg px-5 py-4">
      <p className="eyebrow text-fg-subtle">{label}</p>
      <p
        className={`mono mt-2 flex items-center gap-2 text-xl font-medium tracking-tight ${
          valueClass || "text-fg"
        }`}
      >
        {dot && (
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${dot}`}
          />
        )}
        {value}
      </p>
    </div>
  );
}

function FloorPlanMock() {
  return (
    <svg
      viewBox="0 0 200 130"
      className="mt-3 w-full"
      role="img"
      aria-label="Floor plan with three issue pins"
    >
      <rect
        x="1"
        y="1"
        width="198"
        height="128"
        fill="var(--color-bg)"
        stroke="var(--color-border)"
      />
      {/* Interior walls */}
      <line
        x1="120"
        y1="1"
        x2="120"
        y2="80"
        stroke="var(--color-border)"
      />
      <line
        x1="1"
        y1="80"
        x2="200"
        y2="80"
        stroke="var(--color-border)"
      />
      <line
        x1="60"
        y1="80"
        x2="60"
        y2="129"
        stroke="var(--color-border)"
      />
      {/* Room labels */}
      <text
        x="60"
        y="42"
        textAnchor="middle"
        fontSize="7"
        fill="var(--color-fg-subtle)"
        fontFamily="var(--font-mono)"
      >
        LIVING
      </text>
      <text
        x="160"
        y="42"
        textAnchor="middle"
        fontSize="7"
        fill="var(--color-fg-subtle)"
        fontFamily="var(--font-mono)"
      >
        KITCHEN
      </text>
      <text
        x="30"
        y="110"
        textAnchor="middle"
        fontSize="7"
        fill="var(--color-fg-subtle)"
        fontFamily="var(--font-mono)"
      >
        BATH
      </text>
      <text
        x="130"
        y="110"
        textAnchor="middle"
        fontSize="7"
        fill="var(--color-fg-subtle)"
        fontFamily="var(--font-mono)"
      >
        HALL
      </text>
      {/* Pins */}
      <Pin cx={45} cy={55} />
      <Pin cx={75} cy={30} />
      <Pin cx={55} cy={70} />
    </svg>
  );
}

function Pin({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="6"
        fill="var(--color-accent)"
        fillOpacity="0.18"
      />
      <circle cx={cx} cy={cy} r="2.5" fill="var(--color-accent)" />
    </g>
  );
}

// ───────────────────────────────────────────────────────────────────
// Larger product overview mock (section 5)
// ───────────────────────────────────────────────────────────────────

function ProductOverviewCard() {
  const rows = [
    {
      desc: "Structural drying - Living Room",
      type: "Missing Scope",
      finding: "High",
      impact: "$3,742",
      severity: "critical" as const,
    },
    {
      desc: "HEPA Scrubber - 72 hr",
      type: "Pricing Inconsistency",
      finding: "High",
      impact: "$1,280",
      severity: "high" as const,
    },
    {
      desc: "Remove & Reset Base - 120 LF",
      type: "Quantity Discrepancy",
      finding: "Medium",
      impact: "$880",
      severity: "medium" as const,
    },
    {
      desc: "Drying Equipment Runtime",
      type: "Protocol Conflict",
      finding: "Medium",
      impact: "$560",
      severity: "medium" as const,
    },
    {
      desc: "Overhead & Profit (Total)",
      type: "Exceeds Guideline",
      finding: "High",
      impact: "$2,113",
      severity: "high" as const,
    },
  ];

  return (
    <div className="overflow-hidden border border-border bg-bg">
      <div className="flex items-center justify-between border-b border-border bg-bg-subtle px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center bg-fg text-[10px] font-semibold text-fg-on-dark">
            V
          </span>
          <p className="mono text-xs text-fg">Property Claim — 24-5678</p>
          <span className="mono inline-flex items-center border border-border bg-bg px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-fg-muted">
            Xactimate
          </span>
        </div>
        <span className="inline-flex items-center border border-accent bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-on-dark">
          Share
        </span>
      </div>

      <div className="flex items-center gap-6 border-b border-border bg-bg px-5 py-3 text-[11px] font-medium uppercase tracking-[0.14em]">
        <span className="border-b-2 border-accent pb-2 text-fg">
          Overview
        </span>
        <span className="text-fg-subtle">Issues</span>
        <span className="text-fg-subtle">Documents</span>
        <span className="text-fg-subtle">Reports</span>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          <table className="w-full text-[12px]">
            <thead className="border-b border-border bg-bg-subtle text-left">
              <tr className="eyebrow text-fg-subtle">
                <th className="px-4 py-2 font-medium">Description</th>
                <th className="px-4 py-2 font-medium">Type</th>
                <th className="px-4 py-2 font-medium">Finding</th>
                <th className="px-4 py-2 text-right font-medium">Impact</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.desc}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="px-4 py-3 text-fg">{row.desc}</td>
                  <td className="px-4 py-3 text-fg-muted">{row.type}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] ${
                        row.severity === "critical"
                          ? "text-severity-critical"
                          : row.severity === "high"
                            ? "text-severity-high"
                            : "text-severity-medium"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${
                          severityClass[row.severity]
                        }`}
                      />
                      {row.finding}
                    </span>
                  </td>
                  <td className="mono px-4 py-3 text-right text-fg">
                    {row.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-12 border-t border-border bg-bg-subtle p-6 md:col-span-4 md:border-l md:border-t-0">
          <p className="eyebrow text-fg-subtle">Total missed amount</p>
          <p className="mono mt-3 text-3xl font-medium tracking-tight text-accent">
            $18,732
          </p>
          <DonutMock />
          <ul className="mt-4 space-y-2 text-[11px]">
            {[
              ["Missing Scope", "$7,842", "bg-severity-critical"],
              ["Pricing Issues", "$4,174", "bg-severity-high"],
              ["Denials", "$2,113", "bg-severity-medium"],
              ["Other", "$4,603", "bg-severity-low"],
            ].map(([label, amt, dot]) => (
              <li key={label} className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-fg-muted">
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${dot}`}
                  />
                  {label}
                </span>
                <span className="mono text-fg">{amt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DonutMock() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="mx-auto mt-4 h-24 w-24"
      role="img"
      aria-label="Issue breakdown donut chart"
    >
      <circle
        cx="40"
        cy="40"
        r="30"
        stroke="var(--color-border)"
        strokeWidth="10"
        fill="none"
      />
      {/* 42% critical */}
      <circle
        cx="40"
        cy="40"
        r="30"
        stroke="var(--color-severity-critical)"
        strokeWidth="10"
        fill="none"
        strokeDasharray="79 188"
        transform="rotate(-90 40 40)"
      />
      {/* 22% high */}
      <circle
        cx="40"
        cy="40"
        r="30"
        stroke="var(--color-severity-high)"
        strokeWidth="10"
        fill="none"
        strokeDasharray="41 188"
        strokeDashoffset="-79"
        transform="rotate(-90 40 40)"
      />
      {/* 11% medium */}
      <circle
        cx="40"
        cy="40"
        r="30"
        stroke="var(--color-severity-medium)"
        strokeWidth="10"
        fill="none"
        strokeDasharray="21 188"
        strokeDashoffset="-120"
        transform="rotate(-90 40 40)"
      />
    </svg>
  );
}

// ───────────────────────────────────────────────────────────────────
// Trust badge — text-only treatment (no fake partner logos)
// ───────────────────────────────────────────────────────────────────

function TrustBadge({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-lg font-semibold tracking-tight text-fg">
        {primary}
      </span>
      <span className="mono text-[10px] uppercase tracking-[0.16em] text-fg-muted">
        {secondary}
      </span>
    </div>
  );
}

function SocBadge() {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center border border-border text-[9px] uppercase tracking-[0.14em] text-fg-muted">
      <span className="font-semibold text-fg">SOC 2</span>
      <span>Type II</span>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────
// Inline icons — small monoline SVGs, currentColor
// ───────────────────────────────────────────────────────────────────

function IconLens() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <circle
        cx="7"
        cy="7"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M10.5 10.5L14 14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <rect
        x="1.5"
        y="1.5"
        width="13"
        height="13"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M4.5 8.5L7 11L11.5 5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <path
        d="M3 1.5h7L13 4.5V14.5H3V1.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="miter"
      />
      <path
        d="M10 1.5V4.5H13"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M5.5 8h5M5.5 10.5h5M5.5 13h3"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
function IconScale() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <path d="M8 2v12" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M2 4h12"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M2 4l-1 4h4l-1-4M14 4l-1 4h-4l-1 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
function IconExport() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <rect
        x="2.5"
        y="2.5"
        width="11"
        height="11"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M8 5v6M5.5 8.5L8 11l2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}
function IconCompare() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <rect
        x="1.5"
        y="3"
        width="6"
        height="10"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <rect
        x="8.5"
        y="3"
        width="6"
        height="10"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M3 8.5h3M10 6h3M10 8.5h3M10 11h2"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
function IconUpload() {
  return (
    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none">
      <path
        d="M8 11V3M5 6l3-3 3 3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
      <path
        d="M2 13h12"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
function IconAnalyze() {
  return (
    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none">
      <circle
        cx="8"
        cy="8"
        r="5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
function IconReview() {
  return (
    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none">
      <path
        d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle
        cx="8"
        cy="8"
        r="2"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none">
      <path
        d="M8 3v8M5 8l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
      <path
        d="M2 13h12"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
