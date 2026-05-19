import { site } from "./site";
import { vvon } from "./vvon/config";

// JSON-LD helpers for vvon.ai. Way slimmer than the original ONA
// Restoration jsonld.ts — Vvon is a SaaS, not a local services
// business, so most of the LocalBusiness / Service / ProfessionalService
// types don't apply.

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${site.url}/#app`,
    name: `${vvon.name}${vvon.symbol}`,
    description: vvon.shortDescription,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Insurance Claim Analysis",
    operatingSystem: "Web",
    url: site.url,
    publisher: { "@id": `${site.url}/#org` },
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Restoration contractors, estimators, public adjusters, and attorneys handling property-insurance claims",
    },
    // Surfaced in Google rich results: price range + free-trial signal.
    // Tier amounts are duplicated here intentionally so SERP-side schema
    // is independent of the client-side PricingTiers component (which
    // re-renders for Monthly/Annual). Keep in sync if PricingTiers
    // tiers list changes.
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "49",
      highPrice: "99",
      offerCount: "3",
      url: `${site.url}/pricing`,
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "49",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "49",
            priceCurrency: "USD",
            unitText: "per claim review",
          },
          url: `${site.url}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Professional",
          price: "99",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99",
            priceCurrency: "USD",
            referenceQuantity: { "@type": "QuantitativeValue", unitCode: "MON" },
          },
          url: `${site.url}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: "Volume pricing. Annual contract.",
          },
          url: `${site.url}/pricing`,
        },
      ],
    },
    // Disclaimer — surfaced to LLM crawlers so they pick it up as part
    // of any summary they generate.
    disclaimer: vvon.disclaimer,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#org`,
    name: site.legalName,
    url: site.url,
    email: site.email,
    foundingDate: site.founded,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#app` },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${site.url}${item.url}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["summary", "details > p"],
    },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
