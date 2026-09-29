import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import CtaBlock from "@/components/CtaBlock";
import { faqs, business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about fencing and railing — types, residential and commercial work, custom designs, railing, removal, estimates, cost, and service areas.",
};

export default function FaqPage() {
  const structured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Hero
        size="short"
        eyebrow="FAQ"
        title="Questions, Answered Honestly."
        subtitle="The things homeowners and businesses ask us most about fencing and railing."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        image="/images/railing.jpg"
      />

      <section className="container-edge py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-sm text-graphite/70">
          Don&apos;t see your question? Call {business.phone} or send a note and
          we&apos;ll be glad to help.
        </p>
      </section>

      <CtaBlock
        eyebrow="Still Curious?"
        title="Let's talk through your project."
        body="Every property is different — we're happy to answer specific questions."
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
      />
    </>
  );
}
