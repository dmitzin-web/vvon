// Centralized legal copy for vvon.ai. Privacy + Terms render directly
// from these arrays.
//
// NOTE: These sections are a working draft authored in-house. They have
// NOT been reviewed by counsel. Before public launch, have a Washington
// / Oregon attorney with insurance-services experience review the
// Vvon™ disclaimers — both states have specific definitions of public
// adjusting and unauthorized practice of law that AI claim-review
// products have run afoul of in the past.

import { site } from "./site";

export const legalUpdated = "May 16, 2026";

export const draftBanner =
  "Draft — these terms are a working version pending review by counsel. They are published in good faith to disclose how Vvon™ operates, but they are not a substitute for a lawyer-reviewed agreement and may be updated before public launch.";

export const privacySections: { heading: string; body: string[] }[] = [
  {
    heading: "About Vvon™ data handling",
    body: [
      `Vvon™ is an AI-assisted insurance-estimate review product operated by ${site.legalName}. The disclosures below describe how it handles your account and your uploaded claim documents.`,
    ],
  },
  {
    heading: "Information Vvon™ collects",
    body: [
      "Account information: the email address you provide to receive a magic sign-in link. We use Supabase Auth (Supabase Inc., USA) to handle authentication. We do not collect or store passwords.",
      "Documents you upload: insurance estimates, contractor estimates, policy documents, denial letters, mitigation invoices, photos, and any notes you provide. We do not require you to upload Social Security numbers, account numbers, or other identifiers that are not necessary for scope review — we recommend redacting these before upload.",
      "Claim metadata: claim type, property state, your role (homeowner, contractor, etc.), and carrier name if you provide it.",
      "Technical metadata: timestamps, file sizes, and the same anonymous web-analytics events described above for the main site.",
    ],
  },
  {
    heading: "Where your Vvon™ data is stored",
    body: [
      "Documents are stored in a private object-storage bucket hosted by Supabase Inc. in the AWS US-West-2 region (Oregon). Access is restricted by per-user folder policies enforced at the storage layer — your files are not accessible to other users of the service.",
      "Database records (your account, your claims, file metadata, and AI-generated reports) live in a Supabase-managed Postgres instance in the same region. Row-Level Security policies restrict each row to the user who created it.",
      "All data in transit uses TLS. Data at rest is encrypted by the storage provider.",
    ],
  },
  {
    heading: "How Vvon™ uses AI sub-processors",
    body: [
      "To generate your report, Vvon™ sends the text extracted from your PDFs and the image bytes of your photos to Anthropic PBC (operators of the Claude API) for analysis. Anthropic acts as a sub-processor for this purpose under its commercial-API terms. Under Anthropic's published API policies, inputs and outputs submitted via the API are not used to train Anthropic's models.",
      "We do not send your data to any other AI provider, advertising network, or analytics service.",
      "Our current sub-processors:",
      "• Supabase Inc. — authentication, database, file storage",
      "• Anthropic PBC — AI document analysis (Claude API)",
      "• Vercel Inc. — application hosting",
      "If we add or change sub-processors we will update this list and post a notice at the top of this page for at least 30 days.",
    ],
  },
  {
    heading: "Retention and deletion (Vvon™)",
    body: [
      "Vvon™ documents and reports are retained for as long as you keep your account, so you can refer back to them. You can delete an individual claim and all of its associated files and reports from the report view, or delete your entire account by emailing us at the address below.",
      `Account deletion requests: email ${site.email} with the subject "Vvon™ deletion request" from the email address tied to your account. We will delete your account, your uploaded documents, and your generated reports within 14 days of verifying the request, except where retention is required by law.`,
      "Backups: deletions propagate to encrypted backups within 30 days.",
    ],
  },
  {
    heading: "What you should not upload",
    body: [
      "Please do not upload documents you do not have authority to share — for example, another person's insurance documents without their written consent.",
      "Please do not upload information you do not want analyzed by an AI service. Vvon™ is designed for property-insurance claim documents. It is not designed for, and you should not upload, government-issued IDs, medical records, financial-account statements, or any document containing Social Security numbers — redact these before uploading.",
    ],
  },
  {
    heading: "Your rights (Vvon™)",
    body: [
      "You have the same access, correction, and deletion rights described in the main privacy policy above. For Vvon™ data specifically you can also request a machine-readable export of your account contents (claims, file metadata, and reports as JSON).",
      `Requests: email ${site.email} with the subject "Vvon™ privacy request" from the email tied to your account.`,
    ],
  },
  {
    heading: "Security incidents (Vvon™)",
    body: [
      "If we become aware of a security incident affecting Vvon™ data we will notify affected users without undue delay and in any case within the timeframes required by Washington and Oregon notification laws.",
    ],
  },
];

export const termsSections: { heading: string; body: string[] }[] = [
  {
    heading: "Vvon — informational only",
    body: [
      "Vvon™ provides informational estimate and document analysis only. It does not provide legal advice, public adjusting services, insurance representation, or any guaranteed claim outcome. Vvon™ is not a substitute for a licensed public adjuster, an attorney, a licensed estimator, or any other licensed professional.",
      "Nothing produced by Vvon™ should be interpreted as a legal opinion, an interpretation of insurance-policy coverage, a guarantee that an insurer will pay any specific amount, or a representation that the carrier acted improperly. Outcomes on insurance claims depend on the terms of your policy, the evidence in your claim file, the carrier's adjustment of that evidence, and applicable law in your state.",
      "If you need representation in your claim, work with a licensed public adjuster or attorney in your state.",
    ],
  },
  {
    heading: "AI limitations",
    body: [
      "Vvon™ uses a large-language-model AI to read your uploaded documents and produce a structured report. Like all current AI systems, it can miss issues that a human professional would catch, surface findings that on close inspection are not applicable, and produce confident-sounding statements that turn out to be wrong.",
      "Every finding in a Vvon™ report is meant to be a starting point for a conversation, not a conclusion. The report explicitly labels each finding with a confidence level (confirmed by documents, likely, possible, or needs verification) and a severity. Always verify against the underlying documents before acting.",
      "Do not rely on Vvon™ as your sole tool for evaluating a claim.",
    ],
  },
  {
    heading: "Your responsibilities",
    body: [
      "Documents: you represent that you have the legal right to upload every document and photograph you submit to Vvon™, and that doing so does not violate any contract, court order, confidentiality agreement, or applicable law.",
      "Identifiers: you agree to redact Social Security numbers, government-issued ID numbers, financial account numbers, and any sensitive identifiers from documents before upload. Vvon™ does not need this information to perform a scope review.",
      "Truthful use: you agree not to misrepresent your role, your relationship to the property, or facts about the loss in the notes you provide.",
      "No abusive use: you agree not to attempt to reverse-engineer the AI prompts, evade rate limits, scrape outputs at scale, or use the service to harass or defraud any insurer, contractor, or claimant.",
    ],
  },
  {
    heading: "Account and rate limits",
    body: [
      "Vvon™ requires a free account, created by entering an email and clicking a one-tap sign-in link. We may impose per-user rate limits on analyses to prevent abuse and to manage AI-service costs. The current limit is 10 analyses per 24-hour period per user; we may change this with reasonable notice.",
      "We may suspend or terminate an account that violates these Terms, abuses the service, or uploads content described in the privacy policy as not allowed.",
    ],
  },
  {
    heading: "No public adjusting, no UPL",
    body: [
      "Washington (RCW 48.17) and Oregon (ORS 744) regulate public adjusting and the practice of law. Vvon™ is not a public adjuster, does not negotiate with insurers on your behalf, does not collect or charge a contingent fee tied to your settlement, and does not interpret your policy or apply the law to your specific facts. Reports are generated by software and reviewed only at your direction.",
      "If you would like representation, please retain a licensed public adjuster or attorney in your state. We do not endorse or accept referral fees from any specific public adjuster or law firm.",
    ],
  },
  {
    heading: "Disclaimer of warranties (Vvon™)",
    body: [
      "THE CLAIMLENS™ SERVICE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR COMPLETENESS. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE OR THAT FINDINGS PRODUCED BY THE AI WILL BE ACCURATE OR COMPLETE.",
    ],
  },
  {
    heading: "Limitation of liability (Vvon™)",
    body: [
      `Our total aggregate liability arising out of or related to use of Vvon™ shall not exceed one hundred U.S. dollars ($100.00), or, if greater, the total amount you have paid us in the twelve (12) months preceding the claim. Neither party is liable for indirect, incidental, consequential, special or punitive damages. These limitations apply to the maximum extent permitted by law. Nothing in these Terms limits liability for gross negligence, willful misconduct, fraud, or any liability that cannot be limited under Washington or Oregon law.`,
    ],
  },
];
