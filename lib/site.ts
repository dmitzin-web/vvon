// Site-wide configuration for vvon.ai.
//
// Compared to the legacy ONA Restoration site config this file replaced:
// stripped of every restoration-only field (service area, certifications,
// brand values, LocalBusiness JSON-LD plumbing). Vvon is a SaaS, not a
// local services business — those fields don't apply.
//
// Kept the same `site` export shape (name / url / email / shortDescription
// / locale) so the small shared utilities (buildMetadata, etc.) don't
// need to change.

export const site = {
  name: "Vvon",
  legalName: "Vvon, Inc.", // TODO: replace with the actual entity name once incorporated
  tagline: "AI-assisted forensic estimate analysis.",
  shortDescription:
    "Vvon™ is an AI-assisted forensic estimate analysis platform for property-insurance restoration claims. Upload your carrier estimate, contractor estimate, photos, policy, and denial letters to receive a structured forensic review of potential scope gaps, internal inconsistencies, and documentation deficiencies.",
  url: "https://vvon.ai",
  locale: "en_US",
  email: "support@vvon.ai",
  founded: "2026",
} as const;

export type SiteConfig = typeof site;
