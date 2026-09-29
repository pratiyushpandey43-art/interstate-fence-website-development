import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { business, brand } from "@/lib/site";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  body?: string;
  primary?: { label: string; href: string };
  className?: string;
  variant?: "charcoal" | "cedar";
}

// High-impact CTA block (brutalist accent).
export default function CtaBlock({
  eyebrow = "Get Started",
  title,
  body,
  primary,
  className,
  variant = "charcoal",
}: Props) {
  return (
    <section
      className={cn(
        "container-edge",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl px-6 py-14 md:px-14 md:py-20",
          variant === "charcoal"
            ? "bg-charcoal text-white"
            : "bg-cedar text-white"
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_auto]">
          <div>
            <p
              className={cn(
                "eyebrow",
                variant === "charcoal" ? "text-cedar" : "text-white/80"
              )}
            >
              {eyebrow}
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight">
              {title}
            </h2>
            {body && (
              <p className="mt-4 max-w-xl text-white/70">{body}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href={primary?.href || brand.primaryCta.href}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold transition-all",
                variant === "charcoal"
                  ? "btn-cedar"
                  : "bg-white text-charcoal hover:bg-offwhite"
              )}
            >
              {primary?.label || brand.primaryCta.label}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-4 text-base font-bold text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
