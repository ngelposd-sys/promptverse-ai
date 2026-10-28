import React from 'react';
import { useApp } from '../../context/AppContext';
import { PROMPTS } from '../../data/prompts';
import { PromptCard } from '../prompts/PromptCard';
import { Crown, Sparkles, Coins, Zap, Shield, ArrowRight } from 'lucide-react';

export const MasterZone: React.FC = () => {
  const { userStats, setCurrentView } = useApp();

  const masterPrompts = PROMPTS.filter((p) => p.isMaster || p.accessLevel === 'master');

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#211708] via-[#14101e] to-[#0d1424] border border-amber-500/40 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black tracking-wider uppercase">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Nivel 3 — Zona Master Exclusiva</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ingeniería de Prompts y Flujos de Élite
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Esta sección contiene arquitecturas de agentes autónomos, frameworks de razonamiento profundo (Tree of Thoughts), gestores de monetización en Android y deconstrucción de modelos.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-amber-300">
            <div className="flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span>Tu Saldo: {userStats.coins} PromptCoins</span>
            </div>
            <button
              onClick={() => setCurrentView('rewards')}
              className="text-amber-400 hover:text-amber-300 underline font-bold"
            >
              Conseguir más monedas gratis
            </button>
          </div>
        </div>
      </div>

      {/* Value pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <Zap className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold text-white">Cero Clichés ni Relleno</h4>
          <p className="text-xs text-slate-400">
            Instrucciones rigurosas diseñadas para producción en empresas y proyectos de software reales.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <Shield className="w-5 h-5 text-cyan-400" />
          <h4 className="text-sm font-bold text-white">Desbloqueo Permanente</h4>
          <p className="text-xs text-slate-400">
            Una vez desbloqueado con tus PromptCoins ganados, el prompt queda guardado en tu perfil para siempre.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h4 className="text-sm font-bold text-white">Variables y Casos Límite</h4>
          <p className="text-xs text-slate-400">
            Incluyen mitigación de riesgos, delimitadores anti-inyección y manejo defensivo de errores.
          </p>
        </div>
      </div>

      {/* Master Prompts Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            Catálogo de Prompts de Nivel Master ({masterPrompts.length})
          </h3>
          <span className="text-xs text-slate-400">
            {userStats.unlockedPromptIds.filter((id) => masterPrompts.some((m) => m.id === id)).length} de {masterPrompts.length} desbloqueados
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {masterPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </div>
  );
};
