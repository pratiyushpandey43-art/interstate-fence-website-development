import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Hero from "@/components/Hero";
import { SectionHeading } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumb from "@/components/Breadcrumb";
import { services, projects, getService } from "@/lib/site";

export function generateStaticParams() {
  return services
    .filter((s) => s.slug !== "commercial-industrial")
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projects
    .filter(
      (p) =>
        p.material.toLowerCase() === service.shortName.toLowerCase() ||
        service.categories.includes(p.material)
    )
    .slice(0, 3);

  return (
    <>
      <Hero
        size="short"
        eyebrow={`${service.audience === "Both" ? "Residential · Commercial" : service.audience} Fencing`}
        title={service.tagline}
        subtitle={service.summary}
        primaryCta={{ label: service.ctaLabel, href: service.ctaHref, variant: "cedar" }}
        secondaryCta={{ label: "All Services", href: "/services", variant: "glass" }}
        image={service.image}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* Benefits */}
      <section className="container-edge py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Why This Material"
            title={`${service.name} that fits your property.`}
          />
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-hairline bg-white p-4 shadow-card"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cedar" aria-hidden />
                  <span className="text-sm font-medium text-charcoal">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-edge">
          <SectionHeading eyebrow="Details" title="What to know." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.sections.map((sec, i) => (
              <Reveal key={sec.title} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-2xl border border-hairline p-6 shadow-card">
                  <span className="font-serif text-2xl font-semibold text-sand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-charcoal">
                    {sec.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite/80">
                    {sec.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="container-edge py-14 md:py-20">
          <SectionHeading
            eyebrow="Related Work"
            title={`${service.name} projects.`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      <CtaBlock
        eyebrow="Start Your Project"
        title={service.ctaLabel}
        body="Tell us about your property and goals. We'll plan the right design and material for you."
        primary={{ label: service.ctaLabel, href: service.ctaHref }}
      />
    </>
  );
}
