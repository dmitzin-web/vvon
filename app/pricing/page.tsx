import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { websiteJsonLd } from "@/lib/jsonld";
import { PricingTiers } from "./PricingTiers";

// Vvon pricing — hybrid GTM (Stripe self-serve + sales-led Enterprise).
// Tier prices live in PricingTiers.tsx; this server file owns metadata,
// the eyebrow/headline, FAQ, and the dark final CTA.

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Vvon™",
  description:
    "Simple pricing for serious claim work. Pay per claim with Starter, scale with Professional, or build a custom plan with Enterprise. 14-day free trial. No credit card required.",
  path: "/pricing",
  image: "/opengraph-image",
  keywords: [
    "Vvon pricing",
    "AI claim review pricing",
    "Xactimate review software cost",
    "insurance estimate analysis pricing",
  ],
});

const demoMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Vvon enterprise inquiry",
)}`;

const faqs = [
  {
    q: "What counts as a single claim review?",
    a: "One complete forensic pass over a single property claim — the carrier estimate, any contractor estimates, the policy, photos, invoices, and correspondence you upload together. There is no page cap on a single review; we look at the whole file as one claim.",
  },
  {
    q: "Can I start on Starter and upgrade to Professional later?",
    a: "Yes. Starter is one-time per claim — buy a review whenever you need one. When the volume justifies it, move to Professional for unlimited reviews. Past reports stay in your account either way.",
  },
  {
    q: "Is the 14-day trial available on every plan?",
    a: "Yes. Starter and Professional both start with a 14-day trial, no credit card required. Enterprise trials are scoped during the sales call.",
  },
  {
    q: "Do you offer discounts for restoration firms or PA shops?",
    a: "Annual billing on Professional saves 20%. Multi-seat firms typically land on Enterprise — talk to us about volume pricing and seat management.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Professional cancels at the end of your current billing period; you keep access until then. Starter is a one-time charge — nothing to cancel.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1 · HERO — headline + billing toggle + three-tier card row
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10 lg:pt-28 lg:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-accent">Pricing</p>
            <h1 className="display mt-6 text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Simple pricing for
              <br />
              serious claim work
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-8 text-base leading-relaxed text-fg-muted">
              Pay per claim when volume is low. Unlimited reviews when it
              isn&apos;t. Enterprise when teams and integrations get
              involved.
            </p>
          </div>

          <div className="mt-16">
            <PricingTiers />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2 · TRUST ROW — same partnerships as homepage
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
            <p className="eyebrow text-fg-subtle">
              Built on industry standards
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <TrustBadge primary="IICRC" secondary="D500 Standard" />
              <TrustBadge primary="Xactimate" secondary="Partner" />
              <TrustBadge primary="ANSI" secondary="IICRC S500" />
              <div className="hidden h-6 w-px bg-border md:block" />
              <p className="text-xs leading-tight text-fg-muted">
                SOC 2 Type II
                <br />
                <span className="font-medium text-fg">
                  Enterprise-grade infrastructure
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3 · WHAT'S INCLUDED — value bar, same shape as homepage
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-accent">What every plan includes</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                The same forensic
                <br />
                engine, regardless
                <br />
                of plan.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                We don&apos;t gate the AI behind a higher tier. The
                difference between plans is volume, integrations, and
                support — not what Vvon actually finds.
              </p>
            </div>

            <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:col-span-7">
              {[
                {
                  t: "Forensic issue detection",
                  d: "Missing scope, pricing errors, guideline conflicts, unsupported denials.",
                },
                {
                  t: "Source-cited findings",
                  d: "Every flag links back to the exact line, document, and standard.",
                },
                {
                  t: "Evidence-ready reports",
                  d: "Professional PDFs your supplements and negotiations can lean on.",
                },
                {
                  t: "US-based support",
                  d: "Talk to humans who know IICRC, Xactimate, and the claim process.",
                },
              ].map((it) => (
                <li key={it.t} className="bg-bg p-6">
                  <p className="text-sm font-medium text-fg">{it.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {it.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4 · FAQ — pricing-specific
          ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-accent">Pricing FAQ</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                Common questions.
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
          5 · FINAL CTA — dark, same shape as homepage
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-dark text-fg-on-dark">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(79,70,229,0.18),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-fade/30 to-transparent"
        />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:px-10 lg:py-32">
          <h2 className="display mx-auto max-w-3xl text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Try it on one claim
            <span className="text-accent-fade">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg-on-dark-subtle">
            See what Vvon finds before you decide on a plan. Fourteen
            days, no credit card.
          </p>

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
              Talk to sales
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-fg-on-dark-subtle">
            No credit card required.
          </p>
        </div>
      </section>

      <JsonLd
        data={[
          websiteJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
    </>
  );
}

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
