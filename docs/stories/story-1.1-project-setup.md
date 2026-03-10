# Story 1.1: Setup Inicial do Projeto

## Status: Done

## Descrição
Inicializar o projeto React + TypeScript com Vite, instalar todas as dependências necessárias e configurar Tailwind CSS + animações globais.

## Contexto
Landing page standalone do Family Quest — Dark Fantasy RPG gamificação familiar.
Stack: React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Tarefas
- [ ] Scaffoldar projeto com `npm create vite@latest . -- --template react-ts`
- [ ] Instalar dependências: `framer-motion`, `lucide-react`
- [ ] Instalar e configurar Tailwind CSS + PostCSS + Autoprefixer
- [ ] Configurar `tailwind.config.js` com cores, fontes e keyframes custom
- [ ] Atualizar `src/index.css` com imports Google Fonts + @tailwind + classes utilitárias
- [ ] Atualizar `index.html` com meta tags SEO e Google Fonts link
- [ ] Criar estrutura de diretórios: `src/pages/`, `src/components/landing/`
- [ ] Limpar arquivos boilerplate desnecessários

## Critérios de Aceitação
- [ ] `npm run dev` inicia sem erros
- [ ] Tailwind classes funcionam (ex: `text-gold`, `bg-bg-primary`)
- [ ] Fonte Cinzel carrega corretamente
- [ ] Animações CSS globais definidas (float, glow-pulse, coin-spin)

## Arquivos Criados/Modificados
- `package.json`
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`
- `index.html`
- `vite.config.ts`

## Notas
Cores definidas no PRD:
- `--bg-primary: #0D0D0D`
- `--gold: #F5C518`
- `--purple-magic: #7B2FBE`
- `--text-primary: #E8E8E8`
