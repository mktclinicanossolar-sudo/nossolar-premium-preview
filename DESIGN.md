# Nosso Lar — nova experiência

A página foi redesenhada para combinar uma apresentação fotográfica ampla com comunicação acolhedora, informações organizadas e contato fácil com a clínica.

## Direção visual e referências

- A referência enviada e o [site da Eyebot](https://www.eyebot.co/) orientaram a hero com fotografia em destaque, tipografia ampla, mensagem central e navegação flutuante. O resultado foi adaptado à marca Nosso Lar.
- O [projeto Bright Behavioral Health, da Sovra Identity](https://sovraidentity.com/projects/bright-behavioral-health), apresenta uma abordagem voltada a famílias, compreensão dos serviços e contato com a clínica. Essa referência ajudou a organizar as especialidades e o primeiro contato.
- O [projeto Melody Autism Solutions, da Moonlit Media](https://moonlitmedia.com/work/custom-website-design-for-aba-therapist-in-new-york/), destaca a navegação responsiva e o cuidado centrado na família. A aplicação nesta página foi a linguagem simples, os filtros e os caminhos curtos até a equipe.

O azul original da marca, o amarelo, o verde e o coral foram mantidos como acentos. Fundos claros, azul profundo, cartões arredondados e espaços de respiro dão unidade à página. Todos os botões que abrem o WhatsApp usam o mesmo verde com texto branco.

## Conteúdo e experiência

- Hero com quatro imagens, troca automática a cada 3 segundos e indicadores de seleção manual. A apresentação começa automaticamente e não tem botão de play ou pausa, conforme a revisão solicitada. A preferência de movimento reduzido desativa as animações de transição.
- Menu flutuante com transparência, acompanhado de uma navegação própria para celular.
- Dez especialidades completas: cartões no desktop e uma lista expansível ao toque no celular. Os detalhes completos continuam nas janelas acessíveis. As categorias e os filtros de especialidades foram removidos para simplificar a escolha.
- Imagens originais da história, nas versões desktop e mobile, preservadas integralmente. A leitura duplicada, a faixa de valores e o CTA adicional foram retirados na revisão.
- A peça sobre o significado da logo está preservada em um bloco expansível.
- Vídeo institucional original `0BlaeAf2BdA` em seção própria, proporção 16:9, com thumbnail original recuperada de `https://clinicanossolar.com.br/video-thumb.jpg`, carregado quando o visitante dá play e com link para o YouTube. O fundo utiliza o azul da marca, mantendo os círculos decorativos.
- Galeria em bento com as seis fotos originais, sem títulos e legendas sobre as imagens, filtros, ampliação e navegação entre fotos. O tour original `xtrijgAE51U` foi mantido, com ícone de reprodução.
- Dez avaliações e dez perguntas frequentes recuperadas do site publicado, além das duas unidades, telefones, horários e oportunidades profissionais do projeto.
- A galeria original tinha três associações entre fotos e legendas trocadas. Elas foram corrigidas após inspeção das imagens.
- O site original apresentava nomes de bairro diferentes para a segunda unidade. Na revisão, o novo link de Maps fornecido pelo usuário confirmou Jardim Planalto Verde, Rua Conselheiro João Amélio de Oliveira, 290. Esse endereço foi aplicado ao contato, à FAQ e aos dados estruturados.

## Imagens da hero

As duas primeiras fotos são ilustrações geradas com o recurso integrado de ImageGen, sem rostos identificáveis. As duas seguintes são fotografias reais dos ambientes que já existiam no repositório. Os arquivos finais usados pelo site estão em:

- `public/hero/brincar-e-conectar.webp`
- `public/hero/maos-e-descobertas.webp`
- `public/hero/espaco-sensorial.webp`
- `public/hero/recepcao.webp`

O conjunto de quatro imagens soma aproximadamente 499 KB. Os PNGs originais gerados também foram preservados na pasta de entrega `imagens-hero`.

### Prompts finais usados no ImageGen integrado

**Foto 1 — brincar e conectar**

> Use case: photorealistic-natural. Asset type: wide 16:9 website hero photograph for a Brazilian pediatric therapy clinic. Primary request: a respectful, warm editorial illustration of an autistic child playing with wooden blocks while a caregiver gently holds their hand. Show a small child around 5 years old from the back and waist down only, with little hands interacting with an adult's hands; absolutely no visible faces, eyes, facial profiles, or identifying details. Authentic Brazilian family atmosphere in a calm, sunlit playroom, muted pastel blue, yellow and green toys, pale oak table. Close cinematic framing focused on the connection between the hands and the tactile blocks, subjects upper middle/right, expansive softly blurred environment around them for centered website typography added later. Natural skin texture, anatomically correct hands and fingers, realistic proportions, subtle film grain, soft afternoon light, premium documentary photography, emotionally welcoming. This is illustrative imagery, not a documentary of an actual patient. No text, logos, watermarks, puzzle symbols, clinical equipment, or invented clinic signs. Landscape 16:9.

**Foto 2 — mãos e descobertas**

> Use case: photorealistic-natural. Asset type: wide 16:9 website hero photograph for a Brazilian pediatric therapy clinic, companion to a warm hands-and-blocks photo. Primary request: an autistic child around 6 years old seen entirely from behind, playing with colorful wooden stacking rings on a low table, gently holding hands with a supportive adult. No visible faces, eyes or profiles of anyone. Frame the child's back, arms and small hands, adult only forearm and hand. The child wears a muted warm yellow cotton shirt; calm bright therapy playroom with pale blue walls, soft blue mat, pastel red, yellow, green and blue wooden toys. Premium editorial lifestyle photography, natural morning window light, shallow depth of field, authentic anatomy and realistic skin, warm and serene mood. Main interaction in upper middle/right with room for centered website typography in lower half; broad wide composition, realistic uncrowded environment. This is illustrative imagery, not an actual patient or clinic documentary. No text, logos, watermarks, puzzle symbols, exaggerated emotion or identifiable faces. Landscape 16:9.

## Validação

TypeScript e build de produção aprovados. No navegador foram verificados:

- Telas de 320×568, 375×812, 768×1024, 1024×768 e 1440×900, sem rolagem horizontal.
- Ciclo completo da hero: 1 → 2 → 3 → 4 → 1, em intervalos de 3 segundos e seleção de fotos. A revisão removeu o controle de play/pausa.
- Menu móvel, fechamento com Escape, fechamento ao navegar e permanência do menu ao rolar.
- Dez especialidades preservadas, com expansão ao toque no celular, detalhe completo, fechamento com Escape e retorno do foco ao botão original.
- Filtros da galeria, ampliação, próxima foto e abertura do tour original.
- Busca de FAQ sem dependência de acentos, abertura de resposta, estado sem resultados e retorno às dez perguntas.
- Troca das avaliações, quatro vagas e filtro de uma vaga de Mogi Mirim.
- Imagem da história preservada, proporção 16:9 e URL original do vídeo institucional.
- Todos os links internos resolvem para seções existentes; todos os links de WhatsApp exibem o verde definido e apontam aos números originais.

A aparência e os controles foram verificados localmente. YouTube e Google Maps continuam dependendo da disponibilidade e das políticas dos respectivos serviços.

## Entrega

A revisão com prioridade no celular e a orientação de escrita estão registradas em [ALTERACOES.md](ALTERACOES.md).

O projeto foi preparado na branch local `codex/premium-redesign`. A conta GitHub conectada informou permissão de leitura e ausência de permissão de escrita no repositório. Nenhuma alteração foi enviada ao GitHub ou publicada no domínio.
