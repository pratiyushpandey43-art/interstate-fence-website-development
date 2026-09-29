"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  label?: string;
}

// Renders an <img> with a graceful gradient fallback if the source fails,
// satisfying the "image failure" error-state requirement.
export default function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  eager,
  label,
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-graphite to-charcoal",
        className
      )}
    >
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <span className="text-center text-xs font-medium uppercase tracking-widest text-sand/70">
            {label || "Interstate Fence"}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
