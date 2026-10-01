import { useEffect, useState } from "react";
import { WhatsAppLink } from "./ui";

export const HERO_SLIDES = [
  {
    src: "/hero/brincar-e-conectar.webp",
    title: "Brincadeira com blocos",
    alt: "Imagem ilustrativa de uma criança de costas brincando com blocos e segurando a mão de um adulto, sem rostos visíveis.",
    position: "60% 42%",
  },
  {
    src: "/hero/maos-e-descobertas.webp",
    title: "Brincadeira com argolas",
    alt: "Imagem ilustrativa de uma criança de costas brincando com argolas coloridas e de mãos dadas com um adulto, sem rostos visíveis.",
    position: "57% 42%",
  },
  {
    src: "/hero/espaco-sensorial.webp",
    title: "Sala de integração sensorial",
    alt: "Sala real de integração sensorial da Clínica Nosso Lar com balanços e equipamentos terapêuticos.",
    position: "center 55%",
  },
  {
    src: "/hero/recepcao.webp",
    title: "Recepção da clínica",
    alt: "Recepção real da Clínica Nosso Lar, preparada para acolher as famílias.",
    position: "center 60%",
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
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
              <img
                src={slide.src}
                alt={slide.alt}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                style={{ objectPosition: slide.position }}
              />
            </div>
          ))}
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <h1>
            Cuidado em autismo <span>para a sua família</span>
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
            aria-label="Escolher imagem da apresentação"
          >
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                className={`hero-dot ${active === index ? "is-active" : ""}`}
                aria-label={`Mostrar imagem ${index + 1}: ${slide.title}`}
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
