"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { FunnelConfig } from "@/content/types";
import { submitLead } from "@/lib/submitLead";
import { trackLead, dataLayerPush } from "@/lib/track";
import { INDIAN_MOBILE, EMAIL, sanitizeName, isValidName, normalizePhone, extractDomain } from "@/lib/validate";
import { alreadySubmitted, markSubmitted } from "@/lib/dedupe";

interface Props {
  config: FunnelConfig;
  sourceForm: "hero" | "popup";
  submitLabel?: string;
  /** show a direct WhatsApp button under the submit button */
  showWhatsAppButton?: boolean;
}

type FieldError = "name" | "email" | "phone" | "city" | "agency" | null;

export default function LeadForm({ config, sourceForm, submitLabel, showWhatsAppButton }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "duplicate">("idle");
  const [fieldError, setFieldError] = useState<FieldError>(null);
  // Anti-spam: timestamp when the form mounted; bots submit near-instantly
  const renderedAt = useRef<number>(0);
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);
  const { form } = config;
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
    const email = String(fd.get("email") ?? "").trim();
    if (!EMAIL.test(email)) {
      setFieldError("email");
      return;
    }
    const rawPhone = normalizePhone(String(fd.get("phone") ?? ""));
    if (!INDIAN_MOBILE.test(rawPhone)) {
      setFieldError("phone");
      return;
    }
    const city = String(fd.get("city") ?? "");
    if (!city) {
      setFieldError("city");
      return;
    }
    const agencyRaw = String(fd.get("agency") ?? "").trim();
    let agencyValue = agencyRaw;
    if ((config.form.agencyMode ?? "domain") === "domain") {
      const domain = extractDomain(agencyRaw);
      if (!domain) {
        setFieldError("agency");
        return;
      }
      agencyValue = domain;
    }
    setFieldError(null);

    const fields = {
      name,
      email,
      phone: `+91${rawPhone}`,
      city,
      agency: agencyValue,
    };

    // Block re-submit with the same phone/email from this browser (shared with popup)
    if (alreadySubmitted(fields.phone, fields.email)) {
      setStatus("duplicate");
      return;
    }

    const antiSpam = {
      website: String(fd.get("website") ?? ""), // honeypot
      form_seconds: renderedAt.current ? Math.round((Date.now() - renderedAt.current) / 1000) : 60,
    };
    setStatus("submitting");
    dataLayerPush("lead_form_submit_attempt", { source_form: sourceForm });
    try {
      await submitLead(config.webhookUrl, config.id, sourceForm, fields, antiSpam);
      trackLead(config.id, { source_form: sourceForm });
      markSubmitted(fields.phone, fields.email);
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30";
  const errCls = "border-red-500 ring-2 ring-red-500/30";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate={false}>
      {/* Honeypot — hidden from real users; bots that fill it are dropped */}
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
        placeholder={form.namePlaceholder}
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
        placeholder={form.emailPlaceholder}
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
          placeholder={form.phonePlaceholder}
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
      <select
        name="city"
        defaultValue=""
        required
        className={`${inputCls} text-slate-600 ${fieldError === "city" ? errCls : ""}`}
        onChange={() => fieldError === "city" && setFieldError(null)}
      >
        <option value="" disabled>
          {form.cityLabel}
        </option>
        {form.cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      {fieldError === "city" && (
        <p className="-mt-1 text-xs font-medium text-red-600">Please select your city.</p>
      )}
      <input
        name="agency"
        type="text"
        required={(form.agencyMode ?? "domain") === "domain"}
        placeholder={form.agencyPlaceholder}
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
        className="mt-1 rounded-lg bg-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-brand-500 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : (submitLabel ?? form.submitLabel)}
      </button>
      {showWhatsAppButton && (
        <a
          href={waHref}
          target="_blank"
          rel="noopener"
          onClick={() => dataLayerPush("whatsapp_click", { source: `${sourceForm}_form` })}
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#25d366] bg-[#25d366]/10 px-6 py-3 text-[15px] font-bold text-[#128C7E] transition hover:bg-[#25d366] hover:text-white"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M16.004 3C8.832 3 3 8.83 3 16.002c0 2.29.6 4.53 1.74 6.5L3 29l6.66-1.72a13.03 13.03 0 0 0 6.34 1.62h.01c7.17 0 13-5.83 13-13S23.175 3 16.004 3Zm0 23.7h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.05 1.05 1.08-3.95-.25-.4a10.66 10.66 0 0 1-1.64-5.68c0-5.9 4.81-10.7 10.72-10.7 2.86 0 5.55 1.11 7.57 3.14a10.64 10.64 0 0 1 3.13 7.57c0 5.9-4.8 10.7-10.71 10.7Zm5.87-8.02c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.39-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.25 1.46.21 2.01.13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
          </svg>
          Chat on WhatsApp Instead
        </a>
      )}
      {status === "duplicate" && (
        <p className="text-center text-sm text-amber-600">
          You&apos;ve already submitted these details — we&apos;ve got them.{" "}
          <a href={waHref} className="font-semibold underline" target="_blank" rel="noopener">
            Message us on WhatsApp →
          </a>
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          Something went wrong.{" "}
          <a href={waHref} className="font-semibold underline" target="_blank" rel="noopener">
            Message us on WhatsApp instead →
          </a>
        </p>
      )}
      <p className="text-center text-xs text-slate-500">🔒 {form.privacyNote}</p>
    </form>
  );
}
