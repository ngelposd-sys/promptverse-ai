import { PromptItem } from '../../types';

export const PROMPTS_PART1: PromptItem[] = [
  // ==========================================
  // 1. ESCRITURA PROFESIONAL Y REDACCIÓN (cat-escritura)
  // ==========================================
  {
    id: 'p-1',
    title: 'Arquitecto de Memorandos Ejecutivos con Pirámide de Minto',
    description: 'Estructura informes corporativos donde la conclusión y recomendación van primero, seguidas de la justificación técnica.',
    categoryId: 'cat-escritura',
    subcategory: 'Informes y Memorandos',
    tags: ['Minto', 'Dirección', 'Informes', 'Redacción'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Transformar notas desordenadas en un memorando ejecutivo de 1 página listo para el consejo de administración.',
    fullPrompt: `Actúa como Director de Estrategia Corporativa. Transforma las siguientes notas en un Memorando Ejecutivo aplicando la Pirámide de Minto:

Notas de entrada:
"""
[NOTAS_DESORDENADAS]
"""

Estructura obligatoria:
1. CONCLUSIÓN PRINCIPAL: Decisión o recomendación ejecutiva en máximo 3 líneas.
2. ARGUMENTOS CLAVE: 3 pilares estratégicos con impacto en [METRICA_OBJETIVO].
3. ANÁLISIS DE RIESGOS Y MITIGACIÓN: Tabla con Riesgo, Probabilidad (Alta/Media/Baja), Impacto y Plan de Contingencia.
4. CALENDARIO DE IMPLANTACIÓN: Hitos a 15, 30 y 60 días.

Tono: [TONO]. Idioma: Español profesional.`,
    variables: [
      { key: 'NOTAS_DESORDENADAS', label: 'Notas o datos sin estructurar', placeholder: 'Pega aquí tus notas...', defaultValue: 'Caída de ventas del 14% en Q3. El sistema de onboarding tiene un cuello de botella en verificación. El equipo comercial pide bajar precios pero el margen es del 19%.' },
      { key: 'METRICA_OBJETIVO', label: 'Métrica de impacto', placeholder: 'Margen operativo / Retención', defaultValue: 'Margen neto y satisfacción del cliente' },
      { key: 'TONO', label: 'Tono deseado', placeholder: 'Formal, sobrio y resolutivo', defaultValue: 'Formal, conciso y orientado a decisiones estratégicas' }
    ],
    exampleUse: 'Resumir una crisis operativa para los directores generales antes de una junta semanal.',
    expectedResult: 'Memorando pulido, sin relleno, donde cada párrafo aporta datos verificables.',
    tips: ['Indica siempre el destinatario exacto (CEO, CFO, CTO) para calibrar el léxico.'],
    commonErrors: ['Incluir disculpas o saludos coloquiales en un documento directivo.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-10',
    usageCount: 4210,
    ratingScore: 4.9,
    author: 'Elena Morales'
  },
  {
    id: 'p-2',
    title: 'Humanizador de Textos y Eliminador de Patrones IA',
    description: 'Elimina palabras cliché, adjetivos rimbombantes y cadencia predecible típica de modelos de lenguaje.',
    categoryId: 'cat-escritura',
    subcategory: 'Corrección de Estilo',
    tags: ['Humanización', 'Estilo', 'Anti-IA', 'Edición'],
    difficulty: 'Intermedio',
    tools: ['Claude', 'ChatGPT', 'Gemini'],
    objective: 'Reescribir prosa artificial para que adquiera naturalidad, variedad de longitud de oraciones y voz de autor.',
    fullPrompt: `Reescribe el siguiente texto para eliminar cualquier síntoma de lenguaje robótico o artificial generado por IA:

Texto original:
"""
[TEXTO_A_HUMANIZAR]
"""

Reglas de edición intransigentes:
1. Prohíbe las siguientes palabras cliché: "en el vertiginoso mundo actual", "un tapiz de", "crucial destacar", "catalizador", "sumergirse", "es importante recordar", "en conclusión".
2. Alterna drásticamente oraciones muy cortas (3-6 palabras) con oraciones compuestas explicativas.
3. Utiliza una voz en primera persona con tono [TIPO_DE_VOZ].
4. Introduce al menos 2 metáforas cotidianas que ilustren los puntos clave.
5. Devuelve la versión final y un resumen de las mejoras estilísticas aplicadas.`,
    variables: [
      { key: 'TEXTO_A_HUMANIZAR', label: 'Texto con tono robótico', placeholder: 'Pega el texto redactado por IA...', defaultValue: 'En el cambiante panorama tecnológico contemporáneo, es fundamental comprender que las herramientas digitales actúan como un verdadero catalizador para maximizar el potencial...' },
      { key: 'TIPO_DE_VOZ', label: 'Tipo de voz', placeholder: 'Veterano pragmático', defaultValue: 'Profesional veterano, franco, empático y reflexivo' }
    ],
    exampleUse: 'Pulir artículos de blog, cartas de presentación y memorandos internos.',
    expectedResult: 'Texto fresco, dinámico, con ritmo literario ágil y credibilidad humana.',
    tips: ['Lee el texto en voz alta tras la generación para comprobar que no trabe la lengua.'],
    commonErrors: ['Pedir que humanice pero dejar el prompt sin lista de palabras prohibidas.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-15',
    usageCount: 5120,
    ratingScore: 5.0,
    author: 'Javier Roca'
  },
  {
    id: 'p-3',
    title: 'Redactor de Ensayos Argumentativos con Antítesis y Refutación',
    description: 'Desarrolla textos reflexivos profundos construyendo la postura contraria con justicia antes de rebatirla.',
    categoryId: 'cat-escritura',
    subcategory: 'Ensayos y Artículos',
    tags: ['Ensayo', 'Filosofía', 'Argumentación', 'Retórica'],
    difficulty: 'Avanzado',
    tools: ['Claude', 'ChatGPT'],
    objective: 'Elaborar artículos de opinión con rigor académico utilizando la técnica del "Hombre de Hierro" (Steel-manning).',
    fullPrompt: `Actúa como Ensayista y Analista Cultural. Redacta un ensayo argumentativo profundo sobre la siguiente tesis:
Tesis: [TESIS_PRINCIPAL]
Público lector: [PUBLICO_OBJETIVO]

Estructura requerida:
1. INTRODUCCIÓN: Contextualización del dilema moral, económico o social sin lugares comunes.
2. LA MEJOR VERSIÓN DE LA POSTURA OPUESTA (Steel-manning): Construye el argumento contrario con tanta fuerza que sus propios defensores se sientan orgullosos.
3. LA REFUTACIÓN LÓGICA: Desmonta las premisas de la oposición demostrando puntos ciegos o contradicciones empíricas.
4. SÍNTESIS RESOLUTIVA: Propuesta integradora que aporte luz nueva al debate.
Extensión: 800 a 1.000 palabras en un tono [TONO].`,
    variables: [
      { key: 'TESIS_PRINCIPAL', label: 'Tesis a defender', placeholder: 'El teletrabajo mejora la productividad...', defaultValue: 'El exceso de automatización algorítmica reduce la creatividad heurística en las organizaciones' },
      { key: 'PUBLICO_OBJETIVO', label: 'Público lector', placeholder: 'Lectores cultos / Especialistas', defaultValue: 'Líderes de producto, ingenieros y directores de operaciones' },
      { key: 'TONO', label: 'Tono', placeholder: 'Académico pero accesible', defaultValue: 'Culto, riguroso, analítico y elegante' }
    ],
    exampleUse: 'Escribir artículos de opinión para medios especializados o revistas de pensamiento.',
    expectedResult: 'Ensayo con solidez dialéctica que evita argumentos falaces o caricaturizaciones.',
    tips: ['El verdadero valor del ensayo reside en la fuerza del punto 2: no debilites al contrario.'],
    commonErrors: ['Atacar al emisor del argumento opuesto en vez de a sus premisas lógicas.'],
    accessLevel: 'experto',
    coinCost: 35,
    createdAt: '2025-01-20',
    usageCount: 2310,
    ratingScore: 4.8,
    author: 'PromptVerse Team'
  },
  {
    id: 'p-4',
    title: 'Guionista de Discursos Públicos con Retórica Clásica (Ethos, Pathos, Logos)',
    description: 'Escribe discursos persuasivos para inauguraciones, despedidas, convenciones o conferencias magistrales.',
    categoryId: 'cat-escritura',
    subcategory: 'Oratoria y Discursos',
    tags: ['Oratoria', 'Discurso', 'Retórica', 'Liderazgo'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Diseñar intervenciones habladas memorables con pausas calculadas y repeticiones anafóricas.',
    fullPrompt: `Actúa como Speechwriter de líderes internacionales. Escribe un discurso de [DURACION_MINUTOS] minutos para la ocasión: [OCASION_EVENTO].

Audiencia: [PERFIL_AUDIENCIA]
Mensaje nuclear inolvidable: [MENSAJE_CENTRAL]

Aplica la retórica de Aristóteles:
- ETHOS (0-20%): Credibilidad, humildad y conexión de valores con la audiencia.
- LOGOS (20-60%): Argumentos, lecciones prácticas y datos contraintuitivos.
- PATHOS (60-100%): Llamada emocional, esperanza colectiva y sentido de urgencia.

Añade anotaciones entre corchetes con indicaciones de locución: [Pausa de 2 segundos], [Bajar el tono de voz], [Contacto visual con la grada izquierda].`,
    variables: [
      { key: 'DURACION_MINUTOS', label: 'Duración estimada (minutos)', placeholder: '5 minutos', defaultValue: '6 minutos (unas 750 palabras)' },
      { key: 'OCASION_EVENTO', label: 'Ocasión o evento', placeholder: 'Cierre de convención anual...', defaultValue: 'Apertura de la convención anual de innovación tecnológica tras un año de grandes desafíos' },
      { key: 'PERFIL_AUDIENCIA', label: 'Perfil de la audiencia', placeholder: 'Empleados y colaboradores...', defaultValue: '500 empleados, ingenieros y socios inversores' },
      { key: 'MENSAJE_CENTRAL', label: 'Mensaje nuclear', placeholder: 'La perseverancia...', defaultValue: 'La tecnología solo tiene sentido si libera tiempo para la dignidad y creatividad humanas' }
    ],
    exampleUse: 'Preparar la ponencia de apertura de un congreso o la cena de fin de año de una empresa.',
    expectedResult: 'Texto con musicalidad oratoria, recursos poéticos medidos y pausas de respiración.',
    tips: ['Practica el ritmo con un cronómetro; las personas suelen hablar un 20% más rápido de lo que creen.'],
    commonErrors: ['Sobrecargar el discurso con listas interminables de cifras técnicas.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-22',
    usageCount: 1940,
    ratingScore: 4.9,
    author: 'Elena Morales'
  },
  {
    id: 'p-5',
    title: 'Editor y Corrector Ortotipográfico de Nivel Editorial Profesional',
    description: 'Revisa ortografía, puntuación, erratas sutiles, dobles espacios y concordancias según las normas de la RAE.',
    categoryId: 'cat-escritura',
    subcategory: 'Corrección Ortotipográfica',
    tags: ['RAE', 'Ortografía', 'Gramática', 'Corrección'],
    difficulty: 'Principiante',
    tools: ['Universal', 'ChatGPT', 'Claude'],
    objective: 'Detectar faltas sutiles que pasan inadvertidas para los correctores automáticos estándar.',
    fullPrompt: `Actúa como Corrector de Estilo y Ortotipógrafo editorial de primer nivel. Revisa el siguiente texto conforme a las normas académicas de la RAE:

Texto a corregir:
"""
[TEXTO_A_CORREGIR]
"""

Entrega el informe en 3 partes:
1. TEXTO CORREGIDO: Versión limpia e impecable lista para imprenta.
2. TABLA DE CAMBIOS:
   - Error detectado | Explicación gramatical o tipográfica | Norma académica aplicada.
3. SUGERENCIAS DE FLUIDEZ: 2 mejoras optativas para evitar cacofonías o dequeísmos sutiles.`,
    variables: [
      { key: 'TEXTO_A_CORREGIR', label: 'Texto a corregir', placeholder: 'Pega tu texto...', defaultValue: 'Hubieron muchos problemas durante el lanzamiento, es por eso que pienso de que deberiamos de revisar los numeros mas detalladamente a nivel de equipo.' }
    ],
    exampleUse: 'Revisión final de libros, tesis universitarias, notas de prensa y cartas formales.',
    expectedResult: 'Texto sin faltas ortográficas ni erratas tipográficas con justificación normativa.',
    tips: ['Presta especial atención a comillas latinas (« »), guiones largos (—) y cursivas.'],
    commonErrors: ['Aceptar correcciones que cambien el significado original de una frase técnica.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-25',
    usageCount: 3820,
    ratingScore: 4.9,
    author: 'Javier Roca'
  },
  {
    id: 'p-6',
    title: 'Especialista en Storytelling con el Viaje del Héroe para Marcas',
    description: 'Estructura la narrativa fundacional de una empresa o proyecto usando el monomito de Joseph Campbell.',
    categoryId: 'cat-escritura',
    subcategory: 'Storytelling Corporativo',
    tags: ['Storytelling', 'Marca', 'Narrativa', 'Campbell'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Transformar el origen de una empresa en una historia épica donde el cliente es el héroe y la marca es el mentor.',
    fullPrompt: `Actúa como Consultor Senior de Narrativa de Marca (Brand Storytelling). Construye la historia fundacional de [NOMBRE_MARCA] aplicando el Viaje del Héroe:

Datos del negocio:
- Qué hacemos: [ACTIVIDAD_NEGOCIO]
- Quién es el cliente (El Héroe): [CLIENTE_OBJETIVO]
- Cuál es su dragón/villano: [PROBLEMA_VILLANO]
- Qué herramienta mágica le damos: [SOLUCION_PRODUCTO]

Redacta la historia estructurada en:
1. EL MUNDO ORDINARIO DEL CLIENTE (El estado de frustración inicial).
2. LA LLAMADA A LA AVENTURA Y EL ENCUENTRO CON EL MENTOR ([NOMBRE_MARCA]).
3. EL PLAN MAESTRO Y EL CRUCE DEL UMBRAL.
4. LA VICTORIA DEFINITIVA Y LA TRANSFORMACIÓN (El antes y después emocional y económico).`,
    variables: [
      { key: 'NOMBRE_MARCA', label: 'Nombre de la marca', placeholder: 'Kairo Watches', defaultValue: 'EcoPack Solutions' },
      { key: 'ACTIVIDAD_NEGOCIO', label: 'Actividad del negocio', placeholder: 'Packaging biodegradable', defaultValue: 'Fabricación de embalajes 100% compostables a partir de fibras vegetales' },
      { key: 'CLIENTE_OBJETIVO', label: 'Cliente objetivo', placeholder: 'Tiendas online de moda', defaultValue: 'Dueños de marcas de e-commerce que quieren eliminar el plástico sin encarecer sus envíos' },
      { key: 'PROBLEMA_VILLANO', label: 'Villano o dolor', placeholder: 'El coste del plástico...', defaultValue: 'La culpa ecológica del packaging contaminante y la falta de alternativas resistentes' },
      { key: 'SOLUCION_PRODUCTO', label: 'Solución', placeholder: 'Sobres térmicos de algas...', defaultValue: 'Cajas autoplegables de fibra de cáñamo que se degradan en 45 días sin dejar residuos' }
    ],
    exampleUse: 'Redactar la página "Sobre Nosotros", presentaciones para inversores o cartas de bienvenida.',
    expectedResult: 'Narrativa emotiva y profesional que posiciona al cliente en el centro de la victoria.',
    tips: ['La marca nunca debe ser el héroe; la marca es Yoda, el cliente es Luke Skywalker.'],
    commonErrors: ['Hablar exclusivamente de características técnicas y premios de la empresa.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-27',
    usageCount: 2980,
    ratingScore: 4.8,
    author: 'Lucía Santamaría'
  },
  {
    id: 'p-7',
    title: 'Generador de Comunicados de Prensa para Medios de Comunicación',
    description: 'Redacta notas de prensa en formato periodístico clásico (titular, subtítulo, entradilla, cuerpo y boiler plate).',
    categoryId: 'cat-escritura',
    subcategory: 'Relaciones Públicas',
    tags: ['Prensa', 'PR', 'Periodismo', 'Comunicación'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude', 'Universal'],
    objective: 'Captar el interés de periodistas y editores de medios sectoriales sin parecer un folleto publicitario.',
    fullPrompt: `Actúa como Director de Relaciones Públicas y Ex-Periodista de agencia de noticias.

Redacta un Comunicado de Prensa profesional para difundir la siguiente noticia:
- Noticia: [NOTICIA_PRINCIPAL]
- Empresa / Emisor: [EMPRESA_EMISORA]
- Fecha y Lugar: [FECHA_LUGAR]
- Portavoz oficial y cargo: [PORTAVOZ_CARGO]

Estructura obligatoria de agencia:
1. TITULAR NOTICIOSO: Máximo 12 palabras, verbo activo, enfoque informativo (no publicitario).
2. SUBTÍTULO: Resumen de los 2 datos más relevantes.
3. ENTRADILLA (Lead periodístico): Responde a las 5 Ws (Qué, Quién, Cuándo, Dónde, Por qué) en el primer párrafo.
4. CUERPO DE LA NOTICIA: Con datos cuantitativos de contexto.
5. DECLARACIONES DEL PORTAVOZ (Cita entrecomillada con visión estratégica).
6. ACERCA DE (Boilerplate corporativo de 60 palabras) y datos de contacto de prensa.`,
    variables: [
      { key: 'NOTICIA_PRINCIPAL', label: 'Noticia principal', placeholder: 'Lanzamiento de...', defaultValue: 'Cierre de una ronda de financiación Serie A de 4,5 millones de euros para expandir operaciones en Europa' },
      { key: 'EMPRESA_EMISORA', label: 'Empresa', placeholder: 'Fintech X', defaultValue: 'SolarFlow Technologies' },
      { key: 'FECHA_LUGAR', label: 'Fecha y lugar', placeholder: 'Madrid, 15 de marzo', defaultValue: 'Madrid, 14 de mayo de 2026' },
      { key: 'PORTAVOZ_CARGO', label: 'Portavoz y cargo', placeholder: 'Ana Ruiz, CEO', defaultValue: 'Carlos Mendizábal, Consejero Delegado y Co-fundador' }
    ],
    exampleUse: 'Enviar a redactores de Expansión, Cinco Días, El Economista o medios tecnológicos.',
    expectedResult: 'Nota de prensa con formato estándar lista para su distribución a periodistas.',
    tips: ['Nunca utilices signos de exclamación en el titular de una nota de prensa seria.'],
    commonErrors: ['Redactar la nota como si fuera un anuncio de venta en lugar de un hecho informativo.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-30',
    usageCount: 2150,
    ratingScore: 4.9,
    author: 'Elena Morales'
  },

  // ==========================================
  // 2. MARKETING DIGITAL Y PUBLICIDAD (cat-marketing)
  // ==========================================
  {
    id: 'p-8',
    title: 'Arquitecto de Embudos de Venta y Copywriting AIDA Multicanal',
    description: 'Genera textos publicitarios para Meta Ads, Google Ads y páginas de aterrizaje con el marco psicológico de conversión.',
    categoryId: 'cat-marketing',
    subcategory: 'Copywriting de Respuesta Directa',
    tags: ['AIDA', 'Anuncios', 'Meta Ads', 'Conversión'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Escribir copies con ganchos disruptivos, desarrollo de dolor latente y llamada a la acción irresistible.',
    fullPrompt: `Actúa como Copywriter de Respuesta Directa de clase mundial. Crea una batería de textos publicitarios para:
- Producto: [PRODUCTO_SERVICIO]
- Público Objetivo: [PUBLICO_TARGET]
- Oferta / Gancho: [OFERTA_GANCHO]

Genera:
1. VERSIÓN AIDA (Atención con gancho contraintuitivo, Interés con datos/dolor, Deseo con transformación, Acción con urgencia ética).
2. VERSIÓN PAS (Problema real, Agitación del coste de inacción, Solución definitiva).
3. 5 TITULARES ALTERNATIVOS orientados a alto CTR clasificados por ángulo (Curiosidad, Prueba Social, Beneficio Directo, Miedo a Perder, Contraintuitivo).
4. SUGERENCIA CREATIVA: Qué imagen o vídeo de 5 segundos debe acompañar a cada copy.`,
    variables: [
      { key: 'PRODUCTO_SERVICIO', label: 'Producto o servicio', placeholder: 'Curso de finanzas...', defaultValue: 'Software SaaS para automatizar la facturación y conciliación bancaria de autónomos' },
      { key: 'PUBLICO_TARGET', label: 'Público objetivo', placeholder: 'Autónomos ocupados...', defaultValue: 'Autónomos y micropymes que pierden más de 5 horas a la semana ordenando facturas y tickets' },
      { key: 'OFERTA_GANCHO', label: 'Oferta o CTA', placeholder: 'Prueba gratis...', defaultValue: 'Prueba gratuita de 30 días sin tarjeta y migración de datos en 3 minutos' }
    ],
    exampleUse: 'Lanzar campañas de captación de leads en Facebook, Instagram y LinkedIn Ads.',
    expectedResult: 'Textos de alta persuasión listos para test A/B con descripciones visuales complementarias.',
    tips: ['El gancho debe prometer una recompensa cognitiva inmediata en las primeras 5 palabras.'],
    commonErrors: ['Describir características del software en lugar de los beneficios de tiempo ahorrado.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-12',
    usageCount: 4890,
    ratingScore: 4.9,
    author: 'Lucía Santamaría'
  },
  {
    id: 'p-9',
    title: 'Diseñador de Buyer Persona Psicológico con Matriz de Objeciones',
    description: 'Modela el perfil de cliente ideal analizando dolores ocultos, diálogos internos, miedos y criterios de compra.',
    categoryId: 'cat-marketing',
    subcategory: 'Investigación de Mercado',
    tags: ['Buyer Persona', 'Target', 'Psicología', 'Ventas'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Comprender la psicología profunda del comprador para afinar mensajes publicitarios y páginas de venta.',
    fullPrompt: `Actúa como Psicólogo del Consumidor y Director de Investigación de Mercados. Construye la ficha profunda de Buyer Persona para:
Sector y Producto: [PRODUCTO_O_INDUSTRIA]

Elabora el perfil con:
1. DATOS DEMOGRÁFICOS Y PSICOGRÁFICOS (Nombre ficticio, edad, rol laboral, valores vitales).
2. EL DIÁLOGO INTERNO A LAS 2 DE LA MADRUGADA (Qué pensamientos recurrentes le quitan el sueño respecto a este problema).
3. LOS 3 GRANDES DOLORES LATENTES (Lo que sufre pero no admite públicamente).
4. MATRIZ DE LAS 4 OBJECIONES DE COMPRA:
   - Objeción sobre el precio | Por qué la piensa | Cómo desactivarla con pruebas.
   - Objeción sobre el tiempo | Cómo desactivarla.
   - Objeción sobre la dificultad | Cómo desactivarla.
   - Objeción sobre la confianza ("¿me funcionará a mí?") | Cómo desactivarla.
5. VOCABULARIO EXACTO: 5 expresiones reales que esta persona utiliza al quejarse de su situación.`,
    variables: [
      { key: 'PRODUCTO_O_INDUSTRIA', label: 'Producto o industria', placeholder: 'SaaS de gestión...', defaultValue: 'Servicio de consultoría nutricional y entrenamiento online para directivos con poco tiempo' }
    ],
    exampleUse: 'Alinear a todo el equipo de ventas y marketing antes de escribir copys o diseñar landing pages.',
    expectedResult: 'Radiografía psicológica del cliente con argumentos concretos de persuasión.',
    tips: ['Usa las frases del punto 5 como titulares directos en tus páginas web.'],
    commonErrors: ['Limitar el buyer persona a datos fríos como "hombre de 35 años que vive en Madrid".'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-18',
    usageCount: 3410,
    ratingScore: 4.8,
    author: 'Lucía Santamaría'
  },
  {
    id: 'p-10',
    title: 'Estratega de Secuencias de Email Marketing de Bienvenida (Soap Opera Sequence)',
    description: 'Crea secuencias de 5 correos electrónicos automatizados con historias encadenadas de alta tasa de apertura.',
    categoryId: 'cat-marketing',
    subcategory: 'Email Marketing',
    tags: ['Email', 'Nutrición', 'Newsletter', 'Automatización'],
    difficulty: 'Avanzado',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Fidelizar suscriptores nuevos y convertirlos en clientes durante sus primeros 7 días en la lista.',
    fullPrompt: `Actúa como Maestro del Email Marketing aplicando la fórmula "Soap Opera Sequence" de Russell Brunson.
Escribe una secuencia automatizada de 5 emails para los nuevos suscriptores de [NOMBRE_NEGOCIO]:
- Qué regalo recibieron al suscribirse (Lead Magnet): [LEAD_MAGNET]
- Producto de pago que se venderá al final: [PRODUCTO_DE_PAGO]

Estructura de la secuencia:
- Email 1: El escenario y la entrega del regalo (fijar expectativas y pedir que respondan al email).
- Email 2: El drama del pasado y el momento de quiebre (vulnerabilidad y epifanía).
- Email 3: El gran descubrimiento (el principio que lo cambió todo).
- Email 4: Los beneficios ocultos y el caso de éxito de un tercero.
- Email 5: La llamada a la acción con urgencia ética y preguntas frecuentes.

Para cada email incluye:
- 3 opciones de Asunto de alto Open Rate.
- Texto completo del cuerpo con saltos de línea legibles para móviles.
- P.D. persuasiva que genere expectación para el email de mañana.`,
    variables: [
      { key: 'NOMBRE_NEGOCIO', label: 'Nombre del negocio', placeholder: 'Academia Digital', defaultValue: 'GrowthLab Academy' },
      { key: 'LEAD_MAGNET', label: 'Regalo de suscripción', placeholder: 'Plantilla en PDF...', defaultValue: 'Checklist con las 10 fugas de conversión que reducen las ventas de una tienda online' },
      { key: 'PRODUCTO_DE_PAGO', label: 'Producto a vender', placeholder: 'Curso intensivo de 290€', defaultValue: 'Masterclass intensiva con auditoría personalizada de ecommerce por 195€' }
    ],
    exampleUse: 'Configurar secuencias de bienvenida en ActiveCampaign, MailerLite o ConvertKit.',
    expectedResult: 'Secuencia completa de 5 emails redactados con suspense e intención comercial.',
    tips: ['La posdata (P.D.) es la segunda parte más leída de un correo tras el asunto; úsala para anticipar el siguiente mensaje.'],
    commonErrors: ['Vender agresivamente en el email 1 antes de ganarse la confianza del suscriptor.'],
    accessLevel: 'experto',
    coinCost: 40,
    createdAt: '2025-01-24',
    usageCount: 2650,
    ratingScore: 4.9,
    author: 'Lucía Santamaría'
  },
  {
    id: 'p-11',
    title: 'Auditor de Páginas de Aterrizaje (Landing Pages) y Optimización CRO',
    description: 'Evalúa la jerarquía visual, propuesta de valor, fricción de formularios y pruebas sociales de una landing page.',
    categoryId: 'cat-marketing',
    subcategory: 'Optimización de Conversión (CRO)',
    tags: ['CRO', 'Landing Page', 'Conversión', 'UX'],
    difficulty: 'Intermedio',
    tools: ['Claude', 'ChatGPT'],
    objective: 'Elevar la tasa de conversión porcentual de una página web analizando puntos de fuga.',
    fullPrompt: `Actúa como Consultor Senior de CRO (Conversion Rate Optimization). Analiza el siguiente texto y estructura de mi página de aterrizaje:

Contenido de la Landing:
"""
[TEXTO_LANDING_PAGE]
"""

Realiza la auditoría en 4 bloques:
1. TEST DE LOS 5 SEGUNDOS: ¿Un visitante comprende qué vendes, para quién es y por qué debería importarle antes de hacer scroll?
2. EVALUACIÓN DE ELEMENTOS CLAVE:
   - Claridad del titular y subtítulo.
   - Fuerza de la prueba social (testimonios, logotipos, cifras).
   - Nivel de fricción en la llamada a la acción (CTA).
3. 3 ERRORES CRÍTICOS QUE ESTÁN FUGANDO CONVERSIONES.
4. VERSIÓN REESCRITA Y MEJORADA DEL HERO SECTION (Titular, Subtítulo, Bullet Points y Botón).`,
    variables: [
      { key: 'TEXTO_LANDING_PAGE', label: 'Texto de la landing a auditar', placeholder: 'Pega el texto de tu página...', defaultValue: 'Bienvenido a nuestra plataforma. Somos líderes en soluciones empresariales integrales para optimizar tus procesos con la mejor tecnología del mercado. Solicita información rellenando 12 campos.' }
    ],
    exampleUse: 'Optimizar landing pages de captura antes de invertir presupuesto en Google Ads.',
    expectedResult: 'Diagnóstico severo y accionable con propuesta de redacción orientada a conversión.',
    tips: ['Reduce los campos de los formularios; cada campo adicional reduce la tasa de conversión entre un 5% y un 10%.'],
    commonErrors: ['Usar llamadas a la acción genéricas como "Enviar" en lugar de verbos de beneficio como "Quiero mi guía gratis".'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-29',
    usageCount: 3120,
    ratingScore: 5.0,
    author: 'PromptVerse Team'
  },
  {
    id: 'p-12',
    title: 'Estratega de Campañas de Google Search Ads con Términos Negativos',
    description: 'Estructura grupos de anuncios con concordancia exacta y amplia modificada, extensiones y lista de palabras negativas.',
    categoryId: 'cat-marketing',
    subcategory: 'Publicidad PPC / Google Ads',
    tags: ['Google Ads', 'SEM', 'PPC', 'Palabras Negativas'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Maximizar el Quality Score de los anuncios en Google y reducir el Coste Por Adquisición (CPA).',
    fullPrompt: `Actúa como Especialista Certificado en Google Ads (Search). Diseña la campaña para:
- Servicio a publicitar: [SERVICIO_PRODUCTO]
- Localización geográfica: [UBICACION]
- Presupuesto mensual objetivo: [PRESUPUESTO]

Entrega:
1. ARQUITECTURA DE GRUPOS DE ANUNCIOS (Mínimo 2 grupos temáticos bien diferenciados).
2. KEYWORDS SELECCIONADAS (Concordancia de frase "[keyword]" y exacta "[keyword]").
3. 3 ANUNCIOS ADAPTABLES DE BÚSQUEDA (RSA):
   - 10 títulos de alto CTR (hasta 30 caracteres).
   - 4 descripciones persuasivas (hasta 90 caracteres).
4. LISTA DE 20 PALABRAS CLAVE NEGATIVAS para evitar clics basura (p. ej. "gratis", "cursos", "empleo", "definición", etc.).
5. RECOMENDACIÓN DE EXTENSIONES (Enlaces de sitio, texto destacado y llamada).`,
    variables: [
      { key: 'SERVICIO_PRODUCTO', label: 'Servicio o producto', placeholder: 'Clínica dental...', defaultValue: 'Instalación de paneles solares para viviendas unifamiliares' },
      { key: 'UBICACION', label: 'Ubicación geográfica', placeholder: 'Comunidad de Madrid', defaultValue: 'Comunidad de Madrid y provincias limítrofes' },
      { key: 'PRESUPUESTO', label: 'Presupuesto mensual', placeholder: '1.500€/mes', defaultValue: '1.200€ al mes' }
    ],
    exampleUse: 'Montar campañas de Google Ads que capten clientes con intención de compra inmediata.',
    expectedResult: 'Estructura completa de campaña lista para importar en Google Ads Editor.',
    tips: ['La lista de palabras negativas ahorra habitualmente entre el 20% y el 40% del presupuesto publicitario.'],
    commonErrors: ['Usar concordancia amplia sin supervisión diaria de los términos de búsqueda.'],
    accessLevel: 'experto',
    coinCost: 35,
    createdAt: '2025-02-02',
    usageCount: 2210,
    ratingScore: 4.8,
    author: 'Lucía Santamaría'
  },
  {
    id: 'p-13',
    title: 'Creador de Estrategias de Marketing de Afiliación y Programas de Referidos',
    description: 'Diseña la estructura de comisiones, kit de recursos para afiliados y reglas de atribución para escalar ventas.',
    categoryId: 'cat-marketing',
    subcategory: 'Afiliados y Partnerships',
    tags: ['Afiliados', 'Referidos', 'Growth', 'Partnerships'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Reclutar prescriptores y creadores de contenido que promocionen tu producto a cambio de una comisión por venta.',
    fullPrompt: `Actúa como Director de Growth y Especialista en Marketing de Afiliación.
Diseña el programa de afiliados para: [PRODUCTO_SERVICIO]
Precio de venta y márgenes: [PRECIO_MARGEN]

Entrega:
1. ESTRUCTURA DE COMISIONES (Porcentaje o importe fijo, modelos por tramos para top performers y periodo de cookie de seguimiento de 30 a 60 días).
2. EL KIT DE HERRAMIENTAS PARA EL AFILIADO (Banners recomendados, 3 copys de email preparados, enlaces profundos y ganchos de conversión).
3. GUION DE CORREO EN FRÍO para contactar a creadores e influencers del nicho proponiéndoles unirse.
4. POLÍTICA DE CUMPLIMIENTO Y PROTECCIÓN DE MARCA (Prohibición de pujar por la marca propia en Google Ads, spam o claims falsos).`,
    variables: [
      { key: 'PRODUCTO_SERVICIO', label: 'Producto o servicio', placeholder: 'SaaS de diseño...', defaultValue: 'Software SaaS de suscripción recurrente para academias online (99€/mes)' },
      { key: 'PRECIO_MARGEN', label: 'Precio y margen', placeholder: '99€/mes con 80% margen', defaultValue: '99€ al mes con margen bruto del 85%' }
    ],
    exampleUse: 'Lanzar un canal de adquisición que solo genera costes cuando se produce una venta efectiva.',
    expectedResult: 'Programa de afiliados estructurado con términos legales, incentivos y kit promocional.',
    tips: ['Las comisiones recurrentes (p. ej. 20% mensual mientras el cliente siga activo) son las más atractivas para afiliados de calidad.'],
    commonErrors: ['No establecer reglas estrictas sobre el uso del nombre de marca en motores de búsqueda.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-02-05',
    usageCount: 1870,
    ratingScore: 4.8,
    author: 'Lucía Santamaría'
  },
  {
    id: 'p-14',
    title: 'Generador de Comunicaciones de Gestión de Crisis de Marca y Reputación Online',
    description: 'Redacta respuestas institucionales rápidas, sinceras y asertivas ante una oleada de críticas o fallo en el servicio.',
    categoryId: 'cat-marketing',
    subcategory: 'Gestión de Crisis',
    tags: ['Crisis', 'PR', 'Reputación', 'Comunicación'],
    difficulty: 'Master',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Contener daños de reputación asumiendo responsabilidades con transparencia sin exponer a la empresa a litigios innecesarios.',
    fullPrompt: `Actúa como Consultor de Gestión de Crisis de Reputación Corporativa.
Se ha producido el siguiente incidente en nuestra empresa:
Incidente: [INCIDENTE_CRISIS]
Impacto público: [IMPACTO_PUBLICO]

Prepara la suite de respuesta inmediata:
1. MENSAJE EN REDES SOCIALES (Twitter / LinkedIn / Instagram): Máximo 280 caracteres, reconocimiento del hecho, empatía sin evasivas y canal oficial de actualización.
2. COMUNICADO DETALLADO POR EMAIL para los clientes directamente afectados (Explicación transparente, causas, medidas correctivas inmediatas y compensación ofrecida).
3. GUION DE PREGUNTAS Y RESPUESTAS (Q&A) para el equipo de atención al cliente y soporte telefónico con las 4 preguntas más hostiles esperadas.`,
    variables: [
      { key: 'INCIDENTE_CRISIS', label: 'Incidente o problema', placeholder: 'Caída de servidores...', defaultValue: 'Fuga de datos de direcciones de email por una vulnerabilidad en un plugin de terceros y caída de la web durante 6 horas' },
      { key: 'IMPACTO_PUBLICO', label: 'Impacto público', placeholder: 'Cientos de quejas en X...', defaultValue: 'Afectó a unos 12.000 usuarios; hay debate intenso en X y medios tecnológicos empezando a reportarlo' }
    ],
    exampleUse: 'Desactivar incendios de reputación en las primeras 2 horas tras un fallo técnico o comercial.',
    expectedResult: 'Protocolo de comunicación sobrio, humano y empático que frena el pánico y protege la marca.',
    tips: ['Nunca culpes a terceros ni a los usuarios en el primer comunicado público.'],
    commonErrors: ['Borrar los comentarios negativos en redes sociales, lo que suele multiplicar el efecto Streisand.'],
    accessLevel: 'master',
    coinCost: 75,
    isMaster: true,
    createdAt: '2025-02-10',
    usageCount: 1420,
    ratingScore: 5.0,
    author: 'Elena Morales'
  },

  // ==========================================
  // 3. REDES SOCIALES Y CREACIÓN DE CONTENIDO (cat-redes)
  // ==========================================
  {
    id: 'p-15',
    title: 'Estratega de Hilos Virales para X (Twitter) con Retención y Curiosidad',
    description: 'Transforma conceptos técnicos o lecciones de negocio en hilos de 7 a 10 tuits optimizados para retuits y marcadores.',
    categoryId: 'cat-redes',
    subcategory: 'Hilos y Microblogging',
    tags: ['X', 'Twitter', 'Hilos', 'Viralidad'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Maximizar el alcance orgánico en X educando a la audiencia con formato de alta retención.',
    fullPrompt: `Actúa como Creador de Contenido y Ghostwriter de élite en X (Twitter).
Crea un hilo viral de 8 tuits sobre el siguiente tema: [TEMA_DEL_HILO]
Audiencia: [AUDIENCIA]

Estructura obligatoria tuit a tuit:
- Tuit 1 (Gancho): Máximo 220 caracteres. Promesa contraintuitiva, dolor agudo o cifra asombrosa. Cierra con "Dentro hilo 🧵👇".
- Tuits 2 a 6 (Desarrollo): Cada tuit debe ser una píldora atómica de valor. Frases cortas, saltos de línea dobles, cero adjetivos vacíos.
- Tuit 7 (Resumen visual): Lista numerada con los 5 puntos clave para que la gente guarde el tuit en "Marcadores".
- Tuit 8 (Cierre): Pregunta reflexiva para abrir conversación y llamada a seguir la cuenta.`,
    variables: [
      { key: 'TEMA_DEL_HILO', label: 'Tema del hilo', placeholder: '10 herramientas de IA...', defaultValue: 'Por qué las mejores startups ya no contratan por títulos universitarios sino por proyectos públicos y cómo construir tu portfolio' },
      { key: 'AUDIENCIA', label: 'Audiencia', placeholder: 'Jóvenes programadores...', defaultValue: 'Desarrolladores, diseñadores y profesionales digitales jóvenes' }
    ],
    exampleUse: 'Publicar contenido semanal en X para ganar seguidores cualificados y posicionarse como referente.',
    expectedResult: 'Hilo con gancho magnético, formato aireado y alta tasa de retención.',
    tips: ['Pon la idea más sorprendente en el Tuit 2 para evitar que la gente abandone tras el gancho.'],
    commonErrors: ['Escribir bloques de texto apelotonados sin saltos de línea.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-14',
    usageCount: 4120,
    ratingScore: 4.9,
    author: 'Sergio Navarro'
  },
  {
    id: 'p-16',
    title: 'Diseñador de Carruseles Educativos para LinkedIn e Instagram',
    description: 'Planifica diapositiva a diapositiva carruseles PDF de alto guardado con diagramas y contrastes visuales.',
    categoryId: 'cat-redes',
    subcategory: 'Carruseles y Formato Visual',
    tags: ['LinkedIn', 'Instagram', 'Carruseles', 'Infografías'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Multiplicar la métrica de "Guardados" en LinkedIn e Instagram aportando esquemas didácticos.',
    fullPrompt: `Actúa como Estratega de Contenidos Visuales en LinkedIn e Instagram.
Diseña el guión completo de un carrusel de 8 diapositivas (slides) sobre: [TEMA_CARRUSEL]

Para cada diapositiva especifica:
- [TEXTO PRINCIPAL]: Frase contundente de menos de 15 palabras.
- [TEXTO SECUNDARIO]: Explicación breve de 2 líneas.
- [DISEÑO VISUAL SUGERIDO]: Icono, esquema, contraste de colores o metáfora visual para el diseñador en Figma/Canva.

Estructura:
- Slide 1: Portada con título de gran impacto visual.
- Slide 2: El error común que comete el 90% de la gente.
- Slides 3 a 6: El marco de solución en 4 pasos progresivos.
- Slide 7: Resumen visual de la hoja de ruta en una sola gráfica.
- Slide 8: Llamada a la acción clara (Guarda este post para revisarlo luego y comenta tu opinión).`,
    variables: [
      { key: 'TEMA_CARRUSEL', label: 'Tema del carrusel', placeholder: 'Gestión del tiempo...', defaultValue: 'Los 4 principios de Arquitectura Limpia que todo desarrollador frontend debería aplicar' }
    ],
    exampleUse: 'Crear documentos PDF para LinkedIn y carruseles de imágenes para Instagram.',
    expectedResult: 'Desglose diapositiva por diapositiva listo para maquetar en herramientas de diseño.',
    tips: ['El 70% del éxito de un carrusel depende exclusivamente de la portada (Slide 1); dedícale tiempo.'],
    commonErrors: ['Llenar las diapositivas con párrafos enteros ilegibles en pantallas móviles.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-21',
    usageCount: 3540,
    ratingScore: 4.9,
    author: 'Sergio Navarro'
  },
  {
    id: 'p-17',
    title: 'Planificador de Calendario Editorial Mensual de 30 Días con Pilares de Contenido',
    description: 'Genera una matriz mensual de publicaciones balanceando atracción, autoridad, empatía y venta.',
    categoryId: 'cat-redes',
    subcategory: 'Estrategia y Calendarios',
    tags: ['Calendario', 'Estrategia', 'Redes', 'Planificación'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Eliminar el bloqueo creativo diario planificando un mes entero de publicaciones con propósito estratégico.',
    fullPrompt: `Actúa como Social Media Manager Senior y Estratega de Contenidos.
Diseña un Calendario Editorial para 4 semanas (Lunes a Viernes, 20 publicaciones) para:
- Marca / Creador: [MARCA_CREADOR]
- Nicho / Especialidad: [NICHO_ESPECIALIDAD]
- Redes principales: [REDES_PRINCIPALES]

Aplica la regla de los 4 Pilares de Contenido:
- Pilar 1: AUTORIDAD (Tutoriales profundos, estudios de caso, metodologías).
- Pilar 2: ATRACCIÓN (Opiniones contraintuitivas, debates, tendencias).
- Pilar 3: EMPATÍA (Errores cometidos, lecciones personales, detrás de escena).
- Pilar 4: CONVERSIÓN (Testimonios, ofertas, llamadas directas al producto).

Entrega una tabla Markdown con:
Día | Red | Pilar | Idea de Titular / Gancho | Formato (Vídeo corto / Carrusel / Texto / Encuesta) | Objetivo concreto.`,
    variables: [
      { key: 'MARCA_CREADOR', label: 'Nombre o perfil', placeholder: 'Mi estudio...', defaultValue: 'Estudio de Consultoría de Ciberseguridad' },
      { key: 'NICHO_ESPECIALIDAD', label: 'Nicho o especialidad', placeholder: 'Seguridad en pymes...', defaultValue: 'Ciberseguridad práctica, prevención de phishing y cumplimiento normativo para pymes' },
      { key: 'REDES_PRINCIPALES', label: 'Redes sociales', placeholder: 'LinkedIn y X', defaultValue: 'LinkedIn y YouTube Shorts' }
    ],
    exampleUse: 'Organizar la producción de contenidos del mes de forma metódica y predecible.',
    expectedResult: 'Tabla estructurada con 20 ideas ordenadas estratégicamente por pilar.',
    tips: ['Agrupa la grabación y redacción por bloques semanales (Batching) para no perder el foco.'],
    commonErrors: ['Hacer publicaciones exclusivamente de venta, lo que marchita el alcance orgánico.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-26',
    usageCount: 3890,
    ratingScore: 5.0,
    author: 'Sergio Navarro'
  },
  {
    id: 'p-18',
    title: 'Guionista de Publicaciones de Autoridad para LinkedIn (Thought Leadership)',
    description: 'Redacta reflexiones profesionales de alto calibre que despiertan debates cualificados entre directivos.',
    categoryId: 'cat-redes',
    subcategory: 'LinkedIn & Marca B2B',
    tags: ['LinkedIn', 'B2B', 'Thought Leadership', 'Liderazgo'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Generar oportunidades comerciales B2B compartiendo casos de negocio reales con tono humilde y perspicaz.',
    fullPrompt: `Actúa como Ghostwriter de altos directivos tecnológicos en LinkedIn. Redacta un post sobre la lección: [LECCION_PROFESIONAL]
Contexto y datos reales: [DATOS_CONTEXTO]

Reglas estrictas de formato:
1. Primera línea (Gancho): Menos de 9 palabras que provoquen curiosidad sin caer en el clickbait vulgar.
2. Salto de línea antes del "...ver más" de LinkedIn.
3. Ritmo ágil: oraciones de 1 a 2 líneas.
4. Desarrolla la anécdota con datos concretos y admite el fallo o la duda inicial.
5. 3 conclusiones prácticas enumeradas que el lector pueda aplicar hoy mismo en su trabajo.
6. Cierre con pregunta constructiva que invite a los colegas del sector a compartir su experiencia en comentarios.
7. Cero hashtags vacíos (máximo 2 etiquetas relevantes al final).`,
    variables: [
      { key: 'LECCION_PROFESIONAL', label: 'Lección o principio', placeholder: 'Rechazar proyectos tóxicos...', defaultValue: 'Cómo duplicamos el rendimiento del equipo reduciendo las reuniones de 1 hora a síncronas de 15 minutos' },
      { key: 'DATOS_CONTEXTO', label: 'Contexto real', placeholder: 'Equipo de 15 personas...', defaultValue: 'Equipo de 18 ingenieros que pasaba 14 horas semanales en videollamadas con sensación de saturación' }
    ],
    exampleUse: 'Publicar semanalmente en LinkedIn para atraer talento, clientes e invitaciones a eventos.',
    expectedResult: 'Post con redacción impecable, alta retención y comentarios argumentados.',
    tips: ['La honestidad sobre los errores propios genera 10 veces más conexión que presumir de éxitos.'],
    commonErrors: ['Etiquetar a 20 personas en el post para forzar impresiones; el algoritmo lo penaliza.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-28',
    usageCount: 4210,
    ratingScore: 4.9,
    author: 'Sergio Navarro'
  },
  {
    id: 'p-19',
    title: 'Estratega de Crecimiento en TikTok para Marcas Educativas y Profesionales',
    description: 'Estructura vídeos pedagógicos de 60 segundos que convierten visualizaciones en seguidores cualificados.',
    categoryId: 'cat-redes',
    subcategory: 'Vídeo Vertical & TikTok',
    tags: ['TikTok', 'Educación', 'Crecimiento', 'Vídeo'],
    difficulty: 'Intermedio',
    tools: ['ChatGPT', 'Claude'],
    objective: 'Aprovechar el algoritmo de recomendación de TikTok para enseñar conceptos profesionales de forma dinámica.',
    fullPrompt: `Actúa como Estratega de Crecimiento en TikTok y Reels para cuentas educativas y profesionales.
Diseña el guión para un vídeo de 60 segundos sobre: [TEMA_CONCEPTUAL]
Target: [PERFIL_TARGET]

Estructura por segundos:
- 0 a 3s (Gancho visual y sonoro): Acción física frente a la cámara o frase contraintuitiva.
- 3 a 15s (El problema invisibilizado): "La mayoría cree que X, pero en realidad ocurre Y...".
- 15 a 45s (La solución en 3 pasos rápidos): Cada paso con texto grande en pantalla y cambio de plano.
- 45 a 55s (La trampa a evitar): Un detalle que casi todos hacen mal.
- 55 a 60s (Llamada a la acción interactiva): "Comenta tu caso y te respondo en el próximo vídeo".`,
    variables: [
      { key: 'TEMA_CONCEPTUAL', label: 'Concepto a explicar', placeholder: 'Cómo negociar el sueldo...', defaultValue: 'El truco psicológico para pedir un aumento de sueldo basándote en valor medible y no en necesidad' },
      { key: 'PERFIL_TARGET', label: 'Público target', placeholder: 'Jóvenes empleados...', defaultValue: 'Profesionales jóvenes de 24 a 34 años en su segundo o tercer empleo' }
    ],
    exampleUse: 'Construir una audiencia masiva en TikTok e Instagram Reels sin bailar ni perder profesionalidad.',
    expectedResult: 'Guión detallado con acotaciones visuales y de texto en pantalla.',
    tips: ['El texto en pantalla ayuda a retener a más del 60% de los usuarios que consumen vídeos sin auriculares en el transporte.'],
    commonErrors: ['Empezar presentándote: "Hola, me llamo Carlos y hoy te voy a hablar de...". La gente ya habrá deslizado.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-02-01',
    usageCount: 2980,
    ratingScore: 4.8,
    author: 'Sergio Navarro'
  },
  {
    id: 'p-20',
    title: 'Optimizador de Biografías y Perfiles de Redes Sociales para Conversión',
    description: 'Redacta biografías para LinkedIn, Instagram y X que explican en 3 segundos quién eres y qué puedes hacer por el lector.',
    categoryId: 'cat-redes',
    subcategory: 'Optimización de Perfiles',
    tags: ['Bio', 'Perfil', 'Marca Personal', 'Conversión'],
    difficulty: 'Principiante',
    tools: ['Universal', 'ChatGPT', 'Claude'],
    objective: 'Convertir las visitas esporádicas a tu perfil en seguidores y contactos de negocio cualificados.',
    fullPrompt: `Actúa como Consultor de Marca Personal y Optimización de Perfiles.
Optimiza la biografía de mi perfil para [PLATAFORMA_RED_SOCIAL].

Mis datos profesionales:
- Mi profesión / actividad: [ACTIVIDAD_PROFESIONAL]
- A quién ayudo: [CLIENTE_A_QUIEN_AYUDO]
- Mi gran logro o prueba social: [LOGRO_PRUEBA_SOCIAL]
- Enlace o llamada a la acción final: [ENLACE_CTA]

Genera:
1. 3 VARIANTES DE BIOGRAFÍA (Opción directa, opción orientada a autoridad y opción conversacional).
2. Estructura de fórmula probada: "Ayudo a [X] a conseguir [Y] sin [Z]".
3. Sugerencia de titular complementario y foto de portada recomendada.`,
    variables: [
      { key: 'PLATAFORMA_RED_SOCIAL', label: 'Plataforma', placeholder: 'LinkedIn / Instagram / X', defaultValue: 'LinkedIn e Instagram' },
      { key: 'ACTIVIDAD_PROFESIONAL', label: 'Actividad', placeholder: 'Desarrollador web...', defaultValue: 'Diseñador UI/UX especializado en interfaces SaaS y diseño con sistemas de diseño' },
      { key: 'CLIENTE_A_QUIEN_AYUDO', label: 'A quién ayudas', placeholder: 'Startups tecnológicas...', defaultValue: 'Startups en fase semilla que necesitan convertir maquetas en productos usables' },
      { key: 'LOGRO_PRUEBA_SOCIAL', label: 'Logro o credencial', placeholder: '+50 apps diseñadas...', defaultValue: '+40 productos diseñados que han levantado más de 10M€ en rondas de financiación' },
      { key: 'ENLACE_CTA', label: 'Enlace / CTA', placeholder: 'Ver portfolio...', defaultValue: 'Agenda una llamada de diagnóstico de 15 min en mi portfolio' }
    ],
    exampleUse: 'Renovar el perfil de redes sociales para captar clientes de consultoría o conseguir entrevistas de trabajo.',
    expectedResult: 'Biografías claras, sintéticas y magnéticas adaptadas a los límites de caracteres de cada red.',
    tips: ['Elimina títulos pomposos como "Visionario digital" o "Apasionado del cambio"; describe resultados tangibles.'],
    commonErrors: ['Dejar la biografía vacía o sin un enlace directo a tu trabajo.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-02-04',
    usageCount: 2450,
    ratingScore: 4.8,
    author: 'PromptVerse Team'
  },

  // ==========================================
  // 4. GENERACIÓN DE IMÁGENES MEDIANTE IA (cat-imagenes)
  // ==========================================
  {
    id: 'p-21',
    title: 'Director de Fotografía Cinematográfica para Midjourney v6 y FLUX',
    description: 'Genera descripciones visuales cinematográficas con parámetros ópticos de 35mm, lentes anamórficas y luz Rembrandt.',
    categoryId: 'cat-imagenes',
    subcategory: 'Fotografía Hiperrealista',
    tags: ['Midjourney', 'FLUX', 'Fotografía', 'Cinematografía'],
    difficulty: 'Intermedio',
    tools: ['Midjourney', 'Universal'],
    objective: 'Obtener imágenes con textura de piel fidedigna, bokeh realista y sin el aspecto plástico de la IA.',
    fullPrompt: `Actúa como Director de Fotografía Cinematográfica y Maestro del Prompting en Midjourney v6.1 y FLUX.1.
Diseña el prompt optimizado para recrear la escena:
Sujeto y Acción: [SUJETO_ACCION]
Entorno: [ENTORNO_ESCENA]
Atmósfera y Paleta de Color: [ATMOSFERA_COLOR]

Estructura del prompt de entrega (en inglés técnico para máxima precisión en el modelo):
1. MAIN SUBJECT & ACTION (Detalles precisos de vestimenta, textura de piel y expresión facial genuina).
2. LIGHTING SETUP (Tipo de iluminación: p. ej. Chiaroscuro side lighting, soft diffused morning sunlight, rim light de neón sutil).
3. CAMERA & OPTICS (Lente milimétrica: p. ej. 85mm f/1.4 lens, Hasselblad medium format, Kodak Portra 400 film grain, shutter speed 1/500s).
4. COMPOSITION (Regla de los tercios, contrapicado cinematográfico, profundidad de campo con bokeh cremoso).
5. PARÁMETROS TÉCNICOS: --ar [ASPECT_RATIO] --v 6.1 --style raw --stylize 120`,
    variables: [
      { key: 'SUJETO_ACCION', label: 'Sujeto y acción', placeholder: 'Un anciano artesano...', defaultValue: 'Un botánico investigador de 45 años examinando cuidadosamente una orquídea silvestre bioluminiscente en una mesa de madera rústica' },
      { key: 'ENTORNO_ESCENA', label: 'Entorno', placeholder: 'Invernadero antiguo...', defaultValue: 'Un invernadero victoriano con cristales empañados por la humedad y plantas trepadoras' },
      { key: 'ATMOSFERA_COLOR', label: 'Atmósfera y color', placeholder: 'Mística, tonos verdes...', defaultValue: 'Íntima y científica, paleta verde bosque profundo con acentos dorados cálidos de lámpara de tungsteno' },
      { key: 'ASPECT_RATIO', label: 'Aspect ratio (--ar)', placeholder: '16:9, 21:9', defaultValue: '16:9' }
    ],
    exampleUse: 'Crear recursos fotográficos de portada para artículos, carátulas de documentales o campañas de branding.',
    expectedResult: 'Prompt en inglés técnico depurado listo para pegar en Midjourney o FLUX.',
    tips: ['El parámetro --style raw reduce la saturación automática y aporta texturas de poros mucho más verídicas.'],
    commonErrors: ['Usar palabras comodín como "photorealistic, hyperrealistic 8k", que los modelos modernos ignoran.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-11',
    usageCount: 5410,
    ratingScore: 5.0,
    author: 'Clara Domínguez'
  },
  {
    id: 'p-22',
    title: 'Generador de Mockups de Producto y Packaging Minimalista de Lujo',
    description: 'Crea renders limpios de botellas, cajas cosméticas y productos sobre superficies de mármol o piedra travertino.',
    categoryId: 'cat-imagenes',
    subcategory: 'Product Photography',
    tags: ['Packaging', 'Mockup', 'E-commerce', 'Fotografía'],
    difficulty: 'Intermedio',
    tools: ['Midjourney', 'DALL-E 3'],
    objective: 'Producir fotografías de producto para tiendas online y catálogos de lujo sin coste de estudio fotográfico.',
    fullPrompt: `Diseña un prompt fotográfico de estudio publicitario para crear el mockup de:
Producto: [TIPO_PRODUCTO]
Material del envase: [MATERIAL_ENVASE]
Superficie de apoyo: [SUPERFICIE_FONDO]

El prompt debe incluir:
- Composición de fotografía comercial de revista de diseño (Vogue / Kinfolk).
- Disposición frontal o cenital sobria (straight-on studio shot).
- Iluminación suave de caja de luz (softbox studio lighting) con sombras tenues y degradadas.
- Superficie neutra minimalista con elementos botánicos secos desenfocados en segundo plano.
- Especificación anti-distorsión en inglés: "clean blank unbranded packaging mockup, hyper-detailed texture, minimalist luxury cosmetic aesthetic, no text, clean reflections, 85mm macro lens".
- Parámetros finales para la herramienta elegida.`,
    variables: [
      { key: 'TIPO_PRODUCTO', label: 'Tipo de producto', placeholder: 'Frasco de perfume...', defaultValue: 'Frasco de vidrio ámbar de aceite facial con gotero de madera oscura' },
      { key: 'MATERIAL_ENVASE', label: 'Material del envase', placeholder: 'Vidrio mate...', defaultValue: 'Vidrio esmerilado mate ámbar con tapón cuentagotas de madera de nogal' },
      { key: 'SUPERFICIE_FONDO', label: 'Superficie de fondo', placeholder: 'Piedra travertino...', defaultValue: 'Bloque de piedra caliza travertino natural sobre fondo gris topo suave' }
    ],
    exampleUse: 'Crear imágenes promocionales para marcas de cosmética, perfumería o alimentos gourmet.',
    expectedResult: 'Imagen de catálogo de alta costura con iluminación suave de estudio.',
    tips: ['Pide "blank unbranded" para que la IA no invente logotipos deformes; luego añade tu logo en Photoshop o Figma.'],
    commonErrors: ['Sobrecargar la escena con demasiados objetos secundarios que distraen del producto.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-19',
    usageCount: 3120,
    ratingScore: 4.8,
    author: 'Clara Domínguez'
  },
  {
    id: 'p-23',
    title: 'Generador de Ilustraciones Vectoriales y Flat Art Moderno para Startups',
    description: 'Produce ilustraciones corporativas limpias para sitios web SaaS, páginas 404, onboarding y presentaciones.',
    categoryId: 'cat-imagenes',
    subcategory: 'Ilustración Digital',
    tags: ['Vector', 'Flat Art', 'SaaS', 'UI'],
    difficulty: 'Principiante',
    tools: ['Midjourney', 'DALL-E 3', 'Universal'],
    objective: 'Crear ilustraciones coherentes para productos digitales con estilo gráfico sobrio y profesional.',
    fullPrompt: `Crea un prompt para generar una ilustración editorial moderna estilo tech startup:
Concepto a ilustrar: [CONCEPTO_ILUSTRACION]
Paleta cromática: [PALETA_CROMATICA]

Directrices de estilo:
- Estilo: "Modern minimalist flat vector illustration, clean lines, editorial tech aesthetic, subtle gradients, Bauhaus-inspired geometric accents".
- Personajes estilizados con proporciones elegantes realizando la acción de forma clara.
- Fondo blanco o gris neutro limpio (#F8FAFC) sin sombras pesadas para facilitar el recorte con transparencia.
- Cero elementos 3D brillantes o aspecto infantil; composición plana y madura.
- Parámetros técnicos recomendados.`,
    variables: [
      { key: 'CONCEPTO_ILUSTRACION', label: 'Concepto a ilustrar', placeholder: 'Colaboración en la nube...', defaultValue: 'Dos profesionales analizando gráficos de datos holográficos flotantes colaborando en remoto' },
      { key: 'PALETA_CROMATICA', label: 'Paleta cromática', placeholder: 'Azul y violeta...', defaultValue: 'Violeta eléctrico, azul índigo profundo y acentos en verde menta sobre fondo claro' }
    ],
    exampleUse: 'Ilustrar pantallas de bienvenida de apps móviles o cabeceras de blogs corporativos.',
    expectedResult: 'Ilustración vectorial moderna, limpia y fácilmente integrable en cualquier web.',
    tips: ['Indicar "isolated on pure white background" facilita eliminar el fondo en un solo clic.'],
    commonErrors: ['Permitir que la IA mezcle estilos 3D plastificados con 2D plano en la misma imagen.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-23',
    usageCount: 2890,
    ratingScore: 4.9,
    author: 'Clara Domínguez'
  },
  {
    id: 'p-24',
    title: 'Diseñador de Arquitectura de Interiores y Renderizado Fotorrealista',
    description: 'Crea espacios habitables con diseño escandinavo, industrial o mediterráneo respetando proporciones reales.',
    categoryId: 'cat-imagenes',
    subcategory: 'Arquitectura e Interiores',
    tags: ['Arquitectura', 'Interiores', 'Render', 'Diseño'],
    difficulty: 'Intermedio',
    tools: ['Midjourney', 'FLUX'],
    objective: 'Generar conceptos de decoración y diseño de espacios interiores para arquitectos y promotores.',
    fullPrompt: `Diseña un prompt para un render arquitectónico de interiores fotorrealista:
Estilo de la estancia: [ESTILO_INTERIOR]
Tipo de habitación: [TIPO_HABITACION]
Momento del día y luz: [LUZ_MOMENTO]

El prompt debe detallar:
- Materiales constructivos: madera de roble natural con textura de veta visible, hormigón visto pulido, lino lavado y detalles en latón cepillado.
- Mobiliario de diseño escandinavo o mid-century moderno perfectamente distribuido.
- Ángulo de cámara: "Architectural photography, wide-angle 24mm tilt-shift lens, straight vertical lines, eye-level perspective, published in Architectural Digest".
- Parámetros técnicos completos en inglés.`,
    variables: [
      { key: 'ESTILO_INTERIOR', label: 'Estilo de diseño', placeholder: 'Japandi / Minimalista...', defaultValue: 'Japandi minimalista cálido con toques mediterráneos' },
      { key: 'TIPO_HABITACION', label: 'Tipo de habitación', placeholder: 'Salón comedor...', defaultValue: 'Salón de concepto abierto con ventanales de suelo a techo con vistas a un jardín de olivos' },
      { key: 'LUZ_MOMENTO', label: 'Luz y hora', placeholder: 'Atardecer cálido...', defaultValue: 'Luz natural de tarde dorada con sombras alargadas y sutiles' }
    ],
    exampleUse: 'Presentar proyectos conceptuales a clientes de reformas o ilustrar catálogos inmobiliarios.',
    expectedResult: 'Fotografía de interiorismo digna de revista con líneas verticales rectas y luz creíble.',
    tips: ['El término "tilt-shift lens" obliga a la IA a mantener las paredes verticales perfectamente paralelas.'],
    commonErrors: ['Olvidar especificar la iluminación natural, lo que provoca interiores planos o con luz de quirófano.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-27',
    usageCount: 2340,
    ratingScore: 4.8,
    author: 'Clara Domínguez'
  },
  {
    id: 'p-25',
    title: 'Generador de Diseños de Logotipos e Isotipos Minimalistas Monocromáticos',
    description: 'Produce símbolos vectoriales geométricos sencillos inspirados en los maestros del diseño suizo.',
    categoryId: 'cat-imagenes',
    subcategory: 'Logotipos y Símbolos',
    tags: ['Logotipo', 'Branding', 'Minimalismo', 'Iconos'],
    difficulty: 'Principiante',
    tools: ['Midjourney', 'DALL-E 3'],
    objective: 'Explorar ideas conceptuales de isotipos e iconos para marcas antes de vectorizarlos en Illustrator.',
    fullPrompt: `Diseña un prompt para generar un isotipo/símbolo de logotipo minimalista:
Concepto del negocio: [CONCEPTO_MARCA]
Valores a transmitir: [VALORES_TRANSMITIR]
Estilo geométrico: [ESTILO_GEOMETRICO]

Especificaciones obligatorias en el prompt:
- "Minimalist vector logo mark, flat 2D graphic icon, simple clean geometric lines, Paul Rand and Dieter Rams aesthetic".
- Monocromático (negro puro sobre fondo blanco puro, o blanco sobre negro).
- Sin tipografía, sin letras deformadas, sin sombras 3D, sin texturas ruidosas ni degradados.
- Composición centrada simétrica o con equilibrio asimétrico preciso.`,
    variables: [
      { key: 'CONCEPTO_MARCA', label: 'Concepto de la marca', placeholder: 'Agencia de IA...', defaultValue: 'Plataforma de inteligencia artificial para astrofísicos y exploración espacial' },
      { key: 'VALORES_TRANSMITIR', label: 'Valores a transmitir', placeholder: 'Innovación y precisión...', defaultValue: 'Precisión matemática, curiosidad infinita y elegancia sobria' },
      { key: 'ESTILO_GEOMETRICO', label: 'Estilo geométrico', placeholder: 'Círculos y líneas...', defaultValue: 'Círculo continuo entrelazado con una línea orbital limpia' }
    ],
    exampleUse: 'Brainstorming rápido de símbolos de marca antes del diseño vectorial definitivo.',
    expectedResult: 'Símbolo geométrico limpio en blanco y negro fácil de reconocer y trazar.',
    tips: ['Pide siempre "monochrome black on white" para evaluar la fuerza de la forma antes del color.'],
    commonErrors: ['Pedir que la IA escriba el nombre completo de la empresa dentro del logo; suele cometer erratas.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-01-31',
    usageCount: 3670,
    ratingScore: 4.9,
    author: 'Clara Domínguez'
  },
  {
    id: 'p-26',
    title: 'Creador de Texturas Seamless y Patrones Geométricos para Diseño Web y Textil',
    description: 'Genera patrones repetibles sin costuras para fondos web, empaques y estampado textil con parámetro --tile.',
    categoryId: 'cat-imagenes',
    subcategory: 'Texturas y Patrones',
    tags: ['Seamless', 'Patrones', 'Texturas', 'Tile'],
    difficulty: 'Intermedio',
    tools: ['Midjourney', 'Universal'],
    objective: 'Producir fondos que se repiten infinitamente en horizontal y vertical sin que se note la unión.',
    fullPrompt: `Crea un prompt optimizado para generar un patrón repetible sin costuras (seamless pattern):
Motivo principal: [MOTIVO_PATRON]
Estilo estético: [ESTILO_PATRON]
Paleta cromática: [PALETA_PATRON]

Estructura del prompt:
- Descripción en inglés de los elementos gráficos ordenados armoniosamente con espacio negativo equilibrado.
- Especificación: "Seamless repeatable surface pattern, flat lay, textile print design, high resolution vector quality".
- Parámetro imprescindible de repetición infinita: --tile (en Midjourney) para que los bordes derecho/izquierdo y superior/inferior encajen a la perfección.`,
    variables: [
      { key: 'MOTIVO_PATRON', label: 'Motivo del patrón', placeholder: 'Hojas botánicas...', defaultValue: 'Hojas de eucalipto estilizadas, semillas y ramas botánicas delicadas' },
      { key: 'ESTILO_PATRON', label: 'Estilo estético', placeholder: 'Japonés / Nórdico...', defaultValue: 'Diseño nórdico contemporáneo con líneas limpias y elegantes' },
      { key: 'PALETA_PATRON', label: 'Paleta cromática', placeholder: 'Tonos tierra...', defaultValue: 'Verde salvia, terracota suave y crema apagado' }
    ],
    exampleUse: 'Fondos para sitios web, papel de embalaje de e-commerce y estampados para moda.',
    expectedResult: 'Imagen que se puede repetir en mosaico continuo sin cortes visibles.',
    tips: ['El parámetro --tile es exclusivo de Midjourney y garantiza que los bordes coincidan píxel a píxel.'],
    commonErrors: ['Olvidar el parámetro --tile, lo que generará una imagen con bordes cortados imposible de usar como mosaico.'],
    accessLevel: 'gratuito',
    coinCost: 0,
    createdAt: '2025-02-03',
    usageCount: 2190,
    ratingScore: 4.8,
    author: 'Clara Domínguez'
  }
];
