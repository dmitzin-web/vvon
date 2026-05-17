import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-3xl px-6 py-32 text-center lg:px-10">
        <p className="eyebrow text-charcoal/55">404</p>
        <h1 className="mt-6 text-5xl font-light leading-tight tracking-tight sm:text-6xl">
          Page not found.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 border border-charcoal bg-charcoal px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-transparent hover:text-charcoal"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
