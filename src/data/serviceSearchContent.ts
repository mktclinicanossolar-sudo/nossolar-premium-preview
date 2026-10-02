// Descriptions are visible in the service cards; aliases describe actual services.
export const SERVICE_SEARCH_CONTENT: Record<
  string,
  { summary: string; aliases: string[] }
> = {
  psicologia: {
    summary:
      "Psicologia e psicoterapia infantil para ajudar a criança a compreender emoções, fortalecer vínculos e lidar com os desafios do dia a dia.",
    aliases: ["Psicologia infantil", "Psicoterapia infantil"],
  },
  psicopedagogia: {
    summary:
      "Apoio às dificuldades de aprendizagem com estratégias que respeitam a forma de aprender de cada criança, em parceria com a escola e a família.",
    aliases: [
      "Psicopedagogia infantil",
      "Acompanhamento das dificuldades de aprendizagem",
    ],
  },
  musicoterapia: {
    summary:
      "A música como recurso terapêutico para estimular a expressão, a comunicação e a interação, respeitando as necessidades de cada criança.",
    aliases: ["Musicoterapia infantil"],
  },
  aba: {
    summary:
      "Terapia ABA para pessoas com autismo (TEA), com um plano individualizado para desenvolver comunicação, autonomia e habilidades que fazem parte da rotina.",
    aliases: [
      "Terapia ABA",
      "Análise do Comportamento Aplicada",
      "Intervenção comportamental para autismo",
    ],
  },
  "acolhimento-pais": {
    summary:
      "Orientação familiar e suporte emocional para pais e responsáveis compreenderem as necessidades dos filhos e participarem do cuidado com mais segurança.",
    aliases: ["Orientação de pais", "Orientação familiar"],
  },
  "terapia-ocupacional": {
    summary:
      "Terapia ocupacional infantil e integração sensorial para apoiar o desenvolvimento motor e a participação no brincar, na escola e nas atividades do dia a dia.",
    aliases: [
      "Terapia ocupacional infantil",
      "Integração sensorial",
      "TO infantil",
    ],
  },
  fonoaudiologia: {
    summary:
      "Fonoaudiologia infantil para avaliar dificuldades de fala e linguagem e ajudar a criança a se comunicar com mais autonomia em casa, na escola e nas relações.",
    aliases: ["Fonoaudiologia infantil", "Avaliação da fala e linguagem"],
  },
  "avaliacao-multidisciplinar": {
    summary:
      "Avaliação do desenvolvimento infantil por diferentes profissionais para compreender as necessidades de cada pessoa e orientar um plano de cuidado integrado.",
    aliases: [
      "Avaliação do desenvolvimento infantil",
      "Avaliação interdisciplinar",
    ],
  },
  neuropsicologia: {
    summary:
      "Avaliação neuropsicológica para compreender atenção, memória, aprendizagem e comportamento, apoiando a investigação de TEA, TDAH e dificuldades cognitivas.",
    aliases: ["Avaliação neuropsicológica", "Avaliação cognitiva"],
  },
  fisioterapia: {
    summary:
      "Fisioterapia infantil com estímulos ao desenvolvimento motor, ao equilíbrio e à coordenação para favorecer a mobilidade e a participação na rotina.",
    aliases: [
      "Fisioterapia infantil",
      "Estimulação motora precoce",
      "Reabilitação motora",
    ],
  },
};
