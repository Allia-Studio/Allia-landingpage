---
name: ui-design
description: >
  Distinctive UI design with design systems and tokens.
  Trigger: When designing components, UI decisions, creating design systems, or defining visual direction.
license: Apache-2.0
metadata:
  author: allia-studio
  version: "1.0"
  scope: [root, ui]
  auto_invoke: "Design components, UI decisions"
allowed-tools: Read, Edit, Write, Glob, Grep, Bash, WebFetch, WebSearch, Task
---

## Design Thinking (First Step)

Before coding, understand the context and commit to a **BOLD** aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

## Design System Architecture

### Design Tokens

```typescript
const tokens = {
  colors: {
    primary: '#...',
    secondary: '#...',
    accent: '#...',
    background: '#...',
    surface: '#...',
    text: '#...',
  },
  typography: {
    fontDisplay: 'Display Font',
    fontBody: 'Body Font',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    pill: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.1)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.2)',
  }
};
```

### 8pt Grid System

```
4px  - xs (micro adjustments)
8px  - sm (tight spacing)
16px - md (default)
24px - lg (comfortable)
32px - xl (breathing room)
48px - 2xl (section spacing)
64px - 3xl (major breaks)
```

### Component Hierarchy (Atomic Design)

```
1. Atoms: Button, Input, Icon, Text
2. Molecules: Card, NavItem, FormField
3. Organisms: Navbar, Hero, Footer
4. Templates: Layout, PageLayout
5. Pages: Home, About, Contact
```

### Modular Type Scale

Use a consistent ratio (1.25 major third recommended):

```
xs:   12px
sm:   14px
base: 16px
lg:   20px
xl:   25px
2xl:  31px
3xl:  39px
4xl:  49px
```

## Design Token Generator

Generate complete design system tokens from brand colors.

**Usage:**
```bash
python scripts/design_token_generator.py [brand_color] [style] [format]
```

**Parameters:**
- `brand_color`: Hex color (default: #0066CC)
- `style`: modern | classic | playful
- `format`: json | css | scss | summary

**Generated tokens include:**
- Complete color palette with semantic colors
- Typography system with type scale
- 8pt spacing grid
- Border and shadow tokens
- Animation timing and easing
- Responsive breakpoints
- Z-index scale

**Example:**
```bash
python scripts/design_token_generator.py "#f18661" modern css
```

## Implementation Checklist

```
□ Defined clear aesthetic direction (not generic)
□ Chosen distinctive fonts (never Inter, Roboto)
□ Created cohesive color palette
□ Established spacing system (8pt grid)
□ Designed with accessibility in mind
□ Added meaningful motion/animation
□ Tested responsive behavior
□ Verified contrast ratios (WCAG AA)
```

## Decision Tree

```
Creating new component?     → Define visual style first
Styling existing code?      → Check design tokens
Adding animation?           → High-impact moments only
Choosing colors?            → Use established palette
Picking fonts?              → Never generic
Unsure about spacing?       → Use 8pt grid
```

## Anti-Patterns to Avoid

These scream "AI-generated":
- Inter or Roboto as primary font
- Purple/blue gradients on white
- Identical card components in a grid
- Generic hero sections
- No personality or distinctive character
- Template-looking layouts
- Scattered micro-interactions without purpose

Remember: Claude is capable of extraordinary creative work. Don't hold back—show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

## Resources

- **Scripts**: See [scripts/design_token_generator.py](scripts/design_token_generator.py)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Type Scale Calculator](https://typescale.com/)
- Related skills: `tailwind-4`, `astro-5`, `accessibility`, `tailwind-animations`
