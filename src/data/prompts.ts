import { PromptItem } from '../types';
import { PROMPTS_PART1 } from './prompts/part1';
import { PROMPTS_PART2 } from './prompts/part2';
import { PROMPTS_PART3 } from './prompts/part3';
import { PROMPTS_PART4 } from './prompts/part4';

// Consolidación de la gran biblioteca de prompts de PromptVerse AI
// 103 prompts profesionales únicos repartidos en las 16 categorías maestras
export const PROMPTS: PromptItem[] = [
  ...PROMPTS_PART1,
  ...PROMPTS_PART2,
  ...PROMPTS_PART3,
  ...PROMPTS_PART4
];

export { PROMPTS_PART1, PROMPTS_PART2, PROMPTS_PART3, PROMPTS_PART4 };
