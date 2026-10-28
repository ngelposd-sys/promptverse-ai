import React from 'react';
import { useApp, AppView } from '../../context/AppContext';
import { Home, Compass, Wrench, Bookmark, Coins } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { currentView, setCurrentView, userStats } = useApp();

  const tabs: Array<{
    id: AppView;
    label: string;
    icon: React.ReactNode;
    badgeCount?: number;
  }> = [
    { id: 'home', label: 'Inicio', icon: <Home className="w-5 h-5" /> },
    { id: 'explore', label: 'Explorar', icon: <Compass className="w-5 h-5" /> },
    { id: 'builder', label: 'Taller', icon: <Wrench className="w-5 h-5" /> },
    {
      id: 'library',
      label: 'Favoritos',
      icon: <Bookmark className="w-5 h-5" />,
      badgeCount: userStats.favoritePromptIds.length
    },
    {
      id: 'rewards',
      label: 'Premios',
      icon: <Coins className="w-5 h-5 text-yellow-400" />
    }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0d14]/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1.5 safe-area-bottom">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentView(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative ${
                isActive ? 'text-purple-400 font-semibold scale-105' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                {tab.icon}
                {Boolean(tab.badgeCount && tab.badgeCount > 0) && (
                  <span className="absolute -top-1 -right-2 bg-purple-600 text-[9px] font-bold text-white px-1 rounded-full min-w-[14px] text-center">
                    {tab.badgeCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight">{tab.label}</span>
              {isActive && (
                <div className="w-4 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
