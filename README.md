# PromptVerse AI — La Biblioteca Definitiva de Inteligencia Artificial

> «Domina la IA. Descubre nuevas posibilidades.»

**PromptVerse AI** es una plataforma web moderna, funcional y gamificada diseñada para ayudar a profesionales, estudiantes, desarrolladores y creadores a exprimir al máximo ChatGPT, Claude, Gemini y otros modelos de lenguaje.

Combina una gran biblioteca de conocimiento técnico, un buscador avanzado con filtros por herramientas y dificultad, un taller interactivo de prompts (**Prompt Builder**), una enciclopedia de técnicas verificadas (**AI Command Center**) y un sistema de progresión con monedas virtuales (**PromptCoins**) y niveles.

---

## 🌟 Características Principales

### 1. Gran Biblioteca con 20 Categorías y 40+ Prompts Profesionales
- **20 Disciplinas Cubiertas:** Desde Asistentes de IA, Programación Web, Aplicaciones Android y Agentes Autónomos, hasta Marketing AIDA/PAS, Redes Sociales, Excel avanzado y Finanzas personales.
- **Parametrización en Vivo:** Cada prompt cuenta con variables editables entre corchetes (`[OBJETIVO]`, `[PÚBLICO]`, `[TONO]`, etc.) que el usuario puede personalizar interactivamente en la interfaz antes de copiar.
- **Rigor Técnico:** Incluye caso de uso real, resultado esperado, consejos de expertos, errores habituales a evitar y etiquetas.

### 2. Taller de Prompts (Prompt Builder)
- Herramienta guiada para construir instrucciones a medida según:
  - Objetivo
  - Herramienta de IA (ChatGPT, Claude, Gemini, etc.)
  - Contexto operativo
  - Rol / Autoridad
  - Formato de respuesta (Tablas, Markdown, Código, JSON)
  - Tono de comunicación
  - Restricciones negativas (Anti-clichés)
  - Nivel de detalle
- Incluye plantillas preconfiguradas y comparativas Antes / Después.
- Funciona 100% de forma local y gratuita, sin dependencias de APIs de pago obligatorias ni exposición de claves privadas.

### 3. AI Command Center (Enciclopedia de Técnicas)
- Técnicas contrastadas y verificadas:
  - Chain-of-Thought (CoT) y razonamiento paso a paso
  - Tree of Thoughts (ToT) y poda de árboles heurísticos
  - Few-Shot In-Context Learning
  - Prompt Chaining secuencial
  - JSON Schema Enforcement estricto
  - Delimitadores anti-inyección
  - Custom Instructions y System Prompts
- **Sección MythBusters:** Desmitificación rigurosa de supuestos comandos secretos o palabras mágicas que no existen en los modelos reales.

### 4. Gamificación y Monedas Virtuales (PromptCoins)
- **Monedero Virtual:** Saldo de PromptCoins (PC) sin valor monetario real.
- **Racha Diaria:** Detección de conexión consecutiva con bonos automáticos.
- **Retos de Aprendizaje:** Misiones diarias para explorar y crear contenido.
- **4 Niveles de Acceso:**
  1. *Nivel 1 — Explorador*: Biblioteca gratuita básica y taller.
  2. *Nivel 2 — Experto*: Prompts avanzados desbloqueables con monedas.
  3. *Nivel 3 — Master*: Flujos de agentes autónomos y ToT.
  4. *Nivel 4 — Infinito*: Rutas de aprendizaje guiadas paso a paso.
- **Simulador de Anuncio Recompensado (DEMO):** Módulo de pruebas conforme a las directrices de Google Play y AdMob, con reproductor simulado de 5 segundos, hash criptográfico de validación y límite diario antifraude (máximo 3/día).

### 5. Biblioteca Personal con Persistencia Local
- Guarda tus favoritos y añade notas privadas a cada prompt.
- Crea tus propios prompts y organízalos en colecciones.
- **Exportación / Importación:** Descarga tu biblioteca personal en JSON estructurado o en Markdown listo para tu repositorio o notas de Obsidian.

---

## 🚀 Instalación y Ejecución Local

### Requisitos Previos
- Node.js 18+ o superior
- npm, yarn o bun

### Pasos

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/promptverse-ai.git
   cd promptverse-ai
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. Compilar para producción:
   ```bash
   npm run build
   ```

---

## 🌐 Publicación Gratuita en GitHub Pages / Vercel

PromptVerse AI está construido como una Single Page Application (SPA) que compila a archivos estáticos sin necesidad de servidores de pago:

1. Ejecuta `npm run build` para generar la carpeta `dist/`.
2. Para desplegar en **GitHub Pages**:
   - Sube el código a tu repositorio de GitHub.
   - En *Settings -> Pages*, selecciona la fuente *GitHub Actions* o rama `main` en la carpeta `/dist`.
3. Para desplegar en **Vercel** o **Cloudflare Pages**:
   - Conecta tu repositorio y selecciona el framework preset *Vite*.
   - El despliegue se completará en menos de 1 minuto sin coste.

---

## 📱 Hoja de Ruta para Android

El proyecto incluye documentación técnica para dos vías de adaptación a dispositivos Android:

- **Vía A (PWA / TWA):** Empaquetar la web como Trusted Web Activity con `npx @bubblewrap/cli init` para publicar en Google Play Store con soporte offline y notificaciones.
- **Vía B (Nativo Kotlin + Compose):** Migrar la UI a Jetpack Compose con arquitectura MVVM, Room SQLite y el SDK nativo de Google Mobile Ads (`play-services-ads`) para anuncios recompensados reales.

---

## 🔒 Privacidad y Seguridad

- **Cero Secretos Expuestos:** No hay API keys incrustadas en el código cliente.
- **Privacidad Local:** Las notas, favoritos y saldo se guardan en el almacenamiento local del dispositivo del usuario (LocalStorage).
- **Extensible a la Nube:** Arquitectura desacoplada lista para conectar Firebase Firestore y Authentication si se desea sincronización multiplataforma.

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Puedes utilizarlo, adaptarlo y ampliarlo libremente para fines educativos y profesionales.
