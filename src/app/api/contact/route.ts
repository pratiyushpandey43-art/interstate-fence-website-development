import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { db } from "@/db";
import { contactSubmissions } from "@/db/schema";

export const runtime = "nodejs";

// Simple in-memory rate limit (per IP). Adequate for demo / small traffic.
const rate = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000; // 10 min
const MAX = 8;

function clientIp(req: NextRequest) {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd?.split(",")[0]?.trim() || "unknown";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (rate.get(ip) || []).filter((t) => now - t < WINDOW);
  hits.push(now);
  rate.set(ip, hits);
  return hits.length > MAX;
}

const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/heic"];
const MAX_SIZE = 5 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please call us or try again later." },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const email = String(form.get("email") || "").trim();
  const honeypot = String(form.get("company") || "").trim();

  if (honeypot) {
    // Pretend success for bots
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Name, phone, and email are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Handle uploaded photos
  const photos: string[] = [];
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  try {
    await fs.mkdir(uploadDir, { recursive: true });
    const files = form.getAll("photos");
    for (const f of files) {
      if (!(f instanceof File)) continue;
      if (!ALLOWED.includes(f.type)) continue;
      if (f.size > MAX_SIZE) continue;
      const safeName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}-${f.name.replace(/[^a-zA-Z0-9._-]/g, "")}`;
      const buf = Buffer.from(await f.arrayBuffer());
      await fs.writeFile(path.join(uploadDir, safeName), buf);
      photos.push(`/uploads/${safeName}`);
    }
  } catch {
    // Non-fatal: continue without stored photos
  }

  try {
    await db.insert(contactSubmissions).values({
      name,
      phone,
      email,
      address: String(form.get("address") || "") || null,
      city: String(form.get("city") || "") || null,
      zip: String(form.get("zip") || "") || null,
      projectType: String(form.get("projectType") || "") || null,
      material: String(form.get("material") || "") || null,
      projectSize: String(form.get("projectSize") || "") || null,
      message: String(form.get("message") || "") || null,
      source: String(form.get("source") || "website") || null,
      photos,
      status: "new",
    });
  } catch {
    return NextResponse.json(
      { error: "Could not save your request. Please call us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
