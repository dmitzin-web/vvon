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
    operatingSystem: "Web",
    url: site.url,
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    // Disclaimer — surfaced to LLM crawlers so they pick it up as part
    // of any summary they generate.
    disclaimer: vvon.disclaimer,
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
