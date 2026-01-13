/**
 * Centralized constants for Allia Studio Landing Page
 * Single source of truth for all magic numbers, content strings, and configuration
 */

import type { NavLink, TypewriterLine, CalComConfig } from './types';

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
} as const;
