import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserStats, PromptItem, UserCustomPrompt, UserCollection, DailyChallenge } from '../types';
import { storage } from '../services/storage';
import { checkDailyStreak, unlockPromptWithCoins, claimRewardedAdDemo } from '../services/rewardsService';
import { INITIAL_CHALLENGES } from '../data/challenges';

export type AppView = 
  | 'home' 
  | 'explore' 
  | 'builder' 
  | 'commandCenter' 
  | 'master' 
  | 'infinite' 
  | 'library' 
  | 'rewards' 
  | 'docs'
  | 'admin';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

interface AppContextType {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  selectedCategory: string | null;
  setSelectedCategory: (catId: string | null) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  userStats: UserStats;
  challenges: DailyChallenge[];
  activePromptDetail: PromptItem | null;
  setActivePromptDetail: (prompt: PromptItem | null) => void;
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
  
  // Actions
  unlockPrompt: (prompt: PromptItem) => boolean;
  toggleFavorite: (promptId: string) => void;
  markPromptUsed: (promptId: string) => void;
  savePromptNote: (promptId: string, note: string) => void;
  saveCustomPrompt: (prompt: UserCustomPrompt) => void;
  deleteCustomPrompt: (promptId: string) => void;
  createCollection: (name: string, description: string, color?: string) => void;
  addPromptToCollection: (collectionId: string, promptId: string) => void;
  completeChallenge: (challengeId: string) => void;
  claimDailyBonus: () => void;
  watchDemoAd: () => { success: boolean; error?: string; txHash?: string };
  importData: (jsonStr: string) => boolean;
  exportJSON: () => string;
  exportMarkdown: () => string;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePromptDetail, setActivePromptDetail] = useState<PromptItem | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [userStats, setUserStats] = useState<UserStats>(() => storage.getUserStats());
  const [challenges, setChallenges] = useState<DailyChallenge[]>(() => INITIAL_CHALLENGES);

  const addToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3800);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Check login streak on mount
  useEffect(() => {
    const { updatedStats, streakAwarded } = checkDailyStreak(userStats);
    if (streakAwarded) {
      setUserStats(updatedStats);
      storage.saveUserStats(updatedStats);
      addToast(`¡Racha mantenida! Bono diario concedido: +20 PromptCoins 🪙`, 'success');
    }
  }, []);

  // Sync to storage on stats change
  const updateStats = (newStats: UserStats) => {
    setUserStats(newStats);
    storage.saveUserStats(newStats);
  };

  const unlockPrompt = (prompt: PromptItem): boolean => {
    const cost = prompt.coinCost || 0;
    const result = unlockPromptWithCoins(userStats, prompt.id, cost, prompt.title);
    if (result.success && result.updatedStats) {
      updateStats(result.updatedStats);
      addToast(`¡Prompt desbloqueado con éxito! Se descontaron ${cost} PC 🔓`, 'success');
      return true;
    } else {
      addToast(result.error || 'No fue posible desbloquear el prompt', 'error');
      return false;
    }
  };

  const toggleFavorite = (promptId: string) => {
    const isFav = userStats.favoritePromptIds.includes(promptId);
    const updatedFavs = isFav
      ? userStats.favoritePromptIds.filter((id) => id !== promptId)
      : [...userStats.favoritePromptIds, promptId];

    updateStats({
      ...userStats,
      favoritePromptIds: updatedFavs
    });

    addToast(isFav ? 'Eliminado de favoritos' : 'Guardado en tus favoritos ❤️', 'info');

    // Check challenge
    if (!isFav) {
      advanceChallengeAction('save_favorite');
    }
  };

  const markPromptUsed = (promptId: string) => {
    const used = userStats.usedPromptIds.includes(promptId)
      ? userStats.usedPromptIds
      : [...userStats.usedPromptIds, promptId];

    updateStats({
      ...userStats,
      usedPromptIds: used
    });

    advanceChallengeAction('copy_prompt');
  };

  const advanceChallengeAction = (actionType: DailyChallenge['actionType']) => {
    setChallenges((prev) =>
      prev.map((ch) => {
        if (ch.actionType === actionType && !ch.completed) {
          const nextCount = ch.currentCount + 1;
          const completed = nextCount >= ch.targetCount;
          if (completed) {
            completeChallenge(ch.id);
          }
          return { ...ch, currentCount: nextCount, completed };
        }
        return ch;
      })
    );
  };

  const completeChallenge = (challengeId: string) => {
    const challenge = challenges.find((c) => c.id === challengeId);
    if (!challenge || userStats.completedChallenges.includes(challengeId)) return;

    const newCoins = userStats.coins + challenge.rewardCoins;
    const newXp = userStats.xp + challenge.rewardXp;
    const newCompleted = [...userStats.completedChallenges, challengeId];

    updateStats({
      ...userStats,
      coins: newCoins,
      xp: newXp,
      completedChallenges: newCompleted,
      transactionHistory: [
        {
          id: 'tx-ch-' + Date.now(),
          type: 'earned',
          amount: challenge.rewardCoins,
          description: `Reto completado: ${challenge.title}`,
          timestamp: new Date().toISOString(),
          txHash: `PV-CH-${Date.now().toString(36).toUpperCase()}`,
          category: 'challenge'
        },
        ...userStats.transactionHistory
      ]
    });

    addToast(`¡Reto superado! +${challenge.rewardCoins} PC y +${challenge.rewardXp} XP 🏆`, 'success');
  };

  const savePromptNote = (promptId: string, note: string) => {
    updateStats({
      ...userStats,
      notes: {
        ...userStats.notes,
        [promptId]: note
      }
    });
    addToast('Nota guardada correctamente', 'success');
  };

  const saveCustomPrompt = (prompt: UserCustomPrompt) => {
    const exists = userStats.customPrompts.some((p) => p.id === prompt.id);
    const updated = exists
      ? userStats.customPrompts.map((p) => (p.id === prompt.id ? prompt : p))
      : [prompt, ...userStats.customPrompts];

    updateStats({
      ...userStats,
      customPrompts: updated
    });
    addToast(exists ? 'Prompt actualizado' : 'Nuevo prompt guardado en Mi Biblioteca', 'success');
    advanceChallengeAction('build_prompt');
  };

  const deleteCustomPrompt = (promptId: string) => {
    updateStats({
      ...userStats,
      customPrompts: userStats.customPrompts.filter((p) => p.id !== promptId)
    });
    addToast('Prompt eliminado de tu biblioteca', 'info');
  };

  const createCollection = (name: string, description: string, color?: string) => {
    const col: UserCollection = {
      id: 'col-' + Date.now(),
      name,
      description,
      promptIds: [],
      createdAt: new Date().toISOString(),
      color: color || '#8b5cf6'
    };
    updateStats({
      ...userStats,
      collections: [...userStats.collections, col]
    });
    addToast(`Colección "${name}" creada`, 'success');
  };

  const addPromptToCollection = (collectionId: string, promptId: string) => {
    const col = userStats.collections.find((c) => c.id === collectionId);
    if (!col) return;
    if (col.promptIds.includes(promptId)) {
      addToast('Este prompt ya está en la colección', 'warning');
      return;
    }
    const updatedCols = userStats.collections.map((c) =>
      c.id === collectionId ? { ...c, promptIds: [...c.promptIds, promptId] } : c
    );
    updateStats({
      ...userStats,
      collections: updatedCols
    });
    addToast(`Añadido a la colección "${col.name}"`, 'success');
  };

  const claimDailyBonus = () => {
    const { updatedStats } = checkDailyStreak(userStats);
    updateStats(updatedStats);
  };

  const watchDemoAd = () => {
    const result = claimRewardedAdDemo(userStats);
    if (result.success && result.updatedStats) {
      updateStats(result.updatedStats);
      addToast('¡Recompensa acreditada! +25 PromptCoins y +40 XP 🎬🪙', 'success');
      return { success: true, txHash: result.txHash };
    } else {
      addToast(result.error || 'No fue posible reclamar la recompensa.', 'warning');
      return { success: false, error: result.error };
    }
  };

  const importData = (jsonStr: string): boolean => {
    const res = storage.importDataFromJSON(jsonStr);
    if (res.success && res.data) {
      setUserStats(res.data);
      addToast('¡Datos importados con éxito!', 'success');
      return true;
    } else {
      addToast(res.error || 'Error al importar datos', 'error');
      return false;
    }
  };

  const exportJSON = () => storage.exportDataAsJSON(userStats);
  const exportMarkdown = () => storage.exportDataAsMarkdown(userStats);

  const resetAllData = () => {
    storage.resetAll();
    const fresh = storage.getUserStats();
    setUserStats(fresh);
    addToast('Se han restaurado los datos locales por defecto', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        userStats,
        challenges,
        activePromptDetail,
        setActivePromptDetail,
        toasts,
        addToast,
        removeToast,
        unlockPrompt,
        toggleFavorite,
        markPromptUsed,
        savePromptNote,
        saveCustomPrompt,
        deleteCustomPrompt,
        createCollection,
        addPromptToCollection,
        completeChallenge,
        claimDailyBonus,
        watchDemoAd,
        importData,
        exportJSON,
        exportMarkdown,
        resetAllData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
