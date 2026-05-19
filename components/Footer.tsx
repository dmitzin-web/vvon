import Link from "next/link";
import { site } from "@/lib/site";

// Footer — Forensic Indigo. Deep ink background, 4-column nav, hairline
// divider, social icons on the right. Mirrors the marketing-site mockup.

const productLinks = [
  { href: "/", label: "Overview" },
  { href: "/upload", label: "Analyze a claim" },
  { href: "/report", label: "Sample report" },
  { href: "/pricing", label: "Pricing" },
];

const solutionsLinks = [
  { href: "/solutions", label: "Contractors" },
  { href: "/solutions", label: "Public Adjusters" },
  { href: "/solutions", label: "Estimators" },
];

const resourcesLinks = [
  { href: "/resources", label: "Blog" },
  { href: "/resources", label: "Guides" },
  { href: "/resources", label: "Webinars" },
  { href: "/resources", label: "Help center" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/about", label: "Careers" },
  { href: `mailto:${site.email}`, label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-bg-dark text-fg-on-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              aria-label="Vvon home"
              className="inline-flex items-baseline gap-0.5"
            >
              <span className="text-2xl font-semibold tracking-[-0.04em] text-fg-on-dark">
                VVON
              </span>
              <sup className="text-[0.55em] font-medium text-fg-on-dark-muted">
                ™
              </sup>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-fg-on-dark-muted">
              AI-powered forensic review for restoration professionals.
              Find what the carrier missed.
            </p>
          </div>

          <FooterCol title="Product" links={productLinks} />
          <FooterCol title="Solutions" links={solutionsLinks} />
          <FooterCol title="Resources" links={resourcesLinks} />
          <FooterCol title="Company" links={companyLinks} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border-on-dark pt-8 text-xs text-fg-on-dark-subtle md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName} · All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="eyebrow">
              Informational analysis · Not legal advice
            </p>
            <div
              className="flex items-center gap-3 border-l border-border-on-dark pl-5"
              aria-label="Social links"
            >
              <SocialLink
                href="https://www.linkedin.com/company/vvon-ai"
                label="LinkedIn"
              >
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M3.5 2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM1.25 5h2.5v9.5h-2.5V5zM6 5h2.4v1.3h.03c.34-.6 1.15-1.3 2.37-1.3 2.53 0 3 1.6 3 3.7v5.3h-2.5v-4.7c0-1.12-.02-2.55-1.6-2.55-1.6 0-1.85 1.2-1.85 2.45v4.8H6V5z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://x.com/vvon_ai" label="X (Twitter)">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                >
                  <path d="M12.18 1.5h2.31l-5.05 5.77 5.94 7.85h-4.65L7.1 9.96 2.85 15.12H.54l5.4-6.16L.25 1.5h4.78l3.3 4.36L12.18 1.5zm-.81 12.18h1.28L4.7 2.85H3.32l8.05 10.83z" />
                </svg>
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <p className="eyebrow text-fg-on-dark-subtle">{title}</p>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={`${l.href}-${l.label}`}>
            {l.href.startsWith("mailto:") ? (
              <a
                href={l.href}
                className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
              >
                {l.label}
              </a>
            ) : (
              <Link
                href={l.href}
                className="text-fg-on-dark-muted transition hover:text-fg-on-dark"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center border border-border-on-dark text-fg-on-dark-muted transition hover:border-border-on-dark-strong hover:text-fg-on-dark"
    >
      {children}
    </a>
  );
}
