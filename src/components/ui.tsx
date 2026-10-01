import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

export const whatsappUrl = (
  message = "Olá! Gostaria de mais informações sobre os atendimentos na Clínica Nosso Lar.",
  phone = "5519988930792",
) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.8a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 7.8c.3-.3.7-.3.9.1l.8 1.6c.1.3 0 .5-.3.8l-.5.5c.5 1.3 1.5 2.3 2.8 2.9l.6-.7c.2-.2.5-.3.8-.1l1.5.8c.4.2.4.6.2.9-.5.8-1.1 1.1-2 1-2.5-.4-5.6-3.4-6-5.9-.1-.8.3-1.5 1.2-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function WhatsAppLink({
  children = "Fale com a nossa equipe",
  message,
  phone,
  className = "",
}: {
  children?: ReactNode;
  message?: string;
  phone?: string;
  className?: string;
}) {
  return (
    <a
      className={`button button-whatsapp ${className}`}
      href={whatsappUrl(message, phone)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      <span>{children}</span>
      <ArrowUpRight size={17} className="button-arrow" aria-hidden="true" />
    </a>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span className="brand-dots" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      {children}
    </p>
  );
}
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced || !("IntersectionObserver" in window)) return;
    // Static HTML stays readable. Only offscreen blocks animate after hydration.
    if (element.getBoundingClientRect().top < window.innerHeight - 24) return;
    setVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced]);
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
      transition={{
        duration: reduced ? 0 : 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
// Native dialogs trap focus, handle Escape and restore the trigger's focus.
export function Modal({
  children,
  labelId,
  onClose,
  className = "",
}: {
  children: ReactNode;
  labelId: string;
  onClose: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const oldOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = oldOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-labelledby={labelId}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-inner">
        <button
          className="icon-button modal-close"
          onClick={onClose}
          aria-label="Fechar janela"
          autoFocus
        >
          <X size={21} />
        </button>
        {children}
      </div>
    </dialog>
  );
}
