# Deploy estático na Hostnet (FTP)

Este projeto foi configurado para gerar um site **100% estático** (HTML + CSS + JS)
que roda em qualquer hospedagem compartilhada com Apache/Nginx — **sem Node.js,
sem SSR, sem Cloudflare Workers no servidor**.

## Resultado do build

Ao rodar `bun run build:static` **no seu computador ou no GitHub Actions**, o script
gera a pasta `dist/` com:

```
dist/
├── index.html          ← página inicial do SPA estático (obrigatória)
├── .htaccess           ← fallback SPA para Apache/Hostnet
├── assets/             ← imagens, fontes, logos
├── favicon.ico
└── robots.txt
```

É o conteúdo dessa pasta `dist/` que você envia por FTP para `/saboresdobairro/` na Hostnet.

## Como o build estático funciona

O comando `bun run build:static` usa uma configuração Vite SPA dedicada
(`vite.static.config.ts`), com a própria entrada `index.html` + `src/entry-static.tsx`
na raiz do projeto. Esse build não usa TanStack Start, Nitro, SSR, Wrangler,
Cloudflare Worker nem prerender — e não altera em nada o `vite.config.ts` nem
o build normal (`npm run dev` / `npm run build`) usado pelo Lovable. A saída
final é uma aplicação SPA 100% estática em `dist/`. O `.htaccess` (gerado
automaticamente pelo script de postbuild) faz qualquer URL interna voltar
para `index.html` em hospedagem Apache/Hostnet.

## Opção A — Build no seu computador

Requer [Bun](https://bun.sh) (o projeto usa `bun.lock`). Node.js 20+ também
funciona com `npm install && npm run build:static`, mas sem o lockfile.

```bash
git clone <seu-repo>
cd sabores-do-prado-craft
bun install
bun run build:static
```

Ao final aparecerá:

```
[postbuild] Bundle estático pronto em dist/:
  dir   assets
  file  .htaccess
  file  favicon.ico
  file  index.html
  file  robots.txt
```

Abra um cliente FTP (FileZilla, WinSCP, Cyberduck), conecte na Hostnet e
**envie todo o conteúdo de `dist/` para `/saboresdobairro/`**. Não envie a pasta `dist`
em si — envie **os arquivos que estão dentro dela**, para que o `index.html`
fique diretamente em `/saboresdobairro/index.html`.

Acesse seu domínio — o site está no ar.

## Opção B — Deploy automático (GitHub Actions)

O workflow **"Deploy (Hostnet FTP)"** em `.github/workflows/deploy.yml` já está
configurado para:

1. Instalar dependências (`bun install --frozen-lockfile`)
2. Rodar `bun run build:static` (gera `dist/`)
3. Enviar `./dist/` → `/saboresdobairro/` via FTP

Ele roda de duas formas:

- **Automática**: a cada `git push` na branch `main`.
- **Manual**: aba **Actions → Deploy (Hostnet FTP) → Run workflow** (botão
  disponível graças ao gatilho `workflow_dispatch`).

Configure os secrets no GitHub (**Settings → Secrets and variables → Actions**):

| Secret         | Valor                                    |
| -------------- | ---------------------------------------- |
| `FTP_SERVER`   | Ex.: `ftp.dinamicasolucao.com.br`        |
| `FTP_USERNAME` | Usuário FTP fornecido pela Hostnet       |
| `FTP_PASSWORD` | Senha FTP fornecida pela Hostnet         |

Sem esses 3 secrets configurados, o workflow falha no passo de deploy (tanto
na execução manual quanto na automática).

## Diretório correto para o deploy

Sempre use **`dist/`**. O caminho `.output/public/` não é usado no build FTP;
o build estático não depende de Nitro nem de servidor SSR.

## Arquivos obrigatórios para hospedagem compartilhada

| Arquivo/Pasta   | Obrigatório? | Papel                                       |
| --------------- | ------------ | ------------------------------------------- |
| `index.html`    | **Sim**      | Página inicial servida em `/`               |
| `assets/`       | **Sim**      | JS/CSS/imagens carregados pelo `index.html` |
| `.htaccess`     | Recomendado  | Fallback SPA + cache dos assets no Apache   |
| `favicon.ico`   | Opcional     | Ícone da aba do navegador                   |
| `robots.txt`    | Opcional     | Instruções para crawlers                    |

## Sem Node.js no servidor

- Nenhum arquivo em `dist/` requer runtime.
- Todo o roteamento após o carregamento inicial acontece no cliente (TanStack Router).
- O build estático não gera `.output/server`, Wrangler, Cloudflare Worker nem bundle SSR.
- O botão flutuante de WhatsApp e o formulário da página `/encomendas`
  funcionam 100% no navegador. O formulário envia o pedido para o webhook
  configurado em `WEBHOOK_URL` (`src/lib/site.ts`) — enquanto esse valor
  estiver vazio, ele só confirma ao cliente sem enviar para nenhum serviço
  externo (ver n8n/Make).

## Se aparecer 403 Forbidden

- Confirme que **`index.html` está diretamente em `/saboresdobairro/`**, não em
  `/saboresdobairro/dist/index.html`.
- Confirme que o `.htaccess` também foi enviado (arquivos iniciados por `.`
  às vezes ficam ocultos no cliente FTP — habilite "mostrar arquivos ocultos").

## Se aparecer 404 ao atualizar página interna

- Verifique se o `.htaccess` está presente em `/saboresdobairro/`.
- Confirme que o módulo `mod_rewrite` está ativo (Hostnet ativa por padrão).
