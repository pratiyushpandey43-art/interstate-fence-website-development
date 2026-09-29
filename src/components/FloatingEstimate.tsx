"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, ArrowRight, X } from "lucide-react";
import { business, brand } from "@/lib/site";

// Floating glass CTA widget for conversion. Hidden on very small heights,
// dismissible, and respects reduced motion via CSS.
export default function FloatingEstimate() {
  const [dismissed, setDismissed] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-hidden={!show}
    >
      <div className="glass-dark w-[min(20rem,calc(100vw-2rem))] rounded-2xl p-4 shadow-2xl">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-white">
            Free Estimate
          </p>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss estimate widget"
            className="text-white/60 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <p className="mt-1 text-xs text-white/70">
          Tell us about your project and get a clear quote.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <Link
            href={brand.primaryCta.href}
            className="btn-cedar inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm"
          >
            {brand.primaryCta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4 text-cedar" aria-hidden />
            {business.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
