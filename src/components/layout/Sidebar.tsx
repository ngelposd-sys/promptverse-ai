import React from 'react';
import { useApp, AppView } from '../../context/AppContext';
import {
  Home,
  Compass,
  Wrench,
  Terminal,
  Crown,
  Infinity,
  Bookmark,
  Coins,
  Smartphone,
  ShieldAlert,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpenMobile, onCloseMobile }) => {
  const { currentView, setCurrentView, userStats } = useApp();

  const navItems: Array<{
    id: AppView;
    label: string;
    icon: React.ReactNode;
    badge?: string;
    badgeColor?: string;
  }> = [
    { id: 'home', label: 'Inicio', icon: <Home className="w-5 h-5" /> },
    { id: 'explore', label: 'Biblioteca de Prompts', icon: <Compass className="w-5 h-5" />, badge: '40+' },
    { id: 'builder', label: 'Taller de Prompts', icon: <Wrench className="w-5 h-5" />, badge: 'Builder' },
    { id: 'commandCenter', label: 'AI Command Center', icon: <Terminal className="w-5 h-5" /> },
    {
      id: 'master',
      label: 'Zona Master',
      icon: <Crown className="w-5 h-5 text-amber-400" />,
      badge: 'Nvl 3',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
    },
    {
      id: 'infinite',
      label: 'Modo Infinito',
      icon: <Infinity className="w-5 h-5 text-cyan-400" />,
      badge: 'Rutas',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
    },
    {
      id: 'library',
      label: 'Mi Biblioteca',
      icon: <Bookmark className="w-5 h-5" />,
      badge: `${userStats.favoritePromptIds.length + userStats.customPrompts.length}`
    },
    {
      id: 'rewards',
      label: 'Recompensas & Monedas',
      icon: <Coins className="w-5 h-5 text-yellow-400" />,
      badge: `${userStats.coins} PC`,
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
    },
    {
      id: 'docs',
      label: 'Android & Publicación',
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      badge: 'Docs'
    },
    {
      id: 'admin',
      label: 'Arquitectura Admin',
      icon: <ShieldAlert className="w-5 h-5 text-slate-400" />,
      badge: 'Futuro'
    }
  ];

  const handleNavClick = (viewId: AppView) => {
    setCurrentView(viewId);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed md:sticky top-0 md:top-[61px] left-0 z-50 md:z-30 w-72 h-screen md:h-[calc(100vh-61px)] bg-[#0b0f19] border-r border-slate-800/80 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Navigation list */}
        <div className="p-4 space-y-1.5 overflow-y-auto">
          <div className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Navegación Principal
          </div>

          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-900/40 to-indigo-900/20 text-purple-200 border border-purple-500/30 shadow-sm shadow-purple-950/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`transition-colors ${
                      isActive ? 'text-purple-400' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        item.badgeColor ||
                        (isActive
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                          : 'bg-slate-800 text-slate-400 border-slate-700')
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight className="w-4 h-4 text-purple-400" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom User Level Card */}
        <div className="p-4 border-t border-slate-800/80 bg-[#090d16]">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-xs font-black text-white shadow-md">
                  {userStats.level}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-200">
                    Rango {userStats.levelName}
                  </span>
                  <div className="text-[10px] text-slate-400">
                    {userStats.xp} / {userStats.maxXp} XP
                  </div>
                </div>
              </div>

              <span className="text-xs font-bold text-yellow-400 flex items-center gap-1">
                <Coins className="w-3.5 h-3.5" />
                {userStats.coins}
              </span>
            </div>

            {/* XP Bar */}
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, Math.round((userStats.xp / userStats.maxXp) * 100))}%`
                }}
              />
            </div>

            <button
              onClick={() => handleNavClick('rewards')}
              className="mt-2.5 w-full text-center text-[11px] font-semibold text-purple-300 hover:text-purple-200 flex items-center justify-center gap-1"
            >
              <span>Subir de nivel y ganar monedas</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
