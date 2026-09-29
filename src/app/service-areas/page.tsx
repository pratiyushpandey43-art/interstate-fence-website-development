import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import { SectionHeading } from "@/components/Sections";
import CtaBlock from "@/components/CtaBlock";
import { serviceAreas, business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `Fencing and railing services across ${business.location} and surrounding communities — residential, commercial, and industrial.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        size="short"
        eyebrow="Where We Work"
        title={`Fencing & Railing in ${business.location} and Nearby.`}
        subtitle="We serve Geneseo and surrounding communities with residential, commercial, and industrial fencing and railing."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        image="/images/chainlink.jpg"
      />

      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="Communities Served"
          title="Local areas we regularly serve."
          description="Don't see your town? Contact us — we may still be able to help."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a) => (
            <Link
              key={a.city}
              href={`/service-areas/${a.city.toLowerCase()}`}
              className="group rounded-2xl border border-hairline bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cedar" aria-hidden />
                <h3 className="text-xl font-semibold text-charcoal">
                  {a.city}, {a.state}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-graphite/80">
                {a.note}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cedar">
                View Area
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBlock
        eyebrow="Your Area"
        title="Not sure if we cover your location?"
        body={`Call ${business.phone} or send a quick note — we'll confirm and get you an estimate.`}
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />
    </>
  );
}
