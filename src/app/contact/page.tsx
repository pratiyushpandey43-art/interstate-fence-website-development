import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Request a free fencing or railing estimate in ${business.location}. Call ${business.phone} or send your project details.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; project?: string }>;
}) {
  const sp = await searchParams;
  const initialService = sp.service || "";
  const initialProject = sp.project || "";

  return (
    <>
      <Hero
        size="short"
        eyebrow="Get In Touch"
        title="Request Your Free Estimate."
        subtitle="Tell us about your property and goals. We'll follow up with clear next steps and a quote."
        image="/images/custom.jpg"
      />

      <section className="container-edge py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-semibold text-charcoal">
              Let&apos;s talk about your project.
            </h2>
            <p className="mt-3 leading-relaxed text-graphite/80">
              Prefer to call? We&apos;re happy to walk through options over the
              phone. Otherwise, send the form and we&apos;ll be in touch.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={business.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-hairline bg-white p-5 shadow-card transition-colors hover:border-cedar"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cedar/10 text-cedar">
                  <Phone className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-graphite/60">
                    Call
                  </span>
                  <span className="text-lg font-bold text-charcoal">
                    {business.phone}
                  </span>
                </span>
              </a>
              <a
                href={business.emailHref}
                className="flex items-center gap-4 rounded-2xl border border-hairline bg-white p-5 shadow-card transition-colors hover:border-cedar"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cedar/10 text-cedar">
                  <Mail className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-graphite/60">
                    Email
                  </span>
                  <span className="text-lg font-bold text-charcoal">
                    {business.email}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-hairline bg-white p-5 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cedar/10 text-cedar">
                  <MapPin className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-graphite/60">
                    Location
                  </span>
                  <span className="text-lg font-bold text-charcoal">
                    {business.location}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-hairline bg-white p-5 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cedar/10 text-cedar">
                  <Clock className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-graphite/60">
                    Hours
                  </span>
                  <span className="text-lg font-bold text-charcoal">
                    {business.hours}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <ContactForm
            initialService={initialService}
            initialProject={initialProject}
          />
        </div>
      </section>
    </>
  );
}
