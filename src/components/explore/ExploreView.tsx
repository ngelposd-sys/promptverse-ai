import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { CATEGORIES } from '../../data/categories';
import { PROMPTS } from '../../data/prompts';
import { COMMANDS } from '../../data/commands';
import { PromptCard } from '../prompts/PromptCard';
import { CommandCard } from '../commands/CommandCard';
import { CommandDetailModal } from '../commands/CommandDetailModal';
import { PromptDifficulty, AccessLevel, AITool, AICommandItem } from '../../types';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  Compass,
  Crown,
  Sparkles,
  ArrowUpDown,
  Terminal,
  Zap,
  BookOpen
} from 'lucide-react';

export const ExploreView: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useApp();

  // Mode: 'prompts' | 'commands'
  const [activeTab, setActiveTab] = useState<'prompts' | 'commands'>('prompts');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedAccessLevel, setSelectedAccessLevel] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'usage' | 'rating' | 'newest'>('relevance');

  // Command modal state
  const [activeCommand, setActiveCommand] = useState<AICommandItem | null>(null);

  const toolsList: AITool[] = [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Midjourney',
    'DALL-E 3',
    'DeepSeek',
    'Universal'
  ];

  // Filtering Prompts
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
        const matchesPrompt = prompt.fullPrompt.toLowerCase().includes(q);
        const matchesTags = prompt.tags.some((t) => t.toLowerCase().includes(q));
        const matchesCategory = CATEGORIES.some(
          (c) => c.id === prompt.categoryId && c.name.toLowerCase().includes(q)
        );

        if (!matchesTitle && !matchesDesc && !matchesPrompt && !matchesTags && !matchesCategory) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'usage') return (b.usageCount || 0) - (a.usageCount || 0);
      if (sortBy === 'rating') return (b.ratingScore || b.rating || 0) - (a.ratingScore || a.rating || 0);
      return 0; // relevance / default order
    });
  }, [selectedCategory, selectedDifficulty, selectedAccessLevel, selectedTool, searchQuery, sortBy]);

  // Filtering Commands
  const filteredCommands = useMemo(() => {
    return COMMANDS.filter((cmd) => {
      // Category filter (if command has categoryId matching)
      if (selectedCategory && cmd.categoryId && cmd.categoryId !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = cmd.title.toLowerCase().includes(q);
        const matchesDesc = cmd.description.toLowerCase().includes(q);
        const matchesText = cmd.commandText.toLowerCase().includes(q);
        const matchesCategory = cmd.category.toLowerCase().includes(q);
        const matchesTags = cmd.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesTitle && !matchesDesc && !matchesText && !matchesCategory && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

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
      {/* Top Banner and Navigation Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Biblioteca de Inteligencia Artificial
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Explora más de <span className="text-purple-300 font-bold">{PROMPTS.length} prompts profesionales</span> y{' '}
            <span className="text-cyan-300 font-bold">{COMMANDS.length} comandos directos</span> para ChatGPT, Claude y Gemini.
          </p>
        </div>

        {/* Search input in explore */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={activeTab === 'prompts' ? "Buscar prompts..." : "Buscar comandos directos..."}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
      </div>

      {/* Tabs Switcher: Prompts vs Comandos */}
      <div className="flex items-center p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 w-full sm:w-fit">
        <button
          onClick={() => setActiveTab('prompts')}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'prompts'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Prompts Pro ({PROMPTS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('commands')}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'commands'
              ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Comandos Directos ({COMMANDS.length})</span>
        </button>
      </div>

      {/* Categories Horizontal Carousel Filter */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Filtrar por Categoría:
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
                ? activeTab === 'prompts'
                  ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                  : 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            Todas ({activeTab === 'prompts' ? PROMPTS.length : COMMANDS.length})
          </button>

          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? activeTab === 'prompts'
                      ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                      : 'bg-cyan-600 text-white border-cyan-500 shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter and Sort Toolbar (Prompts Tab Only) */}
      {activeTab === 'prompts' && (
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
              <option value="Experto">Experto</option>
              <option value="Master">Master</option>
            </select>

            {/* Access level filter */}
            <select
              value={selectedAccessLevel}
              onChange={(e) => setSelectedAccessLevel(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
            >
              <option value="all">Todos los niveles</option>
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
            </select>
          </div>
        </div>
      )}

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Mostrando{' '}
          <strong className="text-white">
            {activeTab === 'prompts' ? filteredPrompts.length : filteredCommands.length}
          </strong>{' '}
          {activeTab === 'prompts' ? 'prompts profesionales' : 'comandos directos'}
        </span>
      </div>

      {/* Prompts Tab Results Grid */}
      {activeTab === 'prompts' && (
        filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        ) : (
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
        )
      )}

      {/* Commands Tab Results Grid */}
      {activeTab === 'commands' && (
        filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCommands.map((command) => (
              <CommandCard
                key={command.id}
                command={command}
                onSelect={(cmd) => setActiveCommand(cmd)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Terminal className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-200">
                No se encontraron comandos con los términos actuales
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Prueba a buscar por temas como "resumen", "sql", "excel", "copywriting" o "código".
              </p>
            </div>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-xl transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        )
      )}

      {/* Command Detail Modal */}
      {activeCommand && (
        <CommandDetailModal
          command={activeCommand}
          onClose={() => setActiveCommand(null)}
        />
      )}
    </div>
  );
};
