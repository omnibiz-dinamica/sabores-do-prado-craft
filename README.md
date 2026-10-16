# Sabores do Bairro

Site "Sabores do Bairro"

Cria um site institucional completo, em React + Tailwind CSS, para a padaria/confeitaria **"Sabores do Bairro"**, localizada em Vila do Prado, Portugal. O site deve transmitir artesanalidade, aconchego e desejo visual pelos produtos (o cliente "come com os olhos"). Todo o texto do site deve estar em **Português de Portugal** (usar "telemóvel", "encomendas", "pequeno-almoço", "morada", nunca variantes do Brasil).

## 1. Identidade Visual e Estilo

Referências de design a seguir (mistura das três):
- **Tartine Bakery** → tipografia forte e bem cuidada como protagonista, layout limpo e ordenado.
- **Grandir** → uso generoso de espaço em branco/vazio, minimalismo, transições e animações suaves e cinematográficas ao fazer scroll (fade-in, parallax leve nas imagens).
- **Levain Bakery** → paleta em tons pastéis, sensação cosmopolita e convidativa.

**Paleta de cores** (extraída do feed de Instagram do cliente — tons terrosos e quentes, fotografia natural, decoração com flores brancas e douradas):
- Fundo principal: creme/off-white quente (`#FBF4E9`)
- Cor de destaque primária: terracota / caramelo (`#C2703D`)
- Cor de destaque secundária: dourado mostarda (`#D9A441`)
- Texto principal: castanho profundo (`#3E2A1E`)
- Acento suave (detalhes, badges, hover): verde-sálvia claro (`#8A9678`) e rosa pastel muito suave (`#F1D9CE`) — nunca cores saturadas ou frias.

**Tipografia:**
- Títulos: uma serifada elegante e artesanal (ex.: "Playfair Display" ou "Fraunces").
- Corpo de texto: uma sans-serif limpa e legível (ex.: "Inter" ou "Work Sans").

**Fotografia:** grandes imagens em alta qualidade dos produtos (pães, bolos, doces, pequenos-almoços), com bastante espaço em branco ao redor para dar "respiro" — nunca poluir a secção com muitos elementos ao mesmo tempo.

## 2. Estrutura do Site (Sitemap)

Cria uma navegação fixa (sticky header) com o logótipo "Sabores do Bairro" e as páginas:

### Página 1 — Home
- **Hero section** em ecrã inteiro com foto de destaque de um produto principal (ex.: pão artesanal ou bolo decorado), overlay subtil e o headline:
  - Título: **"Sabor artesanal, do nosso forno direto para o seu dia."**
  - Subtítulo: "Pães de fermentação natural, doces e pastelaria feitos à mão em Vila do Prado."
  - Botão principal (CTA): **"Ver Cardápio Fresquinho"**
  - Botão secundário: **"Fazer Encomenda"**
- Secção de "prova social": estrelas/avaliações do Google e uma frase como "Mais de 130 clientes apaixonados pelo nosso pão".
- Secção de destaques do dia (3-4 cards com fotos: pão do dia, doce em destaque, sugestão de pequeno-almoço).
- Gatilhos de confiança em ícones/linha: "Fornadas frescas todos os dias" · "Ingredientes 100% selecionados" · "Fermentação lenta e natural".
- Faixa final com morada, horário e botão de mapa.

### Página 2 — Cardápio / Produtos
- Categorias visuais em grelha com fotos grandes:
  - Pães de Fermentação Natural
  - Pastelaria & Bolos
  - Salgados
  - Pequenos-Almoços
  - Kits Festivos / Encomendas Especiais
- Cada categoria abre uma secção com cartões de produto (foto, nome, preço, pequena descrição sensorial — ex.: "Pão de fermentação natural, crosta estaladiça e miolo macio").

### Página 3 — Nossa História (Sobre)
- Texto humanizado sobre a tradição familiar, o método artesanal e a origem local dos ingredientes, unindo as raízes do Brasil e de Portugal.
- Fotos do espaço acolhedor com área externa.
- Pequena timeline ou destaque em 3 pilares: Tradição · Artesanal · Comunidade.

### Página 4 — Encomendas / Contacto
- Formulário para pedidos de bolos personalizados e eventos com os campos: Nome, Telemóvel, Data pretendida, Tipo de encomenda (dropdown), Mensagem.
- Botão de envio: **"Enviar Pedido de Encomenda"**
- Mapa incorporado (Google Maps) com a morada: Rua Júlio Dinis, 4730-458, Vila do Prado, Portugal.
- Informações de contacto: Telemóvel +351 253 183 391, horário de funcionamento e link direto para o Instagram (@saboresdobairro.prado).
- Botão flutuante fixo (canto inferior direito, visível em todas as páginas) para WhatsApp: **"Peça agora pelo Delivery"**, a abrir `https://wa.me/351253183391` com mensagem pré-preenchida "Olá! Gostaria de fazer uma encomenda 🍞🍰".

## 3. Copywriting pronto a usar

- **Headlines alternativos:** "Tradição em cada fatia. Adoce a sua rotina com receitas exclusivas."
- **CTAs:** "Ver Cardápio Fresquinho" · "Faça a sua Encomenda" · "Peça agora pelo Delivery" · "Fale connosco no WhatsApp"
- **Microtextos de confiança:** "Fornadas frescas todos os dias", "Ingredientes 100% selecionados", "Fermentação lenta e natural", "Espaço acolhedor com esplanada exterior"

## 4. Requisitos técnicos

- Totalmente responsivo (mobile-first, já que a maior parte do tráfego virá do Instagram/telemóvel).
- Animações suaves de entrada (fade-in / slide-up) ao fazer scroll entre secções, inspiradas na fluidez do site da Grandir — sem exageros que atrasem o carregamento.
- Header sticky com sombra suave ao dar scroll.
- Botão flutuante de WhatsApp sempre visível.
- Otimização básica de SEO: title, meta description e alt text em todas as imagens, focados em "padaria Vila do Prado", "confeitaria artesanal Portugal".
- Performance: imagens otimizadas/lazy-load para não pesar o carregamento.
- Formulário de contacto/encomendas preparado para enviar os dados via **webhook** (deixar um campo de configuração de URL de webhook no código) — este webhook será depois ligado a um cenário no **n8n/Make** para notificar a equipa por e-mail/WhatsApp e organizar os pedidos automaticamente.

---

### Nota de automação (pós-entrega, fora do Lovable)
Depois do site publicado, ligar o formulário de "Encomendas" e o botão de WhatsApp a um fluxo em **n8n** (ou Make) que:
1. Recebe o payload do formulário via webhook.
2. Regista o pedido numa base de dados/planilha (Google Sheets, Airtable ou Supabase).
3. Envia notificação automática à equipa (e-mail ou WhatsApp Business API).
4. Opcionalmente, envia uma mensagem automática de confirmação ao cliente.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sabores-do-prado-craft.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f8269bd7-8a24-4c26-b750-0704a5a472f2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
