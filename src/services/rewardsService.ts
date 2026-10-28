import { CoinTransaction, UserStats } from '../types';

export const LEVEL_CONFIG = [
  { level: 1, name: 'Explorador', minXp: 0, maxXp: 150, description: 'Acceso a biblioteca base y herramientas esenciales.' },
  { level: 2, name: 'Experto', minXp: 150, maxXp: 400, description: 'Acceso a técnicas intermedias y catálogo ampliado.' },
  { level: 3, name: 'Master', minXp: 400, maxXp: 800, description: 'Acceso a flujos de trabajo avanzados, agentes y ToT.' },
  { level: 4, name: 'Infinito', minXp: 800, maxXp: 2000, description: 'Modo de exploración perpetua, rutas de maestría y rotaciones.' }
];

export const MAX_DAILY_DEMO_ADS = 3;
export const DEMO_AD_COIN_REWARD = 25;
export const DEMO_AD_XP_REWARD = 40;
export const DAILY_LOGIN_BONUS = 20;

export function generateTxHash(category: string): string {
  const rand = Math.random().toString(36).substring(2, 8).toUpperCase();
  const time = Date.now().toString(36).toUpperCase();
  return `PV-${category.substring(0, 3).toUpperCase()}-${time}-${rand}`;
}

export function checkDailyStreak(stats: UserStats): { updatedStats: UserStats; streakAwarded: boolean } {
  const today = new Date().toISOString().split('T')[0];
  const lastLogin = stats.lastLoginDate;

  if (lastLogin === today) {
    return { updatedStats: stats, streakAwarded: false };
  }

  const lastDate = new Date(lastLogin);
  const currentDate = new Date(today);
  const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let newStreak = stats.streakDays;
  if (diffDays === 1) {
    newStreak += 1;
  } else if (diffDays > 1) {
    newStreak = 1; // reset streak if more than 1 day passed
  }

  // Reset daily ads count for new day
  const dailyAdsWatched = 0;

  // Award daily bonus
  const tx: CoinTransaction = {
    id: 'tx-streak-' + Date.now(),
    type: 'earned',
    amount: DAILY_LOGIN_BONUS,
    description: `Bono de conexión diaria (Racha: día ${newStreak})`,
    timestamp: new Date().toISOString(),
    txHash: generateTxHash('streak'),
    category: 'streak_bonus'
  };

  const updated: UserStats = {
    ...stats,
    streakDays: newStreak,
    lastLoginDate: today,
    coins: stats.coins + DAILY_LOGIN_BONUS,
    xp: stats.xp + 20,
    dailyAdsWatched,
    lastAdWatchDate: today,
    transactionHistory: [tx, ...stats.transactionHistory]
  };

  const withLevel = recalculateLevel(updated);
  return { updatedStats: withLevel, streakAwarded: true };
}

export function recalculateLevel(stats: UserStats): UserStats {
  let currentLevel = 1;
  let levelName = 'Explorador';
  let maxXp = 150;

  for (let i = LEVEL_CONFIG.length - 1; i >= 0; i--) {
    if (stats.xp >= LEVEL_CONFIG[i].minXp) {
      currentLevel = LEVEL_CONFIG[i].level;
      levelName = LEVEL_CONFIG[i].name;
      maxXp = LEVEL_CONFIG[i].maxXp;
      break;
    }
  }

  return {
    ...stats,
    level: currentLevel,
    levelName,
    maxXp
  };
}

export function unlockPromptWithCoins(
  stats: UserStats,
  promptId: string,
  cost: number,
  promptTitle: string
): { success: boolean; updatedStats?: UserStats; error?: string } {
  if (stats.unlockedPromptIds.includes(promptId)) {
    return { success: true, updatedStats: stats }; // already unlocked
  }

  if (stats.coins < cost) {
    return {
      success: false,
      error: `Saldo insuficiente: Tienes ${stats.coins} PromptCoins y este prompt requiere ${cost} PC.`
    };
  }

  const tx: CoinTransaction = {
    id: 'tx-unlock-' + Date.now(),
    type: 'spent',
    amount: cost,
    description: `Desbloqueo permanente: ${promptTitle.slice(0, 32)}...`,
    timestamp: new Date().toISOString(),
    txHash: generateTxHash('unlock'),
    category: 'prompt_unlock'
  };

  const newCoins = stats.coins - cost;
  const newXp = stats.xp + Math.floor(cost / 2); // Unlocking gives XP!
  const newUnlocked = [...stats.unlockedPromptIds, promptId];

  const updated: UserStats = {
    ...stats,
    coins: newCoins,
    xp: newXp,
    unlockedPromptIds: newUnlocked,
    transactionHistory: [tx, ...stats.transactionHistory]
  };

  return {
    success: true,
    updatedStats: recalculateLevel(updated)
  };
}

export function claimRewardedAdDemo(stats: UserStats): {
  success: boolean;
  updatedStats?: UserStats;
  error?: string;
  txHash?: string;
} {
  const today = new Date().toISOString().split('T')[0];
  const watchedToday = stats.lastAdWatchDate === today ? stats.dailyAdsWatched : 0;

  if (watchedToday >= MAX_DAILY_DEMO_ADS) {
    return {
      success: false,
      error: `Has alcanzado el límite diario de simulación (${MAX_DAILY_DEMO_ADS}/${MAX_DAILY_DEMO_ADS}). Vuelve mañana para ganar más monedas.`
    };
  }

  const hash = generateTxHash('admob');
  const tx: CoinTransaction = {
    id: 'tx-ad-' + Date.now(),
    type: 'earned',
    amount: DEMO_AD_COIN_REWARD,
    description: `Recompensa de simulación de anuncio (Verificado ${hash.slice(-6)})`,
    timestamp: new Date().toISOString(),
    txHash: hash,
    category: 'ad_simulation'
  };

  const updated: UserStats = {
    ...stats,
    coins: stats.coins + DEMO_AD_COIN_REWARD,
    xp: stats.xp + DEMO_AD_XP_REWARD,
    dailyAdsWatched: watchedToday + 1,
    lastAdWatchDate: today,
    transactionHistory: [tx, ...stats.transactionHistory]
  };

  return {
    success: true,
    updatedStats: recalculateLevel(updated),
    txHash: hash
  };
}
