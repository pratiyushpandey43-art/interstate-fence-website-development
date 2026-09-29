import type { Metadata } from "next";
import { business } from "@/lib/site";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${business.name}. How we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  return (
    <div className="container-edge pb-20">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <div className="mx-auto mt-8 max-w-3xl">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-charcoal">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-graphite/60">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-8 space-y-6 text-graphite/85">
          <section>
            <h2 className="text-xl font-semibold text-charcoal">Overview</h2>
            <p>
              {business.name} respects your privacy. This policy explains what
              information we collect when you use our website and how we use it.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">
              Information We Collect
            </h2>
            <p>
              When you submit our contact form, we collect the details you
              provide — such as your name, phone, email, property address, and
              project information. We may also collect optional photos you upload
              and basic technical data (such as IP address) for security.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">
              How We Use Information
            </h2>
            <p>
              We use your information to respond to your request, provide
              estimates, and communicate about your project. We do not sell your
              personal information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">Your Choices</h2>
            <p>
              You may request access to, correction of, or deletion of your
              information by contacting us at {business.email}.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-charcoal">Contact</h2>
            <p>
              Questions about this policy? Reach us at {business.email} or{" "}
              {business.phone}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
