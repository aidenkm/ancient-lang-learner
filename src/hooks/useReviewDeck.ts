import { useCallback } from 'react';
import { ReviewCard, Exercise } from '../types';

const BOX_INTERVALS = [0, 0, 3, 7]; // box 1=즉시, 2=3일, 3=7일, 4=졸업

function today(): string {
  return new Date().toISOString().split('T')[0];
}

function addDays(date: string, days: number): string {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

/**
 * SRS 간격 반복 로직 (Leitner 박스 시스템)
 *
 * - addWrongWords: 틀린 단어를 deck에 추가 (이미 있으면 box 1로 강등)
 * - promoteCard: 맞으면 다음 box로 승급
 * - demoteCard: 틀리면 box 1로 강등
 * - getDueCards: 오늘 복습할 카드 반환
 * - generateReviewExercises: due 카드로 연습 문제 생성
 */
export function useReviewDeck() {

  const addWrongWords = useCallback((
    deck: ReviewCard[],
    words: { word: string; gloss: string; parsing: string; root?: string }[]
  ): ReviewCard[] => {
    const updated = [...deck];
    for (const w of words) {
      const existing = updated.findIndex(c => c.word === w.word);
      if (existing >= 0) {
        // 이미 있으면 box 1로 강등
        updated[existing] = {
          ...updated[existing],
          box: 1,
          nextReview: today(),
          wrongCount: updated[existing].wrongCount + 1,
        };
      } else {
        updated.push({
          word: w.word,
          gloss: w.gloss,
          parsing: w.parsing,
          root: w.root,
          box: 1,
          nextReview: today(),
          wrongCount: 1,
        });
      }
    }
    return updated;
  }, []);

  const promoteCard = useCallback((deck: ReviewCard[], word: string): ReviewCard[] => {
    return deck.map(card => {
      if (card.word !== word) return card;
      const newBox = Math.min(card.box + 1, 4);
      if (newBox >= 4) {
        // 졸업 — deck에서 제거
        return null;
      }
      return {
        ...card,
        box: newBox,
        nextReview: addDays(today(), BOX_INTERVALS[newBox]),
      };
    }).filter((c): c is ReviewCard => c !== null);
  }, []);

  const demoteCard = useCallback((deck: ReviewCard[], word: string): ReviewCard[] => {
    return deck.map(card => {
      if (card.word !== word) return card;
      return {
        ...card,
        box: 1,
        nextReview: today(),
        wrongCount: card.wrongCount + 1,
      };
    });
  }, []);

  const getDueCards = useCallback((deck: ReviewCard[]): ReviewCard[] => {
    const t = today();
    return deck.filter(card => card.nextReview <= t && card.box < 4);
  }, []);

  const generateReviewExercises = useCallback((dueCards: ReviewCard[]): Exercise[] => {
    const exercises: Exercise[] = [];
    const cards = dueCards.slice(0, 10); // 최대 10개

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      // 다른 카드에서 distractor 가져오기
      const otherGlosses = cards
        .filter((_, j) => j !== i)
        .map(c => c.gloss)
        .slice(0, 3);

      // distractor가 부족하면 기본값 추가
      const fallbacks = ['(다른 뜻)', '(유사한 뜻)', '(반대 뜻)'];
      while (otherGlosses.length < 3) {
        otherGlosses.push(fallbacks[otherGlosses.length]);
      }

      const options = [card.gloss, ...otherGlosses].sort(() => Math.random() - 0.5);

      exercises.push({
        id: `review-${i}-vocab`,
        type: 'multipleChoice',
        question: card.word,
        instruction: `복습: "${card.word}"의 뜻은?`,
        options,
        correctAnswer: card.gloss,
        hint: card.parsing,
      });

      // 파싱 문제도 추가 (카드가 5개 이하일 때만, 너무 길어지지 않게)
      if (cards.length <= 5) {
        const otherParsings = cards
          .filter((_, j) => j !== i)
          .map(c => c.parsing)
          .filter(p => p !== card.parsing)
          .slice(0, 3);

        while (otherParsings.length < 3) {
          otherParsings.push(`${card.parsing} (변형)`);
        }

        const parseOptions = [card.parsing, ...otherParsings].sort(() => Math.random() - 0.5);

        exercises.push({
          id: `review-${i}-parse`,
          type: 'multipleChoice',
          question: card.word,
          instruction: `복습: "${card.word}"${card.root ? ` (${card.root})` : ''}의 문법적 분석은?`,
          options: parseOptions,
          correctAnswer: card.parsing,
          hint: card.gloss,
        });
      }
    }

    return exercises;
  }, []);

  return {
    addWrongWords,
    promoteCard,
    demoteCard,
    getDueCards,
    generateReviewExercises,
  };
}
