import { PromptItem } from '../../types';

export const PROMPTS_PART3: PromptItem[] = [
  // ==========================================
  // CATEGORÍA 9: Educación, estudio e idiomas (cat-educacion)
  // Prompts 53 a 58
  // ==========================================
  {
    id: 'p-53',
    title: 'Tutor Socrático Personalizado para Comprensión Profunda',
    category: 'Educación e Idiomas',
    categoryId: 'cat-educacion',
    difficulty: 'Principiante',
    rating: 4.9,
    views: 2430,
    copies: 1190,
    tags: ['Método Socrático', 'Estudio', 'Aprendizaje', 'Explicación', 'Tutor'],
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    description: 'No te da la respuesta masticada: te guía mediante preguntas dirigidas para que construyas tu propio razonamiento y lo recuerdes siempre.',
    fullPrompt: `Actúa como un profesor universitario galardonado y practicante del método socrático de enseñanza.

Quiero aprender y comprender a fondo el siguiente concepto o tema:
- Tema/Materia: [TEMA_A_APRENDER]
- Mi nivel actual: [PRINCIPIANTE_MEDIO_AVANZADO]
- Mi objetivo: [OBJETIVO_EJ_APROBAR_EXAMEN_O_APLICARLO_EN_TRABAJO]

Reglas estrictas de interacción:
1. No me des una lección teórica monolítica ni la respuesta final de golpe.
2. Comienza haciéndome UNA sola pregunta inicial de diagnóstico o planteando un dilema de la vida cotidiana para evaluar qué intuyo sobre el tema.
3. Espera mi respuesta.
4. Con base en lo que responda:
   - Señala con amabilidad si hay alguna asunción incorrecta.
   - Usa una analogía visual cotidiana.
   - Hazme una nueva pregunta que me acerque al siguiente nivel de comprensión.
5. Continúa este diálogo interactivo paso a paso hasta que yo deduzca la regla o principio fundamental.`,
    exampleUse: 'Entender cómo funciona la inflación monetaria y los tipos de interés de los bancos centrales desde cero.',
    expectedResult: 'Una sesión de tutoría interactiva donde el estudiante interioriza el concepto mediante descubrimiento activo.',
    tips: 'Responde honestamente con lo que creas o intuyas, incluso si no estás seguro. El método socrático brilla cuando detecta errores intuitivos.'
  },
  {
    id: 'p-54',
    title: 'Explicación con la Técnica Feynman (Como a un Niño de 10 Años)',
    category: 'Educación e Idiomas',
    categoryId: 'cat-educacion',
    difficulty: 'Principiante',
    rating: 4.9,
    views: 3120,
    copies: 1540,
    tags: ['Técnica Feynman', 'Simplicidad', 'Analogías', 'Educación', 'Claridad'],
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    description: 'Desmonta conceptos de alta complejidad matemática, científica o filosófica usando lenguaje llano y metáforas memorables.',
    fullPrompt: `Eres Richard Feynman, físico ganador del Premio Nobel y maestro divulgador conocido por explicar las cosas más complejas del universo con sencillez cristalina.

Explícame el siguiente concepto:
- Concepto o fenómeno complejo: [CONCEPTO_COMPLEJO]
- Contexto de la duda: [POR_QUE_ME_CUESTA_ENTENDERLO]

Estructura de la explicación:
1. "LA METÁFORA DEL PATIO DE RECREO": Explica el núcleo del concepto usando una situación de la vida diaria o una historia que un niño de 10 años entendería al instante. Cero jerga técnica.
2. "LA MECÁNICA REAL": Cómo funciona en realidad sin perder la sencillez, definiendo en lenguaje corriente las 2 o 3 palabras técnicas imprescindibles.
3. "EL ERROR COMÚN": Cuál es la confusión habitual que tiene la mayoría de la gente adulta al respecto.
4. "PRUEBA DEL FOSFORITO": Un micro-ejercicio mental o pregunta de 1 frase para comprobar si realmente lo he entendido.`,
    exampleUse: 'Explicar qué es la computación cuántica y qué significa la superposición y el entrelazamiento cuántico.',
    expectedResult: 'Claridad mental instantánea sobre temas abstractos sin necesidad de tener formación especializada.',
    tips: 'Si alguna parte de la explicación aún te parece confusa, pídele que cambie la metáfora por otra más visual.'
  },
  {
    id: 'p-55',
    title: 'Generador de Flashcards y Tarjetas Anki de Repetición Espaciada',
    category: 'Educación e Idiomas',
    categoryId: 'cat-educacion',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1980,
    copies: 980,
    tags: ['Anki', 'Flashcards', 'Repetición Espaciada', 'Memorización', 'Oposiciones'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Convierte apuntes, leyes, fórmulas o vocabulario en tarjetas de pregunta/respuesta listas para importar en Anki con formato CSV.',
    fullPrompt: `Actúa como especialista en ciencias cognitivas del aprendizaje y experto en el software de repetición espaciada Anki.

Convierte el siguiente texto o temario en un conjunto de 15 tarjetas de estudio (flashcards) de alta retención:
- Temario / Texto de origen:
\`\`\`
[PEGA_AQUÍ_TUS_APUNTES_O_TEMARIO]
\`\`\`
- Nivel de detalle requerido: [ALTO_EXACTO_O_CONCEPTUAL]

Reglas para las flashcards:
1. Aplica la regla del principio de mínima información: Cada tarjeta debe preguntar UN solo dato atómico, no listas complejas de 5 elementos.
2. Evita la ambigüedad en la pregunta.
3. Añade pistas contextuales cuando proceda.
4. Entrega el resultado en dos formatos:
   - Formato 1: Tabla visual legible con columnas (Front / Pregunta, Back / Respuesta, Explicación corta).
   - Formato 2: Bloque de texto plano formateado como CSV separado por punto y coma (;) listo para "Importar archivo" directamente en Anki sin errores de formateo.`,
    exampleUse: 'Generar 15 flashcards de los artículos clave de la Constitución Española o de anatomía del sistema circulatorio.',
    expectedResult: 'Tarjetas atómicas listas para memorizar a largo plazo con formato CSV para importar a Anki con un solo clic.',
    tips: 'Importa el archivo en Anki seleccionando "Campos separados por: punto y coma" para respetar los saltos de línea.'
  },
  {
    id: 'p-56',
    title: 'Simulador de Conversación Inmersiva en Idiomas Extranjeros (Roleplay B2-C1)',
    category: 'Educación e Idiomas',
    categoryId: 'cat-educacion',
    difficulty: 'Experto',
    rating: 4.9,
    views: 2890,
    copies: 1350,
    tags: ['Inglés', 'Idiomas', 'Roleplay', 'Conversación', 'Fluidez'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Simula diálogos realistas en inglés, francés, alemán u otro idioma, corrigiendo errores gramaticales y modismos al final de cada turno.',
    fullPrompt: `You will act as my native [IDIOMA_OBJETIVO_EJ_ENGLISH_FRENCH] language tutor and conversation partner.

We are going to do an immersive roleplay scenario:
- Scenario: [ESCENARIO_EJ_JOB_INTERVIEW_OR_ORDERING_AT_A_RESTAURANT_OR_AIRPORT_LOST_LUGGAGE]
- My target CEFR level: [NIVEL_EJ_B2_OR_C1]
- Your character role: [ROL_DEL_INTERLOCUTOR]
- My character role: [MI_ROL]

Rules for our conversation:
1. Speak entirely in [IDIOMA_OBJETIVO]. Stay in character.
2. Keep your conversation turns natural, engaging, and around 2 to 4 sentences (like a real human chat).
3. At the end of every message, add a separated section titled "📝 FEEDBACK & CORRECTIONS" in Spanish:
   - Point out any grammar or preposition errors I made in my previous message.
   - Suggest a more native, natural alternative (idiomatic phrasing).
   - Highlight 1 new high-level vocabulary word or phrasal verb that fits the situation.
4. Always conclude your turn with a question to keep the conversation flowing.

Start the conversation now by introducing yourself in character!`,
    exampleUse: 'Practicar una negociación de aumento de sueldo en inglés formal con un directivo británico.',
    expectedResult: 'Práctica inmersiva con corrección pedagógica inmediata sin interrumpir el flujo de la conversación.',
    tips: 'Lee en voz alta las respuestas en inglés para mejorar simultáneamente tu fluidez oral y pronunciación.'
  },
  {
    id: 'p-57',
    title: 'Generador de Guías de Estudio y Mapas de Conceptos para Exámenes',
    category: 'Educación e Idiomas',
    categoryId: 'cat-educacion',
    difficulty: 'Principiante',
    rating: 4.8,
    views: 1840,
    copies: 880,
    tags: ['Guía de Estudio', 'Examen', 'Resumen', 'Esquema', 'Educación'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Estructura temarios extensos en guías de estudio condensadas con jerarquía visual, términos clave y preguntas de auto-evaluación.',
    fullPrompt: `Actúa como diseñador pedagógico y preparador de exámenes académicos y oposiciones.

Crea una guía de estudio intensiva y ultra-organizada a partir del siguiente material:
- Asignatura / Tema: [NOMBRE_DEL_TEMA]
- Contenido o puntos a tratar: [PUNTOS_CLAVE_O_TEXTO]
- Fecha límite para el examen: [DIAS_DISPONIBLES]

La guía debe estructurarse en:
1. MAPA CONCEPTUAL JERÁRQUICO (en formato de esquema indentado con viñetas claras).
2. GLOSARIO DE TÉRMINOS INEGOCIABLES (Las 8 definiciones que no pueden faltar en una respuesta de examen).
3. RESUMEN EJECUTIVO EN "BULLETS" DE ALTO IMPACTO (máximo 1 página).
4. PREGUNTAS TRAMPA PROBABLES: 5 preguntas que un profesor estricto pondría para pillar a quien ha estudiado superficialmente.
5. PLAN DE REPASO DE ÚLTIMA HORA: Qué revisar 24 horas antes del examen y qué ignorar para no saturar la memoria de trabajo.`,
    exampleUse: 'Guía de estudio para un examen de Historia Contemporánea sobre las causas y consecuencias de la Primera Guerra Mundial.',
    expectedResult: 'Documento estructurado que ahorra horas de subrayado y sintetiza lo verdaderamente evaluable.',
    tips: 'Pídele que señale con un emoji de alarma los conceptos que suelen confundirse habitualmente.'
  },
  {
    id: 'p-58',
    title: 'Creador de Rúbricas de Evaluación y Exámenes con Criterios Objetivos',
    category: 'Educación e Idiomas',
    categoryId: 'cat-educacion',
    difficulty: 'Experto',
    rating: 4.7,
    views: 1290,
    copies: 590,
    tags: ['Docentes', 'Rúbrica', 'Evaluación', 'Pedagogía', 'Criterios'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Diseña rúbricas analíticas de 4 niveles de desempeño (Insuficiente, Suficiente, Notable, Sobresaliente) para profesores.',
    fullPrompt: `Eres un experto en evaluación educativa basada en competencias y diseño curricular según directrices oficiales.

Diseña una rúbrica analítica completa para evaluar la siguiente tarea o proyecto de los estudiantes:
- Tipo de actividad/proyecto: [ACTIVIDAD_EJ_ENSAYO_DEBATE_ORAL_PROYECTO_WEB]
- Materia y nivel educativo: [NIVEL_EJ_SECUNDARIA_BACHILLERATO_UNIVERSIDAD]
- Competencias o criterios clave a medir: [CRITERIOS_A_MEDIR]

Entrega:
1. TABLA DE RÚBRICA con descriptores cualitativos claros y medibles para 4 niveles:
   - Nivel 1: Insuficiente (1-4)
   - Nivel 2: Suficiente / En progreso (5-6)
   - Nivel 3: Notable / Competente (7-8)
   - Nivel 4: Sobresaliente / Excelente (9-10)
   - Ponderación porcentual (%) asignada a cada criterio.
2. PAUTA DE CORRECCIÓN RÁPIDA: Checklist de verificación para calificar en menos de 3 minutos por alumno.
3. MODELO DE FEEDBACK CONSTRUCTIVO: Plantilla de comentarios amables para devolver al alumno indicando fortalezas y áreas de mejora concretas.`,
    exampleUse: 'Crear una rúbrica para evaluar presentaciones orales en grupo de 15 minutos en estudiantes de primer año de universidad.',
    expectedResult: 'Herramienta de evaluación objetiva que ahorra tiempo de corrección y previene reclamos de notas.',
    tips: 'Asegúrate de que los descriptores usen verbos observables (identifica, argumenta, calcula) en lugar de abstractos (sabe, entiende).'
  },

  // ==========================================
  // CATEGORÍA 10: Productividad, organización y gestión del tiempo (cat-productividad)
  // Prompts 59 a 64
  // ==========================================
  {
    id: 'p-59',
    title: 'Planificador Diario con Time-Blocking y Método Eisenhower',
    category: 'Productividad y Gestión',
    categoryId: 'cat-productividad',
    difficulty: 'Principiante',
    rating: 4.9,
    views: 2950,
    copies: 1480,
    tags: ['Time Blocking', 'Eisenhower', 'Productividad', 'Planificación', 'Foco'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Transforma una lista desordenada de tareas pendientes en un horario milimétrico por bloques de tiempo priorizado por urgencia e impacto.',
    fullPrompt: `Actúa como un coach de productividad personal de alto rendimiento y consultor de gestión del tiempo.

Tengo la siguiente lista caótica de tareas pendientes para hoy o esta semana:
\`\`\`
[PEGA_AQUÍ_TODAS_TUS_TAREAS_SIN_ORDEN]
\`\`\`
- Horario de trabajo disponible: [EJ_DE_9_00_A_18_00_CON_1H_DE_ALMUERZO]
- Nivel de energía esperado: [EJ_MAXIMA_EN_LA_MANANA_BAJA_EN_LA_TARDE]

Organiza mi día siguiendo este proceso riguroso:
1. MATRIZ DE EISENHOWER: Clasifica cada tarea en:
   - Cuadrante 1: Urgente e Importante (Hacer hoy sin falta).
   - Cuadrante 2: No Urgente pero Importante (Planificar en bloques de enfoque profundo - Deep Work).
   - Cuadrante 3: Urgente pero No Importante (Delegar, automatizar o resolver en lotes de 15 min).
   - Cuadrante 4: Ni Urgente ni Importante (Eliminar o posponer).
2. CALENDARIO DE TIME-BLOCKING: Horario hora a hora (ej: 09:00 - 10:30) asignando las tareas más exigentes a mis picos de energía, con descansos Pomodoro integrados y margen de 30 min para imprevistos.
3. LAS 3 VICTORIAS CLAVE (The Rule of 3): Las 3 únicas cosas que, si se completan hoy, harán que el día haya sido un éxito rotundo.`,
    exampleUse: 'Organizar un día lleno de emails atrasados, una propuesta de cliente, preparar una presentación y hacer llamadas de seguimiento.',
    expectedResult: 'Un plan diario estructurado que reduce el agobio mental y evita la multitarea dispersa.',
    tips: 'Deja siempre un bloque de 30 a 45 minutos vacío al final de la jornada para absorber los fuegos imprevistos que surjan.'
  },
  {
    id: 'p-60',
    title: 'Sistema de Captura y Organización GTD (Getting Things Done)',
    category: 'Productividad y Gestión',
    categoryId: 'cat-productividad',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1870,
    copies: 890,
    tags: ['GTD', 'David Allen', 'Organización', 'Tareas', 'Bandeja de Entrada'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Aplica el flujo de David Allen: captura mental completa, procesamiento de 2 minutos, delegación y proyectos de múltiples pasos.',
    fullPrompt: `Eres un consultor certificado en la metodología GTD (Getting Things Done) de David Allen.

He hecho un vaciado mental (brain dump) de cosas que rondan por mi cabeza:
\`\`\`
[PEGA_AQUÍ_TUS_PREOCUPACIONES_IDEAS_Y_COMPROMISOS]
\`\`\`

Procesa cada uno de los elementos pasando por el diagrama de flujo de GTD:
1. ¿Es accionable? (Sí / No).
   - Si NO: ¿Es basura (eliminar), incubar (Algún día / Quizás) o material de referencia (archivar)?
   - Si SÍ: ¿Requiere más de 1 acción física? (Si sí, nómbralo como PROYECTO y define la "Próxima Acción Física").
2. LA REGLA DE LOS 2 MINUTOS: Señala qué tareas toman menos de 2 minutos y debo hacerlas AHORA MISMO.
3. DELEGAR: ¿Quién debe encargarse de esto y qué debo registrar en mi lista de "A la Espera"?
4. CONTEXTOS: Agrupa las acciones restantes por contexto (@ordenador, @llamadas, @recados, @reuniones).`,
    exampleUse: 'Procesar 12 notas rápidas tomadas durante la semana sobre reparaciones del hogar, proyectos de software y finanzas personales.',
    expectedResult: 'Claridad mental absoluta con próximas acciones físicas concretas en lugar de compromisos abstractos.',
    tips: 'La clave de GTD es que la "Próxima Acción" empiece siempre con un verbo físico: "Llamar a...", "Comprar...", "Escribir email a...".'
  },
  {
    id: 'p-61',
    title: 'Diseñador de Hábitos Atómicos y Rutinas Diarias Sostenibles',
    category: 'Productividad y Gestión',
    categoryId: 'cat-productividad',
    difficulty: 'Principiante',
    rating: 4.9,
    views: 2280,
    copies: 1140,
    tags: ['Hábitos', 'James Clear', 'Rutinas', 'Autodisciplina', 'Desarrollo Personal'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Diseña la implantación de un nuevo hábito usando las 4 leyes de James Clear: hacerlo obvio, atractivo, fácil y satisfactorio.',
    fullPrompt: `Actúa como especialista en ciencias del comportamiento y diseño de hábitos basado en "Hábitos Atómicos" de James Clear.

Quiero incorporar el siguiente hábito positivo a mi vida (o eliminar uno negativo):
- Hábito deseado: [HABITO_QUE_QUIERO_CONSTRUIR]
- Obstáculo o intento fallido previo: [POR_QUE_LO_ABANDONE_ANTES]
- Mi rutina actual matutina o nocturna: [MI_RUTINA_HABITUAL]

Diseña el sistema del hábito aplicando las 4 Leyes del Cambio de Conducta:
1. HACERLO OBVIO (Señal):
   - Fórmula de apilamiento de hábitos (Habit Stacking): "Después de [HABITO_ACTUAL], haré [NUEVO_HABITO]".
   - Diseño del entorno físico: Qué cambios hacer en mi mesa, habitación o móvil para que la señal sea inevitable.
2. HACERLO ATRACTIVO (Anhelo):
   - Agrupación de tentaciones: Cómo vincular el hábito a una recompensa inmediata que disfruto.
3. HACERLO FÁCIL (Respuesta):
   - La regla de los 2 minutos: Cómo reducir el hábito a una versión que tome menos de 120 segundos para no tener fricción al empezar.
4. HACERLO SATISFACTORIO (Recompensa):
   - Sistema de seguimiento visual (Habit Tracker) y regla de "no romper la cadena dos días seguidos".`,
    exampleUse: 'Construir el hábito de leer 20 páginas de libros de no ficción todos los días antes de ir a dormir en vez de mirar el móvil.',
    expectedResult: 'Un protocolo a prueba de pereza que elimina la dependencia de la fuerza de voluntad.',
    tips: 'Empieza ridículamente pequeño. Si quieres leer 20 páginas, empieza comprometiéndote a leer 2 páginas cada día durante la primera semana.'
  },
  {
    id: 'p-62',
    title: 'Facilitador y Optimizador de Reuniones: Adiós a Reuniones Inútiles',
    category: 'Productividad y Gestión',
    categoryId: 'cat-productividad',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1430,
    copies: 690,
    tags: ['Reuniones', 'Acta', 'Agilidad', 'Comunicación Asíncrona', 'Equipos'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Determina si una reunión puede ser un email, diseña órdenes del día de 25 minutos y genera actas con responsables y fechas límite.',
    fullPrompt: `Eres un consultor de eficiencia operativa y cultura de trabajo asíncrona (estilo Gitlab / Basecamp).

Ayúdame a gestionar la siguiente reunión:
- Motivo o tema de la reunión: [TEMA_DE_LA_REUNION]
- Participantes previstos: [QUIENES_VAN_A_ASISTIR]
- Tiempo propuesto: [DURACION_PREVISTA]

Entrega:
1. TEST DE ASINCRONÍA ("¿Podría ser esto un correo o un vídeo de Loom de 3 minutos?"): 3 preguntas para decidir si cancelarla o mantenerla.
2. ORDEN DEL DÍA DE 25 MINUTOS (Timeboxed Agenda): Si la reunión es necesaria, divide el tiempo en bloques exactos con un objetivo por bloque y material de lectura previo obligatorio.
3. REGLAS DE ORO DE LA REUNIÓN: Normas de asistencia (solo quienes aportan a la decisión, cámaras encendidas, sin dispositivos para multitarea).
4. PLANTILLA DE ACTA EJECUTIVA POST-REUNIÓN (Meeting Notes): Formato estándar con Decisiones Tomadas, Tareas Asignadas (Quién, Qué y Cuándo) y Preguntas Abiertas.`,
    exampleUse: 'Optimizar la reunión semanal de sincronización del equipo de producto que suele alargarse 90 minutos sin conclusiones claras.',
    expectedResult: 'Ahorro de horas de trabajo para el equipo y reuniones que terminan antes de tiempo con acuerdos firmes.',
    tips: 'Termina las reuniones siempre 5 minutos antes de la hora para permitir a los asistentes respirar antes de su siguiente compromiso.'
  },
  {
    id: 'p-63',
    title: 'Auditor de Energía Personal y Eliminador de Ladrones de Tiempo',
    category: 'Productividad y Gestión',
    categoryId: 'cat-productividad',
    difficulty: 'Experto',
    rating: 4.7,
    views: 1190,
    copies: 530,
    tags: ['Energía', 'Burnout', 'Ladrones de Tiempo', 'Atención', 'Enfoque'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Identifica tareas que drenan tu energía mental, interrupciones invisibles y diseña un protocolo de blindaje de atención.',
    fullPrompt: `Actúa como especialista en neurobiología de la atención y ergonomía del trabajo cognitivo.

Analizo mi semana típica de trabajo:
- Mis principales actividades: [DESCRIBE_UN_DIA_O_SEMANA_TIPICA]
- Cuándo me siento más agotado/a: [MOMENTO_DE_BAJON_MENTAL]
- Principales fuentes de interrupción: [NOTIFICACIONES_LLAMADAS_COMPANEROS_REDES]

Genera un plan de choque de ergonomía cognitiva:
1. MAPA DE COSTES DE CAMBIO DE CONTEXTO (Context Switching): Cuánto tiempo y foco pierdo realmente al saltar de una tarea a otra.
2. PROTOCOLO DE BLINDAJE DIGITAL:
   - Configuración de modos de concentración en el móvil y ordenador.
   - Ventanas de procesamiento de comunicaciones en lotes (Batching) para email y Slack/WhatsApp.
3. RITMO ULTRADIANO Y RECARGA: Cuándo programar descansos activos de 10 minutos (sin pantallas) para restaurar la dopamina y la corteza prefrontal.
4. GUION DE ASERTIVIDAD PARA DECIR "NO": 3 fórmulas educadas pero firmes para rechazar peticiones urgentes de terceros que no son tu prioridad.`,
    exampleUse: 'Auditar la jornada de un profesional autónomo que siente que trabaja 10 horas al día pero avanza muy poco en sus proyectos importantes.',
    expectedResult: 'Recuperación de hasta 2 horas diarias de trabajo concentrado y reducción drástica de la fatiga mental nocturna.',
    tips: 'La fatiga mental al final del día no suele deberse a trabajar mucho, sino a la cantidad de decisiones e interrupciones sufridas.'
  },
  {
    id: 'p-64',
    title: 'Plantilla de Revisión Semanal (Weekly Review) para Claridad Total',
    category: 'Productividad y Gestión',
    categoryId: 'cat-productividad',
    difficulty: 'Principiante',
    rating: 4.8,
    views: 1650,
    copies: 770,
    tags: ['Weekly Review', 'Planificación Semanal', 'Reflexión', 'Metas', 'Productividad'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Protocolo de 30 minutos de los viernes para cerrar la semana con la mente despejada y arrancar el lunes con ventaja.',
    fullPrompt: `Eres un mentor de ejecutivos y especialistas en gestión del rendimiento sostenible.

Guíame a través de mi Revisión Semanal (Weekly Review) para consolidar los aprendizajes y dejar todo planificado:
- Resumen de lo ocurrido esta semana (logros y dificultades): [QUE_PASO_ESTA_SEMANA]
- Proyectos activos: [PROYECTOS_ACTUALES]
- Próximos eventos o fechas límite de la próxima semana: [COMPROMISOS_PROXIMOS]

Estructura el protocolo en 3 fases:
1. DESPEJAR Y CERRAR (Clear):
   - Vaciar notas sueltas, descargas y bandeja de entrada.
   - Revisión de tareas no completadas: ¿Se posponen, se delegan o se eliminan con valentía?
2. REFLEXIONAR (Evaluate):
   - ¿Qué salió especialmente bien y por qué?
   - ¿Qué obstáculo consumió más tiempo del debido y cómo prevenirlo?
   - Puntuación personal de energía y satisfacción (1-10).
3. PLANIFICAR LA SEMANA PRÓXIMA (Calibrate):
   - El gran objetivo de la semana entrante.
   - Distribución de las prioridades principales por días.
   - Una acción de bienestar personal no negociable para proteger la salud.`,
    exampleUse: 'Cerrar el viernes laboral de un jefe de proyecto para no llevarse preocupaciones mentales al fin de semana con la familia.',
    expectedResult: 'Sensación de control, tranquilidad durante el fin de semana y arranque del lunes sin perder tiempo pensando qué hacer.',
    tips: 'Haz esta revisión siempre el viernes a última hora o el domingo por la tarde; nunca improvises tu lunes por la mañana.'
  },

  // ==========================================
  // CATEGORÍA 11: Análisis de datos, hojas de cálculo y estadísticas (cat-datos)
  // Prompts 65 a 70
  // ==========================================
  {
    id: 'p-65',
    title: 'Generador de Fórmulas Avanzadas para Excel y Google Sheets',
    category: 'Análisis de Datos y Excel',
    categoryId: 'cat-datos',
    difficulty: 'Principiante',
    rating: 4.9,
    views: 3410,
    copies: 1820,
    tags: ['Excel', 'Google Sheets', 'Fórmulas', 'BUSCARX', 'Hojas de Cálculo'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Crea fórmulas complejas combinando BUSCARX (XLOOKUP), FILTRAR, INDICE/COINCIDIR, QUERY o LAMBDA con explicación paso a paso.',
    fullPrompt: `Actúa como especialista certificado en Microsoft Excel (Excel MVP) y Google Sheets.

Necesito una fórmula para resolver el siguiente problema en mi hoja de cálculo:
- Programa que utilizo: [EXCEL_365_O_GOOGLE_SHEETS_O_EXCEL_ANTIGUO]
- Idioma de mi hoja: [ESPAÑOL_O_INGLES]
- Estructura de mis columnas y datos: [DESCRIBE_COLUMNAS_Y_RANGOS_EJ_COLUMNA_A_FECHA_COLUMNA_B_VENTAS]
- Qué resultado exacto quiero obtener: [LOGICA_DEL_CALCULO_DESEADO]
- Condiciones o excepciones especiales: [CONDICIONES_EXTRA]

Entrega:
1. LA FÓRMULA EXACTA: Lista para copiar y pegar (en el idioma indicado, respetando comas o punto y coma como separador).
2. EXPLICACIÓN DETALLADA: Qué hace cada argumento de la función y cómo se evalúa.
3. ALTERNATIVA MODERNA O CLÁSICA: Una versión alternativa por si mi versión de software no soporta funciones dinámicas recientes.
4. DETECCIÓN DE ERRORES: Cómo envolver la fórmula con SI.ERROR (IFERROR) para evitar los molestos #N/A o #¡VALOR!.`,
    exampleUse: 'Buscar el último precio de compra de un producto que coincide con dos condiciones (proveedor y categoría) en una tabla de 10.000 filas.',
    expectedResult: 'Fórmula perfecta lista para usar sin perder tiempo descifrando paréntesis y sintaxis.',
    tips: 'Si usas Excel en español en España, el separador de argumentos suele ser el punto y coma (;). En Latinoamérica suele ser la coma (,).'
  },
  {
    id: 'p-66',
    title: 'Consultor de Análisis Exploratorio de Datos (EDA) en Python / Pandas',
    category: 'Análisis de Datos y Excel',
    categoryId: 'cat-datos',
    difficulty: 'Experto',
    rating: 4.9,
    views: 1780,
    copies: 840,
    tags: ['Python', 'Pandas', 'Data Science', 'EDA', 'Limpieza de Datos'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Genera el script completo de análisis exploratorio: detección de valores nulos, outliers, correlaciones y distribuciones estadísticas.',
    fullPrompt: `Eres un Científico de Datos sénior (Senior Data Scientist) especializado en análisis exploratorio y preparación de datos con Python.

Tengo un conjunto de datos (dataset) con las siguientes características:
- Descripción del dataset y columnas: [COLUMNAS_Y_SIGNIFICADO]
- Tipo de problema: [CLASIFICACION_REGRESION_CLUSTERING_O_DESCRIPTIVO]
- Variable objetivo (target): [VARIABLE_A_PREDECIR_O_ANALIZAR]

Escribe un script de Python limpio, documentado y reproducible utilizando Pandas, NumPy, Seaborn y Matplotlib que incluya:
1. INSPECCIÓN INICIAL: Carga, dimensiones, tipos de datos, conteo de valores únicos y resumen estadístico descriptivo (.describe()).
2. LIMPIEZA Y VALORES FALTANTES: Detección visual y porcentual de nulos, imputación estratégica y tratamiento de duplicados.
3. ANÁLISIS UNIVARIANTE Y BIVARIANTE: Histogramas de distribución, boxplots para detectar valores atípicos (outliers) y matriz de correlación de Pearson/Spearman con heatmap.
4. INSIGHTS ESPERADOS: Preguntas analíticas de negocio que este código responde para la toma de decisiones.`,
    exampleUse: 'Hacer el EDA de un dataset de churn de clientes de telecomunicaciones con 20 variables sociodemográficas y de consumo.',
    expectedResult: 'Notebook de Python robusto y modular listo para ejecutar en Google Colab o Jupyter.',
    tips: 'Asegúrate de comprobar si hay desbalanceo en la variable objetivo antes de cualquier modelo predictivo.'
  },
  {
    id: 'p-67',
    title: 'Diseñador de Dashboards y Cuadros de Mando en Power BI / Tableau',
    category: 'Análisis de Datos y Excel',
    categoryId: 'cat-datos',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1560,
    copies: 720,
    tags: ['Power BI', 'DAX', 'Dashboards', 'Business Intelligence', 'KPIs'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Diseña la arquitectura de KPIs, modelo relacional en estrella y medidas DAX clave para cuadros de mando directivos de alto impacto.',
    fullPrompt: `Actúa como Consultor de Business Intelligence certificado en Power BI y diseño de interfaces analíticas.

Diseña un cuadro de mando ejecutivo (Dashboard) para:
- Área de negocio: [AREA_EJ_VENTAS_LOGISTICA_FINANZAS_RRHH]
- Audiencia: [AUDIENCIA_EJ_DIRECTOR_GENERAL_MANDOS_INTERMEDIOS]
- Datos disponibles: [TABLAS_Y_ORIGENES_DE_DATOS]

Proporciona la especificación completa del informe:
1. MODELO DE DATOS RECOMENDADO: Diseño de esquema en estrella (Star Schema) definiendo tablas de hechos (Fact Tables) y tablas de dimensiones (Dim Tables).
2. ARQUITECTURA VISUAL (Layout en cuadrícula 16:9):
   - Fila superior: Tarjetas de KPIs principales (North Star Metric y comparativas YoY / MoM).
   - Zona media: Gráficos de tendencias temporales y distribución por categorías.
   - Zona inferior: Tabla de detalle con formato condicional y desglose por responsable.
3. FÓRMULAS DAX ESENCIALES: Código DAX limpio para las 3 medidas de cálculo más importantes (ej: Ventas YTD, Crecimiento % vs Año Anterior con CALCULATE y SAMEPERIODLASTYEAR).
4. PALETA DE COLORES Y STORYTELLING: Guía de uso de color para guiar la vista hacia las anomalías sin sobrecargar.`,
    exampleUse: 'Diseñar un dashboard de rendimiento comercial y márgenes brutos para una cadena de tiendas retail con 15 locales.',
    expectedResult: 'Especificación técnica y de diseño completa para crear un informe que los directivos adoren consultar a diario.',
    tips: 'Separa siempre las medidas DAX en una tabla dedicada llamada "_Medidas" para mantener el proyecto ordenado.'
  },
  {
    id: 'p-68',
    title: 'Auditor de Calidad y Limpiador de Datos Caóticos (Data Wrangling)',
    category: 'Análisis de Datos y Excel',
    categoryId: 'cat-datos',
    difficulty: 'Experto',
    rating: 4.7,
    views: 1320,
    copies: 610,
    tags: ['Data Cleaning', 'Power Query', 'Python', 'Normalización', 'Datos'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Estrategias y scripts paso a paso para limpiar datos sucios: formatos de fecha mezclados, textos mal tipiados, espacios invisibles y duplicados.',
    fullPrompt: `Eres un Ingeniero de Datos especializado en procesos de ETL (Extracción, Transformación y Carga) y normalización de bases de datos.

Tengo un archivo de datos con problemas graves de calidad:
- Formato de los datos: [EXCEL_CSV_SQL_JSON]
- Lista de problemas detectados: [PROBLEMAS_EJ_FECHAS_EN_FORMATOS_DISTINTOS_ESPACIOS_NOMBRES_CON_ACENTOS_INCONSISTENTES]
- Herramienta preferida para limpiarlo: [POWER_QUERY_O_PYTHON_PANDAS_O_SQL]

Proporciona:
1. CHECKLIST DE AUDITORÍA DE HIGIENE DE DATOS: Los 7 controles que deben pasar los datos antes de considerarse fiables.
2. CÓDIGO O PASOS EXACTOS DE TRANSFORMACIÓN: Instrucciones secuenciales para sanear los campos conflictivos.
3. VALIDACIONES AUTOMATIZADAS (Assertions): Reglas lógicas para comprobar que después de la limpieza no se han perdido filas ni alterado importes totales.
4. RECOMENDACIÓN PARA EL ORIGEN: Cómo corregir los formularios o sistemas de entrada para que el dato no vuelva a ensuciarse en la fuente.`,
    exampleUse: 'Limpiar una base de datos de 25.000 clientes con números de teléfono sin prefijo internacional, códigos postales truncados y nombres en mayúsculas desordenadas.',
    expectedResult: 'Guía y script de saneamiento que transforma datos caóticos en un dataset listo para modelos o informes.',
    tips: 'En Power Query, guarda cada paso con un nombre descriptivo en lugar de dejar "Tipo cambiado 1", "Filas filtradas 2".'
  },
  {
    id: 'p-69',
    title: 'Interpretación de Resultados Estadísticos y Pruebas de Hipótesis (A/B Testing)',
    category: 'Análisis de Datos y Excel',
    categoryId: 'cat-datos',
    difficulty: 'Master',
    rating: 4.9,
    views: 1110,
    copies: 480,
    tags: ['A/B Testing', 'Estadística', 'P-Valor', 'Significancia', 'CRO'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Interpreta pruebas A/B, p-valores, intervalos de confianza y significancia estadística explicando su implicación práctica para negocio.',
    fullPrompt: `Actúa como Estadístico Jefe y consultor de experimentación científica para plataformas digitales.

Hemos llevado a cabo un experimento o prueba A/B y tenemos los siguientes resultados:
- Objetivo del test: [OBJETIVO_EJ_AUMENTAR_REGISTROS]
- Muestra en Control (A): Visitantes = [NUM_A], Conversiones = [CONV_A]
- Muestra en Variante (B): Visitantes = [NUM_B], Conversiones = [CONV_B]
- Nivel de confianza deseado: [95%_O_99%]

Calcula e interpreta con rigor estadístico:
1. TASA DE CONVERSIÓN Y LIFT (% de mejora relativo).
2. SIGNIFICANCIA ESTADÍSTICA (P-Valor y valor Z): ¿Es el resultado estadísticamente significativo o podría deberse al azar?
3. INTERVALO DE CONFIANZA DEL EFECTO: Rango dentro del cual se encuentra la verdadera mejora con un 95% de certeza.
4. POTENCIA ESTADÍSTICA Y TAMAÑO DE MUESTRA: ¿Fue suficiente el tamaño muestral para evitar un Falso Negativo (Error Tipo II)?
5. CONCLUSIÓN EJECUTIVA PARA EL COMITÉ DE DIRECCIÓN: Recomendación categórica (Implementar Variante B, mantener Control A o continuar el test).`,
    exampleUse: 'Analizar un test A/B en una página de pago donde la versión con botón verde tuvo 540 compras sobre 12.000 visitas vs el botón azul con 490 compras sobre 11.900 visitas.',
    expectedResult: 'Informe estadístico transparente que previene tomar decisiones basadas en ilusiones numéricas o varianza aleatoria.',
    tips: 'Nunca detengas un test antes de alcanzar el tamaño de muestra planificado, aunque el p-valor parezca significativo al segundo día (error de "peeking").'
  },
  {
    id: 'p-70',
    title: 'Generador de Macros y Scripts de Automatización VBA / Google Apps Script',
    category: 'Análisis de Datos y Excel',
    categoryId: 'cat-datos',
    difficulty: 'Experto',
    rating: 4.8,
    views: 2010,
    copies: 960,
    tags: ['Google Apps Script', 'VBA', 'Macros', 'Automatización', 'Excel'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Crea scripts automatizados para enviar correos masivos personalizados, generar informes en PDF y sincronizar hojas automáticamente.',
    fullPrompt: `Eres un programador sénior especializado en automatización de oficinas mediante VBA (Visual Basic for Applications) y Google Apps Script (JavaScript).

Necesito un script automatizado para la siguiente tarea repetitiva:
- Entorno: [EXCEL_VBA_O_GOOGLE_APPS_SCRIPT]
- Tarea a automatizar: [DESCRIPCION_DETALLADA_DE_LA_TAREA_REPETITIVA]
- Disparador (Trigger): [AL_ABRIR_MEDIANTE_BOTON_O_PROGRAMADO_TODOS_LOS_LUNES]

Genera:
1. EL CÓDIGO COMPLETO Y COMENTADO: Código limpio, libre de Select/ActiveCell ineficientes, con manejo de errores (Try/Catch en Apps Script o On Error GoTo en VBA).
2. INSTRUCCIONES DE INSTALACIÓN: Paso a paso para abrir el editor de código, pegar el script y autorizar los permisos requeridos.
3. CÓMO VINCULARLO A UN BOTÓN: Cómo dibujar una forma o botón en la hoja para que el usuario final lo ejecute con un solo clic.
4. PRECAUCIONES DE SEGURIDAD: Recordatorios sobre copias de seguridad antes de ejecutar macros que modifiquen datos masivamente.`,
    exampleUse: 'Crear un Google Apps Script que tome las filas de una hoja de Sheets con correos pendientes y envíe un email con plantilla personalizada y marque la fila como "ENVIADO".',
    expectedResult: 'Script funcional y probado que elimina tareas manuales aburridas de forma segura.',
    tips: 'En Google Apps Script, agrupa las lecturas y escrituras en memoria (.getValues() y .setValues()) en lugar de llamar a la hoja celda por celda.'
  },

  // ==========================================
  // CATEGORÍA 12: Diseño gráfico, creatividad y branding (cat-diseno)
  // Prompts 71 a 77
  // ==========================================
  {
    id: 'p-71',
    title: 'Manual de Identidad Verbal y Tono de Voz de Marca (Brand Voice)',
    category: 'Diseño Gráfico y Branding',
    categoryId: 'cat-diseno',
    difficulty: 'Experto',
    rating: 4.9,
    views: 1890,
    copies: 910,
    tags: ['Branding', 'Tono de Voz', 'Identidad de Marca', 'Copywriting', 'Estrategia'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Define la personalidad, valores, vocabulario prohibido y ejemplos de tono de voz en situaciones de éxito, crisis y soporte.',
    fullPrompt: `Actúa como Director de Estrategia de Marca (Brand Strategist) en una agencia de branding global.

Construye el Manual de Identidad Verbal y Tono de Voz para la siguiente marca:
- Nombre y qué hace la marca: [NOMBRE_Y_ACTIVIDAD]
- Valores fundamentales: [VALORES_PRINCIPALES]
- Arquetipo de personalidad (ej: El Héroe, El Creador, El Rebelde, El Sabio...): [ARQUETIPO]
- Público con el que se comunica: [PUBLICO_TARGET]

Estructura del manual:
1. LOS 4 PILARES DEL TONO DE VOZ (Fórmula "Somos X, pero NO somos Y"): Define 4 atributos esenciales de comunicación con matices claros.
2. DICCIONARIO DE MARCA:
   - Palabras y expresiones fetiche que la marca ama usar.
   - Lista negra de palabras prohibidas o clichés corporativos que nunca utilizaremos.
3. MATRIZ DE TONO SEGÚN EL CONTEXTO: Cómo se expresa la marca en:
   - Una publicación celebratoria en redes sociales.
   - Un correo de soporte resolviendo un error de la empresa.
   - La página de error 404 o cancelación de suscripción.
4. GUÍA RÁPIDA DE ESTILO: Uso de mayúsculas, emojis, longitud de frases y tratamiento (¿tú o usted?).`,
    exampleUse: 'Crear la identidad verbal para una fintech juvenil que busca desmitificar la inversión haciéndola accesible y sin tecnicismos rancios.',
    expectedResult: 'Guía de estilo editorial exhaustiva para que cualquier redactor hable con la voz auténtica de la marca.',
    tips: 'La prueba de fuego de una identidad verbal es leer un texto sin logotipo y poder reconocer inmediatamente qué marca lo escribió.'
  },
  {
    id: 'p-72',
    title: 'Sistema de Diseño y Tokens de Color Accesibles (Design Systems)',
    category: 'Diseño Gráfico y Branding',
    categoryId: 'cat-diseno',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1670,
    copies: 810,
    tags: ['Design System', 'UI/UX', 'Figma', 'Tokens', 'Accesibilidad'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Construye una paleta cromática completa con escalas de 50 a 950, ratios de contraste WCAG AAA y tokens semánticos.',
    fullPrompt: `Eres un Design System Lead y especialista en accesibilidad visual (WCAG 2.1).

Crea la arquitectura de tokens de color y tipografía para un sistema de diseño digital:
- Color primario de marca (código Hex o nombre): [COLOR_PRIMARIO]
- Tipo de producto: [SAAS_B2B_O_APP_CONSUMO_O_ECOMMERCE]
- Soporte necesario: [TEMA_CLARO_Y_OSCURO]

Genera:
1. ESCALAS CROMÁTICAS COMPLETAS (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950):
   - Primario, Secundario, Grises/Superficie (Neutrals), Éxito (Success), Alerta (Warning) y Peligro (Destructive).
2. TOKENS SEMÁNTICOS para Modo Claro y Modo Oscuro: Nombres funcionales (bg-canvas, bg-surface, text-primary, text-muted, border-focus).
3. AUDITORÍA DE CONTRASTE: Verificación de que las combinaciones de texto y fondo cumplen un ratio de contraste mínimo de 4.5:1 (AA) y 7:1 (AAA).
4. ESCALA TIPOGRÁFICA Y ESPACIADO: Ratios recomendados (Major Second / Minor Third) y escala de espaciado en múltiplos de 4px / 8px.`,
    exampleUse: 'Diseñar la paleta accesible para una aplicación de salud con color primario verde esmeralda (#059669) compatible con modo oscuro profundo.',
    expectedResult: 'Tokens de diseño ordenados listos para importar en variables de Figma, Tailwind CSS o CSS Modules.',
    tips: 'Para modo oscuro, nunca uses negro puro (#000000) en grandes superficies; usa tonos grafito o azulados muy oscuros (#0A0F1D) para evitar fatiga ocular.'
  },
  {
    id: 'p-73',
    title: 'Brief Creativo para Proyectos de Diseño y Agencias',
    category: 'Diseño Gráfico y Branding',
    categoryId: 'cat-diseno',
    difficulty: 'Principiante',
    rating: 4.9,
    views: 1420,
    copies: 670,
    tags: ['Briefing', 'Diseño', 'Agencias', 'Proyectos', 'Creatividad'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Redacta el briefing creativo perfecto para diseñadores o ilustradores evitando malentendidos y rondas infinitas de cambios.',
    fullPrompt: `Actúa como Director de Cuentas y Productor Creativo en una agencia de diseño galardonada.

Redacta un Brief Creativo impecable para encargar el siguiente trabajo a un equipo de diseño o diseñador freelance:
- Qué pieza o proyecto necesitamos diseñar: [PIEZA_EJ_REDISENO_WEB_PACKAGING_LOGO_STAND]
- Objetivo principal: [OBJETIVO_COMERCIAL_O_DE_IMAGEN]
- Presupuesto y plazos: [PLAZO_Y_PRESUPUESTO]
- Información de la empresa: [EMPRESA_Y_SECTOR]

El brief debe contener los siguientes apartados profesionales:
1. RESUMEN DEL PROYECTO (The Challenge): El problema de negocio que el diseño debe solucionar.
2. PÚBLICO OBJETIVO Y CONTEXTO DE USO: Dónde y cómo verá el usuario este diseño.
3. MENSAJE CLAVE Y PROPOSICIÓN DE VALOR (The Single Minded Proposition): Lo único que el usuario debe pensar o sentir al verlo.
4. REQUISITOS TÉCNICOS Y ENTREGABLES OBLIGATORIOS: Formatos de archivo (.fig, .svg, .ai, .png), resoluciones, perfiles de color (CMYK para imprenta o sRGB para pantallas).
5. REFERENCIAS VISUALES Y LO QUE NO QUEREMOS (Do's and Don'ts): Estilos a seguir y errores que evitar categóricamente.
6. CRONOGRAMA DE ENTREGAS: Fechas para concepto inicial, ronda de feedback y artes finales.`,
    exampleUse: 'Encargar el rediseño del packaging de una línea de tés ecológicos prémium a un estudio de diseño gráfico.',
    expectedResult: 'Un documento claro que alinea expectativas desde el día uno y garantiza entregas de máxima calidad.',
    tips: 'Un buen brief dedica tanto espacio a lo que NO se quiere como a lo que sí se busca.'
  },
  {
    id: 'p-74',
    title: 'Generador de Naming y Marcas Memorables con Chequeo Fonético',
    category: 'Diseño Gráfico y Branding',
    categoryId: 'cat-diseno',
    difficulty: 'Experto',
    rating: 4.8,
    views: 2150,
    copies: 1020,
    tags: ['Naming', 'Marca', 'Creatividad', 'Dominios', 'Fonética'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Metodología de generación de nombres de marca: acrónimos, neologismos, nombres evocativos y chequeo de pronunciabilidad internacional.',
    fullPrompt: `Eres un especialista en Naming y Lingüística de Marca con experiencia en crear nombres icónicos para empresas globales.

Genera 20 propuestas de nombres de marca para:
- Qué es el producto/servicio: [DESCRIPCION_PRODUCTO]
- Sector: [SECTOR]
- Personalidad y sensaciones deseadas: [PERSONALIDAD]
- Mercados geográficos objetivo: [PAISES_O_IDIOMAS]

Agrupa las 20 propuestas en 4 categorías creativas (5 nombres por categoría):
1. NOMBRES EVOCATIVOS O METAFÓRICOS: Inspirados en la naturaleza, mitología, literatura o conceptos sensoriales.
2. NEOLOGISMOS O COMPUESTOS: Palabras inventadas combinando raíces lingüísticas (latinas o sajonas) con sonoridad moderna.
3. NOMBRES DESCRIPTIVOS O FUNCIONALES MODERNOS: Claros, directos y memorables.
4. NOMBRES ABSTRACTOS O CORTOS: De 4 a 6 letras, altamente registrables y de pronunciación limpia.

Para cada nombre incluye:
- Significado y etimología.
- Análisis fonético: Facilidad de pronunciación y memorabilidad.
- Posibilidad de dominio web (.com, .io, .ai) y redes sociales.
- Advertencia cultural: Comprobación de que no tenga connotaciones negativas en otros idiomas importantes.`,
    exampleUse: 'Generar nombres para una nueva marca de calzado ergonómico y minimalista fabricado con materiales reciclados.',
    expectedResult: 'Lista curada y justificada de nombres potentes listos para validación con el registro de marcas y patentes.',
    tips: 'Prueba a decir el nombre en una llamada telefónica ruidosa; si la otra persona te pide que lo deletrees tres veces, descártalo.'
  },
  {
    id: 'p-75',
    title: 'Consultor de Auditoría Heurística de Usabilidad UI/UX (Nielsen Norman)',
    category: 'Diseño Gráfico y Branding',
    categoryId: 'cat-diseno',
    difficulty: 'Master',
    rating: 4.9,
    views: 1620,
    copies: 780,
    tags: ['UX', 'Heurísticas', 'Nielsen', 'Usabilidad', 'Auditoría'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Audita interfaces web o móviles evaluando las 10 heurísticas clásicas de Jakob Nielsen para detectar fricciones invisibles.',
    fullPrompt: `Actúa como Principal UX Researcher y Consultor de Usabilidad certificado por Nielsen Norman Group.

Realiza una auditoría heurística completa de la siguiente pantalla o flujo de usuario:
- URL o descripción detallada de la pantalla: [PANTALLA_O_FLUJO_A_AUDITAR]
- Tarea principal que intenta completar el usuario: [TAREA_PRINCIPAL]
- Dispositivo: [MOVIL_O_ESCRITORIO]

Evalúa sistemáticamente las 10 Heurísticas de Usabilidad de Nielsen:
1. Visibilidad del estado del sistema.
2. Coincidencia entre el sistema y el mundo real.
3. Control y libertad del usuario (deshacer, cancelar).
4. Consistencia y estándares.
5. Prevención de errores antes de que ocurran.
6. Reconocimiento antes que recuerdo (carga cognitiva).
7. Flexibilidad y eficiencia de uso (atajos).
8. Diseño estético y minimalista.
9. Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de errores.
10. Ayuda y documentación contextual.

Para cada fallo encontrado indica:
- Severidad del problema (Cosmético, Menor, Mayor, Catastrófico).
- Impacto en la tasa de conversión o retención.
- Recomendación concreta de rediseño UX para solucionarlo de inmediato.`,
    exampleUse: 'Auditar el flujo de registro y onboarding en 3 pasos de una aplicación bancaria en smartphone.',
    expectedResult: 'Diagnóstico exhaustivo de experiencia de usuario priorizado por severidad técnica y retorno de inversión.',
    tips: 'Presta especial atención a la Heurística 5 (Prevención de errores); es 10 veces más barata que explicar el error una vez ocurrido.'
  },
  {
    id: 'p-76',
    title: 'Guion y Estructura de Test de Usuarios Cualitativo (User Testing)',
    category: 'Diseño Gráfico y Branding',
    categoryId: 'cat-diseno',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1140,
    copies: 510,
    tags: ['User Testing', 'Entrevistas', 'UX Research', 'Feedback', 'Prototipo'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Diseña el guion y las tareas de observación no guiadas para sesiones de test con 5 usuarios reales sobre un prototipo o web.',
    fullPrompt: `Eres un Lead UX Researcher con experiencia en pruebas de laboratorio y tests remotos no moderados.

Diseña el protocolo y guion de una sesión de test con usuarios de 45 minutos para probar:
- Prototipo o producto a testear: [PROTOTIPO_O_WEB]
- Hipótesis clave que queremos validar o desmentir: [HIPOTESIS]
- Perfil del usuario participante: [PERFIL_PARTICIPANTE]

Desarrolla el protocolo en 4 bloques:
1. INTRODUCCIÓN Y ROMPEHIELOS (5 min): Discurso para tranquilizar al usuario (recordar que evaluamos el sistema, no su inteligencia) y consentimiento de grabación.
2. PREGUNTAS DE CONTEXTO PREVIAS A LA TAREA (10 min): Hábitos actuales y frustraciones habituales con soluciones existentes.
3. BATERÍA DE 3 TAREAS DE TEST (25 min):
   - Redactadas como escenarios de la vida real sin dar pistas (no decir "haz clic en el botón azul del carrito").
   - Indicaciones para el moderador: qué observar en silencio, cuándo repreguntar ("¿Qué esperabas que pasara aquí?") y técnica del "Think Aloud" (pensar en voz alta).
4. DEBRIEFING Y CIERRE (5 min): Preguntas finales sobre percepción global, satisfacción (SUS Score) y sugerencias libres.`,
    exampleUse: 'Testear un nuevo proceso de reserva de citas médicas online con personas mayores de 50 años.',
    expectedResult: 'Guion profesional que evita sesgar las respuestas del participante y descubre fricciones reales de usabilidad.',
    tips: 'Con solo 5 usuarios bien seleccionados se descubre aproximadamente el 85% de los problemas de usabilidad de un producto.'
  },
  {
    id: 'p-77',
    title: 'Generador de Moodboards Conceptuales y Direcciones de Arte',
    category: 'Diseño Gráfico y Branding',
    categoryId: 'cat-diseno',
    difficulty: 'Principiante',
    rating: 4.7,
    views: 1390,
    copies: 630,
    tags: ['Moodboard', 'Dirección de Arte', 'Estética', 'Inspiración', 'Creatividad'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Define la dirección de arte visual: texturas, materiales, iluminación, tipografías y referencias culturales para un proyecto nuevo.',
    fullPrompt: `Actúa como Director de Arte para proyectos editoriales, digitales y de moda de vanguardia.

Crea la descripción detallada de dos direcciones de arte conceptuales contrastadas para:
- Concepto o proyecto: [TEMA_DEL_PROYECTO]
- Emoción primordial a transmitir: [EMOCION]

Para cada una de las dos direcciones de arte (Opción A: Más conservadora/elegante; Opción B: Más vanguardista/disruptiva) detalla:
1. TÍTULO Y MANIFIESTO VISUAL (El concepto poético que une todas las piezas).
2. UNIVERSO DE TEXTURAS Y MATERIALES (Vidrio esmerilado, hormigón pulido, papel kraft, metales irisados, gradientes líquidos...).
3. ILUMINACIÓN Y TRATAMIENTO FOTOGRÁFICO (Luz natural dorada, sombras duras cenitales, flash directo estilo editorial, neón cinemático...).
4. COMBINACIÓN TIPOGRÁFICA (Tipografía Display con personalidad + Tipografía Sans-Serif o Monoespaciada legible para cuerpo).
5. REFERENCIAS DE CULTURA POP O ARTÍSTICA (Artistas, arquitectos, películas o épocas que sirven de inspiración directa).
6. 3 PROMPTS PARA GENERAR IMÁGENES DE APOYO (Listos para Midjourney / DALL-E).`,
    exampleUse: 'Definir la dirección de arte para la identidad visual de una marca de cosmética bio inspirada en la arquitectura brutalista japonesa.',
    expectedResult: 'Dos visiones visuales nítidas y ricas para inspirar al equipo creativo y alinear al cliente.',
    tips: 'Compara siempre dos direcciones opuestas con el cliente para que pueda descartar una con seguridad.'
  }
];
