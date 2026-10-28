import React from 'react';
import { PhotoProMode } from '../../data/photography/types';
import { useApp } from '../../context/AppContext';
import { photoModeToPromptItem } from '../../data/photography';
import {
  Camera,
  Copy,
  Check,
  Bookmark,
  Sparkles,
  Sliders,
  Sun,
  Eye,
  Layers
} from 'lucide-react';

interface PhotoProCardProps {
  mode: PhotoProMode;
  onOpenDetail: (mode: PhotoProMode) => void;
}

export const PhotoProCard: React.FC<PhotoProCardProps> = ({ mode, onOpenDetail }) => {
  const { userStats, toggleFavorite, addToast, markPromptUsed } = useApp();
  const [copied, setCopied] = React.useState(false);

  const isFavorite = userStats.favoritePromptIds.includes(mode.id);

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(mode.fullPrompt);
    setCopied(true);
    addToast(`Prompt copiado: "${mode.title}" 📸`, 'success');
    markPromptUsed(mode.id);

    // Also register in favorites structure if needed
    const promptItem = photoModeToPromptItem(mode);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(mode.id);
  };

  const difficultyColors = {
    Principiante: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    Intermedio: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    Avanzado: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    Experto: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    Master: 'bg-rose-500/10 text-rose-400 border-rose-500/30'
  };

  return (
    <div
      onClick={() => onOpenDetail(mode)}
      className="group relative bg-[#0e1322]/80 hover:bg-[#12182c] border border-slate-800/90 hover:border-purple-500/50 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-purple-950/30 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/80 flex items-center gap-1">
              <Camera className="w-3 h-3 text-cyan-400" />
              {mode.category}
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                difficultyColors[mode.difficulty] || 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              {mode.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleFavoriteClick}
              title={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
              className={`p-1.5 rounded-lg border transition-all ${
                isFavorite
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/40 border-slate-700/60 hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-rose-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug mb-2">
          {mode.title}
        </h3>

        {/* Short description */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {mode.description}
        </p>

        {/* Technical specs pill summary */}
        <div className="space-y-1.5 mb-4 text-[11px] bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-1.5 text-slate-300 truncate" title={mode.cameraLens}>
            <Sliders className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="font-medium text-slate-400 shrink-0">Óptica:</span>
            <span className="truncate text-slate-200">{mode.cameraLens}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 truncate" title={mode.lighting}>
            <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-medium text-slate-400 shrink-0">Luz:</span>
            <span className="truncate text-slate-200">{mode.lighting}</span>
          </div>
        </div>
      </div>

      {/* Prompt Preview Snippet & Actions */}
      <div className="pt-2 border-t border-slate-800/60">
        <div className="flex items-center justify-between gap-2">
          {/* Tags */}
          <div className="flex items-center gap-1 overflow-hidden">
            {mode.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 truncate"
              >
                #{tag}
              </span>
            ))}
            {mode.tags.length > 2 && (
              <span className="text-[10px] text-slate-400">+{mode.tags.length - 2}</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleCopyPrompt}
              className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-xl border transition-all ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-purple-600 hover:bg-purple-500 text-white border-purple-400/30'
              }`}
              title="Copiar prompt completo de IA"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar'}</span>
            </button>

            <button
              onClick={() => onOpenDetail(mode)}
              className="p-1.5 text-slate-400 hover:text-white rounded-xl bg-slate-800/60 hover:bg-slate-700 border border-slate-700/60"
              title="Ver ficha técnica completa"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
