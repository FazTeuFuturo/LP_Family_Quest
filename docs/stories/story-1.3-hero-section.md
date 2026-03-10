# Story 1.3: Hero Section

## Status: Done

## Descrição
Implementar a seção Hero com text reveal animado, CTA buttons, XP Bar e partículas.

## Contexto
Primeira impressão da LP. Deve impressionar com animações fluidas e copy persuasivo.

## Tarefas
- [ ] Criar `src/components/landing/Hero.tsx`
- [ ] Fundo `#0D0D0D` com `<ParticlesBackground count={25} />`
- [ ] Badge animado: `⚔️ Sistema de Engajamento Familiar` (border dourada, bg transparente)
- [ ] Headline com text reveal: stagger por palavra usando Framer Motion
  - Palavras destacadas em gold: "Guerra", "das", "Tarefas", "Aventura", "Épica"
  - Fonte: Cinzel 900, tamanho 4xl/6xl/7xl responsivo
- [ ] Subheadline com destaque em `<strong>` gold na palavra "pedir"
- [ ] `<XPBar targetPercent={75} />` animada abaixo do headline
- [ ] CTA primário: botão dourado com `animation: glow-pulse 2s infinite`
  - Texto: `⚔️ Começar Minha Jornada`
  - Link anchor para `#cta-final`
- [ ] CTA secundário: "Ver como funciona ↓" — scroll suave para `#como-funciona`
- [ ] Elementos flutuantes: emojis 🪙⭐✨🏆 com `animation: float` escalonado
- [ ] `id="hero"` na section

## Critérios de Aceitação
- [ ] Animação stagger do headline funciona ao carregar a página
- [ ] XP Bar anima 0→75% ao carregar
- [ ] Scroll suave funciona no CTA secundário
- [ ] Responsivo: mobile-first (stack vertical em mobile, flex row em sm+)
- [ ] Partículas não causam reflow

## Arquivos Criados/Modificados
- `src/components/landing/Hero.tsx`
