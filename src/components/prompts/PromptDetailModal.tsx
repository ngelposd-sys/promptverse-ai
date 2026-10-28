import React, { useState, useEffect } from 'react';
import { PromptItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { CATEGORIES } from '../../data/categories';
import { PROMPTS } from '../../data/prompts';
import {
  X,
  Copy,
  Check,
  Heart,
  Share2,
  Lock,
  Coins,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Tag,
  PenLine,
  FolderPlus
} from 'lucide-react';

interface PromptDetailModalProps {
  prompt: PromptItem;
  onClose: () => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({ prompt, onClose }) => {
  const {
    userStats,
    toggleFavorite,
    markPromptUsed,
    unlockPrompt,
    savePromptNote,
    addPromptToCollection,
    setActivePromptDetail,
    addToast
  } = useApp();

  const isFavorite = userStats.favoritePromptIds.includes(prompt.id);
  const isUnlocked = prompt.coinCost === 0 || userStats.unlockedPromptIds.includes(prompt.id);
  const category = CATEGORIES.find((c) => c.id === prompt.categoryId);

  // Initialize variables state
  const [variableValues, setVariableValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    prompt.variables.forEach((v) => {
      initial[v.key] = v.defaultValue || '';
    });
    return initial;
  });

  const [copied, setCopied] = useState(false);
  const [noteText, setNoteText] = useState(userStats.notes[prompt.id] || '');
  const [activeTab, setActiveTab] = useState<'prompt' | 'tips' | 'notes'>('prompt');
  const [showCollectionDropdown, setShowCollectionDropdown] = useState(false);

  // Sync state when prompt changes (e.g. from related prompts)
  useEffect(() => {
    const initial: Record<string, string> = {};
    prompt.variables.forEach((v) => {
      initial[v.key] = v.defaultValue || '';
    });
    setVariableValues(initial);
    setNoteText(userStats.notes[prompt.id] || '');
    setCopied(false);
    setShowCollectionDropdown(false);
  }, [prompt.id]);

  // Compute rendered prompt with replaced variables
  const getRenderedPrompt = () => {
    let result = prompt.fullPrompt;
    Object.entries(variableValues).forEach(([key, value]) => {
      const regex = new RegExp(`\\[${key}\\]`, 'g');
      result = result.replace(regex, value.trim() ? value : `[${key}]`);
    });
    return result;
  };

  const handleCopy = () => {
    if (!isUnlocked) {
      addToast(`Desbloquea primero este prompt por ${prompt.coinCost} PC`, 'warning');
      return;
    }
    const finalContent = getRenderedPrompt();
    navigator.clipboard.writeText(finalContent);
    setCopied(true);
    markPromptUsed(prompt.id);
    addToast('¡Prompt personalizado copiado al portapapeles! 📋', 'success');
    setTimeout(() => setCopied(false), 2400);
  };

  const handleShare = async () => {
    const shareData = {
      title: `${prompt.title} — PromptVerse AI`,
      text: `${prompt.description}\n\nDescubre este prompt en PromptVerse AI`,
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or unsupported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast('Enlace de la aplicación copiado al portapapeles 🔗', 'info');
    }
  };

  const handleResetVariables = () => {
    const initial: Record<string, string> = {};
    prompt.variables.forEach((v) => {
      initial[v.key] = v.defaultValue || '';
    });
    setVariableValues(initial);
    addToast('Variables restablecidas a los valores de ejemplo', 'info');
  };

  const handleSaveNote = () => {
    savePromptNote(prompt.id, noteText);
  };

  const relatedPrompts = PROMPTS.filter((p) =>
    prompt.relatedPromptIds?.includes(p.id) || (p.categoryId === prompt.categoryId && p.id !== prompt.id)
  ).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0c101c] border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#0e1424] flex items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-purple-300 border border-slate-700">
                {category?.name || 'Categoría'}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60">
                Dificultad: {prompt.difficulty}
              </span>
              {prompt.isMaster && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  ZONA MASTER
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
              {prompt.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {prompt.description}
            </p>
          </div>

          <div className="flex items-center gap-2 relative">
            {/* Add to Collection dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCollectionDropdown(!showCollectionDropdown)}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-purple-300 border border-slate-700 transition-colors"
                title="Añadir a una colección privada"
              >
                <FolderPlus className="w-5 h-5" />
              </button>

              {showCollectionDropdown && (
                <div className="absolute right-0 top-12 z-50 w-56 p-2 rounded-2xl bg-[#0f1424] border border-slate-700 shadow-2xl space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                    Mis Colecciones:
                  </div>
                  {userStats.collections.length > 0 ? (
                    userStats.collections.map((col) => {
                      const alreadyIn = col.promptIds.includes(prompt.id);
                      return (
                        <button
                          key={col.id}
                          onClick={() => {
                            addPromptToCollection(col.id, prompt.id);
                            setShowCollectionDropdown(false);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-xl text-xs text-slate-200 hover:bg-slate-800 flex items-center justify-between transition-colors"
                        >
                          <span className="truncate">{col.name}</span>
                          {alreadyIn && <span className="text-[10px] text-purple-400 font-bold">✓</span>}
                        </button>
                      );
                    })
                  ) : (
                    <div className="text-xs text-slate-400 p-2">
                      No tienes colecciones. Crea una en "Mi Biblioteca".
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => toggleFavorite(prompt.id)}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-rose-400 border border-slate-700 transition-colors"
              title="Añadir a favoritos"
            >
              <Heart
                className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`}
              />
            </button>
            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors"
              title="Compartir prompt"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-[#0c101c]">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`pb-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'prompt'
                ? 'border-purple-500 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Prompt Interactivo
          </button>
          <button
            onClick={() => setActiveTab('tips')}
            className={`pb-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'tips'
                ? 'border-purple-500 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Consejos & Casos Reales
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'notes'
                ? 'border-purple-500 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Mis Notas Personales
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {activeTab === 'prompt' && (
            <>
              {/* Unlock Banner if locked */}
              {!isUnlocked && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-amber-950/40 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-amber-200">
                          Prompt Avanzado Protegido
                        </h4>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          MODO DEMO
                        </span>
                      </div>
                      <p className="text-xs text-amber-300/80">
                        Desbloquea permanentemente con tus monedas virtuales ({prompt.coinCost} PromptCoins — sin dinero real).
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => unlockPrompt(prompt)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 glow-gold cursor-pointer"
                  >
                    <Coins className="w-4 h-4" />
                    <span>Desbloquear ({prompt.coinCost} PC)</span>
                  </button>
                </div>
              )}

              {/* Variable Customizer */}
              {prompt.variables.length > 0 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#111728] border border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100 uppercase tracking-wider">
                        Personaliza las variables del prompt en tiempo real:
                      </h4>
                    </div>
                    <button
                      onClick={handleResetVariables}
                      className="text-xs text-slate-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                      title="Restablecer variables de ejemplo"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Restablecer</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {prompt.variables.map((variable) => (
                      <div key={variable.key} className="space-y-1">
                        <label className="text-[11px] font-semibold text-purple-300 flex items-center gap-1">
                          <span>[{variable.key}]</span>
                          <span className="text-slate-400 font-normal">
                            — {variable.label}
                          </span>
                        </label>
                        <input
                          type="text"
                          value={variableValues[variable.key] || ''}
                          onChange={(e) =>
                            setVariableValues({
                              ...variableValues,
                              [variable.key]: e.target.value
                            })
                          }
                          placeholder={variable.placeholder}
                          className="w-full px-3 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rendered Prompt Preview & Copy */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Prompt Completo Listo para Copiar:
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Compatible con: {prompt.tools.join(', ')}
                  </span>
                </div>

                <div className="relative group rounded-2xl bg-[#080b12] border border-slate-800 p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap selection:bg-purple-600/40">
                  {getRenderedPrompt()}
                </div>

                {/* Main Copy Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>
                      Variables integradas automáticamente. Listo para ChatGPT, Claude o Gemini.
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    disabled={!isUnlocked}
                    className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                      !isUnlocked
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                        : copied
                        ? 'bg-emerald-500 text-white shadow-emerald-500/30'
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
                        <span>Copiar Prompt Personalizado</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-6">
              {/* Objective */}
              <div className="p-4 rounded-2xl bg-[#111728] border border-slate-800">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  Objetivo que resuelve
                </h4>
                <p className="text-sm text-slate-200">{prompt.objective}</p>
              </div>

              {/* Example use & Expected Result */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-yellow-400" />
                    Caso de Uso de Ejemplo
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {prompt.exampleUse}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Resultado Esperado
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {prompt.expectedResult}
                  </p>
                </div>
              </div>

              {/* Expert Tips & Common Errors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 space-y-2">
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Consejos de Expertos
                  </h4>
                  <ul className="space-y-1.5">
                    {prompt.tips.map((tip, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-2">
                  <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    Errores Habituales a Evitar
                  </h4>
                  <ul className="space-y-1.5">
                    {prompt.commonErrors.map((err, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{err}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap pt-2">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400">Etiquetas:</span>
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#111728] border border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <PenLine className="w-4 h-4 text-purple-400" />
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Tus Notas Privadas para este Prompt
                  </h4>
                </div>
                <p className="text-xs text-slate-400">
                  Estas anotaciones quedan guardadas en tu dispositivo y se incluirán cuando exportes tu biblioteca personal.
                </p>
                <textarea
                  rows={4}
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Escribe tus observaciones, variaciones de resultados o ajustes para este prompt..."
                  className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors shadow-md"
                >
                  Guardar Nota
                </button>
              </div>
            </div>
          )}

          {/* Related Prompts Footer */}
          {relatedPrompts.length > 0 && (
            <div className="pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Prompts Relacionados Recomendados:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedPrompts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => setActivePromptDetail(rel)}
                    className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/40 cursor-pointer transition-all"
                  >
                    <span className="text-[10px] font-semibold text-purple-400 block mb-1">
                      {rel.difficulty}
                    </span>
                    <h5 className="text-xs font-bold text-slate-200 line-clamp-1">
                      {rel.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      {rel.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
