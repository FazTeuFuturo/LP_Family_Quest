# Story 1.2: Componentes Utilitários

## Status: Done

## Descrição
Criar os três componentes utilitários base: ParticlesBackground, SpotlightCard e XPBar.

## Contexto
Componentes reutilizados em várias seções. Devem ser performáticos (will-change: transform, pointer-events: none).

## Tarefas
- [ ] Criar `src/components/landing/ParticlesBackground.tsx`
  - 20-30 partículas douradas (#F5C518) com float aleatório
  - CSS puro com @keyframes (sem lib externa)
  - `will-change: transform`, `pointer-events: none`
  - Props: `count` (default 25), `intense` (default false)
- [ ] Criar `src/components/landing/SpotlightCard.tsx`
  - Efeito spotlight radial-gradient que segue o mouse
  - `onMouseMove` → atualiza posição do gradiente
  - Border neo-brutalista: `2px solid #F5C518`, `box-shadow: 4px 4px 0px #7B2FBE`
  - Estado hover: muda shadow + adiciona glow dourado
- [ ] Criar `src/components/landing/XPBar.tsx`
  - Barra estilo RPG com bordas douradas
  - Framer Motion: anima 0% → targetPercent (default 75%)
  - `useInView` para disparar animação no scroll
  - Shimmer effect no fill
  - Props: `targetPercent`, `label`

## Critérios de Aceitação
- [ ] ParticlesBackground: partículas flutuam sem causar reflow (só transform)
- [ ] SpotlightCard: spotlight segue o mouse suavemente
- [ ] XPBar: anima ao entrar na viewport, exibe % correto
- [ ] Todos os componentes são TypeScript com props tipadas

## Arquivos Criados/Modificados
- `src/components/landing/ParticlesBackground.tsx`
- `src/components/landing/SpotlightCard.tsx`
- `src/components/landing/XPBar.tsx`
