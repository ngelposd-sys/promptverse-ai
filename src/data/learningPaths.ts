import { LearningPath } from '../types';

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-1',
    title: 'De Cero a Prompt Engineer Profesional',
    description: 'Ruta fundamental para dominar la estructuración de contexto, delimitadores, Chain of Thought y reducción de alucinaciones.',
    level: 'Iniciación',
    durationEst: '4 horas',
    stepsCount: 6,
    icon: 'Compass',
    promptIds: ['p-1', 'p-2', 'p-40', 'p-18'],
    rewardCoins: 50,
    rewardXp: 150
  },
  {
    id: 'path-2',
    title: 'Desarrollo de Software y Arquitectura con IA',
    description: 'Aprende a usar modelos como copilotos de élite: code reviews rigurosos, especificaciones OpenAPI, pruebas unitarias y SQL.',
    level: 'Avanzado',
    durationEst: '6 horas',
    stepsCount: 8,
    icon: 'Terminal',
    promptIds: ['p-7', 'p-8', 'p-34', 'p-39'],
    rewardCoins: 75,
    rewardXp: 250
  },
  {
    id: 'path-3',
    title: 'Especialista en Aplicaciones Móviles Android con IA',
    description: 'Flujo de trabajo para arquitectos Android: Jetpack Compose reactivo, MVVM, Clean Architecture y monetización ética con AdMob.',
    level: 'Avanzado',
    durationEst: '5 horas',
    stepsCount: 5,
    icon: 'Smartphone',
    promptIds: ['p-9', 'p-10'],
    rewardCoins: 80,
    rewardXp: 280
  },
  {
    id: 'path-4',
    title: 'Copywriting de Alta Conversión y Estrategia de Contenidos',
    description: 'Marcos de persuasión AIDA y PAS, guiones virales de YouTube/TikTok, post de autoridad en LinkedIn y SEO semántico.',
    level: 'Intermedio',
    durationEst: '4.5 horas',
    stepsCount: 7,
    icon: 'TrendingUp',
    promptIds: ['p-5', 'p-13', 'p-14', 'p-15', 'p-38'],
    rewardCoins: 60,
    rewardXp: 200
  },
  {
    id: 'path-5',
    title: 'Maestría en Agentes Autónomos y Razonamiento ToT',
    description: 'El nivel más alto: Tree of Thoughts, orquestación de agentes ReAct, Function Calling y bucles defensivos multi-herramienta.',
    level: 'Experto',
    durationEst: '8 horas',
    stepsCount: 9,
    icon: 'Zap',
    promptIds: ['p-24', 'p-25', 'p-37'],
    rewardCoins: 120,
    rewardXp: 400
  }
];
