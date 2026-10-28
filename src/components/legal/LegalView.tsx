import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  ShieldCheck,
  FileText,
  Lock,
  Cookie,
  Copyright,
  AlertTriangle,
  Scale,
  ArrowLeft,
  Info
} from 'lucide-react';

export type LegalTab = 'aviso-legal' | 'privacidad' | 'cookies' | 'propiedad-intelectual';

interface LegalViewProps {
  initialTab?: LegalTab;
}

export const LegalView: React.FC<LegalViewProps> = ({ initialTab = 'aviso-legal' }) => {
  const { setCurrentView } = useApp();
  const [activeTab, setActiveTab] = React.useState<LegalTab>(initialTab);

  const tabs: Array<{ id: LegalTab; label: string; icon: React.ReactNode }> = [
    { id: 'aviso-legal', label: 'Aviso Legal', icon: <FileText className="w-4 h-4" /> },
    { id: 'privacidad', label: 'Política de Privacidad', icon: <Lock className="w-4 h-4" /> },
    { id: 'cookies', label: 'Política de Cookies', icon: <Cookie className="w-4 h-4" /> },
    { id: 'propiedad-intelectual', label: 'Propiedad Intelectual & Uso', icon: <Copyright className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Top Navigation Back */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </button>

        <span className="text-xs text-slate-400 font-mono">
          Última actualización: Enero 2026
        </span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold">
          <Scale className="w-3.5 h-3.5 text-cyan-400" />
          <span>Marco Jurídico & Transparencia Legal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Información Legal de PromptVerse AI
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Documentación transparente sobre la titularidad del proyecto, el tratamiento local de datos, la gestión de cookies técnicas y las condiciones de propiedad intelectual aplicables a recursos y prompts de inteligencia artificial.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 scrollbar-thin">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                isActive
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-950/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Container */}
      <div className="bg-[#0e1322] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-slate-200 leading-relaxed text-sm">
        {/* AVISO LEGAL */}
        {activeTab === 'aviso-legal' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white mb-1">1. Aviso Legal e Información General</h2>
              <p className="text-xs text-slate-400">
                En cumplimiento de las obligaciones de información de la sociedad de la información y comercio electrónico.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>Aviso de Transparencia de Identidad:</strong> Los datos identificativos del titular a continuación se presentan mediante marcadores de posición a la espera de que el titular del proyecto complete formalmente su identidad legal definitiva.
              </div>
            </div>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">1.1. Datos Identificativos del Titular</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>Nombre del Proyecto:</strong> PromptVerse AI</li>
                <li><strong>Titular Responsable:</strong> [Nombre y Apellidos del Titular / Razón Social del Titular]</li>
                <li><strong>NIF / CIF / Identificador Fiscal:</strong> [NIF / NIE / CIF a completar por el titular]</li>
                <li><strong>Domicilio / Residencia:</strong> [Dirección postal o ciudad y país de residencia]</li>
                <li><strong>Correo Electrónico de Contacto:</strong> [contacto@tudominio.com / ngelposd@gmail.com]</li>
                <li><strong>Sitio Web Oficial:</strong> https://ngelposd-sys.github.io/promptverse-ai/</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">1.2. Objeto del Sitio Web</h3>
              <p>
                PromptVerse AI es una plataforma web informativa, didáctica y de recursos técnicos dedicada a la recopilación, estructuración y aprendizaje de prompts, técnicas de ingeniería de instrucciones, comandos y metodologías para interactuar con sistemas de inteligencia artificial (LLMs y modelos de generación de imagen).
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">1.3. Condiciones de Acceso y Uso</h3>
              <p>
                El acceso a PromptVerse AI es gratuito en su versión base. El usuario se compromete a hacer un uso lícito y ético de la plataforma, absteniéndose de utilizar los prompts o recursos con fines lesivos, delictivos, fraudulentos o contrarios a las políticas de uso de los proveedores de IA externos (OpenAI, Anthropic, Google, Midjourney, etc.).
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">1.4. Exención de Responsabilidad por Respuestas de IA</h3>
              <p>
                Las herramientas de inteligencia artificial son sistemas estocásticos y generativos. PromptVerse AI no garantiza resultados idénticos, infalibles o exentos de errores ("alucinaciones") al ejecutar los prompts en software de terceros. El usuario es el único responsable de auditar, verificar y validar cualquier código, texto, análisis o imagen generada mediante estas instrucciones antes de su uso profesional, legal, médico o financiero.
              </p>
            </section>
          </div>
        )}

        {/* POLÍTICA DE PRIVACIDAD */}
        {activeTab === 'privacidad' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white mb-1">2. Política de Privacidad y Tratamiento de Datos</h2>
              <p className="text-xs text-slate-400">
                Información real y honesta sobre el tratamiento de datos personales en el entorno actual de la aplicación.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong>Almacenamiento Local (Privacy by Design):</strong> Actualmente PromptVerse AI funciona de forma autónoma en el navegador web del usuario. Tus favoritos, nivel de experiencia, notas personales y monedas se guardan exclusivamente en el <code>localStorage</code> de tu navegador, sin transmitirse a ningún servidor central nuestro.
              </div>
            </div>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">2.1. Responsable del Tratamiento</h3>
              <p>
                El responsable del tratamiento de los datos que voluntariamente pudieras facilitar por canales directos (como correo electrónico de soporte) es [Nombre / Razón Social del Titular], con dirección de contacto en [correo electrónico de contacto].
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">2.2. Datos Tratados en la Web Actual</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li><strong>Datos de Sesión Local:</strong> Nivel de usuario, experiencia acumulada (XP), PromptCoins virtuales, IDs de prompts guardados en favoritos, notas privadas y colecciones personalizadas. Estos datos residen únicamente en tu dispositivo.</li>
                <li><strong>Alojamiento en GitHub Pages:</strong> La web se entrega a través de los servidores de GitHub Pages (GitHub Inc. / Microsoft Corporation), los cuales pueden registrar direcciones IP técnicas en sus registros de acceso de servidor para seguridad y prevención de ataques de denegación de servicio (DDoS).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">2.3. Funcionalidades en Demostración (Simuladas)</h3>
              <p>
                El sistema de anuncios recompensados ("Ver Vídeo Demo") y la compra de monedas es actualmente una **simulación local de demostración**. No existen conexiones con pasarelas de pago reales (Stripe, PayPal, Google Play Billing) ni con redes publicitarias reales (Google AdMob). Si en el futuro se incorporan estos servicios, se actualizará previamente esta política con los consentimientos correspondientes.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">2.4. Ejercicio de Derechos (Acceso, Rectificación, Supresión)</h3>
              <p>
                Dado que los datos de la aplicación residen en tu navegador, puedes eliminarlos en cualquier momento borrando el almacenamiento local de tu navegador o usando el botón "Restablecer Datos" disponible en el centro de administración o biblioteca de la web. Para consultas sobre cualquier hipotética comunicación directa, puedes escribir a [correo electrónico de contacto].
              </p>
            </section>
          </div>
        )}

        {/* POLÍTICA DE COOKIES */}
        {activeTab === 'cookies' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white mb-1">3. Política de Cookies y Almacenamiento Local</h2>
              <p className="text-xs text-slate-400">
                Detalle técnico del almacenamiento utilizado en el cliente para el funcionamiento de la web.
              </p>
            </div>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">3.1. ¿Qué Tecnologías Utiliza PromptVerse AI?</h3>
              <p>
                PromptVerse AI **no utiliza cookies de rastreo publicitario de terceros, cookies de perfilado comercial ni servicios de analítica invasiva (como Google Analytics)** en su estado operativo actual.
              </p>
              <p>
                La aplicación utiliza la tecnología estándar de <strong>HTML5 LocalStorage</strong> (Almacenamiento Local del Navegador), la cual permite guardar información técnica imprescindible para que la aplicación recuerde tus preferencias de una visita a otra.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">3.2. Tabla de Datos Almacenados Localmente</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden">
                  <thead className="bg-slate-900 text-slate-300 uppercase font-mono">
                    <tr>
                      <th className="p-3">Clave de Almacenamiento</th>
                      <th className="p-3">Tipo</th>
                      <th className="p-3">Finalidad</th>
                      <th className="p-3">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr>
                      <td className="p-3 font-mono text-purple-300">promptverse_stats</td>
                      <td className="p-3">LocalStorage Técnico</td>
                      <td className="p-3">Guarda tus favoritos, nivel, monedas de demo, notas y progreso diario.</td>
                      <td className="p-3">Persistente hasta borrado de datos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">3.3. Cómo Gestionar o Eliminar tus Datos Locales</h3>
              <p>
                Puedes vaciar o bloquear el almacenamiento local de tu navegador en cualquier momento a través de la configuración de tu navegador (Chrome, Edge, Firefox, Safari) en la sección "Privacidad y seguridad &gt; Borrar datos de navegación &gt; Cookies y otros datos de sitios web".
              </p>
            </section>
          </div>
        )}

        {/* PROPIEDAD INTELECTUAL & CONDICIONES */}
        {activeTab === 'propiedad-intelectual' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white mb-1">4. Propiedad Intelectual, Derechos de Autor y Condiciones de Uso</h2>
              <p className="text-xs text-slate-400">
                Estatus legal del código fuente, el diseño de la plataforma y los prompts para modelos de inteligencia artificial.
              </p>
            </div>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">4.1. Reserva de Derechos de Autor (Copyright)</h3>
              <p className="font-semibold text-slate-100">
                © 2026 PromptVerse AI. Todos los derechos reservados.
              </p>
              <p>
                La estructura del sitio web, el código fuente desarrollado en React, TypeScript y Tailwind CSS, la selección y disposición sistemática de los contenidos, los textos explicativos originales, los logotipos y la identidad gráfica están protegidos por las leyes de propiedad intelectual y tratados internacionales aplicables.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <strong>Aclaración técnica y legal:</strong> El aviso de copyright (© 2026) constituye una manifestación formal de reserva de derechos. Por sí mismo no impide técnicamente que un tercero copie contenidos mediante raspado de datos (scraping) o captura manual, pero establece la base legal probatoria para ejercitar las acciones civiles o mercantiles que en derecho correspondan ante reproducciones ilícitas o plagios sustanciales no autorizados.
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">4.2. Estatus Jurídico de los Prompts para IA</h3>
              <p>
                El estatus jurídico de las instrucciones y prompts formulados para modelos de inteligencia artificial generativa se encuentra en continua evolución legislativa y jurisprudencial a nivel internacional:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>Originalidad y Estructura:</strong> Las colecciones estructuradas, la metodología didáctica, las variables parametrizadas y la redacción original de las explicaciones gozan de la protección otorgada a las bases de datos y obras creativas escritas en la medida en que reflejan la impronta personal de sus creadores.</li>
                <li><strong>Licencia de Uso para Usuarios:</strong> Se concede al usuario una licencia personal, no exclusiva y gratuita para copiar y ejecutar los prompts en sus propias cuentas de IA (ChatGPT, Claude, Gemini, Midjourney, etc.) para fines tanto personales como profesionales. Queda prohibida la reventa masiva, extracción automatizada o clonación íntegra de la base de datos de PromptVerse AI para crear un servicio competidor idéntico sin autorización previa.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">4.3. Marcas y Referencias de Terceros</h3>
              <p>
                Las menciones a marcas registradas de terceros (tales como ChatGPT / OpenAI, Claude / Anthropic, Gemini / Google, Midjourney, Leica, Hasselblad, Sony, Canon, Nikon, etc.) se realizan con fines exclusivamente descriptivos, divulgativos y de compatibilidad tecnológica, perteneciendo la titularidad de dichas marcas a sus respectivos propietarios legítimos.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-bold text-purple-300">4.4. Legislación Aplicable y Jurisdicción</h3>
              <p>
                Las presentes condiciones se rigen por la legislación vigente aplicable en la jurisdicción de residencia del titular del proyecto. Para la resolución de cualquier controversia, las partes se someterán a los juzgados y tribunales competentes conforme a la normativa de consumidores y usuarios o legislación procesal civil aplicable.
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
