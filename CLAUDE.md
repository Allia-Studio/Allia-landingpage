# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) al trabajar con código en este repositorio.

## Descripción del Proyecto

Landing page de Allia Studio - Un sitio web estático para una agencia de desarrollo de software. Este es un proyecto puro de HTML/CSS/JavaScript (sin herramientas de compilación ni frameworks) diseñado para desplegarse en GitHub Pages en www.allia.dev.

## Arquitectura

### Estructura de Archivos

- **index.html** - Punto de entrada de la aplicación de una sola página con todas las secciones de contenido
- **css/** - Arquitectura CSS modular importada mediante main.css
    - `main.css` - Hoja de estilos maestra que importa todos los módulos
    - `variables.css` - Sistema de diseño (colores, tipografía, espaciado, sombras, z-index)
    - `base.css` - Resets globales y estilos base
    - `layout.css` - Barra de navegación, contenedor y diseños de sección
    - `components.css` - Componentes UI reutilizables (botones, tarjetas)
    - `animations.css` - Definiciones de animaciones y transiciones
    - `responsive.css` - Breakpoints responsive mobile-first
- **js/main.js** - Funcionalidad principal (actualmente solo lógica del menú móvil)
- **assets/** - Recursos estáticos (favicons, imágenes)

### Sistema de Diseño (variables.css)

El proyecto utiliza propiedades personalizadas CSS definidas en `:root` para consistencia:

- **Colores**: Tema oscuro (`--bg-primary: #121212`) con color de marca amarillo (`--brand-primary: #ffd43b`)
- **Tipografía**: Tres familias de fuentes - BBH Hegarty (display), Changa One (encabezados), Montserrat (cuerpo)
- **Espaciado**: Escala desde `--space-1` (4px) hasta `--space-12` (96px)
- **Transiciones**: Tres velocidades - rápida (150ms), base (300ms), lenta (500ms)
- **Z-index**: Sistema por capas desde `--z-base: 1` hasta `--z-tooltip: 3000`

### Integraciones de Terceros

- **Cal.com**: Widget de programación embebido inicializado en index.html (líneas 108-154)
    - Los elementos disparadores usan atributos `data-cal-link`, `data-cal-namespace` y `data-cal-config`
    - Actualmente configurado para el usuario "carlos-alonso-flores-panduro-zejpqc/30min"

## Desarrollo

### Ejecutar Localmente

Este es un sitio estático sin proceso de compilación. Usa cualquier servidor web local:

```bash
# Python 3
python -m http.server 8000

# Node.js (si http-server está instalado)
npx http-server

# PHP
php -S localhost:8000
```

Luego visita http://localhost:8000

### Modificaciones CSS

El CSS es modular - edita archivos específicos en lugar de agregar todo en uno:

- Estilos globales → `base.css`
- Layout/navegación → `layout.css`
- Nuevos componentes → `components.css`
- Animaciones → `animations.css`
- Ajustes responsive → `responsive.css`
- Tokens de diseño → `variables.css`

**Importante**: Las importaciones CSS en main.css usan URLs relativas (`@import url("variables.css")`). El orden importa - las variables deben cargarse primero.

### Implementación del Menú Móvil

El menú hamburguesa móvil (js/main.js) maneja:

- Alternar visibilidad con clase `.active` tanto en el botón como en el menú
- Bloqueo de scroll del body cuando el menú está abierto
- Auto-cierre al hacer clic en enlace, clic fuera o al redimensionar ventana a desktop
- Breakpoint en 768px (coincide con responsive.css)

### Despliegue

Desplegado mediante GitHub Pages. El archivo CNAME apunta a www.allia.dev. Cualquier push a la rama main se despliega automáticamente.

## Convenciones de Código

### CSS

- Usar propiedades personalizadas CSS de variables.css en lugar de valores hardcodeados
- Seguir nomenclatura tipo BEM: `.navbar`, `.navbar-container`, `.navbar-logo`
- Enfoque mobile-first - estilos base para móvil, media queries para pantallas más grandes
- Preferir espaciado semántico (`var(--space-4)`) sobre números mágicos

### JavaScript

- Solo JavaScript vanilla (sin frameworks)
- Patrón de módulo con funciones `init` (ej., `initMobileMenu()`)
- Evento DOMContentLoaded para inicialización
- Comprobaciones de null antes de acceder a elementos DOM

### HTML

- Idioma español (`lang="es"`)
- Elementos semánticos HTML5
- Atributos de accesibilidad (ej., `aria-label` en toggle móvil)
- Recursos externos cargados vía CDN (Google Fonts, Cal.com)

## Problemas Comunes

### Integración Cal.com

Al agregar nuevos disparadores de contacto, asegúrate de que los tres atributos de datos estén presentes:

```html
<a
    href="#"
    data-cal-link="username/event-type"
    data-cal-namespace="namespace-id"
    data-cal-config='{"layout":"column_view"}'
>
    Contacto
</a>
```

### Menú Móvil

La visibilidad del menú móvil se controla mediante la clase `.active`. El CSS responsive (responsive.css) maneja las propiedades de display en diferentes breakpoints. No agregues estilos de display inline.

### Carga de Fuentes

Las fuentes se cargan vía @import en main.css. Las fuentes pesadas (BBH Hegarty) pueden causar FOUT (Flash of Unstyled Text). Este es un comportamiento esperado.
