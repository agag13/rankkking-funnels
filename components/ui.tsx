import type { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.25em] text-brand-400 uppercase">
      {children}
    </p>
  );
}

export function SectionTitle({ lines }: { lines: string[] | string }) {
  const arr = Array.isArray(lines) ? lines : [lines];
  return (
    <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
      {arr.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </h2>
  );
}

export function CtaButton({
  children,
  href = "#lead-form",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-block rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-brand-500/40 ${className}`}
    >
      {children}
    </a>
  );
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
