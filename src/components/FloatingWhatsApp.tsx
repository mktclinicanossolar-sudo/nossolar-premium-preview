import { WhatsAppIcon, whatsappUrl } from "./ui";
export function FloatingWhatsApp() {
  const [heroVisible, setHeroVisible] = useState(true);
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <a
      className={`floating-whatsapp ${heroVisible ? "hero-visible" : ""}`}
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Clínica Nosso Lar pelo WhatsApp"
    >
      <span className="floating-tooltip">Podemos ajudar?</span>
      <WhatsAppIcon size={28} />
    </a>
  );
}
import { useEffect, useState } from "react";
