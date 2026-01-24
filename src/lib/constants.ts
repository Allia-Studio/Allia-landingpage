/**
 * Centralized constants for Allia Studio Landing Page
 * Single source of truth for all content, configuration, and data
 */

import type {
  NavLink,
  TypewriterLine,
  CalComConfig,
} from './types';

// ============================================
// Site Metadata
// ============================================
export const SITE = {
  name: 'Allia Studio',
  url: 'https://alliastudio.com',
  description:
    'Convertimos grandes ideas en productos digitales robustos y escalables. Somos el socio técnico que tu proyecto necesita.',
  themeColor: '#272822',
} as const;

// ============================================
// Navigation Links
// ============================================
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'SERVICIOS.', href: '#servicios' },
  { label: 'NOSOTROS.', href: '#nosotros' },
  { label: 'PROYECTOS.', href: '#proyectos' },
] as const;

// ============================================
// Animation Timings (in milliseconds)
// ============================================
export const ANIMATION = {
  typeSpeed: 50,
  cursorRemoveDelay: 400,
  postTypingDelay: 400,
  typewriterInitialDelay: 300,
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
  subtitle:
    'Convertimos grandes ideas en productos digitales robustos y escalables. Somos el socio técnico que tu proyecto necesita.',
  ctaPrimary: 'Conversemos →',
  ctaSecondary: 'Ver proyectos',
  cursorChar: '|',
} as const;

// ============================================
// Cal.com Configuration
// ============================================
export const CALCOM = {
  link: 'carlos-alonso-flores-panduro-zejpqc/30min',
  namespace: '30min',
  config: { layout: 'column_view' } satisfies CalComConfig,
  brandColor: '#f18661',
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
} as const;
