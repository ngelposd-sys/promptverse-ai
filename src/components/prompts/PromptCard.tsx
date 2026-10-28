import React, { useState } from 'react';
import { PromptItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { CATEGORIES } from '../../data/categories';
import {
  Copy,
  Check,
  Heart,
  Crown,
  Lock,
  Unlock,
  Coins,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface PromptCardProps {
  prompt: PromptItem;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const {
    userStats,
    toggleFavorite,
    markPromptUsed,
    setActivePromptDetail,
    unlockPrompt,
    addToast
  } = useApp();

  const [copied, setCopied] = useState(false);

  const isFavorite = userStats.favoritePromptIds.includes(prompt.id);
  const isUnlocked = prompt.coinCost === 0 || userStats.unlockedPromptIds.includes(prompt.id);
  const category = CATEGORIES.find((c) => c.id === prompt.categoryId);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isUnlocked) {
      addToast(`Debes desbloquear este prompt por ${prompt.coinCost} PC antes de copiarlo.`, 'warning');
      return;
    }

    navigator.clipboard.writeText(prompt.fullPrompt);
    setCopied(true);
    markPromptUsed(prompt.id);
    addToast('¡Prompt copiado al portapapeles! 📋', 'success');

    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(prompt.id);
  };

  const handleUnlockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    unlockPrompt(prompt);
  };

  // Difficulty badge colors
  let diffBadge = 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
  if (prompt.difficulty === 'Intermedio') {
    diffBadge = 'bg-blue-500/10 text-blue-300 border-blue-500/20';
  } else if (prompt.difficulty === 'Avanzado') {
    diffBadge = 'bg-purple-500/10 text-purple-300 border-purple-500/20';
  } else if (prompt.difficulty === 'Master') {
    diffBadge = 'bg-amber-500/15 text-amber-300 border-amber-500/30 font-bold';
  }

  return (
    <div
      onClick={() => setActivePromptDetail(prompt)}
      className="group relative flex flex-col justify-between bg-gradient-to-b from-[#131926] to-[#0e131f] border border-slate-800/90 hover:border-purple-500/50 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/30 hover:-translate-y-0.5"
    >
      {/* Top row: Category, difficulty, lock status */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-semibold text-slate-300 px-2.5 py-0.5 rounded-lg bg-slate-800/90 border border-slate-700/60">
              {category?.name || 'IA'}
            </span>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-lg border ${diffBadge}`}>
              {prompt.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {prompt.isMaster && (
              <span className="flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
                <Crown className="w-3 h-3 text-amber-400" />
                MASTER
              </span>
            )}
            
            <button
              onClick={handleFavoriteClick}
              title={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800/70 transition-colors"
            >
              <Heart
                className={`w-4 h-4 transition-all ${
                  isFavorite ? 'fill-rose-500 text-rose-500 scale-110' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1 mb-1.5">
          {prompt.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
          {prompt.description}
        </p>

        {/* Variables badge preview */}
        {((prompt.variables && prompt.variables.length > 0) || (prompt.fullPrompt.match(/\[([A-Z0-9_ÁÉÍÓÚÑ/]+)\]/g) || []).length > 0) && (() => {
          const vars = prompt.variables && prompt.variables.length > 0
            ? prompt.variables.map(v => v.key)
            : Array.from(new Set(prompt.fullPrompt.match(/\[([A-Z0-9_ÁÉÍÓÚÑ/]+)\]/g) || [])).map(m => m.replace(/[\[\]]/g, ''));
          return (
            <div className="flex items-center gap-1.5 mb-3 flex-wrap">
              <span className="text-[10px] text-slate-400">Variables:</span>
              {vars.slice(0, 3).map((key) => (
                <span
                  key={key}
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-800/40"
                >
                  [{key}]
                </span>
              ))}
              {vars.length > 3 && (
                <span className="text-[10px] text-slate-400">+{vars.length - 3}</span>
              )}
            </div>
          );
        })()}
      </div>

      {/* Bottom actions row: Tools, Unlock/Copy button */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-1 text-[11px] text-slate-400">
          <span className="truncate max-w-[130px]">
            {prompt.tools.slice(0, 2).join(' • ')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!isUnlocked ? (
            <button
              onClick={handleUnlockClick}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-200 text-xs font-bold transition-all shadow-sm glow-gold"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Desbloquear ({prompt.coinCost} PC)</span>
            </button>
          ) : (
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 hover:bg-purple-600/90 text-slate-200 hover:text-white border border-slate-700/80 hover:border-purple-500/50'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          )}

          <div className="p-1.5 text-slate-400 group-hover:text-purple-400 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
