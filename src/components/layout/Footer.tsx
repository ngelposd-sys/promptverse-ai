import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, ShieldCheck, Scale, ExternalLink, Heart, Terminal, Compass, Camera } from 'lucide-react';
import { LegalTab } from '../legal/LegalView';

export const Footer: React.FC = () => {
  const { setCurrentView, setLegalTab } = useApp();

  const handleOpenLegal = (tab: LegalTab) => {
    if (setLegalTab) setLegalTab(tab);
    setCurrentView('legal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#070a12] border-t border-slate-800/80 text-slate-400 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0d14] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                PromptVerse <span className="text-purple-400 text-xs px-1.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/30">AI</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              La biblioteca y enciclopedia definitiva de prompts profesionales, técnicas avanzadas de razonamiento, taller guiado y fotografía pro para dominar ChatGPT, Claude, Gemini, Midjourney y FLUX.
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <span>Construido con tecnología ligera para máximo rendimiento en cualquier equipo.</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setCurrentView('explore')}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-slate-400" />
                  Biblioteca de Prompts
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('photoPro')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-medium text-slate-300"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  Fotografía Pro (200 Modos)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('builder')}
                  className="hover:text-purple-300 transition-colors"
                >
                  Taller de Prompts
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('commandCenter')}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-slate-400" />
                  AI Command Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('master')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Zona Master & Rutas
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links Col */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-purple-400" />
              Marco Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleOpenLegal('aviso-legal')}
                  className="hover:text-white transition-colors"
                >
                  Aviso Legal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenLegal('privacidad')}
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenLegal('cookies')}
                  className="hover:text-white transition-colors"
                >
                  Política de Cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenLegal('propiedad-intelectual')}
                  className="hover:text-white transition-colors"
                >
                  Propiedad Intelectual y Condiciones
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-300 font-medium text-center sm:text-left">
            © 2026 PromptVerse AI. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Datos procesados localmente en tu dispositivo</span>
            <span>•</span>
            <span>Versión 2.1 (Fotografía Pro Ready)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
