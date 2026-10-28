export type PromptDifficulty = 'Principiante' | 'Intermedio' | 'Avanzado' | 'Master';

export type AccessLevel = 'gratuito' | 'experto' | 'master' | 'infinito';

export type AITool = 
  | 'ChatGPT' 
  | 'Claude' 
  | 'Gemini' 
  | 'Midjourney' 
  | 'DALL-E 3' 
  | 'DeepSeek' 
  | 'Perplexity' 
  | 'GitHub Copilot' 
  | 'Universal';

export interface PromptVariable {
  key: string; // e.g. "OBJETIVO"
  label: string; // e.g. "Objetivo de la campaña"
  placeholder: string;
  defaultValue: string;
}

export interface PromptItem {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  subcategory?: string;
  tags: string[];
  difficulty: PromptDifficulty;
  tools: AITool[];
  objective: string;
  fullPrompt: string;
  variables: PromptVariable[];
  exampleUse: string;
  expectedResult: string;
  tips: string[];
  commonErrors: string[];
  accessLevel: AccessLevel;
  coinCost: number; // 0 if free, e.g. 30 or 75 for master
  isMaster?: boolean;
  createdAt: string;
  updatedAt?: string;
  usageCount: number;
  ratingScore: number; // 1-5
  author: string;
  relatedPromptIds?: string[];
}

export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  slug: string;
  color: string;
  promptCount: number;
}

export type TechniqueCategory = 
  | 'razonamiento'
  | 'encadenamiento'
  | 'few_shot'
  | 'estructuras_json'
  | 'roles_contexto'
  | 'funciones_oficiales'
  | 'atajos_sintaxis'
  | 'mitos_y_realidad';

export interface TechniqueItem {
  id: string;
  title: string;
  category: TechniqueCategory;
  description: string;
  explanation: string;
  howToUse: string;
  compatibleTools: AITool[];
  examplePrompt: string;
  expectedOutput: string;
  limitations: string;
  isMythBuster?: boolean;
  verifiedOfficial?: boolean;
}

export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  rewardCoins: number;
  rewardXp: number;
  icon: string;
  targetCount: number;
  currentCount: number;
  completed: boolean;
  actionType: 'copy_prompt' | 'build_prompt' | 'explore_category' | 'read_technique' | 'save_favorite';
}

export interface CoinTransaction {
  id: string;
  type: 'earned' | 'spent';
  amount: number;
  description: string;
  timestamp: string;
  txHash: string;
  category: 'daily_reward' | 'ad_simulation' | 'challenge' | 'prompt_unlock' | 'streak_bonus' | 'level_up';
}

export interface UserStats {
  level: number; // 1: Explorador, 2: Experto, 3: Master, 4: Infinito
  levelName: string;
  xp: number;
  maxXp: number;
  coins: number;
  streakDays: number;
  lastLoginDate: string;
  unlockedPromptIds: string[];
  favoritePromptIds: string[];
  usedPromptIds: string[];
  customPrompts: UserCustomPrompt[];
  collections: UserCollection[];
  notes: Record<string, string>; // promptId -> note
  completedChallenges: string[];
  badges: UserBadge[];
  transactionHistory: CoinTransaction[];
  dailyAdsWatched: number;
  lastAdWatchDate: string;
}

export interface UserCustomPrompt {
  id: string;
  title: string;
  description: string;
  fullPrompt: string;
  categoryId: string;
  tags: string[];
  tools: AITool[];
  createdAt: string;
  updatedAt: string;
}

export interface UserCollection {
  id: string;
  name: string;
  description: string;
  promptIds: string[];
  createdAt: string;
  color?: string;
}

export interface UserBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'Iniciación' | 'Intermedio' | 'Avanzado' | 'Experto';
  durationEst: string;
  stepsCount: number;
  icon: string;
  promptIds: string[];
  rewardCoins: number;
  rewardXp: number;
}
