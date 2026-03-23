import { Lesson, Unit, StageInfo, WordData, VerseData, VerbForm, UnitMeta } from '../../types';
import {
  generateParsingExercise,
  generateVocabMatching,
  generateFillBlank,
  generatePhraseTranslation,
  generateWordArrange,
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
// Vocabulary lesson
// ---------------------------------------------------------------------------

/**
 * Generate a vocabulary lesson from a slice of vocabulary.
 * Creates 5 exercises: 2 matching, 2 multipleChoice (gloss quiz), 1 fillBlank-style word arrange.
 */
export function generateVocabLesson(
  unitId: string,
  lessonNum: number,
  words: WordData[]
): Lesson {
  const lessonId = `${unitId}-L${lessonNum}`;
  const exercises = [];

  // --- Exercise 1: Matching (first 4 words) ---
  const batch1 = words.slice(0, Math.min(4, words.length));
  exercises.push(
    generateVocabMatching(
      `${lessonId}-E1`,
      batch1.map((w) => ({ word: w.word, gloss: w.gloss }))
    )
  );

  // --- Exercise 2: Multiple choice – pick the correct gloss ---
  if (words.length > 0) {
    const target = words[0];
    const distractors = glossDistractors(words.slice(1), target.gloss);
    exercises.push(
      generateFormId(
        `${lessonId}-E2`,
        `"${target.word}"의 뜻은?`,
        [target.gloss, ...distractors],
        target.gloss,
        target.root
      )
    );
  }

  // --- Exercise 3: Matching (next 4 words or wrap around) ---
  const batch2Start = Math.min(4, words.length);
  const batch2 = words.length > 4
    ? words.slice(batch2Start, Math.min(batch2Start + 4, words.length))
    : pickItems(words, 4, `${lessonId}-E3`);
  exercises.push(
    generateVocabMatching(
      `${lessonId}-E3`,
      batch2.map((w) => ({ word: w.word, gloss: w.gloss }))
    )
  );

  // --- Exercise 4: Multiple choice – pick the correct gloss (different word) ---
  if (words.length > 1) {
    const target = words[Math.min(3, words.length - 1)];
    const distractors = glossDistractors(
      words.filter((w) => w.word !== target.word),
      target.gloss
    );
    exercises.push(
      generateFormId(
        `${lessonId}-E4`,
        `"${target.word}"의 뜻은?`,
        [target.gloss, ...distractors],
        target.gloss,
        target.root
      )
    );
  }

  // --- Exercise 5: Word arrange – arrange glosses to match word order ---
  const arrangeWords = pickItems(words, 4, `${lessonId}-E5`);
  exercises.push(
    generateWordArrange(
      `${lessonId}-E5`,
      arrangeWords.map((w) => w.gloss),
      arrangeWords.map((w) => w.gloss),
      '단어의 뜻을 올바른 순서로 배열하세요: ' +
        arrangeWords.map((w) => w.word).join(', ')
    )
  );

  return {
    id: lessonId,
    title: `어휘 ${lessonNum}`,
    description: `${words.length}개 단어 학습`,
    exercises,
  };
}

// ---------------------------------------------------------------------------
// Parsing drill lesson
// ---------------------------------------------------------------------------

/**
 * Generate a parsing drill lesson from verb forms.
 * Creates 5 exercises: 3 parsing multipleChoice, 1 matching, 1 fillBlank-style word arrange.
 */
export function generateParsingLesson(
  unitId: string,
  lessonNum: number,
  forms: VerbForm[],
  topic: string
): Lesson {
  const lessonId = `${unitId}-L${lessonNum}`;
  const exercises = [];

  // --- Exercises 1-3: Parsing multiple choice ---
  const targets = pickItems(forms, 3, `${lessonId}-parsing`);
  targets.forEach((target, i) => {
    const distractors = parsingDistractors(
      forms.filter((f) => f.form !== target.form),
      target.parsing
    );
    exercises.push(
      generateParsingExercise(
        `${lessonId}-E${i + 1}`,
        {
          word: target.form,
          parsing: target.parsing,
          root: target.root,
          gloss: target.gloss,
        },
        distractors
      )
    );
  });

  // --- Exercise 4: Matching (form <-> gloss) ---
  const matchForms = pickItems(forms, 4, `${lessonId}-E4`);
  exercises.push(
    generateVocabMatching(
      `${lessonId}-E4`,
      matchForms.map((f) => ({ word: f.form, gloss: f.gloss }))
    )
  );

  // --- Exercise 5: Word arrange – order forms by parsing categories ---
  const arrangeForms = pickItems(forms, 4, `${lessonId}-E5`);
  exercises.push(
    generateWordArrange(
      `${lessonId}-E5`,
      arrangeForms.map((f) => f.form),
      arrangeForms.map((f) => f.form),
      `다음 ${topic} 형태를 올바른 순서로 배열하세요.`
    )
  );

  return {
    id: lessonId,
    title: `파싱 연습: ${topic}`,
    description: `${topic} 동사 변화 연습`,
    exercises,
  };
}

// ---------------------------------------------------------------------------
// Text reading lesson
// ---------------------------------------------------------------------------

/**
 * Generate a text reading lesson from verses.
 * Creates 5 exercises per verse (or 5 total if multiple short verses):
 * word parsing, phrase translation, matching, fill blank.
 */
export function generateTextLesson(
  unitId: string,
  lessonNum: number,
  verses: VerseData[],
  ref: string
): Lesson {
  const lessonId = `${unitId}-L${lessonNum}`;
  const exercises = [];

  // Collect all words across verses for distractor pools
  const allWords = verses.flatMap((v) => v.words);
  let exerciseCount = 0;
  const maxExercises = 5;

  for (const verse of verses) {
    if (exerciseCount >= maxExercises) break;
    const vWords = verse.words;
    if (vWords.length === 0) continue;

    // --- Exercise: Parse a key word from the verse ---
    if (exerciseCount < maxExercises) {
      const targetIdx = Math.min(0, vWords.length - 1);
      const target = vWords[targetIdx];
      const distractors = allWords
        .filter((w) => w.parsing !== target.parsing)
        .map((w) => w.parsing)
        .slice(0, 3);
      exercises.push(
        generateParsingExercise(
          `${lessonId}-E${exerciseCount + 1}`,
          {
            word: target.word,
            parsing: target.parsing,
            root: target.root,
            gloss: target.gloss,
          },
          distractors
        )
      );
      exerciseCount++;
    }

    // --- Exercise: Phrase translation ---
    if (exerciseCount < maxExercises && vWords.length >= 2) {
      const phraseWords = vWords.slice(0, Math.min(3, vWords.length));
      const phrase = phraseWords.map((w) => w.word).join(' ');
      const correctTranslation = phraseWords.map((w) => w.gloss).join(' ');
      // Generate distractors by shuffling gloss order
      const dist1 = [...phraseWords]
        .reverse()
        .map((w) => w.gloss)
        .join(' ');
      const dist2 = phraseWords.map((w) => w.gloss).reverse().join(', ');
      const dist3 = phraseWords
        .map((_, i) => phraseWords[(i + 1) % phraseWords.length].gloss)
        .join(' ');
      exercises.push(
        generatePhraseTranslation(
          `${lessonId}-E${exerciseCount + 1}`,
          phraseWords.map((w) => ({ word: w.word, gloss: w.gloss })),
          phrase,
          correctTranslation,
          [dist1, dist2, dist3].filter((d) => d !== correctTranslation)
        )
      );
      exerciseCount++;
    }

    // --- Exercise: Vocabulary matching from verse words ---
    if (exerciseCount < maxExercises && vWords.length >= 2) {
      const matchWords = vWords.slice(0, Math.min(4, vWords.length));
      exercises.push(
        generateVocabMatching(
          `${lessonId}-E${exerciseCount + 1}`,
          matchWords.map((w) => ({ word: w.word, gloss: w.gloss }))
        )
      );
      exerciseCount++;
    }

    // --- Exercise: Fill in the blank ---
    if (exerciseCount < maxExercises && vWords.length >= 2) {
      const blankIdx = Math.min(1, vWords.length - 1);
      exercises.push(
        generateFillBlank(
          `${lessonId}-E${exerciseCount + 1}`,
          verse,
          blankIdx
        )
      );
      exerciseCount++;
    }

    // --- Exercise: Word arrange ---
    if (exerciseCount < maxExercises && vWords.length >= 3) {
      const arrangeWords = vWords.slice(0, Math.min(5, vWords.length));
      exercises.push(
        generateWordArrange(
          `${lessonId}-E${exerciseCount + 1}`,
          arrangeWords.map((w) => w.word),
          arrangeWords.map((w) => w.word),
          `${verse.ref}의 단어를 올바른 순서로 배열하세요.`
        )
      );
      exerciseCount++;
    }
  }

  return {
    id: lessonId,
    title: `본문 읽기: ${ref}`,
    description: `${ref} 본문 학습`,
    exercises,
  };
}

// ---------------------------------------------------------------------------
// Unit generator
// ---------------------------------------------------------------------------

/**
 * Generate a full unit from UnitMeta + data.
 * Dispatches to the appropriate lesson generator based on lessonType.
 */
export function generateUnit(
  meta: UnitMeta,
  vocabData?: WordData[],
  verbData?: VerbForm[],
  textData?: VerseData[]
): Unit {
  const lessons: Lesson[] = [];

  switch (meta.lessonType) {
    case 'vocab': {
      if (!vocabData || vocabData.length === 0) break;
      // Group words into batches of 8-10
      const batchSize = Math.min(10, Math.max(8, Math.ceil(vocabData.length / 3)));
      for (let i = 0; i < vocabData.length; i += batchSize) {
        const batch = vocabData.slice(i, i + batchSize);
        lessons.push(generateVocabLesson(meta.id, lessons.length + 1, batch));
      }
      break;
    }

    case 'grammar':
    case 'parsing': {
      if (!verbData || verbData.length === 0) break;
      // Group verb forms by tense+mood
      const groups = new Map<string, VerbForm[]>();
      for (const form of verbData) {
        const key = `${form.tense}-${form.mood}`;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key)!.push(form);
      }
      for (const [groupKey, forms] of groups) {
        const topic = meta.verbCategory || groupKey;
        lessons.push(generateParsingLesson(meta.id, lessons.length + 1, forms, topic));
      }
      break;
    }

    case 'text': {
      if (!textData || textData.length === 0) break;
      // Take 1-2 verses per lesson
      const versesPerLesson = 2;
      for (let i = 0; i < textData.length; i += versesPerLesson) {
        const verseSlice = textData.slice(i, i + versesPerLesson);
        const ref = verseSlice.map((v) => v.ref).join(', ');
        lessons.push(generateTextLesson(meta.id, lessons.length + 1, verseSlice, ref));
      }
      break;
    }
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

/**
 * Assemble a complete stage from units.
 */
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
