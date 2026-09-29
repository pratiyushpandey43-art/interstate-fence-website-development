import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { SectionHeading } from "@/components/Sections";
import CtaBlock from "@/components/CtaBlock";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fencing & Railing Services",
  description:
    "Wood, vinyl, aluminum, chain link, railing, and custom fencing — residential, commercial, and industrial services in Geneseo, Illinois.",
};

const detailServices = services.filter((s) => s.slug !== "commercial-industrial");

export default function ServicesPage() {
  return (
    <>
      <Hero
        size="short"
        eyebrow="Our Services"
        title="Fencing & Railing, Built Around Your Property."
        subtitle="Explore our materials and capabilities. Every service is planned, measured, and installed with care."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        secondaryCta={{ label: "View Projects", href: "/projects", variant: "glass" }}
        image="/images/custom.jpg"
      />

      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="Modular Service Grid"
          title="Pick a material. Explore the details."
          description="Each card opens a dedicated page with benefits, options, and an easy path to an estimate."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}

          {/* Commercial / Industrial card -> /commercial */}
          <Link
            href="/commercial"
            className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-charcoal text-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/commercial.jpg"
                alt="Commercial and industrial fencing"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-cedar px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                Commercial · Industrial
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl font-semibold">Commercial / Industrial Fencing</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                Perimeters, security fencing, gates, and custom solutions for
                businesses and properties that need durability.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cedar">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <CtaBlock
        eyebrow="Not Sure Which?"
        title="Tell us your goals and we'll recommend the right build."
        body="From privacy to perimeter security, we'll help you choose materials and a design that fits."
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />
    </>
  );
}

void Building2;
