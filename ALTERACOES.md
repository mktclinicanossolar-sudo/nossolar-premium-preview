# Revisão com prioridade no celular — 1 de outubro de 2026

Esta revisão aplica os vinte comentários feitos na prévia e registra a preferência de escrita da clínica para as próximas alterações.

## Orientação editorial

O pedido central é: “não gosto de textos como ‘frase 1. frase 2.’; traga mais humanizado, com um ótimo SEO, preciso converter”.

- Escrever títulos como uma frase natural, com informação concreta sobre a clínica ou o atendimento.
- Evitar slogans formados por duas frases curtas, metáforas vagas e expressões que possam sugerir internação.
- Conversar com pessoas e famílias em linguagem simples, respeitosa e acolhedora.
- Explicar o que a pessoa encontrará e qual ação pode realizar: conhecer os atendimentos, tirar uma dúvida, agendar uma avaliação ou combinar uma visita.
- Usar naturalmente os nomes das especialidades, autismo, desenvolvimento e Mogi Guaçu onde forem relevantes, sem repetir palavras-chave de forma artificial.
- Não prometer cura, resultados garantidos, liderança de mercado ou classificações que não estejam comprovadas.
- Preservar os relatos, os conteúdos clínicos originais e as informações de contato.

## Textos revisados

| Área           | Texto anterior                                    | Texto atual                                            |
| -------------- | ------------------------------------------------- | ------------------------------------------------------ |
| Hero           | Cada pessoa é única. Nosso cuidado também.        | Cuidado em autismo para a sua família                  |
| Especialidades | Diferentes olhares. Um só propósito.              | Terapias e avaliações para a sua família               |
| História       | Ciência no cuidado. Afeto em cada detalhe.        | Conheça a história da Clínica Nosso Lar                |
| Logo           | Uma marca que carrega o nosso propósito           | Entenda o significado da nossa logo                    |
| Vídeo          | Mais que uma clínica. Um lugar de possibilidades. | Conheça de perto o cuidado da Clínica Nosso Lar        |
| Galeria        | Espaços que acolhem. Experiências que conectam.   | Conheça os espaços preparados para receber sua família |
| Visita         | Venha conhecer o seu próximo lar.                 | Conheça a clínica antes de iniciar o atendimento       |
| Avaliações     | O cuidado também se conta em histórias.           | Veja o que as famílias contam sobre a Nosso Lar        |
| FAQ            | Suas dúvidas merecem cuidado.                     | Tire suas dúvidas sobre os atendimentos                |
| Ajuda no FAQ   | Ainda quer conversar?                             | Podemos ajudar você a dar o primeiro passo             |
| Unidades       | Dois endereços. O mesmo acolhimento.              | Encontre a Nosso Lar em Mogi Guaçu                     |
| Contato final  | Vamos construir esse caminho juntos?              | Estamos aqui para ajudar você a começar                |

As descrições de apoio e as chamadas para contato também foram revisadas para acompanhar essa linguagem.

## Alterações da interface

1. **Comentários 1 a 6:** retiradas as duas notas sobre a hero, o texto superior, a descrição, a numeração com legenda e o link “Explore”.
2. **Hero automática:** mantidas as quatro imagens e a troca a cada 3 segundos. Retirado o controle de play/pausa. A primeira imagem aparece imediatamente; os indicadores continuam permitindo selecionar outra imagem.
3. **Hero no celular:** altura ajustada à tela, um título centralizado e um único botão verde de agendamento. O espaço superior destaca a fotografia.
4. **Comentários 7, 8, 15 e 19:** substituídos os títulos em duas frases por textos naturais e específicos, registrados na tabela acima.
5. **Comentários 9, 10 e 12:** retirados “Leia nossa história”, a faixa de valores e o contato adicional dessa seção. A imagem original da história continua intacta.
6. **Comentário 11:** o bloco sobre a logo ganhou um título que explica diretamente seu conteúdo.
7. **Comentário 13:** recuperada a thumbnail original do site, em arquivo local. Retirados os textos sobrepostos que competiam com ela. Mantidos o vídeo original e a proporção horizontal.
8. **Comentário 14:** fundo do vídeo no azul da marca, mantendo os efeitos circulares. Os textos usam azul escuro para leitura sobre esse fundo.
9. **Comentário 16:** mantida a galeria bento; removidos títulos, legendas e etiquetas sobre as fotos. Um toque abre a foto inteira; textos alternativos e rótulos continuam disponíveis para acessibilidade.
10. **Comentários 17 e 18:** reformuladas as chamadas para visita e orientação, sem linguagem que remeta a internação.
11. **Comentário 20:** dez especialidades em lista expansível no celular, em vez de dez cartões longos. Ao abrir um item, aparecem uma explicação, o acesso aos detalhes completos e o botão de agendamento. Nenhuma especialidade ou detalhe clínico foi eliminado. As categorias e os filtros de especialidades foram retirados.
12. **Alinhamento no celular:** títulos, introduções e textos dos blocos principais centralizados. Perguntas e conteúdos extensos mantêm uma disposição adequada à leitura.
13. **Scroll:** entradas suaves ao alcançar cada bloco, incluindo os itens de especialidades e galeria, com pequenos intervalos entre eles. A preferência de movimento reduzido do dispositivo é respeitada.

## SEO aplicado à revisão

Foi atualizado o título da página, a descrição para busca, a URL canônica e os metadados de compartilhamento. O H1 identifica o atendimento em autismo; as demais seções usam títulos descritivos, nomes de especialidades e localização nos trechos pertinentes. As imagens mantêm textos alternativos.

As referências técnicas foram as orientações oficiais do Google para [títulos descritivos e concisos](https://developers.google.com/search/docs/appearance/title-link) e [descrições que apresentam o conteúdo da página](https://developers.google.com/search/docs/appearance/snippet). SEO e conversão devem ser acompanhados após a publicação; esta revisão não apresenta resultados de tráfego ou agendamentos medidos.

## Validação da revisão

- TypeScript e build de produção aprovados.
- Telas de 320×568, 375×812, 422×668, 768×1024 e 1480×668 verificadas, sem rolagem horizontal; botão de agendamento dentro da hero.
- Dez especialidades preservadas, todas inicialmente recolhidas no celular. Expansão, conteúdo completo, abertura dos detalhes, Escape e retorno do foco verificados.
- Ciclo automático 1 → 2 → 3 → 4 → 1 confirmado em intervalos de 3 segundos, sem controle de play/pausa.
- Thumbnail original carregada em 1920×1080; quadro em 16:9 e fundo azul #00aad0.
- Seis fotos e o tour preservados; nenhum texto sobreposto nas miniaturas. Ampliação e próxima foto verificadas. Os filtros foram retirados na revisão seguinte.
- Console sem erros na versão final.

## Publicação

Esta apresentação usa um novo repositório e um projeto separado na Vercel. O domínio atual não foi alterado.

## Revisão de localização, SEO e apresentação

- Unidade 2 atualizada para o link fornecido: https://maps.app.goo.gl/JWuzsEcYXCtWtDat6. O Maps identifica Jardim Planalto Verde, Rua Conselheiro João Amélio de Oliveira, 290, Mogi Guaçu, CEP 13843-187. Esse endereço foi aplicado também ao mapa incorporado, à FAQ e aos dados estruturados.
- Retirados todos os filtros da galeria. Fotos e vídeo aparecem juntos no bento.
- Especialidades com explicações naturais que incorporam termos reais de busca, mantendo a interação compacta no celular.
- Conteúdo pré-renderizado em HTML, com hidratação para preservar carrossel, menu, expansão das especialidades, modais e animações ao scroll.
- SEO e configurações do Google Ads documentados em [SEO.md](SEO.md), considerando as conversas anteriores. Apresentação sem indexação e sem disparo de conversões.

## Ajuste do título da hero

O título passou a ser “Clínica Comportamental em Mogi Guaçu”, com quebra fixa entre “Clínica Comportamental” e “em Mogi Guaçu”. As duas linhas aparecem em sequência ao abrir a página, com movimento suave, transparência e desfoque. Com a preferência de movimento reduzido, a entrada usa apenas transparência, sem deslocamento ou desfoque. A animação não reinicia a cada troca de foto. A fonte foi ajustada no celular para manter as duas linhas.

## Fotos e vídeo da hero — 2 de outubro de 2026

As quatro imagens anteriores da apresentação foram substituídas pelas três fotografias e pelo vídeo enviados pela clínica. A sequência mostra a fachada, a entrada, o acesso com jardim e a sala de integração sensorial em vídeo, com troca automática a cada 3 segundos. Os arquivos originais foram preservados, totalizando menos de 1 MB.

O vídeo reproduz automaticamente, sem som, sem controles e dentro da página no celular. A reprodução começa do início quando ele entra em destaque e pausa ao sair ou quando a aba fica oculta. O enquadramento preenche a hero em telas de celular e computador, preservando o título em duas linhas e o botão de agendamento.
