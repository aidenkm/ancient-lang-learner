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

  // Stage 4: 고급 문법 (5문항)
  {
    id: 'hp-4-1', stage: 4, type: 'grammar',
    question: '스미쿳(연계형)이란?',
    options: [
      '두 명사가 결합하여 소유/관계를 나타내는 구문',
      '동사의 부정형',
      '형용사의 비교급',
      '부사의 강조형',
    ],
    correctAnswer: '두 명사가 결합하여 소유/관계를 나타내는 구문',
  },
  {
    id: 'hp-4-2', stage: 4, type: 'translation',
    question: 'דְּבַר יְהוָה의 뜻은?',
    options: ['여호와의 말씀', '여호와의 땅', '여호와의 백성', '여호와의 집'],
    correctAnswer: '여호와의 말씀',
  },
  {
    id: 'hp-4-3', stage: 4, type: 'reading',
    question: '히브리 시에서 평행법(parallelism)이란?',
    options: [
      '같은 생각을 두 줄로 반복/대조하는 기법',
      '운율을 맞추는 기법',
      '알파벳 순서로 쓰는 기법',
      '반복되는 후렴구',
    ],
    correctAnswer: '같은 생각을 두 줄로 반복/대조하는 기법',
  },
  {
    id: 'hp-4-4', stage: 4, type: 'grammar',
    question: '접미 대명사 -וֹ는?',
    options: ['그의/그를 (3남단)', '나의/나를', '너의/너를', '그녀의'],
    correctAnswer: '그의/그를 (3남단)',
  },
  {
    id: 'hp-4-5', stage: 4, type: 'reading',
    question: '구약에서 아람어로 쓰인 부분이 있는 책은?',
    options: ['다니엘서', '출애굽기', '시편', '잠언'],
    correctAnswer: '다니엘서',
  },

  // Stage 5: 원전 읽기 (5문항)
  {
    id: 'hp-5-1', stage: 5, type: 'translation',
    question: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים의 뜻은?',
    options: ['태초에 하나님이 창조하셨다', '하나님이 말씀하셨다', '처음에 빛이 있었다', '하나님이 쉬셨다'],
    correctAnswer: '태초에 하나님이 창조하셨다',
  },
  {
    id: 'hp-5-2', stage: 5, type: 'reading',
    question: 'אֵת의 기능은?',
    options: ['확정 직접목적어 표지', '전치사 "~에게"', '관사', '접속사'],
    correctAnswer: '확정 직접목적어 표지',
  },
  {
    id: 'hp-5-3', stage: 5, type: 'translation',
    question: 'יְהוָה רֹעִי לֹא אֶחְסָר (시편 23:1)',
    options: [
      '여호와는 나의 목자시니 내게 부족함이 없으리로다',
      '여호와가 나를 부르신다',
      '여호와가 나의 왕이시다',
      '여호와를 찬양하라',
    ],
    correctAnswer: '여호와는 나의 목자시니 내게 부족함이 없으리로다',
  },
  {
    id: 'hp-5-4', stage: 5, type: 'reading',
    question: '미쉬나란?',
    options: [
      '랍비 유다가 편집한 구전 율법 모음집',
      '구약 성서의 다른 이름',
      '유대교 기도서',
      '탈무드의 저자',
    ],
    correctAnswer: '랍비 유다가 편집한 구전 율법 모음집',
  },
  {
    id: 'hp-5-5', stage: 5, type: 'translation',
    question: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד의 뜻은?',
    options: [
      '이스라엘아 들으라, 여호와 우리 하나님은 오직 유일한 여호와시니라',
      '이스라엘이 하나님을 찬양한다',
      '하나님이 이스라엘을 택하셨다',
      '이스라엘은 하나님의 백성이다',
    ],
    correctAnswer: '이스라엘아 들으라, 여호와 우리 하나님은 오직 유일한 여호와시니라',
  },
];
