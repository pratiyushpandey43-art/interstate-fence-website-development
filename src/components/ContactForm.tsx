"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, AlertCircle, UploadCloud, X } from "lucide-react";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const MAX_FILES = 4;
const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/heic"];

export default function ContactForm({
  initialService = "",
  initialProject = "",
}: {
  initialService?: string;
  initialProject?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const serviceOptions = services.map((s) => ({
    value: s.ctaContext,
    label: s.name,
  }));

  const prefillType =
    initialProject === "commercial"
      ? "Commercial"
      : services.find((s) => s.ctaContext === initialService)?.audience ===
          "Commercial"
        ? "Commercial"
        : "";

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError("");
    const picked = Array.from(e.target.files || []);
    const next = [...files];
    for (const f of picked) {
      if (!ALLOWED.includes(f.type)) {
        setFileError("Only JPG, PNG, WEBP, or HEIC images are allowed.");
        continue;
      }
      if (f.size > MAX_SIZE) {
        setFileError("Each file must be under 5MB.");
        continue;
      }
      if (next.length < MAX_FILES) next.push(f);
    }
    setFiles(next);
    e.target.value = ""; // allow re-pick
  }

  function removeFile(i: number) {
    setFiles((f) => f.filter((_, idx) => idx !== i));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot spam check
    if (data.get("company")) {
      setStatus("success");
      formRef.current?.reset();
      setFiles([]);
      return;
    }

    if (files.length) {
      files.forEach((f) => data.append("photos", f));
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please call us.");
        return;
      }
      setStatus("success");
      formRef.current?.reset();
      setFiles([]);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or call us.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-cedar/30 bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-14 w-14 text-cedar" aria-hidden />
        <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal">
          Thank you.
        </h2>
        <p className="mt-2 text-graphite/80">
          Your request has been received. We&apos;ll be in touch soon to discuss
          your project.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6 rounded-md px-6 py-3 text-sm font-bold"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-hairline bg-offwhite px-4 py-3 text-charcoal focus:border-cedar focus:outline-none focus:ring-2 focus:ring-cedar/30";
  const labelCls =
    "block text-xs font-bold uppercase tracking-wider text-graphite/70 mb-2";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-hairline bg-white p-6 shadow-card md:p-8"
    >
      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-name">
            Name <span className="text-cedar">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            required
            autoComplete="name"
            className={inputCls}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-phone">
            Phone <span className="text-cedar">*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className={inputCls}
            placeholder="309-000-0000"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-email">
            Email <span className="text-cedar">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            required
            type="email"
            autoComplete="email"
            className={inputCls}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-type">
            Project Type
          </label>
          <select
            id="cf-type"
            name="projectType"
            defaultValue={prefillType || ""}
            className={inputCls}
          >
            <option value="">Select…</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-material">
            Material of Interest
          </label>
          <select
            id="cf-material"
            name="material"
            defaultValue={initialService || ""}
            className={inputCls}
          >
            <option value="">Select…</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-size">
            Approx. Project Size
          </label>
          <input
            id="cf-size"
            name="projectSize"
            className={inputCls}
            placeholder="e.g. 150 linear feet"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-city">
            City
          </label>
          <input
            id="cf-city"
            name="city"
            className={inputCls}
            placeholder="Geneseo"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="cf-address">
            Property Address
          </label>
          <input
            id="cf-address"
            name="address"
            className={inputCls}
            placeholder="Street address"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-zip">
            ZIP
          </label>
          <input
            id="cf-zip"
            name="zip"
            className={inputCls}
            placeholder="61254"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="cf-message">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            className={inputCls}
            placeholder="Tell us about your project, goals, and timeline."
          />
        </div>

        {/* Upload */}
        <div className="sm:col-span-2">
          <label className={labelCls}>Upload Photos (optional)</label>
          <label
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-hairline bg-offwhite px-4 py-6 text-center transition-colors hover:border-cedar",
              fileError && "border-red-400"
            )}
          >
            <UploadCloud className="h-7 w-7 text-cedar" aria-hidden />
            <span className="text-sm font-medium text-graphite">
              Click to add photos
            </span>
            <span className="text-xs text-graphite/60">
              JPG, PNG, WEBP, HEIC · up to 5MB each · {MAX_FILES} max
            </span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFiles}
              className="hidden"
            />
          </label>
          {fileError && (
            <p className="mt-2 text-xs text-red-600">{fileError}</p>
          )}
          {files.length > 0 && (
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {files.map((f, i) => (
                <li
                  key={i}
                  className="relative rounded-lg border border-hairline bg-white p-2 text-xs"
                >
                  <span className="block truncate text-graphite">{f.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    aria-label={`Remove ${f.name}`}
                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal text-white"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "btn-cedar mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-bold disabled:opacity-70 sm:w-auto"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Request My Free Estimate"
        )}
      </button>
      <p className="mt-3 text-xs text-graphite/60">
        By submitting, you agree to be contacted about your project. We never
        share your information.
      </p>
    </form>
  );
}
