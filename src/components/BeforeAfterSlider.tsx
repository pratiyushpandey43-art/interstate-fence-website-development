"use client";

import { useCallback, useRef, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
  className,
}: Props) {
  const [pos, setPos] = useState(50); // percentage revealed of "before"
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
  };

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-2xl border border-hairline bg-charcoal"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* After (full base layer) */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={after}
            alt="After fence installation"
            className="h-full w-full"
            label="After"
          />
        </div>
        {/* Before (clipped to reveal position) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <ImageWithFallback
            src={before}
            alt="Before fence condition"
            className="h-full w-full"
            label="Before"
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sand">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-cedar px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          {afterLabel}
        </span>

        {/* Handle */}
        <div
          className="pointer-events-none absolute top-0 z-10 h-full w-0.5 bg-white/90"
          style={{ left: `${pos}%` }}
        >
          <button
            type="button"
            role="slider"
            aria-label="Compare before and after images"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            onKeyDown={onKeyDown}
            tabIndex={0}
            className="pointer-events-auto absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-charcoal/90 text-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cedar"
          >
            <span className="text-lg leading-none" aria-hidden>
              ⟷
            </span>
          </button>
        </div>
      </div>
      {caption && (
        <p className="mt-3 text-center text-sm text-graphite/70">{caption}</p>
      )}
    </div>
  );
}
