import { StageInfo, UnitMeta } from '../../types';
import { generateUnit, generateStage } from '../shared/lessonGenerator';
import { greekStageMeta } from './stages';
import { greekVocabulary } from './db/vocabulary';
import { greekVerbForms } from './db/verbForms';
import { johnTexts } from './db/texts/john';

// Text data registry — maps dataKey to verse arrays
const textRegistry: Record<string, typeof johnTexts> = {
  john: johnTexts,
};

// Build all stages dynamically from metadata + DB data
export const greekStages: StageInfo[] = greekStageMeta.map((stageMeta) => {
  const units = stageMeta.units.map((unitMeta: UnitMeta) => {
    const vocabSlice = unitMeta.vocabRange
      ? greekVocabulary.filter((w) => w.stage <= stageMeta.id).slice(unitMeta.vocabRange[0], unitMeta.vocabRange[1])
      : undefined;

    const verbSlice = unitMeta.verbCategory
      ? greekVerbForms.filter((f) => f.stage <= stageMeta.id)
      : undefined;

    const textSlice = unitMeta.dataKey
      ? textRegistry[unitMeta.dataKey] || []
      : undefined;

    return generateUnit(unitMeta, vocabSlice, verbSlice, textSlice);
  });

  return generateStage(stageMeta.id, stageMeta.title, stageMeta.description, units);
});
