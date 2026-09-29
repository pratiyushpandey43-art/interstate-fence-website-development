import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import { SectionHeading, FeatureRow, CommitList } from "@/components/Sections";
import CtaBlock from "@/components/CtaBlock";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${business.name} — a locally connected fencing and railing company in ${business.location} focused on craftsmanship and material quality.`,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        size="short"
        eyebrow="Our Story"
        title="Built on Craftsmanship. Focused on Your Property."
        subtitle={`A locally connected fence and railing company serving ${business.location} and nearby communities.`}
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        secondaryCta={{ label: "Our Process", href: "/our-process", variant: "glass" }}
        image="/images/hero.jpg"
      />

      <section className="container-edge py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Who We Are"
            title="A straightforward team that cares about the details."
            description="We combine practical planning with careful installation so your fence or railing looks right and lasts."
          />
          <div className="space-y-4 text-graphite/80">
            <p>
              {business.name} is a fence and railing company based in{" "}
              {business.location}. We work with homeowners, businesses, and
              property managers across the area on residential, commercial, and
              industrial projects.
            </p>
            <p>
              Our approach is simple: understand the property, recommend the
              right material and design, and install it with care. We believe
              good fencing is equal parts engineering, craftsmanship, and
              long-term value.
            </p>
            <p>
              From a backyard privacy fence to a secured commercial perimeter,
              we plan each project around how the space is actually used.
            </p>
          </div>
        </div>
      </section>

      <FeatureRow
        image="/images/custom.jpg"
        imageAlt="Craftsmanship detail on a custom fence"
        eyebrow="Craftsmanship"
        title="Material quality and attention to detail."
      >
        <p>
          We select materials suited to your site and the local climate, and we
          pay attention to the details that keep an installation straight and
          lasting — post setting, spacing, alignment, and hardware.
        </p>
      </FeatureRow>

      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="What We Value"
          title="Principles that show up in every project."
        />
        <div className="mt-10">
          <CommitList
            items={[
              { title: "Local Connection", body: `We're part of the ${business.location} community and treat local properties with care.` },
              { title: "Professional Service", body: "Clear communication from first call to final walkthrough." },
              { title: "Craftsmanship", body: "Careful measuring, setting, and finishing on every build." },
              { title: "Material Quality", body: "Materials chosen for your property and the Midwest climate." },
              { title: "Attention to Detail", body: "Small things — alignment, gates, caps — done right." },
              { title: "Residential & Commercial", body: "One standard of quality across every type of project." },
            ]}
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-edge">
          <SectionHeading eyebrow="Leadership" title={`Meet ${business.primaryContact}.`} />
          <div className="mt-10 grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
            <div className="overflow-hidden rounded-2xl border border-hairline shadow-card">
              <img
                src="/images/hero.jpg"
                alt={`${business.primaryContact}, ${business.name}`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-charcoal">
                {business.primaryContact}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-widest text-cedar">
                Primary Contact
              </p>
              <p className="mt-4 leading-relaxed text-graphite/80">
                {business.primaryContact} leads customer relationships at{" "}
                {business.shortName}, working directly with homeowners and
                businesses to plan fencing and railing projects that fit their
                property and goals.
              </p>
              <p className="mt-4 leading-relaxed text-graphite/80">
                Reach out by phone or email and {business.primaryContact} will
                help you get started.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={business.phoneHref}
                  className="btn-charcoal inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {business.phone}
                </a>
                <a
                  href={business.emailHref}
                  className="btn-outline inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold"
                >
                  {business.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="Work With Us"
        title="Let's talk about your property."
        body="Whether it's a home fence or a commercial perimeter, we're ready to help you plan it."
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />
    </>
  );
}

void ArrowRight;
