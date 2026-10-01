import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Brain,
  HeartHandshake,
  MessageCircle,
  Music2,
  BookOpen,
  Activity,
  ClipboardCheck,
  Hand,
  Heart,
  Plus,
} from "lucide-react";
import { CLINIC_SERVICES } from "../data/clinicContent";
import { SERVICE_SEARCH_CONTENT } from "../data/serviceSearchContent";
import type { ServiceItem } from "../types";
import { Eyebrow, Reveal, WhatsAppLink } from "./ui";

const icons = [
  Brain,
  BookOpen,
  Music2,
  Heart,
  HeartHandshake,
  Hand,
  MessageCircle,
  ClipboardCheck,
  Brain,
  Activity,
];

export function ServicesSection({
  onSelectService,
}: {
  onSelectService: (service: ServiceItem) => void;
}) {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 700px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const followHash = () => {
      const alias = window.location.hash.slice(1);
      const id =
        alias === "intervencao-aba"
          ? "aba"
          : alias === "psicoterapia"
            ? "psicologia"
            : alias;
      if (CLINIC_SERVICES.some((service) => service.id === id)) setOpen(id);
    };
    followHash();
    window.addEventListener("hashchange", followHash);
    return () => window.removeEventListener("hashchange", followHash);
  }, []);
  return (
    <section id="servicos" className="section services-section">
      <span id="services" className="anchor-alias" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="section-heading split-heading">
          <div>
            <Eyebrow>NOSSAS ESPECIALIDADES</Eyebrow>
            <h2>
              Terapias e avaliações{" "}
              <span className="text-blue">para a sua família</span>
            </h2>
          </div>
          <p>
            Conheça nossos atendimentos em Mogi Guaçu e encontre apoio para o
            desenvolvimento, a comunicação e o bem-estar emocional.
          </p>
        </Reveal>
        <p className="services-mobile-hint">
          Toque em uma especialidade para conhecer o atendimento.
        </p>
        <div className="services-grid">
          {CLINIC_SERVICES.map((service, index) => {
            const Icon = icons[index];
            const expanded = open === service.id;
            const visible = !compact || expanded;
            return (
              <Reveal
                key={service.id}
                className={`service-card tone-${index % 4} ${expanded ? "is-open" : ""}`}
                delay={(index % 3) * 0.04}
              >
                <article id={service.id} className="service-article">
                  {service.id === "aba" && (
                    <span
                      id="intervencao-aba"
                      className="anchor-alias"
                      aria-hidden="true"
                    />
                  )}
                  {service.id === "psicologia" && (
                    <span
                      id="psicoterapia"
                      className="anchor-alias"
                      aria-hidden="true"
                    />
                  )}
                  <h3>
                    <button
                      className="service-toggle"
                      id={`${service.id}-toggle`}
                      aria-expanded={compact ? expanded : undefined}
                      aria-controls={
                        compact ? `${service.id}-panel` : undefined
                      }
                      onClick={() =>
                        compact
                          ? setOpen(open === service.id ? null : service.id)
                          : onSelectService(service)
                      }
                    >
                      <span className="service-icon">
                        <Icon size={23} strokeWidth={1.5} />
                      </span>
                      <span className="service-title">{service.title}</span>
                      <Plus
                        size={18}
                        className="service-toggle-indicator"
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    className="service-panel"
                    id={`${service.id}-panel`}
                    aria-hidden={!visible}
                    inert={!visible}
                  >
                    <div className="service-panel-inner">
                      <p className="service-summary">
                        {SERVICE_SEARCH_CONTENT[service.id]?.summary ||
                          service.description}
                      </p>
                      <button
                        className="service-more"
                        onClick={() => onSelectService(service)}
                        aria-label={`Ver detalhes de ${service.title}`}
                      >
                        Ver como funciona <ArrowUpRight size={18} />
                      </button>
                      <WhatsAppLink
                        className="service-mobile-cta"
                        message={`Olá! Gostaria de informações e de agendar uma avaliação para ${service.title} na Clínica Nosso Lar.`}
                      >
                        Agendar uma avaliação
                      </WhatsAppLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="service-help">
          <div>
            <span className="service-help-icon">
              <HeartHandshake size={25} />
            </span>
            <div>
              <h3>Conte com a nossa equipe para saber por onde começar</h3>
              <p>
                Converse com a gente sobre suas dúvidas e as necessidades da sua
                família.
              </p>
            </div>
          </div>
          <WhatsAppLink>Quero uma orientação</WhatsAppLink>
        </Reveal>
      </div>
    </section>
  );
}
