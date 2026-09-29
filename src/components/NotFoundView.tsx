import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFoundView() {
  return (
    <section className="container-edge flex min-h-[80vh] flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow text-cedar">Error 404</p>
      <h1 className="mt-4 text-[clamp(2.2rem,7vw,5rem)] font-semibold leading-[1.02] text-charcoal">
        THIS FENCE DOESN&apos;T
        <br />
        LEAD ANYWHERE.
      </h1>
      <p className="mt-5 max-w-md text-graphite/80">
        The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back
        on a clear path.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="btn-charcoal inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold"
        >
          <Home className="h-4 w-4" aria-hidden />
          Go Home
        </Link>
        <Link
          href="/services"
          className="btn-outline inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold"
        >
          View Services
        </Link>
        <Link
          href="/contact"
          className="btn-cedar inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold"
        >
          Get a Free Estimate
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
