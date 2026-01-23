---
name: tailwind
description: >
  Patrones y mejores prácticas de Tailwind CSS 4 para Astro.
  Usar cuando: Se apliquen estilos con Tailwind (class, class:list, cn()), especialmente con estilos dinámicos o condicionales.
license: MIT
metadata:
  author: allia-studio
  version: "1.0"
  scope: [root]
  auto_invoke: "Al aplicar estilos con Tailwind"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Árbol de Decisión

```
¿Existe clase de Tailwind?    → class="..."
¿Valor dinámico?              → style={{ width: `${x}%` }}
¿Estilos condicionales?       → class:list={[...]} en Astro
¿En archivo .ts?              → cn("base", condition && "variant")
¿Solo clases estáticas?       → class="..." (sin wrappers)
```

## Reglas Críticas

### Nunca usar var() en class

```astro
<!-- ❌ NUNCA: var() en class -->
<div class="bg-[var(--color-primary)]" />
<div class="text-[var(--text-color)]" />

<!-- ✅ SIEMPRE: Clases semánticas de Tailwind -->
<div class="bg-primary" />
<div class="text-slate-400" />
```

### Nunca usar colores Hex

```astro
<!-- ❌ NUNCA: Colores hex en class -->
<p class="text-[#ffffff]" />
<div class="bg-[#1e293b]" />

<!-- ✅ SIEMPRE: Clases de color de Tailwind -->
<p class="text-white" />
<div class="bg-slate-800" />
```

## class:list en Astro (Preferido)

```astro
---
const { isActive, variant, disabled } = Astro.props;
---

<!-- ✅ Usar class:list para clases condicionales -->
<div class:list={[
  "rounded-lg border p-4",
  { "border-blue-500": isActive },
  variant === "primary" && "bg-blue-600 text-white",
  variant === "secondary" && "bg-slate-200 text-slate-800",
  disabled && "opacity-50 cursor-not-allowed",
]}>
  <slot />
</div>
```

### Cuándo NO usar class:list

```astro
<!-- ❌ Clases estáticas - wrapper innecesario -->
<div class:list={["flex items-center gap-2"]} />

<!-- ✅ Usar class directamente -->
<div class="flex items-center gap-2" />
```

## Utilidad cn() (Para archivos .ts)

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```typescript
// ✅ Usar cn() en archivos TypeScript
import { cn } from "@/lib/utils";

const buttonClasses = cn(
  "px-4 py-2 rounded-lg font-medium",
  variant === "primary" && "bg-blue-600 text-white",
  disabled && "opacity-50 cursor-not-allowed"
);
```

## Valores Dinámicos

```astro
<!-- ✅ style para valores verdaderamente dinámicos -->
<div style={{ width: `${percentage}%` }} />
<div style={{ opacity: isVisible ? 1 : 0 }} />

<!-- ✅ CSS custom properties para animaciones -->
<div style={`--progress: ${value}%`} class="progress-bar" />
```

## Patrones Comunes

### Layout de Secciones

```astro
<!-- Sección estándar -->
<section class="py-16 md:py-24 lg:py-32">
  <div class="container mx-auto px-4 md:px-6">
    <slot />
  </div>
</section>

<!-- Sección con fondo alternativo -->
<section class="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
  <div class="container mx-auto px-4 md:px-6 max-w-4xl">
    <slot />
  </div>
</section>
```

### Flexbox

```astro
<div class="flex items-center justify-between gap-4" />
<div class="flex flex-col gap-2" />
<div class="inline-flex items-center gap-2" />

<!-- Responsive: columna en móvil, fila en desktop -->
<div class="flex flex-col md:flex-row md:items-center gap-4" />
```

### Grid

```astro
<!-- Grid responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />

<!-- Grid auto-fit para cards -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6" />
```

### Tipografía

```astro
<!-- Headings -->
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white" />
<h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white" />
<h3 class="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100" />

<!-- Texto de cuerpo -->
<p class="text-base text-slate-600 dark:text-slate-300" />
<p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300" />

<!-- Texto pequeño -->
<span class="text-sm text-slate-500 dark:text-slate-400" />
```

### Botones

```astro
<!-- Primary -->
<button class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors" />

<!-- Secondary -->
<button class="px-6 py-3 bg-slate-200 text-slate-800 font-medium rounded-lg hover:bg-slate-300 transition-colors dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600" />

<!-- Outline -->
<button class="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors" />
```

### Cards

```astro
<!-- Card básica -->
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
  <slot />
</div>

<!-- Card con hover -->
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
  <slot />
</div>
```

### Estados Interactivos

```astro
<button class="hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 transition-all" />
<input class="focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors" />
<a class="hover:text-blue-600 hover:underline underline-offset-4 transition-colors" />
```

### Responsive

```astro
<!-- Mobile-first -->
<div class="w-full md:w-1/2 lg:w-1/3" />
<div class="hidden md:block" />
<div class="block md:hidden" />
<div class="text-sm md:text-base lg:text-lg" />
<div class="p-4 md:p-6 lg:p-8" />
```

### Dark Mode

```astro
<div class="bg-white dark:bg-slate-900" />
<p class="text-slate-900 dark:text-white" />
<div class="border-slate-200 dark:border-slate-700" />
```

## Valores Arbitrarios (Escape)

```astro
<!-- ✅ OK para valores únicos fuera del design system -->
<div class="w-[327px]" />
<div class="top-[117px]" />
<div class="grid-cols-[1fr_2fr_1fr]" />

<!-- ❌ NO usar para colores - usar tema -->
<div class="bg-[#1e293b]" />
```

## Referencia de Espaciado

```
4   = 1rem   = 16px
6   = 1.5rem = 24px
8   = 2rem   = 32px
12  = 3rem   = 48px
16  = 4rem   = 64px
24  = 6rem   = 96px
32  = 8rem   = 128px
```
