import React, { useState } from 'react';
import {
  Smartphone,
  Github,
  Globe,
  Layers,
  Code,
  Shield,
  Coins,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ArchitectureDocs: React.FC = () => {
  const { addToast } = useApp();
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    addToast('Comando copiado al portapapeles 📋', 'success');
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-emerald-400" />
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Arquitectura Android & Guía de Publicación Gratuita
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Especificación técnica para desplegar PromptVerse en plataformas estáticas gratuitas (GitHub Pages / Vercel) y plan de migración hacia Android.
        </p>
      </div>

      {/* Grid: 2 Android Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Route A: PWA & TWA */}
        <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold text-xs flex items-center justify-center">
              A
            </span>
            <h3 className="text-base font-bold text-white">
              Ruta A: PWA Instalable / Trusted Web Activity (TWA)
            </h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Convierte esta web en una aplicación instalable en la pantalla de inicio del usuario de forma inmediata y empaquétala para Google Play Store mediante Bubblewrap / Digital Asset Links.
          </p>

          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Coste:</strong> 0€ (Alojamiento estático gratuito en GitHub Pages / Vercel).
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Actualizaciones:</strong> Instantáneas sin esperar aprobación de Google Play.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Herramienta:</strong> Google Bubblewrap CLI para generar el archivo \`.aab\` o \`.apk\`.
              </span>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 font-mono text-[11px] text-slate-300 flex items-center justify-between">
            <code>npx @bubblewrap/cli init --manifest=manifest.json</code>
            <button
              onClick={() => copyToClipboard('npx @bubblewrap/cli init --manifest=manifest.json', 'bubblewrap')}
              className="p-1 hover:text-white"
            >
              {copiedSection === 'bubblewrap' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Route B: Native Kotlin Compose */}
        <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-xs flex items-center justify-center">
              B
            </span>
            <h3 className="text-base font-bold text-white">
              Ruta B: Aplicación Android Nativa (Kotlin + Compose)
            </h3>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Reescribe la capa de interfaz en Jetpack Compose puro con arquitectura MVVM, Room Database / DataStore y el SDK oficial de Google Mobile Ads (AdMob) para anuncios recompensados nativos.
          </p>

          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Stack:</strong> Kotlin 2.0+, Jetpack Compose, Material 3, Hilt DI, Coroutines.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Monetización:</strong> \`com.google.android.gms:play-services-ads:23.0.0\` nativo.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Persistencia:</strong> Room SQLite para catálogo offline y DataStore para saldo de monedas.
              </span>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 font-mono text-[11px] text-slate-300">
            <code>implementation("androidx.compose.material3:material3:1.2.1")</code>
          </div>
        </div>
      </div>

      {/* GitHub Pages & Free Static Hosting Guide */}
      <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <Github className="w-5 h-5 text-white" />
          <h3 className="text-lg font-bold text-white">
            Cómo Publicar Gratis en GitHub Pages en 3 Pasos
          </h3>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          PromptVerse AI es una Single Page Application (SPA) en React y TypeScript que compila a HTML, CSS y JS 100% estáticos. No requiere servidor Node.js de pago para funcionar.
        </p>

        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-300">Paso 1: Clonar y compilar</span>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 font-mono text-xs text-slate-300 flex items-center justify-between">
              <code>npm run build</code>
              <button
                onClick={() => copyToClipboard('npm run build', 'build')}
                className="p-1 hover:text-white"
              >
                {copiedSection === 'build' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-300">Paso 2: Subir a GitHub</span>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 font-mono text-xs text-slate-300 flex items-center justify-between">
              <code>git init && git add . && git commit -m "feat: PromptVerse AI v1.0"</code>
              <button
                onClick={() => copyToClipboard('git init && git add . && git commit -m "feat: PromptVerse AI v1.0"', 'git')}
                className="p-1 hover:text-white"
              >
                {copiedSection === 'git' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-300">Paso 3: Activar GitHub Pages</span>
            <p className="text-xs text-slate-400">
              En tu repositorio de GitHub, ve a <em>Settings -&gt; Pages -&gt; Build and deployment</em>, selecciona <strong>GitHub Actions</strong> o la rama \`gh-pages\`. ¡Tu web estará online gratis en segundos!
            </p>
          </div>
        </div>
      </div>

      {/* Security & Zero Secrets Notice */}
      <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-2">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-400" />
          <h4 className="text-sm font-bold text-white">Seguridad y Protección de Claves</h4>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Esta versión cumple estrictamente la política de <strong>cero secretos expuestos</strong>: no contiene API keys incrustadas en el cliente ni contraseñas. El Prompt Builder funciona mediante composición local de plantillas y reglas estructuradas sin cargos ni sorpresas.
        </p>
      </div>
    </div>
  );
};
