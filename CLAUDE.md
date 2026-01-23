# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Allia Studio - Landing Page

## Cómo Usar Esta Guía

- Empieza aquí para normas generales del proyecto.
- Las skills en `/skills/` contienen patrones detallados bajo demanda.
- Las skills con etiqueta `mindset` son guías filosóficas, las de `stack` y `practices` son referencia técnica.

---

## Skills Disponibles

### Tech Stack `stack`
Patrones y código específico de tecnologías.

| Skill | Descripción | URL |
|-------|-------------|-----|
| `astro-5` | Islands, slots, client:*, View Transitions | [SKILL.md](skills/astro-5/SKILL.md) |
| `tailwind-4` | class:list, cn(), no var() en className | [SKILL.md](skills/tailwind-4/SKILL.md) |
| `typescript` | Const types, interfaces, utility types | [SKILL.md](skills/typescript/SKILL.md) |
| `tailwind-animations` | Plugin tailwind-animations, scroll, microinteracciones | [SKILL.md](skills/tailwind-animations/SKILL.md) |

### Best Practices `practices`
Estándares técnicos universales.

| Skill | Descripción | URL |
|-------|-------------|-----|
| `seo` | Meta tags, Open Graph, structured data | [SKILL.md](skills/seo/SKILL.md) |
| `responsive` | Mobile-first, breakpoints, layouts | [SKILL.md](skills/responsive/SKILL.md) |
| `images` | WebP/AVIF, lazy loading, CLS | [SKILL.md](skills/images/SKILL.md) |
| `forms` | Validación, estados, honeypot | [SKILL.md](skills/forms/SKILL.md) |

### Mindset `mindset`
Guías filosóficas de cómo pensar sobre el problema.

| Skill | Descripción | URL |
|-------|-------------|-----|
| `frontend-design` | Diseño distintivo, evitar "AI slop" | [SKILL.md](skills/frontend-design/SKILL.md) |
| `accessibility` | Diseño inclusivo, POUR, empatía | [SKILL.md](skills/accessibility/SKILL.md) |
| `performance` | Respeto por el usuario, rendimiento | [SKILL.md](skills/performance/SKILL.md) |
| `allia-voice` | Comunicación de marca, tono, copy | [SKILL.md](skills/allia-voice/SKILL.md) |

### Project `context`
Datos y contexto específico de Allia.

| Skill | Descripción | URL |
|-------|-------------|-----|
| `allia-context` | Negocio, servicios, propuesta de valor | [SKILL.md](skills/allia-context/SKILL.md) |

### Meta `meta`
Sobre el sistema de skills.

| Skill | Descripción | URL |
|-------|-------------|-----|
| `skill-creator` | Cómo crear nuevas skills | [SKILL.md](skills/skill-creator/SKILL.md) |
| `skill-sync` | Sincronizar skills con CLAUDE.md | [SKILL.md](skills/skill-sync/SKILL.md) |

---

### Auto-invoke Skills

Cuando realices estas acciones, SIEMPRE invoca la skill correspondiente PRIMERO:

| Acción | Skill | Etiqueta |
|--------|-------|----------|
| Crear/modificar archivos `.astro` | `astro-5` | `stack` |
| Aplicar estilos con `class`, `class:list`, `cn()` | `tailwind-4` | `stack` |
| Definir tipos, interfaces, genéricos | `typescript` | `stack` |
| Implementar animaciones, transiciones | `tailwind-animations` | `stack` |
| Configurar meta tags, Open Graph | `seo` | `practices` |
| Implementar layouts responsive | `responsive` | `practices` |
| Optimizar imágenes, usar WebP/AVIF | `images` | `practices` |
| Crear formularios, validación | `forms` | `practices` |
| Diseñar componentes con alto valor visual | `frontend-design` | `mindset` |
| Implementar ARIA, semántica HTML | `accessibility` | `mindset` |
| Optimizar velocidad, Core Web Vitals | `performance` | `mindset` |
| Escribir copy, CTAs, mensajes de marca | `allia-voice` | `mindset` |
| Necesitar datos del negocio, servicios | `allia-context` | `context` |
| Crear/modificar una skill | `skill-creator` | `meta` |
| Actualizar CLAUDE.md con nueva skill | `skill-sync` | `meta` |

---

## Proyecto

Landing page para **Allia Studio**, agencia de desarrollo de software con modelo híbrido (70% tradicional, 30% programa de financiamiento). El objetivo es convertir visitantes en leads calificados.

## Tech Stack

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Astro** | 5.x | Framework principal (SSG) |
| **Tailwind CSS** | 4.x | Sistema de estilos |
| **TypeScript** | 5.x | Tipado estricto |
| **tailwind-animations** | latest | Animaciones |
| **shadcn/ui** | latest | Componentes base |

## Arquitectura

- **`src/lib/constants.ts`**: Fuente única de verdad para contenido (SITE, NAV_LINKS, HERO, SERVICES, etc.)
- **`src/lib/types.ts`**: Tipos TypeScript compartidos (NavLink, Service, ButtonProps, etc.)
- **Secciones**: Componentes en `src/components/sections/` importan constantes y tipos de `lib/`
- **Cal.com**: Integración para agendar reuniones, configuración en `CALCOM` constant
- **Tailwind via Vite**: Configurado en `astro.config.mjs` con `@tailwindcss/vite`

---

## Convenciones Críticas

### Componentes Astro

```astro
---
// SIEMPRE: TypeScript interface para Props
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
  class?: string;
}

const { title, variant = 'primary', class: className } = Astro.props;
---

<!-- SIEMPRE: class:list para clases condicionales -->
<div class:list={["base-class", { "variant-class": variant === 'primary' }, className]}>
  <slot />
</div>
```

### Tailwind CSS 4

```astro
<!-- ✅ CORRECTO: Clases de Tailwind directamente -->
<div class="bg-blue-600 text-white p-4">

<!-- ❌ NUNCA: Variables CSS ni hex en className -->
<div class="bg-[var(--primary)]">  <!-- PROHIBIDO -->
<div class="bg-[#1a365d]">         <!-- PROHIBIDO -->
```

### TypeScript Estricto

```typescript
// ✅ SIEMPRE: Const types para valores fijos
const SERVICES = ['web', 'mobile', 'ai'] as const;
type Service = (typeof SERVICES)[number];

// ❌ NUNCA usar 'any'
function process(data: any) { }  // PROHIBIDO
```

---

## Comandos Rápidos

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Build
npm run build        # Build de producción
npm run preview      # Preview del build

# Calidad
npm run lint         # Linting
npm run format       # Formateo
```

---

## Checklist Pre-Deploy

```
□ Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
□ Lighthouse Score: > 90 en todas las categorías
□ Imágenes: WebP/AVIF, lazy loading, dimensiones definidas
□ SEO: Meta tags, Open Graph, structured data
□ Accesibilidad: WCAG 2.1 AA, navegación por teclado
□ Responsive: Probado en 320px, 768px, 1024px, 1440px
□ Formularios: Validación, estados de error, anti-spam
□ Animaciones: prefers-reduced-motion respetado
```

---

## Recursos

- **Skills**: Ver carpeta `/skills/` para documentación detallada
- **Astro Docs**: https://docs.astro.build/
- **Tailwind Docs**: https://tailwindcss.com/docs
- **tailwind-animations**: https://tailwind-animations.com/
