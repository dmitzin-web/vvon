import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { vvon } from "@/lib/vvon/config";
import { buildMetadata } from "@/lib/seo";
import {
  faqJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";

// ---------------------------------------------------------------------------
// Vvon™ home — "Forensic Indigo, refined".
//
// Visual register: Linear × Anthropic × Stripe × Palantir. Dark hero with
// huge restrained typography, a real-UI evidence-engine mockup as the
// hero of the page (product, not marketing), hairline precision, indigo
// only where it carries weight. Mono for filenames and metadata.
//
// What this is NOT: generic SaaS, glassmorphism, big gradients, rounded
// bubbles, AI stock imagery, neon cyberpunk, illustrations of robots.
// ---------------------------------------------------------------------------

export const metadata: Metadata = buildMetadata({
  title: "Vvon™ — Forensic estimate analysis for property-insurance claims",
  description:
    "AI-assisted forensic review of property-insurance estimates, photos, policies, and denial letters. Built for restoration contractors, public adjusters, and estimators.",
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
    a: "Yes. Vvon™ is designed as a second-pass scope review for IICRC-certified restoration contractors, public adjusters, attorneys, and estimators. The output format is built for professional review.",
  },
  {
    q: "Is Xactimate-format compatible?",
    a: "Yes. Vvon™ reads Xactimate-format estimates as text PDFs. Native ESX (Xactimate XML) parsing is on the roadmap for higher-fidelity quantity analysis.",
  },
];

const findingTypes = [
  {
    title: "Missing scope",
    detail: "Detach/reset approved without corresponding finish restoration on the same room.",
  },
  {
    title: "Pricing inconsistencies",
    detail: "Same operation priced differently across rooms with the same conditions.",
  },
  {
    title: "Quantity mismatches",
    detail: "Wall area on line item does not match the photographed affected elevation.",
  },
  {
    title: "Drying protocol conflicts",
    detail: "Mitigation invoice equipment days not tied to specific rooms or moisture readings.",
  },
  {
    title: "Continuous flooring mismatch",
    detail: "Partial flooring replacement on a continuous-material plan without seam justification.",
  },
  {
    title: "Texture / finish blending gaps",
    detail: "Drywall patch on textured wall without matching texture line item.",
  },
  {
    title: "Carrier-consistency violations",
    detail: "Approved upstream operations imply downstream scope that isn't itemised.",
  },
  {
    title: "Unsupported denials",
    detail: "Denial cites policy provisions that the uploaded policy form does not actually contain.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────────────
          1 · HERO — near-black, restrained, typography-first
          ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-bg-dark text-fg-on-dark">
        {/* One very subtle indigo wash — no glow, no particles. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-fade/30 to-transparent"
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 lg:px-10 lg:pt-32 lg:pb-36">
          <p className="eyebrow text-accent-fade">
            Vvon™ · Forensic estimate review
          </p>

          <h1 className="display mt-12 max-w-4xl text-5xl leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Find what the<br />carrier <span className="text-accent-fade">missed</span>.
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-fg-on-dark-muted">
            AI-assisted forensic review for restoration estimates,
            mitigation invoices, photos, policies, and denial letters.
            Cited findings, calibrated confidence, professional output.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="/upload"
              className="inline-flex items-center gap-3 border border-accent bg-accent px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-fg-on-dark transition hover:bg-accent-hover"
            >
              Analyze a claim
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/report"
              className="text-xs uppercase tracking-[0.16em] text-fg-on-dark-muted transition hover:text-fg-on-dark"
            >
              See a sample report →
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          2 · LIVE ANALYSIS — the product is the hero
          A real-UI mockup of an in-progress evidence review. Rendered
          natively in HTML (no images), looks like a real screenshot of
          the report tool. This is what visitors see before they read
          marketing copy.
          ────────────────────────────────────────────────────────────── */}
      <section className="border-t border-border-on-dark bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-accent">The output</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                Every finding cited. Every confidence honest.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                The report reads like a senior IICRC desk review.
                Findings are tied to specific document line items, severity
                is calibrated, and clarification requests are phrased as
                professional questions — never accusations.
              </p>
            </div>

            <div className="lg:col-span-7">
              {/* Mock evidence UI — visually a "screenshot" of the
                  product, but rendered as native HTML. Three columns on
                  large screens, stacks on mobile. */}
              <div className="overflow-hidden border border-border bg-bg">
                {/* Window chrome */}
                <div className="flex items-center justify-between border-b border-border bg-bg-subtle px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-border-strong" />
                    <span className="h-2 w-2 rounded-full bg-border-strong" />
                    <span className="h-2 w-2 rounded-full bg-border-strong" />
                  </div>
                  <p className="mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
                    Claim 9a7f · Forensic review
                  </p>
                  <span className="mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Sources column */}
                  <aside className="border-b border-border md:col-span-4 md:border-b-0 md:border-r">
                    <p className="eyebrow border-b border-border bg-bg-subtle px-4 py-3 text-fg-subtle">
                      Sources
                    </p>
                    <ul className="text-xs">
                      {[
                        { name: "Carrier_Estimate.pdf", meta: "12,840 words", active: true },
                        { name: "Contractor_Estimate.pdf", meta: "8,420 words" },
                        { name: "Kitchen_Photos.jpg", meta: "Image · 2.1 MB" },
                        { name: "Policy_HO3.pdf", meta: "24,500 words" },
                        { name: "Denial_Letter.pdf", meta: "1,240 words" },
                      ].map((doc) => (
                        <li
                          key={doc.name}
                          className={`border-b border-border px-4 py-3 ${
                            doc.active ? "bg-accent-bg" : ""
                          }`}
                        >
                          <p
                            className={`mono truncate ${
                              doc.active ? "text-accent" : "text-fg"
                            }`}
                          >
                            {doc.name}
                          </p>
                          <p className="mono mt-1 text-[10px] text-fg-subtle">
                            {doc.meta}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </aside>

                  {/* Selected finding — the centerpiece */}
                  <div className="md:col-span-8">
                    <div className="border-b border-border bg-bg-subtle px-5 py-3">
                      <div className="flex items-center justify-between gap-4">
                        <p className="eyebrow text-fg-subtle">
                          Finding 04 of 11
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="mono inline-flex items-center gap-1.5 border border-severity-high/40 bg-severity-high/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-severity-high">
                            <span className="h-1.5 w-1.5 rounded-full bg-severity-high" />
                            High concern
                          </span>
                          <span className="mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
                            Likely
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-6">
                      <h3 className="text-base font-medium leading-snug text-fg">
                        Detach/reset approved without corresponding finish
                        restoration on the same room scope
                      </h3>

                      <p className="mt-4 text-sm leading-[1.7] text-fg-muted">
                        Carrier estimate approves detach/reset operations
                        for baseboards in the Kitchen and adjacent Hallway,
                        which recognises trim disturbance during the
                        rebuild sequence. However, related finish-restoration
                        operations <span className="text-fg">(caulk reset, nail-fill, localised paint touch-up)</span> are not itemised in the same room scopes.
                      </p>

                      <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
                        <div className="bg-bg p-4">
                          <p className="eyebrow text-fg-subtle">Cited in</p>
                          <p className="mono mt-2 text-[11px] leading-relaxed text-fg">
                            Carrier_Estimate.pdf
                          </p>
                          <p className="mono text-[11px] leading-relaxed text-fg-muted">
                            Room: Kitchen · Line 14
                          </p>
                          <p className="mono text-[11px] leading-relaxed text-fg-muted">
                            R&R Baseboard — detach &amp; reset
                          </p>
                        </div>
                        <div className="bg-bg p-4">
                          <p className="eyebrow text-fg-subtle">
                            Evidence needed
                          </p>
                          <p className="mt-2 text-[11px] leading-relaxed text-fg-muted">
                            Photos of baseboard transitions after reset;
                            contractor scope confirmation on whether
                            finish restoration was assumed.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 border-l-2 border-accent bg-accent-bg/40 px-4 py-3">
                        <p className="eyebrow text-accent">
                          Clarification request
                        </p>
                        <p className="mt-2 text-sm leading-[1.6] text-fg">
                          Could you clarify whether caulk reset and
                          localised paint touch-up at the wall-to-trim
                          transition were considered as part of the
                          detach/reset operation, or assumed to be
                          priced separately?
                        </p>
                      </div>
                    </div>

                    {/* Pagination strip */}
                    <div className="flex items-center justify-between border-t border-border bg-bg-subtle px-5 py-2.5">
                      <p className="mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
                        ← 03 of 11
                      </p>
                      <div className="mono flex items-center gap-1.5 text-[10px] text-fg-subtle">
                        <span className="h-1 w-1 rounded-full bg-severity-critical" />
                        <span className="h-1 w-1 rounded-full bg-severity-high" />
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        <span className="h-1 w-1 rounded-full bg-severity-high" />
                        <span className="h-1 w-1 rounded-full bg-severity-medium" />
                        <span className="h-1 w-1 rounded-full bg-severity-medium" />
                        <span className="h-1 w-1 rounded-full bg-severity-low" />
                      </div>
                      <p className="mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
                        05 of 11 →
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          3 · TRUST — no logos. Just text-credentials, hairline.
          ────────────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="eyebrow text-fg-subtle">Built for</p>
          <div className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "IICRC-certified contractors",
              "Public adjusters",
              "Insurance estimators",
              "Property attorneys",
            ].map((role) => (
              <p key={role} className="text-base font-medium text-fg">
                {role}
              </p>
            ))}
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-6 border-t border-border pt-8 text-sm text-fg-muted sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Standards", v: "IICRC S500 / S520 referenced" },
              { k: "Format", v: "Xactimate-compatible PDF" },
              { k: "Vision", v: "Photo evidence analysis" },
              { k: "Output", v: "Severity + confidence per finding" },
            ].map((row) => (
              <div key={row.k}>
                <p className="eyebrow text-fg-subtle">{row.k}</p>
                <p className="mt-2 text-fg">{row.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          4 · WORKFLOW — UPLOAD / ANALYZE / REVIEW / EXPORT
          ────────────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-bg-subtle">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-28">
          <p className="eyebrow text-accent">Workflow</p>
          <h2 className="display mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
            Four steps from documents to a defensible report.
          </h2>

          <ol className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                k: "01",
                t: "Upload",
                d: "Carrier estimate, contractor estimate, photos, policy, denial letter, mitigation invoice.",
              },
              {
                k: "02",
                t: "Analyze",
                d: "Senior-estimator-level reasoning — line-item logic, quantities, sequencing, carrier-consistency cross-checks.",
              },
              {
                k: "03",
                t: "Review",
                d: "Severity-ranked findings tied to specific documents. Confidence levels on every claim.",
              },
              {
                k: "04",
                t: "Export",
                d: "Clean PDF report you can share with the carrier, contractor, or licensed claim professional.",
              },
            ].map((s) => (
              <li key={s.k} className="bg-bg p-8">
                <p className="mono text-sm text-accent">{s.k}</p>
                <p className="mt-6 text-xl font-medium tracking-tight text-fg">
                  {s.t}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          5 · FINDING TYPES — forensic vocabulary, hairline grid
          ────────────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-accent">What Vvon™ catches</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                Eight forensic lenses, applied to every file.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-fg-muted">
                Each lens reads the documents for a specific class of
                issue. Every finding cites the source document and is
                rated for evidentiary confidence.
              </p>
            </div>
            <ul className="grid gap-px border border-border bg-border lg:col-span-8 sm:grid-cols-2">
              {findingTypes.map((f) => (
                <li key={f.title} className="bg-bg p-6">
                  <p className="text-base font-medium text-fg">{f.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {f.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          6 · FAQ
          ────────────────────────────────────────────────────────────── */}
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

      {/* ──────────────────────────────────────────────────────────────
          7 · FINAL CTA — dark, minimal, single action
          ────────────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-bg-dark text-fg-on-dark">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow text-accent-fade">Begin</p>
              <h2 className="display mt-6 text-4xl leading-[1.05] sm:text-5xl">
                Run your claim through Vvon™.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-on-dark-muted">
                Upload the file. Get a forensic report in under a
                minute. Informational analysis — not legal advice, not
                public adjusting, not a guarantee of settlement.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end lg:justify-end">
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
                Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          softwareApplicationJsonLd(),
          websiteJsonLd(),
          faqJsonLd(faqs),
        ]}
      />
    </>
  );
}
