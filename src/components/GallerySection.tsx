import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { CLINIC_GALLERY, type GalleryItem } from "../data/galleryData";
import { Eyebrow, Reveal, Modal, WhatsAppLink } from "./ui";
const items = CLINIC_GALLERY;
export function GallerySection() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const photos = items.filter((item) => item.type === "photo");
  const move = (direction: number) => {
    if (!selected) return;
    const index = photos.findIndex((item) => item.id === selected.id);
    setSelected(photos[(index + direction + photos.length) % photos.length]);
  };
  return (
    <section id="gallery" className="section gallery-section">
      <div className="wrap">
        <Reveal className="section-heading split-heading">
          <div>
            <Eyebrow>NOSSOS AMBIENTES</Eyebrow>
            <h2>
              Conheça os espaços preparados{" "}
              <span className="text-blue">para receber sua família</span>
            </h2>
          </div>
          <p>
            Veja as salas de atendimento, os recursos terapêuticos e os
            ambientes da Clínica Nosso Lar antes da sua visita.
          </p>
        </Reveal>
        <div className="gallery-grid">
          {items.map((item, index) => (
            <Reveal
              key={item.id}
              className={`gallery-item ${index === 0 && item.type === "photo" ? "gallery-featured" : ""}`}
              delay={(index % 3) * 0.04}
            >
              <button
                className={`gallery-card ${item.type === "video" ? "gallery-tour" : ""}`}
                onClick={() => setSelected(item)}
                aria-label={
                  item.type === "video"
                    ? `Assistir: ${item.title}`
                    : `Ampliar: ${item.title}`
                }
              >
                <img
                  src={item.image}
                  alt={item.type === "photo" ? item.title : ""}
                  loading="lazy"
                  onError={(e) => {
                    if (item.fallbackImage) {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = item.fallbackImage;
                    }
                  }}
                />
                {item.type === "video" && (
                  <span className="gallery-play" aria-hidden="true">
                    <Play size={22} fill="currentColor" />
                  </span>
                )}
              </button>
            </Reveal>
          ))}
          <Reveal className="gallery-visit">
            <span className="brand-dots" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <h3>Conheça a clínica antes de iniciar o atendimento</h3>
            <p>
              Converse com nossa equipe para combinar uma visita e tirar suas
              dúvidas sobre os atendimentos.
            </p>
            <WhatsAppLink message="Olá! Gostaria de saber como posso conhecer a estrutura da Clínica Nosso Lar.">
              Quero conhecer a clínica
            </WhatsAppLink>
          </Reveal>
        </div>
      </div>
      {selected && (
        <Modal
          labelId="gallery-modal-title"
          onClose={() => setSelected(null)}
          className={`gallery-modal ${selected.type === "video" ? "portrait-video-modal" : ""}`}
        >
          <div className="gallery-modal-media">
            {selected.type === "video" ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/xtrijgAE51U?autoplay=1&rel=0"
                title={selected.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <img src={selected.image} alt={selected.title} />
            )}
          </div>
          <div className="gallery-modal-footer">
            <h2 id="gallery-modal-title" className="sr-only">
              {selected.title}
            </h2>
            {selected.type === "photo" && (
              <div className="gallery-modal-controls">
                <button
                  className="icon-button"
                  aria-label="Foto anterior"
                  onClick={() => move(-1)}
                >
                  <ChevronLeft size={21} />
                </button>
                <button
                  className="icon-button"
                  aria-label="Próxima foto"
                  onClick={() => move(1)}
                >
                  <ChevronRight size={21} />
                </button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}
