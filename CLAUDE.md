# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) al trabajar con código en este repositorio.

## Sobre Allia Studio

### Identidad y Propósito

**Allia Studio** es un **Tech Venture Studio** y agencia de desarrollo de software especializada en Inteligencia Artificial. Nuestra misión es cerrar la brecha entre la visión de negocio y la ejecución técnica, actuando como socios tecnológicos estratégicos para fundadores y empresas.

**Propósito Central**: Ayudar a expertos de industria a convertir sus ideas en productos reales. Proveemos el "músculo técnico" que muchos visionarios necesitan pero no tienen.

### Equipo

- **Fernando Choqque**: Computer Science + Visión de Producto
- **Carlos Flores**: Computer Science + Especialización en IA

### Modelo de Negocio Híbrido

Operamos bajo dos líneas de negocio complementarias:

#### Categoría A: Software a Medida (75-80% de actividad)
- **Modelo**: Fee-based (pago por proyecto)
- **Clientes**: Empresas consolidadas con presupuesto
- **Servicios**: Desarrollo Full-Stack, IA aplicada, automatización de procesos
- **Objetivo**: Flujo de caja estable y entregas profesionales

#### Categoría B: Venture Partnership (20% de actividad)
- **Modelo**: Equity-based (socios tecnológicos)
- **Clientes**: Fundadores visionarios en etapa temprana (early-stage)
- **Intercambio**: Desarrollo de producto a cambio de participación accionaria (equity bajo esquema de Vesting)
- **Rol**: Actuamos como CTO y equipo de ingeniería fundador
- **Objetivo**: Construcción de patrimonio a largo plazo

### Filosofía de Trabajo

**"Ingeniería, no Artesanía"** - Transformamos el desarrollo de software de un servicio artesanal a un proceso de ingeniería estructurado.

**Marco Operativo de 4 Fases**:
1. Discovery (Descubrimiento)
2. Diseño
3. Desarrollo
4. Lanzamiento

**Diferencial AI-First**: Integramos capacidades de IA (LLMs, Deep Learning) en el núcleo de los productos cuando esto genera diferenciación real.

### Propuesta de Valor

- Arquitecturas escalables (no prototipos que necesitan reescritura)
- Capacidad técnica robusta (Computer Science + IA)
- Compromiso a largo plazo en proyectos de equity
- Agnósticos a industria, especializados en ejecución técnica

---

## Descripción del Proyecto

Landing page de Allia Studio - Sitio web estático para comunicar nuestros servicios, modelo de negocio y facilitar el contacto con potenciales clientes y socios.

**Tecnología**: HTML/CSS/JavaScript vanilla (sin herramientas de compilación ni frameworks)
**Despliegue**: GitHub Pages en www.allia.dev

## Arquitectura Técnica

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
- **js/main.js** - Funcionalidad principal (lógica del menú móvil)
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
- **No usar `!important`** - mantener especificidad baja

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

## Comunicación de la Marca

### Mensajes Clave para el Sitio

**Elevator Pitch**: "Allia es el socio tecnológico que transforma la visión de expertos de industria en productos de software escalables e inteligentes, combinando la disciplina de la ingeniería con la innovación del Venture Building."

**Pilares de Comunicación**:
1. **Músculo Técnico**: Somos el equipo de ingeniería que falta
2. **Modelo Flexible**: Nos adaptamos a tu flujo de caja y ambición
3. **Compromiso Real**: No somos una agencia externa, nos volvemos socios
4. **AI-First**: Construimos sistemas inteligentes, no solo software tradicional

### Tono y Voz

- **Profesional pero accesible**: Evitar jerga excesiva
- **Orientado a resultados**: Enfocado en impacto de negocio, no solo tecnología
- **Confianza técnica**: Demostrar expertise sin ser arrogante
- **Claridad sobre el modelo**: Ser transparentes sobre cómo trabajamos
