export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  title: string;
  subtitle: string;
  image: string;
  fallbackImage?: string;
}
// Original clinic photos, matched to their visible content.
export const CLINIC_GALLERY: GalleryItem[] = [
  {
    id: "g-piscina",
    type: "photo",
    title: "Piscina de Bolinhas Terapêutica",
    subtitle: "Espaço para estimulação sensorial e momentos de brincadeira.",
    image: "/gallery/WhatsApp Image 2026-08-13 at 20.08.10.jpeg",
  },
  {
    id: "g-video",
    type: "video",
    title: "Conheça a Clínica Nosso Lar",
    subtitle:
      "Faça um tour em vídeo pelos nossos ambientes e conheça o acolhimento da nossa equipe.",
    image: "https://img.youtube.com/vi/xtrijgAE51U/hqdefault.jpg",
    fallbackImage: "/hero/espaco-sensorial.webp",
  },
  {
    id: "g-sensorial",
    type: "photo",
    title: "Sala de Integração Sensorial",
    subtitle:
      "Balanços, tatames, rampa e equipamentos para o cuidado terapêutico.",
    image: "/gallery/psicina de bolinha.jpg",
  },
  {
    id: "g-recepcao",
    type: "photo",
    title: "Recepção e Sala de Espera",
    subtitle: "Um ambiente de acolhimento para as famílias antes das sessões.",
    image: "/gallery/recepção 2.jpg",
  },
  {
    id: "g-reuniao",
    type: "photo",
    title: "Sala de Reunião e Orientação Familiar",
    subtitle:
      "Espaço reservado para escuta, orientação e parceria com as famílias.",
    image: "/gallery/Reunião.jpg",
  },
  {
    id: "g-fachada",
    type: "photo",
    title: "Fachada e Entrada da Clínica",
    subtitle: "Conheça a fachada das nossas unidades em Mogi Guaçu.",
    image: "/gallery/WhatsApp Image 2026-08-13 at 20.08.10 (2).jpeg",
  },
  {
    id: "g-recursos",
    type: "photo",
    title: "Sala de Recursos e Jogos Lúdicos",
    subtitle:
      "Brinquedos e recursos pedagógicos para desenvolver habilidades e autonomia.",
    image: "/gallery/top.jpg",
  },
];
