/**
 * Centralized constants for Allia Studio Landing Page
 * Single source of truth for all magic numbers, content strings, and configuration
 */

import type { NavLink, TypewriterLine, CalComConfig, Service } from './types';

// ============================================
// Site Metadata
// ============================================
export const SITE = {
  name: 'Allia Studio',
  url: 'https://alliastudio.com',
  description: 'Convertimos grandes ideas en productos digitales robustos y escalables. Somos el socio técnico que tu proyecto necesita.',
  themeColor: '#272822',
} as const;

// ============================================
// Navigation Links
// ============================================
export const NAV_LINKS: NavLink[] = [
  { label: 'SERVICIOS.', href: '#servicios' },
  { label: 'NOSOTROS.', href: '#nosotros' },
  { label: 'PROYECTOS.', href: '#proyectos' },
  { label: 'SOLUCIONES.', href: '#soluciones' },
];

// ============================================
// Animation Timings (in milliseconds)
// ============================================
export const ANIMATION = {
  /** Speed per character in typewriter effect */
  typeSpeed: 50,
  /** Delay before cursor is removed after typing */
  cursorRemoveDelay: 400,
  /** Delay after typing completes before showing subtitle/CTA */
  postTypingDelay: 400,
  /** Initial delay before typewriter starts */
  typewriterInitialDelay: 300,
  /** Delay between typing each line */
  typewriterLineDelay: 100,
} as const;

// ============================================
// Hero Section Content
// ============================================
export const HERO = {
  lines: [
    { element: 'title-line-1', text: 'TU VISIÓN.', delay: ANIMATION.typewriterInitialDelay },
    { element: 'title-line-2', text: 'NUESTRA INGENIERÍA.', delay: ANIMATION.typewriterLineDelay },
  ] satisfies readonly TypewriterLine[],
  subtitle: 'Convertimos grandes ideas en productos digitales robustos y escalables. Somos el socio técnico que tu proyecto necesita.',
  ctaText: 'AGENDAR REUNIÓN',
  cursorChar: '|',
} as const;

// ============================================
// Cal.com Configuration
// ============================================
export const CALCOM = {
  link: 'carlos-alonso-flores-panduro-zejpqc/30min',
  namespace: '30min',
  config: { layout: 'column_view' } satisfies CalComConfig,
  brandColor: '#ffd43b',
} as const;

// ============================================
// Element IDs (for JavaScript targeting)
// ============================================
export const ELEMENT_IDS = {
  heroTitleLine1: 'title-line-1',
  heroTitleLine2: 'title-line-2',
  heroSubtitle: 'hero-subtitle',
  heroCta: 'hero-cta',
  menuToggle: 'menu-toggle',
  mobileMenu: 'mobile-menu',
  mainContent: 'main-content',
  servicesModal: 'services-modal',
} as const;

// ============================================
// Services Section Content
// ============================================
export const SERVICES_SECTION = {
  id: 'servicios',
  label: 'Servicios',
  title: 'QUÉ HACEMOS.',
  subtitle: 'Diseñamos, construimos y escalamos productos digitales para empresas que valoran la calidad, la consistencia y la colaboración real.',
} as const;

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables.',
    expandedDetails: 'Desde landing pages hasta plataformas SaaS complejas con arquitecturas robustas.',
    tags: [
      { label: 'React' },
      { label: 'Next.js' },
      { label: 'Node.js' },
      { label: 'TypeScript' },
      { label: 'PostgreSQL' },
      { label: 'AWS' },
    ],
  },
  {
    id: 'mobile-development',
    title: 'Desarrollo Mobile',
    description: 'Apps nativas y multiplataforma.',
    expandedDetails: 'Experiencias móviles fluidas con rendimiento nativo y código compartido.',
    tags: [
      { label: 'React Native' },
      { label: 'Flutter' },
      { label: 'iOS' },
      { label: 'Android' },
      { label: 'Firebase' },
      { label: 'Expo' },
    ],
  },
  {
    id: 'ai-solutions',
    title: 'Inteligencia Artificial',
    description: 'Soluciones inteligentes para tu negocio.',
    expandedDetails: 'Integración de modelos de lenguaje, computer vision y análisis predictivo.',
    tags: [
      { label: 'OpenAI' },
      { label: 'LangChain' },
      { label: 'Python' },
      { label: 'TensorFlow' },
      { label: 'RAG' },
    ],
  },
  {
    id: 'automation',
    title: 'Automatizaciones',
    description: 'Optimiza procesos repetitivos.',
    expandedDetails: 'Workflows automatizados, integraciones y pipelines que ahorran horas de trabajo.',
    tags: [
      { label: 'n8n' },
      { label: 'Zapier' },
      { label: 'APIs REST' },
      { label: 'Webhooks' },
      { label: 'ETL' },
    ],
  },
  {
    id: 'enterprise-systems',
    title: 'Sistemas Empresariales',
    description: 'Software a medida para tu operación.',
    expandedDetails: 'ERPs, CRMs y sistemas internos adaptados a tus flujos de negocio.',
    tags: [
      { label: '.NET' },
      { label: 'Java' },
      { label: 'Microservicios' },
      { label: 'Docker' },
      { label: 'Kubernetes' },
    ],
  },
];

// ============================================
// Program Modal Content
// ============================================
export const PROGRAM_TEASER = {
  title: 'MÁS QUE UNA AGENCIA',
  description: '¿Buscas más que un proveedor? Trabajamos como socios en tu proyecto.',
  ctaText: 'VER SI CALIFICO',
} as const;

export const PROGRAM_MODAL = {
  title: 'PROGRAMA DE APOYO',
  intro: 'Este programa es para ti si:',
  requirements: [
    'Tienes conocimiento profundo de tu industria',
    'Has validado tu idea con clientes reales',
    'Buscas un socio técnico, no solo un proveedor',
  ],
  ctaQuestion: '¿Cumples con el perfil?',
  ctaText: 'AGENDAR REUNIÓN',
} as const;

// ============================================
// Why Allia Section Content
// ============================================
export const WHY_ALLIA_SECTION = {
  title: '¿POR QUÉ ALLIA?',
  subtitle: '¿Qué nos hace diferentes?',
} as const;

export const WHY_ALLIA_ITEMS = [
  {
    number: '01',
    text: 'Un equipo que piensa como parte de tu empresa a largo plazo, no un freelance puntual.',
  },
  {
    number: '02',
    text: 'Nos mantenemos enfocados: sin desarrolladores compartidos, sin cambios constantes de contexto.',
  },
  {
    number: '03',
    text: 'Nos importa más la calidad de la entrega y la fiabilidad a largo plazo que la velocidad sin sentido.',
  },
  {
    number: '04',
    text: 'Nos quedamos después del lanzamiento — para medir, mejorar y ayudarte a crecer.',
  },
] as const;
