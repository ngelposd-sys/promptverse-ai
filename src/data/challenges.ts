import { DailyChallenge, UserBadge } from '../types';

export const INITIAL_CHALLENGES: DailyChallenge[] = [
  {
    id: 'ch-1',
    title: 'Explorador Curioso',
    description: 'Explora y copia al menos 2 prompts de la biblioteca para tus proyectos.',
    rewardCoins: 20,
    rewardXp: 50,
    icon: 'Search',
    targetCount: 2,
    currentCount: 0,
    completed: false,
    actionType: 'copy_prompt'
  },
  {
    id: 'ch-2',
    title: 'Maestro Artesano',
    description: 'Construye un prompt a medida utilizando el Taller de Prompts (Prompt Builder).',
    rewardCoins: 30,
    rewardXp: 75,
    icon: 'Hammer',
    targetCount: 1,
    currentCount: 0,
    completed: false,
    actionType: 'build_prompt'
  },
  {
    id: 'ch-3',
    title: 'Estudioso de la Técnica',
    description: 'Lee y analiza una técnica del AI Command Center.',
    rewardCoins: 15,
    rewardXp: 40,
    icon: 'BookOpen',
    targetCount: 1,
    currentCount: 0,
    completed: false,
    actionType: 'read_technique'
  },
  {
    id: 'ch-4',
    title: 'Coleccionista Selecto',
    description: 'Guarda al menos 1 prompt en tus favoritos de la biblioteca personal.',
    rewardCoins: 15,
    rewardXp: 35,
    icon: 'Bookmark',
    targetCount: 1,
    currentCount: 0,
    completed: false,
    actionType: 'save_favorite'
  }
];

export const AVAILABLE_BADGES: UserBadge[] = [
  {
    id: 'badge-first-copy',
    name: 'Primer Impulso',
    description: 'Copiaste tu primer prompt profesional en el portapapeles.',
    icon: 'Sparkles',
    unlockedAt: ''
  },
  {
    id: 'badge-prompt-builder',
    name: 'Arquitecto de Prompts',
    description: 'Generaste tu primer prompt estructurado en el Taller.',
    icon: 'Wrench',
    unlockedAt: ''
  },
  {
    id: 'badge-master-unlock',
    name: 'Círculo Master',
    description: 'Desbloqueaste tu primer prompt de nivel Master con PromptCoins.',
    icon: 'Crown',
    unlockedAt: ''
  },
  {
    id: 'badge-streak-3',
    name: 'Hábito de Élite',
    description: 'Alcanzaste una racha de 3 días consecutivos.',
    icon: 'Flame',
    unlockedAt: ''
  },
  {
    id: 'badge-level-2',
    name: 'Rango Experto',
    description: 'Superaste el Nivel 1 y ascendiste al Rango Experto.',
    icon: 'Award',
    unlockedAt: ''
  }
];

export interface PromptTemplatePreset {
  id: string;
  name: string;
  category: string;
  tool: string;
  description: string;
  goal: string;
  context: string;
  role: string;
  outputFormat: string;
  tone: string;
  constraints: string;
  detailLevel: string;
}

export const BUILDER_PRESETS: PromptTemplatePreset[] = [
  {
    id: 'preset-1',
    name: 'Auditor de Código y Seguridad',
    category: 'Programación',
    tool: 'ChatGPT',
    description: 'Evalúa vulnerabilidades, principios SOLID y optimiza rendimiento.',
    goal: 'Auditar un componente crítico buscando vulnerabilidades OWASP y fugas de memoria.',
    context: 'Aplicación web en producción con más de 50.000 usuarios activos diarios.',
    role: 'Auditor Senior de Ciberseguridad y Clean Code con 15 años de experiencia.',
    outputFormat: 'Tabla Markdown con riesgos identificados, seguida del código refactorizado completo y 3 tests unitarios.',
    tone: 'Técnico, riguroso, directo y sin introducciones amables innecesarias.',
    constraints: 'No omitas partes del código con comentarios tipo "// resto del código igual". Debe compilar directamente.',
    detailLevel: 'Profundo y exhaustivo'
  },
  {
    id: 'preset-2',
    name: 'Estratega de Copywriting AIDA',
    category: 'Marketing',
    tool: 'Claude',
    description: 'Crea anuncios de alta conversión estructurados en 4 fases psicológicas.',
    goal: 'Escribir un copy publicitario para captar clientes interesados en consultoría.',
    context: 'Lanzamiento de un nuevo servicio de optimización con IA para empresas medianas.',
    role: 'Copywriter de Respuesta Directa de élite entrenado en los principios de Eugene Schwartz.',
    outputFormat: 'Estructura AIDA (Atención, Interés, Deseo, Acción) con 3 variantes de titular de alto CTR.',
    tone: 'Persuasivo, empático, centrado en el dolor del cliente y en el ROI comercial.',
    constraints: 'Prohibido usar palabras cliché como "revolucionario", "catalizador" o "en el vertiginoso mundo actual".',
    detailLevel: 'Equilibrado y orientado a la acción'
  },
  {
    id: 'preset-3',
    name: 'Tutor Socrático Técnico',
    category: 'Educación',
    tool: 'Universal',
    description: 'Explica conceptos difíciles mediante preguntas guiadas y analogías visuales.',
    goal: 'Enseñar el funcionamiento interno de una tecnología compleja sin jerga innecesaria.',
    context: 'Estudiante con conocimientos básicos que desea entender el porqué fundamental de las cosas.',
    role: 'Profesor de ciencias apasionado con la didáctica de Richard Feynman.',
    outputFormat: '1 analogía visual cotidiana, explicación del mecanismo físico en 3 pasos y 1 pregunta de prueba al final.',
    tone: 'Cálido, estimulante, didáctico y paciente.',
    constraints: 'Hazme solo una pregunta socrática por mensaje y espera mi respuesta antes de continuar.',
    detailLevel: 'Didáctico paso a paso'
  },
  {
    id: 'preset-4',
    name: 'Arquitecto Android Kotlin',
    category: 'Android',
    tool: 'ChatGPT',
    description: 'Diseña pantallas nativas en Jetpack Compose con MVVM y StateFlow.',
    goal: 'Diseñar la pantalla de detalle de producto con estados reactivos y manejo de errores.',
    context: 'App Android moderna en Kotlin 2.0 con Material Design 3 e inyección Hilt.',
    role: 'Google Developer Expert (GDE) en Android y Arquitecto Kotlin Senior.',
    outputFormat: 'Sealed interfaces para UI State y UI Events, ViewModel reactivo y Stateless Composable.',
    tone: 'Profesional, idiomático en Kotlin y enfocado en accesibilidad y buenas prácticas.',
    constraints: 'No incluyas lógica de negocio dentro del Composable. Usa Flow y Coroutines de forma segura.',
    detailLevel: 'Código completo de producción'
  }
];
