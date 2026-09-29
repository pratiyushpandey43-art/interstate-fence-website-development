"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { navLinks, business, brand } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll state for subtle header treatment
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock background scroll + ESC + click-outside
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-charcoal/95 shadow-lg backdrop-blur"
          : "bg-charcoal/85 backdrop-blur"
      )}
    >
      <div className="container-edge flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white"
          aria-label="Interstate Fence home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-sand/40 bg-cedar/90 font-serif text-lg font-bold">
            I
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-bold tracking-wide">INTERSTATE</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-sand">
              Fence &amp; Construction
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white",
                  active && "text-white"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-sand"
          >
            <Phone className="h-4 w-4 text-cedar" aria-hidden />
            {business.phone}
          </a>
          <Link
            href={brand.primaryCta.href}
            className="btn-cedar inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm"
          >
            {brand.primaryCta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={business.phoneHref}
            aria-label={`Call ${business.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-cedar/90 text-white"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white"
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-charcoal text-white shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="font-serif text-lg font-bold">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>

          <nav
            className="no-scrollbar flex-1 overflow-y-auto px-3 py-4"
            aria-label="Mobile"
          >
            {navLinks.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-b border-white/5 px-3 py-4 text-lg font-semibold transition-colors",
                    active ? "text-cedar" : "text-white/85 hover:text-white"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-3 border-t border-white/10 p-5">
            <Link
              href={brand.primaryCta.href}
              onClick={() => setOpen(false)}
              className="btn-cedar flex w-full items-center justify-center gap-2 rounded-md px-4 py-3.5 text-base"
            >
              {brand.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={business.phoneHref}
              onClick={() => setOpen(false)}
              className="btn-outline flex w-full items-center justify-center gap-2 rounded-md border-white/40 px-4 py-3.5 text-base text-white hover:bg-white hover:text-charcoal"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
