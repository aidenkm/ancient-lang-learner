import { Exercise, Lesson, Unit, StageInfo, WordData, VerseData, VerbForm, UnitMeta } from '../../types';
import {
  generateParsingExercise,
  generateVocabMatching,
  generateFillBlank,
  generatePhraseTranslation,
  generateFormId,
} from './exerciseGenerator';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Pick `count` random-ish items from an array using a deterministic approach. */
function pickItems<T>(arr: T[], count: number, seed: string): T[] {
  if (arr.length <= count) return [...arr];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  const result: T[] = [];
  const pool = [...arr];
  for (let i = 0; i < count && pool.length > 0; i++) {
    hash = ((hash << 5) - hash + i) | 0;
    const idx = Math.abs(hash) % pool.length;
    result.push(pool.splice(idx, 1)[0]);
  }
  return result;
}

/** Generate distractor parsings from a list of verb forms, excluding the correct one. */
function parsingDistractors(forms: VerbForm[], exclude: string): string[] {
  return forms
    .map((f) => f.parsing)
    .filter((p) => p !== exclude)
    .slice(0, 3);
}

/** Generate distractor glosses from a word list, excluding the correct one. */
function glossDistractors(words: { gloss: string }[], exclude: string): string[] {
  return words
    .map((w) => w.gloss)
    .filter((g) => g !== exclude)
    .slice(0, 3);
}

// ---------------------------------------------------------------------------
// Mixed lesson generator — 듀오링고 스타일 혼합 레슨
// ---------------------------------------------------------------------------

/**
 * Generate a mixed lesson combining vocab, parsing, and text exercises.
 * Adapts based on which data sources are available.
 * Each lesson has 6-7 exercises mixing different types.
 */
export function generateMixedLesson(
  lessonId: string,
  lessonNum: number,
  vocabBatch?: WordData[],
  verbBatch?: VerbForm[],
  verseBatch?: VerseData[],
  allVocab?: WordData[],
  allVerbs?: VerbForm[],
): Lesson {
  const exercises: Exercise[] = [];
  let eNum = 1;
  const eid = () => `${lessonId}-E${eNum++}`;

  const hasVocab = vocabBatch && vocabBatch.length > 0;
  const hasVerbs = verbBatch && verbBatch.length > 0;
  const hasText = verseBatch && verseBatch.length > 0;

  // Distractor pools (broader than current batch for better distractors)
  const vocabPool = allVocab && allVocab.length > 0 ? allVocab : vocabBatch || [];
  const verbPool = allVerbs && allVerbs.length > 0 ? allVerbs : verbBatch || [];

  // --- 1. Vocab matching (introduce new words) ---
  if (hasVocab) {
    const batch1 = vocabBatch.slice(0, Math.min(4, vocabBatch.length));
    exercises.push(
      generateVocabMatching(
        eid(),
        batch1.map((w) => ({ word: w.word, gloss: w.gloss }))
      )
    );
  }

  // --- 2. Vocab multiple choice ---
  if (hasVocab && vocabBatch.length > 0) {
    const target = vocabBatch[0];
    const distractors = glossDistractors(
      vocabPool.filter((w) => w.word !== target.word),
      target.gloss
    );
    exercises.push(
      generateFormId(
        eid(),
        `"${target.word}"의 뜻은?`,
        [target.gloss, ...distractors],
        target.gloss,
        target.root
      )
    );
  }

  // --- 3. Parsing exercise (if verbs available) ---
  if (hasVerbs) {
    const target = pickItems(verbBatch, 1, `${lessonId}-parse`)[0];
    const distractors = parsingDistractors(
      verbPool.filter((f) => f.form !== target.form),
      target.parsing
    );
    exercises.push(
      generateParsingExercise(
        eid(),
        {
          word: target.form,
          parsing: target.parsing,
          root: target.root,
          gloss: target.gloss,
        },
        distractors
      )
    );
  }

  // --- 4. Text-based exercise (if text available) ---
  if (hasText) {
    const verse = verseBatch[0];
    const vWords = verse.words;

    // Phrase translation
    if (vWords.length >= 2) {
      const phraseWords = vWords.slice(0, Math.min(3, vWords.length));
      const phrase = phraseWords.map((w) => w.word).join(' ');
      const correctTranslation = phraseWords.map((w) => w.gloss).join(' ');
      const dist1 = [...phraseWords].reverse().map((w) => w.gloss).join(' ');
      const dist2 = phraseWords.map((w) => w.gloss).reverse().join(', ');
      const dist3 = phraseWords
        .map((_, i) => phraseWords[(i + 1) % phraseWords.length].gloss)
        .join(' ');
      exercises.push(
        generatePhraseTranslation(
          eid(),
          phraseWords.map((w) => ({ word: w.word, gloss: w.gloss })),
          phrase,
          correctTranslation,
          [dist1, dist2, dist3].filter((d) => d !== correctTranslation)
        )
      );
    }
  }

  // --- 5. More vocab or verb matching ---
  if (hasVocab && vocabBatch.length > 4) {
    const batch2 = vocabBatch.slice(4, Math.min(8, vocabBatch.length));
    exercises.push(
      generateVocabMatching(
        eid(),
        batch2.map((w) => ({ word: w.word, gloss: w.gloss }))
      )
    );
  } else if (hasVerbs && verbBatch.length >= 2) {
    const matchForms = pickItems(verbBatch, 4, `${lessonId}-vmatch`);
    exercises.push(
      generateVocabMatching(
        eid(),
        matchForms.map((f) => ({ word: f.form, gloss: f.gloss }))
      )
    );
  }

  // --- 6. Text fill blank or second vocab quiz ---
  if (hasText) {
    const verse = verseBatch[verseBatch.length > 1 ? 1 : 0];
    if (verse.words.length >= 2) {
      const blankIdx = Math.min(1, verse.words.length - 1);
      exercises.push(generateFillBlank(eid(), verse, blankIdx));
    }
  } else if (hasVocab && vocabBatch.length > 1) {
    const target = vocabBatch[Math.min(3, vocabBatch.length - 1)];
    const distractors = glossDistractors(
      vocabPool.filter((w) => w.word !== target.word),
      target.gloss
    );
    exercises.push(
      generateFormId(
        eid(),
        `"${target.word}"의 뜻은?`,
        [target.gloss, ...distractors],
        target.gloss,
        target.root
      )
    );
  }

  // --- 7. Second parsing or text matching ---
  if (hasVerbs && verbBatch.length >= 2) {
    const target = pickItems(verbBatch, 1, `${lessonId}-parse2`)[0];
    const distractors = parsingDistractors(
      verbPool.filter((f) => f.form !== target.form),
      target.parsing
    );
    exercises.push(
      generateParsingExercise(
        eid(),
        {
          word: target.form,
          parsing: target.parsing,
          root: target.root,
          gloss: target.gloss,
        },
        distractors
      )
    );
  } else if (hasText && verseBatch[0].words.length >= 2) {
    const matchWords = verseBatch[0].words.slice(0, Math.min(4, verseBatch[0].words.length));
    exercises.push(
      generateVocabMatching(
        eid(),
        matchWords.map((w) => ({ word: w.word, gloss: w.gloss }))
      )
    );
  }

  // Build title based on content
  const titleParts: string[] = [];
  if (hasText) titleParts.push(verseBatch.map((v) => v.ref).join(', '));
  if (hasVocab && !hasText) titleParts.push(`어휘 ${vocabBatch.length}개`);
  if (hasVerbs && !hasText) titleParts.push('파싱');
  const title = titleParts.join(' + ') || `레슨 ${lessonNum}`;

  return {
    id: lessonId,
    title,
    description: `혼합 학습 ${lessonNum}`,
    exercises,
  };
}

// ---------------------------------------------------------------------------
// Unit generator — 혼합 레슨으로 유닛 생성
// ---------------------------------------------------------------------------

/**
 * Generate a full unit from UnitMeta + data.
 * Creates mixed lessons that combine all available data types.
 */
export function generateUnit(
  meta: UnitMeta,
  vocabData?: WordData[],
  verbData?: VerbForm[],
  textData?: VerseData[]
): Unit {
  const lessons: Lesson[] = [];

  // Determine batch sizes
  const vocabBatchSize = 8;
  const verbBatchSize = 4;
  const verseBatchSize = 2;

  // Calculate how many lessons we need based on available data
  const vocabLessons = vocabData ? Math.ceil(vocabData.length / vocabBatchSize) : 0;
  const verbLessons = verbData ? Math.ceil(verbData.length / verbBatchSize) : 0;
  const textLessons = textData ? Math.ceil(textData.length / verseBatchSize) : 0;
  const totalLessons = Math.max(vocabLessons, verbLessons, textLessons, 1);

  for (let i = 0; i < totalLessons; i++) {
    // Slice data for this lesson (cycling if one source runs out)
    const vocabBatch = vocabData && vocabData.length > 0
      ? vocabData.slice(
          (i * vocabBatchSize) % vocabData.length,
          Math.min(((i * vocabBatchSize) % vocabData.length) + vocabBatchSize, vocabData.length)
        )
      : undefined;

    const verbBatch = verbData && verbData.length > 0
      ? pickItems(verbData, verbBatchSize, `${meta.id}-L${i + 1}-verbs`)
      : undefined;

    const verseBatch = textData && textData.length > 0
      ? textData.slice(
          i * verseBatchSize,
          Math.min(i * verseBatchSize + verseBatchSize, textData.length)
        )
      : undefined;

    // Skip if no data for this lesson
    const hasSomeData = (vocabBatch && vocabBatch.length > 0)
      || (verbBatch && verbBatch.length > 0)
      || (verseBatch && verseBatch.length > 0);
    if (!hasSomeData) continue;

    lessons.push(
      generateMixedLesson(
        `${meta.id}-L${lessons.length + 1}`,
        lessons.length + 1,
        vocabBatch,
        verbBatch,
        verseBatch,
        vocabData,
        verbData,
      )
    );
  }

  return {
    id: meta.id,
    title: meta.title,
    description: meta.description,
    stage: meta.stage,
    lessons,
    icon: meta.icon,
  };
}

// ---------------------------------------------------------------------------
// Stage assembler
// ---------------------------------------------------------------------------

export function generateStage(
  stageId: number,
  title: string,
  description: string,
  units: Unit[]
): StageInfo {
  return {
    id: stageId,
    title,
    description,
    units,
  };
}
