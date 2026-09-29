"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/site";

export default function ProcessTimeline() {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      if (fill.current) fill.current.style.transform = "scaleY(1)";
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Animate progress line fill as the section scrolls through view
      ScrollTrigger.create({
        trigger: root.current,
        start: "top 70%",
        end: "bottom 60%",
        onUpdate: (self) => {
          if (fill.current)
            fill.current.style.transform = `scaleY(${self.progress})`;
        },
      });
      // Reveal each step
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative">
      {/* Architectural progress line */}
      <div className="absolute left-[27px] top-2 h-[calc(100%-2rem)] w-0.5 bg-hairline md:left-1/2 md:-translate-x-1/2">
        <div
          ref={fill}
          className="h-full w-full origin-top bg-cedar"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      <ol className="space-y-10">
        {processSteps.map((step, i) => (
          <li
            key={step.num}
            data-step
            className="relative grid gap-4 md:grid-cols-2 md:items-center"
          >
            {/* Node */}
            <span className="absolute left-4 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-cedar bg-offwhite font-bold text-cedar md:left-1/2 md:-translate-x-1/2">
              {step.num}
            </span>

            <div
              className={
                i % 2 === 0
                  ? "pl-16 md:pr-16 md:text-right md:pl-0"
                  : "pl-16 md:pl-16"
              }
            >
              <h3 className="text-2xl font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/80">
                {step.body}
              </p>
            </div>
            <div
              className={
                i % 2 === 0
                  ? "hidden md:block md:pl-16"
                  : "hidden md:block md:pr-16"
              }
            >
              <div className="h-1 w-full rounded bg-hairline" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
