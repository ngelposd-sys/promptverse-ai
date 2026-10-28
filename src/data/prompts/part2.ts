import { PromptItem } from '../../types';

export const PROMPTS_PART2: PromptItem[] = [
  // ==========================================
  // CATEGORÍA 5: Creación de vídeos y guiones audiovisuales (cat-video)
  // Prompts 27 a 32
  // ==========================================
  {
    id: 'p-27',
    title: 'Guion Estructurado para YouTube con Retención Máxima',
    category: 'Creación de Vídeos',
    categoryId: 'cat-video',
    difficulty: 'Experto',
    rating: 4.9,
    views: 1390,
    copies: 580,
    tags: ['YouTube', 'Guion', 'Storytelling', 'Retención', 'Audiovisual'],
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    description: 'Estructura guiones para YouTube con gancho de 5 segundos, bucles abiertos (open loops) y cambios de ritmo visuales.',
    fullPrompt: `Actúa como un guionista profesional de YouTube y director creativo experto en retención de audiencia para canales con más de 1M de suscriptores.

Escribe un guion completo y detallado para un vídeo de YouTube con las siguientes especificaciones:
- Tema principal: [TEMA_DEL_VIDEO]
- Audiencia objetivo: [AUDIENCIA]
- Duración estimada: [DURACION_MINUTOS] minutos
- Tono y personalidad del canal: [TONO_CANAL]
- Llamada a la acción (CTA) final: [CTA_DESEADO]

Organiza el guion en una tabla de dos columnas: "AUDIO (Lo que se dice)" y "VIDEO (B-Roll, gráficos en pantalla, efectos de sonido, gestos)".

Estructura obligatoria:
1. El Gancho (0:00 - 0:25): Primeros 5 segundos demoledores planteando el conflicto sin rodeos ni saludos vacíos. Establece la promesa de valor.
2. Introducción rápida y Open Loop (0:25 - 1:00): Plantea una pregunta o revelación que solo se resolverá al final.
3. Núcleo narrativo en 3 actos:
   - Acto 1: El error común o contexto inicial.
   - Acto 2: El punto de inflexión y la metodología práctica explicada paso a paso.
   - Acto 3: Caso de estudio real y aplicación extrema.
4. Clímax y resolución del Open Loop: La clave secreta prometida al inicio.
5. Outro de alta retención (menos de 20 segundos): Transición directa sin decir "en conclusión" para redirigir al siguiente vídeo sugerido.`,
    exampleUse: 'Crear un guion de 10 minutos para desarrolladores junior sobre "Los 5 errores que arruinan tus entrevistas técnicas en 2025".',
    expectedResult: 'Un guion audiovisual profesional con indicaciones de cámara, transiciones y texto optimizado para mantener el Average View Duration sobre el 60%.',
    tips: 'Nunca digas "Hola a todos bienvenidos a mi canal" en los primeros 15 segundos. Entra directo en la tensión de la historia.'
  },
  {
    id: 'p-28',
    title: 'Generador de Guiones para TikTok & Reels Virales (60s)',
    category: 'Creación de Vídeos',
    categoryId: 'cat-video',
    difficulty: 'Principiante',
    rating: 4.8,
    views: 2450,
    copies: 1120,
    tags: ['TikTok', 'Instagram Reels', 'Vídeo Corto', 'Viral', 'Guion'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Plantilla de micro-guiones dinámicos de 30 a 60 segundos diseñados para captar el swipe y generar compartidos.',
    fullPrompt: `Eres un estratega de contenido en formato vertical corto (TikTok, Instagram Reels, YouTube Shorts) con millones de reproducciones acumuladas.

Crea 3 propuestas de guiones para vídeo corto vertical sobre:
- Tema/Problema: [PROBLEMA_O_TEMA]
- Nicho/Sector: [NICHO]
- Estilo: [ESTILO_EJ_HUMOR_POLÉMICO_EDUCATIVO_REVELACIÓN]

Para cada una de las 3 propuestas incluye:
1. TEXTO EN PANTALLA (Hook visual en los primeros 1,5 segundos).
2. VOZ EN OFF / LOCUCIÓN (Con marcas de entonación y pausas intencionales).
3. ACCIÓN FÍSICA O ELEMENTO DE DISRUPCIÓN VISUAL (Qué sostiene el creador o qué hace con las manos).
4. REENMARQUE (El giro del segundo 15 donde la creencia común es desmontada).
5. TEXTO DEL CTA O DEBATE EN COMENTARIOS (Pregunta incitadora para forzar interacción).`,
    exampleUse: 'Generar 3 guiones de 40 segundos para promocionar una app de gestión de finanzas personales para jóvenes de 20 a 30 años.',
    expectedResult: 'Tres guiones listos para grabar con ganchos contrastados y duración exacta para retener la atención completa del usuario.',
    tips: 'Prueba a grabar la misma idea con los 3 ganchos propuestos para hacer test A/B en diferentes plataformas.'
  },
  {
    id: 'p-29',
    title: 'Storyboard Textual y Dirección de Planos Cinemáticos',
    category: 'Creación de Vídeos',
    categoryId: 'cat-video',
    difficulty: 'Experto',
    rating: 4.9,
    views: 920,
    copies: 410,
    tags: ['Storyboard', 'Dirección', 'Cine', 'Planos', 'Audiovisual'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Convierte una sinopsis o idea en un desglose técnico de planos, iluminación, óptica y sonido para rodaje o animación con IA.',
    fullPrompt: `Actúa como director de fotografía (DoP) y realizador audiovisual con experiencia en spots publicitarios y cine de ficción.

Diseña el storyboard técnico secuencial para la siguiente escena o concepto publicitario:
- Sinopsis/Acción: [SINOPSIS_ESCENA]
- Emoción o atmósfera deseada: [ATMOSFERA_Y_EMOCION]
- Formato técnico: [FORMATO_EJ_ANAMORFICO_CINEMACOPE_O_VERTICAL_9_16]

Desglosa la secuencia plano por plano en una tabla con los siguientes parámetros técnicos:
- Plano Nº y Duración:
- Tipo de Plano: (Gran Plano General, Plano Medio, Primer Plano, Macro...)
- Ángulo y Altura de Cámara: (Picado, Contrapicado, A la altura de los ojos, Holandés...)
- Movimiento de Cámara: (Trípode estático, Travelling in/out, Grúa, Cámara en mano...)
- Lente y Diafragma: (Ej: 35mm f/1.8, 85mm f/1.4 con bokeh suave...)
- Iluminación y Paleta Cromática: (Luz principal, contraluz, temperatura en Kelvin, sombras duras/suaves...)
- Efectos de Sonido (Foley) y Banda Sonora:
- Instrucción de Generación IA: (Prompt en inglés listo para Runway Gen-3, Luma Dream Machine o Sora).`,
    exampleUse: 'Desglosar un spot de 30 segundos sobre una fragancia deportiva nocturna en un entorno urbano lluvioso estilo neo-noir.',
    expectedResult: 'Desglose técnico cinematográfico completo listo para presentar a clientes o alimentar generadores de vídeo con IA.',
    tips: 'Incluye siempre el prompt en inglés para herramientas como Runway o Kling para unificar la preproducción.'
  },
  {
    id: 'p-30',
    title: 'Guion para Vídeo Explicativo B2B / SaaS (Demostración de Producto)',
    category: 'Creación de Vídeos',
    categoryId: 'cat-video',
    difficulty: 'Master',
    rating: 4.9,
    views: 1150,
    copies: 490,
    tags: ['SaaS', 'B2B', 'Explicativo', 'Demostración', 'Ventas'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Estructura de vídeo promocional de 90 segundos que convierte visitantes fríos en usuarios de prueba para software y servicios.',
    fullPrompt: `Eres un copywriter audiovisual especializado en vídeos explicativos para startups tecnológicas de Silicon Valley.

Escribe el guion para un vídeo explicativo de producto de 90 segundos para:
- Nombre del software/producto: [NOMBRE_PRODUCTO]
- Problema crítico que soluciona: [DOLOR_PRINCIPAL]
- Solución única que ofrece: [SOLUCION_DIFERENCIAL]
- Público decisor: [PERFIL_DECISOR_EJ_CTO_DIRECTOR_OPERACIONES]
- Oferta / Prueba gratuita: [OFERTA_PRUEBA]

Sigue la fórmula de 5 fases de alta conversión:
1. "El dolor diario" (0-15s): Muestra la frustración de la tarea manual actual sin el software.
2. "La falsa solución" (15-25s): Por qué las herramientas actuales parchean el problema pero lo empeoran.
3. "Presentación de la solución" (25-45s): Introducción triunfal de la plataforma con metáfora visual clara.
4. "Las 3 funciones clave en acción" (45-75s): 3 micro-beneficios directos con demostración de interfaz gráfica.
5. "Llamada a la acción irresistible" (75-90s): Eliminación del riesgo (sin tarjeta, configuración en 2 minutos).`,
    exampleUse: 'Guion para un CRM con IA para despachos de abogados que automatiza la redacción de contratos.',
    expectedResult: 'Guion comercial milimétrico que equilibra empatía con dolor técnico y demostración de valor económico.',
    tips: 'Evita tecnicismos innecesarios; enfócate en el tiempo o dinero ahorrado por el usuario.'
  },
  {
    id: 'p-31',
    title: 'Parrilla y Plan de Producción de Podcast / Videopodcast',
    category: 'Creación de Vídeos',
    categoryId: 'cat-video',
    difficulty: 'Experto',
    rating: 4.7,
    views: 840,
    copies: 330,
    tags: ['Podcast', 'Entrevista', 'Producción', 'Preguntas', 'Escaleta'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Genera la escaleta completa, preguntas de impacto e investigación previa para episodios de podcast con invitados de nivel.',
    fullPrompt: `Actúa como productor ejecutivo de podcasts de entrevistas líderes en las listas de Spotify y Apple Podcasts.

Diseña la escaleta y preparación integral para un episodio de 45-60 minutos:
- Tema central del episodio: [TEMA_EPISODIO]
- Perfil del invitado/a: [NOMBRE_Y_TRAYECTORIA_INVITADO]
- Audiencia oyente: [TIPO_DE_AUDIENCIA]
- Objetivo del episodio: [OBJETIVO_PEDAGOGICO_O_INSPIRACIONAL]

Entrega:
1. Introducción teaser (60s): Frase o extracto hipotético más impactante para abrir el episodio.
2. Bio de presentación del invitado: Dinámica, no un simple currículum aburrido.
3. Escaleta por bloques temporales con objetivos de contenido por bloque.
4. Batería de 10 preguntas no convencionales: Evita las preguntas tópicas que todo el mundo le hace. Incluye preguntas de dilema, anécdotas de fracaso y aprendizajes contraintuitivos.
5. Pregunta insignia final: Una pregunta memorable para cerrar el episodio y crear marca personal.
6. 3 Ideas de clips cortos para redes (Shorts/Reels) a extraer de la conversación.`,
    exampleUse: 'Preparar la escaleta de entrevista a un fundador de una marca de ropa sostenible que factura 10 millones de euros anuales.',
    expectedResult: 'Guía completa de rodaje para conducir una entrevista fluida, profunda y con alto potencial de difusión en redes.',
    tips: 'Comparte con el invitado los temas generales antes de grabar, pero guarda las 3 preguntas más incisivas para el directo.'
  },
  {
    id: 'p-32',
    title: 'Prompts de Animación y Movimiento para Generadores de Vídeo con IA',
    category: 'Creación de Vídeos',
    categoryId: 'cat-video',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1670,
    copies: 790,
    tags: ['Runway', 'Kling', 'Sora', 'Luma', 'Prompts Vídeo'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Crea instrucciones avanzadas de cámara, física de fluidos, consistencia de personajes y temporalidad para Runway, Kling y Luma.',
    fullPrompt: `Eres un ingeniero de prompts y especialista técnico en modelos generativos de vídeo (Runway Gen-3 Alpha, Kling AI, Luma Dream Machine, OpenAI Sora).

Convierte la siguiente idea visual en 4 variantes de prompt en inglés optimizadas para movimiento y coherencia:
- Idea visual: [DESCRIPCION_DE_LA_ESCENA]
- Dinámica del movimiento: [VELOCIDAD_Y_TIPO_DE_MOVIMIENTO]
- Estilo estético: [ESTILO_EJ_HIPERREALISTA_FOTOPERIODISMO_SCI_FI_ANIME]

Para cada variante proporciona:
1. PROMPT EN INGLÉS: Utilizando vocabulario de cámara técnico (pan, tilt, pedestal, rack focus, seamless morphing, volumetric lighting, photorealistic 8k, motion blur natural).
2. PARÁMETROS RECOMENDADOS: (Motion brush, Camera controls, FPS, Aspect Ratio 16:9 o 9:16).
3. PROMPT NEGATIVO: (Morphing deformities, jittering, flickering, floating artifacts, duplicate limbs).
4. CONSEJO DE INGENIERÍA: Si conviene usar Image-to-Video (I2V) o Text-to-Video (T2V) para ese resultado.`,
    exampleUse: 'Una cámara volando a ras de suelo por un desierto de arena cristalina que se ilumina con auroras boreales violetas.',
    expectedResult: 'Prompts en inglés de alta precisión técnica para evitar aberraciones y lograr movimiento fluido de cámara en IA.',
    tips: 'Para vídeo con IA, describe el movimiento de la cámara y del sujeto por separado usando comas estructuradas.'
  },

  // ==========================================
  // CATEGORÍA 6: Programación, desarrollo web y aplicaciones (cat-codigo)
  // Prompts 33 a 40
  // ==========================================
  {
    id: 'p-33',
    title: 'Arquitecto de Software: Diseño de API RESTful Escalable y Documentada',
    category: 'Programación y Software',
    categoryId: 'cat-codigo',
    difficulty: 'Experto',
    rating: 4.9,
    views: 1820,
    copies: 870,
    tags: ['Backend', 'API REST', 'TypeScript', 'Node.js', 'Arquitectura'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Diseña la arquitectura completa de endpoints REST, modelos de datos, manejo de errores y middleware de seguridad.',
    fullPrompt: `Actúa como Lead Software Architect especializado en arquitecturas cloud modernas, APIs limpias y TypeScript robusto.

Diseña la arquitectura para el siguiente servicio o módulo backend:
- Dominio del sistema: [DOMINIO_DEL_SISTEMA]
- Entidades principales: [ENTIDADES_CLAVE]
- Base de datos prevista: [POSTGRESQL_O_MONGODB_ETC]
- Requisitos de autenticación y roles: [ROLES_Y_PERMISOS]

Genera un diseño de arquitectura profesional que contenga:
1. MAPA DE ENDPOINTS RESTful: Verbos HTTP, rutas normalizadas (plural), códigos de estado esperados (200, 201, 400, 401, 403, 404, 409, 500).
2. ESQUEMA DE DATOS / INTERFACES TYPESCRIPT: Tipado estricto para cada entidad (Request DTOs, Response DTOs, DB Entities).
3. ESTRATEGIA DE MIDDLEWARES: Autenticación JWT, validación de esquemas (con Zod), limitación de tasa (rate limiting) y logging.
4. MANEJO CENTRALIZADO DE ERRORES: Estructura JSON estándar para respuestas de error (code, message, timestamp, details).
5. EJEMPLO DE CÓDIGO COMPLETO: Implementación limpia de uno de los controladores principales utilizando buenas prácticas (Clean Code / Controller-Service-Repository pattern).`,
    exampleUse: 'Diseñar la API para un sistema de reservas de salas de coworking con gestión de membresías, créditos y facturación periódica.',
    expectedResult: 'Documento de especificación técnica y código de referencia listo para implementar en un repositorio empresarial.',
    tips: 'Indica si requieres compatibilidad con Swagger/OpenAPI para que genere también las anotaciones.'
  },
  {
    id: 'p-34',
    title: 'Code Reviewer Senior & Refactorización a Clean Code',
    category: 'Programación y Software',
    categoryId: 'cat-codigo',
    difficulty: 'Master',
    rating: 4.9,
    views: 2190,
    copies: 1040,
    tags: ['Code Review', 'Clean Code', 'Refactoring', 'Seguridad', 'TypeScript'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Audita código en busca de vulnerabilidades, cuellos de botella de rendimiento, bugs y violaciones de principios SOLID.',
    fullPrompt: `Eres un Principal Staff Engineer y Auditor de Seguridad de Software.

Analiza el siguiente fragmento de código con el máximo nivel de rigor técnico:
\`\`\`[LENGUAJE]
[PEGA_AQUÍ_TU_CÓDIGO]
\`\`\`

Proporciona una revisión estructurada en 5 secciones:
1. DIAGNÓSTICO DE VULNERABILIDADES DE SEGURIDAD:
   - Inyección (SQL/NoSQL/XSS), control de acceso deficiente, exposición de datos sensibles, manejo de secretos.
2. ANÁLISIS DE RENDIMIENTO Y COMPLEJIDAD:
   - Complejidad temporal y espacial en notación Big-O (O(n), O(n^2)...).
   - Fugas de memoria, re-renders innecesarios o consultas N+1 en bases de datos.
3. VIOLACIONES DE CLEAN CODE Y PRINCIPIOS SOLID:
   - Nombres ambiguos, funciones demasiado largas, acoplamiento alto, efectos secundarios no declarados.
4. CÓDIGO REFACTORIZADO:
   - Escribe la versión final completamente reescrita, tipada, modular y comentada con estándares de producción.
5. SUITE DE TESTS UNITARIOS SUGERIDOS:
   - 3 casos de prueba críticos (Happy Path, Edge Case y Error Path) usando Jest, Vitest o el framework correspondiente.`,
    exampleUse: 'Auditar una función en React/TypeScript que gestiona el carrito de compras con estados complejos y llamadas a localStorage.',
    expectedResult: 'Informe técnico de calidad de código con código refactorizado listo para copiar y pruebas unitarias.',
    tips: 'Incluye las dependencias o bibliotecas auxiliares que utilizas para que la solución sea 100% compatible.'
  },
  {
    id: 'p-35',
    title: 'Generador de Componentes React Modernos con Tailwind CSS y Accesibilidad',
    category: 'Programación y Software',
    categoryId: 'cat-codigo',
    difficulty: 'Experto',
    rating: 4.8,
    views: 2780,
    copies: 1390,
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Accesibilidad', 'UI'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Crea componentes React funcionales, tipados con TypeScript, estilos modernos de Tailwind y accesibilidad ARIA completa.',
    fullPrompt: `Actúa como Frontend Architect y especialista en Sistemas de Diseño UI/UX y Accesibilidad Web (WCAG 2.1 AA).

Crea un componente completo en React 19 + TypeScript + Tailwind CSS para:
- Nombre del componente: [NOMBRE_COMPONENTE]
- Funcionalidad y comportamiento: [COMPORTAMIENTO_DEL_COMPONENTE]
- Estados requeridos: (default, hover, active, focus-visible, disabled, loading, error...)
- Props personalizables: [PROPS_REQUERIDAS]

Requisitos indispensables del código:
1. TIPADO TYPESCRIPT RIGUROSO: Interface exportada con todas las props documentadas mediante JSDoc.
2. ACCESIBILIDAD TOTAL (A11y): Atributos ARIA correspondientes (aria-expanded, aria-controls, role, etc.), soporte completo de navegación por teclado (Tab, Enter, Escape, Arrow keys).
3. ESTILOS TAILWIND CSS LIMPIOS: Diseño moderno y pulido, compatible con modo oscuro, sin clases arbitrarias innecesarias.
4. GESTIÓN DE ESTADO LOCAL: Hooks de React (useState, useRef, useEffect) optimizados sin provocar bucles de re-renderizado.
5. EJEMPLO DE CONSUMO: Código de ejemplo mostrando cómo importar y utilizar el componente en una vista real.`,
    exampleUse: 'Crear un componente de Menú Desplegable (Dropdown) con búsqueda interna, selección múltiple y badges de selección con botón de borrado.',
    expectedResult: 'Código TypeScript y JSX listo para copiar y pegar en un proyecto real sin errores de compilación.',
    tips: 'Especifica si utilizas bibliotecas de iconos como Lucide React o Heroicons para que las incluya en el código.'
  },
  {
    id: 'p-36',
    title: 'Depurador y Cazador de Errores Complejos (Stack Trace Debugger)',
    category: 'Programación y Software',
    categoryId: 'cat-codigo',
    difficulty: 'Experto',
    rating: 4.9,
    views: 1950,
    copies: 910,
    tags: ['Debugging', 'Errores', 'Stack Trace', 'Solución de Problemas', 'Dev'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Analiza trazas de error, excepciones no controladas y comportamientos inesperados para identificar la causa raíz exacta.',
    fullPrompt: `Eres un ingeniero sénior de soporte de nivel 3 y experto en depuración de sistemas distribuidos y desarrollo de software.

Tengo el siguiente error crítico en mi aplicación:
- Lenguaje / Entorno / Framework: [ENTORNO_Y_VERSIONES]
- Mensaje de error / Stack trace:
\`\`\`
[PEGA_AQUÍ_EL_ERROR_COMPLETO]
\`\`\`
- Contexto de lo que estaba haciendo el usuario o la aplicación: [QUE_ESTABA_SUCEDIENDO]
- Fragmento de código donde se origina:
\`\`\`
[PEGA_EL_CODIGO_RELACIONADO]
\`\`\`

Tu misión:
1. IDENTIFICAR LA CAUSA RAÍZ: Explica en 2 párrafos claros exactamente por qué se produce el fallo (diferencia entre el síntoma y el origen real del problema).
2. SOLUCIÓN PASO A PASO: Pasos exactos que debo seguir para remediarlo.
3. CÓDIGO CORREGIDO: Muestra las líneas precisas que debo cambiar o la función reescrita.
4. MECANISMO DE PREVENCIÓN DEFENSIVA: Cómo blindar el código (con type guards, try/catch específicos o validaciones previas) para que este error no vuelva a ocurrir en el futuro.`,
    exampleUse: 'Depurar un error "TypeError: Cannot read properties of undefined (reading map)" en una app Next.js al cargar datos de una API asíncrona.',
    expectedResult: 'Diagnóstico fulminante con solución directa y código defensivo para evitar caídas en producción.',
    tips: 'Incluye siempre el stack trace completo con los números de línea para un diagnóstico exacto.'
  },
  {
    id: 'p-37',
    title: 'Consultor de Optimización y Consultas Complejas SQL / PostgreSQL',
    category: 'Programación y Software',
    categoryId: 'cat-codigo',
    difficulty: 'Master',
    rating: 4.9,
    views: 1430,
    copies: 680,
    tags: ['SQL', 'PostgreSQL', 'Base de Datos', 'Optimización', 'Índices'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Escribe y optimiza consultas SQL complejas con agregaciones, window functions, CTEs y diseño de índices estratégicos.',
    fullPrompt: `Actúa como Administrador de Base de Datos (DBA) sénior y especialista en optimización de bases de datos relacionales (PostgreSQL/MySQL).

Tengo el siguiente requerimiento o consulta lenta:
- Esquema de las tablas involucradas (DDL resumido o columnas): [TABLAS_Y_COLUMNAS]
- Volumen estimado de registros: [VOLUMEN_DE_DATOS_EJ_5_MILLONES]
- Objetivo de negocio de la consulta: [QUE_DATOS_NECESITO_OBTENER]
- Consulta actual (si existe): [CONSULTA_ACTUAL_O_DEJAR_VACIO]

Genera:
1. LA CONSULTA SQL OPTIMIZADA: Utilizando buenas prácticas modernas (Common Table Expressions - CTE, Window Functions, Joins adecuados, evitando subqueries correlacionadas innecesarias).
2. ANÁLISIS DE RENDIMIENTO (EXPLAIN ANALYZE teórico): Explicación de cómo el motor recorrerá los datos y por qué esta consulta minimiza lecturas de disco.
3. ESTRATEGIA DE ÍNDICES RECOMENDADOS: Sentencias CREATE INDEX (B-Tree, GIN, índices compuestos o parciales) para garantizar tiempos de respuesta en milisegundos.
4. CONSIDERACIONES DE CONCURRENCIA: Consejos sobre bloqueos, aislamiento de transacciones y paginación eficiente (Keyset pagination vs Offset/Limit).`,
    exampleUse: 'Obtener el top 5 clientes que más han gastado por mes en el último año junto con el porcentaje que representa sobre el total facturado ese mes.',
    expectedResult: 'Consulta SQL hiper-eficiente con índices precisos para ejecutarse sobre millones de filas sin saturar la CPU.',
    tips: 'Para paginaciones con millones de filas, especifica que prefieres Keyset pagination (cursor) en lugar de OFFSET.'
  },
  {
    id: 'p-38',
    title: 'Generador de Regex Complejas y Explicadas Paso a Paso',
    category: 'Programación y Software',
    categoryId: 'cat-codigo',
    difficulty: 'Principiante',
    rating: 4.7,
    views: 2610,
    copies: 1410,
    tags: ['Regex', 'Expresiones Regulares', 'Validación', 'Patrones', 'Herramientas'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Crea expresiones regulares a prueba de fallos con explicación desglosada de cada grupo y batería de pruebas positiva y negativa.',
    fullPrompt: `Eres un especialista en patrones y compiladores con dominio absoluto de expresiones regulares (RegEx) para JavaScript/Python/PCRE.

Necesito una expresión regular para validar o extraer el siguiente patrón:
- Propósito del patrón: [PROPOSITO_EJ_VALIDAR_IBAN_O_EXTRAER_URLS_MARKDOWN]
- Casos que DEBEN coincidir (coincidencias válidas): [EJEMPLOS_POSITIVOS]
- Casos que DEBEN ser rechazados (coincidencias inválidas): [EJEMPLOS_NEGATIVOS]
- Motor / Lenguaje objetivo: [JAVASCRIPT_PYTHON_PCRE_ETC]

Entrega:
1. LA EXPRESIÓN REGULAR COMPLETA: Lista para usar entre delimitadores con sus flags (g, i, m, u, s).
2. DESGLOSE ANATÓMICO PASO A PASO: Explicación de cada token, grupo de captura, anclaje y cuantificador.
3. ADVERTENCIAS DE SEGURIDAD (ReDoS): Garantía de que la expresión no sufre de retroceso catastrófico (Catastrophic Backtracking).
4. EJEMPLO DE CÓDIGO IMPLEMENTADO: Fragmento de código funcional en el lenguaje elegido probando los casos válidos e inválidos.`,
    exampleUse: 'Validar contraseñas complejas: mínimo 8 caracteres, al menos una mayúscula, un número, un símbolo especial y sin espacios en blanco.',
    expectedResult: 'Regex precisa y segura con explicación pedagógica y código de validación listo para producción.',
    tips: 'Indica si necesitas grupos con nombre (?<nombre>...) para extraer fácilmente partes específicas del texto.'
  },
  {
    id: 'p-39',
    title: 'Generador de Pipelines CI/CD con GitHub Actions y Docker',
    category: 'Programación y Software',
    categoryId: 'cat-codigo',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1220,
    copies: 560,
    tags: ['DevOps', 'CI/CD', 'GitHub Actions', 'Docker', 'Automatización'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Configura flujos de integración y despliegue continuo automatizados con testing, linters, seguridad y build de contenedores.',
    fullPrompt: `Actúa como Ingeniero DevOps sénior y especialista en Cloud Automation.

Crea un workflow de GitHub Actions completo en YAML para:
- Tipo de proyecto / Stack: [STACK_EJ_NODE_REACT_NESTJS_PYTHON]
- Gestor de paquetes: [NPM_PNPM_YARN_POETRY]
- Pasos requeridos: [LINT_TESTS_BUILD_DOCKER_DEPLOY]
- Entorno de destino: [DESTINO_EJ_GITHUB_PAGES_VERCEL_AWS_ECS_VPS]

El archivo de configuración (.github/workflows/main.yml) debe incluir:
1. Disparadores inteligentes (Triggers en push a main y pull requests).
2. Concurrencia para cancelar ejecuciones anteriores si se hace un nuevo push.
3. Caché de dependencias para acelerar la ejecución a menos de 2 minutos.
4. Jobs organizados con dependencias limpias (needs: [lint, test]).
5. Manejo seguro de secretos (secrets.GITHUB_TOKEN o variables de entorno).
6. Notificación o comentarios claros en cada paso del proceso.`,
    exampleUse: 'Configurar un workflow para compilar una app React con Vite, ejecutar tests unitarios con Vitest y desplegar automáticamente en GitHub Pages.',
    expectedResult: 'Archivo YAML limpio y funcional que no falla en la primera ejecución en GitHub Actions.',
    tips: 'Asegúrate de conceder permisos de escritura en el workflow (permissions: contents: write) si publicas en GitHub Pages.'
  },
  {
    id: 'p-40',
    title: 'Conversor y Adaptador de Código Multi-Lenguaje Idiomático',
    category: 'Programación y Software',
    categoryId: 'cat-codigo',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1530,
    copies: 730,
    tags: ['Migración', 'Python', 'TypeScript', 'Go', 'Rust'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Traduce código entre lenguajes no palabra por palabra, sino adoptando los modismos y buenas prácticas del lenguaje de destino.',
    fullPrompt: `Eres un ingeniero políglota con más de 15 años de experiencia programando en C++, Java, Python, Go, Rust y TypeScript.

Traduce y adapta el siguiente código fuente:
- Código original:
\`\`\`[LENGUAJE_ORIGEN]
[PEGA_AQUÍ_EL_CÓDIGO_ORIGINAL]
\`\`\`
- Lenguaje de destino: [LENGUAJE_DESTINO]
- Requisitos específicos de la versión destino: [VERSION_O_FRAMEWORK]

Pautas obligatorias:
1. No hagas una traducción literal. Usa las estructuras idiomáticas propias del lenguaje destino (por ejemplo, en Python usa list comprehensions y context managers; en Go usa goroutines y canales; en Rust usa Result/Option y ownership limpio).
2. Manejo de tipos de datos nativos más eficientes del entorno de destino.
3. Manejo de errores nativo (nada de simular excepciones si el lenguaje usa valores de retorno).
4. Breve lista comparativa de las diferencias clave entre ambas implementaciones y qué ventajas aporta la versión adaptada.`,
    exampleUse: 'Traducir un script de procesamiento de datos con Pandas en Python a TypeScript moderno usando streams asíncronos en Node.js.',
    expectedResult: 'Código completamente idiomático que parece escrito por un desarrollador nativo de la tecnología de destino.',
    tips: 'Menciona si necesitas que las firmas de las funciones se mantengan compatibles con algún cliente existente.'
  },

  // ==========================================
  // CATEGORÍA 7: Negocios, emprendimiento y estrategia (cat-negocios)
  // Prompts 41 a 46
  // ==========================================
  {
    id: 'p-41',
    title: 'Plan de Negocio Ejecutivo en 1 Página (Lean Canvas Estratégico)',
    category: 'Negocios y Estrategia',
    categoryId: 'cat-negocios',
    difficulty: 'Principiante',
    rating: 4.9,
    views: 2310,
    copies: 1140,
    tags: ['Lean Canvas', 'Emprendimiento', 'Startup', 'Modelo de Negocio', 'Estrategia'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Genera un Lean Canvas completo validando problemas, clientes, propuesta única de valor, canales y métricas clave.',
    fullPrompt: `Actúa como mentor de aceleradoras de startups tipo Y Combinator o Techstars.

Desarrolla un Lean Canvas estratégico exhaustivo para la siguiente idea de negocio:
- Idea / Modelo: [DESCRIPCION_IDEA]
- Perfil de cliente inicial (Early Adopter): [CLIENTE_INICIAL]
- Sector o industria: [SECTOR]

Desarrolla en profundidad los 9 bloques del Lean Canvas:
1. PROBLEMA: Los 3 problemas principales no resueltos y las alternativas actuales que usa la gente.
2. SEGMENTO DE CLIENTES: Early adopters hiper-específicos que sufren el problema de forma aguda.
3. PROPUESTA DE VALOR ÚNICA: Frase contundente, clara y memorable que explica qué hace, para quién y por qué es diferente.
4. SOLUCIÓN: Las 3 funciones mínimas imprescindibles para resolver los 3 problemas del bloque 1.
5. CANALES DE DISTRIBUCIÓN: Estrategia de captación orgánica y de pago para llegar a los primeros 100 clientes.
6. FUENTES DE INGRESOS: Modelo de monetización (suscripción, comisión, venta única, freemium) y precios estimados.
7. ESTRUCTURA DE COSTES: Costes fijos y variables críticos para los primeros 12 meses.
8. MÉTRICAS CLAVE (North Star Metric y métricas de soporte de retención y activación).
9. VENTAJA INJUSTA (Unfair Advantage): Qué activo o barrera de entrada no puede ser fácilmente copiado o comprado por competidores grandes.`,
    exampleUse: 'Crear un Lean Canvas para una plataforma B2B de alquiler de maquinaria pesada entre constructoras locales.',
    expectedResult: 'Un análisis de viabilidad ágil y completo para validar la idea antes de invertir capital o desarrollo técnico.',
    tips: 'La ventaja injusta real no es "somos más baratos" ni "tenemos mejor servicio"; busca efectos de red, datos propios o acuerdos exclusivos.'
  },
  {
    id: 'p-42',
    title: 'Auditoría de Competencia y Análisis DAFO / FODA Profundo',
    category: 'Negocios y Estrategia',
    categoryId: 'cat-negocios',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1470,
    copies: 650,
    tags: ['FODA', 'DAFO', 'Competencia', 'Benchmark', 'Estrategia'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Analiza competidores directos e indirectos y construye una matriz DAFO con planes de acción cruzados (estrategias CAME).',
    fullPrompt: `Eres un consultor de estrategia empresarial de una firma de élite (McKinsey/Bain).

Realiza un análisis competitivo y matriz DAFO/CAME para:
- Mi empresa/proyecto: [NOMBRE_Y_QUE_HACE]
- Competidores directos conocidos: [COMPETIDORES]
- Mercado geográfico: [MERCADO_OBJETIVO]

Estructura del informe:
1. TABLA COMPARATIVA DE COMPETIDORES: Fortalezas, debilidades, rango de precios, propuesta de valor y brechas de mercado descubiertas.
2. MATRIZ DAFO DETALLADA:
   - Debilidades internas (mínimo 4)
   - Amenazas externas del mercado y regulatorias (mínimo 4)
   - Fortalezas internas únicas (mínimo 4)
   - Oportunidades no explotadas (mínimo 4)
3. MATRIZ CAME (Planes de acción concretos):
   - Corregir las debilidades
   - Afrontar las amenazas
   - Mantener y potenciar las fortalezas
   - Explotar las oportunidades
4. CONCLUSIÓN ESTRATÉGICA: Los 3 movimientos tácticos prioritarios para los próximos 90 días.`,
    exampleUse: 'Auditar el mercado para una marca de café de especialidad tostado localmente que compite contra marcas comerciales y cafeterías de franquicia.',
    expectedResult: 'Matriz estratégica completa que va más allá de un listado teórico, ofreciendo iniciativas operativas directas.',
    tips: 'Pide que priorice las oportunidades según su impacto potencial versus esfuerzo de ejecución.'
  },
  {
    id: 'p-43',
    title: 'Guion de Pitch Deck para Ronda de Inversión (10 Diapositivas)',
    category: 'Negocios y Estrategia',
    categoryId: 'cat-negocios',
    difficulty: 'Master',
    rating: 4.9,
    views: 1890,
    copies: 820,
    tags: ['Pitch Deck', 'Inversores', 'Venture Capital', 'Financiación', 'Presentación'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Elabora el contenido narrativo, datos e infografía recomendada para una presentación de 10 diapositivas para inversores.',
    fullPrompt: `Actúa como inversor ángel y socio de un fondo de Venture Capital con inversiones en unicornios tecnológicos.

Redacta el contenido exhaustivo de las 10 diapositivas clave de un Pitch Deck para convencer a inversores:
- Nombre del proyecto: [NOMBRE_STARTUP]
- Ronda que busca levantar: [CANTIDAD_A_LEVANTAR_EJ_500K_PRE_SEED]
- Métrica actual o estado: [TRACCION_ACTUAL_EJ_BETA_O_10K_MRR]
- Sector: [SECTOR]

Para cada una de las 10 diapositivas proporciona:
1. Título de la diapositiva (un titular de valor, no solo la palabra "Problema").
2. Mensaje central en 1 frase memorable.
3. Puntos clave y cifras numéricas a destacar.
4. Elemento visual recomendado (gráfico, captura de pantalla, diagrama).
5. Discurso del orador (el guion exacto de 20 a 30 segundos que debe decir el fundador mientras se muestra la diapositiva).

Las 10 diapositivas:
- Slide 1: Visión y Eleveator Pitch
- Slide 2: El Dolor del Mercado
- Slide 3: La Solución Disruptiva
- Slide 4: Tamaño del Mercado (TAM, SAM, SOM)
- Slide 5: Producto y Demostración
- Slide 6: Tracción y Métricas
- Slide 7: Modelo de Negocio y Unit Economics
- Slide 8: Competencia y Ventaja Defensiva
- Slide 9: Equipo Fundador
- Slide 10: La Petición (Uso de los Fondos e Hitos a 18 meses).`,
    exampleUse: 'Crear el pitch deck para una startup de software de logística de última milla para flotas eléctricas.',
    expectedResult: 'Guion narrativo impecable listo para plasmar en Figma, Pitch o PowerPoint.',
    tips: 'Los inversores deciden en los primeros 2 minutos; asegúrate de que el problema y el tamaño del mercado sean impactantes.'
  },
  {
    id: 'p-44',
    title: 'Estrategia de Fijación de Precios (Pricing Strategy & Tiers)',
    category: 'Negocios y Estrategia',
    categoryId: 'cat-negocios',
    difficulty: 'Experto',
    rating: 4.8,
    views: 1340,
    copies: 610,
    tags: ['Pricing', 'Monetización', 'SaaS', 'Psicología de Precios', 'Ingresos'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Diseña la estructura de precios en 3 niveles (Starter, Pro, Enterprise) aplicando psicología de anclaje y maximización de ARPU.',
    fullPrompt: `Eres un consultor especializado en monetización y psicología de precios para modelos B2B y B2C.

Diseña la tabla y política de precios para:
- Producto o servicio: [DESCRIPCION_PRODUCTO]
- Coste marginal de entrega del servicio: [COSTES_VARIABLES_ESTIMADOS]
- Público objetivo: [AUDIENCIA_OBJETIVO]

Genera:
1. DEFINICIÓN DE LA MÉTRICA DE VALOR (Value Metric): En base a qué cobramos para que el precio escale naturalmente con el éxito del cliente (por usuario, por volumen, por almacenamiento, por transacción...).
2. DISEÑO DE LOS 3 NIVELES (TIERS):
   - Nivel 1 (Entrada/Starter): Precio, para quién es, qué incluye y qué barrera artificial lo delimita.
   - Nivel 2 (El Nivel Héroe/Pro - Más popular): Precio, técnica de anclaje utilizada para que parezca la mejor opción, funciones de alto valor.
   - Nivel 3 (Empresarial/Enterprise): Precio ("Contactar" o tarifa alta), SLAs, seguridad, soporte dedicado.
3. TÁCTICAS PSICOLÓGICAS DE CONVERSIÓN: Descuento por pago anual vs mensual, garantía de devolución, períodos de prueba o freemium.
4. FAQ DE PRECIOS: 3 preguntas difíciles de clientes potenciales resueltas con respuestas comerciales convincentes.`,
    exampleUse: 'Definir los precios de una plataforma de cursos online y comunidad para profesionales del marketing.',
    expectedResult: 'Estructura de precios rentable que maximiza el valor percibido e incentiva la elección del plan intermedio.',
    tips: 'Evita cobrar por funcionalidades básicas que la competencia da gratis; cobra por el ahorro de tiempo y el volumen de negocio.'
  },
  {
    id: 'p-45',
    title: 'Plan Táctico de 90 Días para Validación y Lanzamiento de Producto',
    category: 'Negocios y Estrategia',
    categoryId: 'cat-negocios',
    difficulty: 'Experto',
    rating: 4.7,
    views: 1180,
    copies: 520,
    tags: ['Go-to-Market', 'Lanzamiento', 'Validación', 'Plan 90 Días', 'Gestión'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Plan paso a paso dividido en semanas para validar hipótesis, construir el MVP y conseguir los primeros clientes de pago.',
    fullPrompt: `Actúa como Chief Operating Officer (COO) y especialista en Go-To-Market para nuevos productos digitales y físicos.

Elabora un plan de acción riguroso de 90 días dividido en 3 fases mensuales para lanzar:
- Producto/Servicio: [PRODUCTO_A_LANZAR]
- Recursos disponibles: [PRESUPUESTO_Y_TAMANO_EQUIPO]
- Meta cuantitativa al día 90: [META_EJ_100_CLIENTES_DE_PAGO]

Estructura semana a semana:
- MES 1 (Semanas 1 a 4) - DESCUBRIMIENTO Y PRE-VENTA: Entrevistas con clientes potenciales, landing page de captación de lista de espera, validación de disposición a pagar (intent to pay) sin escribir código innecesario.
- MES 2 (Semanas 5 a 8) - CONSTRUCCIÓN ÁGIL DEL MVP: Alcance mínimo viable, pruebas cerradas con 10 usuarios beta (alfa testers), recolección de feedback cualitativo.
- MES 3 (Semanas 9 a 12) - LANZAMIENTO PÚBLICO Y ESCALADO: Campaña en Product Hunt / redes, outreach directo a prospectos, soporte al cliente intensivo y optimización del embudo de conversión.

Cada semana debe incluir: Tarea prioritaria, responsable sugerido, métrica de éxito semanal y riesgo principal a mitigar.`,
    exampleUse: 'Lanzar un servicio de suscripción mensual de snacks saludables para oficinas corporativas en Madrid y Barcelona.',
    expectedResult: 'Cronograma operativo claro que elimina la parálisis por análisis y orienta todos los esfuerzos al cierre de ventas.',
    tips: 'No pases al Mes 2 sin haber validado en el Mes 1 que hay personas dispuestas a pagar dinero real por la solución.'
  },
  {
    id: 'p-46',
    title: 'Análisis de Riesgos Empresariales y Plan de Contingencia',
    category: 'Negocios y Estrategia',
    categoryId: 'cat-negocios',
    difficulty: 'Experto',
    rating: 4.8,
    views: 990,
    copies: 410,
    tags: ['Riesgos', 'Compliance', 'Seguridad', 'Continuidad de Negocio', 'Estrategia'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Identifica vulnerabilidades financieras, operativas, legales y tecnológicas con matrices de probabilidad e impacto y planes de choque.',
    fullPrompt: `Eres un director de gestión de riesgos (Chief Risk Officer) y auditor de continuidad de negocio.

Realiza un mapa de riesgos integral para la siguiente organización o proyecto:
- Tipo de empresa y modelo: [ACTIVIDAD_EMPRESARIAL]
- Mercados donde opera: [PAISES_O_REGIONES]
- Dependencias clave (proveedores, tecnología, empleados clave): [DEPENDENCIAS_CRITICAS]

Genera:
1. MATRIZ DE RIESGOS (Probabilidad 1-5 vs Impacto 1-5) clasificando al menos 8 riesgos en:
   - Riesgos Operativos y Tecnológicos (caída de sistemas, brecha de datos).
   - Riesgos Financieros y de Liquidez (impagos, fluctuación de costes).
   - Riesgos Legales y Regulatorios (RGPD, cambios de normativas locales).
   - Riesgos de Reputación y Mercado (crisis de relaciones públicas, entrada de gigante competidor).
2. PROTOCOLO DE MITIGACIÓN PREVENTIVA para cada uno de los riesgos críticos identificados.
3. PLAN DE CONTINUIDAD DE NEGOCIO (BCP) en caso de que ocurra el peor escenario: Pasos de las primeras 48 horas, portavoces oficiales y medidas de salvaguarda.`,
    exampleUse: 'Analizar los riesgos de una tienda e-commerce que factura 2 millones de euros dependiendo al 80% de anuncios en Meta y proveedores en Asia.',
    expectedResult: 'Mapa de vulnerabilidades con protocolos de acción claros para proteger la supervivencia del negocio ante crisis imprevistas.',
    tips: 'Diversificar los canales de captación y los proveedores es casi siempre la primera medida de mitigación.'
  },

  // ==========================================
  // CATEGORÍA 8: Ventas, comercio electrónico y atención al cliente (cat-ventas)
  // Prompts 47 a 52
  // ==========================================
  {
    id: 'p-47',
    title: 'Secuencia de Cold Emails B2B de Alta Conversión (4 Pasos)',
    category: 'Ventas y E-commerce',
    categoryId: 'cat-ventas',
    difficulty: 'Experto',
    rating: 4.9,
    views: 2540,
    copies: 1280,
    tags: ['Cold Email', 'Ventas B2B', 'Outreach', 'Prospección', 'Conversión'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Secuencia de 4 correos fríos directos y personalizados orientados a conseguir reuniones con directores y tomadores de decisiones.',
    fullPrompt: `Actúa como uno de los mejores directores de desarrollo de ventas (Head of Sales / SDR Leader) B2B del mundo.

Escribe una secuencia de prospección en frío de 4 correos electrónicos con alta tasa de respuesta (superando el 25% de reply rate):
- Mi empresa y valor diferencial: [MI_EMPRESA_Y_PROPUESTA]
- Perfil del decisor a contactar: [CARGO_EJ_DIRECTOR_DE_MARKETING_O_CFO]
- Sector del prospecto: [SECTOR_PROSPECTO]
- Objetivo de la llamada: [REUNION_DE_15_MINUTOS_O_DEMO]

Diseña la secuencia con intervalos recomendados:
1. Email 1 (Día 1) - "El problema observable": Asunto corto (menos de 4 palabras), observación personalizada no genérica, pregunta abierta sobre su proceso actual sin enviar folletos de venta.
2. Email 2 (Día 4) - "El caso de estudio breve": Seguimiento ágil mencionando un resultado tangible logrado con un competidor o cliente de su mismo sector en 2 líneas.
3. Email 3 (Día 8) - "El recurso de valor o perspectiva contraria": Aporta una idea o auditoría rápida gratuita que le haga reflexionar sobre su coste de inacción.
4. Email 4 (Día 14) - "El Break-up Email elegante": Despedida profesional que retira la presión comercial y que suele generar la mayor tasa de respuestas por psicología de escasez.`,
    exampleUse: 'Contactar a directores de recursos humanos de empresas de más de 200 empleados para ofrecer un programa de salud mental para equipos.',
    expectedResult: 'Secuencia de correos concisa, empática y persuasiva que no parece spam automatizado.',
    tips: 'Mantén los correos fríos en menos de 100 palabras por mensaje; los directores leen el correo en el móvil en pocos segundos.'
  },
  {
    id: 'p-48',
    title: 'Manual de Tratamiento de Objeciones de Venta Difíciles',
    category: 'Ventas y E-commerce',
    categoryId: 'cat-ventas',
    difficulty: 'Experto',
    rating: 4.9,
    views: 1980,
    copies: 940,
    tags: ['Objeciones', 'Cierre de Ventas', 'Negociación', 'Técnicas de Venta', 'B2B'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Guion de respuestas persuasivas para las objeciones más habituales: "es muy caro", "no tengo tiempo", "ya trabajo con otro".',
    fullPrompt: `Eres un entrenador de equipos de ventas de élite formado en metodologías Sandler, SPIN Selling y Challenger Sale.

Desarrolla el manual táctico de resolución de objeciones para:
- Producto / Servicio que vendo: [PRODUCTO_O_SERVICIO]
- Rango de precio: [PRECIO]
- Principal competidor o alternativa: [COMPETIDOR]

Proporciona para cada una de las 5 objeciones clásicas:
1. "Es demasiado caro / No tenemos presupuesto ahora".
2. "Ya tenemos un proveedor con el que estamos satisfechos".
3. "Envíame información por email y ya te diremos algo".
4. "Tenemos que consultarlo internamente con el comité / dirección".
5. "Ahora mismo no es una prioridad para nosotros".

Para cada una de ellas desglosa:
- Lo que realmente significa la objeción en el subconsciente del cliente.
- Qué NO decir nunca (el error que comete el 90% de los vendedores).
- Técnica de validación y cambio de marco (reframe).
- Script literal de respuesta que reabre la conversación hacia el coste de no solucionar el problema.`,
    exampleUse: 'Superar objeciones en la venta de servicios de consultoría de ciberseguridad a directores de tecnología de medianas empresas.',
    expectedResult: 'Respuestas elegantes y contundentes para mantener el control de la llamada sin resultar agresivo.',
    tips: 'Nunca discutas con el cliente; valida su punto de vista antes de hacer una pregunta que desmonte su objeción.'
  },
  {
    id: 'p-49',
    title: 'Ficha de Producto de E-commerce Orientada a Conversión (Copywriting SEO)',
    category: 'Ventas y E-commerce',
    categoryId: 'cat-ventas',
    difficulty: 'Principiante',
    rating: 4.8,
    views: 2210,
    copies: 1110,
    tags: ['E-commerce', 'Shopify', 'Ficha de Producto', 'SEO', 'Copywriting'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Redacta descripciones de producto para tiendas online que combinan posicionamiento orgánico con psicología de compra.',
    fullPrompt: `Actúa como especialista en conversión para comercio electrónico (CRO) y redactor de fichas de producto de alta gama.

Crea el contenido completo y optimizado para una ficha de producto de e-commerce:
- Nombre del producto: [NOMBRE_PRODUCTO]
- Categoría y características técnicas: [CARACTERISTICAS_TECNICAS]
- Público comprador ideal: [PUBLICO_OBJETIVO]
- Palabra clave SEO principal: [PALABRA_CLAVE_SEO]

Genera:
1. TÍTULO DEL PRODUCTO: Convincente, descriptivo y optimizado para CTR en Google Shopping y buscadores.
2. SUBTÍTULO DE IMPACTO EMOCIONAL (1 frase que resume la transformación que siente el comprador).
3. DESCRIPCIÓN NARRATIVA EN 2 PÁRRAFOS: Conectando con el deseo o problema cotidiano que resuelve el producto.
4. LISTA DE 5 BENEFICIOS CLAVE (Fórmula Característica -> Ventaja -> Beneficio Real): En viñetas escaneables con negritas.
5. ESPECIFICACIONES TÉCNICAS Y MEDIDAS: En formato limpio y transparente para evitar devoluciones.
6. BLOQUE DE GARANTÍA Y ELIMINACIÓN DE MIEDO: Políticas de envío rápido y devolución sin preguntas.
7. META TITLE Y META DESCRIPTION PARA BUSCADORES: Máximo 60 y 155 caracteres respectivamente con llamada a la acción.`,
    exampleUse: 'Ficha de producto para una mochila ergonómica impermeable para nómadas digitales con compartimento para portátil acolchado.',
    expectedResult: 'Ficha de producto lista para pegar en Shopify o WooCommerce que reduce la tasa de abandono del carrito.',
    tips: 'Incluye instrucciones sobre cómo cuidar o mantener el producto para aumentar la confianza pre-compra.'
  },
  {
    id: 'p-50',
    title: 'Flujo Automatizado de Email Marketing para Recuperación de Carritos Abandonados',
    category: 'Ventas y E-commerce',
    categoryId: 'cat-ventas',
    difficulty: 'Experto',
    rating: 4.9,
    views: 1870,
    copies: 890,
    tags: ['Klaviyo', 'Email Marketing', 'Carritos Abandonados', 'E-commerce', 'Automatización'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Secuencia de 3 correos automatizados para recuperar ventas perdidas sin depender únicamente de regalar descuentos.',
    fullPrompt: `Eres un estratega de Lifecycle Email Marketing certificado en Klaviyo y plataformas de retención para e-commerce.

Crea una secuencia automatizada de 3 correos para recuperar carritos abandonados:
- Tipo de tienda / Productos: [TIPO_DE_TIENDA]
- Ticket medio de compra: [TICKET_MEDIO]
- Tono de la marca: [TONO_EJ_DIVERTIDO_CERCANO_EXCLUSIVO]

Desarrolla la secuencia con timing estratégico:
1. EMAIL 1 (1 hora después del abandono) - "El recordatorio servicial y soporte":
   - Asunto intrigante y pre-header.
   - Mensaje enfocado en resolver dudas técnicas o problemas con la pasarela de pago.
   - Sin ofrecer descuentos todavía.
2. EMAIL 2 (24 horas después) - "Prueba social y FOMO (Miedo a perderse algo)":
   - Asunto con urgencia real (reservamos tu carrito temporalmente).
   - Testimonios reales de otros compradores satisfechos con los productos de su carrito.
   - Explicación de la garantía de devolución.
3. EMAIL 3 (48 horas después) - "Última oportunidad con incentivo controlado":
   - Asunto que activa la escasez.
   - Código de descuento temporal con vencimiento a las 24 horas o regalo complementario.
   - Despedida definitiva para limpiar la lista.`,
    exampleUse: 'Recuperar carritos en una tienda online de cosmética natural vegana con ticket medio de 45€.',
    expectedResult: 'Secuencia de correos persuasivos con asuntos de alto open-rate diseñados para recuperar entre el 15% y el 25% de las ventas perdidas.',
    tips: 'Personaliza los correos con etiquetas dinámicas como {{ first_name }} y la imagen del producto abandonado.'
  },
  {
    id: 'p-51',
    title: 'Protocolo de Atención al Cliente y Desescalada de Quejas Graves',
    category: 'Ventas y E-commerce',
    categoryId: 'cat-ventas',
    difficulty: 'Principiante',
    rating: 4.8,
    views: 1610,
    copies: 760,
    tags: ['Atención al Cliente', 'Soporte', 'Gestión de Quejas', 'Resolución de Conflictos', 'Servicio'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Plantillas de respuesta empáticas y profesionales para calmar a clientes enfadados y convertir una mala experiencia en lealtad.',
    fullPrompt: `Actúa como Director de Experiencia del Cliente (Customer Experience Manager) de una marca reconocida por su excelente soporte.

Escribe un protocolo de respuesta y resolución para la siguiente queja crítica:
- Motivo del enfado del cliente: [MOTIVO_DE_LA_QUEJA_EJ_RETRASO_PRODUCTO_DEFECTUOSO_COBRO_ERRONEO]
- Canal donde se produce la queja: [EMAIL_CHAT_REDES_PUBLICAS_O_RESENA]
- Nivel de enfado del cliente: [ALTO_CON_AMENAZA_LEGAL_O_MODERADO]
- Solución o compensación que la empresa puede ofrecer: [COMPENSACION_POSIBLE]

Elabora:
1. RESPUESTA DIRECTA AL CLIENTE aplicando el método LAST (Listen, Apologize, Solve, Thank):
   - Escucha activa: Parafrasea su problema demostrando que se ha entendido la magnitud del inconveniente.
   - Disculpa sincera y humana sin excusas corporativas ("lamentamos las molestias").
   - Solución inmediata y clara con plazos exactos.
   - Compensación proactiva que supere sus expectativas.
2. GUÍA DE LO QUE NUNCA SE DEBE DECIR en este tipo de situaciones.
3. RESPUESTA PÚBLICA CONDENSADA (si la queja se hizo en una red social o reseña de Google/Trustpilot) para que otros clientes potenciales vean la profesionalidad de la marca.`,
    exampleUse: 'Responder a un cliente enfadado porque su pedido para un regalo de cumpleaños llegó con 5 días de retraso y con el embalaje roto.',
    expectedResult: 'Mensaje impecable que desarma la hostilidad, protege la reputación de la empresa y fideliza al cliente afectado.',
    tips: 'Asume la responsabilidad como equipo de inmediato; a un cliente furioso no le importan los problemas con la empresa de mensajería.'
  },
  {
    id: 'p-52',
    title: 'Guion de Venta Cruzada (Cross-Selling & Up-Selling) en Checkout y Post-Compra',
    category: 'Ventas y E-commerce',
    categoryId: 'cat-ventas',
    difficulty: 'Experto',
    rating: 4.7,
    views: 1420,
    copies: 640,
    tags: ['Upselling', 'Cross-Selling', 'Ticket Medio', 'Conversión', 'E-commerce'],
    tools: ['ChatGPT', 'Claude'],
    description: 'Estrategias y copys para aumentar el valor medio de cada pedido (AOV) en el carrito y en la página de agradecimiento post-compra.',
    fullPrompt: `Eres un especialista en optimización de ingresos y monetización de embudos de venta directa (Funnel Hacker).

Diseña las ofertas y copys de venta cruzada (Cross-Sell) y aumento de gama (Up-Sell) para:
- Producto principal que el cliente acaba de seleccionar/comprar: [PRODUCTO_PRINCIPAL]
- Precio del producto principal: [PRECIO_PRINCIPAL]
- Productos complementarios disponibles en catálogo: [PRODUCTOS_COMPLEMENTARIOS]

Entrega:
1. OFERTA PRE-CHECKOUT (Bump Offer en el carrito): Micro-complemento de bajo precio y alta utilidad con casillero de 1 clic. Copy de 2 frases.
2. UP-SELL POST-COMPRA (One-Click Upsell antes de la página de confirmación): Oferta irresistible de volumen o versión superior con descuento exclusivo por haber comprado ya el producto principal.
3. MENSAJE EN PÁGINA DE GRACIAS (Thank You Page): Invitación a añadir un accesorio antes de que el paquete sea empaquetado y enviado en las próximas 2 horas.
4. COSTE PSICOLÓGICO Y JUSTIFICACIÓN: Por qué esta combinación tiene sentido y no se percibe como venta agresiva.`,
    exampleUse: 'Estrategia de upselling para una cafetera espresso automática que vende café en grano de suscripción y kit de limpieza antical.',
    expectedResult: 'Estructura de ofertas complementarias que incrementa entre un 15% y un 30% el valor medio del ticket sin fricción.',
    tips: 'La oferta de upsell debe sentirse como el paso lógico natural para sacar el 100% de provecho al producto principal.'
  }
];
