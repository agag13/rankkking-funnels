/* eslint-disable @next/next/no-img-element */
import type { LogoItem } from "@/content/types";

export default function LogoStrip({
  title,
  logos,
  className = "",
}: {
  title: string;
  logos: LogoItem[];
  className?: string;
}) {
  return (
    <div className={`px-5 py-10 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-[11px] font-semibold tracking-[0.3em] text-slate-500">{title}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <img
              key={logo.src + logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              style={{ height: logo.height ?? 24 }}
              className={`w-auto opacity-60 transition hover:opacity-100 ${logo.invert ? "brightness-0 invert" : "grayscale brightness-[1.8]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
