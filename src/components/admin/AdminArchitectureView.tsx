import React from 'react';
import {
  ShieldAlert,
  Database,
  Lock,
  Layers,
  FileCheck,
  Tag,
  Coins,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { PROMPTS } from '../../data/prompts';

export const AdminArchitectureView: React.FC = () => {
  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Arquitectura de Administración & CMS de Contenidos
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Especificación del futuro panel de control administrativo y gestión desacoplada de catálogos mediante esquemas JSON validados.
        </p>
      </div>

      {/* Security Notice: No hardcoded unauthenticated admin backdoor */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
        <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-amber-200">
          <strong className="font-bold">Principio de Seguridad Cero-Backdoors:</strong>
          <p className="text-amber-300/80">
            Siguiendo las mejores directrices de ciberseguridad, no se expone un panel administrativo abierto en cliente sin autenticación de servidor ni credenciales falsas predeterminadas (ej: admin/admin). Cuando se integre Firebase Auth o un backend OAuth seguro con verificación de roles RBAC (claims de admin), este módulo activará las operaciones de escritura directa.
          </p>
        </div>
      </div>

      {/* Content Decoupling Architecture Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#0f1422] border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
            Catálogo Actual
          </span>
          <div className="text-2xl font-black text-white">{PROMPTS.length} Prompts</div>
          <p className="text-xs text-slate-400">
            Almacenados en <code>src/data/prompts.ts</code> de forma modular e independiente de los componentes.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1422] border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
            Taxonomía
          </span>
          <div className="text-2xl font-black text-white">{CATEGORIES.length} Categorías</div>
          <p className="text-xs text-slate-400">
            Estructuradas en <code>src/data/categories.ts</code> con identificadores estables y slugs semánticos.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f1422] border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Economía Virtual
          </span>
          <div className="text-2xl font-black text-white">4 Rangos de Nivel</div>
          <p className="text-xs text-slate-400">
            Costes y desbloqueos parametrizados en <code>src/services/rewardsService.ts</code> sin números mágicos.
          </p>
        </div>
      </div>

      {/* Roadmap for Admin Panel Modules */}
      <div className="p-6 rounded-3xl bg-[#0f1422] border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white">
          Módulos del Futuro Panel Administrativo (Backend Seguro)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-purple-400 block">1. Gestor de Prompts & Versiones</span>
            <p className="text-slate-400">
              Creación, edición y control de revisiones con historial de cambios de versión y fechas de actualización.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-cyan-400 block">2. Administrador de Precios en Monedas</span>
            <p className="text-slate-400">
              Ajuste de costes en PromptCoins (gratuito, 25-50 PC o 75-100 PC para categoría Master).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-emerald-400 block">3. Importador Masivo JSON / CSV</span>
            <p className="text-slate-400">
              Carga y validación automática de catálogos mediante esquema JSON Schema estricto antes de publicar.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span className="font-bold text-amber-400 block">4. Buzón de Reportes de Calidad</span>
            <p className="text-slate-400">
              Revisión de sugerencias enviadas por la comunidad sobre fallos o alucinaciones detectadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
