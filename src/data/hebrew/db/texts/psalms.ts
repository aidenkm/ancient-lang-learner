import { VerseData } from '../../../../types';

/**
 * Psalm 23:1-6 — word-by-word parsing (BHS/Leningrad Codex)
 * Korean glosses and translations.
 */
export const psalmTexts: VerseData[] = [
  // ===== Psalm 23:1 =====
  {
    ref: 'Ps 23:1',
    text: 'מִזְמוֹר לְדָוִד יְהוָה רֹעִי לֹא אֶחְסָר',
    translation: '다윗의 시. 여호와는 나의 목자시니 내가 부족함이 없으리로다',
    words: [
      { word: 'מִזְמוֹר', gloss: '시, 찬송', parsing: '남성 단수 명사', root: 'זמר' },
      { word: 'לְדָוִד', gloss: '다윗의', parsing: '전치사 ל + 고유명사' },
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유명사 (하나님의 이름)' },
      { word: 'רֹעִי', gloss: '나의 목자', parsing: '칼 분사 남단 + 1단 접미사', root: 'רעה' },
      { word: 'לֹא', gloss: '~않다', parsing: '부정 부사' },
      { word: 'אֶחְסָר', gloss: '부족하다', parsing: '칼 미완료 1인칭 공성 단수', root: 'חסר' },
    ],
  },
  // ===== Psalm 23:2 =====
  {
    ref: 'Ps 23:2',
    text: 'בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי',
    translation: '그가 나를 푸른 풀밭에 누이시며 쉴 만한 물가로 인도하시는도다',
    words: [
      { word: 'בִּנְאוֹת', gloss: '풀밭에', parsing: '전치사 ב + 여성 복수 연계형 명사', root: 'נאוה' },
      { word: 'דֶּשֶׁא', gloss: '풀', parsing: '남성 단수 명사' },
      { word: 'יַרְבִּיצֵנִי', gloss: '나를 누이신다', parsing: '히필 미완료 3남단 + 1단 접미사', root: 'רבץ' },
      { word: 'עַל', gloss: '~곁에', parsing: '전치사' },
      { word: 'מֵי', gloss: '물', parsing: '남성 복수 연계형 명사', root: 'מים' },
      { word: 'מְנֻחוֹת', gloss: '쉼의, 잔잔한', parsing: '여성 복수 명사', root: 'מנוחה' },
      { word: 'יְנַהֲלֵנִי', gloss: '나를 인도하신다', parsing: '피엘 미완료 3남단 + 1단 접미사', root: 'נהל' },
    ],
  },
  // ===== Psalm 23:3 =====
  {
    ref: 'Ps 23:3',
    text: 'נַפְשִׁי יְשׁוֹבֵב יַנְחֵנִי בְמַעְגְּלֵי־צֶדֶק לְמַעַן שְׁמוֹ',
    translation: '내 영혼을 소생시키시고 그의 이름을 위하여 의의 길로 인도하시는도다',
    words: [
      { word: 'נַפְשִׁי', gloss: '내 영혼을', parsing: '여성 명사 + 1단 접미사', root: 'נפשׁ' },
      { word: 'יְשׁוֹבֵב', gloss: '회복시키신다', parsing: '폴렐 미완료 3남단', root: 'שׁוב' },
      { word: 'יַנְחֵנִי', gloss: '나를 이끄신다', parsing: '히필 미완료 3남단 + 1단 접미사', root: 'נחה' },
      { word: 'בְמַעְגְּלֵי', gloss: '길에서', parsing: '전치사 ב + 남성 복수 연계형 명사', root: 'מעגל' },
      { word: 'צֶדֶק', gloss: '의, 공의', parsing: '남성 단수 명사' },
      { word: 'לְמַעַן', gloss: '~을 위하여', parsing: '접속사/전치사' },
      { word: 'שְׁמוֹ', gloss: '그의 이름', parsing: '남성 명사 + 3남단 접미사', root: 'שׁם' },
    ],
  },
  // ===== Psalm 23:4 =====
  {
    ref: 'Ps 23:4',
    text: 'גַּם כִּי־אֵלֵךְ בְּגֵיא צַלְמָוֶת לֹא־אִירָא רָע כִּי־אַתָּה עִמָּדִי שִׁבְטְךָ וּמִשְׁעַנְתֶּךָ הֵמָּה יְנַחֲמֻנִי',
    translation: '내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다',
    words: [
      { word: 'גַּם', gloss: '~조차, ~도', parsing: '부사' },
      { word: 'כִּי', gloss: '비록 (~할지라도)', parsing: '접속사' },
      { word: 'אֵלֵךְ', gloss: '내가 걸을지라도', parsing: '칼 미완료 1공단', root: 'הלך' },
      { word: 'בְּגֵיא', gloss: '골짜기에서', parsing: '전치사 ב + 남성 명사', root: 'גיא' },
      { word: 'צַלְמָוֶת', gloss: '사망의 그늘', parsing: '남성 단수 명사' },
      { word: 'לֹא', gloss: '~않다', parsing: '부정 부사' },
      { word: 'אִירָא', gloss: '두려워하다', parsing: '칼 미완료 1공단', root: 'ירא' },
      { word: 'רָע', gloss: '악/해', parsing: '남성 단수 형용사/명사' },
      { word: 'כִּי', gloss: '왜냐하면', parsing: '접속사' },
      { word: 'אַתָּה', gloss: '당신이', parsing: '2인칭 남성 단수 대명사' },
      { word: 'עִמָּדִי', gloss: '나와 함께', parsing: '전치사 עם + 1단 접미사' },
      { word: 'שִׁבְטְךָ', gloss: '당신의 지팡이', parsing: '남성 명사 + 2남단 접미사', root: 'שׁבט' },
      { word: 'וּמִשְׁעַנְתֶּךָ', gloss: '그리고 당신의 막대기', parsing: '접속사 + 여성 명사 + 2남단 접미사', root: 'משׁענת' },
      { word: 'הֵמָּה', gloss: '그것들이', parsing: '3인칭 남성 복수 대명사' },
      { word: 'יְנַחֲמֻנִי', gloss: '나를 위로한다', parsing: '피엘 미완료 3남복 + 1단 접미사', root: 'נחם' },
    ],
  },
  // ===== Psalm 23:5 =====
  {
    ref: 'Ps 23:5',
    text: 'תַּעֲרֹךְ לְפָנַי שֻׁלְחָן נֶגֶד צֹרְרָי דִּשַּׁנְתָּ בַשֶּׁמֶן רֹאשִׁי כּוֹסִי רְוָיָה',
    translation: '주께서 내 원수의 목전에서 내게 상을 차려 주시고 기름을 내 머리에 부으셨으니 내 잔이 넘치나이다',
    words: [
      { word: 'תַּעֲרֹךְ', gloss: '차려 주신다', parsing: '칼 미완료 2남단', root: 'ערך' },
      { word: 'לְפָנַי', gloss: '내 앞에', parsing: '전치사 ל + 남복 연계형 + 1단 접미', root: 'פנים' },
      { word: 'שֻׁלְחָן', gloss: '식탁, 상', parsing: '남성 단수 명사' },
      { word: 'נֶגֶד', gloss: '앞에, 맞은편에', parsing: '전치사' },
      { word: 'צֹרְרָי', gloss: '나의 원수들', parsing: '칼 분사 남복 + 1단 접미', root: 'צרר' },
      { word: 'דִּשַּׁנְתָּ', gloss: '기름 부으셨다', parsing: '피엘 완료 2남단', root: 'דשׁן' },
      { word: 'בַשֶּׁמֶן', gloss: '기름으로', parsing: '전치사 ב + 정관사 + 남성 명사', root: 'שׁמן' },
      { word: 'רֹאשִׁי', gloss: '나의 머리', parsing: '남성 명사 + 1단 접미사', root: 'ראשׁ' },
      { word: 'כּוֹסִי', gloss: '나의 잔', parsing: '여성 명사 + 1단 접미사', root: 'כוס' },
      { word: 'רְוָיָה', gloss: '넘침, 충만', parsing: '여성 단수 명사', root: 'רוה' },
    ],
  },
  // ===== Psalm 23:6 =====
  {
    ref: 'Ps 23:6',
    text: 'אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי כָּל־יְמֵי חַיָּי וְשַׁבְתִּי בְּבֵית־יְהוָה לְאֹרֶךְ יָמִים',
    translation: '확실히 선하심과 인자하심이 내 평생에 나를 따르리니 내가 여호와의 집에 영원히 살리로다',
    words: [
      { word: 'אַךְ', gloss: '확실히, 오직', parsing: '부사' },
      { word: 'טוֹב', gloss: '선함', parsing: '남성 단수 명사/형용사' },
      { word: 'וָחֶסֶד', gloss: '그리고 인자', parsing: '접속사 + 남성 단수 명사', root: 'חסד' },
      { word: 'יִרְדְּפוּנִי', gloss: '나를 따르리라', parsing: '칼 미완료 3남복 + 1단 접미사', root: 'רדף' },
      { word: 'כָּל', gloss: '모든', parsing: '남성 명사 (연계형)' },
      { word: 'יְמֵי', gloss: '날들의', parsing: '남성 복수 연계형 명사', root: 'יום' },
      { word: 'חַיָּי', gloss: '나의 생애', parsing: '남성 복수 명사 + 1단 접미사', root: 'חיים' },
      { word: 'וְשַׁבְתִּי', gloss: '그리고 내가 거하리라', parsing: '와카탈 칼 완료 1공단', root: 'שׁוב' },
      { word: 'בְּבֵית', gloss: '~의 집에', parsing: '전치사 ב + 남성 연계형 명사', root: 'בית' },
      { word: 'יְהוָה', gloss: '여호와', parsing: '고유명사' },
      { word: 'לְאֹרֶךְ', gloss: '오랫동안', parsing: '전치사 ל + 남성 명사', root: 'ארך' },
      { word: 'יָמִים', gloss: '날들', parsing: '남성 복수 명사', root: 'יום' },
    ],
  },
];
