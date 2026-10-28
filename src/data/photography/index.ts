import { PhotoProMode } from './types';
import { PHOTO_CATEGORIES } from './categories';
import { PORTRAIT_MODES } from './category1_portrait';
import { PRODUCT_MODES } from './category2_product';
import { LANDSCAPE_MODES } from './category3_landscape';
import { STREET_ARCHITECTURE_MODES } from './category4_street';
import { MACRO_WILDLIFE_MODES } from './category5_macro_wildlife';
import { FASHION_BEAUTY_MODES } from './category6_fashion_beauty';
import { FOOD_BEVERAGE_MODES } from './category7_food_beverage';
import { SPORTS_ACTION_MODES } from './category8_sports_action';
import { NIGHT_ASTRONOMY_MODES } from './category9_night_astronomy';
import { ART_EXPERIMENTAL_MODES } from './category10_art_experimental';

export * from './types';
export * from './categories';

// Consolidación de los 200 modos fotográficos profesionales (20 modos en cada una de las 10 categorías maestras)
export const PHOTO_PRO_MODES: PhotoProMode[] = [
  ...PORTRAIT_MODES,          // 1. Retrato y Personas (20)
  ...PRODUCT_MODES,           // 2. Producto y Publicidad (20)
  ...LANDSCAPE_MODES,         // 3. Paisajes y Naturaleza (20)
  ...STREET_ARCHITECTURE_MODES,// 4. Calle, Viajes y Arquitectura (20)
  ...MACRO_WILDLIFE_MODES,    // 5. Macro, Animales y Vida Salvaje (20)
  ...FASHION_BEAUTY_MODES,    // 6. Moda y Belleza (20)
  ...FOOD_BEVERAGE_MODES,     // 7. Gastronomía y Bebidas (20)
  ...SPORTS_ACTION_MODES,     // 8. Deportes y Acción (20)
  ...NIGHT_ASTRONOMY_MODES,   // 9. Fotografía Nocturna y Astronómica (20)
  ...ART_EXPERIMENTAL_MODES   // 10. Arte, Cine y Fotografía Experimental (20)
];

// Helper para convertir un PhotoProMode a un PromptItem compatible con favoritos y biblioteca
export function photoModeToPromptItem(mode: PhotoProMode) {
  return {
    id: mode.id,
    title: mode.title,
    description: mode.description,
    categoryId: mode.categoryId,
    category: mode.category,
    tags: mode.tags,
    difficulty: mode.difficulty,
    tools: mode.tools,
    objective: `Generar fotografía profesional de estilo ${mode.category} con IA`,
    fullPrompt: mode.fullPrompt,
    exampleUse: mode.exampleUse,
    expectedResult: `Fotografía fotorrealista de alta definición con parámetros de ${mode.cameraLens}, iluminación ${mode.lighting} y composición ${mode.composition}`,
    tips: [
      `Cámara y óptica recomendada: ${mode.cameraLens}`,
      `Iluminación clave: ${mode.lighting}`,
      `Composición: ${mode.composition}`,
      `Paleta de colores: ${mode.colorPalette}`
    ],
    accessLevel: 'gratuito' as const,
    usageCount: 150,
    ratingScore: 4.9
  };
}
