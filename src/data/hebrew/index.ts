import { StageInfo, UnitMeta } from '../../types';
import { generateUnit, generateStage } from '../shared/lessonGenerator';
import { hebrewStageMeta } from './stages';
import { hebrewVocabulary } from './db/vocabulary';
import { hebrewVerbForms } from './db/verbForms';
import { genesisTexts } from './db/texts/genesis';
import { psalmTexts } from './db/texts/psalms';

// Text data registry — maps dataKey to verse arrays
const textRegistry: Record<string, typeof genesisTexts> = {
  genesis: genesisTexts.slice(0, 7),   // Gen 1:1-7
  genesis2: genesisTexts.slice(7, 13),  // Gen 1:8-13
  psalms: psalmTexts,                    // Psalm 23:1-6
};

// Build all stages dynamically from metadata + DB data
export const hebrewStages: StageInfo[] = hebrewStageMeta.map((stageMeta) => {
  const units = stageMeta.units.map((unitMeta: UnitMeta) => {
    const vocabSlice = unitMeta.vocabRange
      ? hebrewVocabulary.filter((w) => w.stage <= stageMeta.id).slice(unitMeta.vocabRange[0], unitMeta.vocabRange[1])
      : undefined;

    const verbSlice = unitMeta.verbCategory
      ? hebrewVerbForms.filter((f) => f.stage <= stageMeta.id)
      : undefined;

    const textSlice = unitMeta.dataKey
      ? textRegistry[unitMeta.dataKey] || []
      : undefined;

    return generateUnit(unitMeta, vocabSlice, verbSlice, textSlice);
  });

  return generateStage(stageMeta.id, stageMeta.title, stageMeta.description, units);
});
