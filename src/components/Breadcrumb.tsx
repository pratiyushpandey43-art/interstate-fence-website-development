import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-edge pt-24 md:pt-28">
      <ol className="flex flex-wrap items-center gap-1 text-xs uppercase tracking-wider text-graphite/70">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-cedar">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-charcoal">{item.label}</span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className="h-3.5 w-3.5 text-graphite/40" aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
