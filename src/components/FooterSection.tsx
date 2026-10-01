import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
export function FooterSection({
  onOpenCareers,
}: {
  onOpenCareers: () => void;
}) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Clínica Nosso Lar — início">
              <Logo className="footer-logo" />
            </a>
            <p>
              Cuidado especializado para o autismo e o desenvolvimento, com
              respeito a cada pessoa.
            </p>
            <span>Mogi Guaçu · São Paulo</span>
          </div>
          <div>
            <h3>Conheça a Nosso Lar</h3>
            <a href="#nossa-historia">Nossa história</a>
            <a href="#servicos">Especialidades</a>
            <a href="#gallery">Nossos espaços</a>
            <a href="#faq">Dúvidas frequentes</a>
          </div>
          <div>
            <h3>Fale com a nossa equipe</h3>
            <a href="#contato">Unidades e contato</a>
            <a href="tel:+5519988930792">(19) 98893-0792</a>
            <a href="tel:+551938416090">(19) 3841-6090</a>
            <button className="text-link" onClick={onOpenCareers}>
              Trabalhe conosco
              <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="footer-values">
            <h3>Nosso compromisso</h3>
            <p>
              <i />
              Cuidado ético e individualizado
            </p>
            <p>
              <i />
              Práticas baseadas em evidências
            </p>
            <p>
              <i />
              Parceria com as famílias
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Clínica Comportamental Nosso Lar. Todos
            os direitos reservados.
          </p>
          <a href="#inicio">
            Voltar ao início
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
