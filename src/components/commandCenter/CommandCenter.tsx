import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TECHNIQUES } from '../../data/techniques';
import { TechniqueItem, TechniqueCategory } from '../../types';
import {
  Terminal,
  ShieldAlert,
  CheckCircle2,
  Copy,
  Check,
  Search,
  Sparkles,
  BookOpen,
  AlertTriangle,
  HelpCircle,
  Cpu
} from 'lucide-react';

export const CommandCenter: React.FC = () => {
  const { addToast } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories: Array<{ id: string; label: string }> = [
    { id: 'all', label: 'Todas las Técnicas' },
    { id: 'razonamiento', label: 'Razonamiento (CoT, ToT)' },
    { id: 'few_shot', label: 'Few-Shot Learning' },
    { id: 'encadenamiento', label: 'Prompt Chaining' },
    { id: 'estructuras_json', label: 'JSON & Tablas' },
    { id: 'roles_contexto', label: 'Roles & Delimitadores' },
    { id: 'funciones_oficiales', label: 'Funciones Oficiales' },
    { id: 'atajos_sintaxis', label: 'Sintaxis & Markdown' },
    { id: 'mitos_y_realidad', label: 'Mitos vs Realidad' }
  ];

  const filteredTechniques = TECHNIQUES.filter((tech) => {
    if (selectedCategory !== 'all' && tech.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        tech.title.toLowerCase().includes(q) ||
        tech.description.toLowerCase().includes(q) ||
        tech.explanation.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCopyExample = (tech: TechniqueItem) => {
    navigator.clipboard.writeText(tech.examplePrompt);
    setCopiedId(tech.id);
    addToast('Plantilla de la técnica copiada al portapapeles 📋', 'success');
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              AI Command Center
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Enciclopedia de técnicas de ingeniería de prompts, razonamiento formal, sintaxis de interfaces y desmitificación de supuestos comandos secretos.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar técnica por nombre o concepto..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Techniques List */}
      <div className="space-y-6">
        {filteredTechniques.map((tech) => {
          const isMyth = tech.isMythBuster;
          return (
            <div
              key={tech.id}
              className={`rounded-3xl border p-6 space-y-5 transition-all shadow-xl ${
                isMyth
                  ? 'bg-gradient-to-b from-[#1a1114] to-[#0f0c0e] border-rose-500/30'
                  : 'bg-gradient-to-b from-[#0e1422] to-[#0a0d16] border-slate-800 hover:border-cyan-500/40'
              }`}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {isMyth ? (
                      <span className="flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40">
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                        DESMITIFICADO (REALIDAD TÉCNICA)
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        TÉCNICA VERIFICADA
                      </span>
                    )}

                    <span className="text-[11px] text-slate-400">
                      Compatible: {tech.compatibleTools.join(', ')}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {tech.title}
                  </h3>
                </div>

                {!isMyth && (
                  <button
                    onClick={() => handleCopyExample(tech)}
                    className="self-start sm:self-center px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-600/90 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    {copiedId === tech.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Plantilla</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Description & Scientific explanation */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p className="font-semibold text-slate-200">{tech.description}</p>
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-slate-300">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Fundamento Científico y Arquitectónico:
                  </h4>
                  <p>{tech.explanation}</p>
                </div>
              </div>

              {/* How to use */}
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Cómo utilizar esta técnica:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">{tech.howToUse}</p>
              </div>

              {/* Code Example block */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Ejemplo Práctico de Instrucción:
                </span>
                <div className="p-4 rounded-2xl bg-[#070a12] border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-wrap selection:bg-cyan-600/40">
                  {tech.examplePrompt}
                </div>
              </div>

              {/* Limitations or output */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="font-bold text-emerald-400 block mb-0.5">
                    Resultado / Salida Esperada:
                  </span>
                  <span className="text-slate-300">{tech.expectedOutput}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="font-bold text-amber-400 block mb-0.5">
                    Limitaciones y Consideraciones:
                  </span>
                  <span className="text-slate-300">{tech.limitations}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
