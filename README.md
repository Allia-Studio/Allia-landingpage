# Allia Studio - Landing Page

Landing page para Allia Studio, agencia de desarrollo de software.

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS 4.x
- **Fonts:** Changa One, Rowdies, Inter
- **Deployment:** Static (SSG)

## Estructura del Proyecto

```
src/
├── components/
│   ├── icons/          # Iconos SVG reutilizables
│   ├── navigation/     # Navbar y navegación
│   ├── sections/       # Secciones de la landing
│   └── ui/             # Componentes base (Button, Card, Grid, Section)
├── layouts/
│   └── Layout.astro    # Layout principal
├── lib/
│   ├── constants.ts    # Constantes y configuración
│   └── types.ts        # Tipos TypeScript
├── pages/
│   └── index.astro     # Página principal
└── styles/
    └── global.css      # Tokens CSS y estilos globales
```

## Estrategia de JavaScript

Este proyecto sigue la arquitectura **Islands** de Astro con **Zero JS por defecto**:

### Principios

1. **Sin frameworks de UI** - No React, Vue, ni Svelte. Solo Astro components.
2. **JavaScript vanilla** - Interactividad con `<script>` tags nativos.
3. **Sin directivas client:** - Ningún componente usa `client:load`, `client:visible`, etc.
4. **Lazy loading** - Scripts externos (Cal.com) se cargan bajo demanda.

### Implementación

| Componente | JavaScript | Técnica |
|------------|------------|---------|
| Navbar | Scroll detection, mobile menu | `<script>` con AbortController |
| HeroSection | Typewriter animation | `<script define:vars>` |
| Layout | Cal.com integration | Lazy load on hover/focus |

### Performance

- **Event listeners:** Cleanup con AbortController para View Transitions
- **Scroll handlers:** `requestAnimationFrame` + `passive: true`
- **Focus management:** Focus trap en menú mobile
- **Animation:** Cancelación limpia en navegación

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Design Tokens

Los tokens de diseño están en `src/styles/global.css`:

- **Colores:** `--color-bg`, `--color-accent`, etc.
- **Tipografía:** `--font-title`, `--font-display`, `--font-primary`
- **Espaciado:** `--spacing-container`, `--spacing-nav-*`, `--spacing-hero-*`
- **Animaciones:** `--ease-out-expo`, `--transition-normal`
