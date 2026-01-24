
import type {
  NavLink,
  TypewriterLine,
  CalComConfig,
  ServiceItem,
  TeamMember,
  ModeloCard,
} from './types';

// ============================================
// Metadata del Sitio
// ============================================
export const SITE = {
  name: 'Allia Studio',
  url: 'https://alliastudio.com',
  description:
    'Convertimos grandes ideas en productos digitales robustos y escalables. Somos el socio técnico que tu proyecto necesita.',
  themeColor: '#272822',
} as const;

// ============================================
// Links de Navegación
// ============================================
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'SERVICIOS.', href: '#servicios' },
  { label: 'NOSOTROS.', href: '#nosotros' },
  { label: 'MODELO.', href: '#modelo' },
  { label: 'PROYECTOS.', href: '#proyectos' },
] as const;

// ============================================
// Tiempos de Animación (en milisegundos)
// ============================================
export const ANIMATION = {
  typeSpeed: 50,
  cursorRemoveDelay: 400,
  postTypingDelay: 400,
  typewriterInitialDelay: 300,
  typewriterLineDelay: 100,
} as const;

// ============================================
// Contenido de la Sección Hero
// ============================================
export const HERO = {
  lines: [
    { element: 'title-line-1', text: 'TU VISIÓN.', delay: ANIMATION.typewriterInitialDelay },
    { element: 'title-line-2', text: 'NUESTRA INGENIERÍA.', delay: ANIMATION.typewriterLineDelay },
  ] satisfies readonly TypewriterLine[],
  subtitle:
    'Convertimos grandes ideas en productos digitales robustos y escalables. Somos el socio técnico que tu proyecto necesita para pasar de la idea a la realidad.',
  ctaPrimary: 'Conversemos →',
  ctaSecondary: 'Ver proyectos',
  cursorChar: '|',
} as const;

// ============================================
// Configuración de Cal.com
// ============================================
export const CALCOM = {
  link: 'carlos-alonso-flores-panduro-zejpqc/30min',
  namespace: '30min',
  config: { layout: 'column_view' } satisfies CalComConfig,
  brandColor: '#f18661',
} as const;

// ============================================
// IDs de Elementos (para JavaScript)
// ============================================
export const ELEMENT_IDS = {
  heroTitleLine1: 'title-line-1',
  heroTitleLine2: 'title-line-2',
  heroSubtitle: 'hero-subtitle',
  heroCta: 'hero-cta',
  menuToggle: 'menu-toggle',
  mobileMenu: 'mobile-menu',
  mainContent: 'main-content',
} as const;

// ============================================
// Sección Servicios
// ============================================
export const SERVICIOS_SECTION = {
  label: 'Nuestros Servicios',
  title: 'QUÉ HACEMOS.',
  subtitle: 'Desde aplicaciones web y móviles hasta automatizaciones e inteligencia artificial. Construimos la tecnología que tu negocio necesita para escalar.',
  sectionId: 'servicios',
} as const;

export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables.',
    icon: 'globe',
    technologies: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'TypeScript' },
      { name: 'Python' },
      { name: 'PostgreSQL' },
      { name: 'AWS' },
      { name: 'Vercel' },
    ],
  },
  {
    id: 'apps-moviles',
    title: 'Apps Móviles',
    description: 'Apps nativas y multiplataforma.',
    icon: 'mobile',
    technologies: [
      { name: 'iOS' },
      { name: 'Android' },
      { name: 'React Native' },
      { name: 'Flutter' },
      { name: 'Swift' },
      { name: 'Kotlin' },
      { name: 'Firebase' },
      { name: 'Expo' },
    ],
  },
  {
    id: 'apps-escritorio',
    title: 'Apps de Escritorio',
    description: 'Aplicaciones nativas de alto rendimiento.',
    icon: 'desktop',
    technologies: [
      { name: 'Electron' },
      { name: 'Tauri' },
      { name: '.NET' },
      { name: 'C++' },
      { name: 'Swift' },
      { name: 'Qt' },
      { name: 'Windows' },
      { name: 'macOS' },
    ],
  },
  {
    id: 'inteligencia-artificial',
    title: 'Inteligencia Artificial',
    description: 'Soluciones inteligentes para tu negocio.',
    icon: 'brain',
    technologies: [
      { name: 'OpenAI' },
      { name: 'LangChain' },
      { name: 'Python' },
      { name: 'TensorFlow' },
      { name: 'LLM Integration' },
      { name: 'RAG' },
      { name: 'Custom AI' },
      { name: 'Embeddings' },
    ],
  },
  {
    id: 'automatizaciones',
    title: 'Automatizaciones',
    description: 'Optimiza procesos repetitivos.',
    icon: 'zap',
    technologies: [
      { name: 'n8n' },
      { name: 'Zapier' },
      { name: 'Make' },
      { name: 'APIs REST' },
      { name: 'Webhooks' },
      { name: 'ETL' },
      { name: 'Cron Jobs' },
      { name: 'Integrations' },
    ],
  },
] as const;

// ============================================
// Sección Nosotros
// ============================================
export const NOSOTROS_SECTION = {
  label: 'Nosotros',
  title: 'NOSOTROS.',
  sectionId: 'nosotros',
  description: 'En Allia trabajamos contigo, no solo para ti. Nos involucramos, entendemos tu negocio y construimos soluciones que realmente funcionan.',
  teamSubtitle: 'Nuestro Equipo',
} as const;

export const TEAM: readonly TeamMember[] = [
  {
    id: 'carlos',
    name: 'Carlos Flores',
    role: 'CEO & Co-Founder',
    linkedin: 'https://linkedin.com/in/carlos-flores-cs/',
    photo: '/images/team/carlos.webp',
  },
  {
    id: 'fernando',
    name: 'Fernando Choqque',
    role: 'CTO & Co-Founder',
    linkedin: 'https://linkedin.com/in/n4ndp/',
    photo: '/images/team/nando.webp',
  },
  {
    id: 'lucia',
    name: 'Lucia Rodriguez',
    role: 'Strategy & Finance',
    linkedin: 'https://linkedin.com/in/itslers/',
    photo: '/images/team/lucia.webp',
  },
] as const;

export const EQUIPO_SECTION = {
  title: 'NUESTRO EQUIPO.',
  ctaText: 'Contáctanos',
} as const;

// ============================================
// Sección Modelo
// ============================================
export const MODELO_SECTION = {
  label: 'Cómo Trabajamos',
  title: 'DOS CAMINOS, UNA META.',
  subtitle: 'No hay una sola forma de hacer las cosas. Cada proyecto es diferente, y nuestra forma de trabajar también.',
  sectionId: 'modelo',
  ctaGeneral: 'Conversemos →',
} as const;

export const MODELOS: readonly ModeloCard[] = [
  {
    letter: 'A',
    title: 'Desarrollo',
    subtitle: 'Control total sobre tu proyecto.',
    bullets: [
      'Define exactamente lo que necesitas',
      'Recibe tu producto completo y listo',
    ],
    ctaText: 'Cotizar proyecto →',
    ctaHref: '#',
  },
  {
    letter: 'B',
    title: 'Programa Allia',
    subtitle: 'Un equipo técnico que crece contigo.',
    bullets: [
      'Nos convertimos en tu equipo técnico',
      'Programa exclusivo con evaluación previa',
    ],
    ctaText: 'Aplicar →',
    ctaHref: '#',
  },
] as const;
