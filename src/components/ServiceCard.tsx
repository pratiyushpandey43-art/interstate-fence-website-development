import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import type { Service } from "@/lib/site";

export default function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft ${className || ""}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={service.image}
          alt={`${service.name} installation`}
          className="h-full w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
          label={service.name}
        />
        <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-sand">
          {service.audience === "Both"
            ? "Residential · Commercial"
            : service.audience}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-charcoal">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite/80">
          {service.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cedar">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
