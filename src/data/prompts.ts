import { PromptItem } from '../types';

export const PROMPTS: PromptItem[] = [
  // 1. ChatGPT y asistentes
  {
    id: 'p-1',
    title: 'Arquitecto de Contexto y Sistema de Trabajo',
    description: 'Transforma a ChatGPT en un asesor experto hiper-específico con marco de razonamiento y protocolo de validación.',
    categoryId: 'cat-1',
    subcategory: 'Configuración de Sistema',
    tags: ['ChatGPT', 'System Prompt', 'Marco de Trabajo', 'Metodología'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Establecer directrices estrictas de rol, formato de salida y verificación cruzada antes de emitir respuestas complejas.',
    fullPrompt: `Actúa como un [ROL_EXPERTO] con más de 15 años de experiencia de primer nivel en [DOMINIO_ESPECIALIDAD].

Tu objetivo en esta sesión es [OBJETIVO_PRINCIPAL].

Antes de responder a cualquier solicitud, debes aplicar el siguiente protocolo de tres pasos:
1. DESGLOSE DEL CONTEXTO: Resume en 2 líneas tu comprensión de lo que necesito.
2. HIPÓTESIS Y ENFOQUE: Plantea la metodología técnica que emplearás.
3. ENTREGABLE: Proporciona la solución detallada en un tono [TONO] utilizando un formato estructurado con viñetas y bloques de código/tablas si procede.

Restricciones inquebrantables:
- No utilices introducciones genéricas ni frases de relleno como "¡Claro, con gusto!".
- Si te falta información crítica, formula un máximo de 3 preguntas clave antes de proceder.
- Señala explícitamente cualquier suposición o riesgo técnico detectado.`,
    variables: [
      { key: 'ROL_EXPERTO', label: 'Rol Experto', placeholder: 'Arquitecto de Software Senior', defaultValue: 'Consultor de Estrategia Digital' },
      { key: 'DOMINIO_ESPECIALIDAD', label: 'Dominio o Industria', placeholder: 'SaaS B2B y Ciberseguridad', defaultValue: 'Comercio Electrónico y Conversión' },
      { key: 'OBJETIVO_PRINCIPAL', label: 'Objetivo de la sesión', placeholder: 'Auditar la arquitectura técnica', defaultValue: 'Optimizar el embudo de ventas y reducir el coste por adquisición' },
      { key: 'TONO', label: 'Tono de comunicación', placeholder: 'Analítico, riguroso y conciso', defaultValue: 'Ejecutivo, pragmático y orientado a datos' }
    ],
    exampleUse: 'Definir el marco de trabajo para un consultor de conversión en e-commerce que diseñará el nuevo checkout.',
    expectedResult: 'Respuestas sin relleno, con diagnóstico previo, consideraciones de riesgo y planes de acción paso a paso.',
    tips: [
      'Úsalo como primer mensaje en un chat nuevo de ChatGPT o Claude.',
      'Si necesitas que recuerde datos durante una sesión larga, menciónale el punto 1 en cada iteración.'
    ],
    commonErrors: [
      'No cambiar las variables entre corchetes antes de enviar.',
      'Añadir instrucciones contradictorias en el mismo prompt.'
    ],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-15',
    usageCount: 3842,
    ratingScore: 4.9,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-2', 'p-40']
  },
  {
    id: 'p-2',
    title: 'Auditor de Coherencia y Detección de Alucinaciones',
    description: 'Obliga al modelo a evaluar críticamente un texto o respuesta previa buscando contradicciones, afirmaciones sin sustento o imprecisiones.',
    categoryId: 'cat-1',
    subcategory: 'Verificación',
    tags: ['Auditoría', 'Fact-checking', 'Crítica', 'Precisión'],
    difficulty: 'Avanzado',
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    objective: 'Filtrar y depurar información generada por IA antes de su publicación o adopción en decisiones críticas.',
    fullPrompt: `Analiza críticamente el siguiente texto con la mentalidad de un revisor científico imparcial y exhaustivo.

Texto a auditar:
"""
[TEXTO_A_EVALUAR]
"""

Realiza la auditoría en una tabla Markdown con las columnas:
1. Afirmación concreta realizada en el texto.
2. Nivel de verosimilitud (Probado / Dudoso / Alucinación probable).
3. Justificación técnica o lógica de tu evaluación.
4. Versión corregida o matizada recomendada.

Al final de la tabla, emite una puntuación global de fiabilidad del 1 al 10 y una recomendación final de publicación.`,
    variables: [
      { key: 'TEXTO_A_EVALUAR', label: 'Texto o respuesta previa a auditar', placeholder: 'Pega aquí el contenido generado...', defaultValue: 'Los modelos LLM tienen conciencia situada porque recalculan su atención en cada ciclo de inferencia.' }
    ],
    exampleUse: 'Comprobar informes técnicos redactados por IA antes de enviarlos a directivos o clientes.',
    expectedResult: 'Tabla estructurada con despiece analítico y clasificación de afirmaciones dudosas.',
    tips: ['Pídele que cite fuentes públicas conocidas si sospechas que una cifra estadística es ficticia.'],
    commonErrors: ['Aceptar el análisis sin contrastar las correcciones sugeridas.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-20',
    usageCount: 2190,
    ratingScore: 4.8,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-1', 'p-14']
  },

  // 2. Escritura profesional
  {
    id: 'p-3',
    title: 'Redactor Ejecutivo de Informes de Alto Impacto',
    description: 'Convierte datos crudos, notas desordenadas o actas de reunión en un informe ejecutivo pulido con resumen para la dirección.',
    categoryId: 'cat-2',
    subcategory: 'Informes y Memorandos',
    tags: ['Informes', 'Liderazgo', 'Síntesis', 'Business Writing'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Estructurar información dispersa en un memorando ejecutivo accionable que respete el principio de la pirámide de Minto.',
    fullPrompt: `Actúa como Director de Estrategia Corporativa. Transforma las siguientes notas en un Memorando Ejecutivo de 1 página con metodología de la Pirámide de Minto (la conclusión primero, seguida de los argumentos clave y luego los datos de soporte).

Notas y datos base:
"""
[NOTAS_DESORDENADAS]
"""

Estructura obligatoria:
1. RESUMEN EJECUTIVO (Máximo 4 líneas con la decisión clave recomendada).
2. SITUACIÓN ACTUAL Y COMPLICACIÓN (El problema y por qué requiere atención inmediata).
3. 3 PILARES ESTRATÉGICOS DE ACCIÓN (Con responsables e impacto esperado).
4. MATRIZ DE RIESGOS Y MITIGACIÓN (Tabla con Riesgo, Probabilidad, Impacto y Acción).
5. PRÓXIMOS PASOS (Calendario a 14 y 30 días).

Tono: [TONO_COMUNICACION]. Idioma: Español profesional.`,
    variables: [
      { key: 'NOTAS_DESORDENADAS', label: 'Notas o puntos brutos', placeholder: 'Pega tus notas desordenadas...', defaultValue: 'Caída de ventas del 12% en Q3. Quejas en soporte subieron 25%. El nuevo release tiene bugs en pasarela Stripe. El equipo comercial pide bajar precios pero el margen ya es del 18%. Falta documentación en onboarding.' },
      { key: 'TONO_COMUNICACION', label: 'Tono deseado', placeholder: 'Directo y centrado en ROI', defaultValue: 'Formal, sobrio, enfocado en rentabilidad y mitigación operativa' }
    ],
    exampleUse: 'Generar el informe mensual para el consejo directivo tras una semana de incidencias técnicas.',
    expectedResult: 'Documento impecable con resumen directivo claro y decisiones priorizadas.',
    tips: ['Indica siempre el rol de quien leerá el informe (CEO, CFO, CTO) para calibrar el vocabulario.'],
    commonErrors: ['Sobrecargar con detalles técnicos que impidan ver la decisión estratégica.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-22',
    usageCount: 1940,
    ratingScore: 4.9,
    author: 'Elena Morales',
    relatedPromptIds: ['p-4', 'p-12']
  },
  {
    id: 'p-4',
    title: 'Reescritura de Estilo Anti-IA y Humanización de Textos',
    description: 'Elimina patrones predecibles, adjetivos rimbombantes y cadencia monótona típica de los textos generados por modelos de lenguaje.',
    categoryId: 'cat-2',
    subcategory: 'Edición y Corrección',
    tags: ['Humanización', 'Copywriting', 'Estilo', 'Naturalidad'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    objective: 'Transformar prosa artificial en voz humana orgánica, variada y con ritmo natural.',
    fullPrompt: `Reescribe el siguiente texto para eliminar cualquier rastro de prosa predecible o artificial generada por IA.

Texto original:
"""
[TEXTO_ROBÓTICO]
"""

Reglas estrictas de edición:
1. Varía drásticamente la longitud de las oraciones: alterna frases cortas e impactantes con oraciones de desarrollo medio.
2. Prohibido usar las siguientes palabras cliché: "en resumen", "en el vertiginoso mundo actual", "es fundamental destacar", "un tapiz de posibilidades", "sumergirse", "catalizador", "innovador", "sin duda alguna".
3. Emplea un vocabulario directo, natural y con fuerza expresiva propia de [TIPO_DE_VOZ].
4. Conserva el 100% de las ideas e información clave sin añadir relleno superfluo.
5. Presenta primero la versión reescrita y a continuación un breve resumen de los 3 cambios estilísticos principales aplicados.`,
    variables: [
      { key: 'TEXTO_ROBÓTICO', label: 'Texto a humanizar', placeholder: 'Pega el texto redactado por IA...', defaultValue: 'En el vertiginoso mundo de la transformación digital contemporánea, es fundamental comprender que las herramientas tecnológicas actúan como un verdadero catalizador para maximizar el potencial humano...' },
      { key: 'TIPO_DE_VOZ', label: 'Tipo de voz/autor', placeholder: 'Un ensayista contemporáneo perspicaz', defaultValue: 'Un veterano del sector que habla con claridad, franqueza y metáforas cotidianas' }
    ],
    exampleUse: 'Pulir newsletters, artículos de blog o ensayos para evitar que suenen genéricos.',
    expectedResult: 'Texto fluido, ágil y atractivo sin los tics habituales de los LLMs.',
    tips: ['Pídele que use metáforas sensoriales concretas para fijar conceptos abstractos.'],
    commonErrors: ['Pedir que humanice pero dejar el prompt sin especificar qué palabras prohibir.'],
    accessLevel: 'experto',
    coinCost: 35,
    createdAt: '2025-02-01',
    usageCount: 4120,
    ratingScore: 5.0,
    author: 'Javier Roca',
    relatedPromptIds: ['p-3', 'p-9']
  },

  // 3. Marketing y publicidad
  {
    id: 'p-5',
    title: 'Generador de Campañas de Copywriting con Marco AIDA y PAS',
    description: 'Desarrolla variantes completas de anuncios publicitarios orientados a conversión aplicando los dos marcos clásicos de persuasión.',
    categoryId: 'cat-3',
    subcategory: 'Publicidad de Respuesta Directa',
    tags: ['AIDA', 'PAS', 'Ads', 'Copywriting', 'Conversión'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Producir textos de anuncios publicitarios para Meta, Google y LinkedIn con alta resonancia psicológica.',
    fullPrompt: `Actúa como Copywriter de Respuesta Directa de clase mundial especializado en [NICHO_PRODUCTO].

Crea una suite de copies publicitarios para promocionar:
- Producto / Servicio: [PRODUCTO_SERVICIO]
- Público Objetivo: [PUBLICO_OBJETIVO]
- Gran Beneficio Diferencial: [BENEFICIO_CLAVE]
- Oferta o Llamada a la Acción (CTA): [OFERTA_CTA]

Genera:
1. VERSIÓN AIDA (Atención con gancho disruptivo, Interés con datos/dolor, Deseo con transformación vívida, Acción inmediata).
2. VERSIÓN PAS (Problema latente, Agitación del coste de no resolverlo, Solución definitiva como único puente).
3. 5 TITULARES ALTERNATIVOS de alto CTR categorizados por ángulo (Curiosidad, Pérdida/Miedo, Contraintuitivo, Prueba social, Rapidez).

Formato de entrega: Bloques claramente diferenciados con sugerencias de imagen o vídeo complementario.`,
    variables: [
      { key: 'NICHO_PRODUCTO', label: 'Nicho o Industria', placeholder: 'SaaS B2B para pymes', defaultValue: 'Software de gestión para clínicas odontológicas' },
      { key: 'PRODUCTO_SERVICIO', label: 'Nombre y función', placeholder: 'Software DentalCloud', defaultValue: 'DentalFlow Pro (sistema de recordatorios por WhatsApp y ficha clínica)' },
      { key: 'PUBLICO_OBJETIVO', label: 'Público objetivo', placeholder: 'Directores de clínicas', defaultValue: 'Propietarios de clínicas dentales que sufren ausencias de pacientes y citas canceladas a última hora' },
      { key: 'BENEFICIO_CLAVE', label: 'Beneficio clave', placeholder: 'Reduce 40% ausencias', defaultValue: 'Reduce un 42% el absentismo de pacientes mediante IA predictiva de confirmaciones' },
      { key: 'OFERTA_CTA', label: 'Oferta / CTA', placeholder: 'Prueba gratis 14 días', defaultValue: 'Prueba gratuita de 14 días sin tarjeta de crédito y demo personalizada de 15 minutos' }
    ],
    exampleUse: 'Crear la batería creativa para una campaña de captación de leads en Facebook e Instagram Ads.',
    expectedResult: 'Copies listos para lanzar a testing A/B con ganchos persuasivos probados.',
    tips: ['Indica siempre el ticket de precio para que el copy use el nivel adecuado de sofisticación.'],
    commonErrors: ['Olvidar especificar la objeción principal del cliente potencial.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-18',
    usageCount: 2890,
    ratingScore: 4.8,
    author: 'Lucía Santamaría',
    relatedPromptIds: ['p-9', 'p-11']
  },

  // 4. Negocios y emprendimiento
  {
    id: 'p-6',
    title: 'Auditoría y Validación Rápida de Modelo de Negocio (Lean Canvas)',
    description: 'Somete una idea comercial o startup a un interrogatorio riguroso evaluando viabilidad, barreras de entrada y riesgos ocultos.',
    categoryId: 'cat-4',
    subcategory: 'Estrategia de Startups',
    tags: ['Startup', 'Lean Canvas', 'Validación', 'Inversión', 'Estrategia'],
    difficulty: 'Avanzado',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Identificar debilidades críticas antes de invertir capital o meses de desarrollo en una idea no validada.',
    fullPrompt: `Actúa como un Venture Capitalist veterano y socio director de aceleradora tecnológica.
Vas a realizar una auditoría implacable y constructiva de la siguiente idea de negocio:

Idea: [DESCRIPCION_IDEA]
Mercado geográfico y target: [MERCADO_TARGET]
Modelo de monetización propuesto: [MONETIZACION]

Proporciona un informe dividido en:
1. DESGLOSE LEAN CANVAS:
   - Los 3 problemas reales (no síntomas) que resuelve.
   - Segmentos de clientes "Early Adopters" específicos.
   - Propuesta de valor única (UVP) expresada en 1 sola frase potente.
   - Ventaja competitiva injusta (imposible de copiar rápidamente).
2. ANÁLISIS DE RIESGOS FATALES (Los 3 motivos más probables por los que este negocio quebraría en sus primeros 12 meses).
3. EXPERIMENTO DE VALIDACIÓN EN 7 DÍAS: Un test de validación con menos de 100€ de presupuesto para medir intención de compra real antes de programar una sola línea de código.
4. VEREDICTO DE INVERSIÓN: "Invertir", "Pivotar" o "Descartar", con fundamentación numérica.`,
    variables: [
      { key: 'DESCRIPCION_IDEA', label: 'Descripción de la idea', placeholder: 'Marketplace de...', defaultValue: 'Plataforma B2B para que restaurantes alquilen su cocina ociosa fuera de horario a marcas virtuales de delivery' },
      { key: 'MERCADO_TARGET', label: 'Mercado geográfico', placeholder: 'Grandes ciudades en España', defaultValue: 'Madrid, Barcelona y Valencia: dueños de restaurantes tradicionales y emprendedores ghost kitchen' },
      { key: 'MONETIZACION', label: 'Monetización propuesta', placeholder: 'Comisión por reserva...', defaultValue: 'Comisión del 15% sobre el alquiler mensual y seguro obligatorio de responsabilidad' }
    ],
    exampleUse: 'Evaluar una nueva oportunidad de negocio antes de renunciar al empleo o buscar socios.',
    expectedResult: 'Diagnóstico sin condescendencia que ahorra miles de euros en falsas validaciones.',
    tips: ['Sé brutalmente honesto en los datos que suministras; cuanto más realistas las dudas, mejor la auditoría.'],
    commonErrors: ['Describir la solución técnica en vez del problema de mercado que se intenta resolver.'],
    accessLevel: 'experto',
    coinCost: 40,
    createdAt: '2025-01-28',
    usageCount: 1650,
    ratingScore: 4.9,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-11', 'p-16']
  },

  // 5. Programación y desarrollo web
  {
    id: 'p-7',
    title: 'Senior Code Reviewer & Security Vulnerability Inspector',
    description: 'Analiza fragmentos de código en busca de fugas de memoria, inyecciones SQL/XSS, condiciones de carrera y deuda técnica.',
    categoryId: 'cat-5',
    subcategory: 'Calidad de Código y Seguridad',
    tags: ['Code Review', 'Clean Code', 'Seguridad', 'OWASP', 'TypeScript', 'Node.js'],
    difficulty: 'Avanzado',
    tools: ['Claude', 'ChatGPT', 'GitHub Copilot'],
    objective: 'Elevar estándares de código, asegurar cumplimiento de principios SOLID y sellar vulnerabilidades antes de merge.',
    fullPrompt: `Actúa como Ingeniero de Software Principal y Auditor de Seguridad de Aplicaciones (AppSec).

Revisa minuciosamente el siguiente fragmento de código escrito en [LENGUAJE_FRAMEWORK]:
\`\`\`[LENGUAJE_FRAMEWORK]
[CODIGO_A_REVISAR]
\`\`\`

Tu auditoría debe incluir obligatoriamente:
1. MATRIZ DE VULNERABILIDADES (OWASP Top 10):
   - Fuga de información, inyecciones, control de accesos, validación de inputs.
2. COMPLEJIDAD Y RENDIMIENTO (Big-O de tiempo y espacio, operaciones bloqueantes, fugas de recursos).
3. ADHERENCIA A CLEAN CODE Y PRINCIPIOS SOLID (Legibilidad, nombres descriptivos, acoplamiento).
4. VERSIÓN REFACTORIZADA COMPLETA: Código limpio, tipado estricto, manejo resiliente de errores y comentarios defensivos.
5. CASOS DE PRUEBA UNITARIA RECOMENDADOS (Mínimo 3 escenarios límite o edge cases a cubrir con Jest/Vitest/PyTest).`,
    variables: [
      { key: 'LENGUAJE_FRAMEWORK', label: 'Lenguaje y Entorno', placeholder: 'TypeScript / Node.js / Express', defaultValue: 'TypeScript / React' },
      { key: 'CODIGO_A_REVISAR', label: 'Código a auditar', placeholder: 'Pega tu función o componente...', defaultValue: 'async function fetchUserData(userId: string) { const res = await fetch("/api/user?id=" + userId); const data = await res.json(); eval(data.customScript); return data; }' }
    ],
    exampleUse: 'Inspeccionar endpoints de API o componentes React complejos antes de pasar a producción.',
    expectedResult: 'Informe detallado de fallos con código sustitutivo completamente seguro y listo para producción.',
    tips: ['Indica el framework de pruebas que utilizas para que los tests sugeridos sean copia-y-pega.'],
    commonErrors: ['Pegar código con secretos reales como tokens o contraseñas en el prompt.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-16',
    usageCount: 4210,
    ratingScore: 5.0,
    author: 'Marc Valls',
    relatedPromptIds: ['p-8', 'p-20']
  },
  {
    id: 'p-8',
    title: 'Generador de Arquitectura de API RESTful con OpenAPI / Swagger Spec',
    description: 'Diseña contratos de API robustos con códigos de estado HTTP semánticos, paginación, filtros y esquemas de validación.',
    categoryId: 'cat-5',
    subcategory: 'Diseño de APIs',
    tags: ['API', 'REST', 'OpenAPI', 'Swagger', 'Backend', 'Arquitectura'],
    difficulty: 'Avanzado',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Definir contratos de interfaces entre backend y frontend antes de comenzar la implementación.',
    fullPrompt: `Actúa como Arquitecto de Software Backend Senior. Diseña la especificación completa de la API REST para el módulo de [MODULO_SISTEMA].

Requisitos del diseño:
- Convenciones REST puras (nombres en plural, métodos GET, POST, PUT, PATCH, DELETE coherentes).
- Manejo estandarizado de respuestas de error (formato RFC 7807 Problem Details con campos type, title, status, detail, instance).
- Soporte para paginación por cursor o límite/desplazamiento, ordenación y filtrado dinámico.
- Códigos de estado HTTP rigurosos (200, 201, 204, 400, 401, 403, 404, 409, 422, 429, 500).

Entrega:
1. Tabla resumen de endpoints con método, ruta, descripción y permisos de rol requeridos.
2. Definición formal en formato OpenAPI 3.1 YAML con esquemas de Request Body y Response Body (200 y 4xx).
3. Ejemplo de carga útil JSON para cada endpoint.`,
    variables: [
      { key: 'MODULO_SISTEMA', label: 'Módulo del sistema a diseñar', placeholder: 'Gestión de Suscripciones y Facturación', defaultValue: 'Sistema de Notificaciones Multi-canal (Push, Email, In-App) con preferencias de usuario' }
    ],
    exampleUse: 'Crear la especificación técnica de un nuevo microservicio para coordinar a los equipos de frontend y backend.',
    expectedResult: 'Especificación OpenAPI válida con esquemas de datos completos y manejo de errores RFC 7807.',
    tips: ['Puedes importar el YAML resultante directamente en Swagger Editor o Postman.'],
    commonErrors: ['Usar verbos en las rutas URI (ej: /getNotifications en vez de GET /notifications).'],
    accessLevel: 'experto',
    coinCost: 45,
    createdAt: '2025-02-05',
    usageCount: 2310,
    ratingScore: 4.9,
    author: 'Marc Valls',
    relatedPromptIds: ['p-7', 'p-39']
  },

  // 6. Aplicaciones Android
  {
    id: 'p-9',
    title: 'Especialista en Arquitectura Android: Jetpack Compose + MVVM + Clean Architecture',
    description: 'Genera pantallas y ViewModels de Jetpack Compose modernos con StateFlow, Material 3, inyección Hilt y desacoplamiento limpio.',
    categoryId: 'cat-6',
    subcategory: 'Android Moderno (Kotlin)',
    tags: ['Android', 'Jetpack Compose', 'Kotlin', 'MVVM', 'StateFlow', 'Material 3'],
    difficulty: 'Avanzado',
    tools: ['Claude', 'ChatGPT', 'Universal'],
    objective: 'Construir pantallas Android nativas reactivas, accesibles y con gestión exhaustiva de estados de UI (Cargando, Éxito, Vacío, Error).',
    fullPrompt: `Actúa como Google Developer Expert (GDE) en Android y Arquitecto Kotlin Senior.

Diseña la arquitectura e implementación completa de la pantalla [NOMBRE_PANTALLA] para una app Android moderna:
- Funcionalidad: [DESCRIPCION_PANTALLA]
- Stack técnico: Kotlin 2.0+, Jetpack Compose, Material Design 3, ViewModel con StateFlow, Sealed Interfaces para UI State y UI Events.

Entrega código Kotlin de producción estructurado en:
1. Sealed Interface del UI State (Loading, Success con datos inmutables, Empty, Error con mensaje localizable).
2. Sealed Interface de UI Events / Intent (acciones del usuario: clicks, swipes, reintentos).
3. ViewModel con gestión de Coroutines (\`viewModelScope\`), inyección \`@HiltViewModel\` y emisión mediante \`asStateFlow()\`.
4. Componente \`@Composable\` principal con desacoplamiento de estado (Stateless Screen + Stateful Wrapper) y soporte para Dark Mode y TalkBack (accesibilidad).
5. Preview Composable con estado simulado para Android Studio.`,
    variables: [
      { key: 'NOMBRE_PANTALLA', label: 'Nombre de la pantalla', placeholder: 'RewardCenterScreen', defaultValue: 'PromptDetailScreen' },
      { key: 'DESCRIPCION_PANTALLA', label: 'Funcionalidad de la pantalla', placeholder: 'Visualizar prompt...', defaultValue: 'Visualizar un prompt con variables interactivas, botón de copiar al portapapeles con feedback háptico, selector de favoritos y desbloqueo con monedas virtuales' }
    ],
    exampleUse: 'Crear la estructura de una pantalla nativa en Kotlin para portar PromptVerse a Android.',
    expectedResult: 'Código Kotlin limpio, con manejo reactivo de estados sin fugas de memoria.',
    tips: ['Separa siempre los Composables en Stateless (reciben estado y lambdas de evento) para facilitar previews y pruebas de UI.'],
    commonErrors: ['Instanciar el ViewModel directamente dentro del Composable hijo en lugar del nivel superior de navegación.'],
    accessLevel: 'experto',
    coinCost: 50,
    createdAt: '2025-02-08',
    usageCount: 1870,
    ratingScore: 4.9,
    author: 'Daniel Gómez',
    relatedPromptIds: ['p-7', 'p-10']
  },
  {
    id: 'p-10',
    title: 'Diseñador de Flujos de Monetización Ética en Android (AdMob + In-App Rewards)',
    description: 'Estructura el ciclo de vida de anuncios recompensados en Android asegurando cumplimiento de políticas de Google Play y buena experiencia de usuario.',
    categoryId: 'cat-6',
    subcategory: 'Monetización Android',
    tags: ['Android', 'AdMob', 'Rewarded Ads', 'Google Play', 'Monetización'],
    difficulty: 'Master',
    tools: ['Claude', 'ChatGPT'],
    objective: 'Implementar el gestor de anuncios de recompensa en Kotlin con pre-carga en background, timeouts defensivos y validación segura.',
    fullPrompt: `Actúa como Consultor Senior de Monetización Móvil y Desarrollador Android.

Diseña el gestor de anuncios de vídeo recompensado para una aplicación Android utilizando el SDK oficial de Google Mobile Ads (AdMob) respetando las directrices de Google Play:

Requisitos técnicos y de negocio:
1. ARQUITECTURA DEL GESTOR (RewardedAdManager en Kotlin):
   - Pre-carga preventiva del anuncio (load) con gestión de reintentos con retroceso exponencial (exponential backoff).
   - Manejo de ciclo de vida para evitar fugas de contexto de Activity.
   - Callback seguro de recompensa: solo otorgar las monedas si se dispara \`onUserEarnedRewardListener\`.
   - Timeout si el anuncio tarda más de 8 segundos en cargar para no congelar la UI.
2. EXPERIENCIA DE USUARIO (UX Ética):
   - Modal previo con explicación clara del premio a obtener y botón de cancelar.
   - Estado de carga no bloqueante.
   - Mensaje de confirmación tras la recompensa.
   - Límite diario de visualizaciones (daily cap) persistido en DataStore.
3. PREVENCIÓN DE FRAUDE:
   - Identificador único de transacción (\`transactionId\`) generado antes de mostrar el anuncio.
   - Verificación de hash para evitar que usuarios modifiquen el saldo localmente.`,
    variables: [],
    exampleUse: 'Implementar la lógica de anuncios recompensados en la versión Android nativa sin violar directrices de Google Play.',
    expectedResult: 'Clase Kotlin singleton/injectable con arquitectura defensiva lista para producción.',
    tips: ['Usa siempre IDs de prueba de AdMob durante el desarrollo para evitar suspensiones de cuenta.'],
    commonErrors: ['Conceder la recompensa antes de que el callback del SDK confirme la finalización del vídeo.'],
    accessLevel: 'master',
    coinCost: 80,
    isMaster: true,
    createdAt: '2025-02-12',
    usageCount: 920,
    ratingScore: 5.0,
    author: 'Daniel Gómez',
    relatedPromptIds: ['p-9', 'p-25']
  },

  // 7. Creación de imágenes
  {
    id: 'p-11',
    title: 'Generador de Prompts Fotográficos Hiperrealistas para Midjourney v6',
    description: 'Estructura descripciones visuales cinematográficas con parámetros de óptica fotográfica, iluminación de estudio, composición y estilo de autor.',
    categoryId: 'cat-7',
    subcategory: 'Fotografía y Realismo',
    tags: ['Midjourney', 'Fotografía', 'Iluminación', 'Cinematográfico', 'Texturas'],
    difficulty: 'Intermedio',
    tools: ['Midjourney', 'Universal'],
    objective: 'Obtener imágenes con textura de piel natural, iluminación realista y sin la apariencia plástica típica de la IA generativa.',
    fullPrompt: `Actúa como Director de Fotografía Cinematográfica y Maestro del Prompting en Midjourney v6.

Genera una fórmula de prompt optimizada para crear la siguiente escena:
- Sujeto / Escena: [ESCENA_SUJETO]
- Atmósfera / Emoción: [ATMOSFERA_EMOCION]
- Estilo estético: [ESTILO_ESTETICO]

Estructura del prompt de entrega (en inglés técnico para máxima fidelidad en Midjourney):
1. DESCRIPCIÓN PRINCIPAL (Sujeto en acción, detalles específicos de vestimenta y textura física).
2. ENTORNO Y FONDO (Profundidad de campo, elementos contextuales sutiles).
3. ILUMINACIÓN Y COLOR (Tipo de luz: p. ej. Rembrandt lighting, golden hour rim light, chiaroscuro, paleta cromática kodak portra 400 o cinestill 800t).
4. ÓPTICA Y CÁMARA (Lente milimétrica: p. ej. 85mm f/1.4 lens, shutter speed, grano sutil de película 35mm).
5. PARÁMETROS TÉCNICOS (--ar [RATIO], --v 6.1, --style raw, --stylize [VALOR_STYLIZATION]).

Incluye además 2 variantes alternativas: una diurna y otra nocturna o dramática.`,
    variables: [
      { key: 'ESCENA_SUJETO', label: 'Sujeto o escena a fotografiar', placeholder: 'Retrato de un artesano...', defaultValue: 'Retrato de primer plano de un relojero artesano suizo de 60 años concentrado reparando un mecanismo de tourbillon en su taller de madera' },
      { key: 'ATMOSFERA_EMOCION', label: 'Atmósfera o sensación', placeholder: 'Íntima, melancólica, solemne', defaultValue: 'Íntima, artesanal, de concentración profunda y reverencia por el detalle' },
      { key: 'ESTILO_ESTETICO', label: 'Estilo estético o referencia', placeholder: 'Documental de National Geographic', defaultValue: 'Fotografía editorial de revista Monocle, luz natural lateral y sombras ricas' },
      { key: 'RATIO', label: 'Aspect ratio (--ar)', placeholder: '16:9, 3:2, 4:5', defaultValue: '16:9' },
      { key: 'VALOR_STYLIZATION', label: 'Nivel de stylize (--s)', placeholder: '50 a 250', defaultValue: '120' }
    ],
    exampleUse: 'Crear material visual editorial para la portada de una web, campaña publicitaria o artículo.',
    expectedResult: 'Prompt en inglés preciso con parámetros oficiales de Midjourney listos para pegar en Discord.',
    tips: ['El parámetro --style raw reduce la saturación automática y aporta textura de piel mucho más verídica.'],
    commonErrors: ['Usar palabras abstractas vacías como "hyperdetailed 8k photorealistic", que Midjourney ignora.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-14',
    usageCount: 5120,
    ratingScore: 4.9,
    author: 'Clara Domínguez',
    relatedPromptIds: ['p-12', 'p-17']
  },
  {
    id: 'p-12',
    title: 'Generador de Mockups de UI/UX y Landing Pages para DALL-E 3 & Midjourney',
    description: 'Crea conceptos visuales modernos de interfaces de usuario para aplicaciones SaaS, dashboards y apps móviles.',
    categoryId: 'cat-7',
    subcategory: 'Diseño de Interfaces',
    tags: ['UI/UX', 'Mockups', 'DALL-E 3', 'Midjourney', 'Web Design'],
    difficulty: 'Intermedio',
    tools: ['Midjourney', 'DALL-E 3'],
    objective: 'Producir maquetas visuales inspiradoras de interfaces web y móviles con tipografía ficticia limpia y paletas de color sobrias.',
    fullPrompt: `Diseña un prompt detallado para generar un mockup de interfaz de usuario de alta fidelidad:

Tipo de producto: [TIPO_PRODUCTO]
Plataforma: [PLATAFORMA_WEB_O_APP]
Estilo visual: [ESTILO_VISUAL]

El prompt debe especificar:
- Composición frontal isométrica o vista directa a pantalla plana (flat screen direct view, no angle).
- Jerarquía de componentes: barra de navegación lateral oscura, tarjetas de métricas con micro-gráficos, tablas de datos elegantes.
- Paleta cromática: base neutra grafito/carbón con acentos vibrantes calculados.
- Especificación anti-distorsión: "clean modern UI, minimalist layout, elegant typography placeholders, Figma-style component library aesthetic, sleek dark mode dashboard".
- Parámetros finales para la herramienta elegida.`,
    variables: [
      { key: 'TIPO_PRODUCTO', label: 'Tipo de producto digital', placeholder: 'Plataforma de trading cripto', defaultValue: 'Panel de control analítico de métricas de Inteligencia Artificial y consumo de tokens' },
      { key: 'PLATAFORMA_WEB_O_APP', label: 'Plataforma', placeholder: 'Desktop Web SaaS', defaultValue: 'Desktop Web SaaS y versión responsive para tablet' },
      { key: 'ESTILO_VISUAL', label: 'Estilo visual', placeholder: 'Dark mode elegante con bordes sutiles', defaultValue: 'Dark mode carbón (#0F1117) con acentos en violeta eléctrico y cian, bordes translúcidos de 1px' }
    ],
    exampleUse: 'Generar conceptos visuales rápidos para presentaciones a clientes o lluvia de ideas de diseño.',
    expectedResult: 'Imágenes limpias de dashboards sin artefactos distorsionados.',
    tips: ['Indicar "flat clean vector UI style" suele evitar que la IA renderice monitores físicos con reflejos.'],
    commonErrors: ['Esperar que la IA renderice textos largos legibles sin errores tipográficos.'],
    accessLevel: 'experto',
    coinCost: 30,
    createdAt: '2025-01-29',
    usageCount: 2240,
    ratingScore: 4.8,
    author: 'Clara Domínguez',
    relatedPromptIds: ['p-11', 'p-17']
  },

  // 8. Vídeo y creación audiovisual
  {
    id: 'p-13',
    title: 'Guionista de Vídeos Virales con Gancho de 3 Segundos y Retención',
    description: 'Estructura guiones para YouTube Shorts, Reels y TikTok aplicando psicología de retención audiovisual y patrones de interrupción.',
    categoryId: 'cat-8',
    subcategory: 'Guiones y Formato Corto',
    tags: ['YouTube', 'TikTok', 'Reels', 'Guión', 'Viralidad', 'Storytelling'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Maximizar el porcentaje de visualización promedio y generar debates en comentarios mediante estructuras de retención.',
    fullPrompt: `Actúa como Productor Audiovisual y Estratega de Contenido Viral en formato vertical (YouTube Shorts / Reels / TikTok).

Escribe el guión completo de 45 a 60 segundos para el siguiente tema:
- Tema: [TEMA_DEL_VIDEO]
- Público Objetivo: [AUDIENCIA_OBJETIVO]
- Acción que debe hacer al final (CTA): [OBJETIVO_FINAL]

Estructura segundo a segundo obligatoria:
1. 0 a 3s - GANCHO VISUAL Y VERBAL (Frase contraintuitiva o visual chocante que rompa el scroll. Nada de saludos).
2. 3 a 15s - PLANTEAMIENTO DEL PROBLEMA / CURIOSIDAD (Por qué lo que la mayoría cree está equivocado).
3. 15 a 45s - DESARROLLO DEL VALOR EN 3 PÍLDORAS RÁPIDAS (Cada una con indicación de texto en pantalla y efecto de sonido o cambio de plano).
4. 45 a 55s - GIRO FINAL O CONCLUSIÓN ACCIONABLE.
5. 55 a 60s - CTA NATURAL (Pregunta abierta para disparar comentarios, no el típico "sígueme").

Acompaña cada bloque con:
- [AUDIO]: Lo que dice el creador palabra por palabra.
- [VISUAL]: Lo que se ve en pantalla (b-roll, zoom, ademán físico).
- [TEXTO ON-SCREEN]: Letras grandes que deben aparecer para retener al usuario sin audio.`,
    variables: [
      { key: 'TEMA_DEL_VIDEO', label: 'Tema principal', placeholder: 'El truco para negociar sueldo...', defaultValue: 'Por qué el 90% de la gente usa ChatGPT como un buscador de Google y cómo exprimirlo con el método de los 3 roles' },
      { key: 'AUDIENCIA_OBJETIVO', label: 'Audiencia objetivo', placeholder: 'Profesionales jóvenes de 25-35 años', defaultValue: 'Estudiantes universitarios y jóvenes profesionales que quieren ahorrar tiempo en sus tareas' },
      { key: 'OBJETIVO_FINAL', label: 'Objetivo final del vídeo', placeholder: 'Guardar el vídeo y comentar...', defaultValue: 'Que guarden el vídeo y comenten cuál de los 3 métodos les parece más útil' }
    ],
    exampleUse: 'Grabar 5 vídeos verticales seguidos en un solo día con guiones optimizados para retención.',
    expectedResult: 'Guión con desglose multimedia listo para ser leído con teleprompter o memorizado.',
    tips: ['El gancho debe prometer una recompensa inmediata y tangible.'],
    commonErrors: ['Empezar con frases como "Hola a todos, hoy os traigo..." que provocan abandono inmediato.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-25',
    usageCount: 3410,
    ratingScore: 4.9,
    author: 'Sergio Navarro',
    relatedPromptIds: ['p-14', 'p-5']
  },

  // 9. Redes sociales
  {
    id: 'p-14',
    title: 'Estratega de Artículos e Hilos de Autoridad para LinkedIn y X',
    description: 'Transforma una lección profesional o estudio de caso en un post viral con gancho inicial, desarrollo legible y alto debate profesional.',
    categoryId: 'cat-9',
    subcategory: 'Marca Personal y B2B',
    tags: ['LinkedIn', 'X/Twitter', 'Marca Personal', 'B2B', 'Thought Leadership'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Posicionar al autor como referente de su industria sin caer en la autopromoción vacía ni en clichés corporativos.',
    fullPrompt: `Actúa como Ghostwriter de altos directivos y fundadores tecnológicos en LinkedIn.

Escribe una publicación de alto impacto basada en la siguiente experiencia real:
- Caso o lección aprendida: [EXPERIENCIA_LECCION]
- Error costoso cometido: [ERROR_COMETIDO]
- Solución o principio descubierto: [PRINCIPIO_DESCUBIERTO]

Directrices de formato:
1. Primera línea (Gancho): Máximo 8 palabras que creen tensión o desafíen una verdad establecida. Debe invitar a pulsar "...ver más".
2. Salto de línea doble para facilitar la lectura en móviles.
3. Ritmo: Frases directas, sin párrafos de más de 2 líneas.
4. Desarrollo honesto de la vulnerabilidad: el fallo real, el impacto emocional o financiero, y el punto de inflexión.
5. Lista numerada de los 3 aprendizajes prácticos aplicables hoy mismo.
6. Cierre con pregunta reflexiva de alto valor para incentivar respuestas argumentadas en comentarios.`,
    variables: [
      { key: 'EXPERIENCIA_LECCION', label: 'Experiencia o caso real', placeholder: 'Despedí a mi mejor cliente...', defaultValue: 'Rechazar una oferta de 150.000€ de un cliente tóxico salvó la rentabilidad de nuestra agencia digital' },
      { key: 'ERROR_COMETIDO', label: 'Error cometido', placeholder: 'Aceptar cualquier proyecto...', defaultValue: 'Creer que facturar más siempre equivale a ganar más y aceptar cláusulas que quemaban a mi equipo' },
      { key: 'PRINCIPIO_DESCUBIERTO', label: 'Principio descubierto', placeholder: 'Filtrar por valores...', defaultValue: 'El coste de oportunidad de un cliente problemático te impide atender a tres clientes excepcionales' }
    ],
    exampleUse: 'Publicar contenido regular en LinkedIn que atraiga solicitudes de consultoría o empleo cualificado.',
    expectedResult: 'Post con excelente ritmo de lectura, autenticidad y alta interacción.',
    tips: ['Revisa que el botón "...ver más" quede justo tras el gancho con intriga.'],
    commonErrors: ['Usar más de 3 hashtags o etiquetas masivas a otros perfiles.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-26',
    usageCount: 2980,
    ratingScore: 4.8,
    author: 'Sergio Navarro',
    relatedPromptIds: ['p-3', 'p-5']
  },

  // 10. SEO y posicionamiento
  {
    id: 'p-15',
    title: 'Arquitecto de Clústeres Temáticos y Redacción SEO E-E-A-T',
    description: 'Diseña la estructura de un artículo pilar y sus artículos satélite para dominar una intención de búsqueda en Google con rigor experto.',
    categoryId: 'cat-10',
    subcategory: 'SEO Semántico y Clústeres',
    tags: ['SEO', 'EEAT', 'Google', 'Cluster', 'Palabras Clave', 'Content Marketing'],
    difficulty: 'Avanzado',
    tools: ['ChatGPT', 'Claude', 'Perplexity'],
    objective: 'Construir relevancia temática integral que posicione páginas pilares en los primeros resultados orgánicos.',
    fullPrompt: `Actúa como Consultor SEO Semántico Senior especializado en directrices de calidad E-E-A-T (Experiencia, Conocimiento, Autoridad y Confiabilidad) de Google.

Diseña la estrategia de contenidos para posicionar la palabra clave objetivo:
- Keyword Principal: [KEYWORD_PRINCIPAL]
- Intención de búsqueda del usuario: [INTENCION_BUSQUEDA]
- Audiencia: [AUDIENCIA]

Entrega:
1. ARQUITECTURA DE CLÚSTER (Pilar + Satélites):
   - Estructura del artículo pilar principal (H1, H2s y H3s con tratamiento de entidades semánticas).
   - 4 títulos de artículos satélite que ataquen variaciones Long-Tail y enlacen al pilar.
2. OPTIMIZACIÓN ON-PAGE DEL PILAR:
   - Meta Título optimizado para CTR (<60 caracteres).
   - Meta Descripción persuasiva con llamada a la acción (<155 caracteres).
   - Fragmento destacado (Featured Snippet target): Párrafo de 40 a 50 palabras que responde directamente a la intención principal.
3. CRITERIOS E-E-A-T:
   - 3 elementos concretos de prueba demostrable (citas de fuentes primarias, datos estadísticos, experiencia en primera persona) que deben incluirse obligatoriamente.`,
    variables: [
      { key: 'KEYWORD_PRINCIPAL', label: 'Keyword principal', placeholder: 'mejores herramientas de ciberseguridad', defaultValue: 'mejores prácticas de arquitectura limpia en react 2026' },
      { key: 'INTENCION_BUSQUEDA', label: 'Intención de búsqueda', placeholder: 'Informativa / Comparativa', defaultValue: 'Informativa y técnica: programadores que buscan organizar proyectos grandes de frontend' },
      { key: 'AUDIENCIA', label: 'Audiencia objetivo', placeholder: 'Desarrolladores junior a senior', defaultValue: 'Desarrolladores web frontend y directores técnicos de producto' }
    ],
    exampleUse: 'Planificar el calendario editorial de un blog técnico para posicionar en búsquedas comerciales y educativas.',
    expectedResult: 'Estructura lista para redacción con entidades relacionadas y recomendaciones de enlazado interno.',
    tips: ['Busca en Google antes de redactar para comprobar qué tipo de contenido (listas, guías o vídeos) premia actualmente.'],
    commonErrors: ['Hacer keyword stuffing forzado en lugar de cubrir el campo semántico de la entidad.'],
    accessLevel: 'experto',
    coinCost: 40,
    createdAt: '2025-02-02',
    usageCount: 1740,
    ratingScore: 4.9,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-3', 'p-8']
  },

  // 11. Ventas y negociación
  {
    id: 'p-16',
    title: 'Simulador de Negociación Hostil y Desactivación de Objeciones de Precio',
    description: 'Entrena tus habilidades comerciales frente a una IA que adopta el rol de un cliente exigente, escéptico o presionado por costes.',
    categoryId: 'cat-11',
    subcategory: 'Juego de Rol y Simulación',
    tags: ['Ventas', 'Negociación', 'Roleplay', 'Objeciones', 'B2B'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Aprender a defender el valor de un servicio sin caer en la trampa de aplicar descuentos impulsivos.',
    fullPrompt: `Vamos a realizar una simulación interactiva de ventas de alto nivel.

Tú adoptarás el papel de: [ROL_CLIENTE_DIFICIL].
Yo seré el profesional que te presenta la propuesta de [MI_PROPUESTA].

Reglas de la simulación:
1. Comienza la conversación con una objeción agresiva respecto al precio o al tiempo de entrega: [OBJECION_INICIAL].
2. Sé exigente, escéptico y desafiante; no aceptes respuestas tibias o disculpas vacías.
3. Evalúa si justifico el Retorno de Inversión (ROI) y si mantengo mi postura con asertividad.
4. Cada vez que yo te responda, mantén tu personaje y contesta como lo haría este cliente.
5. Entre corchetes al final de cada mensaje tuyo, añade una breve nota de "Entrenador" puntuando mi última réplica del 1 al 10 y sugiriendo una mejora táctica.

¿Listo? Empieza ahora con tu primer mensaje en el papel del cliente.`,
    variables: [
      { key: 'ROL_CLIENTE_DIFICIL', label: 'Rol del cliente', placeholder: 'Director de Compras de multinacional', defaultValue: 'Director Financiero (CFO) obsesionado con recortar costes antes de fin de año' },
      { key: 'MI_PROPUESTA', label: 'Tu propuesta o producto', placeholder: 'Servicio de desarrollo a medida', defaultValue: 'Servicio de consultoría y automatización con IA por 12.000€ mensuales' },
      { key: 'OBJECION_INICIAL', label: 'Objeción inicial del cliente', placeholder: 'Sois el doble de caros...', defaultValue: 'He revisado vuestra cotización y es el doble de cara que la de vuestro competidor directo. O me aplicáis un 40% de descuento o cerramos la reunión aquí mismo.' }
    ],
    exampleUse: 'Entrenar antes de una llamada crucial de ventas con un prospecto de gran tamaño.',
    expectedResult: 'Simulación inmersiva que perfecciona la gestión de objeciones bajo presión real.',
    tips: ['No te rindas con el descuento; pregunta qué parte del alcance están dispuestos a recortar si quieren pagar menos.'],
    commonErrors: ['Salir del rol antes de que la negociación concluya con un acuerdo o un no definitivo.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-27',
    usageCount: 2210,
    ratingScore: 5.0,
    author: 'Lucía Santamaría',
    relatedPromptIds: ['p-5', 'p-6']
  },

  // 12. Productividad y organización
  {
    id: 'p-17',
    title: 'Diseñador de Sistemas de Trabajo y Planificación Semanal Time-Blocking',
    description: 'Transforma una lista caótica de tareas pendientes en un horario semanal blindado con bloques de concentración profunda y amortiguadores de imprevistos.',
    categoryId: 'cat-12',
    subcategory: 'Gestión del Tiempo',
    tags: ['Productividad', 'Time Blocking', 'Organización', 'Deep Work'],
    difficulty: 'Principiante',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Eliminar la fatiga por decisión y proteger bloques de trabajo profundo sin terminar saturado.',
    fullPrompt: `Actúa como Consultor de Alta Productividad y Diseñador de Rutinas para Profesionales de Alto Rendimiento.

Toma mi lista de tareas y responsabilidades de esta semana y organízala en un sistema de Time-Blocking para los días [DIAS_LABORABLES]:

Mis tareas, proyectos y compromisos:
"""
[LISTA_DE_TAREAS]
"""

Restricciones y preferencias:
- Horas de máxima concentración (Deep Work): [HORAS_DEEP_WORK]
- Límites de horario diario: [HORARIO_DIARIO]

Entrega:
1. MATRIZ DE PRIORIZACIÓN DE EISENHOWER (Urgente vs Importante) para clasificar qué delegar, eliminar o ejecutar.
2. CALENDARIO SEMANAL DETALLADO en formato tabla hora por hora.
3. PROTOCOLO DE AMORTIGUADORES (Buffer Blocks): Bloques de 45 minutos diarios reservados exclusivamente para imprevistos o correo electrónico.
4. REGLA DE CIERRE DIARIO (Shutdown Routine): 3 pasos para desconectar al finalizar la jornada.`,
    variables: [
      { key: 'DIAS_LABORABLES', label: 'Días laborables', placeholder: 'Lunes a Viernes', defaultValue: 'Lunes a Viernes' },
      { key: 'LISTA_DE_TAREAS', label: 'Lista bruta de tareas', placeholder: 'Escribe aquí todas tus tareas...', defaultValue: 'Terminar propuesta para cliente X, grabar 2 vídeos, revisar facturación trimestral, contestar 40 emails pendientes, preparar presentación para el equipo, ir al gimnasio 3 días, leer 2 capítulos de un libro técnico.' },
      { key: 'HORAS_DEEP_WORK', label: 'Horas óptimas de foco', placeholder: '09:00 a 12:00', defaultValue: '09:00 a 12:00 de la mañana' },
      { key: 'HORARIO_DIARIO', label: 'Horario laboral diario', placeholder: '08:30 a 17:30', defaultValue: '09:00 a 18:00 con 1 hora para almorzar' }
    ],
    exampleUse: 'Planificar el domingo por la tarde la semana laboral para arrancar el lunes con claridad total.',
    expectedResult: 'Horario estructurado, realista y con márgenes para que no se derrumbe ante el primer imprevisto.',
    tips: ['Nunca llenes el 100% de tus horas de calendario; deja siempre un 20% en blanco para contingencias.'],
    commonErrors: ['Sobrecargar los bloques de Deep Work con tareas administrativas como contestar correos.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-19',
    usageCount: 2630,
    ratingScore: 4.8,
    author: 'Elena Morales',
    relatedPromptIds: ['p-3', 'p-18']
  },

  // 13. Educación y aprendizaje
  {
    id: 'p-18',
    title: 'Tutor Socrático Interactivo con Técnica Feynman y Metáforas Visuales',
    description: 'Aprende cualquier concepto técnico o abstracto descomponiéndolo a nivel fundamental con preguntas guiadas que evalúan tu asimilación.',
    categoryId: 'cat-13',
    subcategory: 'Metodología de Aprendizaje Acelerado',
    tags: ['Feynman', 'Sócrates', 'Aprendizaje', 'Ciencia', 'Didáctica'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    objective: 'Comprender a fondo un tema complejo en lugar de memorizar definiciones vacías.',
    fullPrompt: `Actúa como el profesor Richard Feynman: un pedagogo apasionado, curioso, brillante y capaz de explicar la física cuántica a un niño de 10 años sin perder rigor.

Quiero entender en profundidad el siguiente concepto: [CONCEPTO_A_APRENDER].
Mi nivel actual de conocimiento es: [NIVEL_ACTUAL].

Sigue esta metodología:
1. LA METÁFORA COTIDIANA: Explica el concepto empleando una analogía del mundo físico o cotidiano. Nada de jerga técnica sin definir.
2. EL MECANISMO REAL: Explica qué sucede exactamente por debajo, paso a paso.
3. EL TEST FEYNMAN: Hazme UNA sola pregunta para poner a prueba si lo he asimilado o si solo he memorizado palabras.
4. Espera mi respuesta antes de continuar. Según lo que responda, corregirás mis lagunas con paciencia o subiremos el nivel.

Comienza con los pasos 1, 2 y 3.`,
    variables: [
      { key: 'CONCEPTO_A_APRENDER', label: 'Concepto a aprender', placeholder: 'Mecanismo de atención en Transformers', defaultValue: 'Cómo funciona la criptografía de clave pública (RSA) y por qué es matemáticamente segura' },
      { key: 'NIVEL_ACTUAL', label: 'Nivel actual', placeholder: 'Principiante absoluto / Intermedio', defaultValue: 'Intermedio: sé lo que es un algoritmo básico pero no domino matemáticas avanzadas' }
    ],
    exampleUse: 'Estudiar materias difíciles de universidad, programación o finanzas mediante conversación interactiva.',
    expectedResult: 'Explicación cristalina con una analogía visual memorable y comprobación socrática.',
    tips: ['Respóndele con tus propias palabras cuando te haga la pregunta de evaluación; así sabrá dónde tienes dudas.'],
    commonErrors: ['Pedirle que explique 5 temas a la vez; céntrate en uno solo por sesión.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-21',
    usageCount: 3150,
    ratingScore: 4.9,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-19', 'p-20']
  },

  // 14. Investigación y análisis
  {
    id: 'p-19',
    title: 'Extractor de Síntesis y Matriz Comparativa de Estudios e Informes',
    description: 'Procesa extensos documentos de investigación o informes de mercado extrayendo metodología, variables críticas, sesgos y conclusiones.',
    categoryId: 'cat-14',
    subcategory: 'Análisis Académico y Técnico',
    tags: ['Investigación', 'Papers', 'Metodología', 'Síntesis', 'Académico'],
    difficulty: 'Avanzado',
    tools: ['Claude', 'ChatGPT', 'Perplexity'],
    objective: 'Resumir y contrastar fuentes complejas identificando limitaciones metodológicas que otros pasan por alto.',
    fullPrompt: `Actúa como Analista Principal de Investigación y Doctor en Metodología Científica.

Analiza el siguiente texto extraído de un estudio o informe técnico:
"""
[TEXTO_DEL_ESTUDIO]
"""

Elabora una ficha de análisis rigurosa que contenga:
1. HIPÓTESIS PRINCIPAL Y PREGUNTA DE INVESTIGACIÓN.
2. METODOLOGÍA Y TAMAÑO MUESTRAL (¿Es cuantitativo, cualitativo, experimental? ¿Hay grupo de control?).
3. 3 HALLAZGOS ESTADÍSTICOS O CLAVE (con cifras concretas reportadas en el texto).
4. SESGOS Y LIMITACIONES METODOLÓGICAS (¿Existe sesgo de selección, causalidad inversa o conflicto de interés?).
5. APLICABILIDAD PRÁCTICA: ¿Cómo puede trasladarse este hallazgo al mundo real en el sector [SECTOR_APLICACION]?`,
    variables: [
      { key: 'TEXTO_DEL_ESTUDIO', label: 'Texto o resumen del estudio', placeholder: 'Pega aquí el extracto del paper o informe...', defaultValue: 'Estudio longitudinal sobre 400 trabajadores remotos durante 18 meses. Aquellos que dedicaban 2 horas diarias a tareas asíncronas reportaron un 34% menos de agotamiento, aunque los mandos intermedios manifestaron dificultades de visibilidad en el primer trimestre...' },
      { key: 'SECTOR_APLICACION', label: 'Sector o caso de aplicación', placeholder: 'Empresas de tecnología / Sanidad', defaultValue: 'Empresas de software con equipos distribuidos globalmente' }
    ],
    exampleUse: 'Extraer valor real de informes sectoriales de McKinsey, Gartner o papers de arXiv en pocos minutos.',
    expectedResult: 'Desglose analítico que separa correlación de causalidad y resalta puntos ciegos.',
    tips: ['Claude suele procesar textos de gran extensión con excelente retención de citas exactas.'],
    commonErrors: ['Asumir que las conclusiones del estudio son universales sin leer la sección de limitaciones.'],
    accessLevel: 'experto',
    coinCost: 40,
    createdAt: '2025-02-04',
    usageCount: 1420,
    ratingScore: 4.8,
    author: 'Elena Morales',
    relatedPromptIds: ['p-2', 'p-18']
  },

  // 15. Excel, datos y automatización
  {
    id: 'p-20',
    title: 'Maestro de Fórmulas Complejas de Excel (LAMBDA, XLOOKUP) y Google Apps Script',
    description: 'Genera fórmulas matriciales modernas y scripts automatizados para procesar datos, limpiar tablas y generar alertas automáticas.',
    categoryId: 'cat-15',
    subcategory: 'Hojas de Cálculo Avanzadas',
    tags: ['Excel', 'Google Sheets', 'Apps Script', 'XLOOKUP', 'Automatización', 'Datos'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Solucionar problemas de cruce de datos y cálculos avanzados sin necesidad de recurrir a programación pesada.',
    fullPrompt: `Actúa como Consultor Senior de Análisis de Datos y Especialista en Hojas de Cálculo (Microsoft Excel 365 & Google Sheets).

Necesito resolver el siguiente problema en mi hoja de cálculo:
- Objetivo del cálculo: [OBJETIVO_CALCULO]
- Estructura de mis columnas: [ESTRUCTURA_COLUMNAS]
- Herramienta utilizada: [HERRAMIENTA_HOJA]

Entrega:
1. LA FÓRMULA ÓPTIMA EXACTA: Empleando funciones modernas (XLOOKUP, FILTER, UNIQUE, LET o LAMBDA si es Excel; o QUERY/ARRAYFORMULA si es Google Sheets).
2. EXPLICACIÓN DETALLADA paso a paso de cada argumento de la fórmula para que aprenda cómo funciona.
3. GESTIÓN DE ERRORES: Cómo envolverla con IFERROR o condicionales para evitar celdas con #N/A o #VALUE!.
4. VERSIÓN ALTERNATIVA AUTOMATIZADA: Si la fórmula puede volverse lenta, proporciona un script equivalente en Google Apps Script o Macro VBA listo para pegar.`,
    variables: [
      { key: 'OBJETIVO_CALCULO', label: 'Qué necesitas calcular', placeholder: 'Buscar el último precio de compra...', defaultValue: 'Buscar el precio del producto vendido teniendo en cuenta que la tarifa cambia según la fecha de la venta y la categoría del cliente' },
      { key: 'ESTRUCTURA_COLUMNAS', label: 'Estructura de las columnas', placeholder: 'Columna A: ID, Columna B: Fecha...', defaultValue: 'Hoja1: Columna A (ID Producto), Columna B (Fecha Venta), Columna C (Tipo Cliente). Hoja2 (Tarifas): Col A (ID Producto), Col B (Tipo Cliente), Col C (Fecha Inicio), Col D (Precio)' },
      { key: 'HERRAMIENTA_HOJA', label: 'Herramienta utilizada', placeholder: 'Excel 365 / Google Sheets', defaultValue: 'Excel 365' }
    ],
    exampleUse: 'Construir cruces complejos de tarifas, inventarios o comisiones de ventas en Excel sin romper la hoja.',
    expectedResult: 'Fórmula moderna lista para copiar en la barra de fórmulas con explicación didáctica.',
    tips: ['Indica si la versión de tu software está en español (BUSCARX, FILTRAR) o en inglés (XLOOKUP, FILTER).'],
    commonErrors: ['Usar VLOOKUP clásico cuando XLOOKUP resuelve rangos hacia la izquierda sin problemas.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-23',
    usageCount: 3890,
    ratingScore: 5.0,
    author: 'Marc Valls',
    relatedPromptIds: ['p-7', 'p-12']
  },

  // 16. Finanzas personales y planificación
  {
    id: 'p-21',
    title: 'Optimizador Financiero Personal con Método 50/30/20 y Fondo de Emergencia',
    description: 'Estructura un presupuesto riguroso según ingresos reales, clasifica gastos hormiga y calcula el fondo de tranquilidad óptimo.',
    categoryId: 'cat-16',
    subcategory: 'Planificación Patrimonial',
    tags: ['Finanzas', 'Ahorro', 'Presupuesto', 'Interés Compuesto', 'Inversión'],
    difficulty: 'Principiante',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Crear un plan de saneamiento financiero y ahorro sistemático con metas realistas.',
    fullPrompt: `Actúa como Planificador Financiero Personal y Educador Económico Certificado.

Diseña un plan de optimización financiera basado en mi situación:
- Ingresos netos mensuales: [INGRESOS_NETOS]
- Gastos fijos esenciales (vivienda, servicios, comida): [GASTOS_FIJOS]
- Deudas actuales (si aplica): [DEUDAS]
- Meta principal de ahorro: [META_AHORRO]

Entrega:
1. DIAGNÓSTICO EN REGLA 50/30/20:
   - 50% Necesidades básicas (comparativa con tu realidad actual).
   - 30% Deseos y estilo de vida (identificación de fugas y suscripciones prescindibles).
   - 20% Ahorro e inversión automática.
2. ESTRATEGIA DE FONDO DE TRANQUILIDAD:
   - Cuantía exacta recomendada (3 a 6 meses de gastos indispensables) y dónde mantenerlo líquido y protegido de la inflación (cuentas remuneradas o monetarios).
3. PLAN DE ATAQUE A DEUDAS (Método Bola de Nieve vs Avalancha): Recomendación táctica para liquidarlas.
4. SIMULADOR DE INTERÉS COMPUESTO A 5, 10 Y 20 AÑOS aportando la cifra de ahorro propuesta con una rentabilidad conservadora indexada neta del 6% anual.`,
    variables: [
      { key: 'INGRESOS_NETOS', label: 'Ingresos netos mensuales', placeholder: '2.400€ netos al mes', defaultValue: '2.500€ netos al mes' },
      { key: 'GASTOS_FIJOS', label: 'Gastos fijos indispensables', placeholder: '1.300€ entre alquiler y facturas', defaultValue: '1.450€ (alquiler, suministros, supermercado básico, transporte)' },
      { key: 'DEUDAS', label: 'Deudas pendientes', placeholder: 'Préstamo coche 4.000€ al 8%', defaultValue: 'Préstamo personal de 3.200€ al 9.5% de interés con cuota mensual de 180€' },
      { key: 'META_AHORRO', label: 'Meta principal', placeholder: 'Ahorrar para entrada de piso', defaultValue: 'Construir fondo de emergencia de 6 meses y empezar a invertir para jubilación' }
    ],
    exampleUse: 'Revisar las finanzas a principio de año para fijar metas de ahorro e inversión viables.',
    expectedResult: 'Hoja de ruta con números claros, porcentajes ajustados y proyección a largo plazo.',
    tips: ['La consistencia supera a la cantidad; automatizar la transferencia de ahorro el día de cobro es la clave.'],
    commonErrors: ['Asumir rentabilidades de inversión irreales superiores al 12% anual para calcular metas seguras.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-30',
    usageCount: 2010,
    ratingScore: 4.8,
    author: 'Lucía Santamaría',
    relatedPromptIds: ['p-6', 'p-17']
  },

  // 17. Diseño y creatividad
  {
    id: 'p-22',
    title: 'Generador de Briefing Creativo y Sistema de Identidad de Marca',
    description: 'Define arquetipos de Jung, valores diferenciales, paleta cromática con ratios 60-30-10 y tono de voz para nuevas marcas.',
    categoryId: 'cat-17',
    subcategory: 'Branding y Dirección de Arte',
    tags: ['Branding', 'Diseño', 'Identidad', 'Creatividad', 'Arquetipos'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Sentar las bases conceptuales y estéticas de una marca antes de diseñar logotipos o sitios web.',
    fullPrompt: `Actúa como Director Creativo y Estratega de Marcas de renombre internacional.

Crea un Brief de Identidad de Marca integral para el siguiente proyecto:
- Nombre o concepto del proyecto: [NOMBRE_PROYECTO]
- Sector y propuesta de valor: [SECTOR_PROPUESTA]
- Sensación que debe transmitir: [SENSACION_DESEADA]

Estructura del entregable:
1. EL ARQUETIPO DE MARCA (Basado en los 12 arquetipos de Carl Jung: El Rebelde, El Sabio, El Creador, etc.):
   - Arquetipo primario y secundario con justificación psicológica.
2. MANIFIESTO DE MARCA (Texto poético y contundente de 120 palabras que resume su alma).
3. SISTEMA VISUAL RECOMENDADO:
   - Paleta de color con códigos Hexadecimales aplicando la regla 60-30-10 (Dominante, Secundario, Acento).
   - Pareja tipográfica recomendada (fuente de encabezados + fuente de cuerpo en Google Fonts).
   - Dirección de fotografía y elementos iconográficos.
4. TONO DE VOZ: 3 directrices de "Somos esto / No somos aquello" (Ej: "Somos expertos pero nunca pedantes").`,
    variables: [
      { key: 'NOMBRE_PROYECTO', label: 'Nombre o idea del proyecto', placeholder: 'Kairo Watches', defaultValue: 'PromptVerse AI' },
      { key: 'SECTOR_PROPUESTA', label: 'Sector y propuesta', placeholder: 'Plataforma educativa de IA', defaultValue: 'Biblioteca y enciclopedia digital de prompts y técnicas avanzadas de inteligencia artificial' },
      { key: 'SENSACION_DESEADA', label: 'Sensación deseada', placeholder: 'Innovador, accesible, futurista', defaultValue: 'Premium, riguroso, futurista y empoderador: un centro de mando para profesionales que dominan el futuro' }
    ],
    exampleUse: 'Presentar una propuesta de identidad a un cliente o fijar la guía de estilo de tu propia startup.',
    expectedResult: 'Guía de estilo conceptual y estética cohesionada para diseñadores y redactores.',
    tips: ['Un buen arquetipo de marca ayuda a que todo el equipo sepa qué palabras y qué colores elegir de forma coherente.'],
    commonErrors: ['Elegir 5 colores primarios chillones sin respetar jerarquía cromática.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-17',
    usageCount: 1820,
    ratingScore: 4.9,
    author: 'Clara Domínguez',
    relatedPromptIds: ['p-11', 'p-14']
  },

  // 18. Desarrollo personal
  {
    id: 'p-23',
    title: 'Entrenador de Comunicación Asertiva y Resolución de Conflictos Difíciles',
    description: 'Prepara conversaciones delicadas con jefes, socios o clientes aplicando Comunicación No Violenta (CNV) de Marshall Rosenberg.',
    categoryId: 'cat-18',
    subcategory: 'Inteligencia Emocional y Asertividad',
    tags: ['Asertividad', 'Negociación', 'Liderazgo', 'Comunicación', 'CNV'],
    difficulty: 'Principiante',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Expresar límites y desacuerdos con firmeza sin generar reacciones defensivas ni agresividad.',
    fullPrompt: `Actúa como Especialista en Mediación de Conflictos y Entrenador de Comunicación No Violenta (CNV).

Ayúdame a preparar una conversación difícil con [PERSONA_INTERLOCUTOR].
La situación de fricción es:
"""
[SITUACION_CONFLICTO]
"""
El resultado que deseo conseguir es: [RESULTADO_DESEADO]

Prepara:
1. DESACTIVACIÓN DE JUICIOS: Traduce las quejas viscerales en observaciones de hechos medibles y neutros.
2. EL GUIÓN DE 4 PASOS DE CNV:
   - Hecho objetivo (sin adjetivos acusatorios: "Cuando ocurrió X...").
   - Sentimiento legítimo propio (en primera persona: "Me sentí...").
   - Necesidad insatisfecha ("Porque para mí es indispensable...").
   - Petición concreta y realizable (no una exigencia).
3. ANTICIPACIÓN DE RESPUESTAS DEFENSIVAS: 2 réplicas hostiles que la otra persona podría formular y cómo responder con empatía y firmeza sin perder el control de la conversación.`,
    variables: [
      { key: 'PERSONA_INTERLOCUTOR', label: 'Con quién hablarás', placeholder: 'Mi socio fundador / Mi jefe', defaultValue: 'Mi socio comercial' },
      { key: 'SITUACION_CONFLICTO', label: 'Situación de conflicto', placeholder: 'Llega tarde a las reuniones...', defaultValue: 'Asume compromisos con los clientes a mis espaldas prometiendo fechas de entrega imposibles que me obligan a trabajar los fines de semana' },
      { key: 'RESULTADO_DESEADO', label: 'Resultado que buscas', placeholder: 'Establecer protocolo de validación...', defaultValue: 'Que ningún plazo de entrega sea firmado sin mi aprobación previa y respetar los fines de semana de descanso' }
    ],
    exampleUse: 'Preparar reuniones tensas con socios o colaboradores para mantener relaciones profesionales sólidas.',
    expectedResult: 'Guión asertivo, respetuoso y contundente sin agresividad ni sumisión.',
    tips: ['Ensaya el guión en voz alta varias veces antes de mantener la conversación en directo.'],
    commonErrors: ['Usar palabras absolutistas como "tú siempre..." o "nunca...", que disparan el escudo defensivo.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-24',
    usageCount: 2470,
    ratingScore: 4.9,
    author: 'Elena Morales',
    relatedPromptIds: ['p-16', 'p-17']
  },

  // 19. Agentes de IA y flujos de trabajo
  {
    id: 'p-24',
    title: 'Diseñador de Arquitectura de Agentes Autónomos con Patrón ReAct y Function Calling',
    description: 'Estructura el bucle de pensamiento, acción y observación (ReAct) para agentes que coordinan herramientas externas y APIs.',
    categoryId: 'cat-19',
    subcategory: 'Ingeniería de Agentes',
    tags: ['Agentes', 'ReAct', 'Tool Use', 'Function Calling', 'LangChain', 'Arquitectura'],
    difficulty: 'Master',
    tools: ['Claude', 'ChatGPT', 'Gemini'],
    objective: 'Construir agentes fiables con detección de bucles infinitos, validación de esquemas y memoria a corto y largo plazo.',
    fullPrompt: `Actúa como Ingeniero Principal de Sistemas de IA especializado en Agentes Autónomos y Tool Calling.

Diseña la arquitectura de un agente de IA para la tarea: [OBJETIVO_AGENTE].
Herramientas y APIs disponibles para el agente: [HERRAMIENTAS_APIS].

Entrega la especificación completa:
1. SYSTEM PROMPT DEL AGENTE:
   - Instrucciones maestras de rol y limitaciones operativas.
   - Formato de bucle ReAct estricto:
     \`\`\`
     Thought: [Razonamiento interno sobre qué herramienta llamar y por qué]
     Action: [Nombre de la función a invocar]
     Action Input: [Parámetros JSON exactos validados]
     Observation: [Resultado retornado por el entorno]
     ... (repetir si es necesario)
     Final Answer: [Respuesta al usuario]
     \`\`\`
2. ESQUEMA JSON SCHEMA DE LAS HERRAMIENTAS: Definición formal de cada función con descripción de argumentos y tipos.
3. MECANISMOS DE SEGURIDAD DEFENSIVA:
   - Detección de bucles (máximo 5 iteraciones antes de pedir confirmación humana).
   - Sanitización de salidas para prevenir inyecciones indirectas procedentes de webs o APIs externas.
   - Estrategia de degradación agraciada (graceful fallback) ante fallo de red.`,
    variables: [
      { key: 'OBJETIVO_AGENTE', label: 'Misión del agente', placeholder: 'Investigar empresas y redactar...', defaultValue: 'Investigar noticias financieras de una empresa cotizada, extraer sus últimos estados contables en PDF y resumir riesgos en un email' },
      { key: 'HERRAMIENTAS_APIS', label: 'Herramientas disponibles', placeholder: 'Buscador web, extractor PDF...', defaultValue: 'web_search(query: string), pdf_extractor(file_url: string), calculator(expression: string), send_email(to: string, subject: string, body: string)' }
    ],
    exampleUse: 'Implementar agentes en Python o TypeScript con el framework oficial de Gemini o LangGraph.',
    expectedResult: 'Especificación técnica completa con contratos JSON Schema listos para ejecutar.',
    tips: ['Exige siempre que el agente justifique en el "Thought" antes de emitir la llamada JSON a la función.'],
    commonErrors: ['Permitir que el agente llame a funciones con efectos secundarios (ej. enviar dinero o borrar bases de datos) sin confirmación humana previa (Human-in-the-Loop).'],
    accessLevel: 'master',
    coinCost: 90,
    isMaster: true,
    createdAt: '2025-02-10',
    usageCount: 1530,
    ratingScore: 5.0,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-7', 'p-25']
  },

  // 20. Técnicas avanzadas de prompting
  {
    id: 'p-25',
    title: 'Framework de Razonamiento Tree of Thoughts (Árbol de Pensamientos) con Auto-Evaluación',
    description: 'Obliga a la IA a ramificar múltiples hipótesis alternativas, autoevaluar cada camino con métricas objetivas y podar las ramas inviables.',
    categoryId: 'cat-20',
    subcategory: 'Razonamiento Complejo (ToT)',
    tags: ['Tree of Thoughts', 'Razonamiento', 'ToT', 'Metodología', 'Lógica'],
    difficulty: 'Master',
    tools: ['Claude', 'ChatGPT', 'Gemini'],
    objective: 'Resolver problemas estratégicos o técnicos donde una solución lineal produce respuestas simplistas o erróneas.',
    fullPrompt: `Aplica la técnica avanzada de "Tree of Thoughts" (Árbol de Pensamientos) para resolver el siguiente reto de alta complejidad:

Problema a resolver:
"""
[PROBLEMA_COMPLEJO]
"""

Sigue el proceso de 4 fases rigurosamente:

FASE 1: GENERACIÓN DE PENSAMIENTOS (Ramificación)
Genera 3 caminos o enfoques conceptualmente distintos e independientes para abordar el problema:
- Camino A: Enfoque conservador / tradicional.
- Camino B: Enfoque contraintuitivo / disruptivo.
- Camino C: Enfoque híbrido o de compromiso.

FASE 2: AUTO-EVALUACIÓN Y CRÍTICA (Poda)
Para cada uno de los 3 caminos, evalúa:
- Factibilidad técnica (1 al 10).
- Tiempo de implementación y recursos necesarios.
- Riesgo de fracaso catastrófico.
- Asignación de veredicto: [DESCARTADO], [EN ESPERA] o [PROMETEDOR].

FASE 3: PROFUNDIZACIÓN
Toma el camino con mejor puntuación y desarróllalo en 3 sub-pasos detallados, simulando posibles obstáculos en cada etapa.

FASE 4: SÍNTESIS FINAL
Entrega la recomendación definitiva consolidada con plan de contingencia si falla la hipótesis principal.`,
    variables: [
      { key: 'PROBLEMA_COMPLEJO', label: 'Problema complejo a resolver', placeholder: 'Cómo migrar una base de datos con 50M de usuarios sin caída de servicio...', defaultValue: 'Cómo migrar una plataforma monolítica en producción con 2 millones de usuarios activos a una arquitectura modular sin provocar caídas de servicio ni pérdida de transacciones financieras' }
    ],
    exampleUse: 'Toma de decisiones técnicas y de negocio de alto impacto con análisis de escenarios.',
    expectedResult: 'Evaluación multidimensional que supera a cualquier respuesta lineal convencional.',
    tips: ['Exige que los 3 caminos sean genuinamente diferentes, no variaciones cosméticas del mismo plan.'],
    commonErrors: ['Aceptar el primer camino sin forzar al modelo a buscar los puntos débiles de cada hipótesis.'],
    accessLevel: 'master',
    coinCost: 100,
    isMaster: true,
    createdAt: '2025-02-11',
    usageCount: 1680,
    ratingScore: 5.0,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-1', 'p-24']
  },

  // Additional 15 prompts to reach 40+ high quality items across all categories
  {
    id: 'p-26',
    title: 'Generador de Evaluaciones y Preguntas Tipo Test con Explicación de Distractores',
    description: 'Crea baterías de preguntas de opción múltiple calibradas con distractores plausibles que enseñan activamente por qué las opciones erróneas fallan.',
    categoryId: 'cat-13',
    subcategory: 'Evaluación Educativa',
    tags: ['Educación', 'Exámenes', 'Test', 'Flipped Classroom'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Generar material pedagógico para docentes o auto-estudio con retroalimentación inmediata.',
    fullPrompt: `Actúa como Especialista en Psicometría y Evaluación Educativa.

Crea un examen interactivo de 5 preguntas sobre: [TEMA_EXAMEN]
Nivel de dificultad: [NIVEL_DIFICULTAD]

Para cada pregunta:
1. Enunciado claro basado en un caso o problema práctico (no memorización de fechas).
2. 4 opciones (A, B, C, D) donde solo una es correcta y las otras 3 son distractores plausibles.
3. TABLA DE RETROALIMENTACIÓN: Explica detalladamente por qué cada una de las 3 opciones incorrectas es tentadora pero errónea, y cuál es el principio que valida la opción correcta.`,
    variables: [
      { key: 'TEMA_EXAMEN', label: 'Tema del examen', placeholder: 'Seguridad en aplicaciones web', defaultValue: 'Principios de ciberseguridad y protocolo HTTPS' },
      { key: 'NIVEL_DIFICULTAD', label: 'Nivel', placeholder: 'Intermedio universitario', defaultValue: 'Intermedio para desarrolladores junior' }
    ],
    exampleUse: 'Generar tests para preparar certificaciones oficiales o evaluar a alumnos.',
    expectedResult: 'Preguntas calibradas con feedback didáctico profundo.',
    tips: ['Pídele que no use "Todas las anteriores" ni "Ninguna de las anteriores", ya que restan rigor psicométrico.'],
    commonErrors: ['Crear opciones incorrectas tan absurdas que el alumno acierte por descarte evidente.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-28',
    usageCount: 1980,
    ratingScore: 4.8,
    author: 'Elena Morales',
    relatedPromptIds: ['p-18', 'p-19']
  },
  {
    id: 'p-27',
    title: 'Auditor de Contratos y Acuerdos de Confidencialidad (NDA)',
    description: 'Identifica cláusulas abusivas, penalizaciones asimétricas, plazos excesivos y ambigüedades en borradores de acuerdos legales.',
    categoryId: 'cat-4',
    subcategory: 'Revisión Legal y Contratos',
    tags: ['Legal', 'NDA', 'Contratos', 'Riesgos', 'Empresa'],
    difficulty: 'Avanzado',
    tools: ['Claude', 'ChatGPT'],
    objective: 'Proteger intereses comerciales identificando banderas rojas en contratos antes de remitirlos al abogado colegiado.',
    fullPrompt: `Actúa como Abogado Mercantil Especializado en Contratos Tecnológicos y Propiedad Intelectual. (Aviso: Sé que esto es un análisis analítico previo y no sustituye el consejo legal colegiado formal).

Revisa el siguiente fragmento contractual o cláusulas:
"""
[TEXTO_CONTRATO]
"""

Mi posición en el acuerdo: [MI_POSICION]

Analiza:
1. CLÁUSULAS DE ALTO RIESGO O BANDERAS ROJAS (Duración desproporcionada, no competencia encubierta, indemnizaciones sin tope).
2. ASIMETRÍAS EN OBLIGACIONES: ¿El acuerdo impone cargas a una parte que no exige a la otra?
3. REDACCIÓN ALTERNATIVA PROPUESTA: Escribe una versión equilibrada de la cláusula conflictiva con lenguaje jurídico impecable.`,
    variables: [
      { key: 'TEXTO_CONTRATO', label: 'Texto o cláusula del contrato', placeholder: 'Pega aquí el texto contractual...', defaultValue: 'El receptor se compromete a no trabajar directa o indirectamente con ningún competidor del emisor durante un plazo indefinido en cualquier territorio global bajo penalización de 100.000€...' },
      { key: 'MI_POSICION', label: 'Tu posición', placeholder: 'Proveedor de servicios / Empleado', defaultValue: 'Proveedor independiente de servicios tecnológicos' }
    ],
    exampleUse: 'Detectar trampas en NDAs y contratos comerciales antes de firmar.',
    expectedResult: 'Informe de riesgos con propuestas de redacción equilibradas.',
    tips: ['Indica siempre la jurisdicción correspondiente (ej. legislación española o europea).'],
    commonErrors: ['Olvidar que la IA proporciona análisis orientativo y siempre conviene ratificar con un letrado.'],
    accessLevel: 'experto',
    coinCost: 45,
    createdAt: '2025-02-03',
    usageCount: 1540,
    ratingScore: 4.9,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-6', 'p-16']
  },
  {
    id: 'p-28',
    title: 'Generador de Historias de Usuario con Criterios de Aceptación Gherkin (Given-When-Then)',
    description: 'Escribe especificaciones ágiles que conectan los requerimientos de negocio con las pruebas automatizadas de desarrollo.',
    categoryId: 'cat-5',
    subcategory: 'Agile & Product Management',
    tags: ['Scrum', 'Gherkin', 'Product Owner', 'User Stories', 'BDD'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Evitar malentendidos entre Product Managers y programadores mediante especificaciones ejecutables BDD.',
    fullPrompt: `Actúa como Lead Product Owner y Especialista en Metodologías Ágiles (BDD).

Transforma la siguiente funcionalidad en una Historia de Usuario completa:
- Funcionalidad requerida: [FUNCIONALIDAD]
- Usuario beneficiario: [TIPO_USUARIO]
- Valor de negocio esperado: [VALOR_NEGOCIO]

Entrega:
1. ENUNCIADO DE LA HISTORIA:
   "Como [rol], quiero [acción] para [beneficio]".
2. CONTEXTO Y DEPENDENCIAS TÉCNICAS.
3. CRITERIOS DE ACEPTACIÓN EN SINTAXIS GHERKIN (Mínimo 3 escenarios: Camino feliz, Caso de fallo o validación, y Caso límite):
   \`\`\`gherkin
   Escenario: [Nombre descriptivo]
     Dado que [condición inicial]
     Cuando [acción del usuario]
     Entonces [resultado esperado verificado]
   \`\`\`
4. DEFINICIÓN DE TERMINADO (Definition of Done - DoD).`,
    variables: [
      { key: 'FUNCIONALIDAD', label: 'Funcionalidad', placeholder: 'Recuperar contraseña por SMS', defaultValue: 'Desbloqueo de prompt Master mediante canje de 50 PromptCoins en el perfil' },
      { key: 'TIPO_USUARIO', label: 'Tipo de usuario', placeholder: 'Usuario registrado', defaultValue: 'Usuario autenticado con saldo suficiente en su monedero' },
      { key: 'VALOR_NEGOCIO', label: 'Valor de negocio', placeholder: 'Aumentar engagement...', defaultValue: 'Fomentar la retención y el consumo de retos diarios en la plataforma' }
    ],
    exampleUse: 'Preparar tickets de Jira o Linear antes del refinamiento del sprint.',
    expectedResult: 'Historias de usuario sin ambigüedades listas para el equipo de desarrollo y QA.',
    tips: ['La sintaxis Given-When-Then puede importarse directamente en Cucumber o Cypress.'],
    commonErrors: ['Escribir criterios vagos como "el sistema debe ser rápido". Especifica métricas ("respuesta < 500ms").'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-31',
    usageCount: 2410,
    ratingScore: 4.9,
    author: 'Marc Valls',
    relatedPromptIds: ['p-7', 'p-8']
  },
  {
    id: 'p-29',
    title: 'Creador de Guiones para Podcasting y Entrevistas Profundas',
    description: 'Estructura una entrevista de 45 minutos con preguntas abiertas que evitan respuestas ensayadas y extraen reflexiones genuinas.',
    categoryId: 'cat-8',
    subcategory: 'Audio y Entrevistas',
    tags: ['Podcast', 'Entrevistas', 'Periodismo', 'Audio', 'Contenido'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Dirigir episodios de podcast apasionantes que mantengan la atención del oyente.',
    fullPrompt: `Actúa como Productor Ejecutivo de los podcasts de entrevistas más escuchados del mundo.

Diseña la escaleta y batería de preguntas para una entrevista con:
- Invitado / Perfil: [PERFIL_INVITADO]
- Tema central del episodio: [TEMA_EPISODIO]
- Duración estimada: [DURACION]

Entrega:
1. INTRODUCCIÓN MAGNÉTICA (Los primeros 90 segundos para enganchar al oyente presentando la gran contradicción del invitado).
2. BLOQUE 1: EL ORIGEN Y EL MOMENTO DE QUIEBRE (Preguntas para desarmar la coraza de relaciones públicas).
3. BLOQUE 2: EL NÚCLEO TÉCNICO / TEMA MAESTRO (Preguntas tácticas con contrapreguntas preparadas si responde con vaguedades).
4. BLOQUE 3: EL DILEMA DEL FUTURO Y LA PREGUNTA INCÓMODA (Una pregunta audaz que nadie más le haya formulado).
5. CIERRE CON IMPACTO: Pregunta final no convencional.`,
    variables: [
      { key: 'PERFIL_INVITADO', label: 'Perfil del invitado', placeholder: 'Fundador de startup que fracasó', defaultValue: 'Un veterano desarrollador Android que ahora lidera un equipo de 50 ingenieros de IA' },
      { key: 'TEMA_EPISODIO', label: 'Tema del episodio', placeholder: 'El futuro del código y la IA', defaultValue: 'Cómo la inteligencia artificial cambiará el desarrollo móvil nativo en los próximos 3 años' },
      { key: 'DURACION', label: 'Duración', placeholder: '45 minutos', defaultValue: '45 minutos' }
    ],
    exampleUse: 'Preparar entrevistas con referentes del sector para un canal de YouTube o podcast.',
    expectedResult: 'Guión fluido con repreguntas que garantizan contenido de alto valor.',
    tips: ['Investiga previamente qué suele responder el invitado en otras charlas para evitar las mismas preguntas.'],
    commonErrors: ['Formular preguntas cerradas que se puedan contestar con un "sí" o un "no".'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-02-06',
    usageCount: 1610,
    ratingScore: 4.8,
    author: 'Sergio Navarro',
    relatedPromptIds: ['p-13', 'p-14']
  },
  {
    id: 'p-30',
    title: 'Especialista en Automatización con Make (Integromat) y Zapier',
    description: 'Diseña flujos de trabajo multi-herramienta con enrutamiento de errores, webhooks, filtros y optimización de cuotas operativas.',
    categoryId: 'cat-19',
    subcategory: 'Automatización No-Code',
    tags: ['Make', 'Zapier', 'Automatización', 'No-Code', 'Webhooks'],
    difficulty: 'Avanzado',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Conectar plataformas en piloto automático sin duplicar ejecuciones ni perder datos por fallos de red.',
    fullPrompt: `Actúa como Arquitecto de Automatización No-Code certificado en Make y Zapier.

Diseña el escenario para automatizar el siguiente flujo:
- Disparador (Trigger): [DISPARADOR]
- Acciones requeridas: [ACCIONES_REQUERIDAS]
- Destino final: [DESTINO_FINAL]

Entrega:
1. MAPA DEL ESCENARIO MÓDULO A MÓDULO (Trigger, Routers, Filtros, Transformers y Actions).
2. GESTIÓN DEFENSIVA DE ERRORES:
   - Uso de directivas de error (Break / Resume / Rollback / Ignore).
   - Manejo de reintentos para no agotar la cuota mensual ante caídas de API.
3. FILTROS Y FORMATEO DE DATOS: Mapeo de variables JSON y funciones de limpieza (trim, date formatting, regex).
4. ESTIMACIÓN DE CONSUMO DE OPERACIONES y consejos para reducir costes de ejecución.`,
    variables: [
      { key: 'DISPARADOR', label: 'Disparador / Trigger', placeholder: 'Nuevo lead en Typeform', defaultValue: 'Nueva respuesta recibida en formulario de contacto de la web (Webhook)' },
      { key: 'ACCIONES_REQUERIDAS', label: 'Acciones intermedias', placeholder: 'Filtrar por presupuesto...', defaultValue: 'Enriquecer datos con IA para clasificar el lead en Alto/Medio/Bajo valor, buscar si ya existe en Notion y crear tarea' },
      { key: 'DESTINO_FINAL', label: 'Destino final', placeholder: 'Enviar alerta a Slack...', defaultValue: 'Avisar por canal privado de Slack si el lead es de Alto Valor y enviar email personalizado de bienvenida' }
    ],
    exampleUse: 'Montar flujos empresariales robustos sin pagar desarrollos a medida.',
    expectedResult: 'Especificación detallada lista para replicar en el canvas visual de Make.',
    tips: ['Usa un router con módulo Break para guardar un log en Google Sheets si la API de destino falla.'],
    commonErrors: ['No filtrar duplicados en el trigger, lo que puede provocar bucles infinitos de emails.'],
    accessLevel: 'experto',
    coinCost: 50,
    createdAt: '2025-02-07',
    usageCount: 1830,
    ratingScore: 4.9,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-20', 'p-24']
  },
  {
    id: 'p-31',
    title: 'Constructor de Guías de Estudio Personalizadas con Repetición Espaciada (Anki)',
    description: 'Transforma libros enteros o temarios de oposiciones en tarjetas Anki listas para importar con cloze deletion y principios de memoria activa.',
    categoryId: 'cat-13',
    subcategory: 'Técnicas de Memoria',
    tags: ['Anki', 'Flashcards', 'Memoria', 'Repetición Espaciada', 'Oposiciones'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Retener a largo plazo grandes volúmenes de datos con la mínima inversión de tiempo diaria.',
    fullPrompt: `Actúa como Experto en Ciencias Cognitivas y Creación de Flashcards para Repetición Espaciada (Anki).

Convierte el siguiente texto formativo en una baraja de tarjetas optimizadas para memorización a largo plazo:
"""
[TEXTO_TEMARIO]
"""

Reglas estrictas de calidad cognitiva:
1. Principio del átomo único: Cada tarjeta debe preguntar por un solo dato o concepto atómico; nunca agrupes dos conceptos en una misma carta.
2. Alterna entre tarjetas Básicas (Pregunta / Respuesta directa) y tarjetas de tipo Oclusión (Cloze Deletion con formato \`{{c1::texto}}\`).
3. Entrega las tarjetas en formato de texto plano separado por punto y coma (;) listo para "Archivo -> Importar" en Anki Desktop.
4. Incluye un campo adicional con una pista mnemotécnica o analogía para fijar el recuerdo.`,
    variables: [
      { key: 'TEXTO_TEMARIO', label: 'Texto o apuntes a convertir', placeholder: 'Pega aquí el capítulo o apuntes...', defaultValue: 'El protocolo OAuth 2.0 utiliza 4 roles: Resource Owner (usuario), Client (aplicación), Resource Server (servidor de API) y Authorization Server (emisor de tokens). El token de acceso tiene tiempo de vida corto, mientras que el refresh token se usa para renovarlo...' }
    ],
    exampleUse: 'Preparar exámenes de certificación oficial de Google Cloud, AWS o exámenes médicos.',
    expectedResult: 'Listado en formato CSV/Anki con preguntas atómicas listas para importar.',
    tips: ['Nunca crees tarjetas con respuestas de más de dos líneas; si la respuesta es larga, divídela en 3 tarjetas.'],
    commonErrors: ['Copiar párrafos enteros con demasiadas oclusiones juntas que confunden al cerebro.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-29',
    usageCount: 2120,
    ratingScore: 4.8,
    author: 'Elena Morales',
    relatedPromptIds: ['p-18', 'p-26']
  },
  {
    id: 'p-32',
    title: 'Analista de Feedback de Clientes y Clasificador de Sentimiento con Matriz de Acciones',
    description: 'Procesa cientos de opiniones, reseñas de Google o tickets de soporte para categorizar problemas por frecuencia e impacto comercial.',
    categoryId: 'cat-14',
    subcategory: 'Voz del Cliente (VoC)',
    tags: ['Feedback', 'Soporte', 'Análisis', 'Reviews', 'NPS'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Detectar patrones de insatisfacción antes de que causen cancelaciones masivas de clientes.',
    fullPrompt: `Actúa como Director de Experiencia del Cliente (CX) y Analista Cualitativo.

Analiza las siguientes reseñas y opiniones de usuarios:
"""
[RESEÑAS_CLIENTES]
"""

Genera un informe con:
1. MATRIZ DE FRECUENCIA VS GRAVEDAD (Tabla que clasifique los problemas detectados en: Urgente Crítico, Fricción Menor, Oportunidad de Mejora).
2. SENTIMIENTO GLOBAL PONDERADO (% Positivo, % Neutro, % Negativo con los términos emocionales más repetidos).
3. LAS 3 CAUSAS RAÍZ SUBYACENTES (Por qué ocurren los fallos, no solo qué dicen los clientes).
4. PLAN DE ACCIÓN OPERATIVO CON RESPONSABLES (Producto, Soporte, Ventas) para resolver las quejas más graves en 14 días.`,
    variables: [
      { key: 'RESEÑAS_CLIENTES', label: 'Reseñas o tickets de clientes', placeholder: 'Pega las opiniones de tus clientes...', defaultValue: '1. "La app se cuelga cada vez que intento exportar a PDF". 2. "Cobro duplicado en mi tarjeta y tardaron 4 días en contestar". 3. "La interfaz es bonita pero no entiendo cómo compartir con mi equipo". 4. "Me encanta el buscador, es súper rápido". 5. "El precio subió sin previo aviso por email".' }
    ],
    exampleUse: 'Analizar las reseñas de la competencia en Google Play Store o tus propios tickets de Zendesk.',
    expectedResult: 'Informe accionable que traduce quejas desordenadas en prioridades de producto.',
    tips: ['Pega comentarios reales sin filtrar para obtener un diagnóstico fidedigno.'],
    commonErrors: ['Centrarse solo en los comentarios halagadores y descartar las críticas duras.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-02-01',
    usageCount: 1670,
    ratingScore: 4.8,
    author: 'Lucía Santamaría',
    relatedPromptIds: ['p-3', 'p-19']
  },
  {
    id: 'p-33',
    title: 'Consultor de Resiliencia Mental y Superación del Síndrome del Impostor',
    description: 'Reencuadra dudas profesionales mediante terapia cognitiva conductual (TCC) aplicada al liderazgo y el crecimiento laboral.',
    categoryId: 'cat-18',
    subcategory: 'Liderazgo y Mentalidad',
    tags: ['Mindset', 'Liderazgo', 'Carrera', 'Impostor', 'Crecimiento'],
    difficulty: 'Principiante',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Identificar distorsiones de pensamiento ante ascensos, entrevistas o retos de alta responsabilidad.',
    fullPrompt: `Actúa como Coach Ejecutivo de Alta Dirección y Psicólogo Organizacional.

Estoy enfrentando el siguiente desafío profesional y siento inseguridad o síndrome del impostor:
"""
[MI_DESAFIO_PROFESIONAL]
"""

Guíame a través de un ejercicio estructurado de reencuadre:
1. IDENTIFICACIÓN DE DISTORSIONES COGNITIVAS (¿Estoy cayendo en pensamiento de todo-o-nada, catastrofismo o minimización de mis logros?).
2. LA AUDITORÍA DE PRUEBAS OBJETIVAS: Ayúdame a separar los hechos contrastables de las narrativas de miedo que fabrica mi mente.
3. EL REENCUADRE COGNITIVO: Reformular cada pensamiento saboteador en una afirmación constructiva y basada en datos.
4. MICRO-ACCIÓN DE VALENTÍA: 1 acción pequeña de menos de 10 minutos que puedo ejecutar hoy mismo para romper la parálisis por análisis.`,
    variables: [
      { key: 'MI_DESAFIO_PROFESIONAL', label: 'Tu desafío o situación', placeholder: 'Me han ascendido a líder...', defaultValue: 'Me acaban de nombrar director de ingeniería de un equipo con personas que tienen 10 años más de experiencia que yo y siento que van a descubrir que no sé lo suficiente.' }
    ],
    exampleUse: 'Calmar la ansiedad antes de una presentación importante, cambio de trabajo o ascenso de puesto.',
    expectedResult: 'Claridad mental y pasos concretos para liderar con autenticidad.',
    tips: ['Acepta que la incomodidad es el síntoma biológico del aprendizaje en curso.'],
    commonErrors: ['Esperar a sentir seguridad total antes de dar un paso adelante en tu carrera.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-22',
    usageCount: 1890,
    ratingScore: 4.9,
    author: 'Elena Morales',
    relatedPromptIds: ['p-17', 'p-23']
  },
  {
    id: 'p-34',
    title: 'Optimizador de Consultas SQL Complejas y Análisis de Plan de Ejecución (EXPLAIN)',
    description: 'Diagnostica cuellos de botella en PostgreSQL y MySQL, sugiere índices compuestos y reescribe consultas para latencias mínimas.',
    categoryId: 'cat-5',
    subcategory: 'Bases de Datos & SQL',
    tags: ['SQL', 'PostgreSQL', 'MySQL', 'Indexes', 'Performance', 'Backend'],
    difficulty: 'Avanzado',
    tools: ['Claude', 'ChatGPT'],
    objective: 'Reducir tiempos de consulta de segundos a milisegundos en bases de datos con millones de registros.',
    fullPrompt: `Actúa como Administrador de Bases de Datos Senior (DBA) y Experto en Optimización de PostgreSQL / MySQL.

Revisa la siguiente consulta SQL lenta:
\`\`\`sql
[CONSULTA_SQL]
\`\`\`
Motor de base de datos: [MOTOR_BD]
Volumen de datos aproximado: [VOLUMEN_DATOS]

Proporciona:
1. DIAGNÓSTICO DE CUELLOS DE BOTELLA (Subconsultas correlacionadas, escaneos secuenciales completos de tabla / Full Table Scan, uso ineficiente de OR o LIKE sin prefijo).
2. RECOMENDACIÓN DE ÍNDICES: Sentencias exactas \`CREATE INDEX ...\` (incluyendo índices compuestos o parciales con justificación del orden de columnas).
3. CONSULTA REESCRITA Y OPTIMIZADA: Versión limpia usando CTEs o JOINs indexados.
4. SIMULACIÓN DE EXPLAIN ANALYZE: Explicación de cómo cambiará el coste de ejecución antes y después.`,
    variables: [
      { key: 'CONSULTA_SQL', label: 'Consulta SQL a optimizar', placeholder: 'SELECT * FROM...', defaultValue: 'SELECT o.id, o.created_at, (SELECT COUNT(*) FROM order_items WHERE order_id = o.id) as total_items FROM orders o WHERE o.user_id IN (SELECT id FROM users WHERE status = "active") AND o.total_amount > 100 ORDER BY o.created_at DESC;' },
      { key: 'MOTOR_BD', label: 'Motor de base de datos', placeholder: 'PostgreSQL 16 / MySQL 8', defaultValue: 'PostgreSQL 16' },
      { key: 'VOLUMEN_DATOS', label: 'Volumen de datos', placeholder: '10 millones de filas...', defaultValue: 'Tabla orders: 4 millones de filas; order_items: 18 millones de filas' }
    ],
    exampleUse: 'Acelerar dashboards y APIs que sufren lentitud al consultar tablas históricas.',
    expectedResult: 'Sentencias de indexación y SQL refactorizado con mejoras drásticas de rendimiento.',
    tips: ['El orden de las columnas en un índice compuesto debe coincidir con los filtros de igualdad primero y rango después.'],
    commonErrors: ['Crear índices en todas las columnas sin considerar el coste de inserción y escritura.'],
    accessLevel: 'experto',
    coinCost: 45,
    createdAt: '2025-02-09',
    usageCount: 2040,
    ratingScore: 5.0,
    author: 'Marc Valls',
    relatedPromptIds: ['p-7', 'p-8']
  },
  {
    id: 'p-35',
    title: 'Estratega de Lanzamiento de Productos Digitales en Product Hunt y Redes',
    description: 'Planifica la cuenta atrás de 30 días para un lanzamiento tecnológico: teaser, comunidad de cazadores, comentarios y pico de tráfico.',
    categoryId: 'cat-3',
    subcategory: 'Lanzamientos de Producto',
    tags: ['Product Hunt', 'Lanzamiento', 'SaaS', 'Marketing', 'Startup'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Conquistar el "Product of the Day" y convertir la atención inicial en registros activos sostenibles.',
    fullPrompt: `Actúa como Consultor de Crecimiento y Hunter veterano de Product Hunt con más de 10 premios "Product of the Day".

Prepara el plan de lanzamiento para:
- Nombre del producto: [PRODUCTO_A_LANZAR]
- Propuesta de valor en 1 frase: [PROPUESTA_VALOR]
- Fecha prevista: [FECHA_LANZAMIENTO]

Entrega:
1. KIT DE ACTIVOS DE PRODUCT HUNT:
   - Tagline magnética (máximo 60 caracteres).
   - Comentario del Fundador (Maker Comment): historia personal, dolor que resuelve y agradecimiento a la comunidad sin sonar corporativo.
   - Especificaciones de las 5 galerías visuales (GIFs animados y mockups clave).
2. CALENDARIO DE ACCIONES (T-14 días, Día D hora por hora a partir de 00:01 PST, T+7 días).
3. GUIONES DE MENSAJES DIRECTOS para pedir feedback (sin violar las normas anti-spam de Product Hunt).
4. PLAN DE RETENCIÓN POST-LANZAMIENTO para que los usuarios no abandonen la app a los 3 días.`,
    variables: [
      { key: 'PRODUCTO_A_LANZAR', label: 'Producto a lanzar', placeholder: 'Mi SaaS...', defaultValue: 'PromptVerse AI' },
      { key: 'PROPUESTA_VALOR', label: 'Propuesta de valor', placeholder: 'Biblioteca de prompts...', defaultValue: 'La biblioteca definitiva de prompts profesionales, técnicas avanzadas de prompting y gamificación con monedas virtuales' },
      { key: 'FECHA_LANZAMIENTO', label: 'Fecha estimada', placeholder: 'El próximo mes...', defaultValue: 'Primer martes del próximo mes' }
    ],
    exampleUse: 'Coordinar el lanzamiento de una app o SaaS para conseguir máxima tracción inicial gratuita.',
    expectedResult: 'Estrategia integral con checklist diario y copys para redes sociales listos para programar.',
    tips: ['El Maker Comment es lo primero que leen los votantes; hazlo humano, humilde y transparente.'],
    commonErrors: ['Pedir upvotes explícitamente a familiares; el algoritmo de Product Hunt penaliza cuentas recién creadas.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-02-04',
    usageCount: 1720,
    ratingScore: 4.9,
    author: 'Lucía Santamaría',
    relatedPromptIds: ['p-5', 'p-6']
  },
  {
    id: 'p-36',
    title: 'Generador de Guiones de Vídeo para Formación Corporativa y Micro-learning',
    description: 'Transforma manuales de cumplimiento normativo o protocolos internos en píldoras interactivas de 3 minutos con casos prácticos.',
    categoryId: 'cat-2',
    subcategory: 'E-Learning Corporativo',
    tags: ['Formación', 'E-learning', 'Capacitación', 'Microlearning', 'Vídeo'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Hacer amenos y comprensibles procesos de formación que los empleados suelen ignorar.',
    fullPrompt: `Actúa como Diseñador Instruccional Senior y Guionista de Micro-Learning.

Convierte el siguiente procedimiento o manual aburrido en un guión de vídeo interactivo de 3 minutos:
"""
[MANUAL_PROCEDIMIENTO]
"""
Público interno: [PERFIL_EMPLEADO]

El guión debe estructurarse en:
1. EL DILEMA DEL MUNDO REAL (Escenario donde un empleado comete un error habitual y las consecuencias que sufre).
2. LA REGLA DE ORO DESCOMPUESTA EN 3 PASOS INCONFUNDIBLES.
3. PREGUNTA DE TOMA DE DECISIÓN INTERACTIVA (Pausa el vídeo mentalmente: ¿Qué harías tú ante este dilema?).
4. RESOLUCIÓN Y PROTOCOLO DE ESCALADO (A quién contactar si surge la duda).
5. INDICACIONES VISUALES para el equipo de animación o locución.`,
    variables: [
      { key: 'MANUAL_PROCEDIMIENTO', label: 'Manual o procedimiento', placeholder: 'Pega el texto del manual...', defaultValue: 'Protocolo de prevención de Phishing y protección de contraseñas: prohibido compartir claves por Slack o email, activar siempre autenticación de doble factor mediante app authenticator, verificar el remitente antes de hacer clic en enlaces sospechosos...' },
      { key: 'PERFIL_EMPLEADO', label: 'Perfil del empleado', placeholder: 'Personal administrativo...', defaultValue: 'Empleados de oficina y teletrabajadores con diversos niveles de soltura digital' }
    ],
    exampleUse: 'Crear cursos de onboarding y cumplimiento normativo ágiles para empresas.',
    expectedResult: 'Guión dinámico basado en historias que eleva la retención de conocimientos.',
    tips: ['Muestra el error antes de la solución; el cerebro aprende mucho más rápido cuando ve las consecuencias.'],
    commonErrors: ['Copiar párrafos de leyes o manuales verbatim en el guión de locución.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-02-02',
    usageCount: 1450,
    ratingScore: 4.8,
    author: 'Elena Morales',
    relatedPromptIds: ['p-3', 'p-13']
  },
  {
    id: 'p-37',
    title: 'Ingeniería Inversa de Prompts: Del Resultado a la Instrucción Maestra',
    description: 'Analiza un texto o imagen excepcional y deduce la arquitectura del prompt exacto que lo produjo con sus parámetros y sesgos.',
    categoryId: 'cat-20',
    subcategory: 'Ingeniería Inversa',
    tags: ['Reverse Engineering', 'Metodología', 'Deconstrucción', 'Avanzado'],
    difficulty: 'Master',
    tools: ['Claude', 'ChatGPT', 'Universal'],
    objective: 'Descubrir qué técnicas de prompting, roles y restricciones produjeron un output sobresaliente.',
    fullPrompt: `Actúa como Catedrático en Lingüística Computacional e Ingeniero de Prompts Forense.

Examina este fragmento de salida de alta calidad obtenido de una IA:
"""
[RESULTADO_A_DECONSTRUIR]
"""

Realiza la ingeniería inversa para reconstruir el prompt original que probablemente lo generó:
1. ANÁLISIS DE RASGOS ESTILÍSTICOS Y ESTRUCTURALES:
   - Patrón de cadencia oracional, vocabulario técnico empleado y formato de entrega.
   - Suposición de rol o persona inducida.
   - Restricciones negativas que el modelo parecía estar respetando.
2. RECONSTRUCCIÓN DEL SYSTEM PROMPT:
   - El prompt maestro completo y estructurado capaz de replicar este estándar de calidad de forma consistente.
3. VARIABLES RECOMENDADAS:
   - Identifica qué partes de la instrucción deben parametrizarse entre corchetes para convertirlo en una plantilla reutilizable universal.`,
    variables: [
      { key: 'RESULTADO_A_DECONSTRUIR', label: 'Texto o resultado a analizar', placeholder: 'Pega el texto maestro a deconstruir...', defaultValue: 'Un análisis comparativo profundo entre Kafka y RabbitMQ que no usa generalidades sino que evalúa arquitectura de almacenamiento en disco, modelo pull vs push, semántica de entrega exactamente una vez y coste de infraestructura...' }
    ],
    exampleUse: 'Aprender de las mejores respuestas del sector y crear plantillas automatizadas propias.',
    expectedResult: 'Prompt reconstruido altamente preciso listo para ser probado y mejorado.',
    tips: ['Presta atención a lo que la respuesta NO hace; las restricciones negativas suelen ser el secreto del buen prompting.'],
    commonErrors: ['Creer que los outputs brillantes se logran con una sola frase simple.'],
    accessLevel: 'master',
    coinCost: 85,
    isMaster: true,
    createdAt: '2025-02-12',
    usageCount: 1310,
    ratingScore: 5.0,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-1', 'p-25']
  },
  {
    id: 'p-38',
    title: 'Generador de Guiones de Venta en Frío para LinkedIn (Social Selling B2B)',
    description: 'Redacta secuencias de mensajes directos que aportan valor genuino sin provocar rechazo comercial inmediato.',
    categoryId: 'cat-11',
    subcategory: 'Prospección Comercial',
    tags: ['Ventas', 'LinkedIn', 'Outreach', 'B2B', 'Cold Message'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Iniciar conversaciones de negocio cualificadas en LinkedIn respetando la etiqueta profesional.',
    fullPrompt: `Actúa como Director Comercial B2B especializado en Social Selling y Prospección en Frío de alta conversión.

Crea una secuencia de 3 mensajes directos de LinkedIn para iniciar contacto con:
- Perfil del decisor: [PERFIL_DECISOR]
- Problema latente que resolvemos: [PROBLEMA_LATENTE]
- Oferta sin compromiso: [OFERTA_SIN_COMPROMISO]

Reglas estrictas:
- Mensaje 1 (Conexión + Saludo): Menos de 40 palabras. Prohibido vender o enviar enlaces. Menciona un punto de interés genuino sobre su trayectoria o su empresa.
- Mensaje 2 (48 horas después de aceptar): Comparte un recurso o idea concreta sin pedir nada a cambio ("Pensé que este dato te resultaría útil para...").
- Mensaje 3 (5 días después): Propuesta de café virtual de 10 minutos con una razón de beneficio mutuo evidente y una salida fácil ("Si no es el momento, lo entiendo perfectamente").`,
    variables: [
      { key: 'PERFIL_DECISOR', label: 'Cargo o perfil del cliente', placeholder: 'CTO de fintech...', defaultValue: 'Director de Marketing de empresas SaaS con entre 20 y 100 empleados' },
      { key: 'PROBLEMA_LATENTE', label: 'Problema que resuelves', placeholder: 'Alto CAC...', defaultValue: 'Coste por adquisición en Google Ads disparado y dependencia excesiva de tráfico de pago' },
      { key: 'OFERTA_SIN_COMPROMISO', label: 'Oferta o gancho de valor', placeholder: 'Auditoría gratuita...', defaultValue: 'Un checklist de 5 fugas habituales en páginas de aterrizaje que reducen un 30% la conversión' }
    ],
    exampleUse: 'Contactar con clientes potenciales en LinkedIn manteniendo una imagen de máxima elegancia y respeto.',
    expectedResult: 'Secuencia de mensajes lista para personalizar y enviar con tasa de respuesta superior al 25%.',
    tips: ['Personaliza siempre la primera frase con un dato real del perfil del prospecto.'],
    commonErrors: ['Enviar un mensaje kilométrico con toda la propuesta de venta en el primer contacto.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-27',
    usageCount: 2840,
    ratingScore: 4.8,
    author: 'Lucía Santamaría',
    relatedPromptIds: ['p-5', 'p-16']
  },
  {
    id: 'p-39',
    title: 'Generador de Pruebas Unitarias Exhaustivas con Cobertura de Edge Cases',
    description: 'Escribe suites de tests unitarios automáticos para funciones críticas contemplando valores nulos, desbordamientos y errores de red.',
    categoryId: 'cat-5',
    subcategory: 'Testing y Calidad',
    tags: ['Testing', 'Unit Tests', 'Jest', 'Vitest', 'Edge Cases', 'QA'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'GitHub Copilot'],
    objective: 'Garantizar el 100% de cobertura lógica en módulos críticos de software.',
    fullPrompt: `Actúa como Ingeniero Senior de Aseguramiento de Calidad (QA Automation) y Desarrollador FullStack.

Escribe una suite completa de pruebas unitarias para la siguiente función en [FRAMEWORK_TESTING]:
\`\`\`typescript
[FUNCION_A_PROBAR]
\`\`\`

La suite debe incluir:
1. CASO NOMINAL (Happy Path): Entradas estándar con resultado esperado.
2. CASOS LÍMITE (Edge Cases): Strings vacíos, arrays de tamaño 0 o masivo, números negativos, NaN, Infinity, caracteres especiales UTF-8.
3. INYECCIÓN Y MANEJO DE ERRORES: Verificación de que la función lanza los errores adecuados (throw ExpectedError) ante entradas corruptas.
4. MOCKS DE DEPENDENCIAS EXTERNAS: Si la función hace llamadas a APIs o bases de datos, incluye los mocks limpios con \`jest.fn()\` o \`vi.fn()\`.`,
    variables: [
      { key: 'FRAMEWORK_TESTING', label: 'Framework de pruebas', placeholder: 'Vitest / Jest / PyTest', defaultValue: 'Vitest / TypeScript' },
      { key: 'FUNCION_A_PROBAR', label: 'Función a testear', placeholder: 'Pega tu función aquí...', defaultValue: 'export function calculateDiscount(price: number, discountPercent: number, userTier: string): number { if (price <= 0) throw new Error("Invalid price"); let disc = (price * discountPercent) / 100; if (userTier === "VIP") disc += 5; return Math.max(0, price - disc); }' }
    ],
    exampleUse: 'Blindar librerías de cálculo y servicios antes de lanzar a producción.',
    expectedResult: 'Archivo de test completo con nomenclatura descriptiva y assertions precisas.',
    tips: ['Nombra cada test siguiendo la convención: \`it("should [resultado esperado] when [condición de entrada]")\`.'],
    commonErrors: ['Probar únicamente el caso feliz sin verificar qué ocurre cuando se pasan datos inválidos.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-26',
    usageCount: 2590,
    ratingScore: 4.9,
    author: 'Marc Valls',
    relatedPromptIds: ['p-7', 'p-8']
  },
  {
    id: 'p-40',
    title: 'Meta-Prompt: El Optimizador Universal de Prompts de PromptVerse',
    description: 'Pasa cualquier prompt simple o incompleto por este refinador para convertirlo en una instrucción profesional con variables y delimitadores.',
    categoryId: 'cat-20',
    subcategory: 'Meta-Prompting',
    tags: ['Meta-Prompt', 'Optimización', 'Refactor', 'Ingeniería'],
    difficulty: 'Intermedio',
    tools: ['Universal', 'ChatGPT', 'Claude', 'Gemini'],
    objective: 'Elevar la calidad de cualquier prompt aficionado hasta convertirlo en una instrucción de nivel experto.',
    fullPrompt: `Actúa como Ingeniero de Prompts Maestro y Consultor de IA de PromptVerse.

Voy a darte un prompt básico o una idea informal de lo que quiero conseguir con la IA:
"""
[PROMPT_BASICO_A_MEJORAR]
"""

Tu tarea es transformarlo en un PROMPT PROFESIONAL de alta fidelidad aplicando las mejores prácticas de la industria:
1. ROL Y AUTORIDAD: Asigna la personalidad y expertise más idóneo para la tarea.
2. CONTEXTO Y PROPÓSITO: Define el escenario de negocio u operativo.
3. INSTRUCCIONES PASO A PASO: Desglosa la tarea en una secuencia lógica numerada.
4. FORMATO DE SALIDA RIGUROSO: Especifica la estructura exacta (tablas, código, viñetas, longitud).
5. RESTRICCIONES NEGATIVAS: Prohíbe explícitamente los clichés, divagaciones o errores habituales de este tipo de solicitud.
6. VARIABLES DINÁMICAS: Sustituye los datos específicos por corchetes [VARIABLE] para que sea reutilizable.

Entrega el prompt resultante en un bloque de código listo para copiar y añade 3 consejos para sacarle el máximo partido.`,
    variables: [
      { key: 'PROMPT_BASICO_A_MEJORAR', label: 'Prompt básico que quieres mejorar', placeholder: 'Escribe un post para mi blog sobre salud...', defaultValue: 'Escribe un post de blog para mi tienda sobre cómo elegir zapatillas para correr' }
    ],
    exampleUse: 'Convertir cualquier idea rápida en un prompt digno de la biblioteca Master.',
    expectedResult: 'Instrucción profesional completa con variables parametrizadas y delimitadores claros.',
    tips: ['Guarda el resultado directamente en tu biblioteca personal con el botón "Guardar en Mi Biblioteca".'],
    commonErrors: ['No especificar para qué tipo de modelo o tarea concreta se quiere afinar el prompt.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-15',
    usageCount: 6420,
    ratingScore: 5.0,
    author: 'PromptVerse Team',
    relatedPromptIds: ['p-1', 'p-25']
  }
];
