// ============================================
// Navigation Types
// ============================================
export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
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
  'data-cal-link'?: string;
  'data-cal-namespace'?: string;
  'data-cal-config'?: string;
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
// Cal.com Types
// ============================================
export type CalComLayout = 'month_view' | 'week_view' | 'column_view';

export interface CalComConfig {
  readonly layout: CalComLayout;
}

// ============================================
// Site Types
// ============================================
export interface SiteConfig {
  readonly name: string;
  readonly url: string;
  readonly description: string;
  readonly themeColor: string;
}
