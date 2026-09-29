"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";
import {
  estimatorConfig,
  estimatorMaterials,
  estimatorStyles,
  estimatorHeights,
  estimatorTerrain,
  estimatorGates,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function Estimator() {
  const [projectType, setProjectType] = useState<"residential" | "commercial">(
    "residential"
  );
  const [material, setMaterial] = useState("wood");
  const [style, setStyle] = useState("privacy");
  const [feet, setFeet] = useState(150);
  const [height, setHeight] = useState("6");
  const [gate, setGate] = useState("walk");
  const [removal, setRemoval] = useState(false);
  const [terrain, setTerrain] = useState("flat");
  const [addRailing, setAddRailing] = useState(false);

  const estimate = useMemo(() => {
    const c = estimatorConfig;
    const base = (c.basePerFoot[material] ?? 30) * feet;
    const styleMult = c.styleMultiplier[style] ?? 1;
    const heightMult = c.heightMultiplier[height] ?? 1;
    const terrainMult = c.terrainMultiplier[terrain] ?? 1;
    let total = base * styleMult * heightMult * terrainMult;
    total += c.gateCost[gate] ?? 0;
    if (removal) total += c.removalPerFoot * feet;
    if (addRailing) total += c.railingPerFoot * feet;
    const low = Math.round((total * 0.9) / 50) * 50;
    const high = Math.round((total * 1.15) / 50) * 50;
    return { low, high };
  }, [material, style, feet, height, gate, removal, terrain, addRailing]);

  const field = "mb-5";
  const labelCls = "block text-xs font-bold uppercase tracking-wider text-graphite/70 mb-2";

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      {/* Controls */}
      <div className="rounded-2xl border border-hairline bg-white p-6 shadow-card">
        {/* Project type toggle (neumorphic) */}
        <div className="mb-6 inline-flex rounded-full bg-offwhite p-1 shadow-inner">
          {(["residential", "commercial"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setProjectType(t)}
              aria-pressed={projectType === t}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-bold capitalize transition-all",
                projectType === t
                  ? "bg-cedar text-white shadow"
                  : "text-graphite hover:text-charcoal"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className={field}>
          <label className={labelCls} htmlFor="est-material">
            Material
          </label>
          <select
            id="est-material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full rounded-lg border border-hairline bg-offwhite px-4 py-3 text-charcoal focus:border-cedar focus:outline-none focus:ring-2 focus:ring-cedar/30"
          >
            {estimatorMaterials.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>

        <div className={field}>
          <label className={labelCls} htmlFor="est-style">
            Fence Style
          </label>
          <select
            id="est-style"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full rounded-lg border border-hairline bg-offwhite px-4 py-3 text-charcoal focus:border-cedar focus:outline-none focus:ring-2 focus:ring-cedar/30"
          >
            {estimatorStyles.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className={field}>
          <label className={labelCls} htmlFor="est-feet">
            Approximate Linear Feet: <span className="text-cedar">{feet} ft</span>
          </label>
          <input
            id="est-feet"
            type="range"
            min={25}
            max={600}
            step={5}
            value={feet}
            onChange={(e) => setFeet(Number(e.target.value))}
            className="w-full accent-cedar"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className={field}>
            <label className={labelCls} htmlFor="est-height">
              Fence Height
            </label>
            <select
              id="est-height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full rounded-lg border border-hairline bg-offwhite px-4 py-3 text-charcoal focus:border-cedar focus:outline-none focus:ring-2 focus:ring-cedar/30"
            >
              {estimatorHeights.map((h) => (
                <option key={h} value={h}>
                  {h} ft
                </option>
              ))}
            </select>
          </div>
          <div className={field}>
            <label className={labelCls} htmlFor="est-gate">
              Gates
            </label>
            <select
              id="est-gate"
              value={gate}
              onChange={(e) => setGate(e.target.value)}
              className="w-full rounded-lg border border-hairline bg-offwhite px-4 py-3 text-charcoal focus:border-cedar focus:outline-none focus:ring-2 focus:ring-cedar/30"
            >
              {estimatorGates.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className={field}>
            <label className={labelCls} htmlFor="est-terrain">
              Terrain
            </label>
            <select
              id="est-terrain"
              value={terrain}
              onChange={(e) => setTerrain(e.target.value)}
              className="w-full rounded-lg border border-hairline bg-offwhite px-4 py-3 text-charcoal focus:border-cedar focus:outline-none focus:ring-2 focus:ring-cedar/30"
            >
              {estimatorTerrain.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3 pt-7">
            <label className="flex items-center gap-2 text-sm font-medium text-charcoal">
              <input
                type="checkbox"
                checked={removal}
                onChange={(e) => setRemoval(e.target.checked)}
                className="h-4 w-4 accent-cedar"
              />
              Remove old fence
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-charcoal">
              <input
                type="checkbox"
                checked={addRailing}
                onChange={(e) => setAddRailing(e.target.checked)}
                className="h-4 w-4 accent-cedar"
              />
              Add railing
            </label>
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="flex flex-col justify-center rounded-2xl bg-charcoal p-8 text-white">
        <div className="flex items-center gap-2 text-cedar">
          <Calculator className="h-5 w-5" aria-hidden />
          <span className="eyebrow text-cedar">Rough Estimate</span>
        </div>
        <p className="mt-4 text-sm text-white/70">
          Estimated range for a{" "}
          <span className="font-semibold text-white capitalize">
            {projectType}
          </span>{" "}
          project:
        </p>
        <div className="mt-2 font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-none">
          {fmt(estimate.low)} – {fmt(estimate.high)}
        </div>
        <p className="mt-2 text-xs text-white/50">Estimated total range</p>

        <Link
          href="/contact"
          className="btn-cedar mt-6 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-bold"
        >
          Get a Precise Estimate
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        <p className="mt-5 rounded-lg border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/60">
          {estimatorConfig.disclaimer}
        </p>
      </div>
    </div>
  );
}
