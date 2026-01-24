// ============================================
// Tipos de Navegación
// ============================================
export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

// ============================================
// Tipos de Animación
// ============================================
export interface TypewriterLine {
  readonly element: string;
  readonly text: string;
  readonly delay: number;
}

// ============================================
// Props de Componentes
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
// Tipos de Cal.com
// ============================================
export type CalComLayout = 'month_view' | 'week_view' | 'column_view';

export interface CalComConfig {
  readonly layout: CalComLayout;
}

// ============================================
// Tipos de Servicios
// ============================================
export interface TechItem {
  readonly name: string;
}

export type ServiceIcon = 'globe' | 'mobile' | 'desktop' | 'brain' | 'zap';

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: ServiceIcon;
  readonly technologies: readonly TechItem[];
}

// ============================================
// Tipos del Sitio
// ============================================
export interface SiteConfig {
  readonly name: string;
  readonly url: string;
  readonly description: string;
  readonly themeColor: string;
}

// ============================================
// Tipos de Equipo
// ============================================
export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly linkedin: string;
  readonly photo: string;
}

// ============================================
// Tipos de Modelo de Negocio
// ============================================
export interface ModeloCard {
  readonly letter: 'A' | 'B';
  readonly title: string;
  readonly subtitle: string;
  readonly bullets: readonly string[];
  readonly ctaText: string;
  readonly ctaHref: string;
}

