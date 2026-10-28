import React, { useState } from 'react';
import { AICommandItem } from '../../types';
import { useApp } from '../../context/AppContext';
import {
  X,
  Copy,
  Check,
  Terminal,
  Sparkles,
  Tag,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Cpu
} from 'lucide-react';

interface CommandDetailModalProps {
  command: AICommandItem | null;
  onClose: () => void;
}

export const CommandDetailModal: React.FC<CommandDetailModalProps> = ({ command, onClose }) => {
  const { addToast } = useApp();
  const [copied, setCopied] = useState(false);

  if (!command) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(command.commandText);
    setCopied(true);
    addToast('¡Comando copiado al portapapeles! ⚡ Listo para usar en ChatGPT', 'success');
    setTimeout(() => setCopied(false), 2200);
  };

  // Highlight variables like [VARIABLE]
  const renderHighlightedCommand = (text: string) => {
    const parts = text.split(/(\[[A-Z0-9_ÁÉÍÓÚÑ/]+\])/g);
    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span
            key={index}
            className="px-1.5 py-0.5 mx-0.5 text-amber-300 bg-amber-500/20 border border-amber-500/30 rounded font-bold font-mono text-xs sm:text-sm"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#131929] to-[#0c101d] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 text-slate-100 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 pr-8">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              {command.category}
            </span>
            <span className="text-xs font-mono font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
              ID: {command.id}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {command.title}
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            {command.description}
          </p>
        </div>

        {/* Command Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Instrucción Directa del Comando
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30 transition-all hover:scale-105 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Comando</span>
                </>
              )}
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-mono text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto shadow-inner">
            {renderHighlightedCommand(command.commandText)}
          </div>
          <p className="text-[11px] text-slate-400 italic">
            * Los campos resaltados en <span className="text-amber-300 font-semibold">[CORCHETES]</span> deben ser sustituidos con tu información o texto antes de enviar.
          </p>
        </div>

        {/* Example of Use & Expected Result */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1.5">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              Ejemplo Práctico de Uso
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {command.exampleUse}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1.5">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Resultado Esperado
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {command.expectedResult}
            </p>
          </div>
        </div>

        {/* Tools and Tags */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] text-slate-400 font-medium">Compatible con:</span>
            {(command.tools && command.tools.length > 0 ? command.tools : ['ChatGPT', 'Claude', 'Gemini']).map((tool) => (
              <span
                key={tool}
                className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-cyan-500/20"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 flex-wrap">
            {command.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-slate-400 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-600/30 transition-all hover:scale-105 active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '¡Copiado con éxito!' : 'Copiar Comando Ahora'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
