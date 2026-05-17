// Layout for design preview pages. Renders WITHOUT the production
// Header / Footer — preview pages bring their own chrome so the
// alternate design can be evaluated in isolation.
//
// Pages under /preview/* are always noindexed (see metadata below).
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
