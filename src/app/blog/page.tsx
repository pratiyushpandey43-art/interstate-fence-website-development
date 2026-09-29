import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import ImageWithFallback from "@/components/ImageWithFallback";
import CtaBlock from "@/components/CtaBlock";
import { blogPosts, business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog & Fence Resources",
  description:
    "Local fencing and railing guides from Interstate Fence in Geneseo, Illinois — material comparisons, planning, cost, maintenance, and design ideas.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Hero
        size="short"
        eyebrow="Resources"
        title="Fence & Railing Insights."
        subtitle="Practical guides for Geneseo-area homeowners and businesses — materials, planning, cost, and design."
        primaryCta={{ label: "Get a Free Estimate", href: "/contact", variant: "cedar" }}
        image="/images/hero.jpg"
      />

      <section className="container-edge py-14 md:py-20">
        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-3xl border border-hairline bg-white shadow-card transition-all hover:shadow-soft md:grid-cols-2"
        >
          <ImageWithFallback
            src={featured.image}
            alt={featured.title}
            className="aspect-[16/10] md:aspect-auto"
            label={featured.title}
          />
          <div className="flex flex-col justify-center p-7 md:p-10">
            <span className="eyebrow text-cedar">{featured.category}</span>
            <h2 className="mt-2 text-2xl font-semibold text-charcoal md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-graphite/80">{featured.excerpt}</p>
            <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-widest text-graphite/60">
              <span>{formatDate(featured.date)}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {featured.readingTime}
              </span>
            </div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cedar">
              Read Article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="aspect-[16/10]"
                label={post.title}
              />
              <div className="flex flex-1 flex-col p-5">
                <span className="eyebrow text-cedar">{post.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-charcoal">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-graphite/80 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-widest text-graphite/60">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {post.readingTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBlock
        eyebrow="Have A Project In Mind?"
        title="Let's turn insight into a real fence."
        body={`Call ${business.phone} or request an estimate for your Geneseo-area property.`}
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />
    </>
  );
}
