# Story 1.5: Testimonials + Final CTA + LandingPage Assembly

## Status: Done

## Descrição
Implementar Testimonials, FinalCTA e montar a LandingPage completa com App.tsx.

## Tarefas

### Testimonials (`#depoimentos`)
- [ ] Criar `src/components/landing/Testimonials.tsx`
- [ ] Fundo `#0D0D0D`
- [ ] Título: "Famílias que viraram **lendas**"
- [ ] 3 depoimentos com avatar de iniciais em círculo dourado:
  - "AL" — Ana Lima, São Paulo
  - "CM" — Carlos Mendes, Belo Horizonte
  - "MC" — Mariana Costa, Curitiba
- [ ] Texto em itálico, palavras-chave em `<strong>` branco
- [ ] Layout: grid 3 colunas desktop, scroll horizontal mobile (`overflow-x-auto`)
- [ ] Animação entrada: slide-up com `useInView`
- [ ] Aspas decorativas em gold (") no topo de cada card

### FinalCTA (`#cta-final`)
- [ ] Criar `src/components/landing/FinalCTA.tsx`
- [ ] Fundo: gradiente `#0D0D0D → #1a0a2e`
- [ ] `<ParticlesBackground count={40} intense />` (mais densas)
- [ ] Título: "Sua Família Está Pronta para a **Aventura?**"
- [ ] Preço: tachado R$197, atual R$97 em dourado grande
- [ ] Badge "Acesso Vitalício" com ícone Zap
- [ ] CTA gigante com `glow-pulse`: "⚔️ Quero Transformar Minha Família Agora"
- [ ] Garantia: ícone Shield + "Sua família engajada ou seu dinheiro de volta — 7 dias"
- [ ] Micro-copy: "Mais de 500 famílias já entraram na aventura"
- [ ] Botão CTA com `whileHover: scale(1.05)` + `whileTap: scale(0.98)`

### Assembly
- [ ] Criar `src/pages/LandingPage.tsx` — importa e ordena todas as seções
- [ ] Atualizar `src/App.tsx` — renderiza `<LandingPage />`
- [ ] Atualizar `src/main.tsx` — entry point limpo

## Critérios de Aceitação
- [ ] Scroll suave entre todas as seções (via `id` anchors)
- [ ] Toda a LP renderiza sem erros TypeScript
- [ ] Mobile-first: layout responsivo em todas as seções
- [ ] `npm run build` completa sem erros
- [ ] Partículas na FinalCTA mais densas que no Hero

## Arquivos Criados/Modificados
- `src/components/landing/Testimonials.tsx`
- `src/components/landing/FinalCTA.tsx`
- `src/pages/LandingPage.tsx`
- `src/App.tsx`
- `src/main.tsx`
