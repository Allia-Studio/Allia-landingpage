# Allia Studio - Landing Page

Landing page para **Allia Studio**, agencia de desarrollo de software. Objetivo: convertir visitantes en leads calificados.

## Cómo Usar Esta Guía

- Empieza aquí para normas generales del proyecto
- Skills en `.claude/skills/` contienen patrones detallados
- Agentes en `.claude/agents/` para tareas especializadas
- Ver tablas Auto-invoke para saber cuándo cargar cada skill/agente

---

## Skills Disponibles

| Skill | Descripción | URL |
|-------|-------------|-----|
| `typescript` | Const types, strict mode, utility types | [SKILL.md](.claude/skills/typescript/SKILL.md) |
| `tailwind-4` | class:list, cn(), @theme, no var() | [SKILL.md](.claude/skills/tailwind-4/SKILL.md) |
| `tailwind-animations` | Plugin tailwind-animations, scroll, micro-interactions | [SKILL.md](.claude/skills/tailwind-animations/SKILL.md) |
| `astro-5` | Islands, slots, client:*, View Transitions | [SKILL.md](.claude/skills/astro-5/SKILL.md) |
| `ui-design` | Design systems, tokens, diseño distintivo | [SKILL.md](.claude/skills/ui-design/SKILL.md) |
| `accessibility` | WCAG, ARIA, diseño inclusivo | [SKILL.md](.claude/skills/accessibility/SKILL.md) |
| `commit` | Conventional commits | [SKILL.md](.claude/skills/commit/SKILL.md) |
| `changelog` | Keepachangelog format | [SKILL.md](.claude/skills/changelog/SKILL.md) |

---

## Agentes Disponibles

| Agente | Descripción | Skills Relacionadas |
|--------|-------------|---------------------|
| `frontend-developer` | Componentes Astro, responsive, performance | `astro-5`, `tailwind-4`, `tailwind-animations`, `accessibility` |
| `ui-ux-designer` | Design systems, UX, wireframes | `ui-design`, `accessibility` |
| `typescript-pro` | Tipos avanzados, generics, strict mode | `typescript` |
| `code-architect` | Arquitectura de features, blueprints | — |
| `unused-code-cleaner` | Limpieza de código muerto | — |

---

## Auto-invoke Skills

| Acción | Skill |
|--------|-------|
| Crear/modificar archivos `.astro` | `astro-5` |
| Aplicar estilos con `class`, `class:list`, `cn()` | `tailwind-4` |
| Definir tipos, interfaces, genéricos | `typescript` |
| Implementar animaciones, transiciones, scroll effects | `tailwind-animations` |
| Diseñar componentes, decisiones de UI | `ui-design` |
| Implementar ARIA, semántica HTML | `accessibility` |
| Crear git commit | `commit` |
| Actualizar CHANGELOG.md | `changelog` |

---

## Auto-invoke Agents

| Acción | Agente |
|--------|--------|
| Construir/modificar componentes Astro | `frontend-developer` |
| Diseñar UI, decisiones de UX | `ui-ux-designer` |
| Tipos TypeScript complejos, generics | `typescript-pro` |
| Planificar arquitectura de features | `code-architect` |
| Limpiar código no utilizado, post-refactor | `unused-code-cleaner` |

---

## Tech Stack

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Astro** | 5.x | Framework principal (SSG) |
| **Tailwind CSS** | 4.x | Sistema de estilos |
| **TypeScript** | — | Tipado estricto |
| **tailwind-animations** | latest | Animaciones |
| **shadcn/ui** | latest | Componentes base |

---

## Comandos Rápidos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linting
npm run format   # Formateo
```

---

## Recursos

- **Skills**: [.claude/skills/README.md](.claude/skills/README.md)
- **Agentes**: `.claude/agents/`
