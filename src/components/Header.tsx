import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppLink } from "./ui";
const links = [
  { name: "Especialidades", href: "#servicos" },
  { name: "Nossa história", href: "#nossa-historia" },
  { name: "Nossos espaços", href: "#gallery" },
  { name: "Dúvidas", href: "#faq" },
  { name: "Unidades", href: "#contato" },
];
export function Header({ onOpenCareers }: { onOpenCareers: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 50);
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" && ref.current?.contains(document.activeElement)) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);
  return (
    <header
      ref={ref}
      className={`floating-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}
    >
      <div className="header-bar">
        <a
          href="#inicio"
          aria-label="Clínica Nosso Lar — início"
          onClick={() => setOpen(false)}
          className="header-logo"
        >
          <Logo className="brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
        <WhatsAppLink
          className="header-cta"
          message="Olá! Gostaria de agendar uma avaliação na Clínica Nosso Lar."
        >
          Agendar avaliação
        </WhatsAppLink>
        <button
          ref={toggleRef}
          className="icon-button menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegação do celular"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.name}
              <ArrowUpRight size={17} />
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onOpenCareers();
            }}
          >
            Trabalhe conosco
            <ArrowUpRight size={17} />
          </button>
          <WhatsAppLink message="Olá! Gostaria de agendar uma avaliação na Clínica Nosso Lar.">
            Agendar avaliação
          </WhatsAppLink>
        </nav>
      )}
    </header>
  );
}
