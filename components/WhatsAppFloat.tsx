import type { FunnelConfig } from "@/content/types";

export default function WhatsAppFloat({ config }: { config: FunnelConfig }) {
  const href = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.prefill)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-black/40 transition hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.004 3C8.832 3 3 8.83 3 16.002c0 2.29.6 4.53 1.74 6.5L3 29l6.66-1.72a13.03 13.03 0 0 0 6.34 1.62h.01c7.17 0 13-5.83 13-13S23.175 3 16.004 3Zm0 23.7h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-4.05 1.05 1.08-3.95-.25-.4a10.66 10.66 0 0 1-1.64-5.68c0-5.9 4.81-10.7 10.72-10.7 2.86 0 5.55 1.11 7.57 3.14a10.64 10.64 0 0 1 3.13 7.57c0 5.9-4.8 10.7-10.71 10.7Zm5.87-8.02c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.37.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.39-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.25 1.46.21 2.01.13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
