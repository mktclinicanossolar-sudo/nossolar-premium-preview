# Clínica Nosso Lar

Nova versão responsiva da página da clínica, em React, TypeScript e Vite. Os conteúdos da história, os vídeos, as fotos da clínica, os contatos e as oportunidades profissionais foram preservados.

## Executar

Instale o Node.js e, dentro desta pasta, execute:

```sh
npm ci
npm run dev
```

A página fica disponível em `http://localhost:3000`.

## Validar e gerar o site

```sh
npm run lint
npm run build
npm run preview
```

O build gera a pasta `dist` com o conteúdo já renderizado em HTML, pronto para hospedagem estática. Para vê-lo localmente, use um servidor HTTP; os módulos não devem ser abertos pelo protocolo `file://`.

Este repositório é uma apresentação independente na Vercel. Não altera `clinicanossolar.com.br`. A indexação e o Google Ads ficam desligados por padrão; veja [SEO.md](SEO.md) para os detalhes e a configuração de um futuro lançamento.

## Editar conteúdos

- `src/data/clinicContent.ts`: especialidades, perguntas e avaliações.
- `src/data/galleryData.ts`: fotos, textos alternativos e rótulos acessíveis da galeria.
- `src/data/jobsData.ts`: oportunidades profissionais.
- `src/data/clinicLocations.ts`: unidades, endereços e mapas.
- `src/data/serviceSearchContent.ts`: explicações e variações dos nomes dos serviços.
- `src/data/structuredData.ts`: dados estruturados para busca.
- `src/components/ContactSection.tsx`: apresentação das unidades e horários.
- `src/components/HeroSection.tsx`: ordem das quatro fotos e tempo de troca.
- `src/components/ui.tsx`: número principal do WhatsApp e estilo compartilhado dos contatos.
- `src/index.css`: identidade visual e regras de desktop e mobile.

O detalhamento visual, as referências, os prompts das imagens e a validação estão em [DESIGN.md](DESIGN.md).

As alterações solicitadas na revisão e a orientação de linguagem humanizada estão em [ALTERACOES.md](ALTERACOES.md).
