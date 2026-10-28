import { AICommandItem } from '../types';
import { COMMANDS_PART1 } from './commands/part1';
import { COMMANDS_PART2 } from './commands/part2';

// Consolidación de los 102 comandos directos de inteligencia artificial para PromptVerse AI
export const COMMANDS: AICommandItem[] = [
  ...COMMANDS_PART1,
  ...COMMANDS_PART2
];

export { COMMANDS_PART1, COMMANDS_PART2 };
