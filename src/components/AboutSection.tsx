import { Eyebrow, Reveal } from "./ui";
import logoStory from "../assets/images/regenerated_image_1786057452246.png";

export function AboutSection() {
  return (
    <section id="nossa-historia" className="section about-section">
      <div className="wrap">
        <Reveal className="section-heading split-heading">
          <div>
            <Eyebrow>SOBRE A NOSSO LAR</Eyebrow>
            <h2>
              Conheça a história da{" "}
              <span className="text-blue">Clínica Nosso Lar</span>
            </h2>
          </div>
          <p>
            A nossa história começou com a vontade de oferecer às famílias um
            cuidado em que pudessem confiar, com escuta, responsabilidade e
            respeito a cada pessoa.
          </p>
        </Reveal>
        <Reveal>
          <figure className="history-image">
            <picture>
              <source
                media="(max-width:640px)"
                srcSet="/nossa-historia-mobile.jpg"
                width="1080"
                height="1350"
              />
              <img
                src="/nossa-historia.jpg"
                alt="Nossa história: a Nosso Lar nasceu da trajetória de sua idealizadora, com mais de dez anos de atuação, reunindo uma equipe multidisciplinar em um cuidado ético, responsável e individualizado."
                loading="lazy"
                width="1920"
                height="1080"
              />
            </picture>
          </figure>
        </Reveal>
        <Reveal className="brand-story-wrap">
          <details className="brand-story">
            <summary>
              <span>Entenda o significado da nossa logo</span>
              <span className="brand-story-action">
                Conheça os símbolos <span aria-hidden="true">+</span>
              </span>
            </summary>
            <picture>
              <source media="(max-width:640px)" srcSet="/banner-mobile.png" />
              <img
                src={logoStory}
                alt="O significado da nossa logo: a letra a representa o autismo e o acolhimento; o laço simboliza respeito e inclusão; o sorriso representa a alegria das conquistas infantis."
                loading="lazy"
                width="1920"
                height="1080"
              />
            </picture>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
