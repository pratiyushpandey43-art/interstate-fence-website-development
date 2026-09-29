import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessTimeline from "@/components/ProcessTimeline";
import { SectionHeading } from "@/components/Sections";
import CtaBlock from "@/components/CtaBlock";
import { processSteps, business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From consultation to final walkthrough — see how Interstate Fence plans, builds, and finishes fencing and railing projects in Geneseo, Illinois.",
};

export default function OurProcessPage() {
  return (
    <>
      <Hero
        size="short"
        eyebrow="How We Work"
        title="A Clear Path From Idea to Installed Fence."
        subtitle="Five steps that keep your project simple, predictable, and built right."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        image="/images/wood.jpg"
      />

      <section className="container-edge py-16 md:py-24">
        <SectionHeading
          eyebrow="The Process"
          title="Five steps, no guesswork."
          description="Every project moves through the same careful sequence so you always know what's next."
        />
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-edge">
          <SectionHeading
            eyebrow="What To Expect"
            title="Practical details at each stage."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-hairline p-6 shadow-card"
              >
                <span className="font-serif text-4xl font-semibold text-sand">
                  {s.num}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/80">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-graphite/70">
            Timelines vary by project scope and site conditions. We&apos;ll give
            you a realistic plan during the consultation and keep you updated as
            the work progresses.
          </p>
        </div>
      </section>

      <CtaBlock
        eyebrow="Ready When You Are"
        title="Start with a simple conversation."
        body={`Call ${business.phone} or request an estimate and we'll walk you through the process for your property.`}
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />
    </>
  );
}
