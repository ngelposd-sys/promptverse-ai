import React, { useState, useMemo } from 'react';
import { PHOTO_PRO_MODES, PHOTO_CATEGORIES, PhotoProMode } from '../../data/photography';
import { PhotoProCard } from './PhotoProCard';
import { PhotoProModal } from './PhotoProModal';
import {
  Camera,
  Search,
  SlidersHorizontal,
  Sparkles,
  Filter,
  CheckCircle2,
  ChevronRight,
  Flame,
  Bookmark
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PhotoProView: React.FC = () => {
  const { searchQuery, setSearchQuery } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<PhotoProMode | null>(null);
  const [localSearch, setLocalSearch] = useState<string>('');

  const effectiveSearch = localSearch || searchQuery;

  // Filter modes based on search, category and difficulty
  const filteredModes = useMemo(() => {
    return PHOTO_PRO_MODES.filter((mode) => {
      // Category match
      if (selectedCategory && mode.categoryId !== selectedCategory) {
        return false;
      }
      // Difficulty match
      if (selectedDifficulty && mode.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search match
      if (effectiveSearch.trim()) {
        const query = effectiveSearch.toLowerCase().trim();
        const inTitle = mode.title.toLowerCase().includes(query);
        const inDesc = mode.description.toLowerCase().includes(query);
        const inPrompt = mode.fullPrompt.toLowerCase().includes(query);
        const inCategory = mode.category.toLowerCase().includes(query);
        const inCamera = mode.cameraLens.toLowerCase().includes(query);
        const inTags = mode.tags.some((t) => t.toLowerCase().includes(query));
        if (!inTitle && !inDesc && !inPrompt && !inCategory && !inCamera && !inTags) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDifficulty, effectiveSearch]);

  const difficulties = ['Principiante', 'Intermedio', 'Avanzado', 'Experto', 'Master'];

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Header Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#13192f] via-[#0d1326] to-[#080c18] border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-600/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wide">
              <Camera className="w-3.5 h-3.5" />
              <span>Fotografía Pro con Inteligencia Artificial</span>
            </span>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
              200 Modos Únicos
            </span>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
              10 Categorías Maestras
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Enciclopedia de{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Fotografía Profesional
            </span>{' '}
            para IA
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Prompts de ingeniería fotográfica de alta definición con lentes reales (Hasselblad, Leica, Sony GM, Canon L), esquemas de iluminación de estudio, composición y paletas de color para Midjourney v6, FLUX.1 y DALL-E 3.
          </p>

          {/* Quick Search */}
          <div className="pt-2 flex items-center max-w-xl relative">
            <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={effectiveSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                setSearchQuery(e.target.value);
              }}
              placeholder="Buscar por modo, cámara ('Hasselblad'), iluminación o etiqueta..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 shadow-xl"
            />
            {Boolean(effectiveSearch) && (
              <button
                onClick={() => {
                  setLocalSearch('');
                  setSearchQuery('');
                }}
                className="absolute right-3.5 text-xs text-slate-400 hover:text-white px-2 py-1 rounded-lg bg-slate-800"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter Pills (10 Master Categories) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Filter className="w-4 h-4 text-cyan-400" />
            Filtrar por Categoría (20 Modos en cada una)
          </h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300"
            >
              Ver las 10 categorías
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all shrink-0 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-md shadow-purple-950/50'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
            }`}
          >
            Todas las Categorías (200)
          </button>

          {PHOTO_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-sm'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-400">
                  {cat.modeCount}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Difficulty Filter Bar */}
      <section className="flex items-center justify-between flex-wrap gap-3 bg-[#0d1222] border border-slate-800/80 p-3.5 rounded-2xl">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-purple-400" />
            Dificultad:
          </span>
          <button
            onClick={() => setSelectedDifficulty(null)}
            className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
              selectedDifficulty === null
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            Todas
          </button>
          {difficulties.map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff)}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedDifficulty === diff
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>

        {/* Counter Badge */}
        <div className="text-xs text-slate-400 font-medium">
          Mostrando <span className="font-bold text-white">{filteredModes.length}</span> de 200 modos
        </div>
      </section>

      {/* Grid of Photo Cards */}
      {filteredModes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredModes.map((mode) => (
            <PhotoProCard
              key={mode.id}
              mode={mode}
              onOpenDetail={(m) => setActiveMode(m)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">No se encontraron modos fotográficos</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Prueba a cambiar el término de búsqueda o quitar los filtros de categoría y dificultad.
            </p>
          </div>
          <button
            onClick={() => {
              setLocalSearch('');
              setSearchQuery('');
              setSelectedCategory(null);
              setSelectedDifficulty(null);
            }}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-all"
          >
            Restablecer todos los filtros
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {activeMode && (
        <PhotoProModal
          mode={activeMode}
          onClose={() => setActiveMode(null)}
        />
      )}
    </div>
  );
};
