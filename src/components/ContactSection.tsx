import {
  ArrowUpRight,
  Clock,
  MapPin,
  Phone,
  HeartHandshake,
} from "lucide-react";
import { Eyebrow, Reveal, WhatsAppLink } from "./ui";
import { CLINIC_LOCATIONS as units } from "../data/clinicLocations";
export function ContactSection() {
  return (
    <section id="contato" className="section contact-section">
      <span id="contact" className="anchor-alias" aria-hidden="true" />
      <div id="unidades" className="wrap">
        <Reveal className="section-heading split-heading">
          <div>
            <Eyebrow>PERTO DE VOCÊ</Eyebrow>
            <h2>
              Encontre a Nosso Lar{" "}
              <span className="text-blue">em Mogi Guaçu</span>
            </h2>
          </div>
          <p>
            Estamos na Chácara do Ouro e no Jardim Planalto Verde. Veja qual
            unidade fica mais perto de você e fale com nossa equipe para agendar
            seu atendimento.
          </p>
        </Reveal>
        <div className="units-grid">
          {units.map((unit, index) => (
            <Reveal key={unit.name} className="unit-card" delay={index * 0.06}>
              <div className="unit-info">
                <div className="unit-title">
                  <span className="unit-number">0{index + 1}</span>
                  <div>
                    <span>UNIDADE {index + 1}</span>
                    <h3>{unit.name}</h3>
                  </div>
                  <MapPin size={25} strokeWidth={1.4} />
                </div>
                <p className="unit-address">{unit.address}</p>
                <div className="unit-details">
                  <span>
                    <Phone size={16} />
                    <a href="tel:+5519988930792">(19) 98893-0792</a> ·{" "}
                    <a href="tel:+551938416090">(19) 3841-6090</a>
                  </span>
                  <span>
                    <Clock size={16} />
                    Seg a sex: 07h às 18h · Sáb: 08h às 11h
                  </span>
                </div>
              </div>
              <iframe
                className="unit-map"
                src={unit.embedUrl}
                title={`Localização da unidade ${unit.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="unit-actions">
                <WhatsAppLink
                  message={`Olá! Gostaria de atendimento para a Unidade ${index + 1}, ${unit.name}, da Clínica Nosso Lar.`}
                >
                  Falar com a unidade
                </WhatsAppLink>
                <a
                  className="text-link"
                  href={unit.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Como chegar
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="closing-cta">
          <span className="closing-icon">
            <HeartHandshake size={33} strokeWidth={1.3} />
          </span>
          <Eyebrow>O PRIMEIRO PASSO PODE SER UMA CONVERSA</Eyebrow>
          <h2>Estamos aqui para ajudar você a começar</h2>
          <p>
            Conte para nossa equipe o que você procura. Vamos orientar sobre os
            atendimentos e o agendamento de uma avaliação para você ou alguém da
            sua família.
          </p>
          <WhatsAppLink message="Olá! Gostaria de conversar sobre os atendimentos na Clínica Nosso Lar.">
            Quero agendar uma avaliação
          </WhatsAppLink>
          <span className="closing-note">
            Acolhimento desde o primeiro contato.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
