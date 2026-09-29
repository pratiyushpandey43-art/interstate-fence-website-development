import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import {
  SectionHeading,
  InfoCard,
  FeatureRow,
  CommitList,
} from "@/components/Sections";
import ServiceCard from "@/components/ServiceCard";
import CtaBlock from "@/components/CtaBlock";
import { business, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Fencing",
  description:
    "Residential fencing designed around your property — privacy, security, curb appeal, pools, pets, and custom gates in Geneseo, Illinois.",
};

const residentialServices = services.filter((s) =>
  ["wood-fencing", "vinyl-fencing", "aluminum-fencing", "chain-link-fencing", "railing", "custom-fencing"].includes(
    s.slug
  )
);

export default function ResidentialPage() {
  return (
    <>
      <Hero
        size="short"
        eyebrow="For Homeowners"
        title="Residential Fencing Designed Around Your Property."
        subtitle="Privacy, security, and curb appeal — built for the way you actually use your yard."
        primaryCta={{ label: "Get a Residential Estimate", href: "/contact?project=residential", variant: "cedar" }}
        secondaryCta={{ label: "View Our Work", href: "/projects", variant: "glass" }}
        image="/images/wood.jpg"
      />

      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="What Matters At Home"
          title="Fencing that fits your life."
          description="Whether you want a private retreat, a safe pool area, or a cleaner property line, we plan around your goals."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard index={1} title="Privacy" body="Solid layouts that turn an open yard into a quiet, comfortable space." />
          <InfoCard index={2} title="Security" body="Defined boundaries and gated access that keep what matters protected." />
          <InfoCard index={3} title="Curb Appeal" body="Finished, intentional design that complements your home and landscape." />
          <InfoCard index={4} title="Pool & Property Boundaries" body="Screening and perimeter options suited to active, outdoor living." />
          <InfoCard index={5} title="Pet-Friendly Solutions" body="Safe, secure yards sized for dogs and everyday family use." />
          <InfoCard index={6} title="Custom Gates" body="Feature gates and everyday gates built to match your fence." />
        </div>
      </section>

      <section className="container-edge pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Materials For Your Home"
          title="Choose the right material."
          description="Each option has its own look, upkeep, and feel. Explore them and tell us what fits."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {residentialServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <FeatureRow
        image="/images/custom.jpg"
        imageAlt="Custom residential fence with feature gate"
        eyebrow="Designed For You"
        title="Custom gates and details that make it yours."
      >
        <p>
          From board-on-board privacy to ornamental accents, we tailor heights,
          spacing, and finishes to your home.
        </p>
        <Link
          href="/services/custom-fencing"
          className="btn-outline inline-flex w-fit items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold"
        >
          Explore Custom Fencing
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </FeatureRow>

      <section className="container-edge py-16 md:py-24">
        <CommitList
          items={[
            { title: "Local Team", body: `We're based in ${business.location} and serve nearby communities.` },
            { title: "Clear Quotes", body: "Know your scope and pricing before any work begins." },
            { title: "Clean Installs", body: "We respect your property and clean up when the job is done." },
          ]}
        />
      </section>

      <CtaBlock
        eyebrow="Residential Estimate"
        title="Let's plan your home fence."
        body="Tell us about your yard and goals. We'll help you choose the right material and design."
        primary={{ label: "Get a Residential Estimate", href: "/contact?project=residential" }}
      />
    </>
  );
}
