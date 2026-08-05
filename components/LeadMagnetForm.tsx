"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { FunnelConfig } from "@/content/types";
import { submitLead } from "@/lib/submitLead";
import { trackLead, dataLayerPush } from "@/lib/track";
import { INDIAN_MOBILE, sanitizeName, isValidName, normalizePhone, extractDomain } from "@/lib/validate";

type FieldError = "name" | "email" | "phone" | "agency" | null;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function LeadMagnetForm({ config }: { config: FunnelConfig }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [fieldError, setFieldError] = useState<FieldError>(null);
  const renderedAt = useRef<number>(0);
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);
  const { leadMagnet: lm } = config;
  const waHref = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.prefill)}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const fd = new FormData(e.currentTarget);

    const name = sanitizeName(String(fd.get("name") ?? "")).trim().replace(/\s+/g, " ");
    if (!isValidName(name)) {
      setFieldError("name");
      return;
    }
    const email = String(fd.get("email") ?? "").trim().toLowerCase();
    if (!EMAIL.test(email)) {
      setFieldError("email");
      return;
    }
        const rawPhone = normalizePhone(String(fd.get("phone") ?? ""));
    if (!INDIAN_MOBILE.test(rawPhone)) {
      setFieldError("phone");
      return;
    }
    const domain = extractDomain(String(fd.get("agency") ?? ""));
    if (!domain) {
      setFieldError("agency");
      return;
    }
    setFieldError(null);

    setStatus("submitting");
    dataLayerPush("lead_form_submit_attempt", { source_form: "leadmagnet-popup" });
    try {
      await submitLead(
        config.webhookUrl,
        lm.funnelId,
        "leadmagnet-popup",
                { name, email, phone: `+91${rawPhone}`, city: "", agency: domain },
        {
          website: String(fd.get("website") ?? ""),
          form_seconds: renderedAt.current ? Math.round((Date.now() - renderedAt.current) / 1000) : 60,
        },
      );
      trackLead(lm.funnelId, { source_form: "leadmagnet-popup" });
      router.push(`${lm.deliveryPath}?src=popup`);
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30";
  const errCls = "border-red-500 ring-2 ring-red-500/30";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <input
        name="name"
        type="text"
        required
        placeholder={lm.namePlaceholder}
        className={`${inputCls} ${fieldError === "name" ? errCls : ""}`}
        autoComplete="name"
        onChange={(e) => {
          const clean = sanitizeName(e.target.value);
          if (clean !== e.target.value) e.target.value = clean;
          if (fieldError === "name") setFieldError(null);
        }}
      />
      {fieldError === "name" && (
        <p className="-mt-1 text-xs font-medium text-red-600">Please enter your name (letters only).</p>
      )}
      <input
        name="email"
        type="email"
        required
        placeholder={lm.emailPlaceholder}
        className={`${inputCls} ${fieldError === "email" ? errCls : ""}`}
        autoComplete="email"
        onChange={() => fieldError === "email" && setFieldError(null)}
      />
      {fieldError === "email" && (
        <p className="-mt-1 text-xs font-medium text-red-600">Please enter a valid email address.</p>
      )}
      <div className="flex">
        <span className="inline-flex items-center rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 px-3 text-[15px] font-medium text-slate-600">
          🇮🇳 +91
        </span>
        <input
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          placeholder={lm.phonePlaceholder}
          className={`${inputCls} rounded-l-none ${fieldError === "phone" ? errCls : ""}`}
          autoComplete="tel-national"
          onChange={(e) => {
            const clean = e.target.value.replace(/[^\d\s]/g, "");
            if (clean !== e.target.value) e.target.value = clean;
            if (fieldError === "phone") setFieldError(null);
          }}
        />
      </div>
      {fieldError === "phone" && (
        <p className="-mt-1 text-xs font-medium text-red-600">
          Please enter a valid 10-digit Indian mobile number (starts with 6–9).
        </p>
      )}
            <input
        name="agency"
        type="text"
        required
        placeholder="Agency Website (e.g. myagency.com)"
        className={`${inputCls} ${fieldError === "agency" ? errCls : ""}`}
        autoComplete="url"
        onChange={() => fieldError === "agency" && setFieldError(null)}
      />
      {fieldError === "agency" && (
        <p className="-mt-1 text-xs font-medium text-red-600">
          Please enter your agency&apos;s website domain, e.g. <span className="font-semibold">myagency.com</span>
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 rounded-lg bg-accent-500 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-accent-400 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Unlocking…" : lm.submitLabel}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          Something went wrong.{" "}
          <a href={waHref} className="font-semibold underline" target="_blank" rel="noopener">
            Message us on WhatsApp instead →
          </a>
        </p>
      )}
      <p className="text-center text-xs text-slate-500">🔒 {lm.privacyNote}</p>
    </form>
  );
}
