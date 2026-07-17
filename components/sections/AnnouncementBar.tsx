import type { FunnelConfig } from "@/content/types";

export default function AnnouncementBar({ config }: { config: FunnelConfig }) {
  return (
    <div className="bg-gradient-to-r from-navy-800 to-brand-600 px-4 py-2.5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
        <p className="text-[13px] font-medium text-white sm:text-sm">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent-400 align-middle" />
          {config.announcement.text}
        </p>
        <a
          href="#lead-form"
          className="rounded-md bg-white px-4 py-1.5 text-[13px] font-bold text-brand-600 transition hover:bg-blue-50"
        >
          {config.announcement.cta}
        </a>
      </div>
    </div>
  );
}
