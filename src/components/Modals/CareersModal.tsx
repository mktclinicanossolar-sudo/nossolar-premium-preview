import { useState } from "react";
import { Check, MapPin, Mail } from "lucide-react";
import { jobsData } from "../../data/jobsData";
import { Modal, Eyebrow, WhatsAppLink } from "../ui";
export function CareersModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [filter, setFilter] = useState("Todas");
  if (!isOpen) return null;
  const jobs = jobsData.filter(
    (job) => filter === "Todas" || job.location.includes(filter),
  );
  return (
    <Modal labelId="careers-title" onClose={onClose} className="careers-modal">
      <Eyebrow>FAÇA PARTE DO NOSSO CUIDADO</Eyebrow>
      <h2 id="careers-title">Trabalhe conosco</h2>
      <p className="modal-subtitle">
        Conheça as oportunidades e converse com nossa equipe de recrutamento.
      </p>
      <div className="filter-list">
        {["Todas", "Mogi Guaçu", "Mogi Mirim"].map((value) => (
          <button
            className={`filter-chip ${value === filter ? "is-active" : ""}`}
            aria-pressed={value === filter}
            key={value}
            onClick={() => setFilter(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="jobs-list">
        {jobs.map((job) => (
          <article key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="job-location">
              <MapPin size={14} />
              {job.location} · {job.contractType}
            </p>
            <p>{job.availability}</p>
            <ul>
              {[...job.requirements, ...(job.differentials || [])].map(
                (requirement) => (
                  <li key={requirement}>
                    <Check size={15} />
                    {requirement}
                  </li>
                ),
              )}
            </ul>
            <WhatsAppLink phone="5519953314342" message={job.whatsappMessage}>
              Candidatar pelo WhatsApp
            </WhatsAppLink>
          </article>
        ))}
      </div>
      <a
        className="careers-email text-link"
        href="mailto:clinicanossolarlideranca@gmail.com"
      >
        <Mail size={17} />
        Enviar currículo por e-mail
      </a>
    </Modal>
  );
}
