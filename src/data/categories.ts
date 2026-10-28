import { PromptCategory } from '../types';

export const CATEGORIES: PromptCategory[] = [
  {
    id: 'cat-1',
    name: 'ChatGPT y Asistentes de IA',
    description: 'Instrucciones maestras, configuración de contexto y optimización de respuestas en ChatGPT y Claude.',
    iconName: 'Bot',
    slug: 'chatgpt-asistentes',
    color: 'from-blue-500 to-indigo-600',
    promptCount: 12
  },
  {
    id: 'cat-2',
    name: 'Escritura Profesional',
    description: 'Artículos, informes ejecutivos, discursos, corrección de estilo y redacción persuasiva.',
    iconName: 'PenTool',
    slug: 'escritura-profesional',
    color: 'from-indigo-500 to-purple-600',
    promptCount: 9
  },
  {
    id: 'cat-3',
    name: 'Marketing y Publicidad',
    description: 'Campañas multicanal, copywriting AIDA/PAS, buyer personas y estrategias de lanzamiento.',
    iconName: 'Megaphone',
    slug: 'marketing-publicidad',
    color: 'from-purple-500 to-pink-600',
    promptCount: 11
  },
  {
    id: 'cat-4',
    name: 'Negocios y Emprendimiento',
    description: 'Validación de ideas, modelos Business Model Canvas, análisis DAFO y planes operativos.',
    iconName: 'Briefcase',
    slug: 'negocios-emprendimiento',
    color: 'from-amber-500 to-orange-600',
    promptCount: 8
  },
  {
    id: 'cat-5',
    name: 'Programación y Desarrollo Web',
    description: 'Refactorización, depuración, arquitecturas limpias, APIs RESTful y testing exhaustivo.',
    iconName: 'Code',
    slug: 'programacion-desarrollo',
    color: 'from-cyan-500 to-blue-600',
    promptCount: 14
  },
  {
    id: 'cat-6',
    name: 'Aplicaciones Android',
    description: 'Arquitectura Kotlin, Jetpack Compose, Material 3, optimización de rendimiento y monetización con AdMob.',
    iconName: 'Smartphone',
    slug: 'aplicaciones-android',
    color: 'from-emerald-500 to-teal-600',
    promptCount: 8
  },
  {
    id: 'cat-7',
    name: 'Creación de Imágenes',
    description: 'Prompts fotográficos para Midjourney v6, DALL-E 3 y Stable Diffusion: iluminación, lentes y texturas.',
    iconName: 'Image',
    slug: 'creacion-imagenes',
    color: 'from-pink-500 to-rose-600',
    promptCount: 10
  },
  {
    id: 'cat-8',
    name: 'Vídeo y Creación Audiovisual',
    description: 'Guiones cinematográficos, storyboards, ganchos para YouTube y prompts para Runway y Sora.',
    iconName: 'Video',
    slug: 'video-audiovisual',
    color: 'from-violet-500 to-fuchsia-600',
    promptCount: 7
  },
  {
    id: 'cat-9',
    name: 'Redes Sociales y Creación de Contenido',
    description: 'Estrategias para LinkedIn, hilos virales de X, guiones de TikTok/Reels y calendarios editoriales.',
    iconName: 'Share2',
    slug: 'redes-sociales',
    color: 'from-sky-500 to-blue-600',
    promptCount: 9
  },
  {
    id: 'cat-10',
    name: 'SEO y Posicionamiento',
    description: 'Investigación de palabras clave semánticas, clústeres temáticos, meta etiquetas y auditoría E-E-A-T.',
    iconName: 'Search',
    slug: 'seo-posicionamiento',
    color: 'from-green-500 to-emerald-600',
    promptCount: 8
  },
  {
    id: 'cat-11',
    name: 'Ventas y Negociación',
    description: 'Manejo de objeciones, correos de prospección en frío, guiones de cierre y propuestas comerciales.',
    iconName: 'TrendingUp',
    slug: 'ventas-negociacion',
    color: 'from-amber-600 to-red-600',
    promptCount: 7
  },
  {
    id: 'cat-12',
    name: 'Productividad y Organización',
    description: 'Sistemas Time Blocking, matriz de Eisenhower, síntesis de reuniones y automatización personal.',
    iconName: 'CheckCircle2',
    slug: 'productividad-organizacion',
    color: 'from-blue-600 to-cyan-600',
    promptCount: 8
  },
  {
    id: 'cat-13',
    name: 'Educación y Aprendizaje',
    description: 'Técnica Feynman, creación de exámenes interactivos, planes de estudio personalizados y analogías.',
    iconName: 'GraduationCap',
    slug: 'educacion-aprendizaje',
    color: 'from-indigo-600 to-purple-700',
    promptCount: 9
  },
  {
    id: 'cat-14',
    name: 'Investigación y Análisis',
    description: 'Revisión bibliográfica, síntesis de papers, análisis comparativo y extracción de datos cualitativos.',
    iconName: 'FileSearch',
    slug: 'investigacion-analisis',
    color: 'from-teal-500 to-cyan-700',
    promptCount: 7
  },
  {
    id: 'cat-15',
    name: 'Excel, Datos y Automatización',
    description: 'Fórmulas avanzadas (XLOOKUP, LAMBDA), scripts de Google Sheets, macros VBA y consultas SQL.',
    iconName: 'Table',
    slug: 'excel-datos-automatizacion',
    color: 'from-emerald-600 to-green-700',
    promptCount: 9
  },
  {
    id: 'cat-16',
    name: 'Finanzas Personales y Planificación',
    description: 'Estrategias de ahorro 50/30/20, simuladores de interés compuesto, optimización de presupuestos familiares.',
    iconName: 'Coins',
    slug: 'finanzas-personales',
    color: 'from-yellow-500 to-amber-700',
    promptCount: 6
  },
  {
    id: 'cat-17',
    name: 'Diseño y Creatividad',
    description: 'Design thinking, brief de diseño, sistemas de diseño UI/UX y conceptualización de marcas.',
    iconName: 'Palette',
    slug: 'diseno-creatividad',
    color: 'from-fuchsia-500 to-pink-600',
    promptCount: 8
  },
  {
    id: 'cat-18',
    name: 'Desarrollo Personal',
    description: 'Claridad mental, superación del bloqueo creativo, preparación para entrevistas y comunicación asertiva.',
    iconName: 'Sparkles',
    slug: 'desarrollo-personal',
    color: 'from-violet-600 to-purple-800',
    promptCount: 7
  },
  {
    id: 'cat-19',
    name: 'Agentes de IA y Flujos de Trabajo',
    description: 'Orquestación de agentes autónomos, frameworks de memoria, herramientas de función y bucles de control.',
    iconName: 'Cpu',
    slug: 'agentes-flujos-trabajo',
    color: 'from-cyan-600 to-blue-800',
    promptCount: 10
  },
  {
    id: 'cat-20',
    name: 'Técnicas Avanzadas de Prompting',
    description: 'Chain of Thought, Tree of Thoughts, Few-Shot In-Context, ReAct y delimitadores a prueba de fugas.',
    iconName: 'Zap',
    slug: 'tecnicas-avanzadas-prompting',
    color: 'from-purple-600 to-violet-950',
    promptCount: 11
  }
];
