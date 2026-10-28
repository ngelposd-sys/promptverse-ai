import { UserStats, UserCustomPrompt, UserCollection } from '../types';

const STORAGE_KEY = 'promptverse_user_stats_v1';

export const DEFAULT_USER_STATS: UserStats = {
  level: 1,
  levelName: 'Explorador',
  xp: 45,
  maxXp: 100,
  coins: 100, // Initial balance to enjoy unlocking something immediately
  streakDays: 1,
  lastLoginDate: new Date().toISOString().split('T')[0],
  unlockedPromptIds: ['p-1', 'p-2', 'p-3', 'p-5', 'p-7', 'p-11', 'p-13', 'p-14', 'p-16', 'p-17', 'p-18', 'p-20', 'p-21', 'p-22', 'p-23', 'p-26', 'p-28', 'p-29', 'p-31', 'p-32', 'p-33', 'p-35', 'p-36', 'p-38', 'p-39', 'p-40'],
  favoritePromptIds: ['p-1', 'p-7'],
  usedPromptIds: [],
  customPrompts: [
    {
      id: 'custom-demo-1',
      title: 'Mi Plantilla de Auditoría de Emails',
      description: 'Revisa correos importantes antes de enviarlos a clientes clave.',
      fullPrompt: 'Actúa como Director de Comunicación. Revisa el siguiente borrador de correo para [CLIENTE]:\n"""\n[BORRADOR]\n"""\nAsegura tono formal, elimina cualquier ambigüedad en fechas de entrega y sugiere una llamada a la acción clara.',
      categoryId: 'cat-2',
      tags: ['Email', 'Clientes', 'Comunicación'],
      tools: ['ChatGPT', 'Claude'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  collections: [
    {
      id: 'col-favs-trabajo',
      name: 'Prompts de Trabajo Diario',
      description: 'Herramientas esenciales para redacción, código y productividad.',
      promptIds: ['p-1', 'p-7', 'p-17'],
      createdAt: new Date().toISOString(),
      color: '#8b5cf6'
    }
  ],
  notes: {
    'p-1': 'Excelente para iniciar chats técnicos de arquitectura.'
  },
  completedChallenges: [],
  badges: [
    {
      id: 'badge-welcome',
      name: 'Bienvenida a PromptVerse',
      description: 'Te uniste a la biblioteca definitiva de IA.',
      icon: 'Award',
      unlockedAt: new Date().toISOString()
    }
  ],
  transactionHistory: [
    {
      id: 'tx-init-welcome',
      type: 'earned',
      amount: 100,
      description: 'Bono de bienvenida por iniciar sesión',
      timestamp: new Date().toISOString(),
      txHash: 'pv_tx_welcome_seed_001',
      category: 'daily_reward'
    }
  ],
  dailyAdsWatched: 0,
  lastAdWatchDate: new Date().toISOString().split('T')[0]
};

class StorageService {
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  getUserStats(): UserStats {
    if (!this.isBrowser()) return DEFAULT_USER_STATS;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.saveUserStats(DEFAULT_USER_STATS);
        return DEFAULT_USER_STATS;
      }
      const parsed = JSON.parse(raw);
      // Merge with default in case new fields were added
      return {
        ...DEFAULT_USER_STATS,
        ...parsed,
        // Ensure arrays exist
        unlockedPromptIds: parsed.unlockedPromptIds || DEFAULT_USER_STATS.unlockedPromptIds,
        favoritePromptIds: parsed.favoritePromptIds || [],
        usedPromptIds: parsed.usedPromptIds || [],
        customPrompts: parsed.customPrompts || DEFAULT_USER_STATS.customPrompts,
        collections: parsed.collections || DEFAULT_USER_STATS.collections,
        notes: parsed.notes || {},
        completedChallenges: parsed.completedChallenges || [],
        badges: parsed.badges || DEFAULT_USER_STATS.badges,
        transactionHistory: parsed.transactionHistory || DEFAULT_USER_STATS.transactionHistory
      };
    } catch (e) {
      console.warn('Error reading from localStorage, falling back to defaults:', e);
      return DEFAULT_USER_STATS;
    }
  }

  saveUserStats(stats: UserStats): void {
    if (!this.isBrowser()) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error('Error saving user stats to localStorage:', e);
    }
  }

  exportDataAsJSON(stats: UserStats): string {
    return JSON.stringify(stats, null, 2);
  }

  exportDataAsMarkdown(stats: UserStats): string {
    let md = `# Mi Biblioteca Personal - PromptVerse AI\n\n`;
    md += `*Exportado el ${new Date().toLocaleDateString('es-ES')} - Nivel: ${stats.levelName} (Nvl ${stats.level})*\n\n`;
    
    md += `## Resumen del Perfil\n`;
    md += `- **Nivel**: ${stats.level} (${stats.levelName})\n`;
    md += `- **Experiencia**: ${stats.xp} / ${stats.maxXp} XP\n`;
    md += `- **Saldo de PromptCoins**: ${stats.coins} PC\n`;
    md += `- **Racha de días**: ${stats.streakDays} días\n\n`;

    md += `## Prompts Propios Creados (${stats.customPrompts.length})\n\n`;
    stats.customPrompts.forEach((p, idx) => {
      md += `### ${idx + 1}. ${p.title}\n`;
      md += `*${p.description}*\n\n`;
      md += `\`\`\`\n${p.fullPrompt}\n\`\`\`\n\n`;
    });

    md += `## Notas Personales en Prompts\n\n`;
    Object.entries(stats.notes).forEach(([promptId, note]) => {
      md += `- **Prompt ID ${promptId}**: ${note}\n`;
    });

    return md;
  }

  importDataFromJSON(jsonString: string): { success: boolean; data?: UserStats; error?: string } {
    try {
      const parsed = JSON.parse(jsonString);
      if (typeof parsed !== 'object' || parsed === null) {
        return { success: false, error: 'El archivo JSON no tiene un formato válido.' };
      }
      const validated: UserStats = {
        level: Number(parsed.level) || 1,
        levelName: parsed.levelName || 'Explorador',
        xp: Number(parsed.xp) || 0,
        maxXp: Number(parsed.maxXp) || 100,
        coins: Number(parsed.coins) || 0,
        streakDays: Number(parsed.streakDays) || 1,
        lastLoginDate: parsed.lastLoginDate || new Date().toISOString().split('T')[0],
        unlockedPromptIds: Array.isArray(parsed.unlockedPromptIds) ? parsed.unlockedPromptIds : DEFAULT_USER_STATS.unlockedPromptIds,
        favoritePromptIds: Array.isArray(parsed.favoritePromptIds) ? parsed.favoritePromptIds : [],
        usedPromptIds: Array.isArray(parsed.usedPromptIds) ? parsed.usedPromptIds : [],
        customPrompts: Array.isArray(parsed.customPrompts) ? parsed.customPrompts : [],
        collections: Array.isArray(parsed.collections) ? parsed.collections : [],
        notes: typeof parsed.notes === 'object' && parsed.notes !== null ? parsed.notes : {},
        completedChallenges: Array.isArray(parsed.completedChallenges) ? parsed.completedChallenges : [],
        badges: Array.isArray(parsed.badges) ? parsed.badges : [],
        transactionHistory: Array.isArray(parsed.transactionHistory) ? parsed.transactionHistory : [],
        dailyAdsWatched: Number(parsed.dailyAdsWatched) || 0,
        lastAdWatchDate: parsed.lastAdWatchDate || new Date().toISOString().split('T')[0]
      };

      this.saveUserStats(validated);
      return { success: true, data: validated };
    } catch (e: any) {
      return { success: false, error: 'Error al interpretar el JSON: ' + (e?.message || 'Archivo corrupto') };
    }
  }

  resetAll(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(STORAGE_KEY);
  }
}

export const storage = new StorageService();
