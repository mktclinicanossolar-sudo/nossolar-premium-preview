import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { CLINIC_FAQS } from "../data/clinicContent";
import { Eyebrow, Reveal, WhatsAppLink } from "./ui";
export function FaqSection() {
  const [open, setOpen] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const filtered = CLINIC_FAQS.filter((f) =>
    normalize(`${f.question} ${f.answer}`).includes(normalize(search)),
  );
  return (
    <section id="faq" className="section faq-section">
      <div className="wrap faq-layout">
        <Reveal className="faq-intro">
          <Eyebrow>ESTAMOS AQUI PARA ORIENTAR</Eyebrow>
          <h2>Tire suas dúvidas sobre os atendimentos</h2>
          <p>
            Encontre respostas sobre avaliações, atendimento e a participação da
            família.
          </p>
          <div className="faq-help">
            <h3>Podemos ajudar você a dar o primeiro passo</h3>
            <p>
              Fale com nossa equipe para entender os atendimentos e como agendar
              uma avaliação.
            </p>
            <WhatsAppLink>Quero tirar uma dúvida</WhatsAppLink>
          </div>
        </Reveal>
        <Reveal className="faq-content">
          <label className="faq-search">
            <Search size={18} />
            <span className="sr-only">Pesquisar dúvidas frequentes</span>
            <input
              type="search"
              placeholder="Qual é a sua dúvida?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <p className="sr-only" role="status">
            {filtered.length} perguntas encontradas.
          </p>
          <div className="faq-list">
            {filtered.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${open === faq.id ? "is-open" : ""}`}
              >
                <h3>
                  <button
                    onClick={() => setOpen(open === faq.id ? null : faq.id)}
                    aria-expanded={open === faq.id}
                    aria-controls={`${faq.id}-answer`}
                    id={`${faq.id}-button`}
                  >
                    <span>{faq.question}</span>
                    <Plus size={19} />
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={`${faq.id}-answer`}
                  role="region"
                  aria-labelledby={`${faq.id}-button`}
                  hidden={open !== faq.id}
                >
                  {faq.answer.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="faq-empty">
              <h3>Vamos encontrar essa resposta juntos.</h3>
              <p>Tente outra palavra ou converse com a nossa equipe.</p>
              <WhatsAppLink>Enviar minha dúvida</WhatsAppLink>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
