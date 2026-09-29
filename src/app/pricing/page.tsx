import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Estimator from "@/components/Estimator";
import { SectionHeading } from "@/components/Sections";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  title: "Pricing & Estimate Calculator",
  description:
    "Use our interactive fence estimator for a rough price range, then contact Interstate Fence in Geneseo, Illinois for a precise quote.",
};

export default function PricingPage() {
  return (
    <>
      <Hero
        size="short"
        eyebrow="Estimate Calculator"
        title="Plan Your Budget With a Rough Estimate."
        subtitle="Adjust the options below for an instant ballpark range. Final pricing is confirmed after we review your site."
        primaryCta={{ label: "Get a Precise Estimate", href: "/contact", variant: "cedar" }}
        image="/images/vinyl.jpg"
      />

      <section className="container-edge py-14 md:py-20">
        <SectionHeading
          eyebrow="Interactive Estimator"
          title="Rough estimate range."
          description="The calculator uses configurable assumptions for materials, style, height, gates, and site conditions."
        />
        <div className="mt-10">
          <Estimator />
        </div>
      </section>

      <CtaBlock
        eyebrow="Next Step"
        title="Turn the range into a real quote."
        body="Every property is different. Contact us with a few details and we'll provide a precise estimate."
        primary={{ label: "Get a Precise Estimate", href: "/contact" }}
      />
    </>
  );
}
