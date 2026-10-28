import React, { useState } from 'react';
import { PhotoProMode } from '../../data/photography/types';
import { useApp } from '../../context/AppContext';
import {
  X,
  Camera,
  Copy,
  Check,
  Bookmark,
  Sun,
  Layers,
  Compass,
  Palette,
  Sliders,
  Sparkles,
  ExternalLink,
  Tag,
  Share2
} from 'lucide-react';

interface PhotoProModalProps {
  mode: PhotoProMode | null;
  onClose: () => void;
}

export const PhotoProModal: React.FC<PhotoProModalProps> = ({ mode, onClose }) => {
  const { userStats, toggleFavorite, addToast, markPromptUsed } = useApp();
  const [copied, setCopied] = useState(false);

  if (!mode) return null;

  const isFavorite = userStats.favoritePromptIds.includes(mode.id);

  const handleCopy = () => {
    navigator.clipboard.writeText(mode.fullPrompt);
    setCopied(true);
    addToast(`Prompt de "${mode.title}" copiado al portapapeles 📸`, 'success');
    markPromptUsed(mode.id);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#0d1222] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-indigo-950/40 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" />
                {mode.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                Nivel: {mode.difficulty}
              </span>
              {mode.recommendedAspect && (
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Ratio {mode.recommendedAspect}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {mode.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/60 hover:bg-slate-700 border border-slate-700/60 transition-colors shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
          {/* Description */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Concepto y Estética Visual
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {mode.description}
            </p>
          </div>

          {/* AI Prompt Box (Highlighted) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-cyan-400" />
                Prompt Fotográfico Completo para IA
              </span>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  copied
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-purple-600 hover:bg-purple-500 text-white border-purple-400/40 shadow-lg shadow-purple-950/50'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copiado al portapapeles' : 'Copiar Prompt'}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#060810] border border-purple-500/30 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed relative select-all overflow-x-auto shadow-inner">
              {mode.fullPrompt}
            </div>
            <p className="text-[11px] text-slate-400">
              * Compatible con Midjourney v6.1, FLUX.1 (Schnell / Dev), DALL-E 3 y Stable Diffusion XL.
            </p>
          </div>

          {/* Technical Photography Specifications Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-indigo-400" />
              Ficha Técnica de Iluminación y Cámara Real
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Camera & Lens */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  Cámara y Objetivo Óptico
                </div>
                <p className="text-xs text-slate-200">{mode.cameraLens}</p>
              </div>

              {/* Lighting */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Sun className="w-4 h-4 text-amber-400" />
                  Esquema de Iluminación
                </div>
                <p className="text-xs text-slate-200">{mode.lighting}</p>
              </div>

              {/* Composition */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Composición y Encuadre
                </div>
                <p className="text-xs text-slate-200">{mode.composition}</p>
              </div>

              {/* Perspective */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  Ángulo y Perspectiva
                </div>
                <p className="text-xs text-slate-200">{mode.perspective}</p>
              </div>

              {/* Color Palette */}
              <div className="sm:col-span-2 bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-pink-300">
                  <Palette className="w-4 h-4 text-pink-400" />
                  Paleta de Colores y Tonalidad
                </div>
                <p className="text-xs text-slate-200">{mode.colorPalette}</p>
              </div>
            </div>
          </div>

          {/* Example Use Case */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-1">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Casos Reales de Uso Profesional
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {mode.exampleUse}
            </p>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap pt-2">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs text-slate-400 font-semibold">Etiquetas:</span>
            {mode.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-purple-300 border border-slate-700/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#090d18] flex items-center justify-between gap-3">
          <button
            onClick={() => toggleFavorite(mode.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              isFavorite
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-rose-400' : ''}`} />
            <span>{isFavorite ? 'En Mi Biblioteca (Favorito)' : 'Guardar en Favoritos'}</span>
          </button>

          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
              copied
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-purple-400/40 shadow-lg shadow-purple-950/60'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '¡Copiado con Éxito!' : 'Copiar Prompt Completo'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
