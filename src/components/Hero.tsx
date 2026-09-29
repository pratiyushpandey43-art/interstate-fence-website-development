"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight, Play, Phone } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { business, brand } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface HeroCta {
  label: string;
  href: string;
  variant?: "cedar" | "outline" | "glass";
}

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  image: string;
  videoSrc?: string; // optional MP4; poster image is always used as fallback
  align?: "left" | "center";
  size?: "tall" | "short";
  trust?: string[];
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  videoSrc,
  align = "left",
  size = "tall",
  trust,
}: Props) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const ctaClass = (v?: string) =>
    cn(
      "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-bold transition-all",
      v === "cedar" && "btn-cedar",
      v === "outline" && "btn-outline",
      v === "glass" &&
        "glass-dark font-bold text-white hover:bg-white/15"
    );

  return (
    <section
      ref={root}
      className={cn(
        "relative flex items-end overflow-hidden bg-charcoal",
        size === "tall" ? "min-h-[88vh]" : "min-h-[60vh]"
      )}
    >
      {/* Media layer */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={image}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <ImageWithFallback
            src={image}
            alt="Finished fence installation in Geneseo, Illinois"
            eager
            className="h-full w-full"
            imgClassName="scale-105"
          />
        )}
        {/* Architectural dark overlay + thin grid lines */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "container-edge relative z-10 w-full pb-16 pt-28 md:pb-24 md:pt-32",
          align === "center" && "text-center"
        )}
      >
        <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          {eyebrow && (
            <p
              data-hero-anim
              className="eyebrow text-cedar"
            >
              {eyebrow}
            </p>
          )}
          <h1
            data-hero-anim
            className="mt-4 text-white text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.02]"
          >
            {title}
          </h1>
          {subtitle && (
            <p
              data-hero-anim
              className="mt-5 max-w-xl text-base text-white/80 md:text-lg"
            >
              {subtitle}
            </p>
          )}

          <div
            data-hero-anim
            className={cn(
              "mt-8 flex flex-wrap items-center gap-3",
              align === "center" && "justify-center"
            )}
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={ctaClass(primaryCta.variant || "cedar")}
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={ctaClass(secondaryCta.variant || "outline")}
              >
                {secondaryCta.label}
              </Link>
            )}
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-md px-1 py-2 text-sm font-semibold text-white hover:text-sand"
            >
              <Phone className="h-4 w-4 text-cedar" aria-hidden />
              Call {business.phone}
            </a>
          </div>

          {trust && trust.length > 0 && (
            <div
              data-hero-anim
              className={cn(
                "mt-10 flex flex-wrap gap-x-6 gap-y-2",
                align === "center" && "justify-center"
              )}
            >
              {trust.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sand/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cedar" />
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Glass CTA panel (bottom-right) */}
      {primaryCta && (
        <div className="absolute bottom-6 right-4 z-10 hidden md:block">
          <div className="glass-dark max-w-xs rounded-2xl p-4">
            <p className="text-sm font-semibold text-white">
              {primaryCta.label}
            </p>
            <p className="mt-1 text-xs text-white/70">
              Serving {business.location} and nearby communities.
            </p>
            <a
              href={business.phoneHref}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cedar hover:text-sand"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

void Play;
