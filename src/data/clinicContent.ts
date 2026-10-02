import type { ServiceItem, FAQItem } from "../types";
import { CLINIC_LOCATIONS } from "./clinicLocations";

// Preserved from the published clinic website, October 1, 2026.
export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: "psicologia",
    title: "Psicoterapia",
    subtitle: "Atendimento Clínico & Emocional",
    description:
      "Um espaço de escuta e cuidado emocional conduzido por um psicólogo. Voltada para compreender comportamentos, emoções e dificuldades que impactam a qualidade de vida.",
    whatIs:
      "Um espaço de escuta e cuidado emocional conduzido por um psicólogo. Voltada para compreender comportamentos, emoções e dificuldades que impactam a qualidade de vida.",
    whatDoes:
      "Ajuda a criança a identificar e expressar o que sente, desenvolver habilidades emocionais e lidar melhor com situações do cotidiano. Trabalha ansiedade, medos, dificuldades de relacionamento e questões comportamentais. Oferece um ambiente seguro para que o desenvolvimento emocional aconteça com suporte profissional.",
    iconName: "Brain",
    category: "Psicologia",
    features: [
      "Expressão emocional",
      "Gestão de ansiedade e medos",
      "Habilidades sociais",
      "Suporte profissional contínuo",
    ],
    duration: "Sessões Semanais",
    code: "PSICO-01",
  },
  {
    id: "psicopedagogia",
    title: "Psicopedagogia",
    subtitle: "Investigação & Aprendizagem",
    description:
      "Uma área que investiga e intervém nas dificuldades de aprendizagem, entendendo como cada criança aprende e o que pode estar impedindo esse processo.",
    whatIs:
      "Uma área que investiga e intervém nas dificuldades de aprendizagem, entendendo como cada criança aprende e o que pode estar impedindo esse processo.",
    whatDoes:
      "Avalia o perfil de aprendizagem da criança e identifica barreiras como dislexia, dificuldade de atenção e atrasos no desenvolvimento escolar. Desenvolve estratégias personalizadas para tornar o aprendizado mais acessível e eficiente. Trabalha em parceria com a escola e a família para garantir continuidade fora do consultório.",
    iconName: "Sparkles",
    category: "Aprendizagem",
    features: [
      "Perfil de aprendizagem",
      "Identificação de barreiras",
      "Estratégias personalizadas",
      "Parceria escola e família",
    ],
    duration: "Sessões Individuais",
    code: "PEDAG-02",
  },
  {
    id: "musicoterapia",
    title: "Musicoterapia",
    subtitle: "Estímulo Sonoro & Expressão",
    description:
      "Uma terapia que utiliza a música e os elementos sonoros como ferramentas clínicas para promover saúde, comunicação e desenvolvimento.",
    whatIs:
      "Uma terapia que utiliza a música e os elementos sonoros como ferramentas clínicas para promover saúde, comunicação e desenvolvimento.",
    whatDoes:
      "Estimula a linguagem, a atenção e a interação social por meio do ritmo, da melodia e da expressão musical. Contribui para a regulação emocional e o desenvolvimento sensorial, especialmente em crianças com TEA. Cria um ambiente lúdico e acolhedor onde a criança se expressa mesmo quando as palavras ainda não chegaram.",
    iconName: "Activity",
    category: "Expressão",
    features: [
      "Estimulação da linguagem",
      "Regulação sensorial",
      "Expressão não-verbal",
      "Interação rítmica e lúdica",
    ],
    duration: "Sessões Clínicas",
    code: "MUSIC-03",
  },
  {
    id: "aba",
    title: "Intervenção ABA",
    subtitle: "Análise do Comportamento Aplicada",
    description:
      "A Análise do Comportamento Aplicada é uma abordagem cientificamente validada que estuda e modifica comportamentos por meio de estratégias estruturadas e individualizadas.",
    whatIs:
      "A Análise do Comportamento Aplicada é uma abordagem cientificamente validada que estuda e modifica comportamentos por meio de estratégias estruturadas e individualizadas.",
    whatDoes:
      "Desenvolve habilidades de comunicação, socialização, autonomia e aprendizado com base em metas individuais. O plano considera as necessidades da pessoa e da família, com estratégias para apoiar a participação na rotina e acompanhar o desenvolvimento de novas habilidades.",
    iconName: "HeartPulse",
    category: "Comportamento",
    features: [
      "Metas individualizadas",
      "Evidência científica comprovada",
      "Autonomia e socialização",
      "Ampliação de repertório",
    ],
    duration: "Plano Intensivo",
    code: "ABA-04",
  },
  {
    id: "acolhimento-pais",
    title: "Acolhimento de Pais",
    subtitle: "Suporte & Orientação Familiar",
    description:
      "Um espaço dedicado exclusivamente às famílias, onde pais e responsáveis recebem orientação, suporte emocional e ferramentas para o dia a dia.",
    whatIs:
      "Um espaço dedicado exclusivamente às famílias, onde pais e responsáveis recebem orientação, suporte emocional e ferramentas para o dia a dia.",
    whatDoes:
      "Auxilia as famílias a compreender o diagnóstico e as necessidades específicas de seus filhos de forma clara e humanizada. Oferece orientações práticas para lidar com situações desafiadoras em casa, na escola e nos espaços sociais. Fortalece o vínculo familiar e prepara os pais para serem parceiros ativos no processo terapêutico.",
    iconName: "Baby",
    category: "Família",
    features: [
      "Suporte emocional aos pais",
      "Orientação pós-diagnóstico",
      "Estratégias para o cotidiano",
      "Fortalecimento do vínculo",
    ],
    duration: "Encontros Periódicos",
    code: "PAIS-05",
  },
  {
    id: "terapia-ocupacional",
    title: "Terapia Ocupacional",
    subtitle: "Autonomia & Integração Sensorial",
    description:
      "Uma especialidade que avalia e trata dificuldades relacionadas às atividades do cotidiano, ao processamento sensorial e ao desenvolvimento motor.",
    whatIs:
      "Uma especialidade que avalia e trata dificuldades relacionadas às atividades do cotidiano, ao processamento sensorial e ao desenvolvimento motor.",
    whatDoes:
      "Trabalha habilidades como se vestir, usar talheres, escrever e participar de rotinas que exigem coordenação e organização do comportamento. Identifica e trata hipersensibilidades sensoriais que causam desconforto e interferem na participação da criança em ambientes do dia a dia. Amplia a autonomia e a funcionalidade da criança para que ela navegue o mundo com mais segurança e independência.",
    iconName: "Stethoscope",
    category: "Sensorial & Motor",
    features: [
      "Atividades da vida diária",
      "Processamento sensorial",
      "Coordenação motora",
      "Desenvolvimento da autonomia",
    ],
    duration: "Sessões Práticas",
    code: "TO-06",
  },
  {
    id: "fonoaudiologia",
    title: "Fonoaudiologia",
    subtitle: "Linguagem & Comunicação",
    description:
      "A ciência que estuda, avalia e trata as funções relacionadas à comunicação humana, incluindo fala, linguagem, voz e deglutição.",
    whatIs:
      "A ciência que estuda, avalia e trata as funções relacionadas à comunicação humana, incluindo fala, linguagem, voz e deglutição.",
    whatDoes:
      "Estimula o desenvolvimento da linguagem oral e escrita, trabalhando desde os primeiros sons até a construção de frases e conversas funcionais. Atua em dificuldades como atraso de fala, gagueira, dificuldades de leitura e processamento auditivo. Contribui diretamente para que a criança se comunique com mais clareza, confiança e autonomia no ambiente familiar e social.",
    iconName: "Activity",
    category: "Comunicação",
    features: [
      "Estimulação da fala",
      "Construção de frases",
      "Processamento auditivo",
      "Clareza e confiança",
    ],
    duration: "Sessões Especializadas",
    code: "FONO-07",
  },
  {
    id: "avaliacao-multidisciplinar",
    title: "Avaliação Multidisciplinar",
    subtitle: "Diagnóstico & Plano Integrado",
    description:
      "Mapeamento integral e contínuo do desenvolvimento global infantil conduzido por equipe clínica multidisciplinar especializada.",
    whatIs:
      "Um mapeamento integral e contínuo do desenvolvimento global infantil conduzido por equipe clínica multidisciplinar especializada.",
    whatDoes:
      "Alinha os objetivos de cada especialidade terapêutica em um plano terapêutico singular e integrado. Acompanha a evolução da criança de forma holística, garantindo suporte completo para todos os marcos do neurodesenvolvimento infantil.",
    iconName: "Brain",
    category: "Diagnóstico",
    features: [
      "Plano terapêutico singular",
      "Equipe multidisciplinar",
      "Mapeamento do neurodesenvolvimento",
      "Acompanhamento holístico",
    ],
    duration: "Avaliação Inicial",
    code: "AVAL-08",
  },
  {
    id: "neuropsicologia",
    title: "Neuropsicologia",
    subtitle: "Avaliação Cognitiva & Funções Executivas",
    description:
      "Área da psicologia que investiga as relações entre o cérebro, a cognição e o comportamento, avaliando funções como atenção, memória, raciocínio e funções executivas.",
    whatIs:
      "Área da psicologia que investiga as relações entre o funcionamento cerebral, a cognição e o comportamento, compreendendo como o desenvolvimento neurológico impacta a aprendizagem e as emoções.",
    whatDoes:
      "Realiza a avaliação neuropsicológica abrangente para identificar potencialidades e dificuldades cognitivas, auxiliando no diagnóstico diferencial (como TDAH, TEA e dificuldades de aprendizagem) e orientando intervenções e adaptações escolares personalizadas.",
    iconName: "Brain",
    category: "Cognição",
    features: [
      "Avaliação neuropsicológica",
      "Mapeamento cognitivo",
      "Funções executivas e memória",
      "Diagnóstico diferencial",
    ],
    duration: "Processo de Avaliação",
    code: "NEURO-09",
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    subtitle: "Desenvolvimento Motor & Reabilitação Funcional",
    description:
      "Especialidade voltada para o desenvolvimento motor, fortalecimento muscular, equilíbrio, postura e coordenação dos movimentos.",
    whatIs:
      "Especialidade dedicada à estimulação, prevenção e reabilitação motora e postural, promovendo o desenvolvimento físico e a funcionalidade.",
    whatDoes:
      "Atua na estimulação precoce do desenvolvimento motor infantil, alinhamento postural, equilíbrio, tônus muscular e coordenação motora ampla. Promove maior autonomia, mobilidade e segurança para as atividades cotidianas e o bem-estar da criança.",
    iconName: "Activity",
    category: "Motor & Reabilitação",
    features: [
      "Estimulação motora precoce",
      "Equilíbrio e coordenação ampla",
      "Reabilitação funcional",
      "Autonomia física e postural",
    ],
    duration: "Sessões Especializadas",
    code: "FISIO-10",
  },
];

export const CLINIC_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como saber se meu filho precisa de uma avaliação?",
    answer:
      "Alguns sinais podem indicar a importância de buscar uma avaliação, como dificuldades na comunicação, interação social, aprendizagem, comportamento, autonomia, desenvolvimento motor ou emocional.\n\nCada criança possui seu próprio ritmo de desenvolvimento, por isso, a avaliação profissional é fundamental para compreender suas necessidades de forma individualizada. Na Nosso Lar, aqui em Mogi Guaçu, buscamos olhar para cada pessoa para além de suas dificuldades, identificando também suas potencialidades e habilidades.",
    category: "Avaliação",
  },
  {
    id: "faq-2",
    question:
      "É necessário ter diagnóstico de autismo para iniciar o atendimento?",
    answer:
      "Não. O diagnóstico não é um pré-requisito para buscar uma avaliação ou orientação profissional.\n\nAtendemos, em nossas unidades em Mogi Guaçu, pessoas com diferentes necessidades relacionadas ao desenvolvimento, comportamento, comunicação, aprendizagem e aspectos emocionais. A partir da avaliação, nossa equipe poderá compreender melhor as demandas apresentadas e orientar a família sobre os caminhos terapêuticos mais adequados para cada caso.",
    category: "Atendimento",
  },
  {
    id: "faq-3",
    question: "Como funciona a avaliação inicial na clínica?",
    answer:
      "O processo começa com uma conversa com a família para conhecermos a história, as principais necessidades e as expectativas em relação ao atendimento.\n\nA partir disso, o profissional responsável realiza uma avaliação individualizada, utilizando observação clínica e, quando necessário, instrumentos específicos de sua área de atuação.\n\nApós essa etapa, a família recebe orientações sobre os resultados encontrados e, quando indicado, é elaborado um plano terapêutico de acordo com as necessidades e prioridades identificadas.",
    category: "Avaliação",
  },
  {
    id: "faq-4",
    question: "O que é a terapia ABA e para quem ela é indicada?",
    answer:
      "ABA é a sigla para Análise do Comportamento Aplicada, uma abordagem científica que utiliza princípios da Análise do Comportamento para compreender como o comportamento acontece e desenvolver habilidades importantes para a vida da pessoa.\n\nA intervenção pode trabalhar habilidades como comunicação, interação social, autonomia, aprendizagem, brincadeira e manejo de comportamentos que interferem na qualidade de vida.\n\nNa Nosso Lar, referência em terapia comportamental em Mogi Guaçu, acreditamos em uma prática baseada em evidências, individualizada e respeitosa, unindo ciência e sensibilidade em cada processo terapêutico.",
    category: "Método ABA",
  },
  {
    id: "faq-5",
    question: "A clínica atende adolescentes e adultos?",
    answer:
      "Sim. Nossos atendimentos não são direcionados somente ao público infantil. Atendemos crianças, adolescentes e adultos, considerando as necessidades e objetivos de cada fase da vida.\n\nO planejamento terapêutico é sempre individualizado, respeitando a idade, a história, as características, as necessidades e a autonomia de cada pessoa.",
    category: "Público",
  },
  {
    id: "faq-6",
    question: "A família participa do processo terapêutico?",
    answer:
      "Sim, e consideramos essa participação muito importante.\n\nA família faz parte do processo desde a avaliação inicial e pode participar de momentos de orientação e acompanhamento ao longo do tratamento.\n\nNosso objetivo é construir uma parceria entre família e equipe, compartilhando estratégias que possam contribuir para que as habilidades desenvolvidas durante as terapias também façam sentido na rotina e nos diferentes ambientes da pessoa atendida.",
    category: "Família",
  },
  {
    id: "faq-7",
    question: "Os profissionais trabalham de forma integrada?",
    answer:
      "Sim. Acreditamos que um cuidado de qualidade também é construído por meio do diálogo entre os profissionais.\n\nQuando o caso é acompanhado por diferentes especialidades, nossa equipe pode realizar alinhamentos e discussões clínicas para que os objetivos terapêuticos estejam conectados e façam sentido para as necessidades da pessoa atendida.\n\nEsse trabalho integrado permite um olhar mais amplo sobre o desenvolvimento, sempre respeitando as competências e responsabilidades de cada área profissional.",
    category: "Equipe",
  },
  {
    id: "faq-8",
    question:
      "A clínica trabalha com convênios ou somente atendimento particular?",
    answer:
      "A Nosso Lar possui atendimentos particulares e também trabalha com alguns convênios e modalidades de atendimento por plano de saúde, em nossas duas unidades em Mogi Guaçu.\n\nComo as condições de cobertura, autorização e disponibilidade podem variar de acordo com cada operadora e com o plano contratado, recomendamos entrar em contato com nossa equipe administrativa.\n\nAssim, conseguimos verificar cada situação individualmente e orientar a família sobre as possibilidades de atendimento.",
    category: "Convênios",
  },
  {
    id: "faq-9",
    question: "É possível conhecer a clínica antes de iniciar o tratamento?",
    answer:
      "Sim. Sabemos que escolher o lugar que irá acompanhar você ou alguém da sua família é uma decisão importante.\n\nPor isso, nossa equipe poderá orientar sobre a possibilidade de conhecer nossa estrutura em Mogi Guaçu e entender melhor como funcionam os atendimentos antes do início do processo terapêutico. Queremos que as famílias se sintam acolhidas, seguras e bem orientadas desde o primeiro contato.\n\nNa Nosso Lar, cada pessoa é única. Nosso compromisso é oferecer um cuidado baseado em ciência, ética, respeito e sensibilidade, construindo caminhos junto às pessoas atendidas e suas famílias.",
    category: "Visitas",
  },
  {
    id: "faq-10",
    question: "Onde fica a Clínica Nosso Lar em Mogi Guaçu?",
    answer: `A Clínica Nosso Lar conta com duas unidades em Mogi Guaçu, para facilitar o acesso das famílias da região:\n\n${CLINIC_LOCATIONS.map((unit) => `• Unidade ${unit.name} — ${unit.address}`).join("\n")}\n\nAmbas contam com estrutura preparada para receber crianças, adolescentes e adultos com autismo (TEA) e outras necessidades comportamentais e do desenvolvimento, com equipe multidisciplinar.`,
    category: "Localização",
  },
];

export const CLINIC_REVIEWS = [
  {
    id: "rev-1",
    author: "Anna Julia Mendes",
    quote:
      "É um ambiente verdadeiramente humanista, que valoriza o cuidado, o respeito e a individualidade de cada pessoa. Uma clínica acolhedora e comprometida!",
  },
  {
    id: "rev-2",
    author: "Bianca Torati",
    quote:
      "Ambiente de acolhimento e cuidado. Clínica que visa o desenvolvimento e a transformação, considerando a singularidade e o contexto de cada família e indivíduo. 🩵",
  },
  {
    id: "rev-3",
    author: "Natyelle Yasmim Rodrigues Leal",
    quote:
      "Ambiente acolhedor e diferenciado onde se tem sensibilidade para além do laudo, trazendo a esperança e o cuidado para os pacientes e familiares.",
  },
  {
    id: "rev-4",
    author: "Ana Laura Santos",
    quote:
      "Um local agradável, que une ciência com sensibilidade. Profissionais que atuam de forma humanizada, respeitando a individualidade de cada um. Na clínica é possível encontrar acolhimento, suporte, apoio, esperança e uma direção, para que família e profissionais caminhem juntos!",
  },
  {
    id: "rev-5",
    author: "André Henrique",
    quote:
      "Um lugar incrível, cuidadoso e acolhedor. Ambiente respeitoso com as famílias, toda a atenção e suporte necessário para a evolução. Uma clínica onde nos sentimos cuidados por todos os funcionários e toda a equipe, uma atenção simplesmente incrível, referência no que fazem.",
  },
  {
    id: "rev-6",
    author: "Giovanna Fernandes de Oliveira",
    quote:
      "Um ambiente acolhedor para as crianças e responsáveis, com profissionais excelentes que se dedicam para ver a evolução de cada criança.",
  },
  {
    id: "rev-7",
    author: "Kailane Ferreira Medeiros",
    quote:
      "Ambiente acolhedor e humanizado para atender as famílias com profissionais capacitados. Além da qualidade nos atendimentos em diferentes áreas como ABA, psicopedagogia, T.O., fonoaudiologia. Experiência incrível! 🤗🙏🏻",
  },
  {
    id: "rev-8",
    author: "Jú Sampaio",
    quote:
      "Ambiente acolhedor, com valores, atendimento humanizado, guiado pela ciência, onde preza a individualidade de cada paciente. É nítido ver o cuidado e a dedicação de cada profissional com os pacientes, estando sempre em constante evolução. 💙",
  },
  {
    id: "rev-9",
    author: "Pedro Nava",
    quote:
      "Dentre todas as clínicas que já conheci, foi a única que me trouxe confiança, segurança, conhecimento, acolhimento, humanidade e transparência no mesmo lugar. Sinto muito orgulho, conforto e alegria de acompanhar e ver o trabalho.",
  },
  {
    id: "rev-10",
    author: "Pedro Marques",
    quote:
      "A clínica é um ambiente que faz jus ao nome de Nosso Lar. Por trás de toda sensibilidade e humanidade existe o compromisso científico e processos estruturados que garantem a qualidade dos atendimentos e acolhimento com os aprendizes e as famílias.",
  },
];
