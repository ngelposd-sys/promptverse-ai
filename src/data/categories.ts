import { PromptCategory } from '../types';

export const CATEGORIES: PromptCategory[] = [
  {
    id: 'cat-escritura',
    name: 'Escritura Profesional y Redacción',
    description: 'Artículos, informes ejecutivos, discursos, corrección de estilo, storytelling y redacción persuasiva.',
    iconName: 'PenTool',
    slug: 'escritura-profesional',
    color: 'from-indigo-500 to-purple-600',
    promptCount: 7,
    commandCount: 7
  },
  {
    id: 'cat-marketing',
    name: 'Marketing Digital y Publicidad',
    description: 'Campañas multicanal, copywriting de respuesta directa (AIDA/PAS), embudos de conversión y anuncios.',
    iconName: 'Megaphone',
    slug: 'marketing-publicidad',
    color: 'from-purple-500 to-pink-600',
    promptCount: 7,
    commandCount: 7
  },
  {
    id: 'cat-redes',
    name: 'Redes Sociales y Creación de Contenido',
    description: 'Estrategias para LinkedIn, hilos virales para X, carruseles, publicaciones y calendarios editoriales.',
    iconName: 'Share2',
    slug: 'redes-sociales',
    color: 'from-sky-500 to-blue-600',
    promptCount: 6,
    commandCount: 7
  },
  {
    id: 'cat-imagenes',
    name: 'Generación de Imágenes mediante IA',
    description: 'Prompts fotográficos para Midjourney, DALL-E 3, Stable Diffusion y FLUX: ópticas, iluminación y texturas.',
    iconName: 'Image',
    slug: 'generacion-imagenes',
    color: 'from-pink-500 to-rose-600',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-video',
    name: 'Creación de Vídeos y Guiones Audiovisuales',
    description: 'Estructuras de guión para YouTube, TikTok, Reels, micro-learning corporativo y escaletas de podcasts.',
    iconName: 'Video',
    slug: 'creacion-videos',
    color: 'from-violet-500 to-fuchsia-600',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-programacion',
    name: 'Programación, Desarrollo Web y Apps',
    description: 'Refactorización, depuración, arquitecturas limpias, TypeScript, Android Kotlin, testing y seguridad OWASP.',
    iconName: 'Code',
    slug: 'programacion-desarrollo',
    color: 'from-cyan-500 to-blue-600',
    promptCount: 8,
    commandCount: 8
  },
  {
    id: 'cat-negocios',
    name: 'Negocios, Emprendimiento y Estrategia',
    description: 'Validación Lean Canvas, análisis DAFO, planes de negocio, pricing y posicionamiento de startups.',
    iconName: 'Briefcase',
    slug: 'negocios-emprendimiento',
    color: 'from-amber-500 to-orange-600',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-ventas',
    name: 'Ventas, E-commerce y Atención al Cliente',
    description: 'Desactivación de objeciones, mensajes de prospección en frío, guiones de cierre y gestión de soporte.',
    iconName: 'TrendingUp',
    slug: 'ventas-ecommerce',
    color: 'from-amber-600 to-red-600',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-educacion',
    name: 'Educación, Estudio e Idiomas',
    description: 'Técnica Feynman, preparación socrática, exámenes tipo test, flashcards Anki y práctica de idiomas.',
    iconName: 'GraduationCap',
    slug: 'educacion-estudio',
    color: 'from-indigo-600 to-purple-700',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-productividad',
    name: 'Productividad, Organización y Gestión del Tiempo',
    description: 'Sistemas Time Blocking, matriz de Eisenhower, rutinas de foco profundo (Deep Work) y hábitos diarios.',
    iconName: 'CheckCircle2',
    slug: 'productividad-tiempo',
    color: 'from-blue-600 to-cyan-600',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-datos',
    name: 'Análisis de Datos, Excel y Estadísticas',
    description: 'Fórmulas complejas (XLOOKUP, LAMBDA), Google Apps Script, consultas SQL optimizadas y métricas clave.',
    iconName: 'Table',
    slug: 'analisis-datos-excel',
    color: 'from-emerald-600 to-green-700',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-diseno',
    name: 'Diseño Gráfico, Creatividad y Branding',
    description: 'Sistemas de identidad de marca, arquetipos de Jung, paletas de color 60-30-10 y diseño UI/UX.',
    iconName: 'Palette',
    slug: 'diseno-creatividad',
    color: 'from-fuchsia-500 to-pink-600',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-investigacion',
    name: 'Investigación, Documentación y Síntesis',
    description: 'Auditoría de afirmaciones, síntesis de papers científicos, matrices comparativas y verificación de fuentes.',
    iconName: 'FileSearch',
    slug: 'investigacion-sintesis',
    color: 'from-teal-500 to-cyan-700',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-rrhh',
    name: 'Recursos Humanos, Selección y Formación',
    description: 'Entrevistas por competencias STAR, evaluación del desempeño, planes de acogida y feedback 360.',
    iconName: 'Users',
    slug: 'recursos-humanos',
    color: 'from-orange-500 to-amber-700',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-proyectos',
    name: 'Gestión de Proyectos y Trabajo en Equipo',
    description: 'Historias de usuario BDD/Gherkin, retrospectivas ágiles, matrices RACI y control de riesgos operativos.',
    iconName: 'Layers',
    slug: 'gestion-proyectos',
    color: 'from-blue-500 to-violet-600',
    promptCount: 6,
    commandCount: 6
  },
  {
    id: 'cat-automatizacion',
    name: 'Automatización y Flujos de Trabajo con IA',
    description: 'Arquitectura de agentes ReAct, bucles Function Calling, escenarios Make/Zapier y cadenas Tree of Thoughts.',
    iconName: 'Cpu',
    slug: 'automatizacion-flujos',
    color: 'from-purple-600 to-violet-950',
    promptCount: 7,
    commandCount: 7
  }
];
