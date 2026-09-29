import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Hero from "@/components/Hero";
import { SectionHeading, InfoCard, FeatureRow, CommitList } from "@/components/Sections";
import ServiceCard from "@/components/ServiceCard";
import CtaBlock from "@/components/CtaBlock";
import { business, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Fencing",
  description:
    "Commercial fencing built for security, access, and durability in Geneseo, Illinois — perimeters, industrial fencing, chain link, and gates.",
};

const commercialServices = services.filter((s) =>
  ["chain-link-fencing", "aluminum-fencing", "custom-fencing", "railing"].includes(s.slug)
);

export default function CommercialPage() {
  return (
    <>
      <Hero
        size="short"
        eyebrow="For Businesses & Properties"
        title="Commercial Fencing Built for Security, Access & Durability."
        subtitle="Perimeter fencing, industrial fencing, chain link, metal fencing, and gates planned around how your site operates."
        primaryCta={{ label: "Request a Commercial Consultation", href: "/contact?project=commercial", variant: "cedar" }}
        secondaryCta={{ label: `Call ${business.phone}`, href: business.phoneHref, variant: "glass" }}
        image="/images/commercial.jpg"
      />

      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="What We Build For Business"
          title="Secure, defined, dependable."
          description="We plan layout, gates, and access during the consultation so the finished fence supports how your property works."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard index={1} title="Perimeter Fencing" body="Clear property boundaries sized for your site and daily operation." />
          <InfoCard index={2} title="Industrial Fencing" body="Durable fabric and framework for higher-use, secured environments." />
          <InfoCard index={3} title="Chain Link" body="Cost-effective, visible security for yards, lots, and facilities." />
          <InfoCard index={4} title="Metal Fencing" body="Aluminum and ornamental options with a finished, professional look." />
          <InfoCard index={5} title="Commercial Gates" body="Walk and drive gates planned for how people and vehicles move." />
          <InfoCard index={6} title="Custom Solutions" body="Mixed materials and unique layouts for specific site needs." />
        </div>
        <p className="mt-6 max-w-3xl text-sm text-graphite/70">
          Access and gate planning is handled as part of your project scope.
          For electronic or automated access systems, we&apos;ll discuss options
          and coordinate during the consultation.
        </p>
      </section>

      <section className="container-edge pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Commercial Services"
          title="Materials suited to commercial sites."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commercialServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <FeatureRow
        reverse
        image="/images/chainlink.jpg"
        imageAlt="Commercial chain link fence with gate"
        eyebrow="Security First"
        title="Boundaries that work as hard as your operation."
      >
        <p>
          Chain link and metal fencing deliver visibility and durability where
          it matters most. Gates are planned for both people and vehicles.
        </p>
        <Link
          href="/services/chain-link-fencing"
          className="btn-outline inline-flex w-fit items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold"
        >
          Chain Link Details
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </FeatureRow>

      <section className="container-edge py-16 md:py-24">
        <CommitList
          items={[
            { title: "Site Planning", body: "Layout, gates, and access mapped before installation." },
            { title: "Durable Builds", body: "Quality framework and hardware for constant use." },
            { title: "Local Knowledge", body: `We serve ${business.location} and surrounding commercial properties.` },
          ]}
        />
      </section>

      <CtaBlock
        eyebrow="Commercial Consultation"
        title="Let's secure your property."
        body={`Call ${business.phone} or request a commercial consultation and we'll plan the right fence for your site.`}
        primary={{ label: "Request a Commercial Consultation", href: "/contact?project=commercial" }}
      />
    </>
  );
}

void Phone;
