import { cn } from "@/lib/utils";
import { business } from "@/lib/site";
import type { ReactNode } from "react";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

/* ---------------- Section heading ---------------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow text-cedar">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight text-charcoal">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-graphite/80">
          {description}
        </p>
      )}
    </div>
  );
}

/* ---------------- Trust strip ---------------- */
export function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-hairline bg-white">
      <div className="container-edge py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((t) => (
            <span
              key={t}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-graphite"
            >
              <span className="h-2 w-2 rounded-full bg-cedar" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Info card (flat) ---------------- */
export function InfoCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index?: number;
}) {
  return (
    <Reveal className="rounded-2xl border border-hairline bg-white p-6 shadow-card">
      {index != null && (
        <span className="font-serif text-3xl font-semibold text-sand">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <h3 className="mt-2 text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-graphite/80">{body}</p>
    </Reveal>
  );
}

/* ---------------- Feature image + text row ---------------- */
export function FeatureRow({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  reverse,
}: {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
        reverse && "lg:[&>*:first-child]:order-2"
      )}
    >
      <Reveal className="aspect-[4/3] overflow-hidden rounded-2xl border border-hairline shadow-card">
        <ImageWithFallback
          src={image}
          alt={imageAlt}
          className="h-full w-full"
          label={title}
        />
      </Reveal>
      <Reveal delay={0.1}>
        {eyebrow && <p className="eyebrow text-cedar">{eyebrow}</p>}
        <h3 className="mt-2 text-2xl font-semibold text-charcoal md:text-3xl">
          {title}
        </h3>
        <div className="mt-4 space-y-3 text-graphite/80">{children}</div>
      </Reveal>
    </div>
  );
}

/* ---------------- Commitment / why list ---------------- */
export function CommitList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <li
          key={it.title}
          className="rounded-2xl border border-hairline bg-white p-6 shadow-card"
        >
          <h3 className="text-lg font-semibold text-charcoal">{it.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-graphite/80">
            {it.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

void business;
