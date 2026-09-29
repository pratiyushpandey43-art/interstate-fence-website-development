"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}

// Scroll-triggered fade-up using GSAP. Respects reduced motion via CSS
// (.reveal-init neutralized) and a JS guard.
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.remove("reveal-init");
      return;
    }
    // Safety net: never leave content permanently hidden if GSAP fails.
    const fallback = window.setTimeout(
      () => el.classList.remove("reveal-init"),
      1500
    );
    let ctx: ReturnType<typeof gsap.context> | undefined;
    try {
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay,
            ease: "power2.out",
            onStart: () => el.classList.remove("reveal-init"),
          }
        );
      });
    } catch {
      el.classList.remove("reveal-init");
    }
    return () => {
      window.clearTimeout(fallback);
      ctx?.revert();
    };
  }, [delay, y]);

  return (
    <Tag ref={ref} className={cn("reveal-init", className)}>
      {children}
    </Tag>
  );
}
