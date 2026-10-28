export type PhotoDifficulty = 'Principiante' | 'Intermedio' | 'Avanzado' | 'Experto' | 'Master';

export interface PhotoCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  slug: string;
  color: string;
  modeCount: number;
}

export interface PhotoProMode {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  fullPrompt: string;
  composition: string;
  lighting: string;
  perspective: string;
  colorPalette: string;
  cameraLens: string;
  exampleUse: string;
  tags: string[];
  difficulty: PhotoDifficulty;
  recommendedAspect?: string;
  tools: string[];
}
