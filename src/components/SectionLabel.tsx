import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

// Brutalist-style uppercase section eyebrow label.
export default function SectionLabel({ children, className, as: Tag = "p" }: Props) {
  return (
    <Tag className={cn("eyebrow text-cedar", className)}>{children}</Tag>
  );
}
