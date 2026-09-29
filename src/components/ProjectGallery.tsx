"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects, projectFilters } from "@/lib/site";
import { cn } from "@/lib/utils";

// Filterable masonry-style project gallery. Filters actually filter by
// category OR material.
export default function ProjectGallery() {
  const [filter, setFilter] = useState("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return projects;
    return projects.filter(
      (p) => p.category === filter || p.material === filter
    );
  }, [filter]);

  return (
    <div>
      {/* Filters */}
      <div className="no-scrollbar -mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2">
        {projectFilters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={cn(
                "neumorph shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors",
                active
                  ? "bg-cedar text-white shadow-none"
                  : "bg-offwhite text-graphite hover:text-charcoal"
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Masonry-ish grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            className={cn(
              i % 3 === 1 && "lg:mt-8" // subtle asymmetric offset
            )}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-graphite/60">
          No projects in this category yet. Check back soon.
        </p>
      )}
    </div>
  );
}
