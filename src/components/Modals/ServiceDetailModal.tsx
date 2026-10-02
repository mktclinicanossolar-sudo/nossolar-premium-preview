import { Check } from "lucide-react";
import type { ServiceItem } from "../../types";
import { Modal, Eyebrow, WhatsAppLink } from "../ui";
export function ServiceDetailModal({
  service,
  onClose,
}: {
  service: ServiceItem | null;
  onClose: () => void;
}) {
  if (!service) return null;
  return (
    <Modal labelId="service-title" onClose={onClose}>
      <Eyebrow>NOSSAS ESPECIALIDADES</Eyebrow>
      <h2 id="service-title">{service.title}</h2>
      <p className="modal-subtitle">{service.subtitle}</p>
      <div className="modal-copy">
        <h3>O que é</h3>
        <p>{service.whatIs || service.description}</p>
        <h3>Como funciona na prática</h3>
        <p>{service.whatDoes}</p>
        <ul className="feature-list">
          {service.features.map((feature) => (
            <li key={feature}>
              <Check size={16} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <WhatsAppLink
        message={`Olá! Gostaria de mais informações e de verificar a disponibilidade de atendimento para ${service.title}.`}
      >
        Conversar sobre {service.title}
      </WhatsAppLink>
    </Modal>
  );
}
