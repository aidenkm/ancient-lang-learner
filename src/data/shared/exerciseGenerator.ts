import { Exercise, VerseData } from '../../types';

/**
 * Shuffle an array deterministically using a simple seed-based approach.
 * For non-deterministic shuffle, seed can be derived from the id.
 */
function seededShuffle<T>(arr: T[], seed: string): T[] {
  const result = [...arr];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  for (let i = result.length - 1; i > 0; i--) {
    hash = ((hash << 5) - hash + i) | 0;
    const j = Math.abs(hash) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Takes a word with parsing info, generates a "parse this word" multiple choice exercise.
 */
export function generateParsingExercise(
  id: string,
  word: { word: string; parsing: string; root?: string; gloss: string },
  distractors: string[]
): Exercise {
  const options = seededShuffle([word.parsing, ...distractors.slice(0, 3)], id);
  const rootHint = word.root ? ` (${word.root})` : '';

  return {
    id,
    type: 'multipleChoice',
    question: word.word,
    instruction: `"${word.word}"${rootHint}의 문법적 분석을 고르세요.`,
    options,
    correctAnswer: word.parsing,
    hint: word.gloss,
  };
}

/**
 * Takes 4 words, generates a matching exercise (word <-> gloss).
 */
export function generateVocabMatching(
  id: string,
  words: { word: string; gloss: string }[]
): Exercise {
  const selected = words.slice(0, 4);
  const pairs = selected.map((w) => ({
    left: w.word,
    right: w.gloss,
  }));

  return {
    id,
    type: 'matching',
    question: '단어와 뜻을 연결하세요.',
    instruction: '왼쪽 단어와 오른쪽 뜻을 짝지으세요.',
    pairs,
    correctAnswer: selected.map((w) => `${w.word}=${w.gloss}`),
  };
}

/**
 * Takes a verse, picks one word to blank out, asks to choose it from options.
 * Changed from text input to multipleChoice since users can't type Greek/Hebrew on mobile.
 */
export function generateFillBlank(
  id: string,
  verse: VerseData,
  wordIndex: number
): Exercise {
  const safeIndex = Math.min(wordIndex, verse.words.length - 1);
  const targetWord = verse.words[safeIndex];
  const blankedText = verse.words
    .map((w, i) => (i === safeIndex ? '______' : w.word))
    .join(' ');

  // Build distractors from other words in the verse
  const distractors = verse.words
    .filter((_, i) => i !== safeIndex)
    .map((w) => w.word)
    .filter((w, i, arr) => arr.indexOf(w) === i) // unique
    .slice(0, 3);

  // If not enough distractors, pad with variations
  while (distractors.length < 3) {
    distractors.push(`(${distractors.length + 1})`);
  }

  const options = seededShuffle([targetWord.word, ...distractors.slice(0, 3)], id);

  return {
    id,
    type: 'multipleChoice',
    question: blankedText,
    instruction: `빈칸에 들어갈 단어를 고르세요. (${verse.ref})`,
    options,
    correctAnswer: targetWord.word,
    hint: targetWord.gloss,
  };
}

/**
 * Takes 2-3 words from a verse, asks for translation.
 */
export function generatePhraseTranslation(
  id: string,
  words: { word: string; gloss: string }[],
  phrase: string,
  correctTranslation: string,
  distractorTranslations: string[]
): Exercise {
  const options = seededShuffle(
    [correctTranslation, ...distractorTranslations.slice(0, 3)],
    id
  );

  return {
    id,
    type: 'translation',
    question: phrase,
    instruction: '다음 구절을 번역하세요.',
    options,
    correctAnswer: correctTranslation,
    hint: words.map((w) => `${w.word}: ${w.gloss}`).join(', '),
  };
}

/**
 * Takes 3-5 words, asks to arrange in correct order.
 */
export function generateWordArrange(
  id: string,
  words: string[],
  correctOrder: string[],
  instruction: string
): Exercise {
  const shuffled = seededShuffle(words, id);

  return {
    id,
    type: 'wordArrange',
    question: instruction,
    instruction,
    words: shuffled,
    correctAnswer: correctOrder,
  };
}

/**
 * Takes a word, asks to identify its grammatical form (case, tense, etc).
 */
export function generateFormId(
  id: string,
  question: string,
  options: string[],
  correctAnswer: string,
  hint?: string
): Exercise {
  return {
    id,
    type: 'multipleChoice',
    question,
    instruction: '올바른 문법 형태를 고르세요.',
    options,
    correctAnswer,
    hint,
  };
}
