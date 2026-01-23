# Skills

Skills reutilizables para Claude Code. Definen patrones, convenciones y guías que se auto-invocan según el contexto de trabajo.

## Estructura

```
.claude/skills/
├── typescript/           # Const types, strict mode, utility types
├── tailwind-4/           # class:list, cn(), @theme, no var()
├── tailwind-animations/  # Plugin tailwind-animations, scroll effects
├── astro-5/              # Islands, slots, View Transitions
├── ui-design/            # Design systems, tokens, diseño distintivo
├── accessibility/        # WCAG, ARIA, diseño inclusivo
├── commit/               # Conventional commits
└── changelog/            # Keepachangelog format
```

## Cómo Funcionan las Skills

1. Cada skill tiene un `SKILL.md` con YAML frontmatter:
   - `name`: Identificador de la skill
   - `description`: Qué hace + `Trigger:` cuándo invocarla
   - `metadata.auto_invoke`: Acciones que disparan esta skill

2. Cuando realizas una acción que coincide con el trigger de una skill, Claude debe cargar esa skill primero.

3. Las skills pueden referenciarse entre sí y vincular a subdirectorios `scripts/` o `references/`.

## Referencia Rápida

| Skill | Trigger |
|-------|---------|
| `typescript` | Definir tipos, interfaces, genéricos |
| `tailwind-4` | Aplicar clases Tailwind, usar @theme |
| `tailwind-animations` | Implementar animaciones, scroll effects |
| `astro-5` | Crear/modificar archivos .astro |
| `ui-design` | Diseñar componentes, decisiones de UI |
| `accessibility` | Implementar ARIA, semántica HTML |
| `commit` | Crear git commits |
| `changelog` | Actualizar CHANGELOG.md |

## Skills por Categoría

### Tech Stack
Patrones específicos de tecnologías.

| Skill | Descripción |
|-------|-------------|
| `astro-5` | Islands architecture, slots, client directives, View Transitions |
| `tailwind-4` | CSS-first config, @theme, class:list, cn() utility |
| `typescript` | Const assertions, utility types, strict mode |
| `tailwind-animations` | Scroll-triggered animations, micro-interactions |

### Design & UX
Guías de diseño y experiencia de usuario.

| Skill | Descripción |
|-------|-------------|
| `ui-design` | Design tokens, 8pt grid, atomic design, tipografía distintiva |
| `accessibility` | WCAG 2.1, ARIA patterns, diseño inclusivo |

### Workflow
Convenciones de desarrollo.

| Skill | Descripción |
|-------|-------------|
| `commit` | Conventional commits format |
| `changelog` | Keepachangelog.com format |
