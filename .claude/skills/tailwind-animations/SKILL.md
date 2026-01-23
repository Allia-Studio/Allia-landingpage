---
name: tailwind-animations
description: >
  Animation utilities with tailwind-animations plugin.
  Trigger: When implementing animations, transitions, scroll-triggered effects, or micro-interactions using Tailwind classes.
license: Apache-2.0
metadata:
  author: allia-studio
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "Implement animations, transitions"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Installation

```bash
npm install tailwind-animations
```

## Configuration

```javascript
// tailwind.config.js
import animations from 'tailwind-animations'

export default {
  plugins: [animations]
}
```

```css
/* CSS Import */
@import 'tailwindcss';
@import 'tailwind-animations';
```

## Available Animations (70+)

### Entrance Effects

| Animation | Class |
|-----------|-------|
| Fade In | `animate-fade-in` |
| Slide In Top | `animate-slide-in-top` |
| Slide In Bottom | `animate-slide-in-bottom` |
| Slide In Left | `animate-slide-in-left` |
| Slide In Right | `animate-slide-in-right` |
| Zoom In | `animate-zoom-in` |
| Blurred Fade In | `animate-blurred-fade-in` |
| Bounce Fade In | `animate-bounce-fade-in` |

### Exit Effects

| Animation | Class |
|-----------|-------|
| Fade Out | `animate-fade-out` |
| Slide Out Top | `animate-slide-out-top` |
| Zoom Out | `animate-zoom-out` |

### Attention Seekers

| Animation | Class |
|-----------|-------|
| Shake | `animate-shake` |
| Bounce | `animate-bounce` |
| Pulse | `animate-pulse` |
| Heartbeat | `animate-heartbeat` |
| Jelly | `animate-jelly` |
| Wobble | `animate-wobble` |
| Rubber Band | `animate-rubber-band` |

### Rotations

| Animation | Class |
|-----------|-------|
| Rotate 360 | `animate-rotate-360` |
| Rotate 90 | `animate-rotate-90` |
| Flip | `animate-flip` |
| Spin Clockwise | `animate-spin-clockwise` |

## Timing Controls

```html
<!-- Duration -->
<div class="animate-fade-in duration-300">Fast</div>
<div class="animate-fade-in duration-500">Normal</div>
<div class="animate-fade-in duration-1000">Slow</div>

<!-- Delay -->
<div class="animate-fade-in delay-100">Delayed 100ms</div>
<div class="animate-fade-in delay-300">Delayed 300ms</div>

<!-- Speed presets -->
<div class="animate-fade-in animate-slower">2x slower</div>
<div class="animate-fade-in animate-slow">1.5x slower</div>
<div class="animate-fade-in animate-fast">1.5x faster</div>
<div class="animate-fade-in animate-faster">2x faster</div>
```

## Scroll-Triggered Animations

### View Timeline

```html
<!-- Trigger when element enters viewport -->
<div class="animate-fade-in timeline-view">
  Animates when visible
</div>
```

### Scroll Progress

```html
<!-- Link animation to scroll position -->
<div class="animate-slide-in-bottom timeline-scroll">
  Progress tied to scroll
</div>
```

### Animation Range

```html
<!-- Preset ranges -->
<div class="animate-fade-in timeline-view animate-range-gradual">10%-90%</div>
<div class="animate-fade-in timeline-view animate-range-moderate">20%-80%</div>
<div class="animate-fade-in timeline-view animate-range-brisk">30%-70%</div>
<div class="animate-fade-in timeline-view animate-range-rapid">40%-60%</div>

<!-- Custom range -->
<div class="animate-fade-in timeline-view animate-range-[entry_0%_cover_50%]">
  Custom range
</div>
```

## Common Patterns

### Staggered Reveal

```html
<div class="animate-fade-in timeline-view delay-0">Item 1</div>
<div class="animate-fade-in timeline-view delay-100">Item 2</div>
<div class="animate-fade-in timeline-view delay-200">Item 3</div>
```

### Hero Entrance

```html
<h1 class="animate-blurred-fade-in duration-700">Main Title</h1>
<p class="animate-fade-in delay-300 duration-500">Subtitle</p>
```

### Hover Effects

```html
<button class="hover:animate-pulse">Hover me</button>
<div class="hover:animate-jelly">Interactive</div>
```

### Scroll Progress Bar

```html
<div class="fixed top-0 h-1 bg-accent animate-scale-x timeline-scroll origin-left" />
```

## Decision Tree

```
Need entrance effect?       → animate-fade-in, animate-slide-in-*
Need scroll-triggered?      → + timeline-view
Need scroll-synced?         → + timeline-scroll
Need staggered timing?      → + delay-* on each element
Need custom timing?         → + duration-* + animate-range-*
Need hover feedback?        → hover:animate-*
```

## Accessibility

**Always respect `prefers-reduced-motion`:**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Resources

- [tailwind-animations Docs](https://tailwind-animations.com/)
- Related skills: `tailwind-4`, `astro-5`
