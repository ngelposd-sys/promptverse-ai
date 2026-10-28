import { PhotoCategory } from './types';

export const PHOTO_CATEGORIES: PhotoCategory[] = [
  {
    id: 'cat-foto-retrato',
    name: 'Retrato y Personas',
    description: 'Retratos editoriales, primeros planos cinematográficos, iluminación Rembrandt, blanco y negro intimista y fotografía documental.',
    iconName: 'User',
    slug: 'retrato-personas',
    color: 'from-purple-500 to-indigo-600',
    modeCount: 20
  },
  {
    id: 'cat-foto-producto',
    name: 'Producto y Publicidad',
    description: 'Tomas comerciales de estudio, packshots de cosmética, botellas con gotas de condensación, joyería macro y e-commerce de alta gama.',
    iconName: 'Package',
    slug: 'producto-publicidad',
    color: 'from-cyan-500 to-blue-600',
    modeCount: 20
  },
  {
    id: 'cat-foto-paisajes',
    name: 'Paisajes y Naturaleza',
    description: 'Horizontes dorados, niebla mística en cordilleras, largas exposiciones en cascadas, desiertos esculpidos y auroras boreales.',
    iconName: 'Mountain',
    slug: 'paisajes-naturaleza',
    color: 'from-emerald-500 to-teal-600',
    modeCount: 20
  },
  {
    id: 'cat-foto-calle',
    name: 'Calle, Viajes y Arquitectura',
    description: 'Fotografía callejera espontánea, simetrías de rascacielos, callejones con lluvia en Tokio, interiores góticos y vida urbana cotidiana.',
    iconName: 'Building',
    slug: 'calle-viajes-arquitectura',
    color: 'from-amber-500 to-orange-600',
    modeCount: 20
  },
  {
    id: 'cat-foto-macro',
    name: 'Macro, Animales y Vida Salvaje',
    description: 'Microdetalles en ojos de insectos, gotas de rocío sobre hojas, depredadores en la sabana, aves rapaces en vuelo y fauna ártica.',
    iconName: 'Bug',
    slug: 'macro-animales-salvaje',
    color: 'from-lime-500 to-emerald-600',
    modeCount: 20
  },
  {
    id: 'cat-foto-moda',
    name: 'Moda y Belleza',
    description: 'Portadas de Vogue, alta costura en pasarela, editoriales en locaciones históricas, beauty shots y estilismo avant-garde.',
    iconName: 'Sparkles',
    slug: 'moda-belleza',
    color: 'from-pink-500 to-rose-600',
    modeCount: 20
  },
  {
    id: 'cat-foto-gastronomia',
    name: 'Gastronomía y Bebidas',
    description: 'Platos de estrella Michelin, café humeante con grano visible, cócteles artesanales con reflejos y postres en acción con azúcar glas.',
    iconName: 'UtensilsCrossed',
    slug: 'gastronomia-bebidas',
    color: 'from-orange-500 to-red-600',
    modeCount: 20
  },
  {
    id: 'cat-foto-deportes',
    name: 'Deportes y Acción',
    description: 'Congelación de movimiento a 1/8000s, barridos dinámicos en Fórmula 1, saltos extremos de surf y tensión emocional en atletas.',
    iconName: 'Activity',
    slug: 'deportes-accion',
    color: 'from-blue-500 to-indigo-700',
    modeCount: 20
  },
  {
    id: 'cat-foto-nocturna',
    name: 'Fotografía Nocturna y Astronómica',
    description: 'Vía Láctea sobre formaciones rocosas, estelas de estrellas (star trails), ciudades ciberpunk con neón y horas azules crepusculares.',
    iconName: 'Moon',
    slug: 'nocturna-astronomica',
    color: 'from-indigo-600 to-violet-900',
    modeCount: 20
  },
  {
    id: 'cat-foto-arte',
    name: 'Arte, Cine y Fotografía Experimental',
    description: 'Doble exposición analógica, bokeh prismático anamórfico, estética Kodachrome 64 vintage, claroscuro barroco y surrealismo visual.',
    iconName: 'Aperture',
    slug: 'arte-cine-experimental',
    color: 'from-fuchsia-500 to-purple-800',
    modeCount: 20
  }
];
