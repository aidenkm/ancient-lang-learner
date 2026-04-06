import { VerseData } from '../../../../types';

/**
 * Psalm 121:1-8 — 산을 향하여 눈을 들리라
 * Word-by-word parsing (BHS/Leningrad Codex)
 * Korean glosses and translations.
 */
export const psalm121Texts: VerseData[] = [
  // ===== Psalm 121:1 =====
  {
    ref: 'Ps 121:1',
    text: 'שִׁיר לַמַּעֲלוֹת אֶשָּׂא עֵינַי אֶל־הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי',
    translation: '올라가는 노래. 내가 산을 향하여 눈을 들리라. 나의 도움이 어디서 올까',
    words: [
      { word: 'שִׁיר', gloss: '노래', parsing: '남성 단수 명사 (연계형)', root: 'שׁיר' },
      { word: 'לַמַּעֲלוֹת', gloss: '올라감의', parsing: '전치사 ל + 정관사 + 여성 복수 명사', root: 'מעלה' },
      { word: 'אֶשָּׂא', gloss: '내가 들리라', parsing: '칼 미완료 1인칭 단수', root: 'נשׂא' },
      { word: 'עֵינַי', gloss: '나의 눈을', parsing: '여성 쌍수 명사 + 1단 접미사', root: 'עין' },
      { word: 'אֶל־הֶהָרִים', gloss: '산들을 향하여', parsing: '전치사 + 정관사 + 남성 복수 명사', root: 'הר' },
      { word: 'מֵאַיִן', gloss: '어디서', parsing: '전치사 מן + 의문 부사' },
      { word: 'יָבֹא', gloss: '올까', parsing: '칼 미완료 3인칭 남성 단수', root: 'בוא' },
      { word: 'עֶזְרִי', gloss: '나의 도움', parsing: '남성 명사 + 1단 접미사', root: 'עזר' },
    ],
  },
  // ===== Psalm 121:2 =====
  {
    ref: 'Ps 121:2',
    text: 'עֶזְרִי מֵעִם יְהוָה עֹשֵׂה שָׁמַיִם וָאָרֶץ',
    translation: '나의 도움은 하늘과 땅을 만드신 여호와에게서 오는도다',
    words: [
      { word: 'עֶזְרִי', gloss: '나의 도움', parsing: '남성 명사 + 1단 접미사', root: 'עזר' },
      { word: 'מֵעִם', gloss: '~에게서', parsing: '전치사 מן + 전치사 עם' },
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유 명사' },
      { word: 'עֹשֵׂה', gloss: '만드신', parsing: '칼 분사 남성 단수', root: 'עשׂה' },
      { word: 'שָׁמַיִם', gloss: '하늘', parsing: '남성 복수 명사' },
      { word: 'וָאָרֶץ', gloss: '그리고 땅', parsing: '접속사 + 여성 단수 명사', root: 'ארץ' },
    ],
  },
  // ===== Psalm 121:3 =====
  {
    ref: 'Ps 121:3',
    text: 'אַל־יִתֵּן לַמּוֹט רַגְלֶךָ אַל־יָנוּם שֹׁמְרֶךָ',
    translation: '그가 네 발이 흔들리지 않게 하시며 너를 지키시는 분이 졸지 아니하시리로다',
    words: [
      { word: 'אַל', gloss: '~하지 않기를', parsing: '부정 부사 (금지/소원)' },
      { word: 'יִתֵּן', gloss: '허락하다', parsing: '칼 미완료 3인칭 남성 단수', root: 'נתן' },
      { word: 'לַמּוֹט', gloss: '흔들림에', parsing: '전치사 ל + 칼 부정사 연계형', root: 'מוט' },
      { word: 'רַגְלֶךָ', gloss: '네 발', parsing: '여성 명사 + 2남단 접미사', root: 'רגל' },
      { word: 'אַל', gloss: '~하지 않기를', parsing: '부정 부사' },
      { word: 'יָנוּם', gloss: '졸다', parsing: '칼 미완료 3인칭 남성 단수', root: 'נום' },
      { word: 'שֹׁמְרֶךָ', gloss: '너를 지키시는 분', parsing: '칼 분사 남성 단수 + 2남단 접미사', root: 'שׁמר' },
    ],
  },
  // ===== Psalm 121:4 =====
  {
    ref: 'Ps 121:4',
    text: 'הִנֵּה לֹא־יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל',
    translation: '보라, 이스라엘을 지키시는 분은 졸지도 아니하시고 주무시지도 아니하시리로다',
    words: [
      { word: 'הִנֵּה', gloss: '보라', parsing: '감탄 불변사' },
      { word: 'לֹא', gloss: '~아니', parsing: '부정 부사' },
      { word: 'יָנוּם', gloss: '졸다', parsing: '칼 미완료 3인칭 남성 단수', root: 'נום' },
      { word: 'וְלֹא', gloss: '그리고 ~아니', parsing: '접속사 + 부정 부사' },
      { word: 'יִישָׁן', gloss: '주무시다', parsing: '칼 미완료 3인칭 남성 단수', root: 'ישׁן' },
      { word: 'שׁוֹמֵר', gloss: '지키시는 분', parsing: '칼 분사 남성 단수 (연계형)', root: 'שׁמר' },
      { word: 'יִשְׂרָאֵל', gloss: '이스라엘', parsing: '고유 명사' },
    ],
  },
  // ===== Psalm 121:5 =====
  {
    ref: 'Ps 121:5',
    text: 'יְהוָה שֹׁמְרֶךָ יְהוָה צִלְּךָ עַל־יַד יְמִינֶךָ',
    translation: '여호와는 너를 지키시는 분이시라, 여호와께서 네 오른쪽에서 네 그늘이 되시나니',
    words: [
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유 명사' },
      { word: 'שֹׁמְרֶךָ', gloss: '너를 지키시는 분', parsing: '칼 분사 남성 단수 + 2남단 접미사', root: 'שׁמר' },
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유 명사' },
      { word: 'צִלְּךָ', gloss: '네 그늘', parsing: '남성 명사 + 2남단 접미사', root: 'צל' },
      { word: 'עַל־יַד', gloss: '~곁에', parsing: '전치사 + 여성 명사', root: 'יד' },
      { word: 'יְמִינֶךָ', gloss: '네 오른쪽', parsing: '여성 명사 + 2남단 접미사', root: 'ימין' },
    ],
  },
  // ===== Psalm 121:6 =====
  {
    ref: 'Ps 121:6',
    text: 'יוֹמָם הַשֶּׁמֶשׁ לֹא־יַכֶּכָּה וְיָרֵחַ בַּלָּיְלָה',
    translation: '낮에는 해가 너를 상하게 하지 아니하며 밤에는 달도 너를 해치지 아니하리로다',
    words: [
      { word: 'יוֹמָם', gloss: '낮에', parsing: '부사', root: 'יום' },
      { word: 'הַשֶּׁמֶשׁ', gloss: '해가', parsing: '정관사 + 남/여 명사', root: 'שׁמשׁ' },
      { word: 'לֹא', gloss: '~아니', parsing: '부정 부사' },
      { word: 'יַכֶּכָּה', gloss: '너를 치다', parsing: '히필 미완료 3남단 + 2남단 접미사', root: 'נכה' },
      { word: 'וְיָרֵחַ', gloss: '그리고 달이', parsing: '접속사 + 남성 명사', root: 'ירח' },
      { word: 'בַּלָּיְלָה', gloss: '밤에', parsing: '전치사 ב + 정관사 + 남성 명사', root: 'לילה' },
    ],
  },
  // ===== Psalm 121:7 =====
  {
    ref: 'Ps 121:7',
    text: 'יְהוָה יִשְׁמָרְךָ מִכָּל־רָע יִשְׁמֹר אֶת־נַפְשֶׁךָ',
    translation: '여호와께서 모든 환난에서 너를 지키시며 네 영혼을 지키시리로다',
    words: [
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유 명사' },
      { word: 'יִשְׁמָרְךָ', gloss: '너를 지키시리라', parsing: '칼 미완료 3남단 + 2남단 접미사', root: 'שׁמר' },
      { word: 'מִכָּל', gloss: '모든 ~에서', parsing: '전치사 מן + 연계형 남성 명사', root: 'כל' },
      { word: 'רָע', gloss: '악, 환난', parsing: '남성 단수 형용사/명사', root: 'רע' },
      { word: 'יִשְׁמֹר', gloss: '지키시리라', parsing: '칼 미완료 3인칭 남성 단수', root: 'שׁמר' },
      { word: 'אֶת־נַפְשֶׁךָ', gloss: '네 영혼을', parsing: '목적어 표지 + 여성 명사 + 2남단 접미사', root: 'נפשׁ' },
    ],
  },
  // ===== Psalm 121:8 =====
  {
    ref: 'Ps 121:8',
    text: 'יְהוָה יִשְׁמָר־צֵאתְךָ וּבוֹאֶךָ מֵעַתָּה וְעַד־עוֹלָם',
    translation: '여호와께서 너의 출입을 지금부터 영원까지 지키시리로다',
    words: [
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유 명사' },
      { word: 'יִשְׁמָר', gloss: '지키시리라', parsing: '칼 미완료 3인칭 남성 단수', root: 'שׁמר' },
      { word: 'צֵאתְךָ', gloss: '네 나감을', parsing: '칼 부정사 연계형 + 2남단 접미사', root: 'יצא' },
      { word: 'וּבוֹאֶךָ', gloss: '그리고 네 들어옴을', parsing: '접속사 + 칼 부정사 연계형 + 2남단 접미사', root: 'בוא' },
      { word: 'מֵעַתָּה', gloss: '지금부터', parsing: '전치사 מן + 부사', root: 'עתה' },
      { word: 'וְעַד', gloss: '그리고 ~까지', parsing: '접속사 + 전치사' },
      { word: 'עוֹלָם', gloss: '영원', parsing: '남성 단수 명사', root: 'עולם' },
    ],
  },
];
