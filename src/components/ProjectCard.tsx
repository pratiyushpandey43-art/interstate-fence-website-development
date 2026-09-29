import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import type { Project } from "@/lib/site";

export default function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block overflow-hidden rounded-2xl border border-hairline bg-white shadow-card transition-all hover:shadow-soft ${className || ""}`}
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="aspect-[4/3] w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
          label={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-cedar px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
            {project.category}
          </span>
          <span className="rounded-full bg-charcoal/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-sand">
            {project.material}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-charcoal">{project.title}</h3>
        <p className="mt-1 text-xs uppercase tracking-widest text-graphite/60">
          {project.location} · {project.year}
        </p>
        <p className="mt-2 text-sm text-graphite/80 line-clamp-2">
          {project.overview}
        </p>
      </div>
    </Link>
  );
}
