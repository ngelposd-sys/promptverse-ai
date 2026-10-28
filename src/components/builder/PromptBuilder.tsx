import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BUILDER_PRESETS, PromptTemplatePreset } from '../../data/challenges';
import { UserCustomPrompt, AITool } from '../../types';
import {
  Wrench,
  Sparkles,
  Copy,
  Check,
  Bookmark,
  RefreshCw,
  Sliders,
  ChevronRight,
  Code2,
  FileCheck,
  ArrowRight
} from 'lucide-react';

export const PromptBuilder: React.FC = () => {
  const { saveCustomPrompt, addToast } = useApp();

  // Wizard fields
  const [goal, setGoal] = useState('Auditar un fragmento de código TypeScript en busca de vulnerabilidades OWASP');
  const [tool, setTool] = useState<AITool>('ChatGPT');
  const [context, setContext] = useState('Módulo de autenticación en producción con usuarios activos');
  const [role, setRole] = useState('Ingeniero de Ciberseguridad Senior y Auditor AppSec');
  const [outputFormat, setOutputFormat] = useState('Tabla Markdown con hallazgos y código refactorizado limpio');
  const [tone, setTone] = useState('Técnico, riguroso, directo y centrado en la seguridad');
  const [constraints, setConstraints] = useState('Prohibido usar explicaciones genéricas; muestra siempre el código seguro de reemplazo');
  const [detailLevel, setDetailLevel] = useState('Profundo y exhaustivo');

  const [promptTitle, setPromptTitle] = useState('Mi Prompt Personalizado');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'composer' | 'presets' | 'beforeAfter'>('composer');

  // Assembly engine
  const generateAssembledPrompt = () => {
    let result = `Actúa como [${role}].\n\n`;
    result += `Tu objetivo principal en esta tarea es: ${goal}.\n\n`;
    if (context.trim()) {
      result += `Contexto del proyecto y entorno:\n"""\n${context}\n"""\n\n`;
    }
    result += `Directrices de ejecución paso a paso:\n`;
    result += `1. Analiza los requerimientos y descompon el problema en sus variables críticas.\n`;
    result += `2. Aplica tu criterio de experto para formular la solución óptima.\n`;
    result += `3. Genera el entregable respetando estrictamente el formato especificado.\n\n`;
    result += `Formato de entrega obligatorio:\n${outputFormat}.\n\n`;
    result += `Tono de comunicación:\n${tone}.\n\n`;
    result += `Nivel de detalle requerido:\n${detailLevel}.\n\n`;
    if (constraints.trim()) {
      result += `Restricciones inquebrantables:\n- ${constraints}\n- No añadas introducciones conversacionales ni saludos innecesarios.`;
    }

    return result;
  };

  const handleApplyPreset = (preset: PromptTemplatePreset) => {
    setGoal(preset.goal);
    setTool(preset.tool as AITool);
    setContext(preset.context);
    setRole(preset.role);
    setOutputFormat(preset.outputFormat);
    setTone(preset.tone);
    setConstraints(preset.constraints);
    setDetailLevel(preset.detailLevel);
    setPromptTitle(preset.name);
    setActiveTab('composer');
    addToast(`Plantilla "${preset.name}" cargada en el editor`, 'info');
  };

  const handleCopy = () => {
    const text = generateAssembledPrompt();
    navigator.clipboard.writeText(text);
    setCopied(true);
    addToast('¡Prompt ensamblado copiado al portapapeles! 📋', 'success');
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSaveToLibrary = () => {
    const newPrompt: UserCustomPrompt = {
      id: 'custom-' + Date.now(),
      title: promptTitle.trim() || 'Prompt creado en el Taller',
      description: goal.slice(0, 80) + '...',
      fullPrompt: generateAssembledPrompt(),
      categoryId: 'cat-20',
      tags: ['Taller', tool, 'Personal'],
      tools: [tool],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    saveCustomPrompt(newPrompt);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Taller de Prompts (Prompt Builder)
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Construye instrucciones estructuradas y profesionales combinando rol, objetivo, formato, tono y restricciones.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveTab('composer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'composer'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Compositor
          </button>
          <button
            onClick={() => setActiveTab('presets')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'presets'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Plantillas ({BUILDER_PRESETS.length})
          </button>
          <button
            onClick={() => setActiveTab('beforeAfter')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'beforeAfter'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Antes y Después
          </button>
        </div>
      </div>

      {activeTab === 'composer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Input parameters */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 sm:p-6 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-400" />
                <span>1. Parámetros Fundamentales del Prompt</span>
              </h3>

              {/* Title & Tool */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Nombre del Prompt
                  </label>
                  <input
                    type="text"
                    value={promptTitle}
                    onChange={(e) => setPromptTitle(e.target.value)}
                    placeholder="Mi Prompt Personalizado..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Herramienta de IA de destino
                  </label>
                  <select
                    value={tool}
                    onChange={(e: any) => setTool(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-purple-500"
                  >
                    <option value="ChatGPT">ChatGPT (OpenAI)</option>
                    <option value="Claude">Claude (Anthropic)</option>
                    <option value="Gemini">Gemini (Google)</option>
                    <option value="DeepSeek">DeepSeek</option>
                    <option value="Universal">Cualquier modelo (Universal)</option>
                  </select>
                </div>
              </div>

              {/* Goal */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>¿Qué quieres conseguir? (Objetivo central)</span>
                  <span className="text-[10px] text-purple-400 font-normal">Requerido</span>
                </label>
                <textarea
                  rows={2}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Ej: Diseñar una estrategia de marketing para lanzar una aplicación móvil..."
                  className="w-full p-3 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Role */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  ¿Qué papel o persona debe adoptar la IA?
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Ej: Director Creativo con 15 años de experiencia en agencias de publicidad..."
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Context */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Contexto necesario que debe conocer
                </label>
                <textarea
                  rows={2}
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Ej: Somos una startup de 5 personas con presupuesto ajustado y clientes en España..."
                  className="w-full p-3 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Format & Tone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Formato de respuesta deseado
                  </label>
                  <input
                    type="text"
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    placeholder="Ej: Tabla Markdown, viñetas, bloques de código..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Tono de comunicación
                  </label>
                  <input
                    type="text"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    placeholder="Ej: Profesional, persuasivo, directo, sobrio..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Constraints & Detail Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Restricciones negativas (Anti-clichés)
                  </label>
                  <input
                    type="text"
                    value={constraints}
                    onChange={(e) => setConstraints(e.target.value)}
                    placeholder="Ej: Prohibido usar la palabra 'revolucionario'..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Nivel de detalle
                  </label>
                  <select
                    value={detailLevel}
                    onChange={(e) => setDetailLevel(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-purple-500"
                  >
                    <option value="Conciso y sintético (solo lo esencial)">Conciso y sintético</option>
                    <option value="Equilibrado y orientado a la acción">Equilibrado y orientado a la acción</option>
                    <option value="Profundo y exhaustivo">Profundo y exhaustivo</option>
                    <option value="Didáctico paso a paso con ejemplos">Didáctico paso a paso con ejemplos</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Assembled Prompt Preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-6 rounded-3xl bg-[#0b0e18] border border-slate-800 flex flex-col justify-between h-full space-y-4 sticky top-20 shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Vista Previa Ensamblada
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {tool}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#06080f] border border-slate-800/80 font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap max-h-[460px] overflow-y-auto selection:bg-purple-600/40">
                  {generateAssembledPrompt()}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <button
                  onClick={handleCopy}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    copied
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-purple-600/25 glow-purple'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Copiado con Éxito!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Prompt al Portapapeles</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleSaveToLibrary}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Bookmark className="w-4 h-4 text-purple-400" />
                  <span>Guardar en Mi Biblioteca</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'presets' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BUILDER_PRESETS.map((preset) => (
            <div
              key={preset.id}
              className="p-5 rounded-2xl bg-[#0f1422] border border-slate-800 flex flex-col justify-between space-y-4 hover:border-purple-500/50 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-slate-800 text-purple-300">
                    {preset.category}
                  </span>
                  <span className="text-[11px] text-slate-400">{preset.tool}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {preset.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {preset.description}
                </p>
                <div className="text-[11px] text-slate-400 font-mono line-clamp-2 bg-slate-950 p-2.5 rounded-xl border border-slate-900">
                  Rol: {preset.role} | Formato: {preset.outputFormat}
                </div>
              </div>

              <button
                onClick={() => handleApplyPreset(preset)}
                className="w-full py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <span>Cargar en el Compositor</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'beforeAfter' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            Compara cómo una instrucción aficionada vaga produce respuestas genéricas, mientras que una instrucción con estructura profesional obtiene entregables de nivel senior.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before (amateur) */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-3">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                ❌ El Prompt Aficionado (Antes)
              </span>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                "Revisa mi código y dime si está bien o tiene fallos."
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong>Consecuencia:</strong> La IA responde con un comentario superficial, no detecta problemas sutiles de seguridad ni condiciones de carrera, y devuelve un código con explicaciones redundantes.
              </p>
            </div>

            {/* After (PromptVerse) */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                ✅ El Prompt Estructurado con PromptVerse (Después)
              </span>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-200">
                "Actúa como Auditor AppSec Senior. Revisa el componente de autenticación buscando OWASP Top 10. Entrega una tabla Markdown de riesgos, el código refactorizado limpio en TypeScript y 3 pruebas unitarias de edge cases en Vitest."
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong>Consecuencia:</strong> Diagnóstico técnico exhaustivo, matriz de vulnerabilidades, tests ejecutables y código seguro listo para merge.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
