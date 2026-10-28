import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { CATEGORIES } from '../../data/categories';
import { PROMPTS } from '../../data/prompts';
import { PromptCard } from '../prompts/PromptCard';
import { PromptDifficulty, AccessLevel, AITool } from '../../types';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  Compass,
  Crown,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';

export const ExploreView: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useApp();

  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedAccessLevel, setSelectedAccessLevel] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'usage' | 'rating' | 'newest'>('relevance');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const toolsList: AITool[] = [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Midjourney',
    'DALL-E 3',
    'DeepSeek',
    'Universal'
  ];

  // Filtering & Sorting
  const filteredPrompts = useMemo(() => {
    return PROMPTS.filter((prompt) => {
      // Category filter
      if (selectedCategory && prompt.categoryId !== selectedCategory) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && prompt.difficulty !== selectedDifficulty) {
        return false;
      }

      // Access level filter
      if (selectedAccessLevel !== 'all' && prompt.accessLevel !== selectedAccessLevel) {
        return false;
      }

      // Tool filter
      if (selectedTool !== 'all') {
        const matchesTool = prompt.tools.some(
          (t) => t.toLowerCase() === selectedTool.toLowerCase() || t === 'Universal'
        );
        if (!matchesTool) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = prompt.title.toLowerCase().includes(q);
        const matchesDesc = prompt.description.toLowerCase().includes(q);
        const matchesObj = prompt.objective.toLowerCase().includes(q);
        const matchesTags = prompt.tags.some((t) => t.toLowerCase().includes(q));
        const matchesCategory = CATEGORIES.some(
          (c) => c.id === prompt.categoryId && c.name.toLowerCase().includes(q)
        );

        if (!matchesTitle && !matchesDesc && !matchesObj && !matchesTags && !matchesCategory) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'usage') return b.usageCount - a.usageCount;
      if (sortBy === 'rating') return b.ratingScore - a.ratingScore;
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return 0; // relevance / default order
    });
  }, [selectedCategory, selectedDifficulty, selectedAccessLevel, selectedTool, searchQuery, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedDifficulty('all');
    setSelectedAccessLevel('all');
    setSelectedTool('all');
    setSearchQuery('');
  };

  const hasActiveFilters =
    Boolean(selectedCategory) ||
    selectedDifficulty !== 'all' ||
    selectedAccessLevel !== 'all' ||
    selectedTool !== 'all' ||
    Boolean(searchQuery.trim());

  return (
    <div className="space-y-6 pb-16">
      {/* Header and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Biblioteca de Prompts
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Explora {PROMPTS.length} prompts técnicos y profesionales verificados para ChatGPT, Claude y Gemini.
          </p>
        </div>

        {/* Search input in explore */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por título, tag o tecnología..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Categories Horizontal Carousel Filter */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Categorías:
          </span>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
            >
              Ver todas las categorías
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategory === null
                ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            Todas ({PROMPTS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="p-4 rounded-2xl bg-[#0f1422] border border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Difficulty filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
          >
            <option value="all">Todas las dificultades</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
            <option value="Master">Master</option>
          </select>

          {/* Access level filter */}
          <select
            value={selectedAccessLevel}
            onChange={(e) => setSelectedAccessLevel(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
          >
            <option value="all">Todos los niveles de acceso</option>
            <option value="gratuito">Gratuito</option>
            <option value="experto">Nivel Experto</option>
            <option value="master">Zona Master</option>
          </select>

          {/* Tool filter */}
          <select
            value={selectedTool}
            onChange={(e) => setSelectedTool(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
          >
            <option value="all">Cualquier herramienta de IA</option>
            {toolsList.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-semibold px-2 py-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        {/* Sort by dropdown */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs text-slate-400">Ordenar por:</span>
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
          >
            <option value="relevance">Relevancia</option>
            <option value="usage">Más utilizados</option>
            <option value="rating">Mayor valoración</option>
            <option value="newest">Más recientes</option>
          </select>
        </div>
      </div>

      {/* Prompts Results Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-200">
              No se encontraron prompts con los filtros actuales
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Prueba a ajustar los términos de búsqueda o desactiva los filtros de dificultad y herramientas.
            </p>
          </div>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Restablecer todos los filtros
          </button>
        </div>
      )}
    </div>
  );
};
