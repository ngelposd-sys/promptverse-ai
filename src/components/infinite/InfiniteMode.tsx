import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LEARNING_PATHS } from '../../data/learningPaths';
import { PROMPTS } from '../../data/prompts';
import { LearningPath, PromptItem } from '../../types';
import { PromptCard } from '../prompts/PromptCard';
import {
  Infinity,
  CheckCircle2,
  Coins,
  Sparkles,
  ArrowRight,
  Compass,
  Award,
  Layers
} from 'lucide-react';

export const InfiniteMode: React.FC = () => {
  const {
    userStats,
    setActivePromptDetail,
    completeChallenge,
    markPromptUsed,
    addToast
  } = useApp();

  const [activePathId, setActivePathId] = useState<string>(LEARNING_PATHS[0].id);

  const selectedPath = LEARNING_PATHS.find((p) => p.id === activePathId) || LEARNING_PATHS[0];
  const pathPrompts = PROMPTS.filter((p) => selectedPath.promptIds.includes(p.id));

  const completedCount = pathPrompts.filter((p) =>
    userStats.usedPromptIds.includes(p.id)
  ).length;

  const progressPercent = Math.min(
    100,
    Math.round((completedCount / Math.max(1, pathPrompts.length)) * 100)
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0c1828] via-[#0f1422] to-[#1a102a] border border-cyan-500/40 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-black tracking-wider uppercase">
            <Infinity className="w-4 h-4 text-cyan-400" />
            <span>Nivel 4 — Modo Infinito & Rutas Guiadas</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Rutas de Maestría y Exploración Continua
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Avanza paso a paso por itinerarios formativos encadenados. Al completar cada etapa y utilizar los prompts correspondientes, obtendrás recompensas en experiencia XP y PromptCoins.
          </p>
        </div>
      </div>

      {/* Path Selector Carousel */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Selecciona una Ruta de Aprendizaje:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {LEARNING_PATHS.map((path) => {
            const isSelected = path.id === activePathId;
            return (
              <div
                key={path.id}
                onClick={() => setActivePathId(path.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#162138] to-[#0f1424] border-cyan-500 shadow-lg shadow-cyan-950/50'
                    : 'bg-[#0f1422] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {path.level}
                  </span>
                  <span className="text-[11px] text-slate-400">{path.durationEst}</span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1">{path.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                  {path.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-amber-300">
                  <span className="flex items-center gap-1 font-bold">
                    <Coins className="w-3.5 h-3.5" />
                    +{path.rewardCoins} PC
                  </span>
                  <span className="text-purple-300 font-semibold">+{path.rewardXp} XP</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Path Details & Progress */}
      <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Ruta en Progreso:
            </span>
            <h3 className="text-xl font-bold text-white">{selectedPath.title}</h3>
            <p className="text-xs text-slate-300 max-w-xl">{selectedPath.description}</p>
          </div>

          <div className="w-full sm:w-64 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-300">Progreso de la Ruta:</span>
              <span className="text-cyan-400">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-400 text-right">
              {completedCount} de {pathPrompts.length} prompts utilizados
            </div>
            {progressPercent === 100 && (
              <button
                onClick={() => {
                  const alreadyClaimed = userStats.completedChallenges.includes(selectedPath.id);
                  if (alreadyClaimed) {
                    addToast('Esta ruta ya ha sido completada y recompensada.', 'info');
                    return;
                  }
                  completeChallenge(selectedPath.id);
                  addToast(`¡Ruta completada! +${selectedPath.rewardCoins} PC y +${selectedPath.rewardXp} XP 🏆`, 'success');
                }}
                className="w-full mt-2 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs shadow-md glow-gold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Coins className="w-3.5 h-3.5" />
                <span>Reclamar Recompensa ({selectedPath.rewardCoins} PC)</span>
              </button>
            )}
          </div>
        </div>

        {/* Path Prompts Sequence */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Etapas de la Ruta ({pathPrompts.length} Prompts Secuenciales):
            </h4>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              MODO DEMO
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pathPrompts.map((prompt, idx) => {
              const isDone = userStats.usedPromptIds.includes(prompt.id);
              return (
                <div key={prompt.id} className="relative flex flex-col justify-between">
                  <div className="absolute -top-2.5 -left-2.5 z-10 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-black flex items-center justify-center shadow-md">
                    {idx + 1}
                  </div>
                  <PromptCard prompt={prompt} />
                  <div className="mt-2 flex items-center justify-between px-2">
                    <span className="text-[11px] text-slate-400">
                      Paso {idx + 1} de {pathPrompts.length}
                    </span>
                    <button
                      onClick={() => {
                        markPromptUsed(prompt.id);
                        addToast(`Paso "${prompt.title.slice(0, 20)}..." marcado como completado`, 'success');
                      }}
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border transition-all ${
                        isDone
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-purple-500'
                      }`}
                    >
                      {isDone ? '✓ Completado' : 'Marcar completado'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
