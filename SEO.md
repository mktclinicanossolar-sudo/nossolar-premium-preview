# Busca orgânica e conteúdo da Clínica Nosso Lar

Revisão de 1 de outubro de 2026. Referências internas: conversas “Plano Google Ads” e “Legenda SEO infantil”, código original e conteúdo do site publicado. Este projeto apresenta uma nova proposta; não substitui o domínio atual.

## Combinações de busca utilizadas

Os nomes dos atendimentos aparecem nos cartões, nas explicações e nos dados estruturados com a localização Mogi Guaçu. As variações correspondem a serviços reais; não há blocos ocultos de palavras repetidas.

| Atendimento         | Variações relevantes                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Clínica             | Clínica Nosso Lar em Mogi Guaçu; clínica comportamental em Mogi Guaçu; clínica de autismo; atendimento para TEA; desenvolvimento infantil |
| ABA                 | Terapia ABA em Mogi Guaçu; intervenção ABA; Análise do Comportamento Aplicada; intervenção comportamental para autismo                    |
| Psicologia          | Psicologia infantil em Mogi Guaçu; psicoterapia infantil; cuidado emocional                                                               |
| Fonoaudiologia      | Fonoaudiologia infantil em Mogi Guaçu; avaliação da fala e linguagem; comunicação infantil                                                |
| Terapia ocupacional | Terapia ocupacional infantil em Mogi Guaçu; integração sensorial; TO infantil; autonomia nas atividades do dia a dia                      |
| Neuropsicologia     | Avaliação neuropsicológica em Mogi Guaçu; avaliação cognitiva; investigação de TEA e TDAH                                                 |
| Psicopedagogia      | Psicopedagogia infantil em Mogi Guaçu; dificuldades de aprendizagem; parceria com escola e família                                        |
| Fisioterapia        | Fisioterapia infantil em Mogi Guaçu; estimulação motora precoce; reabilitação motora                                                      |
| Musicoterapia       | Musicoterapia infantil em Mogi Guaçu; expressão e comunicação                                                                             |
| Avaliação e família | Avaliação multidisciplinar; avaliação do desenvolvimento infantil; orientação de pais; orientação familiar em Mogi Guaçu                  |
| Localização         | Unidade Chácara do Ouro; unidade Jardim Planalto Verde; Rua Conselheiro João Amélio de Oliveira, 290                                      |

## Implementação

- HTML pré-renderizado com os textos das dez especialidades, perguntas frequentes e unidades. React hidrata esse conteúdo para manter as interações.
- Título, descrição, idioma, canônica, metadados de compartilhamento e textos alternativos.
- JSON-LD de Organization, MedicalClinic (duas unidades), WebSite, WebPage, Service e FAQPage. Endereços e horários correspondem aos dados apresentados; não há estrelas ou avaliações inventadas no schema.
- Galeria bento sem filtros, com fotos ampliáveis e rótulos acessíveis.
- Links antigos usados em campanhas continuam funcionando: `#aba`, `#intervencao-aba`, `#psicologia`, `#psicoterapia`, `#fonoaudiologia`, `#terapia-ocupacional`, `#neuropsicologia`, `#fisioterapia`, `#servicos`, `#services`, `#unidades`, `#contato` e `#contact`. No celular, os links de especialidades abrem o item correspondente.
- Tag pública do Google Ads recuperada do site original: `AW-18412323017`, conversão `AW-18412323017/-11YCPHb9_kcEMmB18tE`. A integração está desligada nesta apresentação. Quando ativada, contabiliza apenas cliques no WhatsApp comercial; recrutamento usa outro número. O evento não inclui o texto da mensagem nem informações clínicas.

## Apresentação e futura publicação

Por padrão, `VITE_INDEXABLE=false` e `VITE_ENABLE_ADS=false`. A Vercel também envia `X-Robots-Tag: noindex, follow`. O objetivo é apresentar a proposta sem criar uma cópia indexada do site da clínica nem registrar testes como leads. Nenhum domínio personalizado deve ser associado a este projeto durante a apresentação.

Somente após aprovação do lançamento: configurar `VITE_SITE_URL` com o domínio definitivo, ativar `VITE_INDEXABLE=true`, remover o cabeçalho `noindex` em `vercel.json`, decidir a ativação do Ads e gerar um novo build. O sitemap passa a incluir a URL principal quando a indexação está ativa. O encaminhamento ao domínio definitivo e o Search Console são tarefas do lançamento, não desta prévia.

O código facilita a leitura por buscadores e ferramentas de IA. Não garante posição, indexação, indicação por uma IA ou aumento de conversão. Resultados devem ser medidos depois do lançamento. Não foi criado um arquivo especial para IA nem usados textos artificiais de palavras-chave.

Referências oficiais: [Google — recursos de IA e SEO](https://developers.google.com/search/docs/appearance/ai-features), [Google — repetição excessiva de palavras-chave](https://developers.google.com/search/docs/essentials/spam-policies#keyword-stuffing), [Google — negócios locais](https://developers.google.com/search/docs/appearance/structured-data/local-business), [Vite — pré-renderização](https://v6.vite.dev/guide/ssr), [React — hidratação](https://react.dev/reference/react-dom/client/hydrateRoot).
