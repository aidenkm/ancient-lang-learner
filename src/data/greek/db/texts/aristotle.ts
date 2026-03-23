import { VerseData } from '../../../../types';

export const aristotleTexts: VerseData[] = [
  // ===== De Anima (On the Soul) =====
  {
    ref: 'Aristotle, De Anima 412a27',
    text: 'ψυχή ἐστιν ἐντελέχεια ἡ πρώτη σώματος φυσικοῦ ὀργανικοῦ',
    translation: '영혼은 도구를 갖춘 자연적 몸체의 제일 현실태이다',
    words: [
      { word: 'ψυχή', gloss: '영혼은', parsing: '여성 주격 단수', root: 'ψυχή' },
      { word: 'ἐστιν', gloss: '이다', parsing: '현재 직설법 3인칭 단수', root: 'εἰμί' },
      { word: 'ἐντελέχεια', gloss: '현실태', parsing: '여성 주격 단수', root: 'ἐντελέχεια' },
      { word: 'ἡ', gloss: '그', parsing: '여성 주격 단수 관사' },
      { word: 'πρώτη', gloss: '첫째의/제일의', parsing: '여성 주격 단수 형용사', root: 'πρῶτος' },
      { word: 'σώματος', gloss: '몸체의', parsing: '중성 속격 단수', root: 'σῶμα' },
      { word: 'φυσικοῦ', gloss: '자연적인', parsing: '중성 속격 단수 형용사', root: 'φυσικός' },
      { word: 'ὀργανικοῦ', gloss: '도구를 갖춘', parsing: '중성 속격 단수 형용사', root: 'ὀργανικός' },
    ],
  },
  {
    ref: 'Aristotle, De Anima 429a18',
    text: 'ὁ ἄρα νοῦς ἐστι πάντα δυνάμει τὰ νοητά',
    translation: '그러므로 이성은 가능태에서 모든 사유 가능한 것들이다',
    words: [
      { word: 'ὁ', gloss: '그', parsing: '남성 주격 단수 관사' },
      { word: 'ἄρα', gloss: '그러므로', parsing: '불변화사' },
      { word: 'νοῦς', gloss: '이성/정신', parsing: '남성 주격 단수', root: 'νοῦς' },
      { word: 'ἐστι', gloss: '이다', parsing: '현재 직설법 3인칭 단수', root: 'εἰμί' },
      { word: 'πάντα', gloss: '모든', parsing: '중성 주격 복수', root: 'πᾶς' },
      { word: 'δυνάμει', gloss: '가능태에서', parsing: '여성 여격 단수', root: 'δύναμις' },
      { word: 'τά', gloss: '그', parsing: '중성 주격 복수 관사' },
      { word: 'νοητά', gloss: '사유 가능한 것들', parsing: '중성 주격 복수 형용사', root: 'νοητός' },
    ],
  },
  // ===== Politics =====
  {
    ref: 'Aristotle, Politics 1253a2',
    text: 'ὁ ἄνθρωπος φύσει πολιτικὸν ζῷον',
    translation: '인간은 본성적으로 정치적 동물이다',
    words: [
      { word: 'ὁ', gloss: '그', parsing: '남성 주격 단수 관사' },
      { word: 'ἄνθρωπος', gloss: '인간은', parsing: '남성 주격 단수', root: 'ἄνθρωπος' },
      { word: 'φύσει', gloss: '본성적으로', parsing: '여성 여격 단수 (부사적)', root: 'φύσις' },
      { word: 'πολιτικόν', gloss: '정치적인', parsing: '중성 주격 단수 형용사', root: 'πολιτικός' },
      { word: 'ζῷον', gloss: '동물', parsing: '중성 주격 단수', root: 'ζῷον' },
    ],
  },
  {
    ref: 'Aristotle, Politics 1253a9',
    text: 'λόγον δὲ μόνον ἄνθρωπος ἔχει τῶν ζῴων',
    translation: '동물들 중에 인간만이 로고스(이성적 언어)를 가지고 있다',
    words: [
      { word: 'λόγον', gloss: '로고스/이성적 언어를', parsing: '남성 대격 단수', root: 'λόγος' },
      { word: 'δέ', gloss: '그런데', parsing: '접속 불변화사' },
      { word: 'μόνον', gloss: '오직/유일하게', parsing: '부사', root: 'μόνος' },
      { word: 'ἄνθρωπος', gloss: '인간이', parsing: '남성 주격 단수', root: 'ἄνθρωπος' },
      { word: 'ἔχει', gloss: '가지다', parsing: '현재 능동 직설법 3인칭 단수', root: 'ἔχω' },
      { word: 'τῶν', gloss: '그', parsing: '중성 속격 복수 관사' },
      { word: 'ζῴων', gloss: '동물들 중에', parsing: '중성 속격 복수 (부분의 속격)', root: 'ζῷον' },
    ],
  },
  // ===== Nicomachean Ethics =====
  {
    ref: 'Aristotle, Nicomachean Ethics 1094a1',
    text: 'πᾶσα τέχνη καὶ πᾶσα μέθοδος, ὁμοίως δὲ πρᾶξίς τε καὶ προαίρεσις, ἀγαθοῦ τινὸς ἐφίεσθαι δοκεῖ',
    translation: '모든 기술과 모든 탐구, 마찬가지로 모든 행위와 선택은 어떤 선을 목표로 하는 것으로 보인다',
    words: [
      { word: 'πᾶσα', gloss: '모든', parsing: '여성 주격 단수', root: 'πᾶς' },
      { word: 'τέχνη', gloss: '기술은', parsing: '여성 주격 단수', root: 'τέχνη' },
      { word: 'καί', gloss: '그리고', parsing: '접속사' },
      { word: 'πᾶσα', gloss: '모든', parsing: '여성 주격 단수', root: 'πᾶς' },
      { word: 'μέθοδος', gloss: '탐구는', parsing: '여성 주격 단수', root: 'μέθοδος' },
      { word: 'ὁμοίως', gloss: '마찬가지로', parsing: '부사', root: 'ὅμοιος' },
      { word: 'δέ', gloss: '그리고', parsing: '접속 불변화사' },
      { word: 'πρᾶξίς', gloss: '행위는', parsing: '여성 주격 단수', root: 'πρᾶξις' },
      { word: 'τε', gloss: '~과', parsing: '접속 불변화사' },
      { word: 'καί', gloss: '그리고', parsing: '접속사' },
      { word: 'προαίρεσις', gloss: '선택은', parsing: '여성 주격 단수', root: 'προαίρεσις' },
      { word: 'ἀγαθοῦ', gloss: '선의', parsing: '중성 속격 단수 형용사 (명사화)', root: 'ἀγαθός' },
      { word: 'τινός', gloss: '어떤', parsing: '중성 속격 단수 부정대명사', root: 'τις' },
      { word: 'ἐφίεσθαι', gloss: '목표로 하다/열망하다', parsing: '현재 중간 부정사', root: 'ἐφίημι' },
      { word: 'δοκεῖ', gloss: '보인다/생각된다', parsing: '현재 능동 직설법 3인칭 단수', root: 'δοκέω' },
    ],
  },
  {
    ref: 'Aristotle, Nicomachean Ethics 1098a16',
    text: 'τὸ ἀνθρώπινον ἀγαθὸν ψυχῆς ἐνέργεια γίνεται κατ᾽ ἀρετήν',
    translation: '인간의 선은 덕에 따른 영혼의 활동이 된다',
    words: [
      { word: 'τό', gloss: '그', parsing: '중성 주격 단수 관사' },
      { word: 'ἀνθρώπινον', gloss: '인간의', parsing: '중성 주격 단수 형용사', root: 'ἀνθρώπινος' },
      { word: 'ἀγαθόν', gloss: '선은', parsing: '중성 주격 단수 형용사 (명사화)', root: 'ἀγαθός' },
      { word: 'ψυχῆς', gloss: '영혼의', parsing: '여성 속격 단수', root: 'ψυχή' },
      { word: 'ἐνέργεια', gloss: '활동', parsing: '여성 주격 단수', root: 'ἐνέργεια' },
      { word: 'γίνεται', gloss: '되다', parsing: '현재 중간 직설법 3인칭 단수', root: 'γίνομαι' },
      { word: 'κατ᾽', gloss: '~에 따라', parsing: '전치사 (+대격)', root: 'κατά' },
      { word: 'ἀρετήν', gloss: '덕을', parsing: '여성 대격 단수', root: 'ἀρετή' },
    ],
  },
  // ===== Metaphysics =====
  {
    ref: 'Aristotle, Metaphysics 980a21',
    text: 'πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει',
    translation: '모든 인간은 본성적으로 앎을 열망한다',
    words: [
      { word: 'πάντες', gloss: '모든', parsing: '남성 주격 복수', root: 'πᾶς' },
      { word: 'ἄνθρωποι', gloss: '인간들은', parsing: '남성 주격 복수', root: 'ἄνθρωπος' },
      { word: 'τοῦ', gloss: '그', parsing: '중성 속격 단수 관사 (관사적 부정사)' },
      { word: 'εἰδέναι', gloss: '아는 것을', parsing: '완료 능동 부정사', root: 'οἶδα' },
      { word: 'ὀρέγονται', gloss: '열망하다', parsing: '현재 중간 직설법 3인칭 복수', root: 'ὀρέγω' },
      { word: 'φύσει', gloss: '본성적으로', parsing: '여성 여격 단수 (부사적)', root: 'φύσις' },
    ],
  },
];
