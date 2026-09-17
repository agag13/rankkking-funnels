import type { ReactNode } from "react";

/**
 * Shared field chrome for the lead forms.
 *
 * `text-base` (16px) is deliberate: anything smaller makes iOS Safari zoom
 * the page on focus, and this funnel's traffic is majority mobile.
 */
export const fieldCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 focus-visible:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/30";

export const errCls = "border-red-500 ring-2 ring-red-500/30";

/** Selects show the placeholder in grey until a real option is picked. */
export function selectCls(chosen: boolean): string {
  return `${fieldCls} ${chosen ? "text-slate-900" : "text-slate-500"}`;
}

/** Visually hidden but read by screen readers and used by the `for` association. */
export function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="sr-only">
      {children}
    </label>
  );
}

export function FieldError({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} role="alert" className="-mt-1 text-xs font-medium text-red-600">
      {children}
    </p>
  );
}
