import type { Metadata } from "next";
import Link from "next/link";

// /preview/editorial — design showcase for the alternative
// "Editorial Light Premium" direction (Anthropic / Stripe-marketing
// register). Hardcoded color and font classes so this page is fully
// independent of the production "Forensic Indigo" theme tokens in
// globals.css.
//
// Indexing: blocked via the preview layout robots meta.

export const metadata: Metadata = {
  title: "Vvon™ — Editorial preview",
  description: "Design preview — Editorial Light Premium",
};

const featurePairs = [
  {
    n: "01",
    title: "Scope gap detection",
    body: "Surfaces line items that may be missing or under-scoped relative to the documented loss.",
  },
  {
    n: "02",
    title: "Dependency logic",
    body: "Flags connected work that becomes required when one item is approved or removed.",
  },
  {
    n: "03",
    title: "Mitigation review",
    body: "Reads water, mold, smoke, fire and emergency-service scope for consistency.",
  },
  {
    n: "04",
    title: "Policy &amp; denial reading",
    body: "Highlights policy language, exclusions, limitations and stated denial reasoning.",
  },
  {
    n: "05",
    title: "Photo-to-scope mapping",
    body: "Connects visible damage in your photos to scope items that typically follow.",
  },
  {
    n: "06",
    title: "Carrier consistency",
    body: "Cross-checks what the carrier approved against what the same logic implies elsewhere.",
  },
];

const howItWorks = [
  { n: "I",   title: "Upload documents",   body: "Carrier estimate, contractor estimate, photos, policy, denial letter, mitigation invoice — anything in the file." },
  { n: "II",  title: "AI forensic review", body: "Senior-estimator-level reasoning. Line-item logic, quantities, sequencing, carrier-consistency cross-checks." },
  { n: "III", title: "Structured report",  body: "Severity-ranked findings tied to specific documents. Confidence levels on every claim." },
  { n: "IV",  title: "Action packet",      body: "Clean summary you can share with the carrier, contractor, or a licensed claim professional." },
];

const faqs = [
  { q: "Is Vvon™ a public adjuster?", a: "No. Vvon™ provides informational document and estimate analysis only. It does not negotiate, represent you, or adjust your claim." },
  { q: "Does Vvon™ guarantee more money?", a: "No. It identifies possible issues and documentation gaps, but claim outcomes depend on policy terms, evidence, carrier review, and applicable law." },
  { q: "What should I upload?", a: "Carrier estimate, contractor estimate, photos, policy, denial letter, mitigation invoice, and any claim correspondence." },
  { q: "Can contractors use it?", a: "Yes. Contractors and estimators use it as a second-pass scope review to identify possible omissions before submitting a supplement." },
  { q: "Does it replace an attorney or estimator?", a: "No. It is a support tool, not a substitute for licensed professionals." },
];

export default function EditorialPreview() {
  return (
    <div className="bg-stone-50 font-sans text-stone-900" style={{ fontFeatureSettings: '"ss01"' }}>
      {/* Preview banner — disclaims this is non-prod */}
      <div className="border-b border-stone-200 bg-stone-100/60 text-stone-700">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-2 text-xs lg:px-10">
          <span className="uppercase tracking-[0.18em]">Design preview · Editorial Light Premium</span>
          <Link
            href="/"
            className="text-stone-500 underline-offset-4 hover:text-stone-900 hover:underline"
          >
            ← Forensic Indigo
          </Link>
        </div>
      </div>

      {/* Header — quiet, serif wordmark, hairline border */}
      <header className="border-b border-stone-200 bg-stone-50/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="font-[family-name:var(--font-fraunces)] text-2xl tracking-tight text-stone-900">
            Vvon<sup className="ml-0.5 text-[0.5em] text-stone-500">™</sup>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-stone-500 lg:flex">
            <a href="#how" className="hover:text-stone-900">How it works</a>
            <a href="#features" className="hover:text-stone-900">What it does</a>
            <a href="#faq" className="hover:text-stone-900">FAQ</a>
          </nav>
          <Link
            href="/"
            className="border border-stone-900 px-4 py-2 text-xs uppercase tracking-[0.16em] text-stone-900 transition hover:bg-stone-900 hover:text-stone-50"
          >
            Try it
          </Link>
        </div>
      </header>

      {/* 1 — HERO — editorial. Stays LIGHT. Big serif display.
           Centered-asymmetric layout: tiny eyebrow on top, huge serif
           headline center-left, long-form serif italic standfirst. */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 pt-28 pb-32 lg:px-10 lg:pt-36 lg:pb-40">
          <p className="text-center text-xs uppercase tracking-[0.32em] text-stone-500">
            № 01 · Forensic estimate analysis
          </p>

          <h1
            className="mt-12 font-[family-name:var(--font-fraunces)] text-[clamp(3rem,8vw,7rem)] font-light leading-[0.98] tracking-tight text-stone-900"
            style={{ fontFeatureSettings: '"ss01","ss03"' }}
          >
            Find what
            <br />
            your insurance
            <br />
            <em className="italic text-amber-800">estimate</em> is missing.
          </h1>

          <p className="mx-auto mt-12 max-w-2xl text-center font-[family-name:var(--font-fraunces)] text-xl font-light leading-[1.5] text-stone-700">
            An AI-assisted reading of property-insurance claim documents,
            in the register of a senior IICRC desk reviewer. Calm,
            evidence-cited, and built to be useful before a single
            phone call.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/"
              className="border-b border-stone-900 pb-1 text-sm font-medium uppercase tracking-[0.18em] text-stone-900 transition hover:text-amber-800"
            >
              Analyze a claim →
            </Link>
            <Link
              href="/report"
              className="text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-900"
            >
              See a sample report
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — STANDFIRST / PROBLEM */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">№ 02</p>
              <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-4xl font-light leading-tight text-stone-900 sm:text-5xl">
                Most policyholders don&apos;t know what&apos;s missing.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-lg leading-[1.7] text-stone-700">
                Carrier estimates are dense — abbreviations, depreciation
                tables, and line-item logic that the average homeowner,
                and even many contractors, never encounter elsewhere.
                Important scope can quietly fall off without anyone
                noticing until it is too late to negotiate.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-stone-700">
                Vvon™ reads the documents the way a senior estimator
                would, on a desk review, and surfaces what looks
                incomplete — with citations to the specific document and
                a confidence rating on every finding.
              </p>

              <hr className="my-12 border-stone-200" />

              <p className="font-[family-name:var(--font-fraunces)] text-base italic text-stone-500">
                Things that commonly fall off an estimate
              </p>
              <ul className="mt-6 grid gap-x-12 gap-y-2 text-base text-stone-700 sm:grid-cols-2">
                {[
                  "Flooring continuity across rooms",
                  "Baseboard detach/reset and repaint",
                  "Drywall, texture, paint blending",
                  "Mitigation charges, equipment days",
                  "Mold remediation scope",
                  "HVAC cleaning",
                  "Pack-out, contents handling",
                  "Code-related work",
                  "Supervision, final cleaning",
                  "Quantity & waste factors",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 flex-none bg-stone-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — HOW IT WORKS — roman numerals */}
      <section id="how" className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">№ 03</p>
              <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-4xl font-light leading-tight text-stone-900 sm:text-5xl">
                Four steps. No guesswork.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stone-500">
              Upload what you have. The more documents are in the file,
              the more the report can be tied to evidence — and the
              fewer findings will be marked <em>needs verification</em>.
            </p>
          </div>

          <ol className="mt-16 space-y-px">
            {howItWorks.map((step, idx) => (
              <li
                key={step.n}
                className={`grid items-baseline gap-6 py-8 lg:grid-cols-12 ${
                  idx === 0 ? "border-t border-stone-200" : ""
                } border-b border-stone-200`}
              >
                <div className="lg:col-span-2">
                  <span className="font-[family-name:var(--font-fraunces)] text-3xl font-light italic text-amber-800">
                    {step.n}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <p className="font-[family-name:var(--font-fraunces)] text-2xl font-light leading-tight text-stone-900">
                    {step.title}
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-base leading-[1.7] text-stone-700">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4 — FEATURES — magazine-style 2-column with rule lines */}
      <section id="features" className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">№ 04</p>
              <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-4xl font-light leading-tight text-stone-900 sm:text-5xl">
                What Vvon™ <em className="italic text-amber-800">looks at</em>.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-stone-600">
                Six lenses, applied to every document in the file.
                Findings are cited to the document and a confidence
                level — never asserted blind.
              </p>
            </div>

            <ol className="grid gap-x-16 gap-y-12 lg:col-span-8 sm:grid-cols-2">
              {featurePairs.map((f) => (
                <li key={f.title} className="border-t border-stone-300 pt-6">
                  <p className="font-[family-name:var(--font-fraunces)] text-sm italic text-amber-800">
                    {f.n}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-fraunces)] text-xl font-light text-stone-900">
                    {f.title}
                  </p>
                  <p className="mt-3 text-sm leading-[1.7] text-stone-600">
                    {f.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5 — PULL QUOTE — editorial trope: center large italic */}
      <section className="border-b border-stone-200 bg-stone-100/50">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-28">
          <p className="font-[family-name:var(--font-fraunces)] text-3xl font-light italic leading-[1.35] text-stone-900 sm:text-4xl">
            &ldquo;Calm, forensic, cited. The way a senior estimator
            would talk about your file out loud, slowed down and
            structured.&rdquo;
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.32em] text-stone-500">
            What Vvon™ is meant to feel like
          </p>
        </div>
      </section>

      {/* 6 — SAMPLE REPORT POINTER */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-28">
          <Link
            href="/report"
            className="group block border-y border-stone-300 py-16 transition hover:bg-stone-100/40"
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.32em] text-stone-500">№ 05</p>
              </div>
              <div className="lg:col-span-7">
                <p className="font-[family-name:var(--font-fraunces)] text-3xl font-light leading-tight text-stone-900 sm:text-4xl">
                  Open the sample report.
                </p>
                <p className="mt-5 max-w-xl text-base leading-[1.7] text-stone-600">
                  A complete Vvon™ output on a sample claim — no signup,
                  no upload. See the findings format, severity scale,
                  and clarification requests we generate.
                </p>
              </div>
              <div className="flex items-end lg:col-span-3 lg:justify-end">
                <span className="font-[family-name:var(--font-fraunces)] text-xl italic text-amber-800 transition group-hover:text-stone-900">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 7 — FAQ */}
      <section id="faq" className="border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">№ 06</p>
              <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-4xl font-light leading-tight text-stone-900 sm:text-5xl">
                Frequently asked.
              </h2>
            </div>
            <dl className="lg:col-span-8">
              {faqs.map((item, i) => (
                <details
                  key={item.q}
                  className={`group py-6 ${
                    i === 0 ? "border-t border-stone-300" : ""
                  } border-b border-stone-200 [&[open]_[data-faq-toggle]]:rotate-45`}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-[family-name:var(--font-fraunces)] text-lg font-light text-stone-900">
                    <span>{item.q}</span>
                    <span
                      data-faq-toggle
                      aria-hidden="true"
                      className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center text-xl font-light leading-none text-stone-500 transition-transform duration-200"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-[1.7] text-stone-600">
                    {item.a}
                  </p>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 8 — FINAL CTA — warm stone-900 dark band, narrow */}
      <section className="bg-stone-900 text-stone-50">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10 lg:py-32">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-400">
            № 07 · Try it
          </p>
          <h2 className="mt-10 font-[family-name:var(--font-fraunces)] text-4xl font-light leading-tight sm:text-5xl">
            Run your claim through <em className="italic text-amber-300">Vvon™</em>.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-[1.7] text-stone-300">
            Upload your insurance estimate and related documents. Get a
            structured forensic report on possible missing scope,
            inconsistencies, and documentation gaps — in under a minute.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/upload"
              className="border-b border-stone-50 pb-1 text-sm font-medium uppercase tracking-[0.18em] text-stone-50 transition hover:text-amber-300"
            >
              Analyze a claim →
            </Link>
            <Link
              href="/pricing"
              className="text-sm uppercase tracking-[0.18em] text-stone-400 transition hover:text-stone-50"
            >
              Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50">
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
            <p>
              © {new Date().getFullYear()} Vvon, Inc. · All rights reserved.
            </p>
            <p className="uppercase tracking-[0.18em]">
              Design preview · not production
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
