import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section id="video-section" className="section video-section">
      <div className="wrap">
        <Reveal className="section-heading split-heading">
          <div>
            <Eyebrow light>CONHEÇA DE PERTO</Eyebrow>
            <h2>Conheça de perto o cuidado da Clínica Nosso Lar</h2>
          </div>
          <div className="video-intro">
            <p>
              Assista ao vídeo e conheça um pouco da nossa clínica, da equipe e
              dos atendimentos que oferecemos em Mogi Guaçu.
            </p>
            <a
              className="text-link"
              href="https://www.youtube.com/watch?v=0BlaeAf2BdA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assistir no YouTube
              <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="video-frame">
            {playing ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/0BlaeAf2BdA?autoplay=1&rel=0"
                title="Vídeo institucional da Clínica Nosso Lar"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <button
                className="video-poster"
                onClick={() => setPlaying(true)}
                aria-label="Assistir ao vídeo da Clínica Nosso Lar"
              >
                <img
                  src="/video-thumb.jpg"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://img.youtube.com/vi/0BlaeAf2BdA/hqdefault.jpg";
                  }}
                  alt="Clínica Nosso Lar no programa da Record — thumbnail original do vídeo institucional"
                  loading="lazy"
                  width="1920"
                  height="1080"
                />
                <div className="video-poster-shade" />
                <span className="video-play">
                  <Play size={28} fill="currentColor" />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
