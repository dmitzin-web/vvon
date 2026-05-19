"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

// Pricing tiers component.
//
// Lives as a client island because the Monthly/Annual toggle needs
// useState. The surrounding page (app/pricing/page.tsx) stays a server
// component so metadata and JSON-LD render at the edge.
//
// Per GTM memory (2026-05-16): Starter $49 single (one-time per claim
// review), Pro $99/mo, Enterprise Custom. The annual toggle only
// reprices Pro (Starter is one-time, Enterprise is Custom); Starter
// label adapts so the toggle never looks broken.

type Period = "monthly" | "annual";

const demoMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Vvon enterprise inquiry",
)}`;

type Tier = {
  name: string;
  tagline: string;
  recommended?: boolean;
  price: {
    monthly: { amount: string; suffix: string; note?: string };
    annual: { amount: string; suffix: string; note?: string };
  };
  features: string[];
  cta: { label: string; href: string };
};

const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "One claim, fully reviewed.",
    price: {
      monthly: {
        amount: "$49",
        suffix: "/ claim review",
        note: "One-time. No subscription.",
      },
      annual: {
        amount: "$49",
        suffix: "/ claim review",
        note: "One-time. No subscription.",
      },
    },
    features: [
      "Single forensic claim review",
      "AI issue detection",
      "Line item verification",
      "Standard PDF report",
      "Email support",
    ],
    cta: { label: "Start free trial", href: "/login" },
  },
  {
    name: "Professional",
    tagline: "Unlimited reviews for working pros.",
    recommended: true,
    price: {
      monthly: {
        amount: "$99",
        suffix: "/ mo",
        note: "Billed monthly.",
      },
      annual: {
        amount: "$79",
        suffix: "/ mo",
        note: "Billed annually. Save 20%.",
      },
    },
    features: [
      "Unlimited claim reviews",
      "Everything in Starter",
      "Document intelligence",
      "Guideline & code engine (IICRC, ANSI)",
      "Priority support",
    ],
    cta: { label: "Start free trial", href: "/login" },
  },
  {
    name: "Enterprise",
    tagline: "For firms and adjusting teams.",
    price: {
      monthly: {
        amount: "Custom",
        suffix: "",
        note: "Volume pricing. Annual contract.",
      },
      annual: {
        amount: "Custom",
        suffix: "",
        note: "Volume pricing. Annual contract.",
      },
    },
    features: [
      "Everything in Professional",
      "Team accounts & seat management",
      "Advanced integrations",
      "Custom reporting",
      "Dedicated success manager",
      "SLA & security review",
    ],
    cta: { label: "Talk to sales", href: demoMailto },
  },
];

export function PricingTiers() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <>
      <BillingToggle period={period} onChange={setPeriod} />

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} period={period} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-fg-muted">
        All plans include a 14-day free trial.{" "}
        <span className="text-fg">No credit card required.</span>
      </p>
    </>
  );
}

function BillingToggle({
  period,
  onChange,
}: {
  period: Period;
  onChange: (next: Period) => void;
}) {
  return (
    <div className="flex justify-center">
      <div
        role="tablist"
        aria-label="Billing period"
        className="inline-flex items-center border border-border bg-bg p-1"
      >
        <ToggleButton
          active={period === "monthly"}
          onClick={() => onChange("monthly")}
          label="Monthly"
        />
        <ToggleButton
          active={period === "annual"}
          onClick={() => onChange("annual")}
          label="Annual"
          suffix={
            <span className="mono ml-2 text-[10px] uppercase tracking-[0.16em] text-accent">
              Save 20%
            </span>
          }
        />
      </div>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  label,
  suffix,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  suffix?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`inline-flex items-center px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
        active
          ? "bg-fg text-fg-on-dark"
          : "text-fg-muted hover:text-fg"
      }`}
    >
      {label}
      {suffix}
    </button>
  );
}

function TierCard({ tier, period }: { tier: Tier; period: Period }) {
  const price = tier.price[period];
  const isRecommended = !!tier.recommended;

  return (
    <article
      className={`flex flex-col border bg-bg ${
        isRecommended ? "border-accent" : "border-border"
      }`}
    >
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <p className="text-base font-medium tracking-tight text-fg">
          {tier.name}
        </p>
        {isRecommended && (
          <span className="mono inline-flex items-center border border-accent bg-accent-bg/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-accent">
            Recommended
          </span>
        )}
      </div>

      <div className="px-6 pt-8 pb-6">
        <p className="text-sm leading-relaxed text-fg-muted">
          {tier.tagline}
        </p>

        <div className="mt-8 flex items-baseline gap-2">
          <span
            className={`mono text-5xl font-medium tracking-tight ${
              isRecommended ? "text-accent" : "text-fg"
            }`}
          >
            {price.amount}
          </span>
          {price.suffix && (
            <span className="text-sm text-fg-muted">{price.suffix}</span>
          )}
        </div>
        {price.note && (
          <p className="mt-2 text-xs text-fg-subtle">{price.note}</p>
        )}
      </div>

      <ul className="flex-1 space-y-3 border-t border-border px-6 py-6 text-sm">
        {tier.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3 text-fg">
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center border border-accent text-accent"
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
            <span className="leading-relaxed">{feat}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-border p-6">
        <Link
          href={tier.cta.href}
          className={`inline-flex w-full items-center justify-center gap-3 border px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] transition ${
            isRecommended
              ? "border-accent bg-accent text-fg-on-dark hover:bg-accent-hover"
              : "border-fg bg-bg text-fg hover:bg-fg hover:text-fg-on-dark"
          }`}
        >
          {tier.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
