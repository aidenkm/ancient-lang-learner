import { StageInfo, UnitMeta } from '../../types';
import { generateUnit, generateStage } from '../shared/lessonGenerator';
import { greekStageMeta } from './stages';
import { greekVocabulary } from './db/vocabulary';
import { greekVerbForms } from './db/verbForms';
import { johnTexts } from './db/texts/john';
import { john3Texts } from './db/texts/john3';
import { markTexts } from './db/texts/mark';
import { romansTexts } from './db/texts/romans';
import { genesisLxxTexts } from './db/texts/genesis-lxx';
import { firstJohnTexts } from './db/texts/firstJohn';
import { platoTexts } from './db/texts/plato';
import { aristotleTexts } from './db/texts/aristotle';
import { philippiansTexts } from './db/texts/philippians';
import { josephusTexts } from './db/texts/josephus';
import { philoTexts } from './db/texts/philo';
import { apostolicFathersTexts } from './db/texts/apostolicFathers';
import { hebrewsTexts } from './db/texts/hebrews';
import { galatiansTexts } from './db/texts/galatians';
import { corinthiansTexts } from './db/texts/corinthians';

const textRegistry: Record<string, typeof johnTexts> = {
  john: johnTexts,
  john3: john3Texts,
  mark: markTexts,
  romans8: romansTexts,
  'genesis-lxx': genesisLxxTexts,
  firstJohn: firstJohnTexts,
  plato: platoTexts,
  aristotle: aristotleTexts,
  philippians: philippiansTexts,
  'josephus-war': josephusTexts,
  'josephus-ant': josephusTexts,
  philo: philoTexts,
  didache: apostolicFathersTexts,
  hebrews: hebrewsTexts,
  galatians: galatiansTexts,
  corinthians: corinthiansTexts,
};

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
