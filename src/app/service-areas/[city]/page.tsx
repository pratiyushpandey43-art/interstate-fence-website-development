import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import { SectionHeading } from "@/components/Sections";
import ServiceCard from "@/components/ServiceCard";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumb from "@/components/Breadcrumb";
import { serviceAreas, getServiceArea, services, business } from "@/lib/site";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ city: a.city.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const area = getServiceArea(city);
  if (!area) return { title: "Service Area" };
  return {
    title: `Fence & Railing in ${area.city}, ${area.state}`,
    description: `Fencing and railing services in ${area.city}, ${area.state}. Residential, commercial, and industrial fence installation by ${business.shortName}.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = getServiceArea(city);
  if (!area) notFound();

  const detailServices = services.filter((s) => s.slug !== "commercial-industrial");

  return (
    <>
      <Hero
        size="short"
        eyebrow={`Service Area · ${area.state}`}
        title={`Fencing & Railing in ${area.city}, ${area.state}.`}
        subtitle={`${area.note} Serving ${area.city} with residential, commercial, and industrial fencing and railing.`}
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        secondaryCta={{ label: `Call ${business.phone}`, href: business.phoneHref, variant: "glass" }}
        image="/images/wood.jpg"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: `${area.city}, ${area.state}` },
        ]}
      />

      <section className="container-edge py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <SectionHeading
            eyebrow={`About ${area.city}`}
            title={`Local fencing & railing for ${area.city} properties.`}
            description={`${business.name} provides fence and railing installation throughout ${area.city} and nearby communities. From backyard privacy to secured commercial perimeters, we plan each project around the property.`}
          />
          <div className="rounded-2xl border border-hairline bg-white p-6 shadow-card">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-charcoal">
              <MapPin className="h-5 w-5 text-cedar" aria-hidden />
              Service Area
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-graphite/80">
              {area.city}, {area.state}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-graphite/80">
              {area.note}
            </p>
            <a
              href={business.phoneHref}
              className="btn-charcoal mt-4 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="container-edge pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Available Services"
          title={`What we install in ${area.city}.`}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detailServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mt-6">
          <Link
            href="/service-areas"
            className="btn-outline inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold"
          >
            <ArrowRight className="h-4 w-4 rotate-180" aria-hidden />
            All Service Areas
          </Link>
        </p>
      </section>

      <CtaBlock
        eyebrow={`${area.city} Projects`}
        title={`Ready to plan your ${area.city} fence?`}
        body="Tell us about your property and we'll provide a clear, site-specific estimate."
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />
    </>
  );
}
