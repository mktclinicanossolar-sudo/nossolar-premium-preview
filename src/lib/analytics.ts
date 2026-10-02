type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

// Public IDs verified against the existing clinic website and Ads conversation.
export const ADS_ID = "AW-18412323017";
export const WHATSAPP_CONVERSION = "AW-18412323017/-11YCPHb9_kcEMmB18tE";

export function initializeAds() {
  if (import.meta.env.VITE_ENABLE_ADS !== "true") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", ADS_ID, { allow_ad_personalization_signals: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
  document.head.appendChild(script);
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const link = target?.closest<HTMLAnchorElement>(
      'a[href^="https://wa.me/"]',
    );
    if (!link) return;
    const url = new URL(link.href);
    // Recruitment uses a different number and must not generate a sales lead.
    if (url.pathname !== "/5519988930792") return;
    const location =
      link.closest("section[id]")?.id ||
      (link.closest("header")
        ? "header"
        : link.classList.contains("floating-whatsapp")
          ? "floating"
          : "content");
    window.gtag?.("event", "conversion", {
      send_to: WHATSAPP_CONVERSION,
      cta_location: location,
      transport_type: "beacon",
    });
    // No WhatsApp message, clinical information or visitor identifiers are sent.
  });
}
