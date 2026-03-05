export interface Phase {
  id: number;
  title: string;
  subtitle: string;
  objective: string;
  includes: string[];
  whatWeDo: string[];
  whatWeDeliver: string[];
  whatNotIncluded: string[];
  result: string;
}

export interface Plan {
  name: string;
  duration: string;
  months: number;
  objective: string;
  includes: string[];
  excludes: string[];
  iconType: 'circle' | 'blue' | 'diamond';
  whatsappLink: string;
}

export const PHASES: Phase[] = [
  {
    id: 1,
    title: 'DIAGNÓSTICO Y POSICIONAMIENTO',
    subtitle: 'Análisis profundo y definición estratégica.',
    objective: 'Construir la base estratégica del sistema digital.',
    includes: [
      'Análisis de presencia actual',
      'Definición de nicho ideal',
      'Propuesta de valor clara',
      'Ajuste de mensaje principal',
      'Enfoque competitivo local'
    ],
    whatWeDo: [
      'Auditoría de presencia digital',
      'Definición de cliente ideal',
      'Definición de propuesta de valor',
      'Análisis de competencia',
      'Definición de pilares de contenido'
    ],
    whatWeDeliver: [
      'Documento estratégico base',
      'Optimización de perfiles digitales',
      'Guía inicial de comunicación',
      'Estructura de contenido recomendada'
    ],
    whatNotIncluded: [
      'Campañas publicitarias',
      'Producción audiovisual profesional',
      'Desarrollo de página web'
    ],
    result: 'Claridad total sobre qué comunicar y a quién atraer.'
  },
  {
    id: 2,
    title: 'FUNDAMENTOS DIGITALES',
    subtitle: 'Construcción de una base sólida y profesional.',
    objective: 'Construir la infraestructura digital necesaria para atraer prospectos.',
    includes: [
      'Optimización de perfiles',
      'Imagen profesional coherente',
      'Estructura de comunicación',
      'Preparación de canal de captación'
    ],
    whatWeDo: [
      'Optimización avanzada de perfiles',
      'Diseño de estructura visual',
      'Configuración de canal de contacto',
      'Preparación del sistema de contenido'
    ],
    whatWeDeliver: [
      'Diseño base de identidad visual para redes',
      'Plantillas de contenido',
      'Configuración de canal de contacto',
      'Base del calendario de contenido'
    ],
    whatNotIncluded: [
      'Campañas publicitarias',
      'Automatizaciones avanzadas',
      'Página web completa'
    ],
    result: 'Presencia sólida y lista para generar confianza.'
  },
  {
    id: 3,
    title: 'ESTRATEGIA DE CONTENIDO',
    subtitle: 'Generación de autoridad y atracción constante.',
    objective: 'Construir visibilidad y autoridad.',
    includes: [
      'Calendario mensual',
      'Guiones para reels',
      'Pilares de contenido',
      'Diseño alineado',
      'Llamados a la acción'
    ],
    whatWeDo: [
      'Planificación de contenido mensual',
      'Creación de contenido estratégico',
      'Desarrollo de guiones para reels',
      'Diseño de publicaciones'
    ],
    whatWeDeliver: [
      'Calendario de contenido',
      'Publicaciones optimizadas',
      'Reels estratégicos',
      'Diseño gráfico alineado'
    ],
    whatNotIncluded: [
      'Producción de video profesional',
      'Gestión de influencers',
      'Campañas publicitarias avanzadas'
    ],
    result: 'Autoridad digital y generación constante de interés.'
  },
  {
    id: 4,
    title: 'SISTEMA DE CONVERSIÓN',
    subtitle: 'Optimización del proceso de venta digital.',
    objective: 'Convertir visibilidad en prospectos.',
    includes: [
      'Estructura de mensajes por DM',
      'Flujo de seguimiento',
      'Script de objeciones',
      'Proceso de diagnóstico',
      'Orden comercial'
    ],
    whatWeDo: [
      'Estructura de conversación comercial',
      'Flujo de atención por mensajes',
      'Script de conversión',
      'Sistema de seguimiento de prospectos'
    ],
    whatWeDeliver: [
      'Script de atención y ventas',
      'Flujo de seguimiento de leads',
      'Proceso de cierre de clientes'
    ],
    whatNotIncluded: [
      'CRM empresarial avanzado',
      'Automatizaciones complejas',
      'Integraciones externas'
    ],
    result: 'Más cierres y menos conversaciones perdidas.'
  },
  {
    id: 5,
    title: 'ESCALAMIENTO DIGITAL',
    subtitle: 'Crecimiento sostenible y optimización.',
    objective: 'Optimizar el sistema y preparar crecimiento.',
    includes: [
      'Testimonios estratégicos',
      'Campañas pagadas (si aplica)',
      'Optimización mensual',
      'Análisis de métricas',
      'Ajustes estratégicos'
    ],
    whatWeDo: [
      'Análisis de métricas',
      'Optimización de contenido',
      'Estrategia de crecimiento',
      'Estrategia de testimonios'
    ],
    whatWeDeliver: [
      'Reporte de desempeño',
      'Ajuste estratégico',
      'Plan de crecimiento digital'
    ],
    whatNotIncluded: [
      'Gestión completa de publicidad',
      'Desarrollo de software',
      'Producción audiovisual avanzada'
    ],
    result: 'Sistema estable de crecimiento.'
  }
];

export const PLANS: Plan[] = [
  {
    name: 'PLAN ESENCIA',
    duration: '2 meses',
    months: 2,
    objective: 'Construye la base estratégica de tu presencia digital.',
    includes: [
      'Mes 1 – Fase 1',
      'Mes 2 – Fase 2'
    ],
    excludes: [
      'Fase 3',
      'Fase 4',
      'Fase 5'
    ],
    iconType: 'circle',
    whatsappLink: 'https://wa.link/e5rum9'
  },
  {
    name: 'PLAN IMPULSO',
    duration: '4 meses',
    months: 4,
    objective: 'Contenido estratégico que posiciona tu marca y genera oportunidades.',
    includes: [
      'Mes 1 – Fase 1',
      'Mes 2 – Fase 2',
      'Mes 3 – Fase 3',
      'Mes 4 – Fase 4'
    ],
    excludes: [
      'Fase 5'
    ],
    iconType: 'blue',
    whatsappLink: 'https://wa.link/h2b5ne'
  },
  {
    name: 'PLAN DOMINIO',
    duration: '5 meses',
    months: 5,
    objective: 'Una estructura digital diseñada para escalar tu negocio.',
    includes: [
      'Mes 1 – Fase 1',
      'Mes 2 – Fase 2',
      'Mes 3 – Fase 3',
      'Mes 4 – Fase 4',
      'Mes 5 – Fase 5'
    ],
    excludes: [],
    iconType: 'diamond',
    whatsappLink: 'https://wa.link/n604bb'
  }
];

export interface ImplementationStep {
  month: number;
  title: string;
  objective: string;
  deliverables: string[];
  result: string;
  investment: string;
}

export const IMPLEMENTATION_MODEL: ImplementationStep[] = [
  {
    month: 1,
    title: 'Diagnóstico y Posicionamiento',
    objective: 'Establecer la base estratégica y el mensaje diferenciador.',
    deliverables: ['Auditoría de marca', 'Definición de buyer persona', 'Manual de comunicación'],
    result: 'Claridad estratégica absoluta.',
    investment: '$4,000 MXN'
  },
  {
    month: 2,
    title: 'Fundamentos Digitales',
    objective: 'Profesionalizar la presencia en canales clave.',
    deliverables: ['Optimización de perfiles', 'Kit de identidad visual', 'Estructura de captación'],
    result: 'Infraestructura lista para atraer.',
    investment: '$4,500 MXN'
  },
  {
    month: 3,
    title: 'Estrategia de Contenido',
    objective: 'Generar autoridad y confianza a través de valor real.',
    deliverables: ['Calendario de contenidos', 'Producción de Reels', 'Copywriting estratégico'],
    result: 'Aumento de visibilidad y autoridad.',
    investment: '$5,200 MXN'
  },
  {
    month: 4,
    title: 'Sistema de Conversión',
    objective: 'Transformar el interés en prospectos calificados.',
    deliverables: ['Scripts de venta', 'Flujo de seguimiento', 'Automatización básica'],
    result: 'Generación constante de leads.',
    investment: '$6,000 MXN'
  },
  {
    month: 5,
    title: 'Escalamiento Digital',
    objective: 'Optimizar y expandir el alcance del sistema.',
    deliverables: ['Análisis de métricas', 'Optimización de campañas', 'Estrategia de referidos'],
    result: 'Crecimiento predecible y escalable.',
    investment: '$6,800 MXN'
  }
];

export const SCOPE = {
  included: [
    'Gestión estratégica de marca',
    'Diseño gráfico profesional',
    'Copywriting persuasivo',
    'Análisis de competencia mensual',
    'Optimización de perfiles sociales'
  ],
  notIncluded: [
    'Inversión directa en publicidad (Ads)',
    'Fotografía y video presencial',
    'Gestión de crisis de reputación externa',
    'Desarrollo web complejo (E-commerce)'
  ],
  terms: {
    responseTime: 'Menos de 24 horas hábiles',
    revisions: 'Hasta 2 rondas por pieza',
    contract: 'Mínimo 3 meses sugerido'
  }
};
