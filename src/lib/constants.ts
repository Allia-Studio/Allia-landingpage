/**
 * Centralized constants for Allia Studio Landing Page
 * Single source of truth for all content, configuration, and data
 */

import type {
  NavLink,
  TypewriterLine,
  CalComConfig,
  ServiceItem,
  MotorItem,
  ProjectItem,
  BlogPost,
  FAQItem,
  FooterColumn,
  SocialLink,
  SectionHeaderProps,
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

// ============================================
// Section Headers
// ============================================
export const SECTION_HEADERS = {
  servicios: {
    label: 'Servicios',
    title: 'QUÉ HACEMOS.',
    subtitle:
      'Diseñamos, construimos y escalamos productos digitales para empresas que valoran la calidad, la consistencia y la colaboración real.',
  } satisfies SectionHeaderProps,

  proceso: {
    label: 'Cómo Trabajamos',
    title: 'DOS MOTORES, UN OBJETIVO.',
    subtitle:
      'Combinamos servicios de agencia con un programa de financiamiento para startups validadas.',
  } satisfies SectionHeaderProps,

  proyectos: {
    label: 'Portfolio',
    title: 'PROYECTOS.',
    subtitle: 'Una selección de trabajos que reflejan nuestra metodología y estándares de calidad.',
  } satisfies SectionHeaderProps,

  blog: {
    label: 'Blog',
    title: 'INSIGHTS.',
    subtitle: 'Perspectivas sobre desarrollo, tecnología y producto.',
  } satisfies SectionHeaderProps,

  faq: {
    label: 'FAQ',
    title: 'PREGUNTAS FRECUENTES.',
    subtitle: 'Las respuestas que necesitas para tomar una decisión informada.',
  } satisfies SectionHeaderProps,

  cta: {
    title: '¿LISTO PARA EMPEZAR?',
    subtitle:
      'Agenda una llamada de 30 minutos. Sin compromiso, sin presión. Solo una conversación honesta sobre tu proyecto.',
  } satisfies SectionHeaderProps,
} as const;

// ============================================
// Services Section
// ============================================
export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'web-development',
    icon: 'globe',
    title: 'Desarrollo Web',
    description:
      'Aplicaciones web modernas y escalables. Desde landing pages hasta plataformas SaaS complejas.',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'mobile-development',
    icon: 'mobile',
    title: 'Desarrollo Mobile',
    description:
      'Apps nativas y multiplataforma con experiencias fluidas y rendimiento óptimo.',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
  },
  {
    id: 'ai-solutions',
    icon: 'brain',
    title: 'Inteligencia Artificial',
    description:
      'Integración de modelos de lenguaje, computer vision y análisis predictivo.',
    technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'RAG'],
  },
  {
    id: 'automation',
    icon: 'zap',
    title: 'Automatizaciones',
    description:
      'Workflows automatizados, integraciones y pipelines que ahorran horas de trabajo.',
    technologies: ['n8n', 'Zapier', 'APIs REST', 'Webhooks', 'ETL'],
  },
  {
    id: 'enterprise-systems',
    icon: 'desktop',
    title: 'Sistemas Empresariales',
    description:
      'ERPs, CRMs y sistemas internos adaptados a tus flujos de negocio.',
    technologies: ['.NET', 'Java', 'Microservicios', 'Docker', 'Kubernetes'],
  },
  {
    id: 'consulting',
    icon: 'lightbulb',
    title: 'Consultoría Técnica',
    description:
      'Auditorías de código, arquitectura de sistemas y estrategia tecnológica.',
    technologies: ['Code Review', 'Arquitectura', 'DevOps', 'Seguridad', 'Escalabilidad'],
  },
] as const;

// ============================================
// Process/Motores Section
// ============================================
export const MOTORES: readonly MotorItem[] = [
  {
    id: 'A',
    title: 'Agencia de Desarrollo',
    percentage: '70%',
    description:
      'Servicios tradicionales de desarrollo con equipos dedicados y metodologías probadas.',
    bullets: [
      'Equipos dedicados a tu proyecto',
      'Sprints de 2 semanas con entregables claros',
      'Comunicación directa con desarrolladores senior',
      'Código documentado y tests incluidos',
      'Soporte post-lanzamiento garantizado',
    ],
  },
  {
    id: 'B',
    title: 'Programa de Financiamiento',
    percentage: '30%',
    description:
      'Para startups validadas que buscan un socio técnico a cambio de equity o revenue share.',
    bullets: [
      'Desarrollo a cambio de participación',
      'Para proyectos con tracción demostrada',
      'Acompañamiento estratégico incluido',
      'Evaluación rigurosa del proyecto',
      'Compromiso a largo plazo',
    ],
  },
] as const;

// ============================================
// Projects Section
// ============================================
export const PROJECT_CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ml', label: 'ML/IA' },
  { id: 'automation', label: 'Automatización' },
] as const;

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: 'proyecto-1',
    title: 'Plataforma E-commerce',
    description: 'Sistema completo de comercio electrónico con gestión de inventario y pagos.',
    image: '/images/projects/ecommerce.jpg',
    category: 'web',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    id: 'proyecto-2',
    title: 'App de Delivery',
    description: 'Aplicación móvil para entregas en tiempo real con tracking GPS.',
    image: '/images/projects/delivery.jpg',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Maps API'],
  },
  {
    id: 'proyecto-3',
    title: 'Asistente IA para Ventas',
    description: 'Chatbot inteligente que califica leads y agenda reuniones automáticamente.',
    image: '/images/projects/ai-assistant.jpg',
    category: 'ml',
    technologies: ['OpenAI', 'LangChain', 'Cal.com'],
  },
  {
    id: 'proyecto-4',
    title: 'Dashboard Analytics',
    description: 'Panel de control con métricas en tiempo real y reportes automatizados.',
    image: '/images/projects/dashboard.jpg',
    category: 'web',
    technologies: ['React', 'D3.js', 'Node.js'],
  },
  {
    id: 'proyecto-5',
    title: 'Pipeline de Datos',
    description: 'Sistema ETL que procesa millones de registros diariamente.',
    image: '/images/projects/pipeline.jpg',
    category: 'automation',
    technologies: ['Python', 'Airflow', 'BigQuery'],
  },
  {
    id: 'proyecto-6',
    title: 'App de Finanzas Personales',
    description: 'Aplicación para control de gastos con categorización automática.',
    image: '/images/projects/finance.jpg',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'ML Kit'],
  },
] as const;

// ============================================
// Blog Section
// ============================================
export const BLOG_POSTS: readonly BlogPost[] = [
  {
    id: 'post-1',
    title: 'Cómo elegir el stack tecnológico correcto para tu startup',
    excerpt:
      'Las decisiones técnicas tempranas pueden definir el éxito o fracaso de tu producto. Aquí te explicamos cómo evaluarlas.',
    image: '/images/blog/tech-stack.jpg',
    category: 'Tecnología',
    readTime: '8 min',
    date: '2024-01-15',
    featured: true,
    slug: 'elegir-stack-tecnologico-startup',
  },
  {
    id: 'post-2',
    title: 'MVP vs Producto completo: cuándo lanzar',
    excerpt:
      'El balance entre velocidad y calidad es crucial. Aprende a identificar el momento correcto.',
    image: '/images/blog/mvp.jpg',
    category: 'Producto',
    readTime: '5 min',
    date: '2024-01-10',
    slug: 'mvp-vs-producto-completo',
  },
  {
    id: 'post-3',
    title: 'IA en producción: lecciones aprendidas',
    excerpt:
      'Después de implementar IA en 20+ proyectos, estas son las lecciones que más valor aportan.',
    image: '/images/blog/ai-production.jpg',
    category: 'IA',
    readTime: '10 min',
    date: '2024-01-05',
    slug: 'ia-en-produccion-lecciones',
  },
] as const;

// ============================================
// FAQ Section
// ============================================
export const FAQS: readonly FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Cuánto cuesta desarrollar una aplicación?',
    answer:
      'Depende del alcance y complejidad. Proyectos simples pueden partir desde $5,000 USD, mientras que plataformas enterprise pueden superar los $100,000 USD. En nuestra llamada inicial evaluamos tu caso y te damos un estimado realista.',
  },
  {
    id: 'faq-2',
    question: '¿Cuánto tiempo toma desarrollar un MVP?',
    answer:
      'Un MVP bien definido típicamente toma entre 2-4 meses. Priorizamos funcionalidades core que validen tu hipótesis de negocio antes de invertir en features secundarios.',
  },
  {
    id: 'faq-3',
    question: '¿Trabajan con startups early-stage?',
    answer:
      'Sí, tenemos un programa específico para startups con tracción demostrada. Ofrecemos desarrollo a cambio de equity o revenue share para proyectos que califiquen.',
  },
  {
    id: 'faq-4',
    question: '¿Qué tecnologías utilizan?',
    answer:
      'Elegimos el stack según las necesidades del proyecto. Nuestras especialidades incluyen React/Next.js, React Native, Node.js, Python, y servicios cloud como AWS y GCP.',
  },
  {
    id: 'faq-5',
    question: '¿Cómo es el proceso de trabajo?',
    answer:
      'Trabajamos en sprints de 2 semanas con demos al final de cada uno. Usamos herramientas como Linear para tracking, Slack para comunicación diaria, y llamadas semanales de sync.',
  },
  {
    id: 'faq-6',
    question: '¿Ofrecen soporte después del lanzamiento?',
    answer:
      'Sí, todos nuestros proyectos incluyen un período de soporte post-lanzamiento. También ofrecemos contratos de mantenimiento mensual para soporte continuo.',
  },
  {
    id: 'faq-7',
    question: '¿Pueden trabajar con un equipo existente?',
    answer:
      'Absolutamente. Podemos integrarnos a tu equipo actual, hacer code reviews, mentorías técnicas, o complementar capacidades específicas que necesites.',
  },
  {
    id: 'faq-8',
    question: '¿Qué pasa si mi proyecto cambia de rumbo?',
    answer:
      'Es normal y esperado. Nuestro proceso está diseñado para adaptarse. Evaluamos cambios de scope en cada sprint y ajustamos prioridades según las necesidades del negocio.',
  },
  {
    id: 'faq-9',
    question: '¿Firman NDAs?',
    answer:
      'Sí, firmamos NDAs antes de cualquier conversación detallada sobre tu proyecto. La confidencialidad es fundamental en nuestra relación de trabajo.',
  },
  {
    id: 'faq-10',
    question: '¿Dónde están ubicados?',
    answer:
      'Somos un equipo distribuido en Latinoamérica, lo que nos permite ofrecer precios competitivos con calidad internacional y superposición de horario con EE.UU. y Europa.',
  },
] as const;

// ============================================
// Footer Section
// ============================================
export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Desarrollo Web', href: '#servicios' },
      { label: 'Desarrollo Mobile', href: '#servicios' },
      { label: 'Inteligencia Artificial', href: '#servicios' },
      { label: 'Automatizaciones', href: '#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nosotros', href: '#proceso' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contacto', href: '#cta' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Programa de Financiamiento', href: '#proceso' },
      { label: 'Política de Privacidad', href: '/privacidad' },
      { label: 'Términos de Servicio', href: '/terminos' },
    ],
  },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    icon: 'linkedin',
    href: 'https://linkedin.com/company/alliastudio',
    label: 'LinkedIn',
  },
  {
    icon: 'github',
    href: 'https://github.com/alliastudio',
    label: 'GitHub',
  },
  {
    icon: 'twitter',
    href: 'https://twitter.com/alliastudio',
    label: 'Twitter',
  },
] as const;

export const FOOTER_INFO = {
  tagline: 'Tu visión. Nuestra ingeniería.',
  copyright: `© ${new Date().getFullYear()} Allia Studio. Todos los derechos reservados.`,
} as const;
