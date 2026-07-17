"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { FunnelConfig } from "@/content/types";
import { submitLead } from "@/lib/submitLead";
import { trackLead, dataLayerPush } from "@/lib/track";

interface Props {
  config: FunnelConfig;
  sourceForm: "hero" | "popup";
  submitLabel?: string;
}

export default function LeadForm({ config, sourceForm, submitLabel }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const { form } = config;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const fd = new FormData(e.currentTarget);
    const fields = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: `+91${String(fd.get("phone") ?? "").replace(/\D/g, "").slice(-10)}`,
      city: String(fd.get("city") ?? ""),
      agency: String(fd.get("agency") ?? "").trim(),
    };
    setStatus("submitting");
    dataLayerPush("lead_form_submit_attempt", { source_form: sourceForm });
    try {
      await submitLead(config.webhookUrl, config.id, sourceForm, fields);
      trackLead(config.id, { source_form: sourceForm });
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate={false}>
      <input name="name" type="text" required placeholder={form.namePlaceholder} className={inputCls} autoComplete="name" />
      <input name="email" type="email" placeholder={form.emailPlaceholder} className={inputCls} autoComplete="email" />
      <div className="flex">
        <span className="inline-flex items-center rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 px-3 text-[15px] font-medium text-slate-600">
          🇮🇳 +91
        </span>
        <input
          name="phone"
          type="tel"
          required
          inputMode="numeric"
          pattern="[0-9\s]{10,12}"
          placeholder={form.phonePlaceholder}
          className={`${inputCls} rounded-l-none`}
          autoComplete="tel-national"
        />
      </div>
      <select name="city" defaultValue="" className={`${inputCls} text-slate-600`}>
        <option value="" disabled>
          {form.cityLabel}
        </option>
        {form.cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input name="agency" type="text" required placeholder={form.agencyPlaceholder} className={inputCls} autoComplete="url" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 rounded-lg bg-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-brand-500 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : (submitLabel ?? form.submitLabel)}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          Something went wrong.{" "}
          <a
            href={`https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.prefill)}`}
            className="font-semibold underline"
            target="_blank"
            rel="noopener"
          >
            Message us on WhatsApp instead →
          </a>
        </p>
      )}
      <p className="text-center text-xs text-slate-500">🔒 {form.privacyNote}</p>
    </form>
  );
}
