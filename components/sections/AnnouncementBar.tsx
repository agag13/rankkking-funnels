import type { FunnelConfig } from "@/content/types";

export default function AnnouncementBar({ config }: { config: FunnelConfig }) {
  const { announcement } = config;
  return (
    <div className="bg-gradient-to-r from-navy-800 to-brand-600 px-4 py-2">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 text-center">
        <p className="truncate text-[13px] font-medium text-white sm:whitespace-normal sm:text-sm">
          <span aria-hidden="true" className="mr-2 inline-block h-2 w-2 rounded-full bg-accent-400 align-middle" />
          <span className="sm:hidden">{announcement.textShort}</span>
          <span className="hidden sm:inline">{announcement.text}</span>
        </p>
        <a
          href="#lead-form"
          className="shrink-0 rounded-md bg-white px-3 py-1.5 text-[13px] font-bold text-brand-600 transition hover:bg-blue-50"
        >
          {announcement.cta}
        </a>
      </div>
    </div>
  );
}
