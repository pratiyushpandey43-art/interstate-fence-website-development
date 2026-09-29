import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import Hero from "@/components/Hero";
import ImageWithFallback from "@/components/ImageWithFallback";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBlock from "@/components/CtaBlock";
import { blogPosts, getBlogPost, business } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
    },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = post.related
    .map((r) => getBlogPost(r))
    .filter(Boolean)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: business.name },
    datePublished: post.date,
    dateModified: post.updated,
    publisher: { "@type": "Organization", name: business.name },
  };

  return (
    <>
      <Hero
        size="short"
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="container-edge py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-graphite/60">
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden />
              Published {formatDate(post.date)}
            </span>
            <span>·</span>
            <span>Updated {formatDate(post.updated)}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readingTime}
            </span>
            <span>·</span>
            <span>By {post.author}</span>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-hairline shadow-card">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="aspect-[16/9]"
              label={post.title}
            />
          </div>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-graphite/85">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-hairline bg-white p-6 shadow-card">
            <h2 className="text-xl font-semibold text-charcoal">
              Ready to plan your project?
            </h2>
            <p className="mt-2 text-graphite/80">
              These guides are general information. For pricing and a plan that
              fits your property, reach out for a free estimate.
            </p>
            <Link
              href="/contact"
              className="btn-cedar mt-4 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold"
            >
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-edge pb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold text-charcoal">
              Related Articles
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map(
                (r) =>
                  r && (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
                    >
                      <ImageWithFallback
                        src={r.image}
                        alt={r.title}
                        className="aspect-[16/10]"
                        label={r.title}
                      />
                      <div className="p-5">
                        <span className="eyebrow text-cedar">{r.category}</span>
                        <h3 className="mt-2 text-lg font-semibold text-charcoal">
                          {r.title}
                        </h3>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      <CtaBlock
        eyebrow="Talk To Us"
        title="Questions about your specific project?"
        body={`Call ${business.phone} or send a note — we'll help you choose the right approach.`}
        primary={{ label: "Get a Free Estimate", href: "/contact" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
