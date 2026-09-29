import type { Metadata } from "next";
import { business } from "@/lib/site";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of use for the ${business.name} website.`,
};

export default function TermsPage() {
  return (
    <div className="container-edge pb-20">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <div className="mx-auto mt-8 max-w-3xl">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-graphite/60">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-8 space-y-6 text-graphite/85">
          <section>
            <h2 className="text-xl font-semibold text-charcoal">Acceptance</h2>
            <p>
              By using this website, you agree to these terms. If you do not
              agree, please do not use the site.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">
              Estimates & Quotes
            </h2>
            <p>
              Online estimates and calculator results are rough ranges only.
              Final pricing depends on site conditions, materials, measurements,
              gates, labor, and project requirements. A precise quote is provided
              after we review your property.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">
              Project Scope
            </h2>
            <p>
              Actual services, materials, timelines, and capabilities are
              confirmed during consultation and documented in your project
              agreement. This website does not constitute a binding offer.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">
              Intellectual Property
            </h2>
            <p>
              Content, imagery, and design on this site are owned by{" "}
              {business.name} or its licensors and may not be reused without
              permission.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">Contact</h2>
            <p>
              Questions about these terms? Email {business.email} or call{" "}
              {business.phone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
