import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 shadow-[var(--shadow-glow)]",
  outline: "border border-border text-foreground hover:border-primary/60 hover:bg-surface",
  ghost: "text-muted-foreground hover:text-foreground",
} as const;

type Variant = keyof typeof variants;

export function ActionLink({
  variant = "outline",
  external,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; external?: boolean }) {
  return (
    <a
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("glass-panel rounded-2xl p-6 sm:p-7", className)}>{children}</div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
