---
name: astro-5
description: >
  Astro 5 component patterns and islands architecture.
  Trigger: When creating/modifying .astro files (components, layouts, pages, slots, client directives, View Transitions).
license: Apache-2.0
metadata:
  author: allia-studio
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "Create/modify .astro files"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Component Structure (REQUIRED)

```astro
---
// 1. Type imports first
import type { Props as ButtonProps } from './Button.astro';

// 2. Component imports
import Button from './ui/Button.astro';

// 3. Props interface (always define)
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
  class?: string;  // Always allow class override
}

// 4. Destructure with defaults
const {
  title,
  variant = 'primary',
  class: className  // Rename to avoid reserved word
} = Astro.props;

// 5. Logic
const isActive = variant === 'primary';
---

<!-- 6. Template -->
<div class:list={["base", { "active": isActive }, className]}>
  <slot />
</div>

<!-- 7. Scoped styles (optional) -->
<style>
  .base { /* scoped to this component */ }
</style>
```

## Props Interface

```astro
---
// ✅ ALWAYS: Define Props interface
interface Props {
  title: string;
  description?: string;  // Optional with ?
  variant?: 'primary' | 'secondary';
  class?: string;
}

const {
  title,
  description = 'Default',
  variant = 'primary',
  class: className
} = Astro.props;
---

// ❌ NEVER: Skip Props interface
const { title } = Astro.props;  // NO!
```

## class:list (Conditional Classes)

```astro
---
const { variant = 'primary', disabled, class: className } = Astro.props;
---

<!-- ✅ Array syntax -->
<button class:list={[
  "px-4 py-2 rounded",
  variant === 'primary' && "bg-blue-500 text-white",
  variant === 'secondary' && "bg-gray-200",
  disabled && "opacity-50 cursor-not-allowed",
  className
]}>
  <slot />
</button>

<!-- ✅ Object syntax -->
<div class:list={[
  "card",
  {
    "card-sm": size === 'sm',
    "card-lg": size === 'lg',
  }
]}>

<!-- ❌ Static classes - unnecessary -->
<div class:list={["flex items-center"]} />

<!-- ✅ Just use class -->
<div class="flex items-center" />
```

## Slots

```astro
<!-- Default slot -->
<div class="container">
  <slot />
</div>

<!-- Named slots -->
<article>
  <header><slot name="header" /></header>
  <main><slot /></main>
  <footer><slot name="footer" /></footer>
</article>

<!-- Usage -->
<Article>
  <h1 slot="header">Title</h1>
  <p>Body content (default slot)</p>
  <span slot="footer">Footer</span>
</Article>

<!-- Fallback content -->
<slot>Default if no children</slot>

<!-- Conditional slot rendering -->
{Astro.slots.has('sidebar') && (
  <aside>
    <slot name="sidebar" />
  </aside>
)}
```

## Client Directives (Islands)

```astro
<!-- Load and hydrate immediately (critical UI) -->
<Counter client:load />

<!-- Hydrate when visible in viewport (below fold) -->
<HeavyComponent client:visible />

<!-- Hydrate when browser is idle (non-essential) -->
<Analytics client:idle />

<!-- Hydrate on media query match -->
<Sidebar client:media="(min-width: 768px)" />

<!-- Client-only, skip SSR (browser APIs) -->
<BrowserWidget client:only="react" />
```

### Decision Tree

```
Need interactivity?       → Use client directive
Critical for first paint? → client:load
Below the fold?           → client:visible
Non-essential?            → client:idle
Desktop only?             → client:media="(min-width: 768px)"
Uses browser APIs?        → client:only="framework"
```

## View Transitions (Astro 5)

```astro
---
// Enable in layout
import { ClientRouter } from 'astro:transitions';
---

<html>
  <head>
    <ClientRouter />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Transition Directives

```astro
<!-- Name elements for transition matching -->
<img transition:name="hero-image" src={src} />

<!-- Animation type -->
<h1 transition:animate="fade">Title</h1>
<div transition:animate="slide">Content</div>

<!-- Persist across navigations (keep state) -->
<video controls transition:persist>
  <source src="/video.mp4" />
</video>

<!-- Persist island state -->
<Counter client:load transition:persist />

<!-- Combined -->
<aside transition:name="sidebar" transition:persist>
```

## Scripts

```astro
<!-- Bundled, runs once (default) -->
<script>
  console.log('Runs once when module loads');
</script>

<!-- Inline, runs for each instance -->
<script is:inline>
  console.log('Runs for each component instance');
</script>

<!-- Pass server variables to client -->
<script define:vars={{ message, userId }}>
  console.log(message, userId);
</script>
```

## Scoped Styles

```astro
<style>
  /* Scoped to this component */
  .card {
    padding: 1rem;
  }

  /* Global escape hatch */
  :global(.external-class) {
    color: red;
  }
</style>

<!-- Pass variables from frontmatter -->
<style define:vars={{ color: accentColor }}>
  h1 { color: var(--color); }
</style>
```

## Layout Pattern

```astro
---
import { ClientRouter } from 'astro:transitions';
import '../styles/global.css';

interface Props {
  title?: string;
  description?: string;
}

const { title = 'Site', description = 'Description' } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <ClientRouter />
  </head>
  <body>
    <a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>
    <slot />
  </body>
</html>
```

## Resources

- [Astro Docs](https://docs.astro.build/)
- Related skills: `typescript`, `tailwind-4`
