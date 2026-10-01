import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight, Quote } from "lucide-react";
import { CLINIC_REVIEWS } from "../data/clinicContent";
import { Eyebrow, Reveal } from "./ui";
export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const review = CLINIC_REVIEWS[index];
  return (
    <section className="section reviews-section">
      <div className="wrap reviews-layout">
        <Reveal className="reviews-intro">
          <Eyebrow>CONFIANÇA QUE SE CONSTRÓI</Eyebrow>
          <h2>Veja o que as famílias contam sobre a Nosso Lar</h2>
          <p>
            Conheça os relatos publicados por quem já teve contato com o cuidado
            da nossa equipe.
          </p>
          <a
            className="text-link"
            href="https://maps.app.goo.gl/VEzUF7Q6YXXYVFST7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deixe a sua avaliação
            <ArrowUpRight size={17} />
          </a>
          <div className="review-navigation">
            <button
              className="icon-button"
              aria-label="Avaliação anterior"
              onClick={() =>
                setIndex(
                  (index - 1 + CLINIC_REVIEWS.length) % CLINIC_REVIEWS.length,
                )
              }
            >
              <ChevronLeft size={20} />
            </button>
            <span>
              {String(index + 1).padStart(2, "0")}
              <span> / {CLINIC_REVIEWS.length}</span>
            </span>
            <button
              className="icon-button"
              aria-label="Próxima avaliação"
              onClick={() => setIndex((index + 1) % CLINIC_REVIEWS.length)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>
        <Reveal className="review-card">
          <Quote
            size={40}
            strokeWidth={1}
            className="quote-icon"
            aria-hidden="true"
          />
          <div aria-live="polite" aria-atomic="true">
            <blockquote key={review.id}>“{review.quote}”</blockquote>
            <div className="review-author">
              <span className="review-avatar">
                {review.author
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </span>
              <div>
                <strong>{review.author}</strong>
                <span>Avaliação publicada</span>
              </div>
            </div>
          </div>
          <span className="review-decoration" aria-hidden="true">
            ”
          </span>
        </Reveal>
      </div>
    </section>
  );
}
