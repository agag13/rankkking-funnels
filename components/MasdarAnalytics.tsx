"use client";

import { useEffect } from "react";
import Script from "next/script";
import { captureAttribution } from "@/lib/attribution";

/**
 * Tracking for the Masdar / business-setup funnel.
 * Every tag is OPTIONAL and only injected when a real id is supplied — pass a
 * placeholder (empty, or starting with "TODO"/"REPLACE"/"G-XXXX") and that tag
 * is skipped, so nothing fires until the real Masdar GTM / GA4 / Pixel ids are
 * wired in. This deliberately does NOT reuse Rankkking's containers.
 */
function real(id?: string): id is string {
  if (!id) return false;
  const v = id.trim().toUpperCase();
  if (!v) return false;
  return !(v.startsWith("TODO") || v.startsWith("REPLACE") || v.includes("XXXX"));
}

export default function MasdarAnalytics({
  gtmId,
  ga4Id,
  metaPixelId,
}: {
  gtmId?: string;
  ga4Id?: string;
  metaPixelId?: string;
}) {
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <>
      {real(ga4Id) && (
        <>
          <Script id="ga4-src" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} />
          <Script id="ga4-config" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4Id}');`}
          </Script>
        </>
      )}
      {real(gtmId) && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}
      {real(metaPixelId) && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
