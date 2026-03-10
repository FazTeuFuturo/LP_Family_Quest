# Story 1.4: Pain Section + How It Works + Features

## Status: Done

## Descrição
Implementar as seções PainSection, HowItWorks e Features com animações de scroll.

## Contexto
Seções de meio de funil: qualificação, educação e diferenciação.

## Tarefas

### PainSection (`#dores`)
- [ ] Criar `src/components/landing/PainSection.tsx`
- [ ] Fundo `#111827`
- [ ] Título: "Reconhece alguma dessas **situações?**" (gold no destaque)
- [ ] 3 cards com `<SpotlightCard>`:
  1. 😤 "Pediu 10 vezes e nada aconteceu"
  2. 🏠 "A casa é um campo de batalha"
  3. 💸 "Como ensinar o valor do dinheiro?"
- [ ] Cards: `useInView` + slide-up com delay escalonado (0.3, 0.45, 0.6s)
- [ ] Background dos cards: `#0D0D0D`

### HowItWorks (`#como-funciona`)
- [ ] Criar `src/components/landing/HowItWorks.tsx`
- [ ] Fundo `#0D0D0D`
- [ ] Título: "Como a **Magia Acontece**"
- [ ] 3 steps em grid com ícones em círculo dourado:
  1. 🧙 "O Mestre Cria"
  2. ⚔️ "O Herói Age"
  3. 🏆 "A Recompensa"
- [ ] Connector: linha dourada animada (`scaleX: 0 → 1`) entre steps (hidden em mobile)
- [ ] Steps entram com delay escalonado (stagger 0.2s)
- [ ] Numeração: "01", "02", "03" em font-cinzel pequeno

### Features (`#features`)
- [ ] Criar `src/components/landing/Features.tsx`
- [ ] Fundo `#111827`
- [ ] Título: "Por que o Family Quest é **diferente**"
- [ ] Grid 2x2 de feature cards:
  1. 🪙 Economia Real
  2. 📈 Educação Financeira
  3. 🎮 Design de Game
  4. 🏅 Leaderboard Familiar
- [ ] Hover com Framer Motion: `borderColor: #F5C518`, `boxShadow: glow dourado`, `scale: 1.02`
- [ ] `useInView` para animação de entrada

## Critérios de Aceitação
- [ ] Todas as animações usam `useInView` com `once: true`
- [ ] SpotlightCard funciona nos pain cards
- [ ] Connector line na HowItWorks anima ao entrar na viewport
- [ ] Grid 2x2 em desktop, 1 coluna em mobile nas Features
- [ ] Grid 3 colunas em desktop, 1 em mobile na PainSection

## Arquivos Criados/Modificados
- `src/components/landing/PainSection.tsx`
- `src/components/landing/HowItWorks.tsx`
- `src/components/landing/Features.tsx`
