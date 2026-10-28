import React from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Coins, Sparkles, Flame, Shield, Menu } from 'lucide-react';

export const Navbar: React.FC<{ onToggleMobileMenu?: () => void }> = ({ onToggleMobileMenu }) => {
  const { userStats, searchQuery, setSearchQuery, setCurrentView, currentView } = useApp();

  const xpPercent = Math.min(100, Math.round((userStats.xp / userStats.maxXp) * 100));

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentView('explore');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0d14]/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3 transition-colors">
      <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Brand logo & mobile menu button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0a0d14] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base md:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                  PromptVerse
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-widest">
                  AI
                </span>
              </div>
              <p className="hidden sm:block text-[10px] text-slate-400 font-medium">
                Domina la IA. Descubre nuevas posibilidades.
              </p>
            </div>
          </button>
        </div>

        {/* Global Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-md mx-4 relative"
        >
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (currentView !== 'explore' && e.target.value.trim().length > 1) {
                setCurrentView('explore');
              }
            }}
            placeholder="Buscar prompts, técnicas, categorías o tags..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-slate-700/60 rounded-xl text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50 transition-all shadow-inner"
          />
        </form>

        {/* Right Stats & Profile Pills */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Daily streak */}
          <button
            onClick={() => setCurrentView('rewards')}
            title={`Racha actual: ${userStats.streakDays} días`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/40 rounded-xl text-amber-300 transition-all text-xs font-semibold"
          >
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span className="hidden sm:inline">{userStats.streakDays}d</span>
          </button>

          {/* PromptCoins Wallet */}
          <button
            onClick={() => setCurrentView('rewards')}
            title="Ver monedero de PromptCoins y recompensas"
            className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/20 border border-amber-500/40 hover:border-amber-400 rounded-xl text-amber-200 transition-all shadow-sm group glow-gold"
          >
            <Coins className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-sm tracking-tight">{userStats.coins}</span>
            <span className="hidden sm:inline text-[11px] text-amber-400/80 font-medium">PC</span>
          </button>

          {/* User Level & XP Bar */}
          <button
            onClick={() => setCurrentView('rewards')}
            title={`Nivel ${userStats.level} (${userStats.levelName}) - ${userStats.xp}/${userStats.maxXp} XP`}
            className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-900 border border-slate-700/80 hover:border-purple-500/50 rounded-xl transition-all"
          >
            <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-xs font-bold text-purple-300">
              {userStats.level}
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-[11px] font-semibold text-slate-200 leading-tight">
                {userStats.levelName}
              </span>
              <div className="w-16 bg-slate-800 rounded-full h-1 mt-0.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
