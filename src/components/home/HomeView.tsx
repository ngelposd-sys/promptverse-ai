import React from 'react';
import { useApp } from '../../context/AppContext';
import { CATEGORIES } from '../../data/categories';
import { PROMPTS } from '../../data/prompts';
import { PromptCard } from '../prompts/PromptCard';
import {
  Sparkles,
  Search,
  Flame,
  Crown,
  Wrench,
  Terminal,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Bookmark,
  Coins,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    userStats,
    setCurrentView,
    setSelectedCategory,
    setSearchQuery,
    challenges,
    setActivePromptDetail
  } = useApp();

  const promptOfTheDay = PROMPTS.find((p) => p.id === 'p-1') || PROMPTS[0];
  const popularPrompts = PROMPTS.slice(0, 6);
  const newPrompts = PROMPTS.filter((p) => p.isMaster).slice(0, 3);

  const [heroInput, setHeroInput] = React.useState('');

  const handleHeroSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (heroInput.trim()) {
      setSearchQuery(heroInput.trim());
      setCurrentView('explore');
    } else {
      setCurrentView('explore');
    }
  };

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentView('explore');
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 13) return 'Buenos días';
    if (hour < 20) return 'Buenas tardes';
    return 'Buenas noches';
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121626] via-[#0d121f] to-[#080b12] border border-slate-800/90 p-6 sm:p-10 shadow-2xl">
        {/* Glow ambient effects */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{getGreeting()}, Creador de IA</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-normal">Nivel {userStats.level} ({userStats.levelName})</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
              Modo DEMO
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            ¿Qué quieres conseguir con la{' '}
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>{' '}
            hoy?
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Explora la mayor enciclopedia de prompts profesionales, técnicas avanzadas de razonamiento, taller interactivo y recompensas virtuales.
          </p>

          {/* Quick search input */}
          <div className="pt-2">
            <form onSubmit={handleHeroSearch} className="relative flex items-center max-w-xl">
              <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={heroInput}
                onChange={(e) => setHeroInput(e.target.value)}
                placeholder="Escribe lo que buscas: 'auditar código', 'copywriting AIDA', 'Android'..."
                className="w-full pl-12 pr-28 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 shadow-xl"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl transition-all shadow-md cursor-pointer"
              >
                Buscar
              </button>
            </form>
          </div>

          {/* Quick Shortcuts pills */}
          <div className="pt-3 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 font-semibold">Accesos directos:</span>
            <button
              onClick={() => setCurrentView('builder')}
              className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Wrench className="w-3.5 h-3.5 text-purple-400" />
              <span>Taller de Prompts</span>
            </button>
            <button
              onClick={() => setCurrentView('commandCenter')}
              className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Command Center</span>
            </button>
            <button
              onClick={() => setCurrentView('master')}
              className="text-xs font-semibold px-3 py-1 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 transition-colors"
            >
              <Crown className="w-3.5 h-3.5 text-yellow-400" />
              <span>Zona Master</span>
            </button>
          </div>
        </div>
      </section>

      {/* Categories Horizontal Carousel / Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Explora por Categorías
            </h2>
            <span className="text-xs text-slate-400">({CATEGORIES.length} disciplinas)</span>
          </div>
          <button
            onClick={() => setCurrentView('explore')}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
          >
            <span>Ver todas</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {CATEGORIES.slice(0, 10).map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group p-4 rounded-2xl bg-gradient-to-b from-[#111726] to-[#0c101c] border border-slate-800/80 hover:border-purple-500/50 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-purple-400/90 group-hover:text-purple-300">
                  {cat.promptCount} prompts
                </span>
                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-sm font-bold text-slate-200 group-hover:text-white line-clamp-1 mb-1">
                {cat.name}
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Prompt of the Day Spotlight */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900 to-indigo-950/30 border border-purple-500/30 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                PROMPT DESTACADO DEL DÍA
              </span>
              <span className="text-xs text-slate-400">
                Dificultad: {promptOfTheDay.difficulty}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              {promptOfTheDay.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {promptOfTheDay.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <span>Herramientas: {promptOfTheDay.tools.join(', ')}</span>
              <span>•</span>
              <span>{(promptOfTheDay.variables?.length || 0)} variables parametrizadas</span>
            </div>
          </div>

          <button
            onClick={() => setActivePromptDetail(promptOfTheDay)}
            className="w-full lg:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all glow-purple"
          >
            <Sparkles className="w-4 h-4" />
            <span>Abrir y Personalizar</span>
          </button>
        </div>
      </section>

      {/* Popular Prompts Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Prompts Populares de la Comunidad
            </h2>
          </div>
          <button
            onClick={() => setCurrentView('explore')}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
          >
            <span>Ver biblioteca completa</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularPrompts.map((p) => (
            <PromptCard key={p.id} prompt={p} />
          ))}
        </div>
      </section>

      {/* Daily Challenges & Gamification Widget */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-3xl bg-[#0f1422] border border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Retos Diarios de Aprendizaje
              </h3>
            </div>
            <button
              onClick={() => setCurrentView('rewards')}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300"
            >
              Ver Recompensas
            </button>
          </div>

          <div className="space-y-3">
            {challenges.map((ch) => (
              <div
                key={ch.id}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/90"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-100">{ch.title}</span>
                    {ch.completed && (
                      <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        Completado
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">{ch.description}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <Coins className="w-3.5 h-3.5 text-yellow-400" />
                    +{ch.rewardCoins} PC
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Master Zone Teaser Card */}
        <div className="rounded-3xl bg-gradient-to-b from-amber-950/30 to-[#0e131f] border border-amber-500/30 p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              NIVEL 3 — MASTER
            </span>
            <h3 className="text-lg font-black text-white">
              Zona Master & Agentes Autónomos
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Descubre pipelines avanzados de Tree of Thoughts, orquestación ReAct con Function Calling y optimización de contextos masivos.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] text-amber-300/80">
              Desbloquea permanentemente con tus PromptCoins ganados.
            </div>
            <button
              onClick={() => setCurrentView('master')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs transition-all shadow-md flex items-center justify-center gap-1.5 glow-gold"
            >
              <span>Acceder a la Zona Master</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
