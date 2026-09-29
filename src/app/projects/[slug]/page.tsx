import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, CalendarDays } from "lucide-react";
import Hero from "@/components/Hero";
import ImageWithFallback from "@/components/ImageWithFallback";
import CtaBlock from "@/components/CtaBlock";
import Breadcrumb from "@/components/Breadcrumb";
import { projects, getProject } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const gallery = project.gallery?.length ? project.gallery : [project.image];

  return (
    <>
      <Hero
        size="short"
        eyebrow={`${project.category} · ${project.material}`}
        title={project.title}
        subtitle={project.overview}
        image={project.image}
        primaryCta={{ label: "Start a Similar Project", href: "/contact", variant: "cedar" }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <section className="container-edge py-12 md:py-16">
        <div className="grid gap-8 rounded-2xl border border-hairline bg-white p-6 shadow-card sm:grid-cols-3 md:p-8">
          <div>
            <p className="eyebrow text-cedar">Category</p>
            <p className="mt-2 text-lg font-semibold text-charcoal">
              {project.category}
            </p>
          </div>
          <div>
            <p className="eyebrow text-cedar">Material</p>
            <p className="mt-2 text-lg font-semibold text-charcoal">
              {project.material}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="eyebrow text-cedar">Location</p>
            <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-charcoal">
              <MapPin className="h-4 w-4 text-cedar" aria-hidden />
              {project.location}
            </p>
            <p className="flex items-center gap-2 text-sm text-graphite/70">
              <CalendarDays className="h-4 w-4 text-cedar" aria-hidden />
              {project.year}
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge grid gap-10 pb-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-charcoal">The Challenge</h2>
          <p className="mt-3 leading-relaxed text-graphite/80">
            {project.challenge}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-charcoal">Our Solution</h2>
          <p className="mt-3 leading-relaxed text-graphite/80">
            {project.solution}
          </p>
        </div>
      </section>

      <section className="container-edge py-8">
        <h2 className="mb-6 text-2xl font-semibold text-charcoal">Gallery</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <ImageWithFallback
              key={i}
              src={g}
              alt={`${project.title} — view ${i + 1}`}
              className="aspect-[4/3] rounded-2xl border border-hairline shadow-card"
              label={project.title}
            />
          ))}
        </div>
      </section>

      <section className="container-edge py-10">
        <Link
          href="/projects"
          className="btn-outline inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold"
        >
          <ArrowRight className="h-4 w-4 rotate-180" aria-hidden />
          Back to Projects
        </Link>
      </section>

      <CtaBlock
        eyebrow="Your Project Next"
        title="Like what you see? Let's build yours."
        body="Tell us about your property and we'll plan a fence or railing that fits."
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />
    </>
  );
}
