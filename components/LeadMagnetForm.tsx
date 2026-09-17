"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { FunnelConfig } from "@/content/types";
import { submitLead } from "@/lib/submitLead";
import { trackLead, dataLayerPush } from "@/lib/track";
import { INDIAN_MOBILE, sanitizeName, isValidName, normalizePhone, extractDomain } from "@/lib/validate";
import { alreadySubmitted, markSubmitted } from "@/lib/dedupe";
import { fieldCls, errCls, Label, FieldError } from "@/components/form-ui";

type FieldError = "name" | "email" | "phone" | "agency" | null;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function LeadMagnetForm({ config }: { config: FunnelConfig }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "duplicate">("idle");
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

    const phone = `+91${rawPhone}`;

    // Cross-form block: same phone/email already submitted (hero OR popup) on this browser
    if (alreadySubmitted(phone, email)) {
      setStatus("duplicate");
      return;
    }

    setStatus("submitting");
    dataLayerPush("lead_form_submit_attempt", { source_form: "leadmagnet-popup" });
    try {
      await submitLead(
        config.webhookUrl,
        lm.funnelId,
        "leadmagnet-popup",
        { name, email, phone, service: "", city: "", agency: agencyValue },
        {
          website: String(fd.get("website") ?? ""),
          form_seconds: renderedAt.current ? Math.round((Date.now() - renderedAt.current) / 1000) : 60,
        },
      );
      trackLead(lm.funnelId, { source_form: "leadmagnet-popup" });
      markSubmitted(phone, email);
      router.push(`${lm.deliveryPath}?src=popup`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <Label htmlFor="lm-name">Your name</Label>
      <input
        id="lm-name"
        name="name"
        type="text"
        required
        placeholder={lm.namePlaceholder}
        aria-invalid={fieldError === "name"}
        aria-describedby={fieldError === "name" ? "lm-name-err" : undefined}
        className={`${fieldCls} ${fieldError === "name" ? errCls : ""}`}
        autoComplete="name"
        onChange={(e) => {
          const clean = sanitizeName(e.target.value);
          if (clean !== e.target.value) e.target.value = clean;
          if (fieldError === "name") setFieldError(null);
        }}
      />
      {fieldError === "name" && (
        <FieldError id="lm-name-err">Please enter your name (letters only).</FieldError>
      )}
      <Label htmlFor="lm-email">Email address</Label>
      <input
        id="lm-email"
        name="email"
        type="email"
        required
        placeholder={lm.emailPlaceholder}
        aria-invalid={fieldError === "email"}
        aria-describedby={fieldError === "email" ? "lm-email-err" : undefined}
        className={`${fieldCls} ${fieldError === "email" ? errCls : ""}`}
        autoComplete="email"
        onChange={() => fieldError === "email" && setFieldError(null)}
      />
      {fieldError === "email" && (
        <FieldError id="lm-email-err">Please enter a valid email address.</FieldError>
      )}
      <Label htmlFor="lm-phone">WhatsApp number</Label>
      <div className="flex">
        <span
          aria-hidden="true"
          className="inline-flex items-center rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 px-3 text-base font-medium text-slate-600"
        >
          🇮🇳 +91
        </span>
        <input
          id="lm-phone"
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          placeholder={lm.phonePlaceholder}
          aria-invalid={fieldError === "phone"}
          aria-describedby={fieldError === "phone" ? "lm-phone-err" : undefined}
          className={`${fieldCls} rounded-l-none ${fieldError === "phone" ? errCls : ""}`}
          autoComplete="tel-national"
          onChange={(e) => {
            const clean = e.target.value.replace(/[^\d\s]/g, "");
            if (clean !== e.target.value) e.target.value = clean;
            if (fieldError === "phone") setFieldError(null);
          }}
        />
      </div>
      {fieldError === "phone" && (
        <FieldError id="lm-phone-err">
          Please enter a valid 10-digit Indian mobile number (starts with 6–9).
        </FieldError>
      )}
      <Label htmlFor="lm-agency">
        {(config.form.agencyMode ?? "domain") === "domain"
          ? "Your agency website"
          : "Name, brand or link you're concerned about (optional)"}
      </Label>
      <input
        id="lm-agency"
        name="agency"
        type="text"
        required={(config.form.agencyMode ?? "domain") === "domain"}
        placeholder={config.form.agencyPlaceholder}
        className={`${fieldCls} ${fieldError === "agency" ? errCls : ""}`}
        aria-invalid={fieldError === "agency"}
        aria-describedby={fieldError === "agency" ? "lm-agency-err" : undefined}
        autoComplete={(config.form.agencyMode ?? "domain") === "domain" ? "url" : "off"}
        onChange={() => fieldError === "agency" && setFieldError(null)}
      />
      {fieldError === "agency" && (
        <FieldError id="lm-agency-err">
          Please enter your agency&apos;s website domain, e.g. <span className="font-semibold">myagency.com</span>
        </FieldError>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 rounded-lg bg-accent-500 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-accent-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Unlocking…" : lm.submitLabel}
      </button>
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
      <p className="text-center text-xs text-slate-500">🔒 {lm.privacyNote}</p>
    </form>
  );
}
