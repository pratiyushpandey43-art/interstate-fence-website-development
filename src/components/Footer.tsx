import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { business, footerColumns, brand } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-edge py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Brand block */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-sand/40 bg-cedar/90 font-serif text-lg font-bold">
                I
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-wide">
                  INTERSTATE
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-sand">
                  Fence &amp; Construction
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Premium residential, commercial, and industrial fencing and
              railing in {business.location}. Built with craftsmanship and
              installed for the long term.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={business.phoneHref}
                className="flex items-center gap-2 text-white/80 hover:text-sand"
              >
                <Phone className="h-4 w-4 text-cedar" aria-hidden />
                {business.phone}
              </a>
              <a
                href={business.emailHref}
                className="flex items-center gap-2 text-white/80 hover:text-sand"
              >
                <Mail className="h-4 w-4 text-cedar" aria-hidden />
                {business.email}
              </a>
              <span className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4 text-cedar" aria-hidden />
                {business.location}
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-sand">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conversion strip */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-white/60">
            Ready to get started?{" "}
            <Link
              href={brand.primaryCta.href}
              className="font-semibold text-cedar hover:underline"
            >
              Get a free estimate
            </Link>{" "}
            or call {business.phone}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-white/50">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
          {business.city}, {business.state}.
        </div>
      </div>
    </footer>
  );
}
