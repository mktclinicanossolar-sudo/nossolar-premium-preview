import { useEffect, useRef, useState } from "react";
import { WhatsAppLink } from "./ui";

export const HERO_SLIDES = [
  {
    type: "image",
    src: "/hero/fachada-nosso-lar.jpg",
    title: "Fachada da Clínica Nosso Lar",
    alt: "Fachada da Clínica Nosso Lar em Mogi Guaçu, com o nome da clínica na entrada.",
    position: "center 56%",
  },
  {
    type: "image",
    src: "/hero/entrada-da-clinica.jpg",
    title: "Entrada da clínica",
    alt: "Entrada da Clínica Nosso Lar, com porta de madeira, varanda e revestimento de pedra.",
    position: "center 62%",
  },
  {
    type: "image",
    src: "/hero/acesso-nosso-lar.jpg",
    title: "Acesso à Nosso Lar",
    alt: "Acesso à Clínica Nosso Lar, com jardim, árvores e placa de identificação na fachada.",
    position: "center 54%",
  },
  {
    type: "video",
    src: "/hero/nosso-lar-em-video.mp4",
    title: "Sala de integração sensorial em vídeo",
    alt: "Vídeo da sala de integração sensorial da Clínica Nosso Lar, com balanços e equipamentos terapêuticos.",
    position: "center 55%",
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const visibility = () => setHidden(document.hidden);
    visibility();
    document.addEventListener("visibilitychange", visibility);
    return () => document.removeEventListener("visibilitychange", visibility);
  }, []);
  useEffect(() => {
    if (hidden) return;
    const timer = window.setTimeout(
      () => setActive((index) => (index + 1) % HERO_SLIDES.length),
      3000,
    );
    return () => window.clearTimeout(timer);
  }, [active, hidden]);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (HERO_SLIDES[active].type === "video" && !hidden) {
      video.currentTime = 0;
      video.muted = true;
      void video.play().catch(() => {
        // A browser that blocks autoplay can still display the first frame.
      });
    } else {
      video.pause();
    }
    return () => video.pause();
  }, [active, hidden]);
  return (
    <>
      <section
        id="inicio"
        className="hero"
        aria-label="Bem-vindo à Clínica Nosso Lar"
      >
        <div
          className="hero-slides"
          aria-roledescription="carrossel"
          aria-label="Cuidado e espaços da clínica"
        >
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`hero-slide ${active === index ? "is-active" : ""}`}
              aria-hidden={active !== index}
            >
              {slide.type === "video" ? (
                <video
                  ref={videoRef}
                  src={slide.src}
                  aria-label={slide.alt}
                  autoPlay={active === index && !hidden}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{ objectPosition: slide.position }}
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  fetchPriority={index === 0 ? "high" : "low"}
                  decoding="async"
                  style={{ objectPosition: slide.position }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">Clínica Comportamental</span>{" "}
            <span className="hero-title-line">em Mogi Guaçu</span>
          </h1>
          <div className="hero-actions">
            <WhatsAppLink message="Olá! Gostaria de agendar uma avaliação na Clínica Nosso Lar.">
              Agendar uma avaliação
            </WhatsAppLink>
          </div>
        </div>
        <div className="hero-bottom">
          <div
            className="hero-pagination"
            aria-label="Escolher foto ou vídeo da apresentação"
          >
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                className={`hero-dot ${active === index ? "is-active" : ""}`}
                aria-label={`Mostrar ${slide.type === "video" ? "vídeo" : "foto"} ${index + 1}: ${slide.title}`}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
              >
                <span
                  key={`${active}-${hidden}`}
                  className={active === index && !hidden ? "progress" : ""}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      <div className="trust-strip wrap">
        <span>
          <i className="status-dot" />
          Clínica comportamental em Mogi Guaçu, SP
        </span>
        <div>
          <span>Cuidado individualizado</span>
          <span>Equipe multidisciplinar</span>
          <span>2 unidades em Mogi Guaçu</span>
        </div>
      </div>
    </>
  );
}
