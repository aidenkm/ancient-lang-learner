import { UnitMeta } from '../../types';

// Stage metadata — 테마 기반 유닛.
// 각 유닛은 어휘(vocabRange), 파싱(verbCategory), 본문(dataKey)을 조합해 혼합 레슨 생성.

export const hebrewStageMeta = [
  {
    id: 1,
    title: '알파벳 & 발음',
    description: '히브리어 자음, 모음, 다게쉬를 배웁니다',
    units: [
      { id: 'h1-u1', title: '자음 א-ל', description: '알렙부터 라메드까지', icon: '🔤', stage: 1, vocabRange: [0, 5] as [number, number] },
      { id: 'h1-u2', title: '자음 מ-ת', description: '멤부터 타브까지', icon: '🔤', stage: 1, vocabRange: [5, 10] as [number, number] },
      { id: 'h1-u3', title: '모음 & 다게쉬', description: '니쿠돗과 다게쉬', icon: '🔤', stage: 1, vocabRange: [0, 15] as [number, number] },
    ] satisfies UnitMeta[],
  },
  {
    id: 2,
    title: '기초 어휘 & 칼 파싱',
    description: '핵심 어휘 75단어, 칼 완료/미완료 패러다임',
    units: [
      { id: 'h2-u1', title: '핵심 명사 (1)', description: '가장 빈도 높은 명사들', icon: '📖', stage: 2, vocabRange: [15, 30] as [number, number] },
      { id: 'h2-u2', title: '핵심 명사 (2)', description: '빈도 상위 명사 계속', icon: '📖', stage: 2, vocabRange: [30, 45] as [number, number] },
      { id: 'h2-u3', title: '칼 동사 & 완료 파싱', description: '칼 동사 + 완료 패러다임', icon: '⚡', stage: 2, vocabRange: [45, 60] as [number, number], verbCategory: '완료' },
      { id: 'h2-u4', title: '칼 동사 & 미완료 파싱', description: '칼 동사 + 미완료 패러다임', icon: '⚡', stage: 2, vocabRange: [60, 75] as [number, number], verbCategory: '미완료' },
    ] satisfies UnitMeta[],
  },
  {
    id: 3,
    title: '빈야님 & 동사 심화',
    description: '니팔, 피엘, 히필; 명령법, 부정사, 분사, 와이욕톨 기초',
    units: [
      { id: 'h3-u1', title: '니팔 & 어휘', description: '니팔 + 형용사/수사', icon: '🔄', stage: 3, verbCategory: '니팔', vocabRange: [75, 90] as [number, number] },
      { id: 'h3-u2', title: '피엘 & 어휘', description: '피엘 + 어휘', icon: '💪', stage: 3, verbCategory: '피엘', vocabRange: [90, 105] as [number, number] },
      { id: 'h3-u3', title: '히필 & 어휘', description: '히필 + 어휘', icon: '⬆️', stage: 3, verbCategory: '히필', vocabRange: [105, 120] as [number, number] },
      { id: 'h3-u4', title: '명령법 & 부정사', description: '명령법, 부정사, 분사', icon: '👆', stage: 3, verbCategory: '명령법', vocabRange: [120, 135] as [number, number] },
      { id: 'h3-u5', title: '와이욕톨 & 중급 어휘', description: '와이욕톨 + 추가 명사', icon: '📜', stage: 3, verbCategory: '와이욕톨', vocabRange: [110, 135] as [number, number] },
    ] satisfies UnitMeta[],
  },
  {
    id: 4,
    title: '고급 문법',
    description: '연계형, 접미사, 약동사, 푸알/호팔/히트파엘',
    units: [
      { id: 'h4-u1', title: '푸알 & 호팔', description: '피동 빈야님 + 어휘', icon: '🔄', stage: 4, verbCategory: '푸알', vocabRange: [135, 150] as [number, number] },
      { id: 'h4-u2', title: '히트파엘 & 약동사', description: '히트파엘, 약동사', icon: '🔁', stage: 4, verbCategory: '히트파엘', vocabRange: [150, 165] as [number, number] },
      { id: 'h4-u3', title: '연계형 & 고급 어휘', description: '연계형, 접미사, 고급 어휘', icon: '🔗', stage: 4, vocabRange: [165, 180] as [number, number] },
    ] satisfies UnitMeta[],
  },
  {
    id: 5,
    title: '원전 읽기',
    description: '창세기, 시편, 신명기, 이사야 등 원전 단어별 파싱',
    units: [
      { id: 'h5-u1', title: '창세기 1장 (1)', description: '천지창조 (1:1-7)', icon: '🌍', stage: 5, dataKey: 'genesis', vocabRange: [0, 30] as [number, number] },
      { id: 'h5-u2', title: '창세기 1장 (2)', description: '천지창조 계속 (1:8-13)', icon: '🌍', stage: 5, dataKey: 'genesis2' },
      { id: 'h5-u3', title: '창세기 12장', description: '아브람의 부르심', icon: '🌍', stage: 5, dataKey: 'genesis12' },
      { id: 'h5-u4', title: '창세기 22장', description: '이삭을 바치다', icon: '🌍', stage: 5, dataKey: 'genesis22' },
      { id: 'h5-u5', title: '시편 1편', description: '의인과 악인의 길', icon: '🎵', stage: 5, dataKey: 'psalm1' },
      { id: 'h5-u6', title: '시편 23편', description: '여호와는 나의 목자', icon: '🎵', stage: 5, dataKey: 'psalms' },
      { id: 'h5-u7', title: '시편 121편', description: '내가 산을 향하여 눈을 들리라', icon: '🎵', stage: 5, dataKey: 'psalm121' },
      { id: 'h5-u8', title: '신명기 6장', description: '쉐마 이스라엘 (6:4-9)', icon: '📜', stage: 5, dataKey: 'deut6' },
      { id: 'h5-u9', title: '이사야 53장', description: '고난받는 종 (53:1-12)', icon: '📖', stage: 5, dataKey: 'isaiah53' },
      { id: 'h5-u10', title: '룻기 1장', description: '룻의 고백 (1:1-22)', icon: '🌾', stage: 5, dataKey: 'ruth1' },
      { id: 'h5-u11', title: '전도서 1장', description: '헛되고 헛되도다 (1:1-11)', icon: '📚', stage: 5, dataKey: 'eccl1' },
    ] satisfies UnitMeta[],
  },
];
