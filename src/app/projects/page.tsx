import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore completed fencing and railing projects in Geneseo, Illinois — residential, commercial, industrial, and custom work.",
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        size="short"
        eyebrow="Our Work"
        title="Projects Built With Purpose."
        subtitle="A look at recent fencing and railing installations across Geneseo and surrounding communities. Filter by type or material."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        image="/images/custom.jpg"
      />
      <section className="container-edge py-14 md:py-20">
        <ProjectGallery />
      </section>
    </>
  );
}
