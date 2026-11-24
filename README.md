# Desentupidora Soluções DF · site

Site com foco em SEO local (desentupidora 24h em Brasília e no DF) e em Google Ads. Feito com [Astro](https://astro.build), gera páginas estáticas e é publicado na Vercel.

Serviços: desentupimento de **vaso sanitário, pia, ralo, esgoto e cano** (só esses).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone/WhatsApp, nome, domínio, tempo de chegada, GTM | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Regiões do DF atendidas | `src/data/bairros.ts` |
| Fotos reais | `fotos/<slug-do-serviço>/` (ver `fotos/README.md`) |
| Posts do blog | `src/content/blog/*.md` |

Cada serviço vira `/servicos/<slug>/`, cada região vira `/desentupidora-em-<slug>/` e cada post vira `/blog/<arquivo>/`. O sitemap é gerado automaticamente.
