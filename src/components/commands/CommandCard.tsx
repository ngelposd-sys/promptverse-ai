import React, { useState } from 'react';
import { AICommandItem } from '../../types';
import { useApp } from '../../context/AppContext';
import {
  Copy,
  Check,
  Terminal,
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface CommandCardProps {
  command: AICommandItem;
  onSelect: (command: AICommandItem) => void;
}

export const CommandCard: React.FC<CommandCardProps> = ({ command, onSelect }) => {
  const { addToast } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(command.commandText);
    setCopied(true);
    addToast('¡Comando de IA copiado al portapapeles! ⚡', 'success');
    setTimeout(() => setCopied(false), 2200);
  };

  // Truncate command preview
  const previewText =
    command.commandText.length > 140
      ? command.commandText.substring(0, 140) + '...'
      : command.commandText;

  return (
    <div
      onClick={() => onSelect(command)}
      className="group relative flex flex-col justify-between bg-gradient-to-b from-[#101524] to-[#0c0f1a] border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 hover:-translate-y-0.5"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-[11px] font-bold text-cyan-300 px-2.5 py-0.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
              <Terminal className="w-3 h-3 text-cyan-400" />
              {command.category}
            </span>
            <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
              {command.id}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className={`p-2 rounded-xl transition-all ${
              copied
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-800/80 hover:bg-cyan-600 hover:text-white text-slate-300 border border-slate-700/60 shadow-sm'
            }`}
            title="Copiar comando directamente"
            aria-label="Copiar comando"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 mb-1.5">
          {command.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
          {command.description}
        </p>

        {/* Command code preview */}
        <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono text-[11px] text-cyan-200/90 line-clamp-3 leading-relaxed overflow-hidden">
          {previewText}
        </div>
      </div>

      {/* Footer tags and action */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 overflow-hidden">
          {command.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-slate-400 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 whitespace-nowrap"
            >
              #{tag}
            </span>
          ))}
          {command.tags.length > 2 && (
            <span className="text-[10px] text-slate-400 font-mono">
              +{command.tags.length - 2}
            </span>
          )}
        </div>

        <span className="flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <span>Ver detalle</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  );
};
