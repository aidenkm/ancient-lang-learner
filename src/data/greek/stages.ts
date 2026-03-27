import { UnitMeta } from '../../types';

// Stage metadata — 테마 기반 유닛.
// 각 유닛은 어휘(vocabRange), 파싱(verbCategory), 본문(dataKey)을 조합해 혼합 레슨 생성.

export const greekStageMeta = [
  {
    id: 1,
    title: '알파벳 & 발음',
    description: '그리스어 문자를 배우고 읽는 법을 익힙니다',
    units: [
      { id: 'g1-u1', title: '알파벳 Α-Θ', description: '알파부터 세타까지', icon: '🔤', stage: 1, vocabRange: [0, 10] as [number, number] },
      { id: 'g1-u2', title: '알파벳 Ι-Ω', description: '이오타부터 오메가까지', icon: '🔤', stage: 1, vocabRange: [10, 20] as [number, number] },
      { id: 'g1-u3', title: '이중모음 & 기식부호', description: '이중모음과 기식부호', icon: '🔤', stage: 1, vocabRange: [0, 20] as [number, number] },
    ] satisfies UnitMeta[],
  },
  {
    id: 2,
    title: '기초 어휘 & 문법',
    description: '핵심 어휘 200단어, 관사, 명사 변화, 전치사, 기본 동사',
    units: [
      { id: 'g2-u1', title: '기능어 & 관사', description: '관사, 접속사, 전치사', icon: '📝', stage: 2, vocabRange: [0, 30] as [number, number] },
      { id: 'g2-u2', title: '핵심 명사 (1)', description: '가장 빈도 높은 명사들', icon: '📖', stage: 2, vocabRange: [30, 60] as [number, number] },
      { id: 'g2-u3', title: '핵심 명사 (2)', description: '빈도 상위 명사 계속', icon: '📖', stage: 2, vocabRange: [60, 90] as [number, number] },
      { id: 'g2-u4', title: '핵심 동사 & 현재 파싱', description: '빈도 높은 동사 + 현재 시제', icon: '⚡', stage: 2, vocabRange: [90, 120] as [number, number], verbCategory: '현재' },
      { id: 'g2-u5', title: '동사 심화 & 파싱', description: '더 많은 동사 + 현재 시제 복습', icon: '⚡', stage: 2, vocabRange: [120, 150] as [number, number], verbCategory: '현재' },
      { id: 'g2-u6', title: '형용사 & 부사', description: '기초 형용사와 부사', icon: '🎯', stage: 2, vocabRange: [150, 180] as [number, number] },
      { id: 'g2-u7', title: '대명사 & 전치사', description: '인칭/지시/관계 대명사', icon: '📝', stage: 2, vocabRange: [180, 210] as [number, number] },
    ] satisfies UnitMeta[],
  },
  {
    id: 3,
    title: '중급 문법',
    description: '동사 6시제, 중간/수동태, 분사 기초, 접속법, 부정사',
    units: [
      { id: 'g3-u1', title: '미완료 시제 & 어휘', description: '미완료 파싱 + 어휘 복습', icon: '⏳', stage: 3, verbCategory: '미완료', vocabRange: [0, 30] as [number, number] },
      { id: 'g3-u2', title: '미래 시제 & 어휘', description: '미래 파싱 + 어휘 복습', icon: '🔮', stage: 3, verbCategory: '미래', vocabRange: [30, 60] as [number, number] },
      { id: 'g3-u3', title: '부정과거 (1)', description: '제1부정과거 + 어휘', icon: '⚡', stage: 3, verbCategory: '부정과거', vocabRange: [60, 90] as [number, number] },
      { id: 'g3-u4', title: '부정과거 (2)', description: '제2부정과거 & 수동', icon: '⚡', stage: 3, verbCategory: '부정과거수동', vocabRange: [90, 120] as [number, number] },
      { id: 'g3-u5', title: '완료 시제', description: '완료 파싱 + 어휘', icon: '✅', stage: 3, verbCategory: '완료', vocabRange: [120, 150] as [number, number] },
      { id: 'g3-u6', title: '중간/수동태', description: '중간태와 수동태 구별', icon: '🔄', stage: 3, verbCategory: '중간수동', vocabRange: [150, 180] as [number, number] },
      { id: 'g3-u7', title: '접속법 & 부정사', description: '접속법과 부정사 형태', icon: '❓', stage: 3, verbCategory: '접속법', vocabRange: [180, 210] as [number, number] },
      { id: 'g3-u8', title: '명령법 & 중급 어휘', description: '명령법 + 빈도 50-150 어휘', icon: '👆', stage: 3, verbCategory: '명령법', vocabRange: [210, 300] as [number, number] },
    ] satisfies UnitMeta[],
  },
  {
    id: 4,
    title: '고급 문법',
    description: '분사 심화, 조건문, μι동사, 관계절, 불규칙동사',
    units: [
      { id: 'g4-u1', title: '분사 형태 & 어휘', description: '분사 + 고급 어휘', icon: '🏛️', stage: 4, verbCategory: '분사', vocabRange: [300, 330] as [number, number] },
      { id: 'g4-u2', title: '분사 용법', description: '부사적/형용사적/명사화', icon: '🏛️', stage: 4, verbCategory: '분사용법', vocabRange: [330, 360] as [number, number] },
      { id: 'g4-u3', title: 'μι 동사', description: 'δίδωμι, τίθημι, ἵστημι', icon: '🔧', stage: 4, verbCategory: 'μι동사', vocabRange: [360, 380] as [number, number] },
      { id: 'g4-u4', title: '조건문 & 관계절', description: '조건문, 관계대명사', icon: '🔀', stage: 4, verbCategory: '조건문', vocabRange: [380, 400] as [number, number] },
      { id: 'g4-u5', title: '불규칙동사 & 고급구문', description: '불규칙동사, 속격절대', icon: '⚠️', stage: 4, verbCategory: '불규칙', vocabRange: [400, 500] as [number, number] },
    ] satisfies UnitMeta[],
  },
  {
    id: 5,
    title: '원전 읽기',
    description: '신약, 칠십인역, 요세푸스 등 원전 단어별 파싱',
    units: [
      // 요한복음 — 본문 + 본문 어휘/파싱
      { id: 'g5-u1', title: '요한복음 1장', description: '로고스 찬가 (1:1-18)', icon: '📜', stage: 5, dataKey: 'john', vocabRange: [0, 30] as [number, number], verbCategory: '현재' },
      { id: 'g5-u2', title: '요한복음 3장', description: '니고데모 대화 (3:1-21)', icon: '📜', stage: 5, dataKey: 'john3', vocabRange: [30, 60] as [number, number] },
      { id: 'g5-u3', title: '요한복음 4장', description: '사마리아 여인 (4:1-26)', icon: '📜', stage: 5, dataKey: 'john4' },
      // 마가복음
      { id: 'g5-u4', title: '마가복음 1장', description: '세례 요한과 예수 (1:1-15)', icon: '📖', stage: 5, dataKey: 'mark', verbCategory: '부정과거' },
      { id: 'g5-u5', title: '마가복음 2장', description: '중풍병자 (2:1-12)', icon: '📖', stage: 5, dataKey: 'mark2' },
      // 바울 서신
      { id: 'g5-u6', title: '로마서 1장', description: '복음의 능력 (1:1-17)', icon: '📨', stage: 5, dataKey: 'romans1' },
      { id: 'g5-u7', title: '로마서 8장', description: '성령의 삶 (8:1-17, 28-39)', icon: '📨', stage: 5, dataKey: 'romans8' },
      { id: 'g5-u8', title: '빌립보서 2장', description: '그리스도 찬가 (2:1-11)', icon: '🎵', stage: 5, dataKey: 'philippians' },
      { id: 'g5-u9', title: '히브리서 1장', description: '아들의 탁월함 (1:1-14)', icon: '👑', stage: 5, dataKey: 'hebrews' },
      { id: 'g5-u10', title: '요한1서 1-2장', description: '빛 가운데 행함', icon: '💡', stage: 5, dataKey: 'firstJohn' },
      // LXX
      { id: 'g5-u11', title: 'LXX 창세기 1장', description: '천지창조 (1:1-13)', icon: '🌍', stage: 5, dataKey: 'genesis-lxx' },
      { id: 'g5-u12', title: 'LXX 창세기 2-3장', description: '에덴동산 (2:4-3:24)', icon: '🌍', stage: 5, dataKey: 'genesis-lxx-2' },
      { id: 'g5-u13', title: 'LXX 룻기 1장', description: '룻의 고백 (1:1-22)', icon: '🌾', stage: 5, dataKey: 'ruth-lxx' },
      { id: 'g5-u14', title: 'LXX 요나 1-2장', description: '요나의 도주 (1:1-2:11)', icon: '🐋', stage: 5, dataKey: 'jonah-lxx' },
      // 요세푸스
      { id: 'g5-u15', title: '요세푸스: 유대전쟁사', description: '서론과 예루살렘 함락', icon: '⚔️', stage: 5, dataKey: 'josephus-war' },
      { id: 'g5-u16', title: '요세푸스: 유대고대사', description: 'Testimonium Flavianum', icon: '📚', stage: 5, dataKey: 'josephus-ant' },
      // 교부
      { id: 'g5-u17', title: '디다케', description: '두 길 (1:1-6:3)', icon: '⛪', stage: 5, dataKey: 'didache' },
      // 갈라디아서 & 고린도전서
      { id: 'g5-u18', title: '갈라디아서 2장', description: '바울의 복음 변호 (2:15-21)', icon: '📨', stage: 5, dataKey: 'galatians' },
      { id: 'g5-u19', title: '고린도전서 13장', description: '사랑의 장 (13:1-13)', icon: '❤️', stage: 5, dataKey: 'corinthians' },
      // 고전 철학
      { id: 'g5-u20', title: '플라톤', description: '변론, 파이돈, 국가, 향연, 티마이오스', icon: '🏺', stage: 5, dataKey: 'plato' },
      { id: 'g5-u21', title: '아리스토텔레스', description: '영혼론, 정치학, 니코마코스 윤리학, 형이상학', icon: '📐', stage: 5, dataKey: 'aristotle' },
    ] satisfies UnitMeta[],
  },
];
