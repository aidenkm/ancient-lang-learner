import { PlacementQuestion } from '../../types';

export const hebrewPlacementQuestions: PlacementQuestion[] = [
  // Stage 1: 알파벳 (5문항)
  {
    id: 'hp-1-1', stage: 1, type: 'letterIdentify',
    question: '히브리어 알파벳의 첫 글자는?',
    options: ['א', 'ב', 'ג', 'ד'],
    correctAnswer: 'א',
  },
  {
    id: 'hp-1-2', stage: 1, type: 'letterIdentify',
    question: '히브리어는 어느 방향으로 읽나요?',
    options: ['오른쪽에서 왼쪽', '왼쪽에서 오른쪽', '위에서 아래', '아래에서 위'],
    correctAnswer: '오른쪽에서 왼쪽',
  },
  {
    id: 'hp-1-3', stage: 1, type: 'letterIdentify',
    question: '어말 형태(소핏)를 가진 문자가 아닌 것은?',
    options: ['ד', 'כ', 'מ', 'נ'],
    correctAnswer: 'ד',
  },
  {
    id: 'hp-1-4', stage: 1, type: 'letterIdentify',
    question: '파타흐(ַ)는 어떤 소리?',
    options: ['a', 'e', 'i', 'u'],
    correctAnswer: 'a',
  },
  {
    id: 'hp-1-5', stage: 1, type: 'letterIdentify',
    question: 'שׁ(신/쉰)의 소리는?',
    options: ['sh', 'ch', 'th', 'ts'],
    correctAnswer: 'sh',
  },

  // Stage 2: 기초 문법 (5문항)
  {
    id: 'hp-2-1', stage: 2, type: 'vocabulary',
    question: 'אֱלֹהִים의 뜻은?',
    options: ['하나님', '천사', '선지자', '왕'],
    correctAnswer: '하나님',
  },
  {
    id: 'hp-2-2', stage: 2, type: 'grammar',
    question: '히브리어 정관사는?',
    options: ['הַ', 'אֶת', 'כִּי', 'עַל'],
    correctAnswer: 'הַ',
  },
  {
    id: 'hp-2-3', stage: 2, type: 'vocabulary',
    question: 'מֶלֶךְ의 뜻은?',
    options: ['왕', '땅', '하늘', '물'],
    correctAnswer: '왕',
  },
  {
    id: 'hp-2-4', stage: 2, type: 'grammar',
    question: 'כָּתַב는 어떤 형태인가?',
    options: ['칼 완료 3남단', '칼 미완료', '니팔 완료', '피엘 완료'],
    correctAnswer: '칼 완료 3남단',
  },
  {
    id: 'hp-2-5', stage: 2, type: 'translation',
    question: 'שָׁמַר의 뜻은?',
    options: ['지키다', '쓰다', '먹다', '가다'],
    correctAnswer: '지키다',
  },

  // Stage 3: 중급 문법 (5문항)
  {
    id: 'hp-3-1', stage: 3, type: 'grammar',
    question: '히브리어 동사 빈야님은 몇 개?',
    options: ['7개', '3개', '5개', '10개'],
    correctAnswer: '7개',
  },
  {
    id: 'hp-3-2', stage: 3, type: 'grammar',
    question: 'Niphal의 주요 의미는?',
    options: ['수동/재귀', '사역', '강의', '기본'],
    correctAnswer: '수동/재귀',
  },
  {
    id: 'hp-3-3', stage: 3, type: 'grammar',
    question: 'Hiphil은 어떤 의미?',
    options: ['사역 (~하게 하다)', '수동', '재귀', '기본형'],
    correctAnswer: '사역 (~하게 하다)',
  },
  {
    id: 'hp-3-4', stage: 3, type: 'grammar',
    question: '와우 연속법이란?',
    options: [
      'ו가 동사 시제 의미를 전환하는 구문',
      '두 명사를 연결하는 접속사',
      '목적어를 표시하는 입자',
      '관계절을 이끄는 대명사',
    ],
    correctAnswer: 'ו가 동사 시제 의미를 전환하는 구문',
  },
  {
    id: 'hp-3-5', stage: 3, type: 'translation',
    question: 'וַיֹּאמֶר의 뜻은?',
    options: ['그리고 그가 말했다', '그가 말한다', '그가 말할 것이다', '말하라'],
    correctAnswer: '그리고 그가 말했다',
  },

  // Stage 4: 고급 문법 파싱 (5문항)
  {
    id: 'hp-4-1', stage: 4, type: 'grammar',
    question: 'נִשְׁמַר를 파싱하면?',
    options: ['니팔 완료 3남단 (שׁמר)', '칼 완료 3남단 (שׁמר)', '피엘 완료 3남단 (שׁמר)', '히트파엘 완료 3남단 (שׁמר)'],
    correctAnswer: '니팔 완료 3남단 (שׁמר)',
  },
  {
    id: 'hp-4-2', stage: 4, type: 'grammar',
    question: 'דְּבַר יְהוָה에서 דְּבַר의 형태는?',
    options: ['דָּבָר의 연계형(construct)', 'דָּבָר의 절대형(absolute)', 'דָּבָר의 복수형', 'דָּבָר의 접미형'],
    correctAnswer: 'דָּבָר의 연계형(construct)',
  },
  {
    id: 'hp-4-3', stage: 4, type: 'grammar',
    question: 'וַיֹּאמֶר를 파싱하면?',
    options: ['칼 와이이크톨 3남단 (אמר)', '칼 미완료 3남단 (אמר)', '니팔 와이이크톨 3남단 (אמר)', '히필 와이이크톨 3남단 (אמר)'],
    correctAnswer: '칼 와이이크톨 3남단 (אמר)',
  },
  {
    id: 'hp-4-4', stage: 4, type: 'grammar',
    question: 'סוּסוֹ에서 접미사 -וֹ는?',
    options: ['그의 (3남단 접미 대명사)', '나의 (1공단 접미 대명사)', '너의 (2남단 접미 대명사)', '그녀의 (3여단 접미 대명사)'],
    correctAnswer: '그의 (3남단 접미 대명사)',
  },
  {
    id: 'hp-4-5', stage: 4, type: 'grammar',
    question: 'הִשְׁמִיד를 파싱하면?',
    options: ['히필 완료 3남단 (שׁמד)', '칼 완료 3남단 (שׁמד)', '니팔 완료 3남단 (שׁמד)', '피엘 완료 3남단 (שׁמד)'],
    correctAnswer: '히필 완료 3남단 (שׁמד)',
  },

  // Stage 5: 원전 단어 파싱 (5문항)
  {
    id: 'hp-5-1', stage: 5, type: 'grammar',
    question: '창세기 1:1의 בָּרָא를 파싱하면?',
    options: ['칼 완료 3남단 (ברא)', '칼 미완료 3남단 (ברא)', '니팔 완료 3남단 (ברא)', '피엘 완료 3남단 (ברא)'],
    correctAnswer: '칼 완료 3남단 (ברא)',
  },
  {
    id: 'hp-5-2', stage: 5, type: 'grammar',
    question: '창세기 1:4의 וַיַּבְדֵּל을 파싱하면?',
    options: ['히필 와이이크톨 3남단 (בדל)', '칼 와이이크톨 3남단 (בדל)', '니팔 와이이크톨 3남단 (בדל)', '피엘 와이이크톨 3남단 (בדל)'],
    correctAnswer: '히필 와이이크톨 3남단 (בדל)',
  },
  {
    id: 'hp-5-3', stage: 5, type: 'translation',
    question: '시편 23:1의 רֹעִי를 번역하면?',
    options: ['나의 목자 (분사 + 1공단 접미사)', '목자들', '그의 목자', '목자에게'],
    correctAnswer: '나의 목자 (분사 + 1공단 접미사)',
  },
  {
    id: 'hp-5-4', stage: 5, type: 'grammar',
    question: '신명기 6:5의 וְאָהַבְתָּ를 파싱하면?',
    options: ['칼 베카탈 2남단 (אהב)', '칼 완료 2남단 (אהב)', '피엘 완료 2남단 (אהב)', '칼 미완료 2남단 (אהב)'],
    correctAnswer: '칼 베카탈 2남단 (אהב)',
  },
  {
    id: 'hp-5-5', stage: 5, type: 'grammar',
    question: '시편 23:2의 יַרְבִּיצֵנִי를 파싱하면?',
    options: ['히필 미완료 3남단 + 1공단 접미사 (רבץ)', '칼 미완료 3남단 + 1공단 접미사 (רבץ)', '피엘 미완료 3남단 + 1공단 접미사 (רבץ)', '히필 완료 3남단 + 1공단 접미사 (רבץ)'],
    correctAnswer: '히필 미완료 3남단 + 1공단 접미사 (רבץ)',
  },

  // Stage 1 추가 (3문항)
  {
    id: 'hp-1-6', stage: 1, type: 'letterIdentify',
    question: 'בגד כפת 문자의 특징은?',
    options: ['다게쉬에 따라 발음이 달라진다', '어말 형태가 있다', '항상 모음이 따라온다', '자음이 아닌 모음이다'],
    correctAnswer: '다게쉬에 따라 발음이 달라진다',
  },
  {
    id: 'hp-1-7', stage: 1, type: 'letterIdentify',
    question: '히브리어 모음 쩨레(ֵ)는 어떤 소리?',
    options: ['e', 'a', 'o', 'u'],
    correctAnswer: 'e',
  },
  {
    id: 'hp-1-8', stage: 1, type: 'letterIdentify',
    question: '후음 문자(guttural)에 해당하지 않는 것은?',
    options: ['ד', 'א', 'ה', 'ע'],
    correctAnswer: 'ד',
  },

  // Stage 2 추가 (3문항)
  {
    id: 'hp-2-6', stage: 2, type: 'vocabulary',
    question: 'דָּבָר의 뜻은?',
    options: ['말씀/일', '땅', '물', '집'],
    correctAnswer: '말씀/일',
  },
  {
    id: 'hp-2-7', stage: 2, type: 'grammar',
    question: 'כָּתְבוּ의 인칭과 수는?',
    options: ['3공복 (그들이 썼다)', '3남단 (그가 썼다)', '2남복 (너희가 썼다)', '1공복 (우리가 썼다)'],
    correctAnswer: '3공복 (그들이 썼다)',
  },
  {
    id: 'hp-2-8', stage: 2, type: 'vocabulary',
    question: 'אֶרֶץ의 뜻은?',
    options: ['땅/나라', '하늘', '바다', '산'],
    correctAnswer: '땅/나라',
  },

  // Stage 3 추가 (3문항)
  {
    id: 'hp-3-6', stage: 3, type: 'grammar',
    question: 'Piel의 주요 의미는?',
    options: ['강의(intensive)/사역', '수동', '재귀', '기본형'],
    correctAnswer: '강의(intensive)/사역',
  },
  {
    id: 'hp-3-7', stage: 3, type: 'grammar',
    question: 'Hithpael의 주요 의미는?',
    options: ['재귀', '사역', '수동', '기본형'],
    correctAnswer: '재귀',
  },
  {
    id: 'hp-3-8', stage: 3, type: 'grammar',
    question: '분사(participle)는 히브리어에서 어떤 기능?',
    options: ['동사적 형용사 (현재 진행/지속적 행동)', '과거 완료 동작', '명령적 동작', '미래 확정적 동작'],
    correctAnswer: '동사적 형용사 (현재 진행/지속적 행동)',
  },

  // Stage 4 추가 (3문항)
  {
    id: 'hp-4-6', stage: 4, type: 'grammar',
    question: 'הִתְקַדֵּשׁ를 파싱하면?',
    options: ['히트파엘 완료 3남단 (קדשׁ)', '피엘 완료 3남단 (קדשׁ)', '칼 완료 3남단 (קדשׁ)', '니팔 완료 3남단 (קדשׁ)'],
    correctAnswer: '히트파엘 완료 3남단 (קדשׁ)',
  },
  {
    id: 'hp-4-7', stage: 4, type: 'grammar',
    question: 'מַלְכֵי הָאָרֶץ에서 מַלְכֵי의 형태는?',
    options: ['מֶלֶךְ의 복수 연계형', 'מֶלֶךְ의 단수 연계형', 'מֶלֶךְ의 복수 절대형', 'מֶלֶךְ의 단수 접미형'],
    correctAnswer: 'מֶלֶךְ의 복수 연계형',
  },
  {
    id: 'hp-4-8', stage: 4, type: 'grammar',
    question: 'שָׁמְרָה의 주어 인칭은?',
    options: ['3여단 (그녀가 지켰다)', '3남단 (그가 지켰다)', '2여단 (네가 지켰다)', '1공단 (내가 지켰다)'],
    correctAnswer: '3여단 (그녀가 지켰다)',
  },

  // Stage 5 추가 (3문항)
  {
    id: 'hp-5-6', stage: 5, type: 'reading',
    question: '창세기 1:2의 מְרַחֶפֶת를 파싱하면?',
    options: ['피엘 분사 여단 (רחף)', '칼 분사 여단 (רחף)', '히필 분사 여단 (רחף)', '니팔 분사 여단 (רחף)'],
    correctAnswer: '피엘 분사 여단 (רחף)',
  },
  {
    id: 'hp-5-7', stage: 5, type: 'reading',
    question: '이사야 53:5의 מְחֹלָל에서의 빈얀과 의미는?',
    options: ['폴알(Polal) 분사 — 찔림을 당한', '칼 분사 — 찌르는', '피엘 분사 — 찌르는', '니팔 분사 — 찔린'],
    correctAnswer: '폴알(Polal) 분사 — 찔림을 당한',
  },
  {
    id: 'hp-5-8', stage: 5, type: 'reading',
    question: '시편 110:1의 נְאֻם יְהוָה לַאדֹנִי에서 לַאדֹנִי의 의미는?',
    options: ['나의 주에게 (전치사 ל + אָדוֹן + 1공단 접미사)', '주님으로부터', '주님 안에서', '주님의 것'],
    correctAnswer: '나의 주에게 (전치사 ל + אָדוֹן + 1공단 접미사)',
  },
];
