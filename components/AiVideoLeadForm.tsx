"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { aiVideo } from "@/content/funnels/ai-video";
import { submitLead, type LeadFields } from "@/lib/submitLead";
import { trackLead, dataLayerPush } from "@/lib/track";
import { sanitizeName, isValidName, extractDomain } from "@/lib/validate";

type FieldError = "name" | "email" | "company" | null;

// This funnel sells to enterprise brands and agencies, including outside India,
// so phone is optional and not constrained to an Indian mobile — unlike the
// PR-reseller form. Email is the required contact channel here.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AiVideoLeadForm({
  sourceForm = "hero",
}: {
  sourceForm?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [fieldError, setFieldError] = useState<FieldError>(null);
  // Anti-spam: bots submit near-instantly after render.
  const renderedAt = useRef<number>(0);
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const { form, whatsapp } = aiVideo;
  const waHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
    whatsapp.prefill,
  )}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const fd = new FormData(e.currentTarget);

    const name = sanitizeName(String(fd.get("name") ?? ""))
      .trim()
      .replace(/\s+/g, " ");
    if (!isValidName(name)) {
      setFieldError("name");
      return;
    }
    const email = String(fd.get("email") ?? "").trim();
    if (!EMAIL.test(email)) {
      setFieldError("email");
      return;
    }
    const company = String(fd.get("company") ?? "").trim();
    if (company.length < 2) {
      setFieldError("company");
      return;
    }
    setFieldError(null);

    // `agency` carries the company domain when one is given, matching the field
    // the existing n8n workflow already reads.
    const fields: LeadFields & { service: string; company: string } = {
      name,
      email,
      phone: String(fd.get("phone") ?? "").trim(),
      city: "",
      agency: extractDomain(company) ?? company,
      company,
      service: String(fd.get("service") ?? ""),
    };
    const antiSpam = {
      website: String(fd.get("website") ?? ""), // honeypot
      form_seconds: renderedAt.current
        ? Math.round((Date.now() - renderedAt.current) / 1000)
        : 60,
    };

    setStatus("submitting");
    dataLayerPush("lead_form_submit_attempt", {
      source_form: sourceForm,
      funnel: aiVideo.id,
    });
    try {
      await submitLead(aiVideo.webhookUrl, aiVideo.id, sourceForm, fields, antiSpam);
      trackLead(aiVideo.id, { source_form: sourceForm });
      router.push("/thank-you/");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-[15px] text-white placeholder:text-slate-500 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25";
  const labelCls = "mb-1.5 block text-[13px] font-medium text-slate-300";

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
      {/* honeypot — hidden from users, filled by bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="aiv-name">
            Name
          </label>
          <input id="aiv-name" name="name" className={inputCls} placeholder="Your name" required />
        </div>
        <div>
          <label className={labelCls} htmlFor="aiv-company">
            Company
          </label>
          <input
            id="aiv-company"
            name="company"
            className={inputCls}
            placeholder="Brand or agency"
            required
          />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="aiv-email">
          Work email
        </label>
        <input
          id="aiv-email"
          name="email"
          type="email"
          className={inputCls}
          placeholder="you@company.com"
          required
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="aiv-phone">
          Phone <span className="text-slate-500">(optional)</span>
        </label>
        <input
          id="aiv-phone"
          name="phone"
          type="tel"
          className={inputCls}
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="aiv-service">
          What do you need?
        </label>
        <select id="aiv-service" name="service" className={inputCls} defaultValue={form.services[0]}>
          {form.services.map((s) => (
            <option key={s} value={s} className="bg-navy-900">
              {s}
            </option>
          ))}
        </select>
      </div>

      {fieldError && (
        <p className="text-[13px] text-red-400">
          {fieldError === "name" && "Please enter your full name."}
          {fieldError === "email" && "Please enter a valid work email."}
          {fieldError === "company" && "Please enter your company name."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : form.submitLabel}
      </button>

      {status === "error" && (
        <p className="text-[13px] text-red-400">
          Could not send that. Please{" "}
          <a href={waHref} className="underline" target="_blank" rel="noopener noreferrer">
            message us on WhatsApp
          </a>{" "}
          instead — we do not want to lose your request.
        </p>
      )}

      <p className="text-center text-[12px] text-slate-500">{form.privacyNote}</p>
    </form>
  );
}
