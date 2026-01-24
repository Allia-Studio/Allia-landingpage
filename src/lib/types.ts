/**
 * Shared TypeScript types for Allia Studio Landing Page
 */

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

// ============================================
// Section Header Props
// ============================================
export interface SectionHeaderProps {
  readonly label?: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly centered?: boolean;
  readonly labelColor?: 'accent' | 'white';
  readonly class?: string;
}

// ============================================
// Services Types
// ============================================
export type ServiceIcon =
  | 'globe'
  | 'mobile'
  | 'brain'
  | 'zap'
  | 'desktop'
  | 'lightbulb';

export interface ServiceItem {
  readonly id: string;
  readonly icon: ServiceIcon;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
}

// ============================================
// Process/Motores Types
// ============================================
export type MotorId = 'A' | 'B';

export interface MotorItem {
  readonly id: MotorId;
  readonly title: string;
  readonly percentage: string;
  readonly description: string;
  readonly bullets: readonly string[];
}

// ============================================
// Projects Types
// ============================================
export type ProjectCategory =
  | 'todos'
  | 'web'
  | 'ml'
  | 'mobile'
  | 'desktop'
  | 'automation';

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly category: ProjectCategory;
  readonly technologies?: readonly string[];
  readonly link?: string;
}

// ============================================
// Blog Types
// ============================================
export interface BlogPost {
  readonly id: string;
  readonly title: string;
  readonly excerpt: string;
  readonly image: string;
  readonly category: string;
  readonly readTime: string;
  readonly date: string;
  readonly featured?: boolean;
  readonly slug?: string;
}

// ============================================
// FAQ Types
// ============================================
export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

// ============================================
// Footer Types
// ============================================
export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export type SocialIcon = 'linkedin' | 'github' | 'twitter' | 'instagram';

export interface SocialLink {
  readonly icon: SocialIcon;
  readonly href: string;
  readonly label: string;
}

// ============================================
// Tag/Pill Types
// ============================================
export type TagVariant = 'outline' | 'solid' | 'ghost';
export type TagSize = 'sm' | 'md';

export interface TagProps {
  readonly label: string;
  readonly variant?: TagVariant;
  readonly size?: TagSize;
  readonly class?: string;
}

// ============================================
// Card Types
// ============================================
export interface ServiceCardProps {
  readonly service: ServiceItem;
  readonly class?: string;
}

export interface ProjectCardProps {
  readonly project: ProjectItem;
  readonly class?: string;
}

export interface MotorCardProps {
  readonly motor: MotorItem;
  readonly class?: string;
}

// ============================================
// Section Types
// ============================================
export type SectionBackground = 'dark' | 'light';

export interface SectionProps {
  readonly id?: string;
  readonly background?: SectionBackground;
  readonly class?: string;
}
