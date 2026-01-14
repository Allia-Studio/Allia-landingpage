/**
 * Shared TypeScript types for Allia Studio Landing Page
 */

// ============================================
// Navigation Types
// ============================================
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// ============================================
// Animation Types
// ============================================
export interface TypewriterLine {
  readonly element: string;
  readonly text: string;
  readonly delay: number;
}

// ============================================
// Component Props Types
// ============================================
export interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  id?: string;
  disabled?: boolean;
  // Cal.com specific attributes
  'data-cal-link'?: string;
  'data-cal-namespace'?: string;
  'data-cal-config'?: string;
}

// ============================================
// Cal.com Types
// ============================================
export type CalComLayout = 'month_view' | 'week_view' | 'column_view';

export interface CalComConfig {
  layout: CalComLayout;
}

export interface ContainerProps {
  class?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'nav';
}

export interface LayoutProps {
  title?: string;
  description?: string;
}

// ============================================
// Site Types
// ============================================
export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  themeColor: string;
}

// ============================================
// Services Types
// ============================================
export interface ServiceTag {
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  expandedDetails?: string;
  tags: ServiceTag[];
}
