---
name: astro-5
description: >
  Patrones y mejores prácticas de Astro 5.
  Usar cuando: Se creen o modifiquen archivos .astro, se configuren islands, Content Collections, o View Transitions.
license: MIT
metadata:
  author: allia-studio
  version: "1.0"
  scope: [root]
  auto_invoke: "Al crear o modificar archivos .astro"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Componentes Astro

```astro
---
// Frontmatter: se ejecuta en build time (servidor)
import Button from "@/components/ui/Button.astro";
import { Image } from "astro:assets";
import heroImage from "@/assets/images/hero.png";

// Lógica, imports, fetch de datos van aquí
const currentYear = new Date().getFullYear();
---

<!-- Template: HTML con expresiones -->
<section class="py-16">
  <h2>Título</h2>
  <p>Año actual: {currentYear}</p>
  <Image src={heroImage} alt="Hero image" />
  <Button>Click me</Button>
</section>

<style>
  /* Scoped por defecto - solo afecta este componente */
  section {
    container-type: inline-size;
  }
</style>
```

## Props con TypeScript (OBLIGATORIO)

```astro
---
// ✅ SIEMPRE: Definir interface Props
interface Props {
  title: string;
  description?: string;
  variant?: "primary" | "secondary";
  class?: string;  // Para pasar clases desde el padre
}

const {
  title,
  description,
  variant = "primary",
  class: className
} = Astro.props;
---

<article class:list={["card", className]}>
  <h3>{title}</h3>
  {description && <p>{description}</p>}
</article>
```

```astro
---
// ❌ NUNCA: Props sin tipado
const { title, description } = Astro.props;
---
```

## Slots

```astro
---
// Layout.astro - Slots nombrados
---
<html>
  <head>
    <slot name="head" />
  </head>
  <body>
    <slot />  <!-- Slot por defecto -->
    <footer>
      <slot name="footer">Contenido por defecto</slot>
    </footer>
  </body>
</html>
```

```astro
---
// Usando el layout con slots
import Layout from "@/layouts/Layout.astro";
---

<Layout>
  <Fragment slot="head">
    <meta name="robots" content="noindex" />
  </Fragment>

  <main>Contenido principal (slot por defecto)</main>

  <div slot="footer">Footer personalizado</div>
</Layout>
```

## Islands Architecture (client:*)

```astro
---
import StaticCard from "@/components/ui/Card.astro";      // Zero JS
import MobileMenu from "@/components/MobileMenu";         // React/Vue/Svelte
import Carousel from "@/components/Carousel";
import ThemeToggle from "@/components/ThemeToggle";
---

<!-- Estático: sin directiva -->
<StaticCard title="Fast" />

<!-- Interactivo: elegir la directiva correcta -->
<MobileMenu client:load />       <!-- Hidratar inmediatamente -->
<Carousel client:visible />      <!-- Hidratar cuando sea visible -->
<ThemeToggle client:idle />      <!-- Hidratar cuando el browser esté idle -->
```

### Cuándo Usar Cada Directiva

| Directiva | Usar para |
|-----------|-----------|
| `client:load` | Navegación, elementos críticos above the fold |
| `client:idle` | No críticos: theme toggle, analytics |
| `client:visible` | Below the fold: carousels, testimonios con slider |
| `client:media="(max-width: 768px)"` | Solo en ciertos viewports: menú móvil |
| `client:only="react"` | Componentes que no pueden hacer SSR |

## class:list

```astro
---
const { isActive, variant } = Astro.props;
---

<!-- ✅ Usar class:list para clases condicionales -->
<div class:list={[
  "base-class",
  { "active": isActive },
  variant === "primary" && "bg-blue-600",
  variant === "secondary" && "bg-slate-200",
]}>
  <slot />
</div>

<!-- ❌ No usar concatenación de strings -->
<div class={`base-class ${isActive ? 'active' : ''}`}>
```

## Content Collections

```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    avatar: z.string().optional(),
  }),
});

export const collections = { services, testimonials };
```

```astro
---
// Usando Content Collections
import { getCollection } from "astro:content";
import ServiceCard from "@/components/ui/ServiceCard.astro";

const services = await getCollection("services");
const sorted = services.sort((a, b) => a.data.order - b.data.order);
---

<section>
  {sorted.map((service) => (
    <ServiceCard
      title={service.data.title}
      description={service.data.description}
      icon={service.data.icon}
    />
  ))}
</section>
```

## Imágenes (OBLIGATORIO)

```astro
---
import { Image } from "astro:assets";
import heroImage from "@/assets/images/hero.png";
---

<!-- ✅ SIEMPRE: Usar componente Image de Astro -->
<Image
  src={heroImage}
  alt="Descripción clara de la imagen"
  width={800}
  height={600}
  loading="eager"  <!-- Above the fold -->
/>

<Image
  src={heroImage}
  alt="Descripción clara"
  loading="lazy"   <!-- Below the fold (default) -->
/>

<!-- ❌ NUNCA: img sin optimizar para imágenes locales -->
<img src="/images/hero.png" alt="Hero" />
```

## View Transitions

```astro
---
// Layout.astro
import { ViewTransitions } from "astro:transitions";
---

<html>
  <head>
    <ViewTransitions />
  </head>
  <body>
    <nav transition:persist>...</nav>  <!-- Persiste entre páginas -->
    <slot />
  </body>
</html>
```

```astro
<!-- Transiciones nombradas -->
<img transition:name="hero-image" src={image} alt="Hero" />

<!-- Animación personalizada -->
<div transition:animate="slide">...</div>
```

## Renderizado Condicional

```astro
---
const { items, showEmpty = false } = Astro.props;
const hasItems = items.length > 0;
---

<!-- Condicional simple -->
{hasItems && <List items={items} />}

<!-- If/else -->
{hasItems ? (
  <ul>
    {items.map((item) => <li>{item.name}</li>)}
  </ul>
) : showEmpty && (
  <p>No hay elementos</p>
)}

<!-- Evitar renderizar null/undefined -->
{description && <p>{description}</p>}
```

## Import Aliases

```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@assets": "/src/assets",
      },
    },
  },
});
```

```astro
---
// ✅ Usar aliases
import Layout from "@/layouts/Layout.astro";
import Button from "@components/ui/Button.astro";
import heroImage from "@assets/images/hero.png";

// ❌ Evitar rutas relativas profundas
import Layout from "../../../layouts/Layout.astro";
---
```
