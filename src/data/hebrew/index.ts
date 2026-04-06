import { StageInfo, UnitMeta } from '../../types';
import { generateUnit, generateStage } from '../shared/lessonGenerator';
import { hebrewStageMeta } from './stages';
import { hebrewVocabulary } from './db/vocabulary';
import { hebrewVerbForms } from './db/verbForms';
import { genesisTexts } from './db/texts/genesis';
import { psalmTexts } from './db/texts/psalms';
import { genesis12Texts } from './db/texts/genesis12';
import { genesis22Texts } from './db/texts/genesis22';
import { psalm1Texts } from './db/texts/psalm1';
import { psalm121Texts } from './db/texts/psalm121';
import { deut6Texts } from './db/texts/deut6';
import { isaiah53Texts } from './db/texts/isaiah53';
import { ruth1Texts } from './db/texts/ruth1';
import { eccl1Texts } from './db/texts/eccl1';

// Text data registry — maps dataKey to verse arrays
const textRegistry: Record<string, typeof genesisTexts> = {
  genesis: genesisTexts.slice(0, 7),   // Gen 1:1-7
  genesis2: genesisTexts.slice(7, 13),  // Gen 1:8-13
  genesis12: genesis12Texts,             // Gen 12:1-9
  genesis22: genesis22Texts,             // Gen 22:1-14
  psalm1: psalm1Texts,                   // Psalm 1:1-6
  psalms: psalmTexts,                    // Psalm 23:1-6
  psalm121: psalm121Texts,               // Psalm 121:1-8
  deut6: deut6Texts,                     // Deut 6:4-9
  isaiah53: isaiah53Texts,               // Isaiah 53:1-12
  ruth1: ruth1Texts,                     // Ruth 1:1-18
  eccl1: eccl1Texts,                     // Eccl 1:1-11
};

// Build all stages dynamically from metadata + DB data
export const hebrewStages: StageInfo[] = hebrewStageMeta.map((stageMeta) => {
  const units = stageMeta.units.map((unitMeta: UnitMeta) => {
    const vocabSlice = unitMeta.vocabRange
      ? hebrewVocabulary.slice(unitMeta.vocabRange[0], unitMeta.vocabRange[1]).filter((w) => w.stage <= stageMeta.id)
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
