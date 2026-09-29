import Link from "next/link";
import { ArrowRight, ShieldCheck, Home, Building2, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import { TrustStrip, SectionHeading, InfoCard, FeatureRow, CommitList } from "@/components/Sections";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CtaBlock from "@/components/CtaBlock";
import Reveal from "@/components/Reveal";
import {
  business,
  services,
  projects,
  beforeAfter,
  brand,
} from "@/lib/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Geneseo, Illinois · Fence & Railing"
        title={
          <>
            Fencing Built With Purpose.
            <br />
            Designed for Property.
            <br />
            Installed for the Long Term.
          </>
        }
        subtitle="Premium residential, commercial, and industrial fencing solutions in Geneseo, Illinois and surrounding communities."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        secondaryCta={{ label: "Explore Our Work", href: "/projects", variant: "glass" }}
        image="/images/hero.jpg"
        trust={business.categories}
      />

      <TrustStrip items={business.categories} />

      {/* Editorial intro */}
      <section className="container-edge py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-cedar">Engineering · Craftsmanship</p>
            <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-tight text-charcoal">
              A fence should do more than mark a line.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-graphite/80">
              At {business.shortName}, we build fencing and railing that balances
              security, curb appeal, and lasting value. From a private backyard
              retreat to a secured commercial perimeter, every project starts
              with your property and ends with a clean, precise installation.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-graphite/80">
              We work across residential, commercial, and industrial needs —
              including custom designs built around your ideas.
            </p>
            <Link
              href="/our-process"
              className="btn-outline mt-6 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold"
            >
              See Our Process
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Two paths */}
      <section className="container-edge pb-10">
        <SectionHeading
          eyebrow="Choose Your Path"
          title="Built for homeowners and businesses alike."
          description="Two experiences, one standard of craftsmanship."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Link
              href="/residential"
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl border border-hairline p-8 shadow-card"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/wood.jpg"
                  alt="Residential fencing"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-charcoal/30" />
              </div>
              <div className="relative">
                <Home className="h-8 w-8 text-cedar" aria-hidden />
                <h3 className="mt-3 font-serif text-3xl font-semibold text-white">
                  Residential
                </h3>
                <p className="mt-2 text-white/75">
                  Privacy, curb appeal, pools, pets, and custom gates for your home.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sand">
                  Explore Residential
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/commercial"
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl border border-hairline p-8 shadow-card"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/commercial.jpg"
                  alt="Commercial fencing"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-charcoal/30" />
              </div>
              <div className="relative">
                <Building2 className="h-8 w-8 text-cedar" aria-hidden />
                <h3 className="mt-3 font-serif text-3xl font-semibold text-white">
                  Commercial
                </h3>
                <p className="mt-2 text-white/75">
                  Perimeters, security, gates, and industrial solutions.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sand">
                  Explore Commercial
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="What We Build"
          title="Fencing & railing, by material."
          description="Explore our core services. Each one is built around your property and goals."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((s) => s.slug !== "commercial-industrial")
            .map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="container-edge py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Real Results"
              title="See the difference a proper install makes."
              description="Drag the handle to compare a refreshed property boundary. Real work, real craftsmanship."
            />
            <Link
              href="/projects"
              className="btn-charcoal mt-6 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <BeforeAfterSlider
            before={beforeAfter.before}
            after={beforeAfter.after}
            caption={beforeAfter.caption}
          />
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="Featured Work"
          title="Recent projects in Geneseo & nearby."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-edge">
          <SectionHeading
            eyebrow="Why Homeowners & Businesses Choose Us"
            title="Straightforward, precise, reliable."
          />
          <div className="mt-10">
            <CommitList
              items={[
                {
                  title: "Local & Personal",
                  body: `Based in ${business.location}, we treat every property like it's our own neighborhood.`,
                },
                {
                  title: "Material Quality",
                  body: "We select materials suited to your site and the Midwest climate.",
                },
                {
                  title: "Installation Precision",
                  body: "Careful measuring, setting, and alignment keep fences straight and lasting.",
                },
                {
                  title: "Residential & Commercial",
                  body: "One team handles backyard privacy and secured commercial perimeters.",
                },
                {
                  title: "Clear Communication",
                  body: "You know the plan, the scope, and what to expect at each step.",
                },
                {
                  title: "Custom Capability",
                  body: "Unique designs, dimensions, and gates built around your ideas.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="Get Started"
        title="Ready to plan your fence or railing?"
        body={`Call ${business.phone} or request a free estimate. We'll help you choose the right solution for your property.`}
        primary={{ label: "Get a Free Estimate", href: brand.primaryCta.href }}
      />
    </>
  );
}

void ShieldCheck;
void Sparkles;
